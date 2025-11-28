'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'


export default function ExeterPage() {
  const { openQuoteModal } = useQuoteModal();
  
  const services = [
    {
      title: "Luxury Interior Decorating Exeter",
      description: "Premium interior decorating for Exeter's most prestigious properties, from Georgian townhouses in St. Leonard's to modern luxury developments in Pennsylvania and Newtown.",
      features: ["Luxury finishes & materials", "Heritage property specialists", "High-end residential", "Period colour schemes", "Affluent area expertise"]
    },
    {
      title: "Commercial Office Decorating Exeter",
      description: "Professional commercial decorating for Exeter's thriving business district, from historic city centre offices to modern business parks and university facilities.",
      features: ["City centre offices", "Modern business parks", "University facilities", "Healthcare properties", "Retail spaces"]
    },
    {
      title: "Heritage Property Restoration Exeter",
      description: "Specialist restoration services for Exeter's historic buildings, listed properties, and conservation areas with traditional techniques and period authenticity.",
      features: ["Listed building compliance", "Traditional materials", "Conservation techniques", "Period authenticity", "Historic building expertise"]
    },
    {
      title: "Exterior Painting Exeter",
      description: "Expert exterior painting for Exeter properties, combining traditional techniques with modern weather protection for both heritage and contemporary buildings.",
      features: ["Historic building restoration", "Modern commercial exteriors", "Weather-resistant finishes", "City centre properties", "Heritage compliance"]
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Luxury Property Specialists",
      description: "Expert knowledge of Exeter's most prestigious areas including St. Leonard's, Pennsylvania, and Newtown, with heritage building expertise"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Commercial Office Experts",
      description: "Extensive experience with Exeter's business district, from historic city centre offices to modern business parks and university facilities"
    },
    {
      icon: <Phone size={24} />,
      title: "Affluent Area Access",
      description: "Understanding of Exeter's premium residential areas and city centre logistics for efficient project delivery to high-value clients"
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
              Luxury Decorators in <span className="text-bsr-highlight">Exeter</span> – Heritage & Commercial Specialists
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              BSR Decorating provides premium painting and decorating services throughout Exeter's most prestigious areas, including St. Leonard's, Pennsylvania, and Newtown. 
              From luxury heritage properties to modern commercial offices and high-end residential developments, we combine traditional craftsmanship with contemporary techniques, 
              serving Exeter's affluent clientele with over 20 years of experience in heritage building restoration and commercial office decorating.
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
                  Serving Exeter's Most Prestigious Areas
                </h2>
                <p className="text-gray-300 mb-6">
                  Exeter, Devon's ancient cathedral city and modern economic hub, presents unique decorating challenges 
                  and opportunities for luxury properties. From Georgian townhouses in St. Leonard's to modern developments in Pennsylvania and Newtown, 
                  we understand the diverse requirements of Exeter's most prestigious residential and commercial areas.
                </p>
                <p className="text-gray-300 mb-6">
                  Our expertise encompasses luxury heritage property restoration in Exeter's historic quarter, premium commercial office decorating 
                  in the business district, and high-end residential projects from Georgian terraces to luxury new-build developments. 
                  We're experienced in working within conservation area restrictions, listed building requirements, and the specific needs of affluent clients.
                </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/domestic"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Domestic Decorating</h4>
                  <p className="text-gray-300 text-sm">Heritage homes & luxury properties in Exeter's affluent areas</p>
                </Link>
                <Link
                  href="/commercial"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Decorating</h4>
                  <p className="text-gray-300 text-sm">Premium offices, retail & institutions in Exeter</p>
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">View Portfolio</h4>
                  <p className="text-gray-300 text-sm">See our completed Exeter decorating projects</p>
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
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Luxury Domestic Decorating Exeter</h3>
                <p className="text-gray-300 mb-4">
                  From Georgian townhouses in St. Leonard's to luxury developments in Pennsylvania and Newtown, our premium domestic 
                  decorating services combine respect for historical character with contemporary luxury living. Specialist 
                  in heritage property restoration and high-end residential decoration for Exeter's most prestigious areas.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Luxury heritage property restoration</li>
                  <li>• Georgian and Victorian townhouses</li>
                  <li>• High-end residential developments</li>
                  <li>• Conservation area compliance</li>
                  <li>• Affluent area expertise (St. Leonard's, Pennsylvania, Newtown)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Commercial Office Decorating Exeter</h3>
                <p className="text-gray-300 mb-4">
                  Professional commercial office decorating for Exeter's thriving business sector. From historic city centre 
                  offices to modern business parks, university facilities to healthcare properties, we deliver premium 
                  commercial decorating with minimal business disruption for Exeter's most prestigious business addresses.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Premium city centre offices</li>
                  <li>• University facilities</li>
                  <li>• Healthcare properties</li>
                  <li>• Retail and hospitality</li>
                  <li>• Modern business parks</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm mb-6">
                Serving Exeter's most prestigious areas including St. Leonard's, Pennsylvania, Newtown, and the wider Mid Devon area. 
                For luxury decorating services in Exeter, contact BSR Decorating today.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                <Link
                  href="/blog/painter-decorator-cost-exeter-2025-price-guide"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-4 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Exeter Decorating Costs 2025</h4>
                  <p className="text-gray-300 text-sm">Complete price guide for painting and decorating in Exeter</p>
                </Link>
                <Link
                  href="/blog/best-paint-types-exeter-homes-old-damp-listed-properties"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-4 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Best Paint for Exeter Homes</h4>
                  <p className="text-gray-300 text-sm">Expert guide to choosing paint for old, damp or listed properties</p>
                </Link>
                <Link
                  href="/blog/exeter-new-build-paintwork-problems-how-pros-fix"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-4 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">New-Build Paint Problems</h4>
                  <p className="text-gray-300 text-sm">How professional decorators fix developer paintwork issues</p>
                </Link>
                <Link
                  href="/blog/decorating-tips-exeter-period-homes-specialist-advice"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-4 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Period Home Decorating Tips</h4>
                  <p className="text-gray-300 text-sm">Specialist advice for Exeter's Georgian and Victorian properties</p>
                </Link>
                <Link
                  href="/blog/luxury-decorating-trends-exeter"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-4 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Luxury Decorating Trends</h4>
                  <p className="text-gray-300 text-sm">Latest trends for Exeter's most prestigious areas</p>
                </Link>
                <Link
                  href="/blog/commercial-office-decorating-exeter-city-centre"
                  className="bg-bsr-black border-2 border-bsr-highlight rounded-lg p-4 hover:border-bsr-highlight hover:bg-bsr-gray transition-all duration-200 group"
                >
                  <h4 className="font-semibold text-bsr-white mb-2 group-hover:text-bsr-highlight">Commercial Office Decorating</h4>
                  <p className="text-gray-300 text-sm">Professional strategies for Exeter's business district</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
