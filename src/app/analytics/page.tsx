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
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$2.4M</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+12.5%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Monthly Cash Flow</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$24.5K</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+8.2%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Average ROI</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">18.7%</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+2.1%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last year</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Occupancy Rate</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">94.2%</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-green-600">+1.8%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

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
            </CardContent>
          </Card>

          {/* Property Type Distribution */}
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
              <CardDescription>Latest portfolio activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Property Purchase", amount: "$450K", time: "2 hours ago" },
                  { action: "Rent Collection", amount: "$3.2K", time: "1 day ago" },
                  { action: "Maintenance", amount: "$850", time: "3 days ago" },
                  { action: "Market Analysis", amount: "Updated", time: "1 week ago" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{item.action}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.time}</p>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{item.amount}</span>
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
