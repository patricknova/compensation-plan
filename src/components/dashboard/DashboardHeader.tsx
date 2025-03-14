"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, Settings, LogOut } from "lucide-react";
import NotificationBell from "@/components/notifications/NotificationBell";

export default function DashboardHeader() {
  const router = useRouter();
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
          >
            <span className="text-xl font-bold text-blue-600">Trévo</span>
            <span className="ml-2 text-sm text-gray-500">
              Tableau de Bord de Compensation
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" onClick={() => router.push("/")}>
            Tableau de Bord
          </Button>
          <Button variant="ghost" onClick={() => router.push("/commissions")}>
            Commissions
          </Button>
          <Button variant="ghost" onClick={() => router.push("/volume")}>
            Volume
          </Button>
          <Button variant="ghost" onClick={() => router.push("/team")}>
            Équipe
          </Button>
          <Button variant="ghost" onClick={() => router.push("/powerstart")}>
            Démarrage Rapide
          </Button>
          <Button variant="ghost" onClick={() => router.push("/leadership")}>
            Leadership
          </Button>
          <Button variant="ghost" onClick={() => router.push("/reports")}>
            Rapports
          </Button>
        </nav>

        <div className="flex items-center space-x-2">
          <NotificationBell />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Sarah Johnson"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Sarah Johnson
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    sarah.johnson@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
