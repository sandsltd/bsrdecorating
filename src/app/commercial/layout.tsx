import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Decorators Dawlish & Exeter | Office & Retail Painting – BSR Decorating",
  description: "Professional commercial decorating for offices, retail, and business spaces. Serving Dawlish, Exeter, Torquay, and across Devon.",
  keywords: "commercial decorators Dawlish, office painters Newton Abbot, business decorating Torquay, commercial painting Exeter, retail space decorating Devon, industrial painting Topsham, warehouse decorating Exmouth, office refurbishment Bovey Tracey, commercial property decorating Devon",
  alternates: {
    canonical: '/commercial'
  },
  openGraph: {
    title: "Commercial Decorating Services | BSR Decorating Devon",
    description: "Professional commercial decorating for offices, retail spaces & industrial properties across Dawlish, Newton Abbot, Torquay, Exeter & Devon.",
    type: "website",
    url: "https://bsrdecorating.co.uk/commercial",
    images: [
      {
        url: "/gallery/commercial/office-renovation.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional commercial decorating services by BSR Decorating"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Decorating Services | BSR Decorating Devon",
    description: "Professional commercial decorating for offices, retail & industrial properties across Devon",
    images: ["/gallery/commercial/office-renovation.jpeg"]
  },
  other: {
    "service-type": "Commercial Decorating",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Decorating Services",
    "description": "Professional commercial decorating including office decorating, retail space painting, industrial & warehouse decoration, and project management services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "telephone": "+447805469770",
      "email": "info@bsrdecorating.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    },
    "serviceType": "Commercial Decorating",
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
      "name": "Commercial Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Decorating",
            "description": "Professional office painting and decorating to create productive and welcoming work environments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Space Painting",
            "description": "Transform retail spaces with professional painting that enhances customer experience and brand image"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial & Warehouse Decorating",
            "description": "Specialised painting services for industrial facilities and warehouse spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Project Management",
            "description": "Complete project management for large commercial decorating projects"
          }
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Business"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "GBP",
        "price": "Free",
        "description": "Free quotes and consultations"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Out of Hours Working",
        "value": "Available"
      },
      {
        "@type": "PropertyValue", 
        "name": "Health & Safety Compliance",
        "value": "Fully Compliant"
      },
      {
        "@type": "PropertyValue",
        "name": "Minimal Business Disruption",
        "value": "Guaranteed"
      }
    ]
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
