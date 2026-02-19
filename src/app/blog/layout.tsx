import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decorating Tips & Trends Dawlish, Devon | Expert Painting Advice – BSR Blog",
  description: "FREE expert decorating tips from Dawlish professionals! Painting advice, trends, and insider secrets for Devon homeowners and businesses.",
  keywords: "decorating blog Devon, painting tips Dawlish, home decorating advice, commercial decorating insights, property maintenance blog, decorating trends Newton Abbot Torquay Exeter, professional decorator blog, painting advice Devon",
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: "Decorating Blog | BSR Decorating Devon",
    description: "Expert decorating tips and insights from professional decorators in Devon",
    type: "website",
    url: "https://www.bsrdecorating.co.uk/blog",
    images: [
      {
        url: "/images/Business decorating image.jpeg",
        width: 1200,
        height: 630,
        alt: "BSR Decorating Blog - Expert decorating tips and advice"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Decorating Blog | BSR Decorating Devon",
    description: "Expert decorating tips and insights from professional decorators in Devon",
    images: ["/images/Business decorating image.jpeg"]
  },
  other: {
    "content-type": "Blog",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BSR Decorating Blog",
    "description": "Expert decorating tips, trends, and project insights from professional decorators in Devon",
    "url": "https://www.bsrdecorating.co.uk/blog",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
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
