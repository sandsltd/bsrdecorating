'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Star, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function ExeterExteriorPaintingPage() {
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
        "name": "Exterior Painting",
        "item": "https://bsrdecorating.co.uk/areas/exeter/exterior-painting"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Exterior Painting Exeter",
    "description": "Professional exterior painting services in Exeter covering St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "telephone": "+441626911236"
    },
    "serviceType": "Exterior Painting",
    "areaServed": {
      "@type": "City",
      "name": "Exeter",
      "addressRegion": "Devon"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does exterior painting cost in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exterior painting costs in Exeter vary by property size and type. Front elevation only typically costs £800-£1,500, while full exterior for a detached property ranges from £2,500-£5,000. Heritage properties in St. Leonard's may require specialist materials. We provide free quotes for all Exeter exterior painting projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work on listed buildings in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in exterior painting for listed buildings and heritage properties in Exeter. We understand conservation area requirements, use appropriate traditional materials, and work with planning authorities to ensure compliance. Our experience includes properties in St. Leonard's and conservation areas."
        }
      },
      {
        "@type": "Question",
        "name": "What paint do you use for Exeter exteriors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use weather-resistant masonry paint systems designed for Devon's climate. For period properties, we use breathable paints. For modern properties, we use durable, long-lasting finishes. All exterior paints are chosen for weather resistance, UV protection, and longevity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does exterior painting take in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exterior painting timelines depend on weather and property size. Front elevation typically takes 2-3 days, while full exterior for a detached property takes 5-7 days. We schedule work around weather conditions and can work in stages if needed to minimise disruption."
        }
      }
    ]
  };

  const painPoints = [
    {
      title: "Weather Damage & Fading",
      description: "Exeter's weather can cause paint to fade, crack, and peel. We use weather-resistant paints and proper preparation to ensure long-lasting protection."
    },
    {
      title: "Damp & Moisture Penetration",
      description: "Many Exeter properties face damp issues. We identify and address moisture sources, use breathable paints for period properties, and ensure proper ventilation."
    },
    {
      title: "Heritage Property Compliance",
      description: "Listed buildings in St. Leonard's and conservation areas need specialist approaches. We use traditional materials and work with conservation officers."
    },
    {
      title: "Poor Surface Preparation",
      description: "Inadequate preparation leads to premature failure. Our thorough preparation including repairs, filling, and priming ensures professional, lasting finishes."
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
              <span className="text-bsr-white font-medium">Exterior Painting</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Exterior Painting in <span className="text-bsr-highlight">Exeter</span> – Weather-Resistant House Painting
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Professional exterior painting services across Exeter including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown. 
              Weather-resistant finishes for period properties and modern homes, protecting your investment from Devon's climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Exeter Exterior Painting Quote</span>
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
              Exterior Painting Across Exeter's Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "St. Leonard's", type: "Heritage properties, listed buildings" },
                { name: "Pennsylvania", type: "Modern developments, luxury homes" },
                { name: "Heavitree", type: "New-builds, family properties" },
                { name: "Topsham", type: "Waterfront, period properties" },
                { name: "Newtown", type: "City centre, period terraces" }
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
              Common Exterior Painting Problems We Solve in Exeter
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
              Our Exeter Exterior Painting Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                '/portfolio/project2/PHOTO-2025-09-02-11-09-52.jpg',
                '/portfolio/project5/PHOTO-2025-09-02-11-16-33.jpg',
                '/portfolio/project1/PHOTO-2025-09-02-11-07-16.jpg'
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Exeter exterior painting project ${index + 1}`}
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
              Frequently Asked Questions About Exterior Painting in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How much does exterior painting cost in Exeter?
                </h3>
                <p className="text-gray-300">
                  Exterior painting costs in Exeter vary by property size and type. Front elevation only typically costs £800-£1,500, while full exterior for a detached property ranges from £2,500-£5,000. Heritage properties in St. Leonard's may require specialist materials. We provide free quotes for all Exeter exterior painting projects.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work on listed buildings in Exeter?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in exterior painting for listed buildings and heritage properties in Exeter. We understand conservation area requirements, use appropriate traditional materials, and work with planning authorities to ensure compliance. Our experience includes properties in St. Leonard's and conservation areas.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  What paint do you use for Exeter exteriors?
                </h3>
                <p className="text-gray-300">
                  We use weather-resistant masonry paint systems designed for Devon's climate. For period properties, we use breathable paints. For modern properties, we use durable, long-lasting finishes. All exterior paints are chosen for weather resistance, UV protection, and longevity.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How long does exterior painting take in Exeter?
                </h3>
                <p className="text-gray-300">
                  Exterior painting timelines depend on weather and property size. Front elevation typically takes 2-3 days, while full exterior for a detached property takes 5-7 days. We schedule work around weather conditions and can work in stages if needed to minimise disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Expert Exterior Painting Advice for Exeter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/blog/best-paint-types-exeter-homes-old-damp-listed-properties"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Best Paint for Exeter Homes</h4>
                <p className="text-gray-300 text-sm">Expert guide to choosing exterior paint for your Exeter property</p>
              </Link>
              <Link
                href="/blog/decorating-tips-exeter-period-homes-specialist-advice"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Period Home Decorating Tips</h4>
                <p className="text-gray-300 text-sm">Specialist advice for heritage property exterior painting</p>
              </Link>
              <Link
                href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
              >
                <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                <p className="text-gray-300 text-sm">Complete price guide including exterior painting costs</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Protect Your Exeter Property with Professional Exterior Painting
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote for exterior painting in Exeter. We serve all areas including St. Leonard's, Pennsylvania, Heavitree, Topsham, and Newtown.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Exeter Exterior Painting Quote</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

