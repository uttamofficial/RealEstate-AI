import { NextRequest, NextResponse } from 'next/server';
import { GroqAIService } from '@/lib/groq-ai-service';

// Cache for storing AI analysis results
const aiCache = new Map();
const AI_CACHE_DURATION = 10 * 60 * 1000; // 10 minutes for AI results

export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();
    
    if (!action || !data) {
      return NextResponse.json(
        { error: 'Action and data are required' },
        { status: 400 }
      );
    }

    // Create cache key based on action and data
    const cacheKey = `${action}-${JSON.stringify(data)}`;
    const cachedResult = aiCache.get(cacheKey);
    
    if (cachedResult && Date.now() - cachedResult.timestamp < AI_CACHE_DURATION) {
      return NextResponse.json({
        ...cachedResult.data,
        cached: true,
        cacheAge: Date.now() - cachedResult.timestamp
      });
    }

    let result;
    
    switch (action) {
      case 'analyzeDeal':
        result = await GroqAIService.analyzeRealEstateDeal(data);
        break;
      
      case 'generateMarketInsights':
        result = await GroqAIService.generateMarketInsights(data);
        break;
      
      case 'generateInvestmentReport':
        result = await GroqAIService.generateInvestmentReport(data);
        break;
      
      default:
        return NextResponse.json(
          { error: 'Invalid action specified' },
          { status: 400 }
        );
    }
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'AI analysis failed' },
        { status: 500 }
      );
    }

    // Cache successful AI results
    aiCache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    });

    // Clean up old cache entries
    if (aiCache.size > 50) {
      const now = Date.now();
      for (const [key, value] of aiCache.entries()) {
        if (now - value.timestamp > AI_CACHE_DURATION) {
          aiCache.delete(key);
        }
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
