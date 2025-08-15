import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Home, MapPin, DollarSign, TrendingUp, Eye, Edit, Trash2, Plus, Search, Filter, Grid3X3, List, BarChart3, Calendar, Users, Star, Zap, Globe, Building2, Car, TreePine, Mountain, Waves, Sun, Moon, Cloud, Target, Award, Clock, Activity, ArrowUpRight, ArrowDownRight, Filter as FilterIcon, Download, Share2, Settings, RefreshCw, AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      name: "Modern Downtown Condo",
      address: "123 Main St, Austin, TX",
      type: "Condo",
      price: "$450,000",
      roi: "18.5%",
      status: "Active",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      marketTrend: "+12.3%",
      occupancy: "95%",
      lastUpdated: "2 hours ago",
      features: ["Pool", "Gym", "Parking"],
      marketScore: 92
    },
    {
      id: 2,
      name: "Suburban Family Home",
      address: "456 Oak Ave, Miami, FL",
      type: "Single Family",
      price: "$650,000",
      roi: "22.1%",
      status: "Rented",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      marketTrend: "+8.7%",
      occupancy: "100%",
      lastUpdated: "1 day ago",
      features: ["Garden", "Garage", "School District"],
      marketScore: 88
    },
    {
      id: 3,
      name: "Investment Duplex",
      address: "789 Pine Rd, Denver, CO",
      type: "Multi-Family",
      price: "$380,000",
      roi: "25.3%",
      status: "Active",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      marketTrend: "+15.2%",
      occupancy: "87%",
      lastUpdated: "3 days ago",
      features: ["Dual Units", "Shared Yard", "Utilities Included"],
      marketScore: 95
    },
    {
      id: 4,
      name: "Fixer Upper",
      address: "321 Elm St, Phoenix, AZ",
      type: "Single Family",
      price: "$280,000",
      roi: "32.7%",
      status: "Under Renovation",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      marketTrend: "+18.9%",
      occupancy: "0%",
      lastUpdated: "1 week ago",
      features: ["Large Lot", "Development Potential", "Historic Area"],
      marketScore: 78
    },
    {
      id: 5,
      name: "Luxury Penthouse",
      address: "555 Skyline Blvd, Los Angeles, CA",
      type: "Condo",
      price: "$1.2M",
      roi: "16.8%",
      status: "Active",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      marketTrend: "+9.4%",
      occupancy: "92%",
      lastUpdated: "4 hours ago",
      features: ["Ocean View", "Rooftop Deck", "Concierge"],
      marketScore: 96
    },
    {
      id: 6,
      name: "Student Housing Complex",
      address: "777 College Dr, Boston, MA",
      type: "Multi-Family",
      price: "$890,000",
      roi: "28.4%",
      status: "Rented",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      marketTrend: "+14.6%",
      occupancy: "98%",
      lastUpdated: "2 days ago",
      features: ["Near Campus", "Furnished Units", "Study Rooms"],
      marketScore: 91
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800";
      case "Rented": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800";
      case "Under Renovation": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 border-gray-200 dark:border-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active": return <CheckCircle className="w-4 h-4" />;
      case "Rented": return <Users className="w-4 h-4" />;
      case "Under Renovation": return <Settings className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getMarketScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Page Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 dark:from-white dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent">
                Property Portfolio
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-lg">
                AI-powered property management and investment optimization
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 lg:mt-0">
              <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Property
              </Button>
            </div>
          </div>

          {/* Portfolio Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Total Properties</span>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">18</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Avg. ROI</span>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">24.7%</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Occupancy</span>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">89%</p>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-orange-600" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Market Score</span>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">90/100</p>
            </div>
          </div>
        </div>

        {/* Enhanced Filters and Search */}
        <div className="mb-8">
          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm">
            <CardHeader className="border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-blue-600" />
                    Advanced Filters
                  </CardTitle>
                  <CardDescription>AI-powered property discovery and filtering</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Save Filters
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Property Type
                  </label>
                  <select className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>All Types</option>
                    <option>Single Family</option>
                    <option>Condo</option>
                    <option>Multi-Family</option>
                    <option>Townhouse</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Status
                  </label>
                  <select className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Rented</option>
                    <option>Under Renovation</option>
                    <option>Sold</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    ROI Range
                  </label>
                  <select className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>All ROI</option>
                    <option>15%+</option>
                    <option>20%+</option>
                    <option>25%+</option>
                    <option>30%+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Market Score
                  </label>
                  <select className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>All Scores</option>
                    <option>80+</option>
                    <option>85+</option>
                    <option>90+</option>
                    <option>95+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search properties..."
                      className="w-full pl-10 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* View Toggle and Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
              <Button variant="ghost" size="sm" className="h-8 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-3">
                <List className="w-4 h-4" />
              </Button>
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Showing {properties.length} of 18 properties
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">Sort by:</span>
            <select className="text-sm border-0 bg-transparent text-slate-900 dark:text-white focus:ring-0">
              <option>ROI (High to Low)</option>
              <option>Price (High to Low)</option>
              <option>Market Score</option>
              <option>Date Added</option>
            </select>
          </div>
        </div>

        {/* Enhanced Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <Badge className={`${getStatusColor(property.status)} border flex items-center space-x-1`}>
                    {getStatusIcon(property.status)}
                    <span>{property.status}</span>
                  </Badge>
                  <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {property.marketScore}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-green-600 text-white border-0">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {property.marketTrend}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200">
                  {property.name}
                </CardTitle>
                <CardDescription className="flex items-center text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.address}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                      <p className="text-xs text-slate-600 dark:text-slate-400">Price</p>
                      <p className="text-lg font-bold text-green-600">{property.price}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                      <p className="text-xs text-slate-600 dark:text-slate-400">ROI</p>
                      <p className="text-lg font-bold text-blue-600">{property.roi}</p>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Type:</span>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{property.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Occupancy:</span>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{property.occupancy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Market Score:</span>
                      <span className={`text-sm font-bold ${getMarketScoreColor(property.marketScore)}`}>
                        {property.marketScore}/100
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {property.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Last Updated */}
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-500">
                    <Clock className="w-3 h-3 mr-1" />
                    Updated {property.lastUpdated}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-700 transition-all duration-200">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-700 transition-all duration-200">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
            <Button variant="ghost" size="sm" className="h-8 px-3">Previous</Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">1</Button>
            <Button variant="ghost" size="sm" className="h-8 px-3">2</Button>
            <Button variant="ghost" size="sm" className="h-8 px-3">3</Button>
            <Button variant="ghost" size="sm" className="h-8 px-3">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
