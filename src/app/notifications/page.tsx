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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  BellOff,
  Settings,
  Filter,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Award,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
} from "lucide-react";
import NotificationList from "@/components/notifications/NotificationList";
import {
  useNotifications,
  Notification,
} from "@/components/notifications/NotificationProvider";

export default function NotificationsPage() {
  const { notifications, unreadCount, markAllAsRead, clearAllNotifications } =
    useNotifications();
  const [activeTab, setActiveTab] = useState("all");

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return notification.type === activeTab;
  });

  // Count notifications by type
  const notificationCounts = {
    all: notifications.length,
    unread: unreadCount,
    performance: notifications.filter((n) => n.type === "performance").length,
    upgrade: notifications.filter((n) => n.type === "upgrade").length,
    commission: notifications.filter((n) => n.type === "commission").length,
    info: notifications.filter((n) => n.type === "info").length,
    warning: notifications.filter((n) => n.type === "warning").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Notifications et Alertes
          </h1>
          <p className="text-gray-500 mt-1">
            Gérez vos notifications et restez informé des opportunités
            importantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="bg-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Filtres</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="space-y-1">
                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "all" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("all")}
                  >
                    <div className="flex items-center">
                      <Bell className="mr-3 h-5 w-5" />
                      <span>Toutes les notifications</span>
                    </div>
                    <Badge variant="secondary">{notificationCounts.all}</Badge>
                  </a>
                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "unread" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("unread")}
                  >
                    <div className="flex items-center">
                      <BellOff className="mr-3 h-5 w-5" />
                      <span>Non lues</span>
                    </div>
                    <Badge variant="secondary">
                      {notificationCounts.unread}
                    </Badge>
                  </a>

                  <Separator className="my-2" />
                  <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
                    Par type
                  </p>

                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "performance" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("performance")}
                  >
                    <div className="flex items-center">
                      <Award className="mr-3 h-5 w-5 text-indigo-500" />
                      <span>Alertes de Performance</span>
                    </div>
                    <Badge variant="secondary">
                      {notificationCounts.performance}
                    </Badge>
                  </a>
                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "upgrade" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("upgrade")}
                  >
                    <div className="flex items-center">
                      <TrendingUp className="mr-3 h-5 w-5 text-purple-500" />
                      <span>Rappels de Mises à Niveau</span>
                    </div>
                    <Badge variant="secondary">
                      {notificationCounts.upgrade}
                    </Badge>
                  </a>
                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "commission" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("commission")}
                  >
                    <div className="flex items-center">
                      <DollarSign className="mr-3 h-5 w-5 text-green-500" />
                      <span>Commissions</span>
                    </div>
                    <Badge variant="secondary">
                      {notificationCounts.commission}
                    </Badge>
                  </a>
                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "info" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("info")}
                  >
                    <div className="flex items-center">
                      <Info className="mr-3 h-5 w-5 text-blue-500" />
                      <span>Informations</span>
                    </div>
                    <Badge variant="secondary">{notificationCounts.info}</Badge>
                  </a>
                  <a
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${activeTab === "warning" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    onClick={() => setActiveTab("warning")}
                  >
                    <div className="flex items-center">
                      <AlertTriangle className="mr-3 h-5 w-5 text-amber-500" />
                      <span>Avertissements</span>
                    </div>
                    <Badge variant="secondary">
                      {notificationCounts.warning}
                    </Badge>
                  </a>
                </nav>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <Button variant="outline" size="sm" onClick={markAllAsRead}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Tout marquer comme lu
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllNotifications}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Tout effacer
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-md mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Paramètres de notification
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts-performance">
                        Alertes de Performance
                      </Label>
                      <p className="text-xs text-gray-500">
                        Notifications sur les opportunités de bonus et objectifs
                      </p>
                    </div>
                    <Switch id="alerts-performance" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts-upgrade">
                        Rappels de Mises à Niveau
                      </Label>
                      <p className="text-xs text-gray-500">
                        Notifications sur les opportunités d'avancement de rang
                      </p>
                    </div>
                    <Switch id="alerts-upgrade" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts-commission">
                        Alertes de Commission
                      </Label>
                      <p className="text-xs text-gray-500">
                        Notifications sur les paiements de commission
                      </p>
                    </div>
                    <Switch id="alerts-commission" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts-team">Activité d'Équipe</Label>
                      <p className="text-xs text-gray-500">
                        Notifications sur l'activité de votre équipe
                      </p>
                    </div>
                    <Switch id="alerts-team" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts-news">
                        Actualités et Annonces
                      </Label>
                      <p className="text-xs text-gray-500">
                        Informations sur les nouveaux produits et promotions
                      </p>
                    </div>
                    <Switch id="alerts-news" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Gérer les préférences
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <Card className="bg-white shadow-md">
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {activeTab === "all" && "Toutes les notifications"}
                    {activeTab === "unread" && "Notifications non lues"}
                    {activeTab === "performance" && "Alertes de Performance"}
                    {activeTab === "upgrade" && "Rappels de Mises à Niveau"}
                    {activeTab === "commission" &&
                      "Notifications de Commission"}
                    {activeTab === "info" && "Informations"}
                    {activeTab === "warning" && "Avertissements"}
                  </CardTitle>
                  <CardDescription>
                    {filteredNotifications.length} notification
                    {filteredNotifications.length !== 1 ? "s" : ""}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Période
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {filteredNotifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center p-12 text-center text-gray-500">
                    <Bell className="h-12 w-12 mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium mb-1">
                      Aucune notification
                    </h3>
                    <p className="text-sm">
                      {activeTab === "unread"
                        ? "Vous avez lu toutes vos notifications."
                        : "Vous n'avez pas encore reçu de notifications de ce type."}
                    </p>
                  </div>
                ) : (
                  <NotificationList
                    showHeader={false}
                    showFooter={false}
                    maxHeight="600px"
                  />
                )}
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    Les notifications sont conservées pendant 30 jours
                  </span>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-md mt-6">
              <CardHeader>
                <CardTitle>Alertes Importantes</CardTitle>
                <CardDescription>
                  Opportunités actuelles nécessitant votre attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <Award className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-700 mb-1">
                          Opportunité de Bonus Fast Start
                        </h4>
                        <p className="text-sm text-blue-600 mb-2">
                          Vous êtes à seulement 2 nouveaux distributeurs
                          d'atteindre le bonus Fast Start de 500€!
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="default">
                            Voir les détails
                          </Button>
                          <Button size="sm" variant="outline">
                            Ignorer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-purple-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-purple-700 mb-1">
                          Mise à niveau de rang imminente
                        </h4>
                        <p className="text-sm text-purple-600 mb-2">
                          Plus que 1500 GVP pour atteindre le rang Rubis! Ce
                          rang vous permettra d'accéder à un taux de commission
                          de 12% et au programme de leadership avancé.
                        </p>
                        <div className="mt-2 mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-purple-700">
                              Progression
                            </span>
                            <span className="text-xs text-purple-700">95%</span>
                          </div>
                          <div className="w-full bg-purple-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="default">
                            Voir mon volume
                          </Button>
                          <Button size="sm" variant="outline">
                            Ignorer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-start">
                      <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-amber-700 mb-1">
                          Alerte de rétention d'équipe
                        </h4>
                        <p className="text-sm text-amber-600 mb-2">
                          Votre taux de rétention d'équipe est descendu à 85%.
                          Cela pourrait affecter votre qualification pour le
                          Bonus Performance d'Équipe qui requiert un taux de
                          90%.
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="default">
                            Voir mon équipe
                          </Button>
                          <Button size="sm" variant="outline">
                            Ignorer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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
