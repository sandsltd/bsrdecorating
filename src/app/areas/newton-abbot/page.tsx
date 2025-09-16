'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'

export default function NewtonAbbotPage() {
  const { openQuoteModal } = useQuoteModal();
  
  const services = [
    {
      title: "Interior Painting Newton Abbot",
      description: "Transform your Newton Abbot home with professional interior painting using eco-friendly water-based paints.",
      features: ["Living rooms & bedrooms", "Kitchens & bathrooms", "Hallways & staircases", "Colour consultation"]
    },
    {
      title: "Exterior Painting Newton Abbot",
      description: "Protect and beautify your Newton Abbot property with weather-resistant exterior painting designed for Devon's climate.",
      features: ["House exterior painting", "Fascias & soffits", "Garden fences & sheds", "Coastal weather protection"]
    },
    {
      title: "Wallpaper Hanging Newton Abbot",
      description: "Expert wallpaper installation and removal services throughout Newton Abbot and surrounding areas.",
      features: ["Professional installation", "Pattern matching", "Wallpaper removal", "Surface preparation"]
    },
    {
      title: "Commercial Decorating Newton Abbot",
      description: "Professional commercial decorating for Newton Abbot businesses, offices, and retail spaces.",
      features: ["Office decorating", "Retail space painting", "Minimal disruption", "Out-of-hours working"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Local Newton Abbot Team",
      description: "Based nearby in Dawlish, we know Newton Abbot well and provide quick response times"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "20+ Years Experience",
      description: "Trusted by Newton Abbot homeowners and businesses for over two decades"
    },
    {
      icon: <Phone size={24} />,
      title: "Free Quotes",
      description: "No-obligation quotes for all Newton Abbot decorating projects, large or small"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Newton Abbot",
    "description": "Professional decorating services in Newton Abbot, Devon",
    "url": "https://bsrdecorating.co.uk/areas/newton-abbot",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Newton Abbot",
      "@addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.5309,
      "longitude": -3.6067
    },
    "serviceArea": {
      "@type": "City",
      "name": "Newton Abbot",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Newton Abbot Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Decorating Newton Abbot",
            "description": "Interior and exterior house painting and decorating services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Decorating Newton Abbot",
            "description": "Professional decorating for Newton Abbot businesses and commercial properties"
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
              Decorators in <span className="text-bsr-highlight">Newton Abbot</span> – Domestic & Commercial Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides professional painting and decorating services throughout Newton Abbot and surrounding areas. 
              From domestic interior and exterior painting to commercial decorating projects, we deliver exceptional quality workmanship 
              with over 20 years of experience serving the Newton Abbot community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Newton Abbot Quote</span>
              </button>
              <Link 
                href="/portfolio"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Newton Abbot Work</span>
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
                Our Newton Abbot Decorating Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive painting and decorating solutions for Newton Abbot homes and businesses
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
                Why Choose BSR Decorating for Your Newton Abbot Project?
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by Newton Abbot homeowners and businesses for quality and reliability
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
                  Serving Newton Abbot and Surrounding Areas
                </h2>
                <p className="text-gray-300 mb-6">
                  Newton Abbot is a thriving market town in South Devon, and we're proud to serve homeowners and businesses 
                  throughout the area. From period Victorian terraces to modern developments, we understand the unique character 
                  and architectural styles found throughout Newton Abbot.
                </p>
                <p className="text-gray-300 mb-6">
                  Our local knowledge combined with over 20 years of experience means we understand the specific challenges 
                  of decorating in Devon's climate, from coastal weather considerations to the maintenance needs of period properties.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/domestic"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Domestic Decorating</h4>
                    <p className="text-gray-300 text-sm">Interior & exterior painting for Newton Abbot homes</p>
                  </Link>
                  <Link
                    href="/commercial"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Decorating</h4>
                    <p className="text-gray-300 text-sm">Professional decorating for Newton Abbot businesses</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Newton Abbot Team</h3>
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
                        <p className="text-gray-300">Newton Abbot & surrounding areas</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-bsr-highlight rounded-lg p-6">
                  <h4 className="text-xl font-bold text-bsr-white mb-3">Free Newton Abbot Quotes</h4>
                  <p className="text-bsr-white mb-4 opacity-90">
                    Get your no-obligation quote for any decorating project in Newton Abbot. We provide detailed, 
                    transparent pricing with no hidden costs.
                  </p>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Request Your Free Quote
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
              Professional Decorators in Newton Abbot, Devon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Newton Abbot Domestic Decorating</h3>
                <p className="text-gray-300 mb-4">
                  Transform your Newton Abbot home with our professional domestic decorating services. We specialize in 
                  interior and exterior painting, wallpaper hanging, and complete home renovations throughout Newton Abbot 
                  and the surrounding South Devon area.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Interior painting and decorating</li>
                  <li>• Exterior house painting</li>
                  <li>• Wallpaper hanging and removal</li>
                  <li>• Period property restoration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Newton Abbot Commercial Decorating</h3>
                <p className="text-gray-300 mb-4">
                  Professional commercial decorating services for Newton Abbot businesses. From offices and retail spaces 
                  to industrial properties, we provide high-quality commercial painting and decorating with minimal 
                  disruption to your business operations.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Office decorating and refurbishment</li>
                  <li>• Retail space painting</li>
                  <li>• Industrial and warehouse decorating</li>
                  <li>• Out-of-hours working available</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                Serving Newton Abbot, Bovey Tracey, Kingsteignton, Abbotskerswell, and surrounding South Devon areas. 
                For professional decorating services in Newton Abbot, contact BSR Decorating today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
