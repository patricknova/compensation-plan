"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface VolumeTrackingProps {
  className?: string;
}

export default function VolumeTracking({ className }: VolumeTrackingProps) {
  // Sample data for volume tracking
  const volumeData = {
    personalVolume: 650,
    personalTarget: 800,
    personalPercentage: 81,
    personalGrowth: 15,
    groupVolume: 28500,
    groupTarget: 30000,
    groupPercentage: 95,
    groupGrowth: 22,
    rank: "Or",
    nextRank: "Rubis",
  };

  // Format numbers with thousand separators
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("fr-FR").format(value);
  };

  return (
    <Card className={`w-full bg-white shadow-md ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Suivi du Volume</CardTitle>
          <Badge className="bg-yellow-100 text-yellow-800">
            Rang: {volumeData.rank}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-sm font-medium">Volume Personnel (PV)</h3>
                <p className="text-xs text-gray-500">
                  Objectif mensuel: {formatNumber(volumeData.personalTarget)} PV
                </p>
              </div>
              <div className="flex items-center text-green-600 text-xs">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>
                  +{volumeData.personalGrowth}% par rapport au mois dernier
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Progress
                  value={volumeData.personalPercentage}
                  className="h-2"
                />
              </div>
              <div className="text-sm font-medium">
                {formatNumber(volumeData.personalVolume)} /{" "}
                {formatNumber(volumeData.personalTarget)}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-sm font-medium">Volume Groupe (GV)</h3>
                <p className="text-xs text-gray-500">
                  Pour le rang {volumeData.nextRank}:{" "}
                  {formatNumber(volumeData.groupTarget)} GV
                </p>
              </div>
              <div className="flex items-center text-green-600 text-xs">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>
                  +{volumeData.groupGrowth}% par rapport au mois dernier
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Progress value={volumeData.groupPercentage} className="h-2" />
              </div>
              <div className="text-sm font-medium">
                {formatNumber(volumeData.groupVolume)} /{" "}
                {formatNumber(volumeData.groupTarget)}
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <TrendingUp className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-700">
                  Progression de Rang
                </h4>
                <p className="text-xs text-blue-600 mt-1">
                  Il vous manque{" "}
                  {formatNumber(
                    volumeData.groupTarget - volumeData.groupVolume,
                  )}{" "}
                  GV pour atteindre le rang {volumeData.nextRank}. Continuez à
                  développer votre équipe !
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
