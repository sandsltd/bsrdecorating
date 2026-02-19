'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function ExeterKitchenSprayingPage() {
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
        "name": "Kitchen Spraying",
        "item": "https://bsrdecorating.co.uk/areas/exeter/kitchen-spraying"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bsrdecorating.co.uk/areas/exeter/kitchen-spraying#service",
    "url": "https://bsrdecorating.co.uk/areas/exeter/kitchen-spraying",
    "name": "Kitchen Spraying Exeter",
    "description": "Professional kitchen cabinet spraying services in Exeter, transforming kitchens without replacement. Fraction of the cost of new units with a factory-smooth finish.",
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
    "serviceType": "Kitchen Spraying",
    "areaServed": {
      "@type": "City",
      "name": "Exeter",
      "addressRegion": "Devon"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "priceRange": "£800-£2,500",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kitchen Spraying Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Cabinet Spraying Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Unit Respray Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Door Spraying Exeter" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does kitchen spraying cost in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kitchen spraying costs in Exeter vary by kitchen size and number of units. Small kitchens (10-15 units) typically cost £800-£1,200, medium kitchens (15-20 units) cost £1,200-£1,800, and large kitchens (20+ units) cost £1,800-£2,500. This is significantly cheaper than replacement. We provide free quotes for all Exeter kitchen spraying projects."
        }
      },
      {
        "@type": "Question",
        "name": "How long does kitchen spraying take in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kitchen spraying typically takes 3-5 days depending on kitchen size. We work efficiently to minimise disruption, and you can usually use your kitchen again within a week. The process includes preparation, spraying, and finishing, with proper drying times between coats."
        }
      },
      {
        "@type": "Question",
        "name": "What colours can you spray kitchen cabinets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can spray kitchen cabinets in virtually any colour. Popular choices include modern greys, whites, navy blues, and bold colours. We can match specific paint codes, create custom colours, or help you choose the perfect shade for your Exeter kitchen. All finishes are durable and easy to clean."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work in St. Leonard's and Pennsylvania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide kitchen spraying services throughout Exeter including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. We have extensive experience with period properties and modern homes, ensuring professional results that enhance your kitchen's appearance."
        }
      }
    ]
  };

  const painPoints = [
    {
      title: "Outdated Kitchen Appearance",
      description: "Kitchen cabinets can look dated without full replacement. Kitchen spraying transforms your kitchen at a fraction of the cost of new units."
    },
    {
      title: "Expensive Kitchen Replacement",
      description: "Full kitchen replacement costs thousands. Kitchen spraying provides a professional finish for 70-80% less than replacement."
    },
    {
      title: "Limited Colour Options",
      description: "Existing kitchen colours may not match your style. We can spray cabinets in any colour to match your vision and home decor."
    },
    {
      title: "Disruption from Replacement",
      description: "Kitchen replacement causes weeks of disruption. Spraying takes just 3-5 days with minimal disruption to your daily routine."
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
              <span className="text-bsr-white font-medium">Kitchen Spraying</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Kitchen Spraying in <span className="text-bsr-highlight">Exeter</span> – Transform Your Kitchen Without Replacement
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Professional kitchen cabinet spraying services across Exeter including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. 
              Transform your kitchen at a fraction of replacement cost with professional spray finishes in any colour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Kitchen Spraying Quote</span>
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
              Kitchen Spraying Across Exeter's Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "St. Leonard's", type: "Period properties, luxury kitchens" },
                { name: "Pennsylvania", type: "Modern developments, family kitchens" },
                { name: "Heavitree", type: "New-builds, contemporary kitchens" },
                { name: "Topsham", type: "Heritage properties, period kitchens" },
                { name: "Newtown", type: "City centre, luxury kitchens" }
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
              Kitchen Problems We Solve in Exeter
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
              Our Exeter Kitchen Spraying Projects
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
                    alt={`Exeter kitchen spraying project ${index + 1}`}
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
              Frequently Asked Questions About Kitchen Spraying in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How much does kitchen spraying cost in Exeter?
                </h3>
                <p className="text-gray-300">
                  Kitchen spraying costs in Exeter vary by kitchen size and number of units. Small kitchens (10-15 units) typically cost £800-£1,200, medium kitchens (15-20 units) cost £1,200-£1,800, and large kitchens (20+ units) cost £1,800-£2,500. This is significantly cheaper than replacement. We provide free quotes for all Exeter kitchen spraying projects.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How long does kitchen spraying take in Exeter?
                </h3>
                <p className="text-gray-300">
                  Kitchen spraying typically takes 3-5 days depending on kitchen size. We work efficiently to minimise disruption, and you can usually use your kitchen again within a week. The process includes preparation, spraying, and finishing, with proper drying times between coats.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  What colours can you spray kitchen cabinets?
                </h3>
                <p className="text-gray-300">
                  We can spray kitchen cabinets in virtually any colour. Popular choices include modern greys, whites, navy blues, and bold colours. We can match specific paint codes, create custom colours, or help you choose the perfect shade for your Exeter kitchen. All finishes are durable and easy to clean.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work in St. Leonard's and Pennsylvania?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide kitchen spraying services throughout Exeter including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. We have extensive experience with period properties and modern homes, ensuring professional results that enhance your kitchen's appearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Expert Kitchen Transformation Advice for Exeter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                <p className="text-gray-300 text-sm">Complete price guide including kitchen spraying costs</p>
              </Link>
              <Link
                href="/blog/best-paint-types-exeter-homes-old-damp-listed-properties"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Best Paint for Exeter Homes</h4>
                <p className="text-gray-300 text-sm">Expert guide to choosing finishes for your kitchen</p>
              </Link>
              <Link
                href="/blog/decorating-tips-exeter-period-homes-specialist-advice"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Period Home Decorating Tips</h4>
                <p className="text-gray-300 text-sm">Specialist advice for heritage property kitchens</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Transform Your Exeter Kitchen Without Full Replacement
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote for kitchen spraying in Exeter. We serve all areas including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Kitchen Spraying Quote</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

