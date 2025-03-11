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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  Download,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  FileText,
  Info,
  Search,
  ChevronRight,
  ArrowUpRight,
  CalendarDays,
  CreditCard,
  BanknoteIcon,
  Wallet,
  BarChart,
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import InteractiveControls from "@/components/dashboard/InteractiveControls";

export default function PaymentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [year, setYear] = useState("2023");

  // Données pour les paiements à venir
  const upcomingPayments = [
    {
      id: "1",
      period: "Octobre 2023",
      paymentDate: "15/11/2023",
      amount: 2350,
      status: "scheduled",
      details: [
        { type: "Commissions Retail", amount: 450 },
        { type: "Commissions QVP", amount: 650 },
        { type: "Bonus Leadership", amount: 500 },
        { type: "Bonus Fast Start", amount: 500 },
        { type: "Commissions Génération", amount: 250 },
      ],
    },
    {
      id: "2",
      period: "Novembre 2023",
      paymentDate: "15/12/2023",
      amount: 0,
      status: "pending",
      details: [
        { type: "Commissions Retail", amount: 0 },
        { type: "Commissions QVP", amount: 0 },
        { type: "Bonus Leadership", amount: 0 },
        { type: "Bonus Fast Start", amount: 0 },
        { type: "Commissions Génération", amount: 0 },
      ],
    },
    {
      id: "3",
      period: "Décembre 2023",
      paymentDate: "15/01/2024",
      amount: 0,
      status: "pending",
      details: [
        { type: "Commissions Retail", amount: 0 },
        { type: "Commissions QVP", amount: 0 },
        { type: "Bonus Leadership", amount: 0 },
        { type: "Bonus Fast Start", amount: 0 },
        { type: "Commissions Génération", amount: 0 },
      ],
    },
  ];

  // Données pour l'historique des paiements
  const paymentHistory = [
    {
      id: "1",
      period: "Septembre 2023",
      paymentDate: "15/10/2023",
      amount: 1850,
      status: "paid",
      reference: "TRV-20231015-001",
      details: [
        { type: "Commissions Retail", amount: 380 },
        { type: "Commissions QVP", amount: 620 },
        { type: "Bonus Leadership", amount: 350 },
        { type: "Bonus Fast Start", amount: 250 },
        { type: "Commissions Génération", amount: 250 },
      ],
    },
    {
      id: "2",
      period: "Août 2023",
      paymentDate: "15/09/2023",
      amount: 1650,
      status: "paid",
      reference: "TRV-20230915-002",
      details: [
        { type: "Commissions Retail", amount: 350 },
        { type: "Commissions QVP", amount: 550 },
        { type: "Bonus Leadership", amount: 350 },
        { type: "Bonus Fast Start", amount: 250 },
        { type: "Commissions Génération", amount: 150 },
      ],
    },
    {
      id: "3",
      period: "Juillet 2023",
      paymentDate: "15/08/2023",
      amount: 1450,
      status: "paid",
      reference: "TRV-20230815-003",
      details: [
        { type: "Commissions Retail", amount: 320 },
        { type: "Commissions QVP", amount: 480 },
        { type: "Bonus Leadership", amount: 500 },
        { type: "Bonus Fast Start", amount: 0 },
        { type: "Commissions Génération", amount: 150 },
      ],
    },
    {
      id: "4",
      period: "Juin 2023",
      paymentDate: "15/07/2023",
      amount: 1250,
      status: "paid",
      reference: "TRV-20230715-004",
      details: [
        { type: "Commissions Retail", amount: 300 },
        { type: "Commissions QVP", amount: 450 },
        { type: "Bonus Leadership", amount: 0 },
        { type: "Bonus Fast Start", amount: 500 },
        { type: "Commissions Génération", amount: 0 },
      ],
    },
    {
      id: "5",
      period: "Mai 2023",
      paymentDate: "15/06/2023",
      amount: 950,
      status: "paid",
      reference: "TRV-20230615-005",
      details: [
        { type: "Commissions Retail", amount: 250 },
        { type: "Commissions QVP", amount: 400 },
        { type: "Bonus Leadership", amount: 0 },
        { type: "Bonus Fast Start", amount: 300 },
        { type: "Commissions Génération", amount: 0 },
      ],
    },
  ];

  // Données pour le calendrier annuel des paiements
  const annualPaymentCalendar = [
    {
      month: "Janvier",
      periodEnd: "31/01/2023",
      calculationDate: "01/02/2023 - 07/02/2023",
      paymentDate: "15/02/2023",
      status: "paid",
    },
    {
      month: "Février",
      periodEnd: "28/02/2023",
      calculationDate: "01/03/2023 - 07/03/2023",
      paymentDate: "15/03/2023",
      status: "paid",
    },
    {
      month: "Mars",
      periodEnd: "31/03/2023",
      calculationDate: "01/04/2023 - 07/04/2023",
      paymentDate: "15/04/2023",
      status: "paid",
    },
    {
      month: "Avril",
      periodEnd: "30/04/2023",
      calculationDate: "01/05/2023 - 07/05/2023",
      paymentDate: "15/05/2023",
      status: "paid",
    },
    {
      month: "Mai",
      periodEnd: "31/05/2023",
      calculationDate: "01/06/2023 - 07/06/2023",
      paymentDate: "15/06/2023",
      status: "paid",
    },
    {
      month: "Juin",
      periodEnd: "30/06/2023",
      calculationDate: "01/07/2023 - 07/07/2023",
      paymentDate: "15/07/2023",
      status: "paid",
    },
    {
      month: "Juillet",
      periodEnd: "31/07/2023",
      calculationDate: "01/08/2023 - 07/08/2023",
      paymentDate: "15/08/2023",
      status: "paid",
    },
    {
      month: "Août",
      periodEnd: "31/08/2023",
      calculationDate: "01/09/2023 - 07/09/2023",
      paymentDate: "15/09/2023",
      status: "paid",
    },
    {
      month: "Septembre",
      periodEnd: "30/09/2023",
      calculationDate: "01/10/2023 - 07/10/2023",
      paymentDate: "15/10/2023",
      status: "paid",
    },
    {
      month: "Octobre",
      periodEnd: "31/10/2023",
      calculationDate: "01/11/2023 - 07/11/2023",
      paymentDate: "15/11/2023",
      status: "scheduled",
    },
    {
      month: "Novembre",
      periodEnd: "30/11/2023",
      calculationDate: "01/12/2023 - 07/12/2023",
      paymentDate: "15/12/2023",
      status: "pending",
    },
    {
      month: "Décembre",
      periodEnd: "31/12/2023",
      calculationDate: "01/01/2024 - 07/01/2024",
      paymentDate: "15/01/2024",
      status: "pending",
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
      case "paid":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" /> Payé
          </Badge>
        );
      case "scheduled":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Clock className="h-3 w-3 mr-1" /> Programmé
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <Clock className="h-3 w-3 mr-1" /> En attente
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" /> En traitement
          </Badge>
        );
      default:
        return null;
    }
  };

  // Calcul du total des paiements historiques
  const totalHistoricalPayments = paymentHistory.reduce(
    (total, payment) => total + payment.amount,
    0,
  );

  // Calcul du paiement moyen
  const averagePayment = totalHistoricalPayments / paymentHistory.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Calendrier des Paiements
          </h1>
          <p className="text-gray-500 mt-1">
            Suivez vos paiements passés et à venir, et consultez le calendrier
            annuel
          </p>
        </div>

        <InteractiveControls className="mb-6 rounded-lg" />

        {/* Résumé des paiements */}
        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle>Résumé des Paiements</CardTitle>
                <CardDescription>
                  Vue d'ensemble de vos paiements et commissions
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exporter l'historique
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Prochain Paiement
                </h4>
                <p className="text-3xl font-bold">
                  {formatCurrency(upcomingPayments[0].amount)}
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>Prévu pour le {upcomingPayments[0].paymentDate}</span>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Total Payé (Année)
                </h4>
                <p className="text-3xl font-bold">
                  {formatCurrency(totalHistoricalPayments)}
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <BarChart className="h-4 w-4 mr-1" />
                  <span>Sur les 5 derniers mois</span>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Paiement Moyen
                </h4>
                <p className="text-3xl font-bold">
                  {formatCurrency(averagePayment)}
                </p>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+15% par rapport à l'année précédente</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-700 mb-1">
                    Rappel Important
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Les paiements sont traités le 15 de chaque mois pour les
                    commissions du mois précédent. Assurez-vous que vos
                    informations bancaires sont à jour dans votre profil pour
                    éviter tout retard de paiement.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Paiement à Venir</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="font-medium">
                          {upcomingPayments[0].period}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Paiement prévu le {upcomingPayments[0].paymentDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">
                          {formatCurrency(upcomingPayments[0].amount)}
                        </p>
                        {getStatusBadge(upcomingPayments[0].status)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {upcomingPayments[0].details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center text-sm"
                        >
                          <span>{detail.type}</span>
                          <span className="font-medium">
                            {formatCurrency(detail.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Dernier Paiement</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="font-medium">
                          {paymentHistory[0].period}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Payé le {paymentHistory[0].paymentDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">
                          {formatCurrency(paymentHistory[0].amount)}
                        </p>
                        {getStatusBadge(paymentHistory[0].status)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {paymentHistory[0].details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center text-sm"
                        >
                          <span>{detail.type}</span>
                          <span className="font-medium">
                            {formatCurrency(detail.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Référence:</span>
                        <span className="font-medium">
                          {paymentHistory[0].reference}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>Dernière mise à jour: 15 octobre 2023</span>
            </div>
            <Button variant="link" size="sm" className="text-blue-600">
              Voir tous les paiements
            </Button>
          </CardFooter>
        </Card>

        {/* Onglets pour les différentes sections */}
        <Tabs defaultValue="calendar" className="w-full mb-6">
          <TabsList className="mb-4 grid grid-cols-1 md:grid-cols-2 w-full">
            <TabsTrigger value="calendar">Calendrier Annuel</TabsTrigger>
            <TabsTrigger value="history">Historique des Paiements</TabsTrigger>
          </TabsList>

          {/* Onglet Calendrier Annuel */}
          <TabsContent value="calendar" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Calendrier Annuel des Paiements</CardTitle>
                    <CardDescription>
                      Dates de clôture, de calcul et de paiement pour l'année{" "}
                      {year}
                    </CardDescription>
                  </div>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Année" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">
                        Cycle de Paiement
                      </h4>
                      <p className="text-sm text-blue-600">
                        Les commissions sont calculées sur la base du volume
                        généré pendant le mois calendaire (du 1er au dernier
                        jour du mois). La période de calcul dure environ une
                        semaine, et les paiements sont effectués le 15 du mois
                        suivant.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Mois</TableHead>
                        <TableHead>Fin de Période</TableHead>
                        <TableHead>Période de Calcul</TableHead>
                        <TableHead>Date de Paiement</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {annualPaymentCalendar.map((period, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {period.month}
                          </TableCell>
                          <TableCell>{period.periodEnd}</TableCell>
                          <TableCell>{period.calculationDate}</TableCell>
                          <TableCell>{period.paymentDate}</TableCell>
                          <TableCell>{getStatusBadge(period.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Historique des Paiements */}
          <TabsContent value="history" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Historique des Paiements</CardTitle>
                    <CardDescription>
                      Détail de tous vos paiements reçus
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Rechercher..."
                        className="pl-8 w-[200px]"
                      />
                    </div>
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
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Période</TableHead>
                        <TableHead>Date de Paiement</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Référence</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paymentHistory.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">
                            {payment.period}
                          </TableCell>
                          <TableCell>{payment.paymentDate}</TableCell>
                          <TableCell className="font-bold">
                            {formatCurrency(payment.amount)}
                          </TableCell>
                          <TableCell>{payment.reference}</TableCell>
                          <TableCell>
                            {getStatusBadge(payment.status)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center"
                            >
                              <FileText className="h-4 w-4 mr-1" />
                              <span className="text-xs">Détails</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">
                        Informations de Paiement
                      </h4>
                      <p className="text-sm text-green-600">
                        Les paiements sont effectués par virement bancaire sur
                        le compte que vous avez enregistré. Si vous souhaitez
                        modifier vos coordonnées bancaires, veuillez vous rendre
                        dans la section Paramètres de votre profil.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Calendrier visuel */}
        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <CardTitle>Calendrier Visuel</CardTitle>
            <CardDescription>
              Visualisez vos paiements sur un calendrier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  locale={fr}
                  modifiers={{
                    payment: [
                      new Date(2023, 9, 15),
                      new Date(2023, 10, 15),
                      new Date(2023, 11, 15),
                    ],
                    periodEnd: [
                      new Date(2023, 9, 31),
                      new Date(2023, 10, 30),
                      new Date(2023, 11, 31),
                    ],
                  }}
                  modifiersStyles={{
                    payment: {
                      backgroundColor: "#dbeafe",
                      color: "#1e40af",
                      fontWeight: "bold",
                    },
                    periodEnd: { border: "2px solid #ef4444" },
                  }}
                />
              </div>
              <div className="md:w-1/2">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Légende</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-100 rounded-sm mr-2"></div>
                        <span className="text-sm">Dates de paiement</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-red-500 rounded-sm mr-2"></div>
                        <span className="text-sm">
                          Fin de période de commission
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-100 rounded-sm mr-2"></div>
                        <span className="text-sm">Période de calcul</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Dates Importantes</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Prochain paiement:</span>
                        <span className="font-medium">15 novembre 2023</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Fin de période actuelle:</span>
                        <span className="font-medium">30 novembre 2023</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Prochaine période de calcul:</span>
                        <span className="font-medium">1-7 décembre 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-700">Conseil</h4>
                        <p className="text-sm text-blue-600 mt-1">
                          Pour maximiser vos commissions du mois en cours,
                          concentrez vos efforts de vente et de recrutement
                          avant la fin du mois. Les transactions effectuées
                          après cette date seront comptabilisées pour le mois
                          suivant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
