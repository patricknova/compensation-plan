"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type:
    | "info"
    | "success"
    | "warning"
    | "error"
    | "upgrade"
    | "performance"
    | "commission";
  date: Date;
  read: boolean;
  link?: string;
  actionText?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (
    notification: Omit<Notification, "id" | "date" | "read">,
  ) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider",
    );
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Load notifications from localStorage on mount
  useEffect(() => {
    const savedNotifications = localStorage.getItem("trevo_notifications");
    if (savedNotifications) {
      try {
        const parsedNotifications = JSON.parse(savedNotifications).map(
          (notification: any) => ({
            ...notification,
            date: new Date(notification.date),
          }),
        );
        setNotifications(parsedNotifications);
      } catch (error) {
        console.error("Failed to parse notifications from localStorage", error);
      }
    } else {
      // Add sample notifications for demo purposes
      setNotifications([
        {
          id: "1",
          title: "Opportunité de Bonus Fast Start",
          message:
            "Vous êtes à seulement 2 nouveaux distributeurs d'atteindre le bonus Fast Start de 500€!",
          type: "performance",
          date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
          read: false,
          link: "/powerstart",
          actionText: "Voir les détails",
        },
        {
          id: "2",
          title: "Mise à niveau de rang imminente",
          message:
            "Plus que 1500 GVP pour atteindre le rang Rubis! Découvrez les avantages de ce rang.",
          type: "upgrade",
          date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
          read: false,
          link: "/volume",
          actionText: "Voir mon volume",
        },
        {
          id: "3",
          title: "Commission mensuelle disponible",
          message:
            "Votre commission de 1250€ pour le mois d'octobre a été traitée et sera versée le 15 novembre.",
          type: "commission",
          date: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
          read: true,
          link: "/commissions",
          actionText: "Voir le détail",
        },
        {
          id: "4",
          title: "Nouveau programme de leadership",
          message:
            "Découvrez notre nouveau programme de leadership qui offre jusqu'à 1200€ de bonus mensuels.",
          type: "info",
          date: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 days ago
          read: true,
          link: "/leadership",
          actionText: "En savoir plus",
        },
        {
          id: "5",
          title: "Alerte de rétention d'équipe",
          message:
            "Votre taux de rétention d'équipe est descendu à 85%. Contactez vos distributeurs inactifs pour améliorer ce taux.",
          type: "warning",
          date: new Date(Date.now() - 1000 * 60 * 60 * 96), // 4 days ago
          read: false,
          link: "/team",
          actionText: "Voir mon équipe",
        },
      ]);
    }
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("trevo_notifications", JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const addNotification = (
    notification: Omit<Notification, "id" | "date" | "read">,
  ) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      date: new Date(),
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  const clearNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAllNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
