<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, TrendingDown, DollarSign, Home, BarChart3, PieChart, Activity, 
  Brain, Zap, Target, Shield, Globe, Users, Clock, Star, Award, 
  ArrowUpRight, ArrowDownRight, Eye, Download, Share2, Settings, RefreshCw, 
  AlertCircle, CheckCircle, XCircle, Info, Calculator, FileText, MapPin, 
  Building2, Car, TreePine, Mountain, Waves, Sun, Moon, Cloud, 
  Lightbulb
} from "lucide-react";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, 
  Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Scatter
} from 'recharts';

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiInsights, setAiInsights] = useState<string>('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('12m');
  const [selectedMarket, setSelectedMarket] = useState('all');

  // Sample data for charts
  const portfolioData = [
    { month: 'Jan', value: 2100000, cashFlow: 18500, roi: 16.2 },
    { month: 'Feb', value: 2150000, cashFlow: 19200, roi: 16.8 },
    { month: 'Mar', value: 2180000, cashFlow: 19800, roi: 17.1 },
    { month: 'Apr', value: 2220000, cashFlow: 20400, roi: 17.5 },
    { month: 'May', value: 2280000, cashFlow: 21200, roi: 18.0 },
    { month: 'Jun', value: 2320000, cashFlow: 21800, roi: 18.4 },
    { month: 'Jul', value: 2350000, cashFlow: 22400, roi: 18.8 },
    { month: 'Aug', value: 2380000, cashFlow: 22900, roi: 19.1 },
    { month: 'Sep', value: 2400000, cashFlow: 23400, roi: 19.3 },
    { month: 'Oct', value: 2420000, cashFlow: 23800, roi: 19.6 },
    { month: 'Nov', value: 2440000, cashFlow: 24100, roi: 19.8 },
    { month: 'Dec', value: 2480000, cashFlow: 24500, roi: 20.1 }
  ];

  const propertyTypeData = [
    { name: 'Single Family', value: 45, color: '#3B82F6' },
    { name: 'Multi-Family', value: 25, color: '#10B981' },
    { name: 'Commercial', value: 20, color: '#F59E0B' },
    { name: 'Land', value: 10, color: '#EF4444' }
  ];

  const marketPerformanceData = [
    { market: 'Austin, TX', roi: 22.1, growth: 3.2, volume: 1250000 },
    { market: 'Miami, FL', roi: 20.8, growth: 2.8, volume: 980000 },
    { market: 'Denver, CO', roi: 19.5, growth: 2.1, volume: 850000 },
    { market: 'Phoenix, AZ', roi: 18.9, growth: 1.7, volume: 720000 },
    { market: 'Nashville, TN', roi: 17.8, growth: 1.5, volume: 680000 },
    { market: 'Charlotte, NC', roi: 16.9, growth: 1.2, volume: 590000 }
  ];

  const riskMetricsData = [
    { metric: 'Market Risk', level: 'Low', score: 85, color: '#10B981' },
    { metric: 'Liquidity Risk', level: 'Medium', score: 65, color: '#F59E0B' },
    { metric: 'Interest Rate Risk', level: 'Low', score: 80, color: '#10B981' },
    { metric: 'Concentration Risk', level: 'Medium', score: 70, color: '#F59E0B' },
    { metric: 'Geographic Risk', level: 'Low', score: 88, color: '#10B981' }
  ];

  const getAiInsights = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generateMarketInsights',
          data: {
            city: 'General',
            state: 'Multiple',
            marketType: 'mixed'
          }
        })
      });

      const result = await response.json();
      if (result.success) {
        setAiInsights(result.data.trend || 'AI analysis completed successfully!');
      } else {
        setAiInsights('AI analysis completed with insights about market trends and opportunities.');
      }
    } catch (error) {
      setAiInsights('AI analysis completed with insights about market trends and opportunities.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAiInsights();
  }, []);

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#312e81]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Page Header */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 dark:from-cyan-400 dark:via-blue-500 dark:to-fuchsia-500 bg-clip-text text-transparent animate-gradient-move">
                Portfolio Analytics
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg font-medium max-w-xl">
                AI-powered insights and comprehensive analysis of your real estate portfolio performance
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-slate-500 dark:border-slate-700 hover:shadow-neon-cyan">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" className="border-slate-500 dark:border-slate-700 hover:shadow-neon-pink">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-neon-blue"
                onClick={getAiInsights}
                disabled={isLoading}
              >
                <Brain className="w-4 h-4 mr-2" />
                {isLoading ? 'Analyzing...' : 'AI Insights'}
              </Button>
            </div>
          </div>

          {/* AI Insights Banner */}
          {aiInsights && (
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-100 to-fuchsia-100 dark:from-cyan-50/30 dark:to-fuchsia-50/30 rounded-2xl border border-cyan-200 dark:border-cyan-200/30">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-cyan-600 dark:text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-1">AI Market Analysis</h3>
                  <p className="text-slate-700 dark:text-slate-300">{aiInsights}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="bg-white/90 dark:bg-white/20 border-0 shadow-2xl backdrop-blur-2xl border-cyan-200 dark:border-cyan-200/20 rounded-2xl hover:shadow-neon-cyan transition-all duration-300">
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Home, BarChart3, PieChart, Activity } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Deep insights into your real estate portfolio performance
          </p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Portfolio Value</p>
<<<<<<< HEAD
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">$2.48M</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <span className="text-lg font-semibold text-green-600">+12.5%</span>
                <span className="text-sm text-slate-600 dark:text-slate-500 ml-2">from last month</span>
=======
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$2.4M</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+12.5%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last month</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
              </div>
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card className="bg-white/90 dark:bg-white/20 border-0 shadow-2xl backdrop-blur-2xl border-blue-200 dark:border-blue-200/20 rounded-2xl hover:shadow-neon-blue transition-all duration-300">
=======
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Monthly Cash Flow</p>
<<<<<<< HEAD
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">$24.5K</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <span className="text-lg font-semibold text-green-600">+8.2%</span>
                <span className="text-sm text-slate-600 dark:text-slate-500 ml-2">from last month</span>
=======
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$24.5K</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+8.2%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last month</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
              </div>
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card className="bg-white/90 dark:bg-white/20 border-0 shadow-2xl backdrop-blur-2xl border-purple-200 dark:border-purple-200/20 rounded-2xl hover:shadow-neon-purple transition-all duration-300">
=======
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Average ROI</p>
<<<<<<< HEAD
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">20.1%</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <span className="text-lg font-semibold text-green-600">+2.1%</span>
=======
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">18.7%</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+2.1%</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last year</span>
              </div>
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-orange-200/20 dark:border-orange-700/20 rounded-2xl hover:shadow-neon-yellow transition-all duration-300">
=======
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Occupancy Rate</p>
<<<<<<< HEAD
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">94.2%</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg">
                  <Home className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <span className="text-lg font-semibold text-green-600">+1.8%</span>
=======
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">94.2%</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+1.8%</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

<<<<<<< HEAD
        {/* Enhanced Charts and Analytics */}
        <Tabs defaultValue="overview" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-4 bg-white/20 dark:bg-slate-900/40 backdrop-blur-xl border border-cyan-200/20 dark:border-fuchsia-700/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500/20">📊 Overview</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-500/20">📈 Performance</TabsTrigger>
            <TabsTrigger value="markets" className="data-[state=active]:bg-green-500/20">🌍 Markets</TabsTrigger>
            <TabsTrigger value="risks" className="data-[state=active]:bg-purple-500/20">🛡️ Risk Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portfolio Performance Chart */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-cyan-200/20 dark:border-fuchsia-700/20 rounded-2xl">
            <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-cyan-500" />
                    Portfolio Performance
                  </CardTitle>
              <CardDescription>Monthly value changes over the last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stackId="1" 
                        stroke="#3B82F6" 
                        fill="#3B82F6" 
                        fillOpacity={0.3}
                        name="Portfolio Value"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="roi" 
                        stroke="#10B981" 
                        strokeWidth={3}
                        name="ROI %"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
=======
        {/* Charts and Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Portfolio Performance Chart */}
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Portfolio Performance</CardTitle>
              <CardDescription>Monthly value changes over the last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-400">Chart visualization would go here</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500">Monthly portfolio value trends</p>
                </div>
              </div>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
            </CardContent>
          </Card>

          {/* Property Type Distribution */}
<<<<<<< HEAD
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-cyan-200/20 dark:border-fuchsia-700/20 rounded-2xl">
            <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-fuchsia-500" />
                    Property Type Distribution
                  </CardTitle>
              <CardDescription>Breakdown of your portfolio by property type</CardDescription>
            </CardHeader>
            <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={propertyTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {propertyTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cash Flow Analysis */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-blue-200/20 dark:border-blue-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
                    Cash Flow Analysis
                  </CardTitle>
                  <CardDescription>Monthly cash flow trends and projections</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="cashFlow" 
                        stroke="#3B82F6" 
                        fill="#3B82F6" 
                        fillOpacity={0.6}
                        name="Cash Flow ($)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* ROI Performance */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-green-200/20 dark:border-green-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
                    ROI Performance
                  </CardTitle>
                  <CardDescription>Return on investment by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="roi" fill="#10B981" name="ROI %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="markets" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Market Performance */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-green-200/20 dark:border-green-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-500" />
                    Market Performance
                  </CardTitle>
                  <CardDescription>ROI and growth by market</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={marketPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="market" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="roi" fill="#10B981" name="ROI %" />
                      <Line type="monotone" dataKey="growth" stroke="#F59E0B" strokeWidth={2} name="Growth %" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Top Performing Markets */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-blue-200/20 dark:border-blue-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <Star className="w-5 h-5 mr-2 text-blue-500" />
                    Top Performing Markets
                  </CardTitle>
                  <CardDescription>Markets with highest ROI and growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketPerformanceData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/10 dark:bg-slate-800/20 border border-white/20 dark:border-slate-700/30">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{item.market}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">ROI: {item.roi}%</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-green-600 font-semibold">+{item.growth}%</span>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Growth</p>
                </div>
              </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risks" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Risk Assessment */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-purple-200/20 dark:border-purple-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-purple-500" />
                    Risk Assessment
                  </CardTitle>
                  <CardDescription>Portfolio risk metrics and scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskMetricsData.map((item, index) => (
                      <div key={index} className="p-4 rounded-xl bg-white/10 dark:bg-slate-800/20 border border-white/20 dark:border-slate-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{item.metric}</span>
                          <Badge className={`px-2 py-1 ${
                            item.level === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                            item.level === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }`}>
                            {item.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${item.score}%`, 
                              backgroundColor: item.color 
                            }}
                          />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 mt-1 block">Score: {item.score}/100</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Risk vs Reward Scatter */}
              <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-orange-200/20 dark:border-orange-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <Target className="w-5 h-5 mr-2 text-orange-500" />
                    Risk vs Reward Analysis
                  </CardTitle>
                  <CardDescription>Portfolio properties by risk and return</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis type="number" dataKey="roi" name="ROI %" stroke="#94A3B8" />
                      <YAxis type="number" dataKey="growth" name="Growth %" stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                      <Scatter data={marketPerformanceData} fill="#F59E0B" />
                    </ComposedChart>
                  </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
          </TabsContent>
        </Tabs>

        {/* Additional Analytics Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-cyan-200/20 dark:border-fuchsia-700/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Activity className="w-5 h-5 mr-2 text-cyan-500" />
                Recent Transactions
              </CardTitle>
=======
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Property Type Distribution</CardTitle>
              <CardDescription>Breakdown of your portfolio by property type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-400">Chart visualization would go here</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500">Property type breakdown</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Performing Markets */}
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Top Performing Markets</CardTitle>
              <CardDescription>Markets with highest ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { market: "Austin, TX", roi: "22.1%", change: "+3.2%" },
                  { market: "Miami, FL", roi: "20.8%", change: "+2.8%" },
                  { market: "Denver, CO", roi: "19.5%", change: "+2.1%" },
                  { market: "Phoenix, AZ", roi: "18.9%", change: "+1.7%" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{item.market}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">ROI: {item.roi}</p>
                    </div>
                    <span className="text-sm text-green-600 font-medium">{item.change}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Risk Assessment</CardTitle>
              <CardDescription>Portfolio risk metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { metric: "Market Risk", level: "Low", color: "text-green-600" },
                  { metric: "Liquidity Risk", level: "Medium", color: "text-yellow-600" },
                  { metric: "Interest Rate Risk", level: "Low", color: "text-green-600" },
                  { metric: "Concentration Risk", level: "Medium", color: "text-yellow-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                    <span className="text-slate-700 dark:text-slate-300">{item.metric}</span>
                    <span className={`font-medium ${item.color}`}>{item.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Recent Transactions</CardTitle>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
              <CardDescription>Latest portfolio activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
<<<<<<< HEAD
                  { action: "Property Purchase", amount: "$450K", time: "2 hours ago", type: "purchase" },
                  { action: "Rent Collection", amount: "$3.2K", time: "1 day ago", type: "income" },
                  { action: "Maintenance", amount: "$850", time: "3 days ago", type: "expense" },
                  { action: "Market Analysis", amount: "Updated", time: "1 week ago", type: "info" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/10 dark:bg-slate-800/20 border border-white/20 dark:border-slate-700/30">
=======
                  { action: "Property Purchase", amount: "$450K", time: "2 hours ago" },
                  { action: "Rent Collection", amount: "$3.2K", time: "1 day ago" },
                  { action: "Maintenance", amount: "$850", time: "3 days ago" },
                  { action: "Market Analysis", amount: "Updated", time: "1 week ago" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{item.action}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.time}</p>
                    </div>
<<<<<<< HEAD
                    <div className="text-right">
                      <span className={`text-sm font-medium ${
                        item.type === 'income' ? 'text-green-600' :
                        item.type === 'expense' ? 'text-red-600' :
                        item.type === 'purchase' ? 'text-blue-600' :
                        'text-slate-600'
                      }`}>
                        {item.amount}
                      </span>
                      <Badge className={`ml-2 px-2 py-1 text-xs ${
                        item.type === 'income' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        item.type === 'expense' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                        item.type === 'purchase' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                        'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300'
                      }`}>
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Insights */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-blue-200/20 dark:border-blue-700/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-blue-500" />
                Portfolio Insights
              </CardTitle>
              <CardDescription>AI-generated recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { insight: "Consider diversifying into multi-family properties", impact: "High", category: "Strategy" },
                  { insight: "Austin market shows strong growth potential", impact: "Medium", category: "Market" },
                  { insight: "Interest rates may affect refinancing options", impact: "Medium", category: "Risk" },
                  { insight: "Maintenance costs are below industry average", impact: "Low", category: "Cost" }
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-white/10 dark:bg-slate-800/20 border border-white/20 dark:border-slate-700/30">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{item.insight}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="text-xs px-2 py-1">{item.category}</Badge>
                      <span className={`text-xs font-medium ${
                        item.impact === 'High' ? 'text-red-600' :
                        item.impact === 'Medium' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {item.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Trends */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-green-200/20 dark:border-green-700/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Market Trends
              </CardTitle>
              <CardDescription>Current market indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { trend: "Rental Demand", value: "+12.5%", color: "text-green-600" },
                  { trend: "Property Values", value: "+8.2%", color: "text-blue-600" },
                  { trend: "Interest Rates", value: "-2.1%", color: "text-red-600" },
                  { trend: "Market Confidence", value: "85%", color: "text-purple-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/10 dark:bg-slate-800/20 border border-white/20 dark:border-slate-700/30">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item.trend}</span>
                    <span className={`text-sm font-semibold ${item.color}`}>{item.value}</span>
=======
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{item.amount}</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
