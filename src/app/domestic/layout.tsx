import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domestic Decorating Services | House Painters & Home Decorators in Dawlish, Newton Abbot, Torquay & Exeter",
  description: "Professional domestic decorating services across Devon. Expert house painters & home decorators in Dawlish, Newton Abbot, Torquay, Exeter, Topsham & Exmouth. Interior & exterior painting, wallpaper hanging, free quotes.",
  keywords: "house painters Dawlish, home decorators Newton Abbot, interior painting Torquay, exterior painting Exeter, domestic decorating Devon, house painting Topsham, home decorating Exmouth, residential painting Bovey Tracey, wallpaper hanging Devon, house renovation decorating",
  alternates: {
    canonical: new URL('/domestic', 'https://bsrdecorating.co.uk')
  },
  openGraph: {
    title: "Domestic Decorating Services | BSR Decorating Devon",
    description: "Professional house painting & home decorating across Dawlish, Newton Abbot, Torquay, Exeter & surrounding Devon areas.",
    type: "website",
    url: "https://bsrdecorating.co.uk/domestic",
    images: [
      {
        url: "/gallery/domestic/dining-room.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional domestic decorating services by BSR Decorating"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Decorating Services | BSR Decorating Devon",
    description: "Professional house painting & home decorating across Devon",
    images: ["/gallery/domestic/dining-room.jpeg"]
  },
  other: {
    "service-type": "Domestic Decorating",
    "service-areas": "Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth, Bovey Tracey, Devon"
  }
};

export default function DomesticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Domestic Decorating Services",
    "description": "Professional domestic decorating including interior painting, exterior painting, wallpaper hanging, and home renovation decorating services",
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
    "serviceType": "Domestic Decorating",
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
      "name": "Domestic Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Professional interior painting for all rooms including living rooms, bedrooms, kitchens, and bathrooms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Exterior Painting",
            "description": "Exterior house painting to protect and enhance your property's curb appeal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wallpaper Hanging",
            "description": "Expert wallpaper installation and removal services for any room in your home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Decorating Consultation",
            "description": "Professional advice on colours, finishes, and design to achieve your perfect look"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "GBP",
        "price": "Free",
        "description": "Free quotes and estimates"
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
