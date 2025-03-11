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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
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
  Search,
  Trophy,
  Target,
  Crown,
  Star,
  Zap,
  UserCheck,
  Percent,
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
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InteractiveControls from "@/components/dashboard/InteractiveControls";

export default function ComparisonPage() {
  const [timeRange, setTimeRange] = useState("month");
  const [rankFilter, setRankFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Données pour l'utilisateur actuel
  const currentUser = {
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rank: "Or",
    personalVolume: 1250,
    groupVolume: 28500,
    teamSize: 32,
    activeRate: 87.5,
    retentionRate: 92,
    customerRatio: 3.2,
    averageOrder: 120,
    growthRate: 15.8,
    leadershipScore: 78,
  };

  // Données pour les leaders de rang similaire
  const similarRankLeaders = [
    {
      id: "1",
      name: "Thomas Martin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
      rank: "Or",
      personalVolume: 1450,
      groupVolume: 32000,
      teamSize: 38,
      activeRate: 89.5,
      retentionRate: 94,
      customerRatio: 3.5,
      averageOrder: 135,
      growthRate: 18.2,
      leadershipScore: 85,
    },
    {
      id: "2",
      name: "Emma Bernard",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rank: "Or",
      personalVolume: 1180,
      groupVolume: 26800,
      teamSize: 29,
      activeRate: 86.2,
      retentionRate: 90,
      customerRatio: 3.0,
      averageOrder: 115,
      growthRate: 14.5,
      leadershipScore: 75,
    },
    {
      id: "3",
      name: "Lucas Dubois",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
      rank: "Or",
      personalVolume: 1320,
      groupVolume: 29500,
      teamSize: 34,
      activeRate: 88.2,
      retentionRate: 91,
      customerRatio: 3.3,
      averageOrder: 125,
      growthRate: 16.4,
      leadershipScore: 80,
    },
    {
      id: "4",
      name: "Sophie Moreau",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
      rank: "Or",
      personalVolume: 1150,
      groupVolume: 25800,
      teamSize: 28,
      activeRate: 85.7,
      retentionRate: 89,
      customerRatio: 2.9,
      averageOrder: 110,
      growthRate: 13.8,
      leadershipScore: 72,
    },
  ];

  // Données pour les leaders de rang supérieur (modèles à suivre)
  const higherRankLeaders = [
    {
      id: "5",
      name: "Philippe Laurent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Philippe",
      rank: "Rubis",
      personalVolume: 1800,
      groupVolume: 45000,
      teamSize: 52,
      activeRate: 92.3,
      retentionRate: 95,
      customerRatio: 4.1,
      averageOrder: 150,
      growthRate: 22.5,
      leadershipScore: 90,
    },
    {
      id: "6",
      name: "Isabelle Mercier",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabelle",
      rank: "Rubis",
      personalVolume: 1650,
      groupVolume: 42000,
      teamSize: 48,
      activeRate: 91.7,
      retentionRate: 94,
      customerRatio: 3.9,
      averageOrder: 145,
      growthRate: 21.2,
      leadershipScore: 88,
    },
  ];

  // Données pour le classement global
  const allLeaders = [
    ...similarRankLeaders,
    ...higherRankLeaders,
    {
      id: "current",
      name: currentUser.name,
      avatar: currentUser.avatar,
      rank: currentUser.rank,
      personalVolume: currentUser.personalVolume,
      groupVolume: currentUser.groupVolume,
      teamSize: currentUser.teamSize,
      activeRate: currentUser.activeRate,
      retentionRate: currentUser.retentionRate,
      customerRatio: currentUser.customerRatio,
      averageOrder: currentUser.averageOrder,
      growthRate: currentUser.growthRate,
      leadershipScore: currentUser.leadershipScore,
    },
  ].sort((a, b) => b.groupVolume - a.groupVolume);

  // Filtrer les leaders en fonction de la recherche et du filtre de rang
  const filteredLeaders = allLeaders.filter((leader) => {
    const matchesSearch = leader.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRank = rankFilter === "all" || leader.rank === rankFilter;
    return matchesSearch && matchesRank;
  });

  // Données pour le graphique radar de comparaison
  const radarData = [
    {
      subject: "Volume Personnel",
      current: currentUser.personalVolume,
      average:
        similarRankLeaders.reduce(
          (sum, leader) => sum + leader.personalVolume,
          0,
        ) / similarRankLeaders.length,
      top: higherRankLeaders[0].personalVolume,
      fullMark: 2000,
    },
    {
      subject: "Volume Groupe",
      current: currentUser.groupVolume / 1000, // Divisé pour l'échelle
      average:
        similarRankLeaders.reduce(
          (sum, leader) => sum + leader.groupVolume,
          0,
        ) /
        similarRankLeaders.length /
        1000,
      top: higherRankLeaders[0].groupVolume / 1000,
      fullMark: 50,
    },
    {
      subject: "Taille d'Équipe",
      current: currentUser.teamSize,
      average:
        similarRankLeaders.reduce((sum, leader) => sum + leader.teamSize, 0) /
        similarRankLeaders.length,
      top: higherRankLeaders[0].teamSize,
      fullMark: 60,
    },
    {
      subject: "Taux d'Activité",
      current: currentUser.activeRate,
      average:
        similarRankLeaders.reduce((sum, leader) => sum + leader.activeRate, 0) /
        similarRankLeaders.length,
      top: higherRankLeaders[0].activeRate,
      fullMark: 100,
    },
    {
      subject: "Taux de Rétention",
      current: currentUser.retentionRate,
      average:
        similarRankLeaders.reduce(
          (sum, leader) => sum + leader.retentionRate,
          0,
        ) / similarRankLeaders.length,
      top: higherRankLeaders[0].retentionRate,
      fullMark: 100,
    },
    {
      subject: "Ratio Clients",
      current: currentUser.customerRatio,
      average:
        similarRankLeaders.reduce(
          (sum, leader) => sum + leader.customerRatio,
          0,
        ) / similarRankLeaders.length,
      top: higherRankLeaders[0].customerRatio,
      fullMark: 5,
    },
  ];

  // Données pour le graphique de comparaison de volume
  const volumeComparisonData = [
    {
      name: "Vous",
      personalVolume: currentUser.personalVolume,
      groupVolume: currentUser.groupVolume,
    },
    {
      name: "Moyenne Or",
      personalVolume:
        similarRankLeaders.reduce(
          (sum, leader) => sum + leader.personalVolume,
          0,
        ) / similarRankLeaders.length,
      groupVolume:
        similarRankLeaders.reduce(
          (sum, leader) => sum + leader.groupVolume,
          0,
        ) / similarRankLeaders.length,
    },
    {
      name: "Top Or",
      personalVolume: Math.max(
        ...similarRankLeaders.map((leader) => leader.personalVolume),
      ),
      groupVolume: Math.max(
        ...similarRankLeaders.map((leader) => leader.groupVolume),
      ),
    },
    {
      name: "Niveau Rubis",
      personalVolume: higherRankLeaders[0].personalVolume,
      groupVolume: higherRankLeaders[0].groupVolume,
    },
  ];

  // Données pour le graphique de croissance
  const growthComparisonData = [
    {
      name: "Vous",
      growthRate: currentUser.growthRate,
    },
    {
      name: "Moyenne Or",
      growthRate:
        similarRankLeaders.reduce((sum, leader) => sum + leader.growthRate, 0) /
        similarRankLeaders.length,
    },
    {
      name: "Top Or",
      growthRate: Math.max(
        ...similarRankLeaders.map((leader) => leader.growthRate),
      ),
    },
    {
      name: "Niveau Rubis",
      growthRate: higherRankLeaders[0].growthRate,
    },
  ];

  // Formatage des nombres avec séparateurs de milliers
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("fr-FR").format(value);
  };

  // Calcul du rang dans le classement
  const currentUserRank =
    allLeaders.findIndex((leader) => leader.id === "current") + 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Tableau Comparatif
          </h1>
          <p className="text-gray-500 mt-1">
            Comparez vos performances avec d'autres leaders pour identifier vos
            forces et opportunités d'amélioration
          </p>
        </div>

        <InteractiveControls className="mb-6 rounded-lg" />

        {/* Carte de résumé de position */}
        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle>Votre Position Comparative</CardTitle>
                <CardDescription>
                  Vue d'ensemble de votre classement parmi les leaders
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
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
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Classement Global
                </h4>
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                  <div>
                    <p className="text-3xl font-bold">#{currentUserRank}</p>
                    <p className="text-sm text-gray-600">
                      sur {allLeaders.length} leaders
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Score de Leadership
                </h4>
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-purple-500 mr-3" />
                  <div>
                    <p className="text-3xl font-bold">
                      {currentUser.leadershipScore}/100
                    </p>
                    <div className="mt-1">
                      <Progress
                        value={currentUser.leadershipScore}
                        className="h-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Prochain Palier
                </h4>
                <div className="flex items-center">
                  <Target className="h-8 w-8 text-red-500 mr-3" />
                  <div>
                    <p className="text-3xl font-bold">Rubis</p>
                    <p className="text-sm text-gray-600">
                      {formatNumber(30000 - currentUser.groupVolume)} GVP
                      manquants
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">
                Comparaison avec les Leaders
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={radarData}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Vous"
                      dataKey="current"
                      stroke="#4f46e5"
                      fill="#4f46e5"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Moyenne Or"
                      dataKey="average"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Top Rubis"
                      dataKey="top"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.3}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Comparaison de Volume
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={volumeComparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => formatNumber(value as number)}
                    />
                    <Legend />
                    <Bar
                      name="Volume Personnel"
                      dataKey="personalVolume"
                      fill="#8884d8"
                    />
                    <Bar
                      name="Volume Groupe"
                      dataKey="groupVolume"
                      fill="#82ca9d"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Taux de Croissance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={growthComparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar
                      name="Taux de Croissance"
                      dataKey="growthRate"
                      fill="#ff7300"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Dernière mise à jour: 15 octobre 2023</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Exporter les données
            </Button>
          </CardFooter>
        </Card>

        {/* Onglets pour les différentes sections */}
        <Tabs defaultValue="ranking" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-1 md:grid-cols-3 w-full">
            <TabsTrigger value="ranking">Classement Global</TabsTrigger>
            <TabsTrigger value="similar">Leaders Similaires</TabsTrigger>
            <TabsTrigger value="top">Top Performers</TabsTrigger>
          </TabsList>

          {/* Onglet Classement Global */}
          <TabsContent value="ranking" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Classement Global des Leaders</CardTitle>
                    <CardDescription>
                      Positionnement de tous les leaders par volume de groupe
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Rechercher un leader..."
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select value={rankFilter} onValueChange={setRankFilter}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Filtrer par rang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les Rangs</SelectItem>
                        <SelectItem value="Or">Or</SelectItem>
                        <SelectItem value="Rubis">Rubis</SelectItem>
                        <SelectItem value="Diamant">Diamant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">Rang</TableHead>
                        <TableHead>Leader</TableHead>
                        <TableHead>Niveau</TableHead>
                        <TableHead>Volume Personnel</TableHead>
                        <TableHead>Volume Groupe</TableHead>
                        <TableHead>Taille d'Équipe</TableHead>
                        <TableHead>Taux d'Activité</TableHead>
                        <TableHead>Taux de Croissance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLeaders.map((leader, index) => (
                        <TableRow
                          key={leader.id}
                          className={
                            leader.id === "current" ? "bg-blue-50" : ""
                          }
                        >
                          <TableCell className="font-bold">
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarImage
                                  src={leader.avatar}
                                  alt={leader.name}
                                />
                                <AvatarFallback>
                                  {leader.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p
                                  className={`font-medium ${leader.id === "current" ? "text-blue-700" : ""}`}
                                >
                                  {leader.name}
                                  {leader.id === "current" && " (Vous)"}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={`font-medium ${leader.rank === "Rubis" ? "text-red-600 border-red-300" : "text-yellow-600 border-yellow-300"}`}
                            >
                              {leader.rank}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {formatNumber(leader.personalVolume)} PV
                          </TableCell>
                          <TableCell>
                            {formatNumber(leader.groupVolume)} GVP
                          </TableCell>
                          <TableCell>{leader.teamSize} membres</TableCell>
                          <TableCell>{leader.activeRate}%</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {leader.growthRate >= 0 ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={
                                  leader.growthRate >= 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {leader.growthRate}%
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Leaders Similaires */}
          <TabsContent value="similar" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Comparaison avec les Leaders de Rang Or</CardTitle>
                <CardDescription>
                  Analyse détaillée de vos performances par rapport aux leaders
                  de même rang
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Vos Forces</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-start">
                          <Trophy className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-green-700 mb-1">
                              Volume Personnel Supérieur
                            </h4>
                            <p className="text-sm text-green-600">
                              Votre volume personnel de{" "}
                              {formatNumber(currentUser.personalVolume)} PV est
                              supérieur à la moyenne des leaders Or (
                              {formatNumber(
                                Math.round(
                                  similarRankLeaders.reduce(
                                    (sum, leader) =>
                                      sum + leader.personalVolume,
                                    0,
                                  ) / similarRankLeaders.length,
                                ),
                              )}{" "}
                              PV).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-start">
                          <UserCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-green-700 mb-1">
                              Taux de Rétention Élevé
                            </h4>
                            <p className="text-sm text-green-600">
                              Votre taux de rétention de{" "}
                              {currentUser.retentionRate}% est supérieur à la
                              moyenne des leaders Or (
                              {Math.round(
                                similarRankLeaders.reduce(
                                  (sum, leader) => sum + leader.retentionRate,
                                  0,
                                ) / similarRankLeaders.length,
                              )}
                              %).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Opportunités d'Amélioration
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                        <div className="flex items-start">
                          <Users className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-1">
                              Taille d'Équipe
                            </h4>
                            <p className="text-sm text-yellow-600">
                              Votre équipe de {currentUser.teamSize} membres est
                              légèrement inférieure à la moyenne des leaders Or
                              (
                              {Math.round(
                                similarRankLeaders.reduce(
                                  (sum, leader) => sum + leader.teamSize,
                                  0,
                                ) / similarRankLeaders.length,
                              )}{" "}
                              membres).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                        <div className="flex items-start">
                          <Percent className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-1">
                              Taux de Croissance
                            </h4>
                            <p className="text-sm text-yellow-600">
                              Votre taux de croissance de{" "}
                              {currentUser.growthRate}% est inférieur à la
                              moyenne des leaders Or (
                              {Math.round(
                                similarRankLeaders.reduce(
                                  (sum, leader) => sum + leader.growthRate,
                                  0,
                                ) / similarRankLeaders.length,
                              )}
                              %).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">
                    Comparaison Détaillée
                  </h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Métrique</TableHead>
                          <TableHead>Votre Valeur</TableHead>
                          <TableHead>Moyenne Or</TableHead>
                          <TableHead>Top Or</TableHead>
                          <TableHead>Écart avec la Moyenne</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Volume Personnel
                          </TableCell>
                          <TableCell>
                            {formatNumber(currentUser.personalVolume)} PV
                          </TableCell>
                          <TableCell>
                            {formatNumber(
                              Math.round(
                                similarRankLeaders.reduce(
                                  (sum, leader) => sum + leader.personalVolume,
                                  0,
                                ) / similarRankLeaders.length,
                              ),
                            )}{" "}
                            PV
                          </TableCell>
                          <TableCell>
                            {formatNumber(
                              Math.max(
                                ...similarRankLeaders.map(
                                  (leader) => leader.personalVolume,
                                ),
                              ),
                            )}{" "}
                            PV
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {currentUser.personalVolume >
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.personalVolume,
                                0,
                              ) /
                                similarRankLeaders.length ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={
                                  currentUser.personalVolume >
                                  similarRankLeaders.reduce(
                                    (sum, leader) =>
                                      sum + leader.personalVolume,
                                    0,
                                  ) /
                                    similarRankLeaders.length
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {Math.abs(
                                  Math.round(
                                    ((currentUser.personalVolume -
                                      similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.personalVolume,
                                        0,
                                      ) /
                                        similarRankLeaders.length) /
                                      (similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.personalVolume,
                                        0,
                                      ) /
                                        similarRankLeaders.length)) *
                                      100,
                                  ),
                                )}
                                %
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Volume Groupe
                          </TableCell>
                          <TableCell>
                            {formatNumber(currentUser.groupVolume)} GVP
                          </TableCell>
                          <TableCell>
                            {formatNumber(
                              Math.round(
                                similarRankLeaders.reduce(
                                  (sum, leader) => sum + leader.groupVolume,
                                  0,
                                ) / similarRankLeaders.length,
                              ),
                            )}{" "}
                            GVP
                          </TableCell>
                          <TableCell>
                            {formatNumber(
                              Math.max(
                                ...similarRankLeaders.map(
                                  (leader) => leader.groupVolume,
                                ),
                              ),
                            )}{" "}
                            GVP
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {currentUser.groupVolume >
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.groupVolume,
                                0,
                              ) /
                                similarRankLeaders.length ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={
                                  currentUser.groupVolume >
                                  similarRankLeaders.reduce(
                                    (sum, leader) => sum + leader.groupVolume,
                                    0,
                                  ) /
                                    similarRankLeaders.length
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {Math.abs(
                                  Math.round(
                                    ((currentUser.groupVolume -
                                      similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.groupVolume,
                                        0,
                                      ) /
                                        similarRankLeaders.length) /
                                      (similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.groupVolume,
                                        0,
                                      ) /
                                        similarRankLeaders.length)) *
                                      100,
                                  ),
                                )}
                                %
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Taille d'Équipe
                          </TableCell>
                          <TableCell>{currentUser.teamSize} membres</TableCell>
                          <TableCell>
                            {Math.round(
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.teamSize,
                                0,
                              ) / similarRankLeaders.length,
                            )}{" "}
                            membres
                          </TableCell>
                          <TableCell>
                            {Math.max(
                              ...similarRankLeaders.map(
                                (leader) => leader.teamSize,
                              ),
                            )}{" "}
                            membres
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {currentUser.teamSize >
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.teamSize,
                                0,
                              ) /
                                similarRankLeaders.length ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={
                                  currentUser.teamSize >
                                  similarRankLeaders.reduce(
                                    (sum, leader) => sum + leader.teamSize,
                                    0,
                                  ) /
                                    similarRankLeaders.length
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {Math.abs(
                                  Math.round(
                                    ((currentUser.teamSize -
                                      similarRankLeaders.reduce(
                                        (sum, leader) => sum + leader.teamSize,
                                        0,
                                      ) /
                                        similarRankLeaders.length) /
                                      (similarRankLeaders.reduce(
                                        (sum, leader) => sum + leader.teamSize,
                                        0,
                                      ) /
                                        similarRankLeaders.length)) *
                                      100,
                                  ),
                                )}
                                %
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Taux d'Activité
                          </TableCell>
                          <TableCell>{currentUser.activeRate}%</TableCell>
                          <TableCell>
                            {Math.round(
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.activeRate,
                                0,
                              ) / similarRankLeaders.length,
                            )}
                            %
                          </TableCell>
                          <TableCell>
                            {Math.max(
                              ...similarRankLeaders.map(
                                (leader) => leader.activeRate,
                              ),
                            )}
                            %
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {currentUser.activeRate >
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.activeRate,
                                0,
                              ) /
                                similarRankLeaders.length ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={
                                  currentUser.activeRate >
                                  similarRankLeaders.reduce(
                                    (sum, leader) => sum + leader.activeRate,
                                    0,
                                  ) /
                                    similarRankLeaders.length
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {Math.abs(
                                  Math.round(
                                    ((currentUser.activeRate -
                                      similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.activeRate,
                                        0,
                                      ) /
                                        similarRankLeaders.length) /
                                      (similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.activeRate,
                                        0,
                                      ) /
                                        similarRankLeaders.length)) *
                                      100,
                                  ),
                                )}
                                %
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Taux de Croissance
                          </TableCell>
                          <TableCell>{currentUser.growthRate}%</TableCell>
                          <TableCell>
                            {Math.round(
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.growthRate,
                                0,
                              ) / similarRankLeaders.length,
                            )}
                            %
                          </TableCell>
                          <TableCell>
                            {Math.max(
                              ...similarRankLeaders.map(
                                (leader) => leader.growthRate,
                              ),
                            )}
                            %
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {currentUser.growthRate >
                              similarRankLeaders.reduce(
                                (sum, leader) => sum + leader.growthRate,
                                0,
                              ) /
                                similarRankLeaders.length ? (
                                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={
                                  currentUser.growthRate >
                                  similarRankLeaders.reduce(
                                    (sum, leader) => sum + leader.growthRate,
                                    0,
                                  ) /
                                    similarRankLeaders.length
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {Math.abs(
                                  Math.round(
                                    ((currentUser.growthRate -
                                      similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.growthRate,
                                        0,
                                      ) /
                                        similarRankLeaders.length) /
                                      (similarRankLeaders.reduce(
                                        (sum, leader) =>
                                          sum + leader.growthRate,
                                        0,
                                      ) /
                                        similarRankLeaders.length)) *
                                      100,
                                  ),
                                )}
                                %
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Top Performers */}
          <TabsContent value="top" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Analyse des Top Performers</CardTitle>
                <CardDescription>
                  Découvrez les stratégies des leaders de rang supérieur pour
                  accélérer votre progression
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {higherRankLeaders.map((leader) => (
                    <Card
                      key={leader.id}
                      className="border-l-4 border-l-red-500"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage
                                src={leader.avatar}
                                alt={leader.name}
                              />
                              <AvatarFallback>
                                {leader.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">
                                {leader.name}
                              </CardTitle>
                              <CardDescription>
                                <Badge
                                  variant="outline"
                                  className="text-red-600 border-red-300 mt-1"
                                >
                                  {leader.rank}
                                </Badge>
                              </CardDescription>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">Volume Groupe</p>
                            <p className="text-xl font-bold">
                              {formatNumber(leader.groupVolume)} GVP
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Volume Personnel
                            </p>
                            <p className="font-medium">
                              {formatNumber(leader.personalVolume)} PV
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Taille d'Équipe
                            </p>
                            <p className="font-medium">
                              {leader.teamSize} membres
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Taux d'Activité
                            </p>
                            <p className="font-medium">{leader.activeRate}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Taux de Croissance
                            </p>
                            <p className="font-medium">{leader.growthRate}%</p>
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Écart avec votre performance
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center">
                              <span className="text-gray-600 mr-1">GVP:</span>
                              <span className="text-red-600">
                                +
                                {formatNumber(
                                  leader.groupVolume - currentUser.groupVolume,
                                )}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-600 mr-1">PV:</span>
                              <span className="text-red-600">
                                +
                                {formatNumber(
                                  leader.personalVolume -
                                    currentUser.personalVolume,
                                )}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-600 mr-1">
                                Équipe:
                              </span>
                              <span className="text-red-600">
                                +{leader.teamSize - currentUser.teamSize}{" "}
                                membres
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-600 mr-1">
                                Activité:
                              </span>
                              <span className="text-red-600">
                                +
                                {(
                                  leader.activeRate - currentUser.activeRate
                                ).toFixed(1)}
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 mb-6">
                  <div className="flex items-start">
                    <Crown className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-purple-700 mb-1">
                        Stratégies des Top Performers
                      </h4>
                      <p className="text-sm text-purple-600 mb-2">
                        Les leaders de rang Rubis se distinguent par les
                        caractéristiques suivantes:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-purple-600">
                        <li>
                          Volume personnel 30-40% plus élevé que la moyenne des
                          leaders Or
                        </li>
                        <li>
                          Équipes plus grandes avec un taux d'activité supérieur
                          à 90%
                        </li>
                        <li>
                          Ratio clients/distributeurs supérieur à 3.5 (contre
                          3.0 pour les leaders Or)
                        </li>
                        <li>
                          Taux de croissance mensuel constamment au-dessus de
                          20%
                        </li>
                        <li>
                          Développement actif de nouveaux leaders dans
                          différentes lignées
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Écart avec le Niveau Rubis
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Volume Groupe</span>
                          <span>
                            {formatNumber(currentUser.groupVolume)} /{" "}
                            {formatNumber(30000)} GVP
                          </span>
                        </div>
                        <Progress
                          value={(currentUser.groupVolume / 30000) * 100}
                          className="h-2"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Il vous manque{" "}
                          {formatNumber(30000 - currentUser.groupVolume)} GVP
                          pour atteindre le niveau Rubis
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Volume Personnel</span>
                          <span>
                            {formatNumber(currentUser.personalVolume)} /{" "}
                            {formatNumber(1500)} PV
                          </span>
                        </div>
                        <Progress
                          value={(currentUser.personalVolume / 1500) * 100}
                          className="h-2"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Il vous manque{" "}
                          {formatNumber(1500 - currentUser.personalVolume)} PV
                          pour atteindre le niveau recommandé
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Taille d'Équipe</span>
                          <span>{currentUser.teamSize} / 45 membres</span>
                        </div>
                        <Progress
                          value={(currentUser.teamSize / 45) * 100}
                          className="h-2"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Il vous manque {45 - currentUser.teamSize} membres
                          pour atteindre la taille d'équipe recommandée
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Plan d'Action Recommandé
                    </h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          <Zap className="h-4 w-4 inline mr-1" /> Priorité 1:
                          Augmenter le Volume Groupe
                        </h4>
                        <p className="text-sm text-green-600">
                          Concentrez-vous sur le développement de 2-3 leaders
                          clés dans votre organisation pour augmenter votre
                          volume groupe de 1500 GVP par mois.
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          <Zap className="h-4 w-4 inline mr-1" /> Priorité 2:
                          Améliorer le Taux d'Activité
                        </h4>
                        <p className="text-sm text-green-600">
                          Mettez en place un programme de suivi hebdomadaire
                          pour augmenter le taux d'activité de votre équipe de
                          87.5% à plus de 90%.
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          <Zap className="h-4 w-4 inline mr-1" /> Priorité 3:
                          Recruter de Nouveaux Membres
                        </h4>
                        <p className="text-sm text-green-600">
                          Organisez 2 événements de recrutement par mois pour
                          ajouter 3-4 nouveaux membres à votre équipe
                          mensuellement.
                        </p>
                      </div>
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
