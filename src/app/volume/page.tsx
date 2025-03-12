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
import { Progress } from "@/components/ui/progress";
import {
  AreaChart,
  Area,
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
  Filter,
  TrendingUp,
  Users,
  Award,
  Info,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  BarChart2,
  PieChart as PieChartIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InteractiveControls from "@/components/dashboard/InteractiveControls";

export default function VolumePage() {
  const [timeRange, setTimeRange] = useState("month");

  // Données pour les points de volume groupe (GVP)
  const gvpData = {
    current: 28500,
    target: 30000,
    previousPeriod: 24000,
    percentChange: 18.75,
    thresholds: [
      { level: "Bronze", threshold: 5000, achieved: true },
      { level: "Argent", threshold: 10000, achieved: true },
      { level: "Or", threshold: 20000, achieved: true },
      { level: "Rubis", threshold: 30000, achieved: false },
      { level: "Diamant", threshold: 50000, achieved: false },
    ],
    history: [
      { month: "Jan", value: 15000 },
      { month: "Fév", value: 16200 },
      { month: "Mar", value: 17500 },
      { month: "Avr", value: 18800 },
      { month: "Mai", value: 20000 },
      { month: "Juin", value: 21500 },
      { month: "Juil", value: 22800 },
      { month: "Août", value: 24000 },
      { month: "Sep", value: 25500 },
      { month: "Oct", value: 28500 },
    ],
  };

  // Données pour les points de volume équipe (TVP)
  const tvpData = {
    current: 4800,
    target: 6000,
    previousPeriod: 4200,
    percentChange: 14.29,
    thresholds: [
      { level: "Bronze", threshold: 1000, achieved: true },
      { level: "Argent", threshold: 2500, achieved: true },
      { level: "Or", threshold: 4000, achieved: true },
      { level: "Rubis", threshold: 6000, achieved: false },
      { level: "Diamant", threshold: 10000, achieved: false },
    ],
    history: [
      { month: "Jan", value: 2800 },
      { month: "Fév", value: 3100 },
      { month: "Mar", value: 3400 },
      { month: "Avr", value: 3600 },
      { month: "Mai", value: 3800 },
      { month: "Juin", value: 4000 },
      { month: "Juil", value: 4200 },
      { month: "Août", value: 4400 },
      { month: "Sep", value: 4600 },
      { month: "Oct", value: 4800 },
    ],
  };

  // Données pour la répartition des points de volume par équipe
  const teamVolumeData = [
    { name: "Équipe A (Jean)", value: 12500, color: "#4f46e5" },
    { name: "Équipe B (Marie)", value: 8200, color: "#0ea5e9" },
    { name: "Équipe C (Pierre)", value: 5800, color: "#10b981" },
    { name: "Équipe D (Sophie)", value: 2000, color: "#f59e0b" },
  ];

  // Données pour les contributeurs principaux
  const topContributors = [
    {
      name: "Jean Dupont",
      team: "Équipe A",
      volume: 5200,
      percentOfTotal: 18.2,
      trend: 12.5,
    },
    {
      name: "Marie Lambert",
      team: "Équipe B",
      volume: 4100,
      percentOfTotal: 14.4,
      trend: 8.3,
    },
    {
      name: "Pierre Martin",
      team: "Équipe C",
      volume: 3800,
      percentOfTotal: 13.3,
      trend: 15.2,
    },
    {
      name: "Sophie Dubois",
      team: "Équipe D",
      volume: 2000,
      percentOfTotal: 7.0,
      trend: -2.1,
    },
    {
      name: "Thomas Leroy",
      team: "Équipe A",
      volume: 1800,
      percentOfTotal: 6.3,
      trend: 5.6,
    },
  ];

  // Calcul du pourcentage de progression vers l'objectif
  const calculateProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  const gvpProgress = calculateProgress(gvpData.current, gvpData.target);
  const tvpProgress = calculateProgress(tvpData.current, tvpData.target);

  // Formatage des nombres avec séparateurs de milliers
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("fr-FR").format(value);
  };

  // Conversion d'euros en FCFA
  const formatCurrency = (value: number) => {
    // Conversion d'euros en FCFA (1 EUR = 650 FCFA)
    const valueInCFA = Math.floor(value * 650);
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valueInCFA);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Suivi des Points de Volume
          </h1>
          <p className="text-gray-500 mt-1">
            Surveillez vos points de volume groupe et équipe pour maximiser vos
            commissions
          </p>
        </div>

        <InteractiveControls className="mb-6 rounded-lg" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">
              Tableau de Bord des Volumes
            </h2>
            <p className="text-gray-500">
              Vue d'ensemble de vos performances de volume
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[160px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sélectionner période" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Ce Mois</SelectItem>
                <SelectItem value="quarter">Ce Trimestre</SelectItem>
                <SelectItem value="year">Cette Année</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Cartes de résumé */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Carte GVP */}
          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Points Volume Groupe (GVP)</CardTitle>
                  <CardDescription>
                    Volume total généré par votre organisation
                  </CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Niveau: Or</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Volume Actuel
                    </h4>
                    <p className="text-3xl font-bold">
                      {formatNumber(gvpData.current)} GVP
                    </p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>
                        +{gvpData.percentChange}% par rapport à la période
                        précédente
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Prochain Palier
                    </h4>
                    <p className="text-3xl font-bold">
                      {formatNumber(gvpData.target)} GVP
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Info className="h-4 w-4 mr-1" />
                      <span>Niveau Rubis</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Progression vers le prochain palier
                    </span>
                    <span className="text-sm">{gvpProgress}%</span>
                  </div>
                  <Progress value={gvpProgress} className="h-2" />
                  <p className="mt-2 text-xs text-gray-500">
                    Il vous manque{" "}
                    {formatNumber(gvpData.target - gvpData.current)} GVP pour
                    atteindre le niveau Rubis
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">
                    Évolution Mensuelle
                  </h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={gvpData.history}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        formatter={(value) => [
                          `${formatNumber(value as number)} GVP`,
                          "Volume",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4f46e5"
                        fill="#c7d2fe"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carte TVP */}
          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Points Volume Équipe (TVP)</CardTitle>
                  <CardDescription>
                    Volume généré par vos distributeurs personnellement
                    parrainés
                  </CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Niveau: Or</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Volume Actuel
                    </h4>
                    <p className="text-3xl font-bold">
                      {formatNumber(tvpData.current)} TVP
                    </p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>
                        +{tvpData.percentChange}% par rapport à la période
                        précédente
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Prochain Palier
                    </h4>
                    <p className="text-3xl font-bold">
                      {formatNumber(tvpData.target)} TVP
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Info className="h-4 w-4 mr-1" />
                      <span>Niveau Rubis</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Progression vers le prochain palier
                    </span>
                    <span className="text-sm">{tvpProgress}%</span>
                  </div>
                  <Progress value={tvpProgress} className="h-2" />
                  <p className="mt-2 text-xs text-gray-500">
                    Il vous manque{" "}
                    {formatNumber(tvpData.target - tvpData.current)} TVP pour
                    atteindre le niveau Rubis
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">
                    Évolution Mensuelle
                  </h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={tvpData.history}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        formatter={(value) => [
                          `${formatNumber(value as number)} TVP`,
                          "Volume",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#8b5cf6"
                        fill="#ddd6fe"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets pour les analyses détaillées */}
        <Tabs defaultValue="thresholds" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-1 md:grid-cols-3 w-full">
            <TabsTrigger value="thresholds">Paliers de Volume</TabsTrigger>
            <TabsTrigger value="distribution">
              Répartition par Équipe
            </TabsTrigger>
            <TabsTrigger value="contributors">
              Principaux Contributeurs
            </TabsTrigger>
          </TabsList>

          {/* Onglet Paliers de Volume */}
          <TabsContent value="thresholds" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Paliers de Qualification</CardTitle>
                <CardDescription>
                  Seuils de volume requis pour chaque niveau de qualification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Paliers GVP */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Paliers GVP</h3>
                    <div className="space-y-4">
                      {gvpData.thresholds.map((threshold, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              {threshold.achieved ? (
                                <Award className="h-5 w-5 text-green-500 mr-2" />
                              ) : (
                                <Award className="h-5 w-5 text-gray-300 mr-2" />
                              )}
                              <span className="font-medium">
                                Niveau {threshold.level}
                              </span>
                            </div>
                            <span className="text-sm">
                              {formatNumber(threshold.threshold)} GVP
                            </span>
                          </div>
                          <Progress
                            value={calculateProgress(
                              gvpData.current,
                              threshold.threshold,
                            )}
                            className={`h-2 ${threshold.achieved ? "bg-green-500" : ""}`}
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            {threshold.achieved
                              ? `Niveau atteint - Dépassé de ${formatNumber(gvpData.current - threshold.threshold)} points`
                              : `Il manque ${formatNumber(threshold.threshold - gvpData.current)} points pour atteindre ce niveau`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Paliers TVP */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Paliers TVP</h3>
                    <div className="space-y-4">
                      {tvpData.thresholds.map((threshold, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              {threshold.achieved ? (
                                <Award className="h-5 w-5 text-green-500 mr-2" />
                              ) : (
                                <Award className="h-5 w-5 text-gray-300 mr-2" />
                              )}
                              <span className="font-medium">
                                Niveau {threshold.level}
                              </span>
                            </div>
                            <span className="text-sm">
                              {formatNumber(threshold.threshold)} TVP
                            </span>
                          </div>
                          <Progress
                            value={calculateProgress(
                              tvpData.current,
                              threshold.threshold,
                            )}
                            className={`h-2 ${threshold.achieved ? "bg-green-500" : ""}`}
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            {threshold.achieved
                              ? `Niveau atteint - Dépassé de ${formatNumber(tvpData.current - threshold.threshold)} points`
                              : `Il manque ${formatNumber(threshold.threshold - tvpData.current)} points pour atteindre ce niveau`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">
                        Avantages des Paliers Supérieurs
                      </h4>
                      <p className="text-sm text-blue-600">
                        Atteindre le niveau Rubis vous permettra de débloquer un
                        taux de commission de 12% sur votre volume d'équipe et
                        d'accéder au programme de leadership avancé. Le niveau
                        Diamant offre un bonus supplémentaire de 5% sur
                        l'ensemble de votre organisation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Répartition par Équipe */}
          <TabsContent value="distribution" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Répartition du Volume par Équipe</CardTitle>
                <CardDescription>
                  Analyse de la contribution de chaque équipe à votre volume
                  total
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Distribution du Volume
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={teamVolumeData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {teamVolumeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => formatNumber(value as number)}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Détail par Équipe
                    </h3>
                    <div className="space-y-4">
                      {teamVolumeData.map((team, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: team.color }}
                              ></div>
                              <span className="font-medium">{team.name}</span>
                            </div>
                            <span className="font-bold">
                              {formatNumber(team.value)} GVP
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="h-2 rounded-full"
                                style={{
                                  width: `${(team.value / gvpData.current) * 100}%`,
                                  backgroundColor: team.color,
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between mt-1 text-xs text-gray-500">
                              <span>
                                {((team.value / gvpData.current) * 100).toFixed(
                                  1,
                                )}
                                % du volume total
                              </span>
                              <span>{formatNumber(team.value)} GVP</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-1">
                        Opportunité d'Équilibrage
                      </h4>
                      <p className="text-sm text-yellow-600">
                        L'Équipe D représente seulement 7% de votre volume
                        total. Concentrez-vous sur le développement de cette
                        équipe pour équilibrer votre organisation et réduire les
                        risques liés à une dépendance excessive envers les
                        autres équipes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Principaux Contributeurs */}
          <TabsContent value="contributors" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Principaux Contributeurs</CardTitle>
                <CardDescription>
                  Membres générant le plus de volume dans votre organisation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Distributeur</TableHead>
                        <TableHead>Équipe</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>% du Total</TableHead>
                        <TableHead>Évolution</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topContributors.map((contributor, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {contributor.name}
                          </TableCell>
                          <TableCell>{contributor.team}</TableCell>
                          <TableCell>
                            {formatNumber(contributor.volume)} GVP
                          </TableCell>
                          <TableCell>
                            {contributor.percentOfTotal.toFixed(1)}%
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {contributor.trend >= 0 ? (
                                <>
                                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                                  <span className="text-green-500">
                                    +{contributor.trend}%
                                  </span>
                                </>
                              ) : (
                                <>
                                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                                  <span className="text-red-500">
                                    {contributor.trend}%
                                  </span>
                                </>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">
                    Répartition des Contributions
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={topContributors}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis type="number" />
                      <YAxis
                        type="category"
                        dataKey="name"
                        width={100}
                        stroke="#6b7280"
                      />
                      <Tooltip
                        formatter={(value) => formatNumber(value as number)}
                      />
                      <Legend />
                      <Bar
                        dataKey="volume"
                        name="Volume (GVP)"
                        fill="#4f46e5"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">
                        Stratégie de Développement
                      </h4>
                      <p className="text-sm text-green-600">
                        Jean Dupont et Marie Lambert représentent ensemble plus
                        de 32% de votre volume total. Envisagez d'organiser une
                        formation spéciale pour les aider à développer leurs
                        équipes et à atteindre le prochain niveau de
                        qualification.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2023 Trévo Compensation Dashboard. Tous droits réservés.</p>
          <p className="mt-1">Dernière mise à jour: 15 octobre 2023 à 10:30</p>
        </div>
      </footer>
    </div>
  );
}
