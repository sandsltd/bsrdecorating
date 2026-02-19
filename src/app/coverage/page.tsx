'use client';

import Link from 'next/link'
import { MapPin, Phone, Star, CheckCircle, ArrowRight, Clock, Award } from 'lucide-react'
import ServiceAreaMap from '@/components/ServiceAreaMap'
import { useQuoteModal } from '@/contexts/QuoteModalContext'

// Note: Since this is a client component, we'll need to handle metadata differently
// We'll add the metadata export after converting to server component if needed

export default function CoveragePage() {
  const { openQuoteModal } = useQuoteModal();

  const mainAreas = [
    {
      name: "Dawlish",
      slug: "dawlish",
      type: "headquarters",
      description: "Our headquarters and home base",
      highlights: ["24/7 response", "Full services", "Emergency callouts"],
      population: "11,000",
      specialties: ["Heritage properties", "Coastal homes", "Commercial district"]
    },
    {
      name: "Newton Abbot",
      slug: "newton-abbot", 
      type: "main",
      description: "Major market town coverage",
      highlights: ["Regular service area", "Quick response", "All project types"],
      population: "25,000",
      specialties: ["Period properties", "Business parks", "Residential estates"]
    },
    {
      name: "Bovey Tracey",
      slug: "bovey-tracey",
      type: "main", 
      description: "Gateway to Dartmoor",
      highlights: ["Heritage specialists", "Creative studios", "Period properties"],
      population: "7,000",
      specialties: ["Pottery heritage", "Dartmoor cottages", "Artist studios"]
    },
    {
      name: "Torquay",
      slug: "torquay",
      type: "main",
      description: "English Riviera resort",
      highlights: ["Holiday properties", "Hotels & B&Bs", "Coastal specialists"],
      population: "65,000", 
      specialties: ["Tourism properties", "Seafront homes", "Victorian villas"]
    },
    {
      name: "Exeter",
      slug: "exeter",
      type: "main",
      description: "Devon's cathedral city",
      highlights: ["Commercial focus", "Heritage buildings", "University area"],
      population: "130,000",
      specialties: ["Listed buildings", "City centre", "Modern developments"]
    },
    {
      name: "Topsham",
      slug: "topsham",
      type: "main",
      description: "Historic riverside village",
      highlights: ["Conservation area", "Waterfront homes", "Heritage experts"],
      population: "4,000",
      specialties: ["Listed buildings", "Riverside properties", "Georgian houses"]
    },
    {
      name: "Exmouth", 
      slug: "exmouth",
      type: "main",
      description: "Seaside resort town",
      highlights: ["Marine environment", "Holiday homes", "Coastal protection"],
      population: "35,000",
      specialties: ["Seafront properties", "Holiday rentals", "Marine businesses"]
    }
  ];

  const extendedAreas = [
    "Plymouth", "Honiton", "Crediton", "Cullompton", "Ottery St Mary", 
    "Buckfastleigh", "Ivybridge", "Paignton", "Brixham", "Teignmouth",
    "Chudleigh", "Kingsteignton", "Abbotskerswell", "Starcross", "Lympstone"
  ];

  const serviceStats = [
    {
      icon: <MapPin size={32} />,
      value: "50+",
      label: "Towns & Villages Covered",
      description: "Across Devon and surrounding areas"
    },
    {
      icon: <Clock size={32} />,
      value: "20+",
      label: "Years Local Experience", 
      description: "Deep knowledge of Devon properties"
    },
    {
      icon: <Star size={32} />,
      value: "30min",
      label: "Average Response Time",
      description: "From our Dawlish headquarters"
    },
    {
      icon: <Award size={32} />,
      value: "100%",
      label: "Coverage Guarantee",
      description: "We'll travel for the right project"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating Coverage Areas",
    "description": "Professional decorating services across Devon and surrounding areas",
    "url": "https://www.bsrdecorating.co.uk/coverage",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dawlish",
      "addressRegion": "Devon", 
      "addressCountry": "GB"
    },
    "areaServed": mainAreas.map(area => ({
      "@type": "City",
      "name": area.name,
      "addressRegion": "Devon",
      "addressCountry": "GB"
    })),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 50.5833,
        "longitude": -3.4667
      },
      "geoRadius": "50000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-bsr-black via-bsr-gray to-bsr-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Our <span className="text-bsr-highlight">Service Coverage</span> Across Devon
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating proudly serves communities across Devon and surrounding areas. From our Dawlish headquarters, 
              we provide professional painting and decorating services throughout South East Devon, with specialist knowledge 
              of local architecture, coastal challenges, and heritage requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openQuoteModal}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Quote - Any Location</span>
              </button>
              <a
                href="tel:01626911236"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call: 01626 911236</span>
              </a>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bsr-white mb-4">
                Interactive <span className="text-bsr-highlight">Coverage Map</span>
              </h2>
              <p className="text-xl text-gray-300">
                See exactly where we provide our professional decorating services across Devon
              </p>
            </div>
            
            <ServiceAreaMap />
            
            <div className="text-center mt-8">
              <p className="text-gray-300">
                <strong className="text-bsr-highlight">Can't see your area?</strong> We regularly travel beyond our core coverage area for larger projects. 
                <button onClick={openQuoteModal} className="text-bsr-highlight hover:text-bsr-white transition-colors duration-200 font-semibold ml-1">
                  Get in touch to discuss your project
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-bsr-highlight w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-bsr-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-bsr-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-bsr-highlight mb-2">{stat.label}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Service Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bsr-white mb-4">
                Our <span className="text-bsr-highlight">Main Service Areas</span>
              </h2>
              <p className="text-xl text-gray-300">
                Full-service decorating across these key Devon locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/areas/${area.slug}`}
                  className="group relative bg-bsr-black border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-bsr-white group-hover:text-bsr-highlight transition-colors duration-200">
                          {area.name}
                        </h3>
                        <p className="text-gray-300 text-sm">{area.description}</p>
                      </div>
                      {area.type === 'headquarters' && (
                        <div className="bg-bsr-highlight text-bsr-black px-3 py-1 rounded-full text-xs font-bold">
                          HQ
                        </div>
                      )}
                    </div>

                    {/* Population */}
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin size={16} className="text-bsr-highlight" />
                      <span className="text-gray-300 text-sm">Population: {area.population}</span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-bsr-white mb-2">Service Highlights:</h4>
                      <ul className="space-y-1">
                        {area.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={12} className="text-bsr-highlight flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-bsr-white mb-2">Local Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-bsr-highlight bg-opacity-20 text-bsr-highlight px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-bsr-gray-light">
                      <span className="text-bsr-highlight font-medium text-sm group-hover:text-bsr-white transition-colors duration-200">
                        View {area.name} Services
                      </span>
                      <ArrowRight size={16} className="text-bsr-highlight group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Extended Coverage Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bsr-white mb-4">
                Extended <span className="text-bsr-highlight">Coverage Areas</span>
              </h2>
              <p className="text-xl text-gray-300">
                We also serve these locations for larger projects and commercial work
              </p>
            </div>

            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {extendedAreas.map((area, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-4 hover:border-bsr-highlight transition-colors duration-200">
                      <MapPin size={20} className="text-bsr-highlight mx-auto mb-2" />
                      <span className="text-bsr-white text-sm font-medium">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-300 mb-4">
                  For extended coverage areas, we typically require larger projects or may include travel costs. 
                  <strong className="text-bsr-highlight"> All quotes are free and transparent.</strong>
                </p>
                <button
                  onClick={openQuoteModal}
                  className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Check Coverage for Your Area
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BSR for Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bsr-white mb-4">
                Why Choose BSR for <span className="text-bsr-highlight">Devon-Wide Coverage</span>
              </h2>
              <p className="text-xl text-gray-300">
                Local knowledge, regional expertise, and consistent quality across all areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-bsr-white" />
                </div>
                <h3 className="text-xl font-semibold text-bsr-white mb-3">Local Knowledge</h3>
                <p className="text-gray-300">
                  Deep understanding of each area's unique architecture, planning requirements, and environmental challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-bsr-white" />
                </div>
                <h3 className="text-xl font-semibold text-bsr-white mb-3">Consistent Quality</h3>
                <p className="text-gray-300">
                  Same high standards and professional approach whether we're working in Dawlish or traveling to Exeter.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-bsr-white" />
                </div>
                <h3 className="text-xl font-semibold text-bsr-white mb-3">Reliable Response</h3>
                <p className="text-gray-300">
                  Quick response times and reliable service scheduling across our entire coverage area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-bsr-white mb-10 opacity-90">
              No matter where you are in Devon, we're ready to provide professional decorating services. 
              Get your free, no-obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={openQuoteModal}
                className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Your Free Quote
              </button>
              <a
                href="tel:01626911236"
                className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Call: 01626 911236
              </a>
            </div>
            <p className="text-bsr-white text-sm mt-6 opacity-80">
              Free quotes • No obligations • Professional advice for all Devon areas
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
