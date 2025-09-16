'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'


export default function TorquayPage() {
  const { openQuoteModal } = useQuoteModal();
  
  const services = [
    {
      title: "Interior Painting Torquay",
      description: "Premium interior decorating for Torquay homes, hotels, and holiday properties with moisture-resistant finishes.",
      features: ["Coastal climate protection", "Holiday rental specialists", "Hotel and B&B decorating", "Quick turnaround times"]
    },
    {
      title: "Exterior Painting Torquay",
      description: "Weather-resistant exterior painting designed specifically for Torquay's coastal environment and salt air exposure.",
      features: ["Salt-resistant coatings", "Victorian villa specialists", "Seafront property protection", "Long-lasting finishes"]
    },
    {
      title: "Holiday Property Decorating",
      description: "Specialized decorating services for Torquay's holiday rentals, B&Bs, and tourism properties.",
      features: ["Quick between-season refresh", "Durable high-traffic finishes", "Guest-ready standards", "Flexible scheduling"]
    },
    {
      title: "Commercial Decorating Torquay",
      description: "Professional commercial decorating for Torquay's thriving tourism and business sector.",
      features: ["Hotels & restaurants", "Retail spaces", "Tourist attractions", "Office developments"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Coastal Property Experts",
      description: "Specialist knowledge of decorating in Torquay's unique coastal environment"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Tourism Industry Focus",
      description: "Understanding the needs of Torquay's hotels, B&Bs, and holiday rental properties"
    },
    {
      icon: <Phone size={24} />,
      title: "Flexible Scheduling",
      description: "Working around Torquay's busy tourism seasons and guest bookings"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Torquay",
    "description": "Professional decorating services in Torquay, Devon",
    "url": "https://bsrdecorating.co.uk/areas/torquay",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Torquay",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.4619,
      "longitude": -3.5253
    },
    "serviceArea": {
      "@type": "City",
      "name": "Torquay",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Torquay Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Decorating Torquay",
            "description": "Interior and exterior house painting and decorating services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Decorating Torquay",
            "description": "Professional decorating for Torquay hotels, restaurants, and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Holiday Property Decorating",
            "description": "Specialized decorating for Torquay holiday rentals and tourism properties"
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
              Decorators in <span className="text-bsr-highlight">Torquay</span> – Coastal Property Specialists
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides expert painting and decorating services throughout Torquay and the English Riviera. 
              Specializing in coastal properties, holiday rentals, hotels, and residential homes, we understand the unique 
              challenges of decorating in Torquay's maritime environment with over 20 years of experience serving Devon's premier seaside destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Torquay Quote</span>
              </button>
              <Link 
                href="/portfolio"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Torquay Projects</span>
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
                Our Torquay Decorating Services
              </h2>
              <p className="text-xl text-gray-300">
                Specialist decorating services for Torquay's coastal properties and thriving tourism industry
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
                Why Choose BSR Decorating for Your Torquay Project?
              </h2>
              <p className="text-xl text-gray-300">
                Specialist expertise in Torquay's coastal environment and tourism industry needs
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
                  Serving Torquay and the English Riviera
                </h2>
                <p className="text-gray-300 mb-6">
                  Torquay, the heart of the English Riviera, presents unique decorating challenges and opportunities. 
                  From elegant Victorian villas overlooking Torbay to modern seafront apartments and bustling holiday 
                  accommodations, we understand the specific requirements of coastal property maintenance and decoration.
                </p>
                <p className="text-gray-300 mb-6">
                  Our expertise includes working with salt air exposure, moisture control, high-traffic holiday properties, 
                  and the demanding schedules of Torquay's tourism industry. We use specialized coatings and techniques 
                  designed to withstand the coastal environment while maintaining the aesthetic appeal that makes Torquay special.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/domestic"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Domestic Decorating</h4>
                    <p className="text-gray-300 text-sm">Coastal homes & holiday properties in Torquay</p>
                  </Link>
                  <Link
                    href="/commercial"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Decorating</h4>
                    <p className="text-gray-300 text-sm">Hotels, restaurants & tourism businesses</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Torquay Team</h3>
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
                        <p className="text-gray-300">Torquay & English Riviera</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-bsr-highlight rounded-lg p-6">
                  <h4 className="text-xl font-bold text-bsr-white mb-3">Holiday Property Specialists</h4>
                  <p className="text-bsr-white mb-4 opacity-90">
                    Quick turnaround decorating for Torquay holiday rentals and B&Bs. 
                    Flexible scheduling around your bookings and guest seasons.
                  </p>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-bsr-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Holiday Property Quote
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
              Professional Decorators in Torquay, Devon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Torquay Domestic Decorating</h3>
                <p className="text-gray-300 mb-4">
                  From Victorian seafront villas to modern coastal apartments, our domestic decorating services in Torquay 
                  are designed to withstand the challenges of coastal living while enhancing your property's value and appeal. 
                  Specialist coatings protect against salt air and moisture.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Coastal weather-resistant finishes</li>
                  <li>• Victorian villa restoration</li>
                  <li>• Modern seafront apartments</li>
                  <li>• Holiday home maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Torquay Tourism Industry</h3>
                <p className="text-gray-300 mb-4">
                  Supporting Torquay's vital tourism industry with professional decorating for hotels, restaurants, 
                  B&Bs, and attractions. We understand the importance of maintaining high standards while working 
                  efficiently around guest bookings and seasonal demands.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Hotels and guest houses</li>
                  <li>• Restaurants and cafes</li>
                  <li>• Tourist attractions</li>
                  <li>• Retail and entertainment venues</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                Serving Torquay, Paignton, Brixham, and the wider English Riviera area. 
                For professional decorating services in Torquay, contact BSR Decorating today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
