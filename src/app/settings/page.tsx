"use client";

import React from "react";
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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Bell,
  CreditCard,
  Globe,
  Lock,
  Mail,
  Phone,
  Save,
  Shield,
  User,
  Wallet,
  Smartphone,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Paramètres</h1>
          <p className="text-gray-500 mt-1">
            Gérez vos préférences et paramètres de compte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-1 bg-white shadow-md">
            <CardContent className="p-4">
              <nav className="space-y-1">
                <a
                  href="#profile"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
                >
                  <User className="mr-3 h-5 w-5" />
                  Profil
                </a>
                <a
                  href="#notifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <Bell className="mr-3 h-5 w-5" />
                  Notifications
                </a>
                <a
                  href="#payment"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <CreditCard className="mr-3 h-5 w-5" />
                  Moyens de Paiement
                </a>
                <a
                  href="#security"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <Shield className="mr-3 h-5 w-5" />
                  Sécurité
                </a>
                <a
                  href="#preferences"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <Globe className="mr-3 h-5 w-5" />
                  Préférences
                </a>
                <a
                  href="#help"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <HelpCircle className="mr-3 h-5 w-5" />
                  Aide & Support
                </a>
              </nav>
            </CardContent>
          </Card>

          <div className="md:col-span-3 space-y-6">
            <Card id="profile" className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Informations de Profil</CardTitle>
                <CardDescription>
                  Mettez à jour vos informations personnelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                          alt="Photo de profil"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Changer la photo
                      </Button>
                    </div>
                    <div className="md:w-3/4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom</Label>
                          <Input id="firstName" defaultValue="Sarah" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom</Label>
                          <Input id="lastName" defaultValue="Johnson" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="flex items-center">
                          <Input
                            id="email"
                            defaultValue="sarah.johnson@example.com"
                          />
                          <Badge className="ml-2 bg-green-100 text-green-800">
                            Vérifié
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input id="phone" defaultValue="+33 6 12 34 56 78" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="distributorId">ID Distributeur</Label>
                          <Input
                            id="distributorId"
                            defaultValue="TRV-123456"
                            readOnly
                            className="bg-gray-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Adresse</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input id="address" defaultValue="123 Rue de Paris" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ville</Label>
                        <Input id="city" defaultValue="Paris" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Code Postal</Label>
                        <Input id="postalCode" defaultValue="75001" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Pays</Label>
                        <Input id="country" defaultValue="France" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t pt-4">
                <Button variant="outline">Annuler</Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Enregistrer
                </Button>
              </CardFooter>
            </Card>

            <Card id="notifications" className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Préférences de Notifications</CardTitle>
                <CardDescription>
                  Gérez comment et quand vous recevez des notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Notifications par Email
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-commissions">Commissions</Label>
                          <p className="text-xs text-gray-500">
                            Recevez des notifications lorsque vos commissions
                            sont calculées
                          </p>
                        </div>
                        <Switch id="email-commissions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-rank">
                            Progression de Rang
                          </Label>
                          <p className="text-xs text-gray-500">
                            Recevez des alertes lorsque vous approchez d'un
                            nouveau rang
                          </p>
                        </div>
                        <Switch id="email-rank" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-team">Activité d'Équipe</Label>
                          <p className="text-xs text-gray-500">
                            Recevez des mises à jour sur l'activité de votre
                            équipe
                          </p>
                        </div>
                        <Switch id="email-team" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-news">
                            Actualités et Promotions
                          </Label>
                          <p className="text-xs text-gray-500">
                            Recevez des informations sur les nouveaux produits
                            et promotions
                          </p>
                        </div>
                        <Switch id="email-news" />
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Notifications Push
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-commissions">Commissions</Label>
                          <p className="text-xs text-gray-500">
                            Recevez des notifications push pour les paiements de
                            commissions
                          </p>
                        </div>
                        <Switch id="push-commissions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-rank">Progression de Rang</Label>
                          <p className="text-xs text-gray-500">
                            Recevez des alertes push pour les opportunités de
                            progression
                          </p>
                        </div>
                        <Switch id="push-rank" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-team">Activité d'Équipe</Label>
                          <p className="text-xs text-gray-500">
                            Recevez des notifications push pour l'activité
                            importante de l'équipe
                          </p>
                        </div>
                        <Switch id="push-team" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t pt-4">
                <Button variant="outline">Annuler</Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Enregistrer
                </Button>
              </CardFooter>
            </Card>

            <Card id="payment" className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Moyens de Paiement</CardTitle>
                <CardDescription>
                  Gérez vos informations bancaires pour recevoir vos commissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Compte Bancaire Principal
                    </h3>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Wallet className="h-8 w-8 text-blue-500 mr-3" />
                          <div>
                            <p className="font-medium">
                              Banque Nationale de Paris
                            </p>
                            <p className="text-sm text-gray-500">
                              IBAN: FR76 **** **** **** **** 1234
                            </p>
                          </div>
                        </div>
                        <Badge>Par défaut</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Ajouter un nouveau compte
                    </Button>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Historique des Paiements
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-500">
                              Date
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">
                              Description
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">
                              Montant
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">
                              Statut
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">15/10/2023</td>
                            <td className="py-3 px-4">
                              Commissions Septembre 2023
                            </td>
                            <td className="py-3 px-4 font-medium">
                              1 200 000 FCFA
                            </td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-100 text-green-800">
                                Payé
                              </Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">15/09/2023</td>
                            <td className="py-3 px-4">Commissions Août 2023</td>
                            <td className="py-3 px-4 font-medium">
                              1 075 000 FCFA
                            </td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-100 text-green-800">
                                Payé
                              </Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">15/08/2023</td>
                            <td className="py-3 px-4">
                              Commissions Juillet 2023
                            </td>
                            <td className="py-3 px-4 font-medium">
                              950 000 FCFA
                            </td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-100 text-green-800">
                                Payé
                              </Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="mt-2 text-blue-600 p-0 h-auto"
                    >
                      Voir tout l'historique
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="security" className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Sécurité</CardTitle>
                <CardDescription>
                  Gérez vos paramètres de sécurité et de connexion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Mot de Passe</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Mot de passe actuel
                        </Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">
                          Nouveau mot de passe
                        </Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirmer le mot de passe
                        </Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button size="sm">
                        <Lock className="h-4 w-4 mr-2" />
                        Mettre à jour le mot de passe
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Authentification à Deux Facteurs
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="2fa">
                          Activer l'authentification à deux facteurs
                        </Label>
                        <p className="text-xs text-gray-500">
                          Ajoutez une couche de sécurité supplémentaire à votre
                          compte
                        </p>
                      </div>
                      <Switch id="2fa" />
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600">
                        L'authentification à deux facteurs ajoute une couche de
                        sécurité supplémentaire à votre compte en exigeant un
                        code de vérification en plus de votre mot de passe.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Sessions Actives
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Smartphone className="h-8 w-8 text-green-500 mr-3" />
                            <div>
                              <p className="font-medium">
                                iPhone 13 - Paris, France
                              </p>
                              <p className="text-xs text-gray-500">
                                Dernière activité: Aujourd'hui à 10:30
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            Actuel
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Smartphone className="h-8 w-8 text-blue-500 mr-3" />
                            <div>
                              <p className="font-medium">
                                MacBook Pro - Paris, France
                              </p>
                              <p className="text-xs text-gray-500">
                                Dernière activité: Hier à 18:45
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Déconnecter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="preferences" className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Préférences</CardTitle>
                <CardDescription>
                  Personnalisez votre expérience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Langue et Région
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Langue</Label>
                        <select
                          id="language"
                          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                        >
                          <option value="fr">Français</option>
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Fuseau Horaire</Label>
                        <select
                          id="timezone"
                          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                        >
                          <option value="europe-paris">
                            Europe/Paris (UTC+1)
                          </option>
                          <option value="europe-london">
                            Europe/London (UTC+0)
                          </option>
                          <option value="america-new_york">
                            America/New_York (UTC-5)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">Apparence</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Thème</Label>
                        <p className="text-xs text-gray-500">
                          Choisissez entre le mode clair et sombre
                        </p>
                      </div>
                      <ThemeSwitcher />
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Tableau de Bord
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="default-view">Vue par défaut</Label>
                          <p className="text-xs text-gray-500">
                            Choisissez la page qui s'affiche par défaut
                          </p>
                        </div>
                        <select
                          id="default-view"
                          className="w-[200px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                        >
                          <option value="dashboard">Tableau de Bord</option>
                          <option value="commissions">Commissions</option>
                          <option value="volume">Volume</option>
                          <option value="team">Équipe</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="currency">Devise</Label>
                          <p className="text-xs text-gray-500">
                            Choisissez la devise pour l'affichage des montants
                          </p>
                        </div>
                        <select
                          id="currency"
                          className="w-[200px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                        >
                          <option value="xof">Franc CFA (FCFA)</option>
                          <option value="eur">Euro (€)</option>
                          <option value="usd">Dollar US ($)</option>
                          <option value="gbp">Livre Sterling (£)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t pt-4">
                <Button variant="outline">Annuler</Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Enregistrer
                </Button>
              </CardFooter>
            </Card>

            <Card id="help" className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Aide & Support</CardTitle>
                <CardDescription>
                  Obtenez de l'aide et des ressources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Centre d'Aide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center">
                          <FileText className="h-8 w-8 text-blue-500 mr-3" />
                          <div>
                            <p className="font-medium">Guide du Distributeur</p>
                            <p className="text-sm text-gray-500">
                              Tout ce que vous devez savoir pour démarrer
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center">
                          <FileText className="h-8 w-8 text-purple-500 mr-3" />
                          <div>
                            <p className="font-medium">Plan de Compensation</p>
                            <p className="text-sm text-gray-500">
                              Comprendre comment vous êtes rémunéré
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center">
                          <FileText className="h-8 w-8 text-green-500 mr-3" />
                          <div>
                            <p className="font-medium">FAQ</p>
                            <p className="text-sm text-gray-500">
                              Réponses aux questions fréquentes
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center">
                          <FileText className="h-8 w-8 text-amber-500 mr-3" />
                          <div>
                            <p className="font-medium">Tutoriels Vidéo</p>
                            <p className="text-sm text-gray-500">
                              Apprenez par des démonstrations visuelles
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">Contactez-nous</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-gray-500">
                            support@trevo.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">Téléphone</p>
                          <p className="text-sm text-gray-500">
                            +33 1 23 45 67 89
                          </p>
                        </div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600">
                          Notre équipe de support est disponible du lundi au
                          vendredi, de 9h à 18h (CET).
                        </p>
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
          <p>
            © 2023 Trévo Tableau de Bord de Compensation. Tous droits réservés.
          </p>
          <p className="mt-1">Dernière mise à jour: 15 octobre 2023 à 10:30</p>
        </div>
      </footer>
    </div>
  );
}
