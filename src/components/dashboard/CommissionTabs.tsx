"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import {
  AlertCircle,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  Info,
  XCircle,
} from "lucide-react";

interface CommissionTabsProps {
  className?: string;
}

export default function CommissionTabs({ className }: CommissionTabsProps) {
  // Sample data for commission types
  const commissionData = {
    retail: {
      earned: 1850,
      potential: 2200,
      percentComplete: 84,
      status: "qualified",
      requirements: [
        { name: "Volume Personnel", current: 650, target: 500, met: true },
        { name: "Clients Actifs", current: 12, target: 10, met: true },
      ],
      nextPayment: "15 novembre 2023",
    },
    qvp: {
      earned: 1650,
      potential: 2000,
      percentComplete: 82,
      status: "qualified",
      requirements: [
        { name: "Volume Personnel", current: 650, target: 500, met: true },
        { name: "Volume Groupe", current: 28500, target: 20000, met: true },
        { name: "Distributeurs Actifs", current: 8, target: 5, met: true },
      ],
      nextPayment: "15 novembre 2023",
    },
    generation: {
      earned: 735,
      potential: 1500,
      percentComplete: 49,
      status: "partial",
      requirements: [
        { name: "Volume Personnel", current: 650, target: 500, met: true },
        { name: "Volume Groupe", current: 28500, target: 20000, met: true },
        { name: "Branches Qualifiées", current: 2, target: 3, met: false },
        { name: "Rang", current: "Or", target: "Or", met: true },
      ],
      nextPayment: "15 novembre 2023",
    },
  };

  // Format currency
  const formatCurrency = (value: number) => {
    // Conversion d'euros en FCFA (1 EUR = environ 655.957 FCFA)
    const valueInCFA = Math.round(value * 655.957);
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valueInCFA);
  };

  // Get status badge based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "qualified":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" /> Qualifié
          </Badge>
        );
      case "partial":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <AlertCircle className="h-3 w-3 mr-1" /> Partiellement Qualifié
          </Badge>
        );
      case "not-qualified":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" /> Non Qualifié
          </Badge>
        );
      default:
        return null;
    }
  };

  // Get status icon based on whether requirement is met
  const getStatusIcon = (met: boolean) => {
    return met ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    );
  };

  return (
    <Card className={`w-full bg-white shadow-md ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">
          Détails des Commissions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="retail">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="retail">Retail</TabsTrigger>
            <TabsTrigger value="qvp">QVP</TabsTrigger>
            <TabsTrigger value="generation">Génération</TabsTrigger>
          </TabsList>

          <TabsContent value="retail" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Commissions Retail</h3>
                <p className="text-sm text-gray-500">
                  Gagnées sur vos ventes personnelles aux clients
                </p>
              </div>
              {getStatusBadge(commissionData.retail.status)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Gagné ce mois-ci
                    </span>
                    <span className="text-sm">
                      {formatCurrency(commissionData.retail.earned)} /{" "}
                      {formatCurrency(commissionData.retail.potential)}
                    </span>
                  </div>
                  <Progress
                    value={commissionData.retail.percentComplete}
                    className="h-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {commissionData.retail.percentComplete}% des gains
                    potentiels
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-700">
                        Prochain Paiement
                      </h4>
                      <p className="text-xs text-blue-600 mt-1">
                        Vos commissions retail seront payées le{" "}
                        {commissionData.retail.nextPayment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">
                  Conditions de Qualification
                </h4>
                <div className="space-y-3">
                  {commissionData.retail.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start">
                      {getStatusIcon(req.met)}
                      <div className="ml-3">
                        <p className="text-sm font-medium">{req.name}</p>
                        <p className="text-xs text-gray-500">
                          Actuel: {req.current} | Requis: {req.target}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="link"
                  size="sm"
                  className="mt-4 text-blue-600 p-0 h-auto"
                >
                  <span className="text-sm">Voir la répartition détaillée</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qvp" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Commissions QVP</h3>
                <p className="text-sm text-gray-500">
                  Gagnées sur le volume de votre équipe
                </p>
              </div>
              {getStatusBadge(commissionData.qvp.status)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Gagné ce mois-ci
                    </span>
                    <span className="text-sm">
                      {formatCurrency(commissionData.qvp.earned)} /{" "}
                      {formatCurrency(commissionData.qvp.potential)}
                    </span>
                  </div>
                  <Progress
                    value={commissionData.qvp.percentComplete}
                    className="h-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {commissionData.qvp.percentComplete}% des gains potentiels
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-700">
                        Prochain Paiement
                      </h4>
                      <p className="text-xs text-blue-600 mt-1">
                        Vos commissions QVP seront payées le{" "}
                        {commissionData.qvp.nextPayment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">
                  Conditions de Qualification
                </h4>
                <div className="space-y-3">
                  {commissionData.qvp.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start">
                      {getStatusIcon(req.met)}
                      <div className="ml-3">
                        <p className="text-sm font-medium">{req.name}</p>
                        <p className="text-xs text-gray-500">
                          Actuel: {req.current} | Requis: {req.target}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="link"
                  size="sm"
                  className="mt-4 text-blue-600 p-0 h-auto"
                >
                  <span className="text-sm">Voir la répartition détaillée</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="generation" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  Commissions Génération
                </h3>
                <p className="text-sm text-gray-500">
                  Gagnées sur vos générations en aval
                </p>
              </div>
              {getStatusBadge(commissionData.generation.status)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Gagné ce mois-ci
                    </span>
                    <span className="text-sm">
                      {formatCurrency(commissionData.generation.earned)} /{" "}
                      {formatCurrency(commissionData.generation.potential)}
                    </span>
                  </div>
                  <Progress
                    value={commissionData.generation.percentComplete}
                    className="h-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {commissionData.generation.percentComplete}% des gains
                    potentiels
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-yellow-700">
                        Alerte de Qualification
                      </h4>
                      <p className="text-xs text-yellow-600 mt-1">
                        Il vous manque 1 branche qualifiée pour gagner la
                        totalité des commissions génération. Concentrez-vous sur
                        le développement de votre troisième branche.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">
                  Conditions de Qualification
                </h4>
                <div className="space-y-3">
                  {commissionData.generation.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start">
                      {getStatusIcon(req.met)}
                      <div className="ml-3">
                        <p className="text-sm font-medium">{req.name}</p>
                        <p className="text-xs text-gray-500">
                          Actuel: {req.current} | Requis: {req.target}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="link"
                  size="sm"
                  className="mt-4 text-blue-600 p-0 h-auto"
                >
                  <span className="text-sm">Voir la répartition détaillée</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
