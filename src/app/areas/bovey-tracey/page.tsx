'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'

export default function BoveyTraceyPage() {
  const { openQuoteModal } = useQuoteModal();
  
  const services = [
    {
      title: "Interior Painting Bovey Tracey",
      description: "Transform your Bovey Tracey home with professional interior painting using premium eco-friendly paints.",
      features: ["Period property expertise", "Modern colour schemes", "Heritage restoration", "Dartmoor cottage specialists"]
    },
    {
      title: "Exterior Painting Bovey Tracey",
      description: "Protect your Bovey Tracey property with weather-resistant exterior painting, perfect for Dartmoor's climate.",
      features: ["Traditional cottage painting", "Modern home exteriors", "Garden buildings", "Weather protection"]
    },
    {
      title: "Wallpaper Hanging Bovey Tracey",
      description: "Expert wallpaper services throughout Bovey Tracey, from traditional patterns to contemporary designs.",
      features: ["Traditional wallpapers", "Contemporary designs", "Feature walls", "Professional removal"]
    },
    {
      title: "Commercial Decorating Bovey Tracey",
      description: "Professional commercial decorating for Bovey Tracey businesses, from pottery studios to retail spaces.",
      features: ["Creative studios", "Retail decorating", "Office spaces", "Tourism businesses"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Dartmoor Area Specialists",
      description: "Understanding the unique needs of properties near Dartmoor and Bovey Tracey's artistic community"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Heritage Property Experts",
      description: "Specialist knowledge of traditional Devon architecture and period property restoration"
    },
    {
      icon: <Phone size={24} />,
      title: "Quick Local Response",
      description: "Fast response times to Bovey Tracey from our nearby Dawlish base"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Bovey Tracey",
    "description": "Professional decorating services in Bovey Tracey, Devon",
    "url": "https://bsrdecorating.co.uk/areas/bovey-tracey",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bovey Tracey",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.5884,
      "longitude": -3.6744
    },
    "serviceArea": {
      "@type": "City",
      "name": "Bovey Tracey",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bovey Tracey Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Decorating Bovey Tracey",
            "description": "Interior and exterior house painting and decorating services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Decorating Bovey Tracey",
            "description": "Professional decorating for Bovey Tracey businesses and commercial properties"
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
              Decorators in <span className="text-bsr-highlight">Bovey Tracey</span> – Domestic & Commercial Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides expert painting and decorating services throughout Bovey Tracey and the surrounding Dartmoor area. 
              Specializing in both traditional heritage properties and modern homes, we bring over 20 years of experience to every project 
              in this historic Devon town known for its pottery and artistic heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Bovey Tracey Quote</span>
              </button>
              <Link 
                href="/portfolio"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Bovey Tracey Work</span>
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
                Our Bovey Tracey Decorating Services
              </h2>
              <p className="text-xl text-gray-300">
                Professional painting and decorating for Bovey Tracey's unique heritage properties and modern homes
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
                Why Choose BSR Decorating for Your Bovey Tracey Project?
              </h2>
              <p className="text-xl text-gray-300">
                Specialist knowledge of Dartmoor area properties and Bovey Tracey's unique character
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
                  Serving Bovey Tracey and the Dartmoor Area
                </h2>
                <p className="text-gray-300 mb-6">
                  Bovey Tracey, known as the "Gateway to Dartmoor," is a historic market town with a rich pottery heritage 
                  and stunning period architecture. We understand the unique challenges and opportunities of decorating 
                  properties in this beautiful Devon location, from traditional thatched cottages to contemporary homes.
                </p>
                <p className="text-gray-300 mb-6">
                  Our expertise includes working with heritage properties, understanding traditional building materials, 
                  and respecting the architectural character that makes Bovey Tracey special while providing modern, 
                  durable finishes that stand up to Dartmoor's changeable weather.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/domestic"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Domestic Decorating</h4>
                    <p className="text-gray-300 text-sm">Heritage homes & modern properties in Bovey Tracey</p>
                  </Link>
                  <Link
                    href="/commercial"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Decorating</h4>
                    <p className="text-gray-300 text-sm">Studios, galleries & businesses in Bovey Tracey</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Bovey Tracey Team</h3>
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
                        <p className="text-gray-300">Bovey Tracey & Dartmoor area</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-bsr-highlight rounded-lg p-6">
                  <h4 className="text-xl font-bold text-bsr-white mb-3">Heritage Property Specialists</h4>
                  <p className="text-bsr-white mb-4 opacity-90">
                    Specialist in traditional Devon architecture and period property restoration. 
                    Free consultations for all Bovey Tracey heritage properties.
                  </p>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Heritage Property Quote
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
              Professional Decorators in Bovey Tracey, Devon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Bovey Tracey Domestic Decorating</h3>
                <p className="text-gray-300 mb-4">
                  From historic cottages to modern family homes, our domestic decorating services in Bovey Tracey 
                  combine traditional craftsmanship with contemporary techniques. We specialize in heritage property 
                  restoration while offering modern decorating solutions for all property types.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Period property restoration</li>
                  <li>• Traditional cottage decorating</li>
                  <li>• Modern home interior design</li>
                  <li>• Dartmoor weather-resistant exteriors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Bovey Tracey Creative Spaces</h3>
                <p className="text-gray-300 mb-4">
                  Supporting Bovey Tracey's vibrant arts community with specialized decorating for creative spaces. 
                  From pottery studios to art galleries, we understand the unique requirements of creative businesses 
                  and provide sympathetic decorating solutions.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Artist studios and workshops</li>
                  <li>• Gallery and exhibition spaces</li>
                  <li>• Craft centres and shops</li>
                  <li>• Tourism and heritage buildings</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                Serving Bovey Tracey, Lustleigh, Moretonhampstead, Chudleigh, and the surrounding Dartmoor area. 
                For professional decorating services in Bovey Tracey, contact BSR Decorating today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
