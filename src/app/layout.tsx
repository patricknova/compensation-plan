import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "@/components/ui/providers";
import { NotificationProvider } from "@/components/notifications/NotificationProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trévo Compensation Dashboard",
  description:
    "A comprehensive dashboard for tracking Trévo compensation and bonuses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <Providers>
          <NotificationProvider>
            {children}
            <TempoInit />
          </NotificationProvider>
        </Providers>
      </body>
    </html>
  );
}
