import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/contexts/QuoteModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSR Decorating - Professional Painters & Decorators in Dawlish, Newton Abbot, Torquay & Exeter, Devon",
  description: "Professional domestic & commercial decorating services across Dawlish, Newton Abbot, Torquay, Exeter, Topsham & Exmouth. Expert painters & decorators in Devon. Free quotes, quality workmanship, competitive prices.",
  keywords: "painters decorators Dawlish, decorating services Newton Abbot, painters Torquay, decorators Exeter, commercial decorating Devon, domestic decorating Topsham, painting contractors Exmouth, decorators Bovey Tracey, house painters Devon, office decorating Devon",
  authors: [{ name: "BSR Decorating" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "BSR Decorating - Professional Painters & Decorators in Devon",
    description: "Expert decorating services across Dawlish, Newton Abbot, Torquay, Exeter & surrounding Devon areas. Domestic & commercial painting specialists.",
    type: "website",
    locale: "en_GB",
    url: "https://bsrdecorating.co.uk",
    siteName: "BSR Decorating",
    images: [
      {
        url: "/images/Business decorating image.jpeg",
        width: 1200,
        height: 630,
        alt: "BSR Decorating - Professional decorating services in Devon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BSR Decorating - Professional Painters & Decorators in Devon",
    description: "Expert decorating services across Dawlish, Newton Abbot, Torquay, Exeter & surrounding Devon areas.",
    images: ["/images/Business decorating image.jpeg"]
  },
  other: {
    "geo.region": "GB-DEV",
    "geo.placename": "Dawlish, Devon",
    "geo.position": "50.5833;-3.4667",
    "ICBM": "50.5833, -3.4667"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating",
    "description": "Professional domestic and commercial decorating services across Devon",
    "url": "https://bsrdecorating.co.uk",
    "telephone": "+447805469770",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dawlish",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.5833,
      "longitude": -3.4667
    },
    "serviceArea": [
      {
        "@type": "City",
        "name": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      },
      {
        "@type": "City", 
        "name": "Newton Abbot",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      },
      {
        "@type": "City",
        "name": "Torquay", 
        "addressRegion": "Devon",
        "addressCountry": "GB"
      },
      {
        "@type": "City",
        "name": "Exeter",
        "addressRegion": "Devon", 
        "addressCountry": "GB"
      },
      {
        "@type": "City",
        "name": "Topsham",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      },
      {
        "@type": "City",
        "name": "Exmouth",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      },
      {
        "@type": "City",
        "name": "Bovey Tracey",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Decorating",
            "description": "Professional interior and exterior painting and decorating for homes"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Decorating",
            "description": "Professional decorating services for offices, retail spaces, and commercial properties"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "9",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "££",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://www.google.com/maps/place/BSR+Decorating"
    ]
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <QuoteModalProvider>
          <div className="min-h-screen bg-bsr-black text-bsr-white" style={{ backgroundColor: '#000000' }}>
            <Navigation />
            <main className="flex-1 pt-28 md:pt-16 lg:pt-28">
              {children}
            </main>
            <Footer />
          </div>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
