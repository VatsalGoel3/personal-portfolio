import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import ClientLayout from "@/components/ClientLayout";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vatsal Goel - Software Engineer",
  description: "Software Engineer specializing in Cloud Computing, Cybersecurity, and AI Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#111827] text-white`}>
        <ClientLayout>
          <PageWrapper>
            <Navbar />
            <main className="min-h-screen">{children}</main>
          </PageWrapper>
        </ClientLayout>
      </body>
    </html>
  );
}
