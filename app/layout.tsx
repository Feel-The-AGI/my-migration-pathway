import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const siteUrl = "https://mymigrationpathway.com";
const siteName = "Migration Pathway";
const siteDescription = "Ghana's trusted migration agency helping students and professionals secure study and work opportunities abroad. Expert visa guidance, school admissions support, and work placement services with honest, step-by-step support.";
const ogImageUrl = `${siteUrl}/og-image.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2F3E35"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // Basic SEO
  title: {
    default: "Migration Pathway | Study & Work Abroad Guidance in Ghana",
    template: "%s | Migration Pathway Ghana"
  },
  description: siteDescription,
  keywords: [
    "study abroad Ghana",
    "work abroad Ghana",
    "visa support Ghana",
    "migration agency Ghana",
    "overseas education Ghana",
    "Canada visa Ghana",
    "UK visa Ghana",
    "USA visa Ghana",
    "Germany visa Ghana",
    "student visa Ghana",
    "work visa Ghana",
    "immigration consultant Ghana",
    "study in Canada from Ghana",
    "study in UK from Ghana",
    "overseas job placement Ghana",
    "visa application Ghana",
    "Accra migration agency",
    "Ghana education consultants",
    "abroad scholarship Ghana",
    "international education Ghana"
  ],
  authors: [{ name: "Migration Pathway", url: siteUrl }],
  creator: "Migration Pathway",
  publisher: "Migration Pathway",
  
  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Canonical & Alternates
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-GH": siteUrl,
      "en": siteUrl
    }
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: siteName,
    title: "Migration Pathway | Study & Work Abroad Guidance in Ghana",
    description: "Premium, trustworthy migration guidance for study and work abroad. Ghana's trusted agency helping students and professionals secure opportunities in Canada, UK, USA, Germany & more. Chat with us on WhatsApp for a personalized pathway plan.",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Migration Pathway - Study & Work Abroad from Ghana",
        type: "image/png"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MigrationPathway",
    creator: "@MigrationPathway",
    title: "Migration Pathway | Study & Work Abroad Guidance in Ghana",
    description: "Ghana's trusted migration agency. Expert visa guidance, school admissions & work placement services. 98% visa success rate. Chat on WhatsApp today.",
    images: {
      url: ogImageUrl,
      alt: "Migration Pathway - Study & Work Abroad from Ghana"
    }
  },
  
  // App & Format Detection
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteName
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2F3E35" }
    ]
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Category & Classification
  category: "business",
  classification: "Immigration & Visa Services",
  
  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  },
  
  // Other metadata
  other: {
    "geo.region": "GH-AA",
    "geo.placename": "Accra",
    "geo.position": "5.6037;-0.1870",
    "ICBM": "5.6037, -0.1870",
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "Global"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
