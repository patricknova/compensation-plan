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
  ChevronDown,
  ChevronRight,
  Info,
  ArrowUpRight,
  ArrowDownRight,
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

export default function CommissionsPage() {
  const [timeRange, setTimeRange] = useState("month");

  // Données pour les commissions par type
  const commissionsByType = [
    { name: "Détail", value: 2500, color: "#4f46e5", percentChange: 12.5 },
    { name: "QVP", value: 1800, color: "#0ea5e9", percentChange: 8.3 },
    { name: "Générations", value: 3200, color: "#10b981", percentChange: 15.7 },
    {
      name: "Mise à Niveau",
      value: 950,
      color: "#f59e0b",
      percentChange: -3.2,
    },
    {
      name: "Client Élite",
      value: 1200,
      color: "#8b5cf6",
      percentChange: 22.1,
    },
  ];

  // Données pour les ventes au détail client élite
  const retailEliteData = [
    { mois: "Jan", montant: 850, clients: 12 },
    { mois: "Fév", montant: 920, clients: 14 },
    { mois: "Mar", montant: 980, clients: 15 },
    { mois: "Avr", montant: 1050, clients: 16 },
    { mois: "Mai", montant: 1100, clients: 17 },
    { mois: "Juin", montant: 1200, clients: 19 },
  ];

  // Données pour les commissions de mise à niveau
  const upgradeCommissionData = [
    { mois: "Jan", montant: 650, upgrades: 5 },
    { mois: "Fév", montant: 720, upgrades: 6 },
    { mois: "Mar", montant: 800, upgrades: 7 },
    { mois: "Avr", montant: 750, upgrades: 6 },
    { mois: "Mai", montant: 900, upgrades: 8 },
    { mois: "Juin", montant: 950, upgrades: 9 },
  ];

  // Données pour les commissions QVP et de gros
  const qvpCommissionData = [
    { mois: "Jan", qvp: 1200, gros: 1800, total: 3000 },
    { mois: "Fév", qvp: 1350, gros: 1950, total: 3300 },
    { mois: "Mar", qvp: 1500, gros: 2100, total: 3600 },
    { mois: "Avr", qvp: 1450, gros: 2050, total: 3500 },
    { mois: "Mai", qvp: 1600, gros: 2200, total: 3800 },
    { mois: "Juin", qvp: 1800, gros: 2400, total: 4200 },
  ];

  // Données pour les commissions par génération
  const generationCommissionData = [
    {
      generation: "1ère Génération",
      montant: 1200,
      pourcentage: 25,
      membres: 8,
      evolution: 15.5,
    },
    {
      generation: "2ème Génération",
      montant: 950,
      pourcentage: 20,
      membres: 12,
      evolution: 10.2,
    },
    {
      generation: "3ème Génération",
      montant: 750,
      pourcentage: 15,
      membres: 18,
      evolution: 8.7,
    },
    {
      generation: "4ème Génération",
      montant: 550,
      pourcentage: 12,
      membres: 24,
      evolution: 5.3,
    },
    {
      generation: "5ème Génération",
      montant: 350,
      pourcentage: 10,
      membres: 32,
      evolution: 3.1,
    },
    {
      generation: "6ème Génération",
      montant: 250,
      pourcentage: 8,
      membres: 45,
      evolution: 2.5,
    },
    {
      generation: "7ème Génération",
      montant: 150,
      pourcentage: 6,
      membres: 60,
      evolution: 1.8,
    },
    {
      generation: "8ème Génération",
      montant: 100,
      pourcentage: 4,
      membres: 75,
      evolution: 1.2,
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Détails des Commissions
          </h1>
          <p className="text-gray-500 mt-1">
            Analyse détaillée de vos revenus par type de commission
          </p>
        </div>

        <InteractiveControls className="mb-6 rounded-lg" />

        {/* Résumé des commissions */}
        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle>Résumé des Commissions</CardTitle>
                <CardDescription>
                  Aperçu de vos revenus pour{" "}
                  {timeRange === "month"
                    ? "ce mois"
                    : timeRange === "quarter"
                      ? "ce trimestre"
                      : "cette année"}
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
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exporter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Répartition par Type
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={commissionsByType}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {commissionsByType.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => formatCurrency(value as number)}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Détail par Type</h3>
                <div className="space-y-4">
                  {commissionsByType.map((commission, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: commission.color }}
                          ></div>
                          <span className="font-medium">{commission.name}</span>
                        </div>
                        <span className="font-bold">
                          {formatCurrency(commission.value)}
                        </span>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${(commission.value / 9700) * 100}%`,
                              backgroundColor: commission.color,
                            }}
                          ></div>
                        </div>
                        <div className="ml-4 flex items-center">
                          {commission.percentChange >= 0 ? (
                            <>
                              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-xs text-green-500">
                                +{commission.percentChange}%
                              </span>
                            </>
                          ) : (
                            <>
                              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                              <span className="text-xs text-red-500">
                                {commission.percentChange}%
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Dernière mise à jour: 15 octobre 2023</span>
            </div>
            <Button variant="link" size="sm" className="text-blue-600">
              Voir l'historique complet
            </Button>
          </CardFooter>
        </Card>

        {/* Onglets pour les différents types de commissions */}
        <Tabs defaultValue="retail" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-2 md:grid-cols-4 w-full">
            <TabsTrigger value="retail">Client Élite</TabsTrigger>
            <TabsTrigger value="upgrade">Mise à Niveau</TabsTrigger>
            <TabsTrigger value="qvp">QVP & Gros</TabsTrigger>
            <TabsTrigger value="generation">Générations</TabsTrigger>
          </TabsList>

          {/* Onglet Ventes au Détail Client Élite */}
          <TabsContent value="retail" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Ventes au Détail Client Élite</CardTitle>
                    <CardDescription>
                      Revenus générés par les ventes aux clients élite
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Revenu Total
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(1200)}</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+22.1% par rapport au mois dernier</span>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Clients Élite
                    </h4>
                    <p className="text-2xl font-bold">19</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+2 nouveaux ce mois-ci</span>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Valeur Moyenne
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(63)}</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+5.3% par rapport au mois dernier</span>
                    </div>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={retailEliteData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mois" stroke="#6b7280" />
                    <YAxis
                      yAxisId="left"
                      stroke="#6b7280"
                      tickFormatter={(value) => `${value}€`}
                    />
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
                      dataKey="montant"
                      stroke="#4f46e5"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Montant (€)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="clients"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Nombre de Clients"
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-3">
                    Top Clients Élite
                  </h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Produits</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Marie Dupont
                        </TableCell>
                        <TableCell>{formatCurrency(250)}</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Jean Martin
                        </TableCell>
                        <TableCell>{formatCurrency(180)}</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Sophie Bernard
                        </TableCell>
                        <TableCell>{formatCurrency(150)}</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Pierre Dubois
                        </TableCell>
                        <TableCell>{formatCurrency(120)}</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800">
                            Récent
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Lucie Moreau
                        </TableCell>
                        <TableCell>{formatCurrency(100)}</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Commissions de Mise à Niveau */}
          <TabsContent value="upgrade" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Commissions de Mise à Niveau</CardTitle>
                    <CardDescription>
                      Revenus générés par les mises à niveau des clients
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Revenu Total
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(950)}</p>
                    <div className="mt-2 flex items-center text-sm text-red-600">
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                      <span>-3.2% par rapport au mois dernier</span>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Mises à Niveau
                    </h4>
                    <p className="text-2xl font-bold">9</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+1 par rapport au mois dernier</span>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Valeur Moyenne
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(106)}</p>
                    <div className="mt-2 flex items-center text-sm text-red-600">
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                      <span>-8.6% par rapport au mois dernier</span>
                    </div>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={upgradeCommissionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mois" stroke="#6b7280" />
                    <YAxis
                      yAxisId="left"
                      stroke="#6b7280"
                      tickFormatter={(value) => `${value}€`}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#6b7280"
                    />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="montant"
                      fill="#f59e0b"
                      name="Montant (€)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="upgrades"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Nombre de Mises à Niveau"
                    />
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-3">
                    Détail des Mises à Niveau
                  </h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>De</TableHead>
                        <TableHead>Vers</TableHead>
                        <TableHead>Commission</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Thomas Laurent
                        </TableCell>
                        <TableCell>12 juin 2023</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Premium</TableCell>
                        <TableCell>{formatCurrency(150)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Camille Petit
                        </TableCell>
                        <TableCell>10 juin 2023</TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>{formatCurrency(80)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Antoine Roux
                        </TableCell>
                        <TableCell>8 juin 2023</TableCell>
                        <TableCell>Premium</TableCell>
                        <TableCell>Elite</TableCell>
                        <TableCell>{formatCurrency(200)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Émilie Blanc
                        </TableCell>
                        <TableCell>5 juin 2023</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Premium</TableCell>
                        <TableCell>{formatCurrency(150)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Nicolas Mercier
                        </TableCell>
                        <TableCell>2 juin 2023</TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>{formatCurrency(80)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Commissions QVP et de Gros */}
          <TabsContent value="qvp" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Commissions QVP et de Gros</CardTitle>
                    <CardDescription>
                      Analyse des revenus QVP (Qualifying Volume Points) et
                      commissions de gros
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-sky-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Total QVP
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(1800)}</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+12.5% par rapport au mois dernier</span>
                    </div>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Commissions de Gros
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(2400)}</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+9.1% par rapport au mois dernier</span>
                    </div>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Total
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(4200)}</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+10.5% par rapport au mois dernier</span>
                    </div>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={qvpCommissionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mois" stroke="#6b7280" />
                    <YAxis
                      stroke="#6b7280"
                      tickFormatter={(value) => `${value}€`}
                    />
                    <Tooltip formatter={(value) => [`${value}€`, ""]} />
                    <Legend />
                    <Bar dataKey="qvp" name="QVP" fill="#0ea5e9" />
                    <Bar dataKey="gros" name="Gros" fill="#6366f1" />
                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Total"
                    />
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Détail QVP</h4>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Points QVP Personnels
                          </span>
                          <span className="font-bold">650 pts</span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>Objectif: 1000 pts</span>
                            <span>65%</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Points QVP Équipe</span>
                          <span className="font-bold">4800 pts</span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>Objectif: 6000 pts</span>
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Taux de Commission
                          </span>
                          <span className="font-bold">12%</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          <span>+2% par rapport au niveau précédent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">
                      Détail Commissions de Gros
                    </h4>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Volume de Groupe</span>
                          <span className="font-bold">28,500 pts</span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-500 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>Objectif: 30,000 pts</span>
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Distributeurs Actifs
                          </span>
                          <span className="font-bold">32</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          <span>+3 ce mois-ci</span>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            Taux de Commission
                          </span>
                          <span className="font-bold">8%</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-600">
                          <Info className="h-4 w-4 mr-1" />
                          <span>Prochain palier à 35,000 pts (10%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Rapport de Générations de Commissions */}
          <TabsContent value="generation" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Rapport de Générations de Commissions</CardTitle>
                    <CardDescription>
                      Analyse des commissions par génération dans votre réseau
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Génération</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Pourcentage</TableHead>
                        <TableHead>Membres</TableHead>
                        <TableHead>Évolution</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {generationCommissionData.map((gen, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {gen.generation}
                          </TableCell>
                          <TableCell>{formatCurrency(gen.montant)}</TableCell>
                          <TableCell>{gen.pourcentage}%</TableCell>
                          <TableCell>{gen.membres}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-green-500">
                                +{gen.evolution}%
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-3">
                    Répartition des Commissions par Génération
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={generationCommissionData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        type="number"
                        tickFormatter={(value) => `${value}€`}
                      />
                      <YAxis
                        type="category"
                        dataKey="generation"
                        width={100}
                        stroke="#6b7280"
                      />
                      <Tooltip formatter={(value) => [`${value}€`, ""]} />
                      <Legend />
                      <Bar
                        dataKey="montant"
                        name="Montant"
                        fill="#10b981"
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">
                        Opportunité de Croissance
                      </h4>
                      <p className="text-sm text-green-600">
                        Votre 3ème génération montre un fort potentiel de
                        croissance. Concentrez-vous sur le développement de
                        cette génération pour maximiser vos revenus. Envisagez
                        d'organiser une formation pour les leaders de cette
                        génération.
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
