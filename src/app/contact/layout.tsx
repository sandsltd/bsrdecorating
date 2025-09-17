import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Decorating Quote Dawlish & Devon | Contact BSR Decorating Today",
  description: "Get your FREE decorating quote today! Professional painters in Dawlish, Exeter, Torquay. Call 01626 911236 or email for instant response.",
  keywords: "contact BSR Decorating, free decorating quote Devon, decorators Dawlish contact, painting quote Newton Abbot Torquay Exeter, decorator contact details Devon, BSR Decorating phone number email",
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: "Contact BSR Decorating | Free Quotes Devon",
    description: "Get your free decorating quote from professional decorators in Devon",
    type: "website",
    url: "https://bsrdecorating.co.uk/contact",
    images: [
      {
        url: "/images/Business decorating image.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact BSR Decorating for professional decorating services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BSR Decorating | Free Quotes Devon",
    description: "Get your free decorating quote from professional decorators in Devon",
    images: ["/images/Business decorating image.jpeg"]
  },
  other: {
    "page-type": "Contact",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact BSR Decorating",
    "description": "Contact information for BSR Decorating professional decorators in Devon",
    "url": "https://bsrdecorating.co.uk/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "telephone": "+441626911236",
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
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-16:00"
      ],
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
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
