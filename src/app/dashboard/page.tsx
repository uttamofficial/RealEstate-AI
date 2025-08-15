import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
              </Button>
            </div>
          </div>
          
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
            </CardContent>
          </Card>
        </div>

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
                  {[
                    { 
                      action: "Property Purchase", 
                      property: "123 Main St, Austin", 
                      amount: "$450,000", 
                      time: "2 hours ago",
                      type: "purchase",
                      icon: Home,
                      color: "text-green-600"
                    },
                    { 
                      action: "Rent Collection", 
                      property: "456 Oak Ave, Miami", 
                      amount: "$3,200", 
                      time: "1 day ago",
                      type: "income",
                      icon: DollarSign,
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
                      property: "Phoenix Metro Area", 
                      amount: "Updated", 
                      time: "1 week ago",
                      type: "analysis",
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
                          {item.property}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-slate-900 dark:text-white">{item.amount}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

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
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
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
      </div>
    </div>
  );
}
