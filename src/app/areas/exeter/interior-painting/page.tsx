'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function ExeterInteriorPaintingPage() {
  const { openQuoteModal } = useQuoteModal();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bsrdecorating.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Cover",
        "item": "https://bsrdecorating.co.uk/coverage"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Exeter",
        "item": "https://bsrdecorating.co.uk/areas/exeter"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Interior Painting",
        "item": "https://bsrdecorating.co.uk/areas/exeter/interior-painting"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bsrdecorating.co.uk/areas/exeter/interior-painting#service",
    "url": "https://bsrdecorating.co.uk/areas/exeter/interior-painting",
    "name": "Interior Painting Exeter",
    "description": "Professional interior painting services in Exeter covering St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. Luxury finishes for heritage homes and modern properties.",
    "image": "https://bsrdecorating.co.uk/images/hero-bg.jpg",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://bsrdecorating.co.uk/#business",
      "name": "BSR Decorating",
      "telephone": "+441626911236",
      "email": "info@bsrdecorating.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Exeter",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    },
    "serviceType": "Interior Painting",
    "areaServed": {
      "@type": "City",
      "name": "Exeter",
      "addressRegion": "Devon"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "priceRange": "£300-£5,000",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Painting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Room Painting Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full House Interior Painting Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Period Property Interior Decorating Exeter" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does interior painting cost in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Interior painting costs in Exeter vary by room size and property type. Standard rooms typically range from £300-£600, while full house interior work for a 3-bedroom property ranges from £2,500-£5,000. Heritage properties in areas like St. Leonard's may require specialist materials. We provide free, no-obligation quotes for all Exeter interior painting projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work in St. Leonard's and Pennsylvania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide interior painting services throughout Exeter's most prestigious areas including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. We have extensive experience with Georgian townhouses, period properties, and luxury developments in these affluent neighbourhoods."
        }
      },
      {
        "@type": "Question",
        "name": "How long does interior painting take in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Interior painting timelines vary by project size. A single room typically takes 1-2 days, while a full house interior for a 3-bedroom property takes 5-7 days. We work efficiently to minimise disruption and can schedule work around your availability, including weekends if needed."
        }
      },
      {
        "@type": "Question",
        "name": "What paint do you use for Exeter properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use premium trade-quality paints suitable for each property type. For period properties in St. Leonard's and conservation areas, we use breathable paints. For modern properties, we use durable, washable finishes. All paints are eco-friendly, low-odour, and chosen for longevity and quality."
        }
      }
    ]
  };

  const painPoints = [
    {
      title: "Fading & Discoloration",
      description: "Exeter's varied light conditions can cause paint to fade unevenly. We use UV-resistant paints and proper preparation to ensure long-lasting colour."
    },
    {
      title: "Damp & Moisture Issues",
      description: "Many Exeter properties face damp challenges. We identify and address moisture sources before painting, using appropriate breathable or moisture-resistant systems."
    },
    {
      title: "Period Property Challenges",
      description: "Heritage properties in St. Leonard's and conservation areas need specialist approaches. We use breathable paints and traditional techniques where required."
    },
    {
      title: "Inconsistent Coverage",
      description: "Poor preparation leads to patchy finishes. Our thorough surface preparation ensures smooth, consistent coverage that lasts."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-bsr-black via-bsr-gray to-bsr-black">
        {/* Breadcrumbs */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-bsr-black border-b border-bsr-gray-light">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-bsr-highlight transition-colors duration-200">
                Home
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <Link href="/coverage" className="text-gray-400 hover:text-bsr-highlight transition-colors duration-200">
                Areas We Cover
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <Link href="/areas/exeter" className="text-gray-400 hover:text-bsr-highlight transition-colors duration-200">
                Exeter
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <span className="text-bsr-white font-medium">Interior Painting</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Interior Painting in <span className="text-bsr-highlight">Exeter</span> – Professional Room & House Painting
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Expert interior painting services across Exeter's most prestigious areas including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. 
              From single room makeovers to complete house interiors, we deliver exceptional quality finishes for period properties and modern homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Exeter Interior Painting Quote</span>
              </button>
              <Link
                href="/areas/exeter"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View All Exeter Services</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Exeter Areas Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Interior Painting Across Exeter's Prestigious Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "St. Leonard's", type: "Georgian townhouses, period properties" },
                { name: "Pennsylvania", type: "Luxury developments, modern homes" },
                { name: "Heavitree", type: "New-builds, family homes" },
                { name: "Topsham", type: "Heritage properties, waterfront homes" },
                { name: "Newtown", type: "City centre luxury, period terraces" }
              ].map((area, index) => (
                <div key={index} className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6 text-center">
                  <MapPin className="text-bsr-highlight mx-auto mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-bsr-white mb-2">{area.name}</h3>
                  <p className="text-gray-400 text-sm">{area.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Common Interior Painting Problems We Solve in Exeter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-3">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Our Exeter Interior Painting Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                '/portfolio/project1/PHOTO-2025-09-02-11-07-13.jpg',
                '/portfolio/project1/PHOTO-2025-09-02-11-07-14.jpg',
                '/portfolio/project1/PHOTO-2025-09-02-11-07-15.jpg'
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Exeter interior painting project ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Frequently Asked Questions About Interior Painting in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How much does interior painting cost in Exeter?
                </h3>
                <p className="text-gray-300">
                  Interior painting costs in Exeter vary by room size and property type. Standard rooms typically range from £300-£600, while full house interior work for a 3-bedroom property ranges from £2,500-£5,000. Heritage properties in areas like St. Leonard's may require specialist materials. We provide free, no-obligation quotes for all Exeter interior painting projects.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work in St. Leonard's and Pennsylvania?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide interior painting services throughout Exeter's most prestigious areas including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. We have extensive experience with Georgian townhouses, period properties, and luxury developments in these affluent neighbourhoods.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How long does interior painting take in Exeter?
                </h3>
                <p className="text-gray-300">
                  Interior painting timelines vary by project size. A single room typically takes 1-2 days, while a full house interior for a 3-bedroom property takes 5-7 days. We work efficiently to minimise disruption and can schedule work around your availability, including weekends if needed.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  What paint do you use for Exeter properties?
                </h3>
                <p className="text-gray-300">
                  We use premium trade-quality paints suitable for each property type. For period properties in St. Leonard's and conservation areas, we use breathable paints. For modern properties, we use durable, washable finishes. All paints are eco-friendly, low-odour, and chosen for longevity and quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Expert Interior Painting Advice for Exeter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                <p className="text-gray-300 text-sm">Complete price guide including interior painting costs for Exeter properties</p>
              </Link>
              <Link
                href="/blog/best-paint-types-exeter-homes-old-damp-listed-properties"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Best Paint for Exeter Homes</h4>
                <p className="text-gray-300 text-sm">Expert guide to choosing the right paint for your Exeter property</p>
              </Link>
              <Link
                href="/blog/decorating-tips-exeter-period-homes-specialist-advice"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Period Home Decorating Tips</h4>
                <p className="text-gray-300 text-sm">Specialist advice for St. Leonard's and heritage properties</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Ready to Transform Your Exeter Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free, no-obligation quote for interior painting in Exeter. We serve St. Leonard's, Pennsylvania, Heavitree, Topsham, Newtown, and all of Exeter.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Exeter Interior Painting Quote</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

