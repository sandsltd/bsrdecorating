'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Building, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function ExeterCommercialDecoratingPage() {
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
        "name": "Commercial Decorating",
        "item": "https://www.bsrdecorating.co.uk/areas/exeter/commercial-decorating"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.bsrdecorating.co.uk/areas/exeter/commercial-decorating#service",
    "url": "https://www.bsrdecorating.co.uk/areas/exeter/commercial-decorating",
    "name": "Commercial Decorating Exeter",
    "description": "Professional commercial decorating services in Exeter city centre, business parks, and office developments. Office painting, retail refurbishment, and commercial property maintenance.",
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
    "serviceType": "Commercial Decorating",
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
      "name": "Commercial Decorating Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Painting Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Shop Decorating Exeter" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Property Maintenance Exeter" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer weekend work for Exeter offices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer weekend and out-of-hours work for Exeter offices to minimise business disruption. We understand that commercial decorating needs to fit around business operations, and we can schedule work during evenings, weekends, or outside normal business hours."
        }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured for commercial painting in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully insured for all commercial painting and decorating work in Exeter. We carry comprehensive public liability insurance and employers' liability insurance, ensuring complete coverage for all commercial projects including offices, retail spaces, and business properties."
        }
      },
      {
        "@type": "Question",
        "name": "How do you minimise disruption to Exeter businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We minimise disruption by working out-of-hours, using low-odour products, implementing efficient project management, and completing work in phases. We can work around your business operations, including evenings, weekends, and during quiet periods."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work on city centre offices in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in city centre office decorating in Exeter. We understand the challenges of city centre locations including parking, access, and working around business operations. We have experience with both historic city centre offices and modern business park developments."
        }
      }
    ]
  };

  const painPoints = [
    {
      title: "Business Disruption",
      description: "Commercial decorating can disrupt operations. We work out-of-hours and use efficient project management to minimise downtime."
    },
    {
      title: "Historic Building Constraints",
      description: "City centre offices often have heritage restrictions. We understand planning requirements and use appropriate materials for listed buildings."
    },
    {
      title: "Brand Consistency",
      description: "Maintaining brand colours and standards across multiple locations. We provide precise colour matching and consistent finishes."
    },
    {
      title: "Quick Turnaround Needs",
      description: "Businesses need fast completion. We provide efficient scheduling and can work extended hours to meet deadlines."
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
              <span className="text-bsr-white font-medium">Commercial Decorating</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Commercial Decorating in <span className="text-bsr-highlight">Exeter</span> – Office & Business Painting
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Professional commercial decorating for Exeter's business district, from historic city centre offices to modern business parks. 
              Minimal disruption, out-of-hours working, and premium finishes for offices, retail spaces, and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Exeter Commercial Quote</span>
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

        {/* Exeter Business Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Commercial Decorating Across Exeter's Business Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "City Centre", type: "Historic offices, retail spaces" },
                { name: "Business Parks", type: "Modern offices, industrial units" },
                { name: "University Area", type: "Campus facilities, student accommodation" }
              ].map((area, index) => (
                <div key={index} className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6 text-center">
                  <Building className="text-bsr-highlight mx-auto mb-3" size={24} />
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
              Commercial Decorating Challenges We Solve in Exeter
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
              Our Exeter Commercial Decorating Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                '/portfolio/project5/PHOTO-2025-09-02-11-16-33.jpg',
                '/portfolio/project5/PHOTO-2025-09-02-11-16-34.jpg',
                '/portfolio/project5/PHOTO-2025-09-02-11-16-35.jpg'
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Exeter commercial decorating project ${index + 1}`}
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
              Frequently Asked Questions About Commercial Decorating in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you offer weekend work for Exeter offices?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer weekend and out-of-hours work for Exeter offices to minimise business disruption. We understand that commercial decorating needs to fit around business operations, and we can schedule work during evenings, weekends, or outside normal business hours.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Are you fully insured for commercial painting in Exeter?
                </h3>
                <p className="text-gray-300">
                  Yes, we are fully insured for all commercial painting and decorating work in Exeter. We carry comprehensive public liability insurance and employers' liability insurance, ensuring complete coverage for all commercial projects including offices, retail spaces, and business properties.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How do you minimise disruption to Exeter businesses?
                </h3>
                <p className="text-gray-300">
                  We minimise disruption by working out-of-hours, using low-odour products, implementing efficient project management, and completing work in phases. We can work around your business operations, including evenings, weekends, and during quiet periods.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work on city centre offices in Exeter?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in city centre office decorating in Exeter. We understand the challenges of city centre locations including parking, access, and working around business operations. We have experience with both historic city centre offices and modern business park developments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Expert Commercial Decorating Advice for Exeter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/blog/commercial-office-decorating-exeter-city-centre"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Office Decorating</h4>
                <p className="text-gray-300 text-sm">Professional strategies for Exeter's business district</p>
              </Link>
              <Link
                href="/blog/professional-decorating-enhances-business-premises"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">How Decorating Enhances Business</h4>
                <p className="text-gray-300 text-sm">Transform your business environment with professional decorating</p>
              </Link>
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                <p className="text-gray-300 text-sm">Complete price guide including commercial decorating costs</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Transform Your Exeter Business with Professional Decorating
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote for commercial decorating in Exeter. We serve city centre offices, business parks, and all commercial properties.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Exeter Commercial Decorating Quote</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

