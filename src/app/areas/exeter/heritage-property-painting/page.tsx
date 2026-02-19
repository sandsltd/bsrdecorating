'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Star, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function ExeterHeritagePropertyPaintingPage() {
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
        "name": "Heritage Property Painting",
        "item": "https://bsrdecorating.co.uk/areas/exeter/heritage-property-painting"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bsrdecorating.co.uk/areas/exeter/heritage-property-painting#service",
    "url": "https://bsrdecorating.co.uk/areas/exeter/heritage-property-painting",
    "name": "Heritage Property Painting Exeter",
    "description": "Specialist heritage property and listed building painting services in Exeter's conservation areas. Traditional techniques, breathable paints, and period-appropriate finishes.",
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
    "serviceType": "Heritage Property Painting",
    "areaServed": {
      "@type": "City",
      "name": "Exeter",
      "addressRegion": "Devon"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heritage Painting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Listed Building Painting Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conservation Area Decorating Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Period Property Restoration Exeter" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you work on listed buildings in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in listed building and heritage property painting in Exeter. We understand conservation area requirements, work with planning authorities, and use appropriate traditional materials including breathable paints and period-appropriate finishes. Our experience includes properties in St. Leonard's and other conservation areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use traditional materials for period properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use traditional materials and techniques for period properties in Exeter where appropriate. We understand the importance of breathable paints, lime-based products, and traditional finishes for heritage properties, while ensuring modern protection and durability where permitted."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with conservation officers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work closely with conservation officers and planning authorities for listed buildings and conservation areas in Exeter. We understand planning requirements, can help with applications where needed, and ensure all work complies with heritage regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How do you preserve period character while painting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We preserve period character by using appropriate traditional materials, matching original colour schemes where possible, maintaining architectural features, and using techniques that respect the building's heritage. We understand the unique characteristics of Georgian, Victorian, and Edwardian properties in Exeter."
        }
      }
    ]
  };

  const painPoints = [
    {
      title: "Conservation Area Restrictions",
      description: "Listed buildings and conservation areas have strict requirements. We understand planning regulations and work with conservation officers to ensure compliance."
    },
    {
      title: "Breathability Requirements",
      description: "Period properties need breathable paints to prevent moisture issues. We use appropriate traditional materials that allow walls to breathe while providing protection."
    },
    {
      title: "Matching Period Colours",
      description: "Finding authentic period colours can be challenging. We have expertise in traditional colour schemes and can match original finishes where required."
    },
    {
      title: "Traditional Techniques",
      description: "Heritage properties need specialist techniques. We use traditional methods where appropriate while ensuring modern durability and protection."
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
              <span className="text-bsr-white font-medium">Heritage Property Painting</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Heritage Property Painting in <span className="text-bsr-highlight">Exeter</span> – Listed Building Specialists
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Specialist heritage property and listed building painting services for Exeter's historic properties. 
              Traditional techniques, conservation-compliant materials, and period authenticity for St. Leonard's, conservation areas, and listed buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Heritage Property Quote</span>
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

        {/* Exeter Heritage Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Heritage Property Painting Across Exeter's Conservation Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "St. Leonard's", type: "Georgian townhouses, listed buildings" },
                { name: "Conservation Areas", type: "Period properties, heritage protection" },
                { name: "City Centre", type: "Historic buildings, listed structures" },
                { name: "Topsham", type: "Heritage waterfront properties" },
                { name: "Newtown", type: "Period terraces, Victorian properties" }
              ].map((area, index) => (
                <div key={index} className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6 text-center">
                  <Star className="text-bsr-highlight mx-auto mb-3" size={24} />
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
              Heritage Property Painting Challenges We Solve in Exeter
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
              Our Exeter Heritage Property Painting Projects
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
                    alt={`Exeter heritage property painting project ${index + 1}`}
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
              Frequently Asked Questions About Heritage Property Painting in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Can you work on listed buildings in Exeter?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in listed building and heritage property painting in Exeter. We understand conservation area requirements, work with planning authorities, and use appropriate traditional materials including breathable paints and period-appropriate finishes. Our experience includes properties in St. Leonard's and other conservation areas.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you use traditional materials for period properties?
                </h3>
                <p className="text-gray-300">
                  Yes, we use traditional materials and techniques for period properties in Exeter where appropriate. We understand the importance of breathable paints, lime-based products, and traditional finishes for heritage properties, while ensuring modern protection and durability where permitted.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work with conservation officers?
                </h3>
                <p className="text-gray-300">
                  Yes, we work closely with conservation officers and planning authorities for listed buildings and conservation areas in Exeter. We understand planning requirements, can help with applications where needed, and ensure all work complies with heritage regulations.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How do you preserve period character while painting?
                </h3>
                <p className="text-gray-300">
                  We preserve period character by using appropriate traditional materials, matching original colour schemes where possible, maintaining architectural features, and using techniques that respect the building's heritage. We understand the unique characteristics of Georgian, Victorian, and Edwardian properties in Exeter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Expert Heritage Property Painting Advice for Exeter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/blog/decorating-tips-exeter-period-homes-specialist-advice"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Period Home Decorating Tips</h4>
                <p className="text-gray-300 text-sm">Specialist advice for St. Leonard's and heritage properties</p>
              </Link>
              <Link
                href="/blog/best-paint-types-exeter-homes-old-damp-listed-properties"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Best Paint for Listed Buildings</h4>
                <p className="text-gray-300 text-sm">Expert guide to choosing paint for heritage properties</p>
              </Link>
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                <p className="text-gray-300 text-sm">Complete price guide including heritage property costs</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Preserve Your Exeter Heritage Property with Expert Painting
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote for heritage property painting in Exeter. We specialise in listed buildings, conservation areas, and period properties.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Heritage Property Painting Quote</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

