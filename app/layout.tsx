import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import { Suspense } from "react";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import AnalyticsTracker from "@/components/AnalyticsTracker"; // Our client-side tracker

const geist = Geist({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gradient-to-br from-gray-50 via-white to-gray-100`}>
        <ServiceWorkerRegistration />
        <ClientLayout>
          <AnalyticsTracker />
          <div className="relative">
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative">
              <Navbar />
              <Suspense>
                <main className="min-h-screen">{children}</main>
              </Suspense>
            </div>
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Vatsal Goel - Software Engineer",
    description: "Software Engineer specializing in Cloud Computing, Cybersecurity, and AI Automation",
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL("https://vatsalgoel-portfolio.netlify.app"),
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
