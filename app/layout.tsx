import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://mymigrationpathway.com"),
  title: "Migration Pathway | Study & Work Abroad Guidance in Ghana",
  description:
    "Migration Pathway is a Ghana-based agency helping students and professionals secure study and work opportunities abroad with clear guidance, preparation, and honest support.",
  openGraph: {
    title: "Migration Pathway | Study & Work Abroad Guidance in Ghana",
    description:
      "Premium, trustworthy migration guidance for study and work abroad. Talk to our team on WhatsApp for a personalized pathway plan.",
    url: "https://mymigrationpathway.com",
    siteName: "Migration Pathway",
    locale: "en_GH",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
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
