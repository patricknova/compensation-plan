"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import RevenueSummary from "@/components/dashboard/RevenueSummary";
import CommissionChart from "@/components/dashboard/CommissionChart";
import CommissionTabs from "@/components/dashboard/CommissionTabs";
import VolumeTracking from "@/components/dashboard/VolumeTracking";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import InteractiveControls from "@/components/dashboard/InteractiveControls";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <InteractiveControls className="mb-6 rounded-lg" />

        <div className="mb-6">
          <RevenueSummary />
        </div>

        <div className="mb-6">
          <CommissionChart />
        </div>

        <div className="mb-6">
          <CommissionTabs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <VolumeTracking />
          <NotificationsPanel />
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
