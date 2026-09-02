import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimationController from "@/components/ScrollAnimationController";
import { COMPANY_NAME, COMPANY_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Education & Construction Excellence`,
  description: COMPANY_DESCRIPTION,
  robots: "index, follow",
  keywords: [
    "education",
    "training",
    "civil construction",
    "infrastructure",
    "HR development",
    "professional training",
    "Indonesia",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: `${COMPANY_NAME} | Excellence in Education & Infrastructure`,
    description: COMPANY_DESCRIPTION,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    url: "https://xelta.com",
    logo: "https://xelta.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General",
      telephone: "+1-234-567-890",
      email: "info@xelta.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/xelta",
      "https://www.facebook.com/xelta",
      "https://www.instagram.com/xelta",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <div className="site-logo-background" aria-hidden="true">
          <img src="/XELTA%20Logo.jpg.jpeg" alt="" />
        </div>
        <ScrollAnimationController />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
