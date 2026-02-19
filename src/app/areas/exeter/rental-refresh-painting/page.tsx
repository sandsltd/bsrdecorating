'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function ExeterRentalRefreshPaintingPage() {
  const { openQuoteModal } = useQuoteModal();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bsrdecorating.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Cover",
        "item": "https://www.bsrdecorating.co.uk/coverage"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Exeter",
        "item": "https://www.bsrdecorating.co.uk/areas/exeter"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Rental Refresh Painting",
        "item": "https://www.bsrdecorating.co.uk/areas/exeter/rental-refresh-painting"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.bsrdecorating.co.uk/areas/exeter/rental-refresh-painting#service",
    "url": "https://www.bsrdecorating.co.uk/areas/exeter/rental-refresh-painting",
    "name": "Rental Refresh Painting Exeter",
    "description": "Professional rental property refresh painting services in Exeter for landlords and property managers. Fast turnaround between tenancies to minimise void periods.",
    "image": "https://www.bsrdecorating.co.uk/images/hero-bg.jpg",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.bsrdecorating.co.uk/#business",
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
    "serviceType": "Rental Refresh Painting",
    "areaServed": {
      "@type": "City",
      "name": "Exeter",
      "addressRegion": "Devon"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "priceRange": "£400-£1,400",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rental Refresh Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "End of Tenancy Decorating Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landlord Painting Service Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HMO Property Painting Exeter" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does rental refresh painting cost in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rental refresh painting costs in Exeter vary by property size. One-bedroom properties typically cost £400-£600, two-bedroom properties cost £600-£900, and three-bedroom properties cost £900-£1,400. We offer competitive rates for landlords and can provide quotes for multiple properties. All prices include quality finishes suitable for rental properties."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you refresh a rental property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can typically refresh a rental property in 2-4 days depending on size. We understand the need for quick turnaround between tenancies and can work efficiently to minimise void periods. We can schedule work at short notice and complete properties quickly to get them back on the rental market."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work for landlords and property managers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in rental property refresh painting for landlords and property managers in Exeter. We understand the unique needs of rental properties including durability, quick turnaround, and cost-effectiveness. We can work with property management companies and provide quotes for multiple properties."
        }
      },
      {
        "@type": "Question",
        "name": "What paint do you use for rental properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use durable, washable paint finishes specifically chosen for rental properties. These paints are designed to withstand wear and tear, are easy to clean, and provide long-lasting finishes that reduce the need for frequent repainting. All paints are low-odour and suitable for quick re-letting."
        }
      }
    ]
  };

  const painPoints = [
    {
      title: "Void Period Costs",
      description: "Empty properties cost money. We provide quick turnaround painting to minimise void periods and get properties back on the rental market fast."
    },
    {
      title: "Wear and Tear",
      description: "Rental properties need durable finishes. We use washable, hard-wearing paints designed to withstand tenant use and reduce maintenance costs."
    },
    {
      title: "Multiple Property Management",
      description: "Managing multiple rental properties is challenging. We can provide consistent service across your portfolio with competitive rates for bulk work."
    },
    {
      title: "Quick Turnaround Needs",
      description: "Between tenancies, speed is essential. We can schedule work at short notice and complete properties quickly to minimise downtime."
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
              <span className="text-bsr-white font-medium">Rental Refresh Painting</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Rental Refresh Painting in <span className="text-bsr-highlight">Exeter</span> – Fast Turnaround for Landlords
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Professional rental property refresh painting services for landlords and property managers across Exeter. 
              Quick turnaround, durable finishes, and competitive rates to minimise void periods and keep your properties profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Rental Refresh Quote</span>
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
              Rental Refresh Painting Across Exeter's Rental Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "St. Leonard's", type: "Student accommodation, HMOs" },
                { name: "Pennsylvania", type: "Family rentals, modern properties" },
                { name: "Heavitree", type: "New-build rentals, family homes" },
                { name: "Topsham", type: "Premium rentals, waterfront" },
                { name: "Newtown", type: "City centre, student properties" }
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
              Rental Property Challenges We Solve in Exeter
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
              Our Exeter Rental Refresh Painting Projects
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
                    alt={`Exeter rental refresh painting project ${index + 1}`}
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
              Frequently Asked Questions About Rental Refresh Painting in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How much does rental refresh painting cost in Exeter?
                </h3>
                <p className="text-gray-300">
                  Rental refresh painting costs in Exeter vary by property size. One-bedroom properties typically cost £400-£600, two-bedroom properties cost £600-£900, and three-bedroom properties cost £900-£1,400. We offer competitive rates for landlords and can provide quotes for multiple properties. All prices include quality finishes suitable for rental properties.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How quickly can you refresh a rental property?
                </h3>
                <p className="text-gray-300">
                  We can typically refresh a rental property in 2-4 days depending on size. We understand the need for quick turnaround between tenancies and can work efficiently to minimise void periods. We can schedule work at short notice and complete properties quickly to get them back on the rental market.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work for landlords and property managers?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in rental property refresh painting for landlords and property managers in Exeter. We understand the unique needs of rental properties including durability, quick turnaround, and cost-effectiveness. We can work with property management companies and provide quotes for multiple properties.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  What paint do you use for rental properties?
                </h3>
                <p className="text-gray-300">
                  We use durable, washable paint finishes specifically chosen for rental properties. These paints are designed to withstand wear and tear, are easy to clean, and provide long-lasting finishes that reduce the need for frequent repainting. All paints are low-odour and suitable for quick re-letting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Expert Rental Property Advice for Exeter Landlords
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                <p className="text-gray-300 text-sm">Complete price guide including rental refresh costs</p>
              </Link>
              <Link
                href="/blog/best-paint-types-exeter-homes-old-damp-listed-properties"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Best Paint for Rental Properties</h4>
                <p className="text-gray-300 text-sm">Expert guide to choosing durable finishes for rentals</p>
              </Link>
              <Link
                href="/blog/decorating-tips-exeter-period-homes-specialist-advice"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Period Property Decorating</h4>
                <p className="text-gray-300 text-sm">Specialist advice for heritage rental properties</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Minimise Void Periods with Fast Rental Refresh Painting
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote for rental refresh painting in Exeter. We serve landlords and property managers across all Exeter areas.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Rental Refresh Painting Quote</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

