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
  AlertCircle,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  HelpCircle,
  Info,
  Lock,
  Star,
  Unlock,
  XCircle,
} from "lucide-react";
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

export default function PowerStartPage() {
  const [timeRange, setTimeRange] = useState("month");

  // Données pour les niveaux PowerStart
  const powerStartLevels = [
    {
      level: "PS1",
      name: "PowerStart 1",
      status: "eligible",
      requirements: [
        { name: "Volume Personnel", current: 150, target: 100, met: true },
        { name: "Nouveaux Clients", current: 3, target: 2, met: true },
        { name: "Nouveaux Distributeurs", current: 1, target: 1, met: true },
      ],
      commission: 250,
      percentComplete: 100,
      color: "#10b981", // vert
    },
    {
      level: "PS2",
      name: "PowerStart 2",
      status: "eligible",
      requirements: [
        { name: "Volume Personnel", current: 300, target: 200, met: true },
        { name: "Nouveaux Clients", current: 5, target: 4, met: true },
        { name: "Nouveaux Distributeurs", current: 2, target: 2, met: true },
      ],
      commission: 500,
      percentComplete: 100,
      color: "#3b82f6", // bleu
    },
    {
      level: "PS3",
      name: "PowerStart 3",
      status: "in-progress",
      requirements: [
        { name: "Volume Personnel", current: 350, target: 400, met: false },
        { name: "Nouveaux Clients", current: 7, target: 6, met: true },
        { name: "Nouveaux Distributeurs", current: 3, target: 3, met: true },
      ],
      commission: 750,
      percentComplete: 75,
      color: "#8b5cf6", // violet
    },
    {
      level: "PS4",
      name: "PowerStart 4",
      status: "locked",
      requirements: [
        { name: "Volume Personnel", current: 350, target: 600, met: false },
        { name: "Nouveaux Clients", current: 7, target: 8, met: false },
        { name: "Nouveaux Distributeurs", current: 3, target: 4, met: false },
      ],
      commission: 1000,
      percentComplete: 40,
      color: "#ec4899", // rose
    },
    {
      level: "PS5",
      name: "PowerStart 5",
      status: "locked",
      requirements: [
        { name: "Volume Personnel", current: 350, target: 800, met: false },
        { name: "Nouveaux Clients", current: 7, target: 10, met: false },
        { name: "Nouveaux Distributeurs", current: 3, target: 5, met: false },
      ],
      commission: 1500,
      percentComplete: 30,
      color: "#f59e0b", // ambre
    },
    {
      level: "PS6",
      name: "PowerStart 6",
      status: "locked",
      requirements: [
        { name: "Volume Personnel", current: 350, target: 1000, met: false },
        { name: "Nouveaux Clients", current: 7, target: 12, met: false },
        { name: "Nouveaux Distributeurs", current: 3, target: 6, met: false },
      ],
      commission: 2000,
      percentComplete: 25,
      color: "#ef4444", // rouge
    },
  ];

  // Données pour les revenus reportés
  const reportedRevenues = [
    {
      month: "Octobre 2023",
      level: "PS2",
      amount: 500,
      status: "Qualifié",
      paymentDate: "15/11/2023",
    },
    {
      month: "Septembre 2023",
      level: "PS1",
      amount: 250,
      status: "Payé",
      paymentDate: "15/10/2023",
    },
    {
      month: "Août 2023",
      level: "PS1",
      amount: 250,
      status: "Payé",
      paymentDate: "15/09/2023",
    },
    {
      month: "Juillet 2023",
      level: "Non qualifié",
      amount: 0,
      status: "Non qualifié",
      paymentDate: "-",
    },
    {
      month: "Juin 2023",
      level: "PS1",
      amount: 250,
      status: "Payé",
      paymentDate: "15/07/2023",
    },
  ];

  // Données pour les exemples de scénarios
  const scenarioExamples = [
    {
      title: "Scénario PowerStart 1",
      description: "Nouveau distributeur avec activité de base",
      details: [
        { name: "Volume Personnel", value: "150 PV" },
        { name: "Nouveaux Clients", value: "3" },
        { name: "Nouveaux Distributeurs", value: "1" },
        { name: "Commission PowerStart", value: "250€" },
        { name: "Commission Retail", value: "75€" },
        { name: "Total des Revenus", value: "325€" },
      ],
    },
    {
      title: "Scénario PowerStart 3",
      description: "Distributeur actif avec croissance d'équipe",
      details: [
        { name: "Volume Personnel", value: "450 PV" },
        { name: "Nouveaux Clients", value: "7" },
        { name: "Nouveaux Distributeurs", value: "3" },
        { name: "Commission PowerStart", value: "750€" },
        { name: "Commission Retail", value: "225€" },
        { name: "Commission QVP", value: "180€" },
        { name: "Total des Revenus", value: "1,155€" },
      ],
    },
    {
      title: "Scénario PowerStart 6",
      description: "Leader avec forte expansion d'équipe",
      details: [
        { name: "Volume Personnel", value: "1,200 PV" },
        { name: "Nouveaux Clients", value: "15" },
        { name: "Nouveaux Distributeurs", value: "8" },
        { name: "Commission PowerStart", value: "2,000€" },
        { name: "Commission Retail", value: "600€" },
        { name: "Commission QVP", value: "480€" },
        { name: "Commission Génération", value: "950€" },
        { name: "Total des Revenus", value: "4,030€" },
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
            <Lock className="h-3 w-3 mr-1" /> Verrouillé
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

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Système PowerStart
          </h1>
          <p className="text-gray-500 mt-1">
            Suivez votre progression et maximisez vos revenus avec le programme
            PowerStart
          </p>
        </div>

        <InteractiveControls className="mb-6 rounded-lg" />

        {/* Vue d'ensemble PowerStart */}
        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle>Vue d'ensemble PowerStart</CardTitle>
                <CardDescription>
                  Votre statut actuel et progression dans le programme
                  PowerStart
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Télécharger le Guide
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">
                    À propos du Programme PowerStart
                  </h4>
                  <p className="text-sm text-blue-600">
                    Le programme PowerStart est conçu pour accélérer vos revenus
                    pendant vos premiers mois. En atteignant des objectifs
                    spécifiques de volume personnel, de recrutement de clients
                    et de distributeurs, vous pouvez gagner des commissions
                    supplémentaires substantielles. Le programme comporte 6
                    niveaux, chacun offrant des récompenses plus importantes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {powerStartLevels.slice(0, 3).map((level) => (
                <Card
                  key={level.level}
                  className={`border-l-4`}
                  style={{ borderLeftColor: level.color }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{level.name}</CardTitle>
                      {getStatusBadge(level.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Progression
                          </span>
                          <span className="text-sm">
                            {level.percentComplete}%
                          </span>
                        </div>
                        <Progress
                          value={level.percentComplete}
                          className="h-2"
                        />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium mb-2">Exigences:</p>
                        <ul className="space-y-1">
                          {level.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              {getStatusIcon(req.met)}
                              <span className="ml-2">
                                {req.name}: {req.current}/{req.target}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium">Commission:</p>
                        <p className="text-xl font-bold">
                          {formatCurrency(level.commission)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {powerStartLevels.slice(3).map((level) => (
                <Card
                  key={level.level}
                  className={`border-l-4`}
                  style={{ borderLeftColor: level.color }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{level.name}</CardTitle>
                      {getStatusBadge(level.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Progression
                          </span>
                          <span className="text-sm">
                            {level.percentComplete}%
                          </span>
                        </div>
                        <Progress
                          value={level.percentComplete}
                          className="h-2"
                        />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium mb-2">Exigences:</p>
                        <ul className="space-y-1">
                          {level.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              {getStatusIcon(req.met)}
                              <span className="ml-2">
                                {req.name}: {req.current}/{req.target}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium">Commission:</p>
                        <p className="text-xl font-bold">
                          {formatCurrency(level.commission)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Dernière mise à jour: 15 octobre 2023</span>
            </div>
            <Button variant="link" size="sm" className="text-blue-600">
              Voir les détails du programme
            </Button>
          </CardFooter>
        </Card>

        {/* Onglets pour les différentes sections */}
        <Tabs defaultValue="eligibility" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-1 md:grid-cols-3 w-full">
            <TabsTrigger value="eligibility">État d'Éligibilité</TabsTrigger>
            <TabsTrigger value="revenues">Revenus Rapportés</TabsTrigger>
            <TabsTrigger value="scenarios">Exemples de Scénarios</TabsTrigger>
          </TabsList>

          {/* Onglet État d'Éligibilité */}
          <TabsContent value="eligibility" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>État d'Éligibilité PowerStart</CardTitle>
                <CardDescription>
                  Détails de votre éligibilité pour chaque niveau PowerStart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-yellow-700 mb-1">
                          Opportunité d'Amélioration
                        </h4>
                        <p className="text-sm text-yellow-600">
                          Vous êtes à seulement 50 PV d'atteindre le niveau
                          PowerStart 3. Augmentez votre volume personnel pour
                          débloquer une commission de 750€ ce mois-ci!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Niveau</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Exigences</TableHead>
                          <TableHead>Commission</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {powerStartLevels.map((level) => (
                          <TableRow key={level.level}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <div
                                  className="w-3 h-3 rounded-full mr-2"
                                  style={{ backgroundColor: level.color }}
                                ></div>
                                {level.name}
                              </div>
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(level.status)}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                {level.requirements.map((req, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center text-sm"
                                  >
                                    {getStatusIcon(req.met)}
                                    <span className="ml-2">
                                      {req.name}: {req.current}/{req.target}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="font-bold">
                              {formatCurrency(level.commission)}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center"
                                disabled={level.status === "locked"}
                              >
                                {level.status === "locked" ? (
                                  <Lock className="h-4 w-4 mr-1" />
                                ) : (
                                  <HelpCircle className="h-4 w-4 mr-1" />
                                )}
                                Détails
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-green-700 mb-1">
                          Conseils pour Progresser
                        </h4>
                        <p className="text-sm text-green-600">
                          Pour atteindre le niveau PowerStart 3, concentrez-vous
                          sur l'augmentation de votre volume personnel.
                          Envisagez de contacter vos clients existants pour des
                          commandes de réapprovisionnement ou d'organiser une
                          présentation de produits pour attirer de nouveaux
                          clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Revenus Rapportés */}
          <TabsContent value="revenues" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Revenus PowerStart Rapportés</CardTitle>
                <CardDescription>
                  Historique et statut de vos commissions PowerStart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Total Gagné (Année)
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(1250)}</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+100% par rapport à l'année précédente</span>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      En Attente de Paiement
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(500)}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Prévu pour le 15/11/2023</span>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Potentiel Ce Mois-ci
                    </h4>
                    <p className="text-2xl font-bold">{formatCurrency(750)}</p>
                    <div className="mt-2 flex items-center text-sm text-yellow-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>50 PV manquants pour qualification</span>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Période</TableHead>
                        <TableHead>Niveau Atteint</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Date de Paiement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reportedRevenues.map((revenue, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {revenue.month}
                          </TableCell>
                          <TableCell>
                            {revenue.level === "Non qualifié" ? (
                              <Badge className="bg-gray-100 text-gray-800">
                                Non qualifié
                              </Badge>
                            ) : (
                              <Badge className="bg-blue-100 text-blue-800">
                                {revenue.level}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="font-bold">
                            {formatCurrency(revenue.amount)}
                          </TableCell>
                          <TableCell>
                            {revenue.status === "Payé" ? (
                              <Badge className="bg-green-100 text-green-800">
                                <CheckCircle className="h-3 w-3 mr-1" /> Payé
                              </Badge>
                            ) : revenue.status === "Qualifié" ? (
                              <Badge className="bg-yellow-100 text-yellow-800">
                                <Clock className="h-3 w-3 mr-1" /> En attente
                              </Badge>
                            ) : (
                              <Badge className="bg-gray-100 text-gray-800">
                                <XCircle className="h-3 w-3 mr-1" /> Non
                                qualifié
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{revenue.paymentDate}</TableCell>
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
                        Politique de Paiement
                      </h4>
                      <p className="text-sm text-blue-600">
                        Les commissions PowerStart sont calculées à la fin de
                        chaque mois et payées le 15 du mois suivant. Pour être
                        éligible, vous devez atteindre tous les critères requis
                        pour le niveau correspondant avant la fin du mois.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Exemples de Scénarios */}
          <TabsContent value="scenarios" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Exemples de Scénarios PowerStart</CardTitle>
                <CardDescription>
                  Découvrez comment maximiser vos revenus avec différents
                  scénarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">
                        Comment Utiliser ces Scénarios
                      </h4>
                      <p className="text-sm text-blue-600">
                        Ces exemples illustrent comment différents niveaux
                        d'activité peuvent affecter vos revenus totaux.
                        Utilisez-les comme guide pour planifier votre stratégie
                        de croissance et fixer des objectifs réalistes.
                      </p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {scenarioExamples.map((scenario, index) => (
                    <AccordionItem key={index} value={`scenario-${index}`}>
                      <AccordionTrigger className="hover:bg-gray-50 px-4 py-2 rounded-lg">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-2" />
                          <div className="text-left">
                            <h4 className="font-medium">{scenario.title}</h4>
                            <p className="text-sm text-gray-500">
                              {scenario.description}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-2 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h5 className="font-medium">Activité</h5>
                            <ul className="space-y-2">
                              {scenario.details
                                .filter((_, i) => i < 3)
                                .map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex justify-between items-center p-2 bg-gray-50 rounded-lg"
                                  >
                                    <span className="text-sm">
                                      {detail.name}
                                    </span>
                                    <span className="font-medium">
                                      {detail.value}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h5 className="font-medium">Revenus</h5>
                            <ul className="space-y-2">
                              {scenario.details
                                .filter((_, i) => i >= 3)
                                .map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className={`flex justify-between items-center p-2 rounded-lg ${detail.name === "Total des Revenus" ? "bg-blue-50 font-bold" : "bg-gray-50"}`}
                                  >
                                    <span className="text-sm">
                                      {detail.name}
                                    </span>
                                    <span
                                      className={
                                        detail.name === "Total des Revenus"
                                          ? "text-blue-700"
                                          : ""
                                      }
                                    >
                                      {detail.value}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-sm text-green-700">
                              Ce scénario est{" "}
                              {index === 0
                                ? "facilement réalisable pour les nouveaux distributeurs"
                                : index === 1
                                  ? "atteignable avec un effort modéré"
                                  : "un objectif ambitieux pour les leaders"}
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-start">
                    <Unlock className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-purple-700 mb-1">
                        Stratégies pour Réussir
                      </h4>
                      <p className="text-sm text-purple-600 mb-2">
                        Pour maximiser vos revenus PowerStart:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-purple-600">
                        <li>
                          Créez une liste de prospects et contactez-les
                          systématiquement
                        </li>
                        <li>
                          Organisez des présentations de produits hebdomadaires
                        </li>
                        <li>
                          Suivez régulièrement vos clients pour des commandes de
                          réapprovisionnement
                        </li>
                        <li>
                          Formez rapidement vos nouveaux distributeurs pour
                          qu'ils deviennent productifs
                        </li>
                        <li>
                          Utilisez les médias sociaux pour élargir votre portée
                        </li>
                      </ul>
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
