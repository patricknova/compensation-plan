"use client";

import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Calendar,
  Download,
  FileText,
  Filter,
  PieChart as PieChartIcon,
  BarChart2,
  TrendingUp,
  Users,
  DollarSign,
  Share2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("month");

  // Sample data for charts
  const monthlyCommissionData = [
    { month: "Jan", retail: 1200, qvp: 800, generation: 400, total: 2400 },
    { month: "Feb", retail: 1300, qvp: 900, generation: 500, total: 2700 },
    { month: "Mar", retail: 1400, qvp: 950, generation: 550, total: 2900 },
    { month: "Apr", retail: 1500, qvp: 1000, generation: 600, total: 3100 },
    { month: "May", retail: 1600, qvp: 1100, generation: 650, total: 3350 },
    { month: "Jun", retail: 1700, qvp: 1200, generation: 700, total: 3600 },
    { month: "Jul", retail: 1650, qvp: 1150, generation: 680, total: 3480 },
    { month: "Aug", retail: 1800, qvp: 1250, generation: 720, total: 3770 },
    { month: "Sep", retail: 1900, qvp: 1300, generation: 750, total: 3950 },
    { month: "Oct", retail: 2000, qvp: 1350, generation: 800, total: 4150 },
    { month: "Nov", retail: 1950, qvp: 1320, generation: 780, total: 4050 },
    { month: "Dec", retail: 2100, qvp: 1400, generation: 850, total: 4350 },
  ];

  const commissionBreakdownData = [
    { name: "Retail", value: 2000, color: "#4f46e5" },
    { name: "QVP", value: 1350, color: "#0ea5e9" },
    { name: "Generation", value: 800, color: "#10b981" },
  ];

  const teamGrowthData = [
    { month: "Jan", members: 18 },
    { month: "Feb", members: 20 },
    { month: "Mar", members: 22 },
    { month: "Apr", members: 24 },
    { month: "May", members: 25 },
    { month: "Jun", members: 27 },
    { month: "Jul", members: 28 },
    { month: "Aug", members: 29 },
    { month: "Sep", members: 30 },
    { month: "Oct", members: 32 },
    { month: "Nov", members: 32 },
    { month: "Dec", members: 32 },
  ];

  const volumeData = [
    { month: "Jan", personal: 450, group: 15000 },
    { month: "Feb", personal: 480, group: 16200 },
    { month: "Mar", personal: 520, group: 17500 },
    { month: "Apr", personal: 500, group: 18800 },
    { month: "May", personal: 550, group: 20000 },
    { month: "Jun", personal: 580, group: 21500 },
    { month: "Jul", personal: 560, group: 22800 },
    { month: "Aug", personal: 600, group: 24000 },
    { month: "Sep", personal: 620, group: 25500 },
    { month: "Oct", personal: 650, group: 27000 },
    { month: "Nov", personal: 630, group: 28000 },
    { month: "Dec", personal: 670, group: 29500 },
  ];

  const rankDistributionData = [
    { name: "Bronze", value: 15, color: "#94a3b8" },
    { name: "Silver", value: 8, color: "#cbd5e1" },
    { name: "Gold", value: 6, color: "#f59e0b" },
    { name: "Ruby", value: 2, color: "#ef4444" },
    { name: "Diamond", value: 1, color: "#3b82f6" },
  ];

  const availableReports = [
    {
      id: "1",
      title: "Monthly Commission Summary",
      date: "2023-10-01",
      type: "commission",
    },
    {
      id: "2",
      title: "Quarterly Performance Report",
      date: "2023-09-30",
      type: "performance",
    },
    {
      id: "3",
      title: "Team Growth Analysis",
      date: "2023-09-15",
      type: "team",
    },
    {
      id: "4",
      title: "Volume Tracking Report",
      date: "2023-10-05",
      type: "volume",
    },
    {
      id: "5",
      title: "Rank Advancement Opportunities",
      date: "2023-09-20",
      type: "rank",
    },
    {
      id: "6",
      title: "Annual Earnings Summary 2022",
      date: "2023-01-15",
      type: "commission",
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const getReportTypeIcon = (type: string) => {
    switch (type) {
      case "commission":
        return <DollarSign className="h-5 w-5 text-green-500" />;
      case "performance":
        return <TrendingUp className="h-5 w-5 text-blue-500" />;
      case "team":
        return <Users className="h-5 w-5 text-purple-500" />;
      case "volume":
        return <BarChart2 className="h-5 w-5 text-orange-500" />;
      case "rank":
        return <PieChartIcon className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Reports & Analytics
          </h1>
          <p className="text-gray-500 mt-1">
            Comprehensive insights into your business performance
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Performance Dashboard</h2>
            <p className="text-gray-500">Key metrics and visualizations</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[160px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export Dashboard
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Earnings</CardTitle>
              <CardDescription>Year to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold">$42,350</p>
                  <p className="text-sm text-green-600">
                    +18.5% from last year
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Team Growth</CardTitle>
              <CardDescription>New members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold">14</p>
                  <p className="text-sm text-blue-600">New members this year</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Volume Growth</CardTitle>
              <CardDescription>Group volume points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold">29,500</p>
                  <p className="text-sm text-purple-600">
                    +96.7% from start of year
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="commission" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-2 md:grid-cols-4 w-full">
            <TabsTrigger value="commission">Commission</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="rank">Rank</TabsTrigger>
          </TabsList>

          <TabsContent value="commission" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-white shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Commission Trends</CardTitle>
                      <CardDescription>
                        Monthly commission breakdown
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyCommissionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis
                        stroke="#6b7280"
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip formatter={(value) => [`$${value}`, ""]} />
                      <Legend />
                      <Bar dataKey="retail" name="Retail" fill="#4f46e5" />
                      <Bar dataKey="qvp" name="QVP" fill="#0ea5e9" />
                      <Bar
                        dataKey="generation"
                        name="Generation"
                        fill="#10b981"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle>Commission Breakdown</CardTitle>
                  <CardDescription>Current month distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={commissionBreakdownData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {commissionBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => formatCurrency(value as number)}
                      />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="mt-4 space-y-2">
                    {commissionBreakdownData.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">
                          {formatCurrency(item.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-white shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Team Growth</CardTitle>
                      <CardDescription>
                        Monthly team member count
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={teamGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="members"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Team Members"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle>Rank Distribution</CardTitle>
                  <CardDescription>Team member ranks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={rankDistributionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {rankDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="mt-4 space-y-2">
                    {rankDistributionData.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">
                          {item.value} members
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="volume" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Volume Trends</CardTitle>
                    <CardDescription>
                      Personal and group volume over time
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis yAxisId="left" stroke="#6b7280" />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#6b7280"
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="personal"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Personal Volume"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="group"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Group Volume"
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="text-sm font-medium text-purple-800 mb-1">
                      Personal Volume Insights
                    </h4>
                    <p className="text-sm text-purple-700">
                      Your personal volume has increased by 48.9% since January.
                      Keep up the great work!
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-medium text-green-800 mb-1">
                      Group Volume Insights
                    </h4>
                    <p className="text-sm text-green-700">
                      Your group volume has grown by 96.7% this year, showing
                      strong team performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rank" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle>Rank Progression</CardTitle>
                  <CardDescription>
                    Your rank advancement journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pt-8 pb-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

                    <div className="relative z-10 mb-12">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-purple-500 border-4 border-white"></div>
                      <div className="ml-8 md:ml-12 pt-1">
                        <h4 className="font-medium">Elite Executive</h4>
                        <p className="text-sm text-gray-500">Current Rank</p>
                        <Badge className="mt-1 bg-purple-100 text-purple-800">
                          Achieved Sep 2023
                        </Badge>
                      </div>
                    </div>

                    <div className="relative z-10 mb-12">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-gray-300 border-4 border-white"></div>
                      <div className="ml-8 md:ml-12 pt-1">
                        <h4 className="font-medium">Diamond</h4>
                        <p className="text-sm text-gray-500">Next Rank</p>
                        <Badge className="mt-1 bg-blue-100 text-blue-800">
                          75% Complete
                        </Badge>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-gray-200 border-4 border-white"></div>
                      <div className="ml-8 md:ml-12 pt-1">
                        <h4 className="font-medium">Blue Diamond</h4>
                        <p className="text-sm text-gray-500">Future Goal</p>
                        <Badge className="mt-1 bg-gray-100 text-gray-800">
                          Target: Jun 2024
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle>Rank Requirements</CardTitle>
                  <CardDescription>
                    Diamond rank qualification progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Personal Volume
                        </span>
                        <span className="text-sm">650 / 700</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "93%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        93% complete - Need 50 more PV
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Group Volume
                        </span>
                        <span className="text-sm">27,000 / 30,000</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        90% complete - Need 3,000 more GV
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Active Legs</span>
                        <span className="text-sm">4 / 5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        80% complete - Need 1 more active leg
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Leadership Development
                        </span>
                        <span className="text-sm">2 / 2</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        100% complete - Requirement met
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-800 mb-1">
                      Diamond Rank Projection
                    </h4>
                    <p className="text-sm text-blue-700">
                      At your current growth rate, you are on track to reach
                      Diamond rank by December 2023.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>
                  Download detailed reports and analyses
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter Reports
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableReports.map((report) => (
                <div
                  key={report.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {getReportTypeIcon(report.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Generated: {formatDate(report.date)}
                      </p>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Share2 className="h-3 w-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Last updated: October 15, 2023</span>
            </div>
            <Button variant="outline" size="sm">
              View All Reports
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2023 Trévo Compensation Dashboard. All rights reserved.</p>
          <p className="mt-1">Last data update: October 15, 2023 at 10:30 AM</p>
        </div>
      </footer>
    </div>
  );
}
