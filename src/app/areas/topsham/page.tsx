'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'


export default function TopshamPage() {
  const { openQuoteModal } = useQuoteModal();
  
  const services = [
    {
      title: "Interior Painting Topsham",
      description: "Sympathetic interior decorating for Topsham's historic properties, preserving period character while providing modern comfort.",
      features: ["Period colour schemes", "Traditional techniques", "Feature wall restoration", "Sensitive modernisation"]
    },
    {
      title: "Exterior Painting Topsham",
      description: "Expert exterior painting for Topsham's riverside and historic properties, using appropriate materials and methods.",
      features: ["Waterfront property protection", "Historic building techniques", "Traditional colour palettes", "Weather-resistant finishes"]
    },
    {
      title: "Heritage Property Restoration",
      description: "Specialist restoration services for Topsham's Listed buildings and properties within the Conservation Area.",
      features: ["Conservation compliance", "Traditional materials", "Period authenticity", "Listed building expertise"]
    },
    {
      title: "Waterfront Property Decorating",
      description: "Specialized decorating for Topsham's unique riverside and estuary-facing properties.",
      features: ["Moisture protection", "Salt air resistance", "Flood-resistant finishes", "Waterfront maintenance"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Heritage Village Experts",
      description: "Deep understanding of Topsham's unique character and conservation requirements"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Waterfront Specialists",
      description: "Expert knowledge of decorating riverside and estuary-facing properties"
    },
    {
      icon: <Phone size={24} />,
      title: "Local Community Focus",
      description: "Committed to preserving the character of this historic Devon village"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Topsham",
    "description": "Professional decorating services in Topsham, Devon",
    "url": "https://bsrdecorating.co.uk/areas/topsham",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Topsham",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6868,
      "longitude": -3.4641
    },
    "serviceArea": {
      "@type": "City",
      "name": "Topsham",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Topsham Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heritage Property Decorating Topsham",
            "description": "Specialist decorating for historic and listed buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Waterfront Property Decorating",
            "description": "Specialized decorating for riverside and estuary-facing properties"
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
      <div className="min-h-screen bg-gradient-to-b from-bsr-black via-bsr-gray to-bsr-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Decorators in <span className="text-bsr-highlight">Topsham</span> – Historic Riverside Village Specialists
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides expert painting and decorating services in the historic riverside village of Topsham. 
              Specializing in heritage properties, Listed buildings, and waterfront homes, we understand the unique character 
              and conservation requirements of this beautiful Devon village. With over 20 years of experience, we combine 
              traditional techniques with modern expertise to preserve Topsham's distinctive charm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Topsham Quote</span>
              </button>
              <Link 
                href="/portfolio"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Topsham Work</span>
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
                Our Topsham Decorating Services
              </h2>
              <p className="text-xl text-gray-300">
                Specialist decorating services for Topsham's historic properties and waterfront homes
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
                Why Choose BSR Decorating for Your Topsham Project?
              </h2>
              <p className="text-xl text-gray-300">
                Specialist expertise in Topsham's historic village character and waterfront challenges
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
                  Preserving Topsham's Historic Character
                </h2>
                <p className="text-gray-300 mb-6">
                  Topsham is one of Devon's most beautiful historic villages, with its Georgian and Victorian houses, 
                  narrow streets, and riverside setting creating a unique conservation challenge. As a designated 
                  Conservation Area with numerous Listed buildings, every decorating project requires careful consideration 
                  of historical authenticity and planning requirements.
                </p>
                <p className="text-gray-300 mb-6">
                  Our expertise includes working with traditional lime mortars, historic paint colours, and appropriate 
                  materials that respect the village's character while providing modern durability. We understand the 
                  unique challenges of waterfront properties, from moisture protection to salt air resistance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/domestic"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Heritage Homes</h4>
                    <p className="text-gray-300 text-sm">Historic properties & waterfront homes in Topsham</p>
                  </Link>
                  <Link
                    href="/commercial"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Properties</h4>
                    <p className="text-gray-300 text-sm">Shops, restaurants & businesses in Topsham</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Topsham Team</h3>
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
                        <p className="text-gray-300">Topsham & Exe Estuary</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-bsr-highlight rounded-lg p-6">
                  <h4 className="text-xl font-bold text-bsr-white mb-3">Conservation Area Specialists</h4>
                  <p className="text-bsr-white mb-4 opacity-90">
                    Expert in Conservation Area regulations and Listed building requirements. 
                    Traditional materials and techniques for Topsham's historic properties.
                  </p>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-bsr-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Conservation Quote
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
              Professional Decorators in Topsham, Devon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Topsham Heritage Properties</h3>
                <p className="text-gray-300 mb-4">
                  Topsham's historic properties require specialist knowledge and techniques. Our heritage decorating 
                  services preserve the authentic character of Georgian and Victorian buildings while ensuring modern 
                  comfort and durability. Expert in Conservation Area and Listed building requirements.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Georgian terraced houses</li>
                  <li>• Victorian waterfront properties</li>
                  <li>• Listed building compliance</li>
                  <li>• Traditional paint techniques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Waterfront Property Specialists</h3>
                <p className="text-gray-300 mb-4">
                  Topsham's unique riverside location creates specific challenges for property maintenance. Our waterfront 
                  property specialists understand moisture protection, salt air resistance, and the decorating needs of 
                  properties facing the Exe Estuary.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Estuary-facing properties</li>
                  <li>• Moisture protection systems</li>
                  <li>• Salt air resistance</li>
                  <li>• Flood-resistant finishes</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                Serving Topsham, Countess Wear, Exton, and the surrounding Exe Estuary area. 
                For professional heritage decorating services in Topsham, contact BSR Decorating today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
