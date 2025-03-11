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
  CheckCircle,
  XCircle,
  Clock,
  HelpCircle,
  Star,
  Trophy,
  Target,
  Zap,
  Briefcase,
  UserPlus,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InteractiveControls from "@/components/dashboard/InteractiveControls";

export default function LeadershipBonusPage() {
  const [timeRange, setTimeRange] = useState("month");

  // Données pour les bonus de leadership
  const leadershipBonuses = [
    {
      id: "fast-start",
      name: "Bonus Fast Start",
      description:
        "Récompense pour les nouveaux leaders qui atteignent rapidement des objectifs de volume et de recrutement",
      amount: 500,
      status: "eligible",
      icon: Zap,
      color: "#10b981", // vert
      progress: 100,
      requirements: [
        { name: "Volume Personnel", current: 1200, target: 1000, met: true },
        { name: "Nouveaux Distributeurs", current: 5, target: 3, met: true },
        {
          name: "Période Qualificative",
          current: "30 jours",
          target: "30 jours",
          met: true,
        },
      ],
    },
    {
      id: "leadership-development",
      name: "Bonus Développement Leadership",
      description:
        "Bonus pour le développement de nouveaux leaders dans votre organisation",
      amount: 750,
      status: "in-progress",
      icon: Users,
      color: "#3b82f6", // bleu
      progress: 66,
      requirements: [
        { name: "Leaders Qualifiés", current: 2, target: 3, met: false },
        { name: "Volume Groupe", current: 25000, target: 20000, met: true },
        { name: "Rang Minimum", current: "Or", target: "Or", met: true },
      ],
    },
    {
      id: "rank-advancement",
      name: "Bonus Avancement de Rang",
      description:
        "Prime unique pour l'atteinte d'un nouveau rang de leadership",
      amount: 1000,
      status: "locked",
      icon: Trophy,
      color: "#f59e0b", // ambre
      progress: 40,
      requirements: [
        { name: "Nouveau Rang", current: "Or", target: "Rubis", met: false },
        {
          name: "Maintien du Rang",
          current: "1 mois",
          target: "3 mois",
          met: false,
        },
        { name: "Volume Groupe", current: 25000, target: 30000, met: false },
      ],
    },
    {
      id: "team-performance",
      name: "Bonus Performance d'Équipe",
      description:
        "Récompense basée sur la performance globale de votre équipe",
      amount: 1200,
      status: "locked",
      icon: Target,
      color: "#8b5cf6", // violet
      progress: 30,
      requirements: [
        {
          name: "Croissance du Volume",
          current: "15%",
          target: "20%",
          met: false,
        },
        {
          name: "Rétention d'Équipe",
          current: "85%",
          target: "90%",
          met: false,
        },
        { name: "Nouveaux Clients", current: 12, target: 15, met: false },
      ],
    },
    {
      id: "car-program",
      name: "Programme Automobile",
      description:
        "Allocation mensuelle pour l'achat ou la location d'un véhicule",
      amount: 600,
      status: "locked",
      icon: Briefcase,
      color: "#ec4899", // rose
      progress: 25,
      requirements: [
        { name: "Rang Minimum", current: "Or", target: "Diamant", met: false },
        { name: "Volume Groupe", current: 25000, target: 50000, met: false },
        { name: "Leaders Qualifiés", current: 2, target: 5, met: false },
      ],
    },
  ];

  // Données pour l'historique des bonus
  const bonusHistory = [
    {
      period: "Octobre 2023",
      bonusType: "Bonus Fast Start",
      amount: 500,
      status: "En attente",
      paymentDate: "15/11/2023",
      details: "Qualification complétée le 28/10/2023",
    },
    {
      period: "Septembre 2023",
      bonusType: "Bonus Développement Leadership",
      amount: 350,
      status: "Payé",
      paymentDate: "15/10/2023",
      details: "Qualification partielle (2/3 leaders)",
    },
    {
      period: "Août 2023",
      bonusType: "Bonus Développement Leadership",
      amount: 350,
      status: "Payé",
      paymentDate: "15/09/2023",
      details: "Qualification partielle (2/3 leaders)",
    },
    {
      period: "Juillet 2023",
      bonusType: "Bonus Avancement de Rang",
      amount: 500,
      status: "Payé",
      paymentDate: "15/08/2023",
      details: "Avancement au rang Or",
    },
    {
      period: "Juin 2023",
      bonusType: "Bonus Fast Start",
      amount: 500,
      status: "Payé",
      paymentDate: "15/07/2023",
      details: "Qualification complète dans les 30 jours",
    },
  ];

  // Données pour les conditions d'éligibilité détaillées
  const eligibilityDetails = [
    {
      id: "fast-start",
      title: "Bonus Fast Start",
      description:
        "Conçu pour récompenser les nouveaux distributeurs qui démarrent rapidement leur activité",
      amount: "500€",
      timeframe: "30 jours après l'inscription",
      requirements: [
        "Atteindre 1000 PV (Volume Personnel) dans les 30 premiers jours",
        "Parrainer au moins 3 nouveaux distributeurs dans les 30 premiers jours",
        "Chaque nouveau distributeur doit avoir au moins 100 PV",
      ],
      tips: [
        "Commencez par créer une liste de contacts potentiels avant même de vous inscrire",
        "Organisez un événement de lancement dans les 7 premiers jours",
        "Utilisez les médias sociaux pour élargir votre portée rapidement",
      ],
    },
    {
      id: "leadership-development",
      title: "Bonus Développement Leadership",
      description:
        "Récompense les leaders qui développent d'autres leaders dans leur organisation",
      amount: "250€ par leader qualifié (jusqu'à 750€)",
      timeframe: "Mensuel",
      requirements: [
        "Avoir le rang Or ou supérieur",
        "Avoir au moins 20,000 GVP (Volume Groupe)",
        "Développer 1 à 3 leaders de rang Argent ou supérieur dans des lignées différentes",
      ],
      tips: [
        "Identifiez les distributeurs à fort potentiel et mentorez-les personnellement",
        "Organisez des formations hebdomadaires sur le leadership",
        "Créez un système de reconnaissance pour motiver vos distributeurs",
      ],
    },
    {
      id: "rank-advancement",
      title: "Bonus Avancement de Rang",
      description:
        "Prime unique versée lorsque vous atteignez un nouveau rang pour la première fois",
      amount: "500€ à 5000€ selon le rang",
      timeframe: "Unique à chaque avancement de rang",
      requirements: [
        "Atteindre un nouveau rang pour la première fois",
        "Maintenir le rang pendant au moins 3 mois consécutifs",
        "Satisfaire toutes les exigences de volume et de structure d'équipe du rang",
      ],
      tips: [
        "Concentrez-vous sur le développement de leaders dans différentes lignées",
        "Travaillez sur l'équilibrage de votre organisation",
        "Planifiez votre stratégie d'avancement de rang avec 6 mois d'avance",
      ],
    },
    {
      id: "team-performance",
      title: "Bonus Performance d'Équipe",
      description:
        "Récompense basée sur la croissance et la performance globale de votre équipe",
      amount: "Jusqu'à 1200€ par mois",
      timeframe: "Mensuel",
      requirements: [
        "Croissance du volume groupe d'au moins 20% par rapport au mois précédent",
        "Taux de rétention d'équipe d'au moins 90%",
        "Acquisition d'au moins 15 nouveaux clients dans le mois",
      ],
      tips: [
        "Mettez en place un système de suivi pour les clients existants",
        "Créez des promotions spéciales pour encourager les commandes répétées",
        "Formez votre équipe sur les techniques de fidélisation des clients",
      ],
    },
    {
      id: "car-program",
      title: "Programme Automobile",
      description:
        "Allocation mensuelle pour l'achat ou la location d'un véhicule de votre choix",
      amount: "600€ à 1200€ par mois selon le rang",
      timeframe: "Mensuel, tant que les conditions sont maintenues",
      requirements: [
        "Atteindre le rang Diamant ou supérieur",
        "Maintenir au moins 50,000 GVP par mois",
        "Avoir au moins 5 leaders qualifiés dans des lignées différentes",
      ],
      tips: [
        "Commencez à planifier votre qualification dès que vous atteignez le rang Rubis",
        "Diversifiez votre organisation pour ne pas dépendre d'une seule lignée",
        "Utilisez ce bonus comme outil de recrutement pour attirer de nouveaux distributeurs",
      ],
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "eligible":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" /> Éligible
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" /> En cours
          </Badge>
        );
      case "locked":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <XCircle className="h-3 w-3 mr-1" /> Non éligible
          </Badge>
        );
      default:
        return null;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "Payé":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" /> Payé
          </Badge>
        );
      case "En attente":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" /> En attente
          </Badge>
        );
      case "Refusé":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" /> Refusé
          </Badge>
        );
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

  // Données pour le graphique d'historique des bonus
  const bonusHistoryChartData = [
    { month: "Juin", amount: 500 },
    { month: "Juil", amount: 500 },
    { month: "Août", amount: 350 },
    { month: "Sept", amount: 350 },
    { month: "Oct", amount: 500 },
    { month: "Nov", amount: 0 },
  ];

  // Calcul du total des bonus
  const totalBonusAmount = bonusHistory.reduce(
    (total, bonus) => total + bonus.amount,
    0,
  );

  // Calcul du bonus moyen
  const averageBonusAmount = totalBonusAmount / bonusHistory.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Bonus de Leadership
          </h1>
          <p className="text-gray-500 mt-1">
            Suivez vos bonus de leadership et maximisez vos revenus
            supplémentaires
          </p>
        </div>

        <InteractiveControls className="mb-6 rounded-lg" />

        {/* Résumé des bonus */}
        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle>Résumé des Bonus de Leadership</CardTitle>
                <CardDescription>
                  Vue d'ensemble de vos bonus actuels et historiques
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Bonus du Mois en Cours
                </h4>
                <p className="text-3xl font-bold">{formatCurrency(500)}</p>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+42.9% par rapport au mois dernier</span>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Total des Bonus (Année)
                </h4>
                <p className="text-3xl font-bold">
                  {formatCurrency(totalBonusAmount)}
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 mr-1" />
                  <span>5 bonus reçus cette année</span>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Bonus Potentiels
                </h4>
                <p className="text-3xl font-bold">{formatCurrency(1250)}</p>
                <div className="mt-2 flex items-center text-sm text-yellow-600">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>2 bonus en cours de qualification</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Évolution des Bonus</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={bonusHistoryChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis
                    stroke="#6b7280"
                    tickFormatter={(value) => `${value}€`}
                  />
                  <Tooltip formatter={(value) => [`${value}€`, "Montant"]} />
                  <Bar
                    dataKey="amount"
                    name="Montant"
                    fill="#4f46e5"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Bonus Actuels</h3>
                <div className="space-y-4">
                  {leadershipBonuses.slice(0, 2).map((bonus) => (
                    <div key={bonus.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                            style={{ backgroundColor: `${bonus.color}15` }}
                          >
                            <bonus.icon
                              className="h-5 w-5"
                              style={{ color: bonus.color }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{bonus.name}</h4>
                            <p className="text-sm text-gray-500">
                              {bonus.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">
                            {formatCurrency(bonus.amount)}
                          </p>
                          {getStatusBadge(bonus.status)}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Progression
                          </span>
                          <span className="text-sm">{bonus.progress}%</span>
                        </div>
                        <Progress value={bonus.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Prochains Bonus</h3>
                <div className="space-y-4">
                  {leadershipBonuses.slice(2, 4).map((bonus) => (
                    <div key={bonus.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                            style={{ backgroundColor: `${bonus.color}15` }}
                          >
                            <bonus.icon
                              className="h-5 w-5"
                              style={{ color: bonus.color }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{bonus.name}</h4>
                            <p className="text-sm text-gray-500">
                              {bonus.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">
                            {formatCurrency(bonus.amount)}
                          </p>
                          {getStatusBadge(bonus.status)}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Progression
                          </span>
                          <span className="text-sm">{bonus.progress}%</span>
                        </div>
                        <Progress value={bonus.progress} className="h-2" />
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
              Voir tous les bonus disponibles
            </Button>
          </CardFooter>
        </Card>

        {/* Onglets pour les différentes sections */}
        <Tabs defaultValue="details" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-1 md:grid-cols-3 w-full">
            <TabsTrigger value="details">Détails des Bonus</TabsTrigger>
            <TabsTrigger value="eligibility">
              Conditions d'Éligibilité
            </TabsTrigger>
            <TabsTrigger value="history">Historique des Bonus</TabsTrigger>
          </TabsList>

          {/* Onglet Détails des Bonus */}
          <TabsContent value="details" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Détails des Bonus de Leadership</CardTitle>
                <CardDescription>
                  Informations détaillées sur chaque bonus disponible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {leadershipBonuses.map((bonus) => (
                    <div
                      key={bonus.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div
                        className="p-4 flex items-center justify-between"
                        style={{ backgroundColor: `${bonus.color}10` }}
                      >
                        <div className="flex items-center">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                            style={{ backgroundColor: `${bonus.color}20` }}
                          >
                            <bonus.icon
                              className="h-5 w-5"
                              style={{ color: bonus.color }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{bonus.name}</h4>
                            <p className="text-sm text-gray-600">
                              {bonus.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">
                            {formatCurrency(bonus.amount)}
                          </p>
                          {getStatusBadge(bonus.status)}
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h5 className="font-medium mb-3">Exigences</h5>
                        <div className="space-y-3">
                          {bonus.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start">
                              {getStatusIcon(req.met)}
                              <div className="ml-3">
                                <p className="font-medium">{req.name}</p>
                                <p className="text-sm text-gray-500">
                                  Actuel: {req.current} | Objectif: {req.target}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">
                              Progression globale
                            </span>
                            <span className="text-sm">{bonus.progress}%</span>
                          </div>
                          <Progress value={bonus.progress} className="h-2" />
                        </div>
                        {bonus.status === "in-progress" && (
                          <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                            <div className="flex items-start">
                              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                              <p className="text-sm text-yellow-700">
                                Il vous manque {3 - 2} leader(s) qualifié(s)
                                pour obtenir ce bonus. Concentrez-vous sur le
                                développement de vos distributeurs à fort
                                potentiel.
                              </p>
                            </div>
                          </div>
                        )}
                        {bonus.status === "eligible" && (
                          <div className="mt-4 p-3 bg-green-50 rounded-lg">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <p className="text-sm text-green-700">
                                Félicitations ! Vous avez rempli toutes les
                                conditions pour ce bonus. Le paiement sera
                                effectué le 15 du mois prochain.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Conditions d'Éligibilité */}
          <TabsContent value="eligibility" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Conditions d'Éligibilité</CardTitle>
                <CardDescription>
                  Critères détaillés pour chaque bonus de leadership
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">
                        Comment Qualifier pour les Bonus
                      </h4>
                      <p className="text-sm text-blue-600">
                        Les bonus de leadership sont conçus pour récompenser les
                        distributeurs qui développent leur organisation et
                        aident d'autres membres à réussir. Chaque bonus a des
                        critères spécifiques qui doivent être atteints pendant
                        la période de qualification.
                      </p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {eligibilityDetails.map((detail) => (
                    <AccordionItem key={detail.id} value={detail.id}>
                      <AccordionTrigger className="hover:bg-gray-50 px-4 py-2 rounded-lg">
                        <div className="flex items-center">
                          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                          <div className="text-left">
                            <h4 className="font-medium">{detail.title}</h4>
                            <p className="text-sm text-gray-500">
                              Montant: {detail.amount} | Période:{" "}
                              {detail.timeframe}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-2 pb-4">
                        <div className="space-y-4">
                          <p className="text-gray-700">{detail.description}</p>

                          <div>
                            <h5 className="font-medium mb-2">
                              Conditions requises:
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {detail.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <h5 className="font-medium text-green-700 mb-2">
                              Conseils pour réussir:
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-green-700">
                              {detail.tips.map((tip, idx) => (
                                <li key={idx} className="text-sm">
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-purple-700 mb-1">
                        Besoin d'aide pour vous qualifier?
                      </h4>
                      <p className="text-sm text-purple-600 mb-2">
                        Notre équipe de support est là pour vous aider à
                        atteindre vos objectifs de bonus:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-purple-600">
                        <li>
                          Contactez votre mentor pour une stratégie
                          personnalisée
                        </li>
                        <li>
                          Participez aux webinaires hebdomadaires sur le
                          développement du leadership
                        </li>
                        <li>
                          Consultez les ressources de formation dans votre
                          back-office
                        </li>
                        <li>
                          Rejoignez notre groupe Facebook privé pour échanger
                          avec d'autres leaders
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Historique des Bonus */}
          <TabsContent value="history" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Historique des Bonus</CardTitle>
                    <CardDescription>
                      Suivi de tous vos bonus reçus et en attente
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Exporter l'historique
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Total des Bonus
                    </h4>
                    <p className="text-3xl font-bold">
                      {formatCurrency(totalBonusAmount)}
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Depuis juin 2023</span>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Bonus Moyen
                    </h4>
                    <p className="text-3xl font-bold">
                      {formatCurrency(averageBonusAmount)}
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>Sur les 5 derniers mois</span>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Prochain Paiement
                    </h4>
                    <p className="text-3xl font-bold">{formatCurrency(500)}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Prévu pour le 15/11/2023</span>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Période</TableHead>
                        <TableHead>Type de Bonus</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Date de Paiement</TableHead>
                        <TableHead>Détails</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bonusHistory.map((bonus, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {bonus.period}
                          </TableCell>
                          <TableCell>{bonus.bonusType}</TableCell>
                          <TableCell>{formatCurrency(bonus.amount)}</TableCell>
                          <TableCell>
                            {getPaymentStatusBadge(bonus.status)}
                          </TableCell>
                          <TableCell>{bonus.paymentDate}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center"
                            >
                              <Info className="h-4 w-4 mr-1" />
                              <span className="text-xs">Détails</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">
                        Politique de Paiement des Bonus
                      </h4>
                      <p className="text-sm text-blue-600">
                        Les bonus de leadership sont calculés à la fin de chaque
                        mois et payés le 15 du mois suivant. Les bonus sont
                        versés directement sur votre compte bancaire enregistré.
                        Pour toute question concernant vos paiements, veuillez
                        contacter le service de support financier.
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
