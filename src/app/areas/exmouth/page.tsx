'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'


export default function ExmouthPage() {
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
        "name": "Exmouth",
        "item": "https://www.bsrdecorating.co.uk/areas/exmouth"
      }
    ]
  };
  
  const services = [
    {
      title: "Interior Painting Exmouth",
      description: "Professional interior decorating for Exmouth homes and holiday properties with moisture-resistant, coastal-friendly finishes.",
      features: ["Coastal climate protection", "Holiday property specialists", "Quick turnaround painting", "Moisture-resistant systems"]
    },
    {
      title: "Exterior Painting Exmouth",
      description: "Expert exterior painting designed for Exmouth's challenging seafront environment with maximum weather protection.",
      features: ["Salt-resistant coatings", "Seafront property specialists", "Wind and weather protection", "UV-resistant finishes"]
    },
    {
      title: "Holiday Home Decorating",
      description: "Specialized decorating services for Exmouth's holiday rentals and second homes with durable, attractive finishes.",
      features: ["Between-season decorating", "Hard-wearing finishes", "Quick project completion", "Guest-ready standards"]
    },
    {
      title: "Commercial Decorating Exmouth",
      description: "Professional commercial decorating for Exmouth's tourism businesses, restaurants, and marine-related enterprises.",
      features: ["Restaurants & cafes", "Marine businesses", "Tourist accommodations", "Retail premises"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Seafront Specialists",
      description: "Expert knowledge of decorating in Exmouth's challenging marine environment"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Holiday Property Focus",
      description: "Understanding the specific needs of Exmouth's holiday rental and tourism properties"
    },
    {
      icon: <Phone size={24} />,
      title: "Marine Environment Expertise",
      description: "Specialist coatings and techniques for extreme coastal exposure"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Exmouth",
    "description": "Professional decorating services in Exmouth, Devon",
    "url": "https://www.bsrdecorating.co.uk/areas/exmouth",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Exmouth",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6208,
      "longitude": -3.4139
    },
    "serviceArea": {
      "@type": "City",
      "name": "Exmouth",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Exmouth Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Decorating Exmouth",
            "description": "Interior and exterior house painting and decorating services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Decorating Exmouth",
            "description": "Professional decorating for Exmouth businesses and marine enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Holiday Property Decorating",
            "description": "Specialized decorating for Exmouth holiday homes and rental properties"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you work on seafront properties in Exmouth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialise in seafront property decorating in Exmouth. We use marine-grade paint systems, salt-resistant coatings, and specialist techniques specifically designed for extreme coastal exposure, protecting properties from wind, salt air, and weather damage."
              }
            },
            {
              "@type": "Question",
              "name": "Can you handle holiday home decorating in Exmouth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialise in holiday home decorating in Exmouth. We offer quick turnaround times, durable finishes suitable for rental properties, and flexible scheduling to work around guest bookings and tourism seasons."
              }
            },
            {
              "@type": "Question",
              "name": "Do you use marine-grade paints for coastal properties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use marine-grade paint systems and specialist coatings for coastal properties in Exmouth. These paints are specifically designed to resist salt air, high humidity, UV exposure, and extreme weather conditions common in seafront locations."
              }
            },
            {
              "@type": "Question",
              "name": "Are you experienced with marine business decorating?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we have experience decorating marine-related businesses in Exmouth, including boatyards, marinas, and waterside restaurants. We understand the unique challenges of these environments and use appropriate protective finishes."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer quick turnaround for holiday properties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer quick turnaround decorating services for holiday properties in Exmouth. We understand the need to complete work between guest bookings and can provide fast, efficient decorating to minimise downtime for holiday rental properties."
              }
            },
            {
              "@type": "Question",
              "name": "How do you protect against extreme coastal weather?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use specialist marine-grade protection systems including salt-resistant primers, weather-resistant topcoats, and UV protection specifically designed for Exmouth's challenging coastal environment. Our techniques ensure long-lasting protection against wind, rain, salt air, and sun exposure."
              }
            }
          ]
        }) }}
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
              <span className="text-bsr-white font-medium">Exmouth</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Decorators in <span className="text-bsr-highlight">Exmouth</span> – Seaside Town Specialists
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides expert painting and decorating services throughout Exmouth, Devon's premier seaside resort. 
              Specializing in coastal properties, seafront homes, holiday accommodations, and marine-related businesses, we understand 
              the unique challenges of decorating in one of Devon's most exposed coastal environments. With over 20 years of experience, 
              we deliver durable, beautiful finishes that withstand Exmouth's marine conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Exmouth Quote</span>
              </button>
              <Link 
                href="/portfolio"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Exmouth Projects</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bsr-white mb-4">
                Our Exmouth Decorating Services
              </h2>
              <p className="text-xl text-gray-300">
                Specialist coastal decorating services for Exmouth's marine environment and tourism industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-bsr-highlight flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-bsr-white mb-4">
                Why Choose BSR Decorating for Your Exmouth Project?
              </h2>
              <p className="text-xl text-gray-300">
                Specialist expertise in Exmouth's challenging coastal environment and tourism industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-bsr-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-bsr-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Area Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bsr-white mb-6">
                  Serving Exmouth and the Jurassic Coast
                </h2>
                <p className="text-gray-300 mb-6">
                  Exmouth, gateway to the Jurassic Coast World Heritage Site, presents some of the most challenging 
                  decorating conditions in Devon. From seafront properties directly exposed to salt spray and strong 
                  winds to holiday homes requiring rapid turnaround between seasons, we understand the unique demands 
                  of this beautiful coastal town.
                </p>
                <p className="text-gray-300 mb-6">
                  Our expertise includes specialized marine coatings, salt-resistant finishes, and rapid project completion 
                  for the tourism industry. We work with holiday property owners, marine businesses, and residents to provide 
                  decorating solutions that look great and stand up to Exmouth's challenging coastal environment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/domestic"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Domestic Decorating</h4>
                    <p className="text-gray-300 text-sm">Seafront homes & holiday properties in Exmouth</p>
                  </Link>
                  <Link
                    href="/commercial"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Decorating</h4>
                    <p className="text-gray-300 text-sm">Tourism & marine businesses in Exmouth</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Exmouth Team</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-bsr-highlight" size={18} />
                      <div>
                        <p className="text-bsr-white font-medium">Call Now</p>
                        <p className="text-gray-300">01626 911236</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-bsr-highlight" size={18} />
                      <div>
                        <p className="text-bsr-white font-medium">Email Us</p>
                        <p className="text-gray-300">info@bsrdecorating.co.uk</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-bsr-highlight" size={18} />
                      <div>
                        <p className="text-bsr-white font-medium">Coverage Area</p>
                        <p className="text-gray-300">Exmouth & Jurassic Coast</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-bsr-white mb-3">Marine Environment Specialists</h4>
                  <p className="text-bsr-white mb-4 opacity-90">
                    Expert in extreme coastal exposure decorating. Salt-resistant, UV-protective finishes 
                    designed for Exmouth's challenging marine environment.
                  </p>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-bsr-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Coastal Property Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Professional Decorators in Exmouth, Devon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Exmouth Coastal Properties</h3>
                <p className="text-gray-300 mb-4">
                  Exmouth's position at the mouth of the River Exe creates unique challenges for property decoration. 
                  Our coastal property specialists understand salt air protection, wind resistance, and the maintenance 
                  needs of properties exposed to some of Devon's harshest marine conditions.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Seafront property protection</li>
                  <li>• Salt-resistant coating systems</li>
                  <li>• Wind and weather barriers</li>
                  <li>• UV-protective finishes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Tourism Industry Support</h3>
                <p className="text-gray-300 mb-4">
                  Supporting Exmouth's vital tourism industry with professional decorating for holiday accommodations, 
                  restaurants, marine businesses, and attractions. Quick turnaround times to maximize earning potential 
                  during peak seasons.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Holiday rental properties</li>
                  <li>• Restaurants and cafes</li>
                  <li>• Marine and watersport businesses</li>
                  <li>• Tourist accommodation</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                Serving Exmouth, Lympstone, Budleigh Salterton, and the East Devon coastal area. 
                For professional coastal decorating services in Exmouth, contact BSR Decorating today.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Frequently Asked Questions About Decorating in Exmouth
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work on seafront properties in Exmouth?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in seafront property decorating in Exmouth. We use marine-grade paint systems, salt-resistant coatings, and specialist techniques specifically designed for extreme coastal exposure, protecting properties from wind, salt air, and weather damage.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Can you handle holiday home decorating in Exmouth?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in holiday home decorating in Exmouth. We offer quick turnaround times, durable finishes suitable for rental properties, and flexible scheduling to work around guest bookings and tourism seasons.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you use marine-grade paints for coastal properties?
                </h3>
                <p className="text-gray-300">
                  Yes, we use marine-grade paint systems and specialist coatings for coastal properties in Exmouth. These paints are specifically designed to resist salt air, high humidity, UV exposure, and extreme weather conditions common in seafront locations.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Are you experienced with marine business decorating?
                </h3>
                <p className="text-gray-300">
                  Yes, we have experience decorating marine-related businesses in Exmouth, including boatyards, marinas, and waterside restaurants. We understand the unique challenges of these environments and use appropriate protective finishes.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you offer quick turnaround for holiday properties?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer quick turnaround decorating services for holiday properties in Exmouth. We understand the need to complete work between guest bookings and can provide fast, efficient decorating to minimise downtime for holiday rental properties.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How do you protect against extreme coastal weather?
                </h3>
                <p className="text-gray-300">
                  We use specialist marine-grade protection systems including salt-resistant primers, weather-resistant topcoats, and UV protection specifically designed for Exmouth's challenging coastal environment. Our techniques ensure long-lasting protection against wind, rain, salt air, and sun exposure.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Your Free Exmouth Quote</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
