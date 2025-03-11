"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, Filter } from "lucide-react";

interface CommissionChartProps {
  className?: string;
}

export default function CommissionChart({ className }: CommissionChartProps) {
  // Sample data for the commission chart
  const commissionData = [
    { month: "Jan", retail: 1200, qvp: 800, generation: 400, total: 2400 },
    { month: "Fév", retail: 1300, qvp: 900, generation: 500, total: 2700 },
    { month: "Mar", retail: 1400, qvp: 950, generation: 550, total: 2900 },
    { month: "Avr", retail: 1500, qvp: 1000, generation: 600, total: 3100 },
    { month: "Mai", retail: 1600, qvp: 1100, generation: 650, total: 3350 },
    { month: "Juin", retail: 1700, qvp: 1200, generation: 700, total: 3600 },
    { month: "Juil", retail: 1650, qvp: 1150, generation: 680, total: 3480 },
    { month: "Août", retail: 1800, qvp: 1250, generation: 720, total: 3770 },
    { month: "Sep", retail: 1900, qvp: 1300, generation: 750, total: 3950 },
    { month: "Oct", retail: 2000, qvp: 1350, generation: 800, total: 4150 },
  ];

  return (
    <Card className={`w-full bg-white shadow-md ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">
          Tendances des Commissions
        </CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-8 px-2 text-xs">
            <Filter className="h-3.5 w-3.5 mr-1" />
            Filtrer
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-2 text-xs">
            <Download className="h-3.5 w-3.5 mr-1" />
            Exporter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={commissionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}€`, ""]} />
              <Legend />
              <Bar dataKey="retail" name="Retail" stackId="a" fill="#4f46e5" />
              <Bar dataKey="qvp" name="QVP" stackId="a" fill="#0ea5e9" />
              <Bar
                dataKey="generation"
                name="Génération"
                stackId="a"
                fill="#10b981"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
