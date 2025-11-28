'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'

export default function DawlishPage() {
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
        "name": "Dawlish",
        "item": "https://bsrdecorating.co.uk/areas/dawlish"
      }
    ]
  };
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Dawlish",
    "description": "Professional decorating services in Dawlish, Devon",
    "url": "https://bsrdecorating.co.uk/areas/dawlish",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dawlish",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.5833,
      "longitude": -3.4667
    },
    "serviceArea": {
      "@type": "City",
      "name": "Dawlish",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer decorating in Dawlish Warren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide decorating services throughout Dawlish Warren and all surrounding areas including Holcombe and Starcross. As local decorators based in Dawlish, we offer quick response times and understand the unique coastal environment of the area."
        }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured for decorating work in Dawlish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully insured for all decorating work in Dawlish. We carry comprehensive public liability insurance and employers' liability insurance, ensuring complete coverage for all domestic and commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work on coastal properties in Dawlish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in coastal property decorating in Dawlish. We use weather-resistant and salt-resistant paint systems specifically designed for coastal environments, protecting properties from the challenging seaside weather conditions."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you start a project in Dawlish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As local decorators based in Dawlish, we can typically start projects quickly. Response times vary depending on project size and current workload, but we prioritise local Dawlish projects and can often accommodate urgent work. Contact us for current availability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free quotes in Dawlish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free, no-obligation quotes for all decorating projects in Dawlish. We'll visit your property, assess the work required, and provide a detailed written quote with transparent pricing and no hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work on Victorian properties in Dawlish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have extensive experience with Victorian properties in Dawlish. We understand the unique characteristics of Victorian architecture and use appropriate techniques and materials to preserve the character while ensuring modern durability and protection."
        }
      }
    ]
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="text-bsr-white font-medium">Dawlish</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
            Professional Decorators in <span className="text-bsr-highlight">Dawlish</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert painting and decorating services across Dawlish and surrounding areas. 
            Local decorators with over 20 years of experience serving the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </button>
            <Link 
              href="/portfolio"
              className="border border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-bsr-white mb-12 text-center">
            Our Dawlish Decorating Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/domestic" className="group bg-bsr-gray border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-black transition-all duration-200 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-bsr-white mb-4 group-hover:text-bsr-highlight transition-colors duration-200">Domestic Decorating</h3>
              <p className="text-gray-300 mb-4">Transform your Dawlish home with professional interior and exterior painting services.</p>
              <div className="flex items-center text-bsr-highlight text-sm font-medium">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
            <Link href="/commercial" className="group bg-bsr-gray border-2 border-bsr-highlight rounded-lg p-6 hover:border-bsr-highlight hover:bg-bsr-black transition-all duration-200 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-bsr-white mb-4 group-hover:text-bsr-highlight transition-colors duration-200">Commercial Decorating</h3>
              <p className="text-gray-300 mb-4">Professional painting and decorating for Dawlish businesses and commercial properties.</p>
              <div className="flex items-center text-bsr-highlight text-sm font-medium">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Wallpaper Hanging</h3>
              <p className="text-gray-300 mb-4">Professional wallpaper installation and removal services in Dawlish.</p>
              <button
                onClick={() => openQuoteModal()}
                className="text-bsr-highlight text-sm font-medium hover:text-bsr-white transition-colors duration-200"
              >
                Get Quote →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bsr-white mb-6">
                Serving Dawlish and Surrounding Areas
              </h2>
              <p className="text-gray-300 mb-6">
                As local decorators based in Dawlish, we understand the unique character of this beautiful 
                seaside town. From Victorian terraces to modern developments, we have experience working 
                with all types of properties in the area.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-bsr-highlight mt-1" size={20} />
                  <div>
                    <h4 className="text-bsr-white font-semibold">Local Coverage</h4>
                    <p className="text-gray-300">Dawlish, Dawlish Warren, Holcombe, Starcross</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-bsr-highlight mt-1" size={20} />
                  <div>
                    <h4 className="text-bsr-white font-semibold">Quick Response</h4>
                    <p className="text-gray-300">Local team available for urgent projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-4">Contact Our Dawlish Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-bsr-highlight" size={18} />
                    <span className="text-gray-300">01626 911236</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-bsr-highlight" size={18} />
                    <span className="text-gray-300">info@bsrdecorating.co.uk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-bsr-white mb-6 text-center">
            Why Choose BSR Decorating in Dawlish?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Local Expertise</h4>
              <p className="text-gray-300 mb-4">
                We know Dawlish inside and out, from the coastal weather challenges to the architectural styles common in the area.
              </p>
              
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Quality Materials</h4>
              <p className="text-gray-300">
                We use high-quality, weather-resistant paints and materials perfect for Dawlish&apos;s coastal environment.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Competitive Pricing</h4>
              <p className="text-gray-300 mb-4">
                Fair, transparent pricing with detailed quotes and no hidden costs for all Dawlish residents.
              </p>
              
              <h4 className="text-lg font-semibold text-bsr-white mb-3">Fully Insured</h4>
              <p className="text-gray-300">
                Comprehensive insurance coverage for your peace of mind on every Dawlish decorating project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
            Frequently Asked Questions About Decorating in Dawlish
          </h2>
          <div className="space-y-6">
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Do you offer decorating in Dawlish Warren?
              </h3>
              <p className="text-gray-300">
                Yes, we provide decorating services throughout Dawlish Warren and all surrounding areas including Holcombe and Starcross. As local decorators based in Dawlish, we offer quick response times and understand the unique coastal environment of the area.
              </p>
            </div>
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Are you fully insured for decorating work in Dawlish?
              </h3>
              <p className="text-gray-300">
                Yes, we are fully insured for all decorating work in Dawlish. We carry comprehensive public liability insurance and employers' liability insurance, ensuring complete coverage for all domestic and commercial projects.
              </p>
            </div>
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Do you work on coastal properties in Dawlish?
              </h3>
              <p className="text-gray-300">
                Yes, we specialise in coastal property decorating in Dawlish. We use weather-resistant and salt-resistant paint systems specifically designed for coastal environments, protecting properties from the challenging seaside weather conditions.
              </p>
            </div>
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                How quickly can you start a project in Dawlish?
              </h3>
              <p className="text-gray-300">
                As local decorators based in Dawlish, we can typically start projects quickly. Response times vary depending on project size and current workload, but we prioritise local Dawlish projects and can often accommodate urgent work. Contact us for current availability.
              </p>
            </div>
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Do you offer free quotes in Dawlish?
              </h3>
              <p className="text-gray-300">
                Yes, we provide free, no-obligation quotes for all decorating projects in Dawlish. We'll visit your property, assess the work required, and provide a detailed written quote with transparent pricing and no hidden costs.
              </p>
            </div>
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Can you work on Victorian properties in Dawlish?
              </h3>
              <p className="text-gray-300">
                Yes, we have extensive experience with Victorian properties in Dawlish. We understand the unique characteristics of Victorian architecture and use appropriate techniques and materials to preserve the character while ensuring modern durability and protection.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openQuoteModal()}
              className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Get Your Free Dawlish Quote</span>
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
