import Navbar from "@/components/navbar";
import { Oneko } from "@/components/oneko";
import { SchemaMarkup } from "@/components/schema-markup";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap', // Improve font loading performance
  preload: true, // Preload the font
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Full-Stack Developer`,
    template: `%s | ${DATA.name}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.jpg",
  },
  description: "Avinash Bajpai - Full-Stack Developer specializing in React, Node.js, Electron.js, and modern databases. Computer Science student at KCCITM.",
  keywords: [
    "Avinash Bajpai",
    "Full-Stack Developer", 
    "Electron.js",
    "React",
    "Node.js",
    "Portfolio",
    "Computer Science",
    "JavaScript",
    "TypeScript",
    "KCCITM"
  ],
  alternates: {
    canonical: DATA.url,
  },
  authors: [{ name: "Avinash Bajpai" }],
  creator: "Avinash Bajpai",
  openGraph: {
    title: `${DATA.name} | Full-Stack Developer`,
    description: "Avinash Bajpai - Full-Stack Developer specializing in React, Node.js, Electron.js, and modern databases. Computer Science student at KCCITM.",
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Avinash Bajpai - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Full-Stack Developer`,
    description: "Avinash Bajpai - Full-Stack Developer specializing in React, Node.js, Electron.js, and modern databases.",
    images: ["/avatar.jpg"],
    creator: "@Devavinashh",
    site: "@Devavinashh",
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
  verification: {
    google: "", // Add your Google Search Console verification code here
    yandex: "",
  },
  other: {
    "google-site-verification": "", // Add verification meta tag here when ready
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        {/* Preload critical resources for better performance */}
        <link rel="preload" href="/avatar.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics - Disabled until valid tracking ID is provided */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={300}> {/* Reduced immediate processing */}
            {children}
            <Oneko />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}