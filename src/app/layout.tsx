import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { siteConfig } from "@/components/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "private relocation Tokyo",
    "relocation concierge Tokyo",
    "Minato Azabu Hiroo",
    "Omotesando Daikanyama",
    "luxury relocation Tokyo",
    "international residents Tokyo",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/favicon.svg",
    apple: "/logo/apple-touch-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <MotionProvider>
          <JsonLd />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
          >
            Skip to main content
          </a>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
