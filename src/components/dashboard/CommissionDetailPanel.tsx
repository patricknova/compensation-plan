"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  Calendar,
  DollarSign,
} from "lucide-react";

interface HistoricalDataItem {
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
}

interface CommissionDetailPanelProps {
  title?: string;
  description?: string;
  status?: "eligible" | "ineligible" | "pending";
  currentAmount?: number;
  previousAmount?: number;
  percentChange?: number;
  eligibilityRequirements?: {
    title: string;
    met: boolean;
    value: string;
    target: string;
  }[];
  historicalData?: HistoricalDataItem[];
}

const CommissionDetailPanel = ({
  title = "Retail Commission",
  description = "Commissions earned from personal retail sales",
  status = "eligible",
  currentAmount = 1250.75,
  previousAmount = 980.5,
  percentChange = 27.56,
  eligibilityRequirements = [
    {
      title: "Personal Volume",
      met: true,
      value: "150",
      target: "100",
    },
    {
      title: "Active Distributors",
      met: true,
      value: "5",
      target: "3",
    },
    {
      title: "Group Volume",
      met: false,
      value: "2,800",
      target: "3,000",
    },
  ],
  historicalData = [
    { date: "2023-10-01", amount: 1250.75, status: "paid" },
    { date: "2023-09-01", amount: 980.5, status: "paid" },
    { date: "2023-08-01", amount: 1100.25, status: "paid" },
    { date: "2023-07-01", amount: 850.0, status: "paid" },
    { date: "2023-06-01", amount: 920.3, status: "paid" },
  ],
}: CommissionDetailPanelProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case "eligible":
        return <Badge className="bg-green-100 text-green-800">Eligible</Badge>;
      case "ineligible":
        return <Badge className="bg-red-100 text-red-800">Ineligible</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (met: boolean) => {
    return met ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "text-green-600";
      case "pending":
        return "text-yellow-600";
      case "failed":
        return "text-red-600";
      default:
        return "";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge()}
            <span
              className={`flex items-center ${percentChange >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              {percentChange >= 0 ? "+" : ""}
              {percentChange}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Current Period
                </h4>
                <div className="flex items-baseline">
                  <DollarSign className="h-5 w-5 text-gray-700 mr-1" />
                  <span className="text-2xl font-bold">
                    {currentAmount.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Previous Period
                </h4>
                <div className="flex items-baseline">
                  <DollarSign className="h-5 w-5 text-gray-700 mr-1" />
                  <span className="text-2xl font-bold">
                    {previousAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Eligibility Status
              </h4>
              <div className="space-y-2">
                {eligibilityRequirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                  >
                    <div className="flex items-center">
                      {getStatusIcon(req.met)}
                      <span className="ml-2 text-sm font-medium">
                        {req.title}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span
                        className={req.met ? "text-green-600" : "text-red-600"}
                      >
                        {req.value}
                      </span>
                      <span className="text-gray-500"> / {req.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="eligibility" className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-3">Eligibility Requirements</h4>
              <div className="space-y-4">
                {eligibilityRequirements.map((req, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {getStatusIcon(req.met)}
                        <span className="ml-2 font-medium">{req.title}</span>
                      </div>
                      <div>
                        <span
                          className={
                            req.met ? "text-green-600" : "text-red-600"
                          }
                        >
                          {req.value}
                        </span>
                        <span className="text-gray-500"> / {req.target}</span>
                      </div>
                    </div>
                    <Progress
                      value={(parseInt(req.value) / parseInt(req.target)) * 100}
                      className="h-2"
                    />
                    <p className="text-xs text-gray-500">
                      {req.met
                        ? `You've met the ${req.title.toLowerCase()} requirement.`
                        : `You need ${parseInt(req.target) - parseInt(req.value)} more to meet the ${req.title.toLowerCase()} requirement.`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-medium">Eligibility Tips</h4>
              </div>
              <p className="text-sm text-gray-600">
                Focus on increasing your Group Volume to meet all eligibility
                requirements. Consider reaching out to your team members to
                boost their activity or recruiting new distributors to expand
                your network.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Period</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        {formatDate(item.date)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-gray-500" />
                          {item.amount.toFixed(2)}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                        >
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <span className="text-sm text-gray-500">
          Last updated: Today at 10:30 AM
        </span>
        <button className="text-sm text-blue-600 hover:underline">
          View Full Report
        </button>
      </CardFooter>
    </Card>
  );
};

export default CommissionDetailPanel;
