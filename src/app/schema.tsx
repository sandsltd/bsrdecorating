export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.bsrdecorating.co.uk/#organization",
      "name": "BSR Decorating",
      "alternateName": "BSR Painting & Decorating",
      "description": "Professional painters and decorators in Devon offering domestic and commercial decorating services",
      "url": "https://www.bsrdecorating.co.uk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bsrdecorating.co.uk/Logos/BSR Logo-7.png"
      },
      "image": [
        "https://www.bsrdecorating.co.uk/Logos/BSR Logo-7.png"
      ],
      "telephone": "+441626911236",
      "email": "info@bsrdecorating.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "postalCode": "EX7",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.5811,
        "longitude": -3.4646
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Exeter"
        },
        {
          "@type": "City",
          "name": "Torquay"
        },
        {
          "@type": "City",
          "name": "Newton Abbot"
        },
        {
          "@type": "City",
          "name": "Dawlish"
        },
        {
          "@type": "City",
          "name": "Topsham"
        },
        {
          "@type": "City",
          "name": "Bovey Tracey"
        },
        {
          "@type": "City",
          "name": "Exmouth"
        }
      ],
      "priceRange": "££",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/bsrdecorating",
        "https://www.instagram.com/bsrdecorating"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Decorating Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Domestic Decorating",
            "description": "Interior and exterior painting for homes"
          },
          {
            "@type": "Service",
            "name": "Commercial Decorating",
            "description": "Professional decorating for businesses and offices"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bsrdecorating.co.uk/#website",
      "url": "https://www.bsrdecorating.co.uk",
      "name": "BSR Decorating",
      "description": "Professional painters and decorators in Devon",
      "publisher": {
        "@id": "https://www.bsrdecorating.co.uk/#organization"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.bsrdecorating.co.uk/#webpage",
      "url": "https://www.bsrdecorating.co.uk",
      "name": "BSR Decorating - Professional Painters & Decorators in Devon",
      "isPartOf": {
        "@id": "https://www.bsrdecorating.co.uk/#website"
      },
      "about": {
        "@id": "https://www.bsrdecorating.co.uk/#organization"
      },
      "description": "Professional painting and decorating services in Exeter, Torquay, Newton Abbot and across Devon. Free quotes available.",
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bsrdecorating.co.uk"
        }
      ]
    }
  ]
};

export const commercialPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial Decorating",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BSR Decorating",
    "url": "https://www.bsrdecorating.co.uk",
    "telephone": "+441626911236"
  },
  "areaServed": {
    "@type": "State",
    "name": "Devon"
  },
  "description": "Professional commercial decorating services for offices, retail spaces, and industrial properties across Devon",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "££"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Office Decorating"
      },
      {
        "@type": "Service",
        "name": "Retail Space Painting"
      },
      {
        "@type": "Service",
        "name": "Industrial Decorating"
      },
      {
        "@type": "Service",
        "name": "Out-of-hours Working"
      }
    ]
  }
};

export const domesticPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Domestic Decorating",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BSR Decorating",
    "url": "https://www.bsrdecorating.co.uk",
    "telephone": "+441626911236"
  },
  "areaServed": {
    "@type": "State",
    "name": "Devon"
  },
  "description": "Professional domestic painting and decorating services for homes across Exeter, Torquay, Newton Abbot and Devon",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "££"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Domestic Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Interior Painting"
      },
      {
        "@type": "Service",
        "name": "Exterior Painting"
      },
      {
        "@type": "Service",
        "name": "Wallpaper Hanging"
      },
      {
        "@type": "Service",
        "name": "Kitchen Spraying"
      }
    ]
  }
};