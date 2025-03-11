"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  Bell,
  ArrowUp,
  Award,
  Calendar,
  DollarSign,
  Gift,
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useRouter } from "next/navigation";
import { useNotifications } from "@/components/notifications/NotificationProvider";
import NotificationList from "@/components/notifications/NotificationList";

interface NotificationsPanelProps {
  className?: string;
}

export default function NotificationsPanel({
  className,
}: NotificationsPanelProps) {
  const router = useRouter();
  const { unreadCount } = useNotifications();

  return (
    <Card className={`w-full h-full bg-white shadow-md ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Bell className="h-5 w-5 mr-2 text-blue-600" />
            <CardTitle className="text-xl font-bold">Notifications</CardTitle>
          </div>
          <Badge className="bg-blue-100 text-blue-800">
            {unreadCount} nouvelles
          </Badge>
        </div>
        <CardDescription className="mt-1">
          Restez informé des opportunités, bonus et alertes importantes
        </CardDescription>
      </CardHeader>
      <CardContent>
        {unreadCount === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 text-center text-gray-500">
            <Bell className="h-8 w-8 mb-2 text-gray-300" />
            <p>Aucune notification non lue</p>
            <Button
              variant="link"
              size="sm"
              className="mt-2"
              onClick={() => router.push("/notifications")}
            >
              Voir toutes les notifications
            </Button>
          </div>
        ) : (
          <NotificationList limit={3} maxHeight="220px" />
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <span className="text-xs text-gray-500">
          <Calendar className="h-3 w-3 inline mr-1" />
          Dernière mise à jour: Aujourd'hui à 10:30
        </span>
        <Button
          variant="link"
          size="sm"
          className="text-blue-600 p-0 h-auto"
          onClick={() => router.push("/notifications")}
        >
          <span className="text-xs">Voir toutes les notifications</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
