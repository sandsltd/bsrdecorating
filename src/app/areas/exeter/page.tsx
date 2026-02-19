'use client';

import Link from 'next/link'
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'
import { useQuoteModal } from '@/contexts/QuoteModalContext'


export default function ExeterPage() {
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
      }
    ]
  };
  
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
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "BSR Decorating - Exeter",
    "description": "Professional painting and decorating services in Exeter, Devon. Specialist interior, exterior, heritage and commercial decorating.",
    "url": "https://bsrdecorating.co.uk/areas/exeter",
    "telephone": "+441626911236",
    "email": "info@bsrdecorating.co.uk",
    "priceRange": "£108-£2,360",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Exeter",
      "addressRegion": "Devon",
      "postalCode": "EX1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.7236,
      "longitude": -3.5339
    },
    "areaServed": [
      { "@type": "PostalAddress", "postalCode": "EX1", "addressLocality": "Exeter" },
      { "@type": "PostalAddress", "postalCode": "EX2", "addressLocality": "Exeter" },
      { "@type": "PostalAddress", "postalCode": "EX4", "addressLocality": "Exeter" }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Painting Exeter",
          "description": "Professional interior painting and decorating for homes and period properties in Exeter"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Painting Exeter",
          "description": "Exterior painting and weatherproofing for Exeter properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Decorating Exeter",
          "description": "Office, retail and commercial property decorating in Exeter city centre"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heritage Property Restoration Exeter",
          "description": "Specialist restoration for listed buildings and conservation area properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Cabinet Spraying Exeter",
          "description": "Professional kitchen cabinet spraying and refinishing in Exeter"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rental Property Decorating Exeter",
          "description": "End of tenancy and landlord decorating services in Exeter"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer decorating in St Leonard's?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive decorating services throughout St Leonard's, one of Exeter's most prestigious areas. Our team has extensive experience with the Georgian townhouses and period properties in this affluent neighbourhood, including heritage property restoration and luxury interior decorating."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work on listed buildings in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in listed building work in Exeter. We have extensive experience with heritage properties, conservation area compliance, and traditional techniques required for listed buildings. We understand the planning requirements and use appropriate materials and methods for historic properties."
        }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured for commercial painting in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully insured for all commercial painting and decorating work in Exeter. We carry comprehensive public liability insurance and employers' liability insurance, ensuring complete coverage for all commercial projects including offices, retail spaces, and business properties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer weekend work for Exeter offices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer weekend and out-of-hours work for Exeter offices to minimise business disruption. We understand that commercial decorating needs to fit around business operations, and we can schedule work during evenings, weekends, or outside normal business hours."
        }
      },
      {
        "@type": "Question",
        "name": "How much does decorating cost in Exeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Decorating costs in Exeter vary based on property type, scope of work, and specific requirements. Standard room decorating typically ranges from £300-£600 per room, while full house interior work for a 3-bedroom property ranges from £2,500-£5,000. Commercial decorating and heritage property work may have different pricing. We provide free, no-obligation quotes for all Exeter projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work in Pennsylvania and Newtown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide decorating services in both Pennsylvania and Newtown, two of Exeter's most affluent residential areas. We have extensive experience with luxury properties in these neighbourhoods, including high-end residential developments, period properties, and modern luxury homes."
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
              <span className="text-bsr-white font-medium">Exeter</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
              Painter and Decorator in <span className="text-bsr-highlight">Exeter</span> – Heritage & Commercial Specialists
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

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-bsr-white mb-8 text-center">
              Frequently Asked Questions About Decorating in Exeter
            </h2>
            <div className="space-y-6">
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you offer decorating in St Leonard's?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide comprehensive decorating services throughout St Leonard's, one of Exeter's most prestigious areas. Our team has extensive experience with the Georgian townhouses and period properties in this affluent neighbourhood, including heritage property restoration and luxury interior decorating.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Can you work on listed buildings in Exeter?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialise in listed building work in Exeter. We have extensive experience with heritage properties, conservation area compliance, and traditional techniques required for listed buildings. We understand the planning requirements and use appropriate materials and methods for historic properties.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Are you fully insured for commercial painting in Exeter?
                </h3>
                <p className="text-gray-300">
                  Yes, we are fully insured for all commercial painting and decorating work in Exeter. We carry comprehensive public liability insurance and employers' liability insurance, ensuring complete coverage for all commercial projects including offices, retail spaces, and business properties.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you offer weekend work for Exeter offices?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer weekend and out-of-hours work for Exeter offices to minimise business disruption. We understand that commercial decorating needs to fit around business operations, and we can schedule work during evenings, weekends, or outside normal business hours.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  How much does decorating cost in Exeter?
                </h3>
                <p className="text-gray-300">
                  Decorating costs in Exeter vary based on property type, scope of work, and specific requirements. Standard room decorating typically ranges from £300-£600 per room, while full house interior work for a 3-bedroom property ranges from £2,500-£5,000. Commercial decorating and heritage property work may have different pricing. We provide free, no-obligation quotes for all Exeter projects.
                </p>
              </div>
              <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">
                  Do you work in Pennsylvania and Newtown?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide decorating services in both Pennsylvania and Newtown, two of Exeter's most affluent residential areas. We have extensive experience with luxury properties in these neighbourhoods, including high-end residential developments, period properties, and modern luxury homes.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => openQuoteModal()}
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>Get Your Free Exeter Quote</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
