import type { Metadata } from "next";
import { Geist, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import { Suspense } from "react";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import AnalyticsTracker from "@/components/AnalyticsTracker"; // Our client-side tracker

const geist = Geist({ subsets: ["latin"] });
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start"
});
const siteUrl = "https://vatsalgoel-portfolio.netlify.app";
const siteTitle = "Vatsal Goel - Founding Engineer";
const siteDescription =
  "Founding engineer building infrastructure security, cloud systems, open-source observability, and AI-driven automation.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Vatsal Goel",
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: "Founding Engineer",
      worksFor: {
        "@type": "Organization",
        name: "i4 Ops",
        url: "https://www.i4ops.com/"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Utah"
      },
      sameAs: [
        "https://github.com/VatsalGoel3",
        "https://www.linkedin.com/in/vatsal-goel3/"
      ],
      knowsAbout: [
        "Infrastructure security",
        "Cloud systems",
        "OpenTelemetry",
        "AWS Powertools",
        "Go",
        "Python",
        "Recommender systems"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Vatsal Goel Portfolio",
      url: siteUrl,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#person`
      }
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      name: siteTitle,
      url: siteUrl,
      description: siteDescription,
      mainEntity: {
        "@id": `${siteUrl}/#person`
      },
      hasPart: [
        {
          "@type": "CreativeWork",
          name: "i4 Ops Infrastructure Security",
          url: `${siteUrl}/projects/i4-ops-infrastructure-security`,
          description: "Public-safe founding-engineer work on zero-exfiltration infrastructure security."
        },
        {
          "@type": "CreativeWork",
          name: "OpenTelemetry Go SDK",
          url: `${siteUrl}/projects/opentelemetry-go-sdk`,
          description: "Public CNCF contribution work in Go-based observability infrastructure."
        },
        {
          "@type": "CreativeWork",
          name: "Dynamic Queue Adaptation",
          url: `${siteUrl}/projects/dynamic-queue-adaptation`,
          description: "Deterministic offline prototype for intent-aware music recommendation."
        }
      ]
    }
  ]
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.className} ${pressStart.variable} bg-gradient-to-br from-gray-50 via-white to-gray-100`}>
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
    title: siteTitle,
    description: siteDescription,
    keywords: [
      "Vatsal Goel",
      "Founding Engineer",
      "Infrastructure Security",
      "Cloud Systems",
      "OpenTelemetry",
      "AWS Powertools",
      "Go",
      "Python"
    ],
    authors: [{ name: "Vatsal Goel", url: siteUrl }],
    creator: "Vatsal Goel",
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(siteUrl),
    alternates: { canonical: "/" },
    openGraph: {
      type: "profile",
      url: "/",
      title: siteTitle,
      description: siteDescription,
      siteName: "Vatsal Goel Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vatsal Goel portfolio preview"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: ["/og-image.png"]
    },
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
