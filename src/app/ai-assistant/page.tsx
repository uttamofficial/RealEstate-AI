import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Bot, MessageSquare, TrendingUp, Lightbulb, Zap, Target, BarChart3, Search, Send, Sparkles, Brain, Rocket, Shield, Globe, Users, Clock, Star, Award, Activity, ArrowUpRight, ArrowDownRight, Eye, Download, Share2, Settings, RefreshCw, AlertCircle, CheckCircle, XCircle, Info, Calculator, FileText, MapPin, Home, Building2, Car, TreePine, Mountain, Waves, Sun, Moon, Cloud } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] dark:from-[#0a0a23] dark:via-[#1e1e3f] dark:to-[#2d1a4a] flex items-center justify-center futuristic-bg">
      <div className="container mx-auto px-2 sm:px-8 lg:px-16 py-10">
        {/* Enhanced Page Header */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 dark:from-white dark:via-blue-200 dark:to-fuchsia-400 bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_2px_16px_rgba(99,102,241,0.25)]">
                AI Market Assistant
              </h1>
              <p className="text-slate-400 dark:text-slate-300 mt-3 text-lg font-medium max-w-xl">
                Your intelligent real estate investment companion powered by advanced AI
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 lg:mt-0">
              <Button variant="outline" size="sm" className="border-slate-400 dark:border-slate-700 hover:shadow-neon-cyan">
                <Download className="w-4 h-4 mr-2" />
                Export Chat
              </Button>
              <Button variant="outline" size="sm" className="border-slate-400 dark:border-slate-700 hover:shadow-neon-pink">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 shadow-neon-blue">
                <Settings className="w-4 h-4 mr-2 animate-spin-slow" />
                Customize AI
              </Button>
            </div>
          </div>

          {/* AI Status Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-4 border border-cyan-200/30 dark:border-fuchsia-700/30 shadow-neon-cyan transition-all duration-300 hover:scale-[1.03]">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">AI Status</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">Online & Ready</p>
            </div>
            <div className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-4 border border-blue-200/30 dark:border-blue-700/30 shadow-neon-blue transition-all duration-300 hover:scale-[1.03]">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Model</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">Compound-Beta</p>
            </div>
            <div className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-4 border border-purple-200/30 dark:border-purple-700/30 shadow-neon-purple transition-all duration-300 hover:scale-[1.03]">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Response Time</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">~2.3s avg</p>
            </div>
            <div className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-4 border border-yellow-200/30 dark:border-yellow-700/30 shadow-neon-yellow transition-all duration-300 hover:scale-[1.03]">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Accuracy</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">94.2%</p>
            </div>
          </div>
        </div>

        {/* Enhanced AI Chat Interface */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Enhanced Chat Area */}
          <div className="lg:col-span-2">
            <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl h-[540px] rounded-3xl border-cyan-200/20 dark:border-fuchsia-700/20 relative overflow-hidden futuristic-card">
              <CardHeader className="border-b border-cyan-200/30 dark:border-fuchsia-700/30 bg-gradient-to-r from-cyan-50/30 to-fuchsia-50/10 dark:from-cyan-900/10 dark:to-fuchsia-900/10 rounded-t-3xl">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-slate-900 dark:text-white flex items-center text-2xl">
                      <Bot className="w-6 h-6 mr-2 text-cyan-500 animate-glow" />
                      AI Market Assistant
                    </CardTitle>
                    <CardDescription className="text-base text-slate-500 dark:text-slate-300 mt-1">Ask me anything about real estate investments</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hover:bg-cyan-100/30 dark:hover:bg-fuchsia-900/20">
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin-slow" />
                      Clear Chat
                    </Button>
                    <Badge className="bg-gradient-to-r from-green-400/30 to-cyan-400/30 text-green-900 dark:bg-gradient-to-r dark:from-green-900/40 dark:to-cyan-900/40 dark:text-green-200 border-0 shadow-neon-green px-3 py-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-full p-0 relative">
                {/* Futuristic animated background */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="w-full h-full animate-futuristic-bg opacity-30" />
                </div>
                {/* Enhanced Chat Messages */}
                <div className="flex-1 space-y-6 mb-4 overflow-y-auto p-6 z-10">
                  {/* AI Welcome Message */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-neon-cyan animate-glow">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-cyan-50/80 to-fuchsia-50/60 dark:from-cyan-900/30 dark:to-fuchsia-900/20 rounded-2xl p-5 border border-cyan-200/40 dark:border-fuchsia-700/40 shadow-neon-cyan">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-5 h-5 text-cyan-500 animate-pulse" />
                          <span className="text-base font-semibold text-cyan-800 dark:text-cyan-200">AI Assistant</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-200 mb-3">
                          Hello! I'm your AI real estate investment assistant. I can help you with:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                          {[
                            "📊 Market analysis and trends",
                            "🏠 Property valuation insights", 
                            "💡 Investment strategy recommendations",
                            "⚠️ Risk assessment and mitigation"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          What would you like to know about today?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* User Message Example */}
                  <div className="flex items-start gap-4 justify-end">
                    <div className="flex-1 text-right">
                      <div className="bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-700/80 dark:to-slate-600/80 rounded-2xl p-5 inline-block shadow-neon-blue">
                        <p className="text-slate-700 dark:text-slate-200 font-semibold">
                          What are the best markets for rental properties right now?
                        </p>
                        <div className="flex items-center justify-end gap-2 mt-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">2 hours ago</span>
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-neon-blue">
                      <span className="text-base font-bold text-white">U</span>
                    </div>
                  </div>

                  {/* Enhanced AI Response Example */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-neon-cyan animate-glow">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-cyan-50/80 to-fuchsia-50/60 dark:from-cyan-900/30 dark:to-fuchsia-900/20 rounded-2xl p-5 border border-cyan-200/40 dark:border-fuchsia-700/40 shadow-neon-cyan">
                        <div className="flex items-center gap-2 mb-3">
                          <Brain className="w-5 h-5 text-cyan-500 animate-pulse" />
                          <span className="text-base font-semibold text-cyan-800 dark:text-cyan-200">AI Analysis</span>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs animate-glow">
                            94% Confidence
                          </Badge>
                        </div>
                        <p className="text-slate-700 dark:text-slate-200 mb-3">
                          Based on current market analysis, the top markets for rental properties are:
                        </p>
                        <div className="space-y-3 mb-3">
                          {[
                            { market: "Austin, TX", roi: "22.1%", trend: "+3.2%", status: "Bullish" },
                            { market: "Miami, FL", roi: "20.8%", trend: "+2.8%", status: "Bullish" },
                            { market: "Denver, CO", roi: "19.5%", trend: "+2.1%", status: "Stable" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-cyan-200/30 dark:border-fuchsia-700/30 shadow-neon-cyan">
                              <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-cyan-500" />
                                <span className="font-medium text-slate-900 dark:text-white">{item.market}</span>
                                <Badge className={`px-2 py-0.5 rounded ${
                                  item.status === 'Bullish' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                }`}>
                                  {item.status}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600">{item.roi}</div>
                                <div className="text-xs text-green-600">{item.trend}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          These markets show strong rental demand, job growth, and appreciation potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Chat Input */}
                <div className="border-t border-cyan-200/30 dark:border-fuchsia-700/30 p-5 bg-gradient-to-r from-cyan-50/30 to-fuchsia-50/10 dark:from-cyan-900/10 dark:to-fuchsia-900/10 rounded-b-3xl z-10">
                  <div className="flex gap-3">
                    <Input
                      placeholder="Ask me about real estate investments, market trends, or property analysis..."
                      className="flex-1 border-cyan-300 dark:border-fuchsia-700 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/70 dark:bg-slate-900/60 rounded-xl px-4 py-2 text-base"
                    />
                    <Button size="icon" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 shadow-neon-cyan animate-glow">
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span>Press <span className="font-semibold text-cyan-500">Enter</span> to send</span>
                      <span>•</span>
                      <span>AI powered by <span className="font-semibold text-fuchsia-500">Groq</span></span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs hover:bg-cyan-100/30 dark:hover:bg-fuchsia-900/20">
                      <Settings className="w-3 h-3 mr-1" />
                      Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced AI Insights Panel */}
          <div className="flex flex-col gap-6 h-full">
            {/* Enhanced Quick Actions */}
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
                    { title: "Market Analysis", icon: BarChart3, color: "text-blue-600", description: "Real-time market insights" },
                    { title: "Property Valuation", icon: Target, color: "text-green-600", description: "AI-powered property assessment" },
                    { title: "Investment Strategy", icon: Lightbulb, color: "text-yellow-600", description: "Personalized recommendations" },
                    { title: "Risk Assessment", icon: Shield, color: "text-purple-600", description: "Portfolio risk analysis" },
                    { title: "Market Predictions", icon: Rocket, color: "text-orange-600", description: "Future trend forecasting" }
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

        {/* Enhanced AI-Powered Tools */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Enhanced Property Analyzer */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl hover:shadow-neon-cyan transition-all duration-300 group rounded-2xl border-cyan-200/20 dark:border-fuchsia-700/20">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Search className="w-5 h-5 mr-2 text-blue-600" />
                Property Analyzer
              </CardTitle>
              <CardDescription>Get AI-powered property insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Enter property address..." className="border-slate-300 dark:border-slate-600" />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:scale-105 transition-transform duration-200">
                  <Brain className="w-4 h-4 mr-2" />
                  Analyze Property
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Market Predictor */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl hover:shadow-neon-green transition-all duration-300 group rounded-2xl border-cyan-200/20 dark:border-fuchsia-700/20">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Market Predictor
              </CardTitle>
              <CardDescription>Predict market trends and opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Enter city or market..." className="border-slate-300 dark:border-slate-600" />
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 group-hover:scale-105 transition-transform duration-200">
                  <Rocket className="w-4 h-4 mr-2" />
                  Predict Trends
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Investment Advisor */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl hover:shadow-neon-yellow transition-all duration-300 group rounded-2xl border-cyan-200/20 dark:border-fuchsia-700/20">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                Investment Advisor
              </CardTitle>
              <CardDescription>Get personalized investment recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Describe your goals..." className="border-slate-300 dark:border-slate-600" />
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 group-hover:scale-105 transition-transform duration-200">
                  <Target className="w-4 h-4 mr-2" />
                  Get Advice
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* New: Portfolio Optimizer */}
          <Card className="bg-white/20 dark:bg-slate-900/40 border-0 shadow-2xl backdrop-blur-2xl hover:shadow-neon-purple transition-all duration-300 group rounded-2xl border-cyan-200/20 dark:border-fuchsia-700/20">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                Portfolio Optimizer
              </CardTitle>
              <CardDescription>AI-powered portfolio optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Select portfolio..." className="border-slate-300 dark:border-slate-600" />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 group-hover:scale-105 transition-transform duration-200">
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// --- Futuristic CSS (add to your global CSS or tailwind config) ---
// .futuristic-bg { background: radial-gradient(ellipse at 80% 20%, #0ff 0%, #312e81 100%); }
// .futuristic-card { box-shadow: 0 0 32px 0 #0ff3, 0 0 64px 0 #f0f3; }
// .shadow-neon-cyan { box-shadow: 0 0 16px 0 #06b6d4cc, 0 0 32px 0 #0ff3; }
// .shadow-neon-blue { box-shadow: 0 0 16px 0 #6366f1cc, 0 0 32px 0 #60a5facc; }
// .shadow-neon-pink { box-shadow: 0 0 16px 0 #f472b6cc, 0 0 32px 0 #f0f3; }
// .shadow-neon-purple { box-shadow: 0 0 16px 0 #a78bfa99, 0 0 32px 0 #f0f3; }
// .shadow-neon-yellow { box-shadow: 0 0 16px 0 #fde04799, 0 0 32px 0 #f0f3; }
// .shadow-neon-green { box-shadow: 0 0 16px 0 #22d3ee99, 0 0 32px 0 #bbf7d0cc; }
// .animate-glow { animation: glow 2s infinite alternate; }
// .animate-gradient-move { background-size: 200% 200%; animation: gradientMove 6s ease-in-out infinite; }
// .animate-futuristic-bg { background: linear-gradient(120deg, #0ff3 0%, #6366f1 100%); filter: blur(48px); animation: gradientMove 12s linear infinite; }
// @keyframes glow { 0% { filter: drop-shadow(0 0 8px #0ff); } 100% { filter: drop-shadow(0 0 24px #f0f); } }
// @keyframes gradientMove { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
