<<<<<<< HEAD
"use client";

import { useState, useEffect, useRef } from "react";
=======
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, DollarSign, Home, BarChart3, Users, Target, Zap, Globe, 
  TrendingDown, Activity, Star, Award, Clock, Calendar, MapPin, ArrowUpRight, 
  ArrowDownRight, Eye, Download, Share2, Bell, Settings, AlertCircle, Calculator, 
  FileText, Bot, Brain, Shield, Rocket, Lightbulb, Cpu, Database, Wifi, 
  Battery, Signal, RefreshCw, Play, Pause, Maximize2, Minimize2, RotateCcw,
  Gauge
} from "lucide-react";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, 
  Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiInsights, setAiInsights] = useState<string>('');
  const [selectedView, setSelectedView] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [systemStatus, setSystemStatus] = useState({
    ai: 'operational',
    database: 'operational',
    market: 'operational',
    security: 'operational'
  });

  // Sample data for charts
  const portfolioData = [
    { month: 'Jan', value: 2100000, cashFlow: 18500, roi: 16.2, properties: 15 },
    { month: 'Feb', value: 2150000, cashFlow: 19200, roi: 16.8, properties: 16 },
    { month: 'Mar', value: 2180000, cashFlow: 19800, roi: 17.1, properties: 16 },
    { month: 'Apr', value: 2220000, cashFlow: 20400, roi: 17.5, properties: 17 },
    { month: 'May', value: 2280000, cashFlow: 21200, roi: 18.0, properties: 17 },
    { month: 'Jun', value: 2320000, cashFlow: 21800, roi: 18.4, properties: 18 },
    { month: 'Jul', value: 2350000, cashFlow: 22400, roi: 18.8, properties: 18 },
    { month: 'Aug', value: 2380000, cashFlow: 22900, roi: 19.1, properties: 18 },
    { month: 'Sep', value: 2400000, cashFlow: 23400, roi: 19.3, properties: 19 },
    { month: 'Oct', value: 2420000, cashFlow: 23800, roi: 19.6, properties: 19 },
    { month: 'Nov', value: 2440000, cashFlow: 24100, roi: 19.8, properties: 19 },
    { month: 'Dec', value: 2480000, cashFlow: 24500, roi: 20.1, properties: 20 }
  ];

  const marketData = [
    { market: 'Austin, TX', roi: 22.1, growth: 3.2, volume: 1250000, risk: 15 },
    { market: 'Miami, FL', roi: 20.8, growth: 2.8, volume: 980000, risk: 25 },
    { market: 'Denver, CO', roi: 19.5, growth: 2.1, volume: 850000, risk: 20 },
    { market: 'Phoenix, AZ', roi: 18.9, growth: 1.7, volume: 720000, risk: 30 },
    { market: 'Nashville, TN', roi: 17.8, growth: 1.5, volume: 680000, risk: 35 }
  ];

  const riskData = [
    { metric: 'Market Risk', score: 85, level: 'Low' },
    { metric: 'Liquidity Risk', score: 65, level: 'Medium' },
    { metric: 'Interest Rate Risk', score: 80, level: 'Low' },
    { metric: 'Concentration Risk', score: 70, level: 'Medium' },
    { metric: 'Geographic Risk', score: 88, level: 'Low' }
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
    // Simulate real-time system status updates
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        ai: Math.random() > 0.95 ? 'warning' : 'operational',
        market: Math.random() > 0.98 ? 'warning' : 'operational'
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return '●';
      case 'warning': return '⚠';
      case 'error': return '✗';
      default: return '○';
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isFullscreen 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#16213e]'
    }`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-500 ${
        isFullscreen ? 'max-w-none' : ''
      }`}>
        {/* Futuristic Header with System Status */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 dark:from-cyan-400 dark:via-blue-500 dark:to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
                COMMAND CENTER
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-3 text-xl font-medium max-w-2xl">
                AI-Powered Real Estate Investment Command Center • Real-time Portfolio Intelligence
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-cyan-500/50 dark:border-cyan-400/30 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 mr-2" /> : <Maximize2 className="w-4 h-4 mr-2" />}
                {isFullscreen ? 'Exit' : 'Fullscreen'}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-fuchsia-500/50 dark:border-fuchsia-400/30 hover:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300"
                onClick={getAiInsights}
                disabled={isLoading}
              >
                <Brain className="w-4 h-4 mr-2" />
                {isLoading ? 'Analyzing...' : 'AI Insights'}
=======
import { TrendingUp, DollarSign, Home, BarChart3, Users, Target, Zap, Globe, TrendingDown, Activity, Star, Award, Clock, Calendar, MapPin, ArrowUpRight, ArrowDownRight, Eye, Download, Share2, Bell, Settings, AlertCircle, Calculator, FileText, Bot } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Page Header with Stats */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 dark:from-white dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent">
                Investment Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-lg">
                Your AI-powered real estate investment command center
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 lg:mt-0">
              <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Settings className="w-4 h-4 mr-2" />
                Customize
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
              </Button>
            </div>
          </div>
          
<<<<<<< HEAD
          {/* System Status Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Object.entries(systemStatus).map(([key, status]) => (
              <div key={key} className="bg-white border-2 border-cyan-300 dark:bg-black/40 dark:border-cyan-500/20 backdrop-blur-xl rounded-xl p-4 shadow-xl dark:shadow-none">
                <div className="flex items-center space-x-3">
                  <span className={`text-2xl ${getStatusColor(status)}`}>{getStatusIcon(status)}</span>
                  <div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 uppercase tracking-wider">{key}</p>
                    <p className={`text-sm font-bold ${getStatusColor(status)}`}>{status}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>

          {/* AI Insights Banner */}
          {aiInsights && (
            <div className="mt-6 p-6 bg-gradient-to-r from-cyan-100 to-fuchsia-100 dark:from-cyan-900/30 dark:to-fuchsia-900/30 rounded-2xl border border-cyan-200 dark:border-cyan-500/30 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
              </div>
                <div className="flex-1">
                  <h3 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2 text-lg">AI Market Analysis</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">{aiInsights}</p>
            </div>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white"
                  onClick={getAiInsights}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
            </div>
          </div>
          )}
        </div>

        {/* Enhanced Navigation Tabs */}
        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-cyan-200 dark:border-cyan-500/20 shadow-lg dark:shadow-none rounded-2xl p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-blue-500/20 text-cyan-700 dark:text-cyan-300">
              🚀 Overview
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-500/20 text-blue-700 dark:text-blue-300">
              📊 Portfolio
            </TabsTrigger>
            <TabsTrigger value="markets" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 text-purple-700 dark:text-purple-300">
              🌍 Markets
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-red-500/20 text-pink-700 dark:text-pink-300">
              🤖 AI Hub
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500/20 data-[state=active]:to-orange-500/20 text-red-700 dark:text-red-300">
              🛠️ Tools
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            {/* Key Performance Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-2 border-cyan-300 dark:bg-black/40 dark:border-cyan-500/20 shadow-xl dark:shadow-2xl rounded-2xl hover:shadow-cyan-400/50 dark:hover:shadow-cyan-500/25 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-400">Total Portfolio Value</p>
                      <p className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">$2.48M</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <span className="text-lg font-semibold text-green-700 dark:text-green-400">+12.5%</span>
                    <span className="text-sm text-slate-700 dark:text-slate-400 ml-2">from last month</span>
                  </div>
                  <Progress value={75} className="mt-3 h-2 bg-slate-300 dark:bg-slate-700" />
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-blue-300 dark:bg-black/40 dark:border-blue-500/20 shadow-xl dark:shadow-2xl rounded-2xl hover:shadow-blue-400/50 dark:hover:shadow-blue-500/25 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-400">Active Properties</p>
                      <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">20</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Home className="w-6 h-6 text-white" />
                    </div>
              </div>
                  <div className="flex items-center mt-3">
                    <span className="text-lg font-semibold text-green-700 dark:text-green-400">+20.0%</span>
                    <span className="text-sm text-slate-700 dark:text-slate-400 ml-2">this quarter</span>
              </div>
                  <Progress value={80} className="mt-3 h-2 bg-slate-300 dark:bg-slate-700" />
            </CardContent>
          </Card>

              <Card className="bg-white border-2 border-purple-300 dark:bg-black/40 dark:border-purple-500/20 shadow-xl dark:shadow-2xl rounded-2xl hover:shadow-purple-400/50 dark:hover:shadow-purple-500/25 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-400">Monthly Cash Flow</p>
                      <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">$24.5K</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
              </div>
                  <div className="flex items-center mt-3">
                    <span className="text-lg font-semibold text-green-700 dark:text-green-400">+8.2%</span>
                    <span className="text-sm text-slate-700 dark:text-slate-400 ml-2">from last month</span>
              </div>
                  <Progress value={82} className="mt-3 h-2 bg-slate-300 dark:bg-slate-700" />
            </CardContent>
          </Card>

              <Card className="bg-white border-2 border-orange-300 dark:bg-black/40 dark:border-orange-500/20 shadow-xl dark:shadow-2xl rounded-2xl hover:shadow-orange-400/50 dark:hover:shadow-orange-500/25 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-400">Average ROI</p>
                      <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">20.1%</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <span className="text-lg font-semibold text-green-400">+2.1%</span>
                    <span className="text-sm text-slate-400 dark:text-slate-400 ml-2">from last year</span>
                  </div>
                  <Progress value={87} className="mt-3 h-2 bg-slate-700" />
                </CardContent>
              </Card>
            </div>

            {/* Portfolio Performance Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-cyan-500/20 dark:border-cyan-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-cyan-300 dark:text-cyan-200 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                    Portfolio Performance
              </CardTitle>
                  <CardDescription className="text-slate-400">Monthly value changes over the last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stackId="1" 
                        stroke="#06b6d4" 
                        fill="#06b6d4" 
                        fillOpacity={0.3}
                        name="Portfolio Value"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="roi" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        name="ROI %"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
            </CardContent>
          </Card>

              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-fuchsia-500/20 dark:border-fuchsia-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-fuchsia-300 dark:text-fuchsia-200 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-fuchsia-400" />
                    Property Growth
              </CardTitle>
                  <CardDescription className="text-slate-400">Property count and cash flow trends</CardDescription>
            </CardHeader>
            <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                      <Bar dataKey="properties" fill="#8b5cf6" name="Properties" />
                      <Line type="monotone" dataKey="cashFlow" stroke="#f59e0b" strokeWidth={2} name="Cash Flow ($)" />
                    </ComposedChart>
                  </ResponsiveContainer>
=======
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Live Status</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">All Systems Operational</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Last Updated</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">2 minutes ago</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Markets</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">12 Active</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-orange-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">AI Score</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">94/100</p>
            </div>
          </div>
        </div>

        {/* Enhanced Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center justify-between">
                Total Portfolio Value
                <TrendingUp className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <span className="text-3xl font-bold text-slate-900 dark:text-white">$2.4M</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+12.5%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">from last month</span>
              </div>
              <Progress value={75} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center justify-between">
                Active Properties
                <Home className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="text-3xl font-bold text-slate-900 dark:text-white">18</span>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs">
                  +3 New
                </Badge>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-sm text-blue-600 font-medium">+20.0%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">this quarter</span>
              </div>
              <Progress value={60} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center justify-between">
                Monthly Cash Flow
                <TrendingUp className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-purple-600" />
                <span className="text-3xl font-bold text-slate-900 dark:text-white">$24.5K</span>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="w-4 h-4 text-purple-600 mr-1" />
                <span className="text-sm text-purple-600 font-medium">+8.2%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">from last month</span>
              </div>
              <Progress value={82} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center justify-between">
                Average ROI
                <Target className="w-4 h-4 text-orange-600 group-hover:scale-110 transition-transform" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-orange-600" />
                <span className="text-3xl font-bold text-slate-900 dark:text-white">18.7%</span>
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="w-4 h-4 text-orange-600 mr-1" />
                <span className="text-sm text-orange-600 font-medium">+2.1%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">from last year</span>
              </div>
              <Progress value={87} className="mt-3 h-2" />
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
            </CardContent>
          </Card>
        </div>

<<<<<<< HEAD
            {/* Live Activity Feed */}
            <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-green-500/20 dark:border-green-700/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-green-300 dark:text-green-200 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-400" />
                      Live Activity Feed
                    </CardTitle>
                <CardDescription className="text-slate-400">Real-time portfolio updates and market alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
=======
        {/* Enhanced Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Enhanced Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
              <CardHeader className="border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-900 dark:text-white flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-blue-600" />
                      Live Activity Feed
                    </CardTitle>
                    <CardDescription>Real-time portfolio updates and market alerts</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                  {[
                    { 
                      action: "Property Purchase", 
                      property: "123 Main St, Austin", 
                      amount: "$450,000", 
                      time: "2 hours ago",
                      type: "purchase",
                      icon: Home,
<<<<<<< HEAD
                      color: "text-green-400"
=======
                      color: "text-green-600"
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                    },
                    { 
                      action: "Rent Collection", 
                      property: "456 Oak Ave, Miami", 
                      amount: "$3,200", 
                      time: "1 day ago",
                      type: "income",
                      icon: DollarSign,
<<<<<<< HEAD
                      color: "text-blue-400"
                    },
                    { 
                      action: "AI Market Analysis", 
=======
                      color: "text-blue-600"
                    },
                    { 
                      action: "Maintenance Completed", 
                      property: "789 Pine Rd, Denver", 
                      amount: "$850", 
                      time: "3 days ago",
                      type: "maintenance",
                      icon: Settings,
                      color: "text-orange-600"
                    },
                    { 
                      action: "Market Analysis", 
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                      property: "Phoenix Metro Area", 
                      amount: "Updated", 
                      time: "1 week ago",
                      type: "analysis",
<<<<<<< HEAD
                      icon: Brain,
                      color: "text-purple-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 rounded-xl bg-black/20 dark:bg-slate-800/20 border border-green-500/20 dark:border-green-700/30 hover:bg-green-500/10 transition-colors">
                      <div className={`w-12 h-12 rounded-full bg-black/40 dark:bg-slate-700/40 flex items-center justify-center mr-4 border border-green-500/30`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <p className="font-bold text-green-300 dark:text-green-200">{item.action}</p>
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-slate-300 dark:text-slate-200 flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
=======
                      icon: BarChart3,
                      color: "text-purple-600"
                    },
                    { 
                      action: "New Investment Opportunity", 
                      property: "Downtown Seattle", 
                      amount: "$680,000", 
                      time: "2 weeks ago",
                      type: "opportunity",
                      icon: Zap,
                      color: "text-yellow-600"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-b-0">
                      <div className={`w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-4`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <p className="font-medium text-slate-900 dark:text-white">{item.action}</p>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                          {item.property}
                        </p>
                      </div>
                      <div className="text-right">
<<<<<<< HEAD
                        <p className="font-bold text-green-300 dark:text-green-200">{item.amount}</p>
                        <p className="text-sm text-slate-400 dark:text-slate-400 flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
=======
                        <p className="font-medium text-slate-900 dark:text-white">{item.amount}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-blue-500/20 dark:border-blue-700/20 rounded-2xl">
              <CardHeader>
                  <CardTitle className="text-blue-300 dark:text-blue-200 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                    Property Type Distribution
                </CardTitle>
                  <CardDescription className="text-slate-400">Breakdown of your portfolio by property type</CardDescription>
              </CardHeader>
              <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={[
                          { name: 'Single Family', value: 45, color: '#3B82F6' },
                          { name: 'Multi-Family', value: 25, color: '#10B981' },
                          { name: 'Commercial', value: 20, color: '#F59E0B' },
                          { name: 'Land', value: 10, color: '#EF4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[
                          { name: 'Single Family', value: 45, color: '#3B82F6' },
                          { name: 'Multi-Family', value: 25, color: '#10B981' },
                          { name: 'Commercial', value: 20, color: '#F59E0B' },
                          { name: 'Land', value: 10, color: '#EF4444' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
              </CardContent>
            </Card>

              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-purple-500/20 dark:border-purple-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-purple-300 dark:text-purple-200 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                    ROI Performance
                  </CardTitle>
                  <CardDescription className="text-slate-400">Return on investment by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                      <Bar dataKey="roi" fill="#8b5cf6" name="ROI %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Markets Tab */}
          <TabsContent value="markets" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-green-500/20 dark:border-green-700/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-green-300 dark:text-green-200 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-400" />
                    Market Performance
                  </CardTitle>
                  <CardDescription className="text-slate-400">ROI and growth by market</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={marketData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="market" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                      <Bar dataKey="roi" fill="#10b981" name="ROI %" />
                      <Line type="monotone" dataKey="growth" stroke="#f59e0b" strokeWidth={2} name="Growth %" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-orange-500/20 dark:border-orange-700/20 rounded-2xl">
            <CardHeader>
                  <CardTitle className="text-orange-300 dark:text-orange-200 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-orange-400" />
                    Risk Assessment
              </CardTitle>
                  <CardDescription className="text-slate-400">Portfolio risk metrics and scores</CardDescription>
            </CardHeader>
            <CardContent>
                  <div className="space-y-4">
                    {riskData.map((item, index) => (
                      <div key={index} className="p-4 rounded-xl bg-black/20 dark:bg-slate-800/20 border border-orange-500/20 dark:border-orange-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 dark:text-slate-200 font-medium">{item.metric}</span>
                          <Badge className={`px-2 py-1 ${
                            item.level === 'Low' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                            item.level === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                            'bg-red-500/20 text-red-300 border-red-500/30'
                          }`}>
                            {item.level}
                      </Badge>
                    </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${item.score}%`, 
                              backgroundColor: item.level === 'Low' ? '#10b981' : item.level === 'Medium' ? '#f59e0b' : '#ef4444'
                            }}
                          />
                    </div>
                        <span className="text-sm text-slate-400 dark:text-slate-400 mt-1 block">Score: {item.score}/100</span>
=======
          </div>

          {/* Enhanced Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  Quick Actions
                </CardTitle>
                <CardDescription>AI-powered shortcuts and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Add New Property", icon: Home, color: "text-blue-600", description: "AI-assisted property analysis" },
                    { title: "Run Market Analysis", icon: BarChart3, color: "text-green-600", description: "Real-time market insights" },
                    { title: "Generate Reports", icon: TrendingUp, color: "text-purple-600", description: "Custom portfolio reports" },
                    { title: "Contact Team", icon: Users, color: "text-orange-600", description: "Expert consultation" },
                    { title: "AI Insights", icon: Zap, color: "text-yellow-600", description: "Smart recommendations" }
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <action.icon className={`w-4 h-4 ${action.color}`} />
                      </div>
                      <div className="text-left">
                        <span className="text-slate-700 dark:text-slate-300 font-medium block">{action.title}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-500">{action.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

          
          </div>
        </div>

        {/* New Section: Market Overview */}
        <div className="mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                Global Market Overview
              </CardTitle>
              <CardDescription>Real-time market performance across your portfolio regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { region: "North America", performance: "+8.2%", status: "Bullish", color: "text-green-600", properties: 12 },
                  { region: "Europe", performance: "+5.7%", status: "Stable", color: "text-blue-600", properties: 4 },
                  { region: "Asia Pacific", performance: "+12.1%", status: "Bullish", color: "text-green-600", properties: 2 }
                ].map((market, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-slate-900 dark:text-white">{market.region}</h4>
                      <Badge className={`${market.status === 'Bullish' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}`}>
                        {market.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold ${market.color}`}>{market.performance}</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{market.properties} properties</span>
                    </div>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD
          </TabsContent>

          {/* AI Hub Tab */}
          <TabsContent value="ai" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-pink-500/20 dark:border-pink-700/20 rounded-2xl">
            <CardHeader>
                  <CardTitle className="text-pink-300 dark:text-pink-200 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-pink-400" />
                    AI Market Intelligence
              </CardTitle>
                  <CardDescription className="text-slate-400">AI-powered market analysis and predictions</CardDescription>
            </CardHeader>
            <CardContent>
                  <div className="space-y-4">
                    {[
                      { insight: "Austin market shows 18.5% growth potential", confidence: "94%", impact: "High" },
                      { insight: "Miami rental demand increasing by 22%", confidence: "87%", impact: "Medium" },
                      { insight: "Phoenix undervalued properties detected", confidence: "91%", impact: "High" },
                      { insight: "Interest rates may stabilize in Q2", confidence: "78%", impact: "Medium" }
                    ].map((item, index) => (
                      <div key={index} className="p-4 rounded-xl bg-black/20 dark:bg-slate-800/20 border border-pink-500/20 dark:border-pink-700/30">
                        <p className="text-slate-300 dark:text-slate-200 mb-3">{item.insight}</p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs">
                            {item.impact} Impact
                      </Badge>
                          <span className="text-sm text-pink-400 font-medium">{item.confidence} confidence</span>
=======

        {/* New Section: Investment Opportunities */}
        <div className="mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                AI-Detected Opportunities
              </CardTitle>
              <CardDescription>Smart investment recommendations based on market analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Emerging Market",
                    location: "Austin, TX",
                    potential: "+18.5%",
                    confidence: "94%",
                    description: "Tech sector growth driving property demand",
                    type: "Growth",
                    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  },
                  {
                    title: "Undervalued Property",
                    location: "Phoenix, AZ",
                    potential: "+25.3%",
                    confidence: "87%",
                    description: "Below market value with renovation potential",
                    type: "Value",
                    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  },
                  {
                    title: "Rental Hotspot",
                    location: "Miami, FL",
                    potential: "+22.1%",
                    confidence: "91%",
                    description: "High rental demand in tourist area",
                    type: "Income",
                    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                  }
                ].map((opportunity, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={opportunity.color}>
                        {opportunity.type}
                      </Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{opportunity.confidence} confidence</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{opportunity.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{opportunity.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{opportunity.location}</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{opportunity.potential}</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD

              <Card className="bg-black/40 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl border-cyan-500/20 dark:border-cyan-700/20 rounded-2xl">
              <CardHeader>
                  <CardTitle className="text-cyan-300 dark:text-cyan-200 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-cyan-400" />
                    Investment Opportunities
                </CardTitle>
                  <CardDescription className="text-slate-400">AI-detected investment opportunities</CardDescription>
=======
        </div>

        {/* New Section: Market Trends & Insights */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Market Trends Chart */}
            <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Market Trends
                </CardTitle>
                <CardDescription>12-month performance across key markets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Interactive Market Trends Chart</p>
                    <p className="text-sm text-slate-400 dark:text-slate-500">Monthly performance visualization</p>
                    <div className="mt-4 flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">Austin</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">Miami</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">Denver</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Risk Assessment
                </CardTitle>
                <CardDescription>Portfolio risk analysis and mitigation strategies</CardDescription>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
<<<<<<< HEAD
                      { title: "Emerging Market", location: "Austin, TX", potential: "+18.5%", type: "Growth" },
                      { title: "Undervalued Property", location: "Phoenix, AZ", potential: "+25.3%", type: "Value" },
                      { title: "Rental Hotspot", location: "Miami, FL", potential: "+22.1%", type: "Income" }
                  ].map((item, index) => (
                      <div key={index} className="p-4 rounded-xl bg-black/20 dark:bg-slate-800/20 border border-cyan-500/20 dark:border-cyan-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                            {item.type}
                        </Badge>
                          <span className="text-lg font-bold text-cyan-400">{item.potential}</span>
                        </div>
                        <h4 className="font-semibold text-cyan-300 dark:text-cyan-200 mb-1">{item.title}</h4>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-300 dark:text-slate-300">{item.location}</span>
                      </div>
=======
                    { risk: "Market Volatility", level: "Low", score: 15, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
                    { risk: "Interest Rate", level: "Medium", score: 45, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
                    { risk: "Liquidity", level: "Low", score: 20, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
                    { risk: "Concentration", level: "Medium", score: 60, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.risk}</span>
                        <Badge className={item.color}>
                          {item.level}
                        </Badge>
                      </div>
                      <Progress value={item.score} className="h-2" />
                      <span className="text-xs text-slate-500 dark:text-slate-400">Risk Score: {item.score}/100</span>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
<<<<<<< HEAD
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Property Calculator", icon: Calculator, description: "ROI & cash flow analysis", color: "text-blue-400" },
                { title: "Market Reports", icon: FileText, description: "Download market insights", color: "text-green-400" },
                { title: "Portfolio Review", icon: BarChart3, description: "Performance assessment", color: "text-purple-400" },
                { title: "AI Assistant", icon: Bot, description: "Get smart recommendations", color: "text-orange-400" },
                { title: "Risk Analyzer", icon: Shield, description: "Portfolio risk assessment", color: "text-red-400" },
                { title: "Market Scanner", icon: Globe, description: "Real-time market data", color: "text-cyan-400" },
                { title: "Investment Planner", icon: Target, description: "Strategic planning tools", color: "text-pink-400" },
                { title: "Performance Tracker", icon: TrendingUp, description: "Track your investments", color: "text-yellow-400" }
                ].map((tool, index) => (
                  <button
                    key={index}
                  className="p-6 rounded-2xl bg-black/40 dark:bg-slate-900/40 border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/20 transition-all duration-300 text-left group hover:scale-105"
                  >
                  <div className={`w-12 h-12 rounded-xl bg-black/40 dark:bg-slate-700/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-600/30`}>
                    <tool.icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                  <h4 className="font-bold text-slate-200 dark:text-slate-200 mb-2 text-lg">{tool.title}</h4>
                  <p className="text-sm text-slate-400 dark:text-slate-400 leading-relaxed">{tool.description}</p>
                  </button>
                ))}
              </div>
          </TabsContent>
        </Tabs>
=======
        </div>

        {/* New Section: Quick Actions & Tools */}
        <div className="mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Settings className="w-5 h-5 mr-2 text-slate-600" />
                Tools & Resources
              </CardTitle>
              <CardDescription>Essential tools for property management and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Property Calculator", icon: Calculator, description: "ROI & cash flow analysis", color: "text-blue-600" },
                  { title: "Market Reports", icon: FileText, description: "Download market insights", color: "text-green-600" },
                  { title: "Portfolio Review", icon: BarChart3, description: "Performance assessment", color: "text-purple-600" },
                  { title: "AI Assistant", icon: Bot, description: "Get smart recommendations", color: "text-orange-600" }
                ].map((tool, index) => (
                  <button
                    key={index}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 text-left group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <tool.icon className={`w-5 h-5 ${tool.color}`} />
                    </div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">{tool.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{tool.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
      </div>
    </div>
  );
}
