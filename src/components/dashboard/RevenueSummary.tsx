"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowUpRight, DollarSign, TrendingUp, Users } from "lucide-react";

interface RevenueSummaryProps {
  className?: string;
}

export default function RevenueSummary({ className }: RevenueSummaryProps) {
  // Sample data for the revenue summary
  const summaryData = {
    totalEarnings: 4235,
    percentChange: 18.5,
    retailCommissions: 1850,
    retailPercentChange: 12.3,
    qvpCommissions: 1650,
    qvpPercentChange: 15.7,
    generationCommissions: 735,
    generationPercentChange: 22.4,
  };

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className}`}>
      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Revenus Totaux
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {formatCurrency(summaryData.totalEarnings)}
                </p>
                <div className="flex items-center ml-2 text-green-600 text-xs">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>{summaryData.percentChange}%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Depuis le début de l'année
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Commissions Retail
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {formatCurrency(summaryData.retailCommissions)}
                </p>
                <div className="flex items-center ml-2 text-green-600 text-xs">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>{summaryData.retailPercentChange}%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Des ventes directes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Commissions QVP
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {formatCurrency(summaryData.qvpCommissions)}
                </p>
                <div className="flex items-center ml-2 text-green-600 text-xs">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>{summaryData.qvpPercentChange}%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Du volume d'équipe</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <DollarSign className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Commissions Génération
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {formatCurrency(summaryData.generationCommissions)}
                </p>
                <div className="flex items-center ml-2 text-green-600 text-xs">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>{summaryData.generationPercentChange}%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Des générations en aval</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
