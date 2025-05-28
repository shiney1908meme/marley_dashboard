import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MARLEY Dashboard | Unleash Creativity with Innovative Tools",
  description:
    "Discover the MARLEY Dashboard, a vibrant hub for creative tools like MARLEY Trailer Generator, QR app, and Jingle Machine. Experience a retro-futuristic aesthetic blending Apple's sleek minimalism, Will.i.am's futuristic flair, Jay-Z's creative swagger, and the vintage soul of Bob Marley and James Brown.",
  keywords:
    "MARLEY Dashboard, creative tools, trailer generator, QR app, jingle machine, retro-futuristic, urban web app, vibe coding, digital creativity, innovative tools",
  authors: [{ name: "MARLEY Team", url: "https://www.marleydashboard.co.uk" }],
  creator: "MARLEY Dashboard",
  publisher: "MARLEY",
  applicationName: "MARLEY Dashboard",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6B21A8" },
    { media: "(prefers-color-scheme: dark)", color: "#1C2526" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/marley-logo-512.png", color: "#6B21A8" },
      { rel: "msapplication-TileImage", url: "/mstile-150x150.png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.marleydashboard.co.uk/",
    siteName: "MARLEY Dashboard",
    title: "MARLEY Dashboard | Unleash Creativity",
    description:
      "Discover the MARLEY Dashboard, a vibrant hub for creative tools like MARLEY Trailer Generator, QR app, and Jingle Machine. Experience a retro-futuristic aesthetic blending Apple's sleek minimalism, Will.i.am's futuristic flair, Jay-Z's creative swagger, and the vintage soul of Bob Marley and James Brown.",
    images: [
      {
        url: "https://www.marleydashboard.co.uk/marley-logo-512.png",
        width: 512,
        height: 512,
        alt: "MARLEY Dashboard - Creative Tools Hub",
        type: "image/png",
      },
      {
        url: "https://www.marleydashboard.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "MARLEY Dashboard - Unleash Creativity with Innovative Tools",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@marleydashboard",
    creator: "@marleydashboard",
    title: "MARLEY Dashboard | Unleash Creativity",
    description:
      "Discover the MARLEY Dashboard, a vibrant hub for creative tools like MARLEY Trailer Generator, QR app, and Jingle Machine. Experience a retro-futuristic aesthetic blending Apple's sleek minimalism, Will.i.am's futuristic flair, Jay-Z's creative swagger, and the vintage soul of Bob Marley and James Brown.",
    images: [
      {
        url: "https://www.marleydashboard.co.uk/marley-logo-512.png",
        alt: "MARLEY Dashboard - Creative Tools Hub",
        width: 512,
        height: 512,
      },
    ],
  },
  alternates: {
    canonical: "https://www.marleydashboard.co.uk/",
  },
  category: "technology",
  classification: "Creative Tools Platform",
  other: {
    "msapplication-TileColor": "#6B21A8",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "MARLEY Dashboard",
    "mobile-web-app-capable": "yes",
    "theme-color": "#6B21A8",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Favicon and icons - comprehensive browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/marley-logo-512.png" color="#6B21A8" />

        {/* Microsoft specific */}
        <meta name="msapplication-TileColor" content="#6B21A8" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* PWA and mobile optimization */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MARLEY Dashboard" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Additional SEO and performance meta tags */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "MARLEY Dashboard",
              description:
                "A vibrant hub for creative tools like MARLEY Trailer Generator, QR app, and Jingle Machine with retro-futuristic aesthetic.",
              url: "https://www.marleydashboard.co.uk/",
              applicationCategory: "DesignApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "GBP",
              },
              creator: {
                "@type": "Organization",
                name: "MARLEY Team",
              },
              screenshot: "https://www.marleydashboard.co.uk/marley-logo-512.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
