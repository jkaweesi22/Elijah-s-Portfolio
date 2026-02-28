import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { generateSEO, generatePersonJsonLd } from "@/lib/seo";
import siteConfig from "@/data/site-config.json";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = generateSEO({
  title: siteConfig.siteName,
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd();

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <Header
          siteName={siteConfig.siteName}
          navigation={siteConfig.navigation}
        />
        <main>{children}</main>
        <Footer
          siteName={siteConfig.siteName}
          tagline={siteConfig.tagline}
          socialLinks={siteConfig.socialLinks}
          contactInfo={siteConfig.contactInfo}
          navigation={siteConfig.navigation}
        />
      </body>
    </html>
  );
}
