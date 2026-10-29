import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1A2838",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomira.ma"),
  title: "Nomira — Micro-solutions logicielles ciblées · Déploiement en 4 jours",
  description:
    "Nomira conçoit et déploie des micro-solutions logicielles ciblées en 4 jours pour éliminer les tâches manuelles chronophages des TPE/PME. Casablanca · Paris. Diagnostic gratuit de 30 min.",
  keywords: [
    "Nomira",
    "micro-solutions logicielles",
    "automatisation TPE PME",
    "gain de temps entreprise",
    "Casablanca",
    "Paris",
    "logiciel sur mesure rapide",
    "subventions digitalisation Maroc",
  ],
  authors: [{ name: "Nomira" }],
  creator: "Nomira",
  publisher: "Nomira",
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: "https://www.nomira.ma",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nomira.ma",
    siteName: "Nomira",
    title: "Nomira — Un problème visé. Un coût en moins.",
    description:
      "Micro-solutions logicielles ciblées, déployées en 4 jours pour éliminer les tâches manuelles chronophages des TPE/PME. Diagnostic gratuit sans engagement.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nomira — Regagnez vos ressources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomira — Un problème visé. Un coût en moins.",
    description:
      "Micro-solutions logicielles ciblées déployées en 4 jours pour TPE et PME. Diagnostic gratuit sans engagement.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon-simplifie-carre.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nomira",
    slogan: "Regagnez vos ressources",
    url: "https://www.nomira.ma",
    logo: "https://www.nomira.ma/brand/lockup-horizontal.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+212-6-61-57-42-47",
        contactType: "customer service",
        areaServed: ["MA", "FR"],
        availableLanguage: ["French"],
      },
    ],
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nomira",
    image: "https://www.nomira.ma/og-image.svg",
    url: "https://www.nomira.ma",
    telephone: "+212661574247",
    email: "contact@nomira.ma",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#1A2838] antialiased selection:bg-[#FFA23C]/30 selection:text-[#1A2838]">
        {children}
      </body>
    </html>
  );
}
