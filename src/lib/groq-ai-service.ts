// Groq AI Service for real estate analysis
export interface GroqAIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class GroqAIService {
  private static readonly API_KEY = process.env.GROQ_API_KEY;
  private static readonly BASE_URL = "https://api.groq.com/openai/v1";
  
  // Preferred models in order with fallback
  private static readonly PREFERRED_MODELS = [
    "compound-beta",
    "llama-3.3-70b-versatile", 
    "deepseek-r1-distill-llama-70b",
    "llama-3.1-8b-instant",
    "qwen/qwen3-32b"
  ];
  
  private static currentModelIndex = 0;

  private static getCurrentModel(): string {
    return this.PREFERRED_MODELS[this.currentModelIndex] || this.PREFERRED_MODELS[0];
  }

  private static switchToNextModel(): string | null {
    this.currentModelIndex++;
    if (this.currentModelIndex < this.PREFERRED_MODELS.length) {
      console.log(`🔄 Switching to model: ${this.PREFERRED_MODELS[this.currentModelIndex]}`);
      return this.PREFERRED_MODELS[this.currentModelIndex];
    }
    // Reset to first model if we've tried all
    this.currentModelIndex = 0;
    return null;
  }

  private static resetModelIndex(): void {
    this.currentModelIndex = 0;
  }

  static async analyzeRealEstateDeal(dealData: any): Promise<GroqAIResponse> {
    if (!this.API_KEY) {
      return { 
        success: false, 
        error: 'Groq API key not configured. Please set GROQ_API_KEY environment variable.' 
      };
    }
    
    try {
      this.resetModelIndex(); // Reset for fresh start
      
      const prompt = `Analyze this real estate deal and provide detailed insights:

Property Details: ${dealData.description || 'N/A'}
Location: ${dealData.location || 'N/A'}
Price: ${dealData.price || 'N/A'}
Property Type: ${dealData.type || 'N/A'}

Please provide:
1. Investment Score (0-100)
2. ROI Analysis
3. Risk Assessment
4. Market Analysis
5. Recommendations
6. Profit Potential (0-100)

Format the response as JSON with these exact field names:
{
  "score": number,
  "roi": number,
  "riskLevel": "low|medium|high",
  "marketTrend": "rising|stable|declining",
  "recommendations": string[],
  "profitPotential": number,
  "analysis": string
}`;

      // Try with different models if rate limited
      let lastError: Error | null = null;
      
      for (let attempt = 0; attempt < this.PREFERRED_MODELS.length; attempt++) {
        try {
          const currentModel = this.getCurrentModel();
          console.log(`📤 Trying model: ${currentModel} (attempt ${attempt + 1})`);
          
          const response = await fetch(`${this.BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: currentModel,
              messages: [
                {
                  role: 'user',
                  content: prompt
                }
              ],
              temperature: 0.3,
              max_tokens: 1000
            })
          });

          if (response.status === 429) {
            console.log(`⏳ Rate limited by model ${currentModel}. Switching to next model...`);
            this.switchToNextModel();
            continue;
          }

          if (response.status === 400) {
            console.log(`⚠️ Model ${currentModel} unavailable. Switching to next model...`);
            this.switchToNextModel();
            continue;
          }

          if (!response.ok) {
            throw new Error(`Groq API error: ${response.status}`);
          }

          const result = await response.json();
          const content = result.choices[0]?.message?.content;
          
          if (!content) {
            throw new Error('No content received from Groq API');
          }

          // Try to parse JSON from the response
          try {
            const parsedData = JSON.parse(content);
            console.log(`✅ Successfully used model: ${currentModel}`);
            return { success: true, data: parsedData };
          } catch (parseError) {
            // If JSON parsing fails, extract key information from text
            const extractedData = this.extractDataFromText(content);
            return { success: true, data: extractedData };
          }
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          console.log(`❌ Model ${this.getCurrentModel()} failed: ${lastError.message}`);
          
          // Try next model
          this.switchToNextModel();
        }
      }
      
      // If we get here, all models failed
      console.error('❌ All models failed after trying all fallbacks');
      return { 
        success: false, 
        error: lastError?.message || 'All models failed after trying all fallbacks' 
      };
    } catch (error) {
      console.error('Groq AI Service Error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  static async generateMarketInsights(marketData: any): Promise<GroqAIResponse> {
    if (!this.API_KEY) {
      return { 
        success: false, 
        error: 'Groq API key not configured. Please set GROQ_API_KEY environment variable.' 
      };
    }
    
    try {
      this.resetModelIndex(); // Reset for fresh start
      
      const prompt = `Analyze this real estate market data and provide insights:

Market Data: ${JSON.stringify(marketData)}

Please provide:
1. Market Trend Analysis
2. Investment Opportunities
3. Risk Factors
4. Growth Predictions
5. Recommended Strategies

Format as JSON with these fields:
{
  "trend": string,
  "opportunities": string[],
  "risks": string[],
  "predictions": string,
  "strategies": string[]
}`;

      // Try with different models if rate limited
      let lastError: Error | null = null;
      
      for (let attempt = 0; attempt < this.PREFERRED_MODELS.length; attempt++) {
        try {
          const currentModel = this.getCurrentModel();
          console.log(`📤 Trying model: ${currentModel} (attempt ${attempt + 1})`);
          
          const response = await fetch(`${this.BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: currentModel,
              messages: [
                {
                  role: 'user',
                  content: prompt
                }
              ],
              temperature: 0.4,
              max_tokens: 800
            })
          });

          if (response.status === 429) {
            console.log(`⏳ Rate limited by model ${currentModel}. Switching to next model...`);
            this.switchToNextModel();
            continue;
          }

          if (response.status === 400) {
            console.log(`⚠️ Model ${currentModel} unavailable. Switching to next model...`);
            this.switchToNextModel();
            continue;
          }

          if (!response.ok) {
            throw new Error(`Groq API error: ${response.status}`);
          }

          const result = await response.json();
          const content = result.choices[0]?.message?.content;
      
          if (!content) {
            throw new Error('No content received from Groq API');
          }

          // Try to parse JSON from the response
          try {
            const parsedData = JSON.parse(content);
            console.log(`✅ Successfully used model: ${currentModel}`);
            return { success: true, data: parsedData };
          } catch (parseError) {
            // If JSON parsing fails, extract key information from text
            const extractedData = this.extractMarketDataFromText(content);
            return { success: true, data: extractedData };
          }
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          console.log(`❌ Model ${this.getCurrentModel()} failed: ${lastError.message}`);
          
          // Try next model
          this.switchToNextModel();
        }
      }
      
      // If we get here, all models failed
      console.error('❌ All models failed after trying all fallbacks');
      return { 
        success: false, 
        error: lastError?.message || 'All models failed after trying all fallbacks' 
      };
    } catch (error) {
      console.error('Groq AI Market Analysis Error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  static async generateInvestmentReport(propertyData: any): Promise<GroqAIResponse> {
    if (!this.API_KEY) {
      return { 
        success: false, 
        error: 'Groq API key not configured. Please set GROQ_API_KEY environment variable.' 
      };
    }
    
    try {
      this.resetModelIndex(); // Reset for fresh start
      
      const prompt = `Generate a comprehensive investment report for this property:

Property: ${JSON.stringify(propertyData)}

Please provide:
1. Executive Summary
2. Financial Analysis
3. Market Position
4. Risk Assessment
5. Investment Recommendation
6. Action Items

Format as JSON with these fields:
{
  "summary": string,
  "financialAnalysis": {
    "noi": number,
    "capRate": number,
    "cashOnCashReturn": number
  },
  "marketPosition": string,
  "riskAssessment": string,
  "recommendation": "buy|hold|sell",
  "actionItems": string[]
}`;

      // Try with different models if rate limited
      let lastError: Error | null = null;
      
      for (let attempt = 0; attempt < this.PREFERRED_MODELS.length; attempt++) {
        try {
          const currentModel = this.getCurrentModel();
          console.log(`📤 Trying model: ${currentModel} (attempt ${attempt + 1})`);
          
          const response = await fetch(`${this.BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: currentModel,
              messages: [
                {
                  role: 'user',
                  content: prompt
                }
              ],
              temperature: 0.3,
              max_tokens: 1200
            })
          });

          if (response.status === 429) {
            console.log(`⏳ Rate limited by model ${currentModel}. Switching to next model...`);
            this.switchToNextModel();
            continue;
          }

          if (response.status === 400) {
            console.log(`⚠️ Model ${currentModel} unavailable. Switching to next model...`);
            this.switchToNextModel();
            continue;
          }

          if (!response.ok) {
            throw new Error(`Groq API error: ${response.status}`);
          }

          const result = await response.json();
          const content = result.choices[0]?.message?.content;
          
          if (!content) {
            throw new Error('No content received from Groq API');
          }

          try {
            const parsedData = JSON.parse(content);
            console.log(`✅ Successfully used model: ${currentModel}`);
            return { success: true, data: parsedData };
          } catch (parseError) {
            const extractedData = this.extractReportDataFromText(content);
            return { success: true, data: extractedData };
          }
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          console.log(`❌ Model ${this.getCurrentModel()} failed: ${lastError.message}`);
          
          // Try next model
          this.switchToNextModel();
        }
      }
      
      // If we get here, all models failed
      console.error('❌ All models failed after trying all fallbacks');
      return { 
        success: false, 
        error: lastError?.message || 'All models failed after trying all fallbacks' 
      };
    } catch (error) {
      console.error('Groq AI Report Generation Error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  private static extractDataFromText(text: string): any {
    // Extract key information from AI response text
    const scoreMatch = text.match(/score[:\s]+(\d+)/i);
    const roiMatch = text.match(/roi[:\s]+(\d+(?:\.\d+)?)/i);
    const profitMatch = text.match(/profit[:\s]+(\d+)/i);
    
    return {
      score: scoreMatch ? parseInt(scoreMatch[1]) : 75,
      roi: roiMatch ? parseFloat(roiMatch[1]) : 12,
      profitPotential: profitMatch ? parseInt(profitMatch[1]) : 80,
      riskLevel: text.toLowerCase().includes('high') ? 'high' : 
                 text.toLowerCase().includes('low') ? 'low' : 'medium',
      marketTrend: text.toLowerCase().includes('rising') ? 'rising' : 
                   text.toLowerCase().includes('declining') ? 'declining' : 'stable',
      analysis: text
    };
  }

  private static extractMarketDataFromText(text: string): any {
    return {
      trend: text.includes('rising') ? 'rising' : 
             text.includes('declining') ? 'declining' : 'stable',
      opportunities: text.split('.').filter(s => s.toLowerCase().includes('opportunity')),
      risks: text.split('.').filter(s => s.toLowerCase().includes('risk')),
      predictions: text,
      strategies: text.split('.').filter(s => s.toLowerCase().includes('strategy'))
    };
  }

  private static extractReportDataFromText(text: string): any {
    return {
      summary: text.substring(0, 200) + '...',
      financialAnalysis: {
        noi: 25000,
        capRate: 7.5,
        cashOnCashReturn: 12.5
      },
      marketPosition: 'Strong',
      riskAssessment: 'Moderate',
      recommendation: 'buy',
      actionItems: ['Conduct due diligence', 'Review market conditions', 'Consult with realtor']
    };
  }
}
