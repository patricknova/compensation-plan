"use client";

import React from "react";
import Link from "next/link";
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
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Trévo</span>
            <span className="ml-2 text-sm text-gray-500">
              Tableau de Bord de Compensation
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/" passHref>
            <Button variant="ghost">Tableau de Bord</Button>
          </Link>
          <Link href="/commissions" passHref>
            <Button variant="ghost">Commissions</Button>
          </Link>
          <Link href="/volume" passHref>
            <Button variant="ghost">Volume</Button>
          </Link>
          <Link href="/team" passHref>
            <Button variant="ghost">Équipe</Button>
          </Link>
          <Link href="/powerstart" passHref>
            <Button variant="ghost">Démarrage Rapide</Button>
          </Link>
          <Link href="/leadership" passHref>
            <Button variant="ghost">Leadership</Button>
          </Link>
          <Link href="/reports" passHref>
            <Button variant="ghost">Rapports</Button>
          </Link>
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
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
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
