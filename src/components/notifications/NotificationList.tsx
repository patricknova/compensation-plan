"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useNotifications, Notification } from "./NotificationProvider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  Trash2,
  Bell,
  BellOff,
  Info,
  AlertTriangle,
  Award,
  TrendingUp,
  DollarSign,
} from "lucide-react";

interface NotificationListProps {
  onClose?: () => void;
  maxHeight?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  limit?: number;
}

export default function NotificationList({
  onClose,
  maxHeight = "300px",
  showHeader = true,
  showFooter = true,
  limit,
}: NotificationListProps) {
  const {
    notifications,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications,
  } = useNotifications();
  const router = useRouter();

  const displayedNotifications = limit
    ? notifications.slice(0, limit)
    : notifications;

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <Check className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "error":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "upgrade":
        return <TrendingUp className="h-5 w-5 text-purple-500" />;
      case "performance":
        return <Award className="h-5 w-5 text-indigo-500" />;
      case "commission":
        return <DollarSign className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSecs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSecs < 60) {
      return "À l'instant";
    } else if (diffInMins < 60) {
      return `Il y a ${diffInMins} minute${diffInMins > 1 ? "s" : ""}`;
    } else if (diffInHours < 24) {
      return `Il y a ${diffInHours} heure${diffInHours > 1 ? "s" : ""}`;
    } else if (diffInDays < 7) {
      return `Il y a ${diffInDays} jour${diffInDays > 1 ? "s" : ""}`;
    } else {
      return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
      });
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }

    if (notification.link) {
      router.push(notification.link);
      if (onClose) onClose();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {showHeader && (
        <div className="p-3 border-b flex items-center justify-between">
          <h3 className="font-semibold">Notifications</h3>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              title="Marquer tout comme lu"
            >
              <BellOff className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllNotifications}
              title="Supprimer toutes les notifications"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <ScrollArea className="flex-1" style={{ maxHeight }}>
        {displayedNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 text-center text-gray-500">
            <Bell className="h-8 w-8 mb-2 text-gray-300" />
            <p>Aucune notification</p>
          </div>
        ) : (
          <div className="divide-y">
            {displayedNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 hover:bg-gray-50 cursor-pointer ${notification.read ? "opacity-75" : "bg-blue-50/30"}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium ${notification.read ? "" : "font-semibold"}`}
                    >
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">
                        {formatDate(notification.date)}
                      </span>
                      {notification.actionText && (
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-xs"
                        >
                          {notification.actionText}
                        </Button>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearNotification(notification.id);
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>

      {showFooter && (
        <div className="p-2 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-sm text-blue-600 hover:text-blue-800"
            onClick={() => router.push("/notifications")}
          >
            Voir toutes les notifications
          </Button>
        </div>
      )}
    </div>
  );
}
