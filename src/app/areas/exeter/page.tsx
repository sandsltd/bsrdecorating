'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'


export default function ExeterPage() {
  const { openQuoteModal } = useQuoteModal();
  
  const services = [
    {
      title: "Interior Painting Exeter",
      description: "Professional interior decorating for Exeter's diverse property portfolio, from heritage buildings to modern developments.",
      features: ["Heritage property specialists", "Modern office interiors", "University accommodation", "Period colour schemes"]
    },
    {
      title: "Exterior Painting Exeter",
      description: "Expert exterior painting for Exeter properties, combining traditional techniques with modern weather protection.",
      features: ["Historic building restoration", "Modern commercial exteriors", "Listed building expertise", "City centre properties"]
    },
    {
      title: "Commercial Decorating Exeter",
      description: "Professional commercial decorating services for Exeter's thriving business district and commercial developments.",
      features: ["Office complexes", "Retail spaces", "Educational facilities", "Healthcare properties"]
    },
    {
      title: "Heritage Property Restoration",
      description: "Specialist restoration services for Exeter's historic buildings and conservation areas.",
      features: ["Listed building compliance", "Traditional materials", "Conservation techniques", "Period authenticity"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Heritage Specialists",
      description: "Expert knowledge of Exeter's historic architecture and conservation requirements"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Commercial Focus",
      description: "Extensive experience with Exeter's business district and commercial properties"
    },
    {
      icon: <Phone size={24} />,
      title: "City Centre Access",
      description: "Understanding of city centre logistics and parking restrictions for efficient project delivery"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Exeter",
    "description": "Professional decorating services in Exeter, Devon",
    "url": "https://bsrdecorating.co.uk/areas/exeter",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Exeter",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.7236,
      "longitude": -3.5339
    },
    "serviceArea": {
      "@type": "City",
      "name": "Exeter",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Exeter Decorating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Decorating Exeter",
            "description": "Interior and exterior house painting and decorating services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Decorating Exeter",
            "description": "Professional decorating for Exeter offices, retail, and business properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heritage Property Restoration",
            "description": "Specialist restoration for Exeter's historic and listed buildings"
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
              Decorators in <span className="text-bsr-highlight">Exeter</span> – Heritage & Modern Property Specialists
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides expert painting and decorating services throughout Exeter, Devon's historic cathedral city. 
              From heritage buildings in the city centre to modern commercial developments and residential properties, we combine 
              traditional craftsmanship with contemporary techniques, serving Exeter's diverse property needs with over 20 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Free Exeter Quote</span>
              </button>
              <Link 
                href="/portfolio"
                className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Exeter Projects</span>
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
                Our Exeter Decorating Services
              </h2>
              <p className="text-xl text-gray-300">
                Professional decorating solutions for Exeter's heritage buildings and modern developments
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
                Why Choose BSR Decorating for Your Exeter Project?
              </h2>
              <p className="text-xl text-gray-300">
                Specialist expertise in Exeter's unique blend of heritage and modern architecture
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
                  Serving Exeter and Greater Devon
                </h2>
                <p className="text-gray-300 mb-6">
                  Exeter, Devon's ancient cathedral city and modern economic hub, presents unique decorating challenges 
                  and opportunities. From medieval timber-framed buildings to cutting-edge university facilities and 
                  contemporary office developments, we understand the diverse requirements of this historic yet forward-thinking city.
                </p>
                <p className="text-gray-300 mb-6">
                  Our expertise encompasses conservation work in Exeter's historic quarter, modern commercial decorating 
                  in the business district, and residential projects from Georgian terraces to new-build developments. 
                  We're experienced in working within conservation area restrictions and listed building requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/domestic"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Domestic Decorating</h4>
                    <p className="text-gray-300 text-sm">Heritage homes & modern properties in Exeter</p>
                  </Link>
                  <Link
                    href="/commercial"
                    className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Decorating</h4>
                    <p className="text-gray-300 text-sm">Offices, retail & institutions in Exeter</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Exeter Team</h3>
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
                        <p className="text-gray-300">Exeter & surrounding areas</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-bsr-highlight rounded-lg p-6">
                  <h4 className="text-xl font-bold text-bsr-white mb-3">Heritage Building Specialists</h4>
                  <p className="text-bsr-white mb-4 opacity-90">
                    Expert in listed building regulations and conservation area requirements. 
                    Approved techniques for Exeter's historic properties.
                  </p>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-bsr-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Heritage Building Quote
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
              Professional Decorators in Exeter, Devon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Exeter Domestic Decorating</h3>
                <p className="text-gray-300 mb-4">
                  From Georgian terraces in the city centre to modern family homes in Exeter's suburbs, our domestic 
                  decorating services combine respect for historical character with contemporary living needs. Specialist 
                  in period property restoration and modern home decoration.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Heritage property restoration</li>
                  <li>• Georgian and Victorian homes</li>
                  <li>• Modern residential developments</li>
                  <li>• Conservation area compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Exeter Commercial Decorating</h3>
                <p className="text-gray-300 mb-4">
                  Professional commercial decorating for Exeter's diverse business sector. From historic city centre 
                  offices to modern business parks, university facilities to healthcare properties, we deliver high-quality 
                  commercial decorating with minimal business disruption.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• City centre offices</li>
                  <li>• University facilities</li>
                  <li>• Healthcare properties</li>
                  <li>• Retail and hospitality</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                Serving Exeter, Crediton, Cullompton, Ottery St Mary, and the wider Mid Devon area. 
                For professional decorating services in Exeter, contact BSR Decorating today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
