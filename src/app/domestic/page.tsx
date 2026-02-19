'use client';

import Link from 'next/link';
import { Check, Star, Phone, Clock, Shield, Palette, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ServiceHero from '@/components/ServiceHero';
import FeaturedProjects from '@/components/FeaturedProjects';

import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function DomesticPage() {
  const { openQuoteModal } = useQuoteModal();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
        "name": "Domestic Decorating",
        "item": "https://www.bsrdecorating.co.uk/domestic"
      }
    ]
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const services = [
    {
      title: "Interior Painting",
      description: "Professional interior painting using high-quality water-based paints for a durable, breathable finish that's safe for your family.",
      features: ["Water-based eco-friendly paints", "Colour consultation", "Surface preparation", "Multiple coats for longevity"]
    },
    {
      title: "Exterior Painting",
      description: "Exterior house painting with weather-resistant coatings designed for Devon's coastal climate.",
      features: ["Coastal weather protection", "Surface preparation & repair", "Scaffolding included", "Long-lasting finish guarantee"]
    },
    {
      title: "Wallpaper Hanging & Removal",
      description: "Expert wallpaper installation and removal services with precise pattern matching and seamless finish.",
      features: ["Professional pattern matching", "Seamless installation", "Safe removal services", "Wall preparation & repair"]
    },
    {
      title: "Timber Repair & Restoration",
      description: "Specialist timber repair and restoration services, from minor repairs to complete heritage restoration projects.",
      features: ["Heritage timber matching", "Traditional joinery techniques", "Seamless repair integration", "Structural reinforcement"]
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Environmentally conscious decorating using water-based paints and sustainable practices for modern homes.",
      features: ["Water-based paint systems", "Low VOC emissions", "Breathable finishes", "Sustainable practices"]
    },
    {
      title: "Colour Consultation",
      description: "Professional colour consultation to help you choose the perfect palette for your home's aesthetic.",
      features: ["Expert colour advice", "Material selection", "Style coordination", "Budget planning"]
    }
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Eco-Friendly Paints",
      description: "Water-based, low VOC paints safe for your family and the environment"
    },
    {
      icon: <Clock size={32} />,
      title: "Heritage Expertise",
      description: "Specialist in period property restoration and traditional techniques"
    },
    {
      icon: <Palette size={32} />,
      title: "Coastal Protection",
      description: "Paint systems designed specifically for Devon's coastal climate"
    },
    {
      icon: <Star size={32} />,
      title: "Quality Guarantee",
      description: "20 years experience with full satisfaction guarantee"
    }
  ];

  const coverageAreas = [
    { area: "Dawlish", type: "HQ", description: "Our headquarters and commercial hub" },
    { area: "Newton Abbot", type: "main", description: "Regular service area" },
    { area: "Bovey Tracey", type: "main", description: "Regular service area" },
    { area: "Torquay", type: "main", description: "Regular service area" },
    { area: "Exeter", type: "main", description: "Regular service area" },
    { area: "Topsham", type: "main", description: "Regular service area" },
    { area: "Exmouth", type: "main", description: "Regular service area" },
    { area: "Plymouth", type: "larger", description: "Extended coverage area" },
    { area: "Honiton", type: "larger", description: "Extended coverage area" }
  ];

  const faqs = [
    {
      question: "What types of paint do you use for domestic properties?",
      answer: "We specialise in high-quality water-based paints that are eco-friendly, low in VOCs, and safe for families. These paints provide excellent durability, breathability, and coverage while being environmentally responsible. For exterior work, we use weather-resistant coatings specifically designed for Devon's coastal climate."
    },
    {
      question: "Do you cover my area in Devon?",
      answer: "We provide full domestic decorating services across South East Devon including Dawlish (our HQ), Newton Abbot, Bovey Tracey, Torquay, Exeter, Topsham, and Exmouth. For larger domestic projects, we also cover Plymouth, Honiton, Buckfastleigh, Ivybridge, and Ottery St Mary. Contact us for a free consultation to confirm coverage for your specific location."
    },
    {
      question: "How much does domestic decorating cost?",
      answer: "Costs vary depending on room size, surface condition, paint quality, and project complexity. We provide free, detailed quotes with transparent pricing and no hidden costs. Interior room painting typically starts from £300-500 per room, while whole house projects are quoted individually. Contact us for a personalised estimate."
    },
    {
      question: "How long does a typical domestic decorating project take?",
      answer: "Project duration depends on scope and size. A single room typically takes 1-3 days, a whole house interior can take 1-2 weeks, and exterior painting usually takes 3-7 days depending on property size and weather conditions. We'll provide a clear timeline during your free consultation."
    },
    {
      question: "Do you provide colour consultation services?",
      answer: "Yes! We offer professional colour consultation to help you choose the perfect palette for your home. Our experts can advise on colour schemes, material selection, style coordination, and how colours work with Devon's natural light. This service helps ensure your final result exceeds expectations."
    },
    {
      question: "Can you work on period and heritage properties?",
      answer: "Absolutely! We specialise in period property restoration and have extensive experience with Georgian, Victorian, and historic homes across Devon. We use traditional techniques, heritage paint colours, and appropriate materials to maintain the authentic character of your property while providing modern durability."
    },
    {
      question: "Do you handle timber repair and restoration?",
      answer: "Yes, we're specialists in timber repair and restoration. From minor repairs to complete heritage restoration projects, we can handle timber splicing, traditional joinery, and seamless repair integration. Our recent 25-year restoration project in Honiton demonstrates our expertise in bringing weathered timber back to life."
    },
    {
      question: "Are you fully insured for domestic work?",
      answer: "Yes, we carry full public liability insurance for all domestic decorating work. We're also fully qualified and have 20 years of experience. All our work comes with a satisfaction guarantee, giving you complete peace of mind throughout your project."
    },
    {
      question: "Do you work around my schedule?",
      answer: "We understand family life and work commitments. We offer flexible scheduling including weekend consultations and can work around your routine to minimise disruption. For interior work, we'll discuss the best approach to keep your home functional during the project."
    },
    {
      question: "What&apos;s included in your domestic decorating service?",
      answer: "Our comprehensive service includes: surface preparation, repairs, priming, multiple paint coats, protection of furniture and floors, daily cleanup, and final inspection. We also provide colour consultation, material advice, and handle all aspects from planning to completion for a stress-free experience."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-bsr-black border-b border-bsr-gray-light">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-bsr-highlight transition-colors duration-200">
                Home
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <span className="text-bsr-white font-medium">Domestic Decorating</span>
            </nav>
          </div>
        </section>
      <ServiceHero
        title="Domestic Decorating Services"
        subtitle="Transform your home with eco-friendly, professional decorating services across South East Devon"
        description="Specialising in water-based paints and heritage restoration, we provide exceptional quality workmanship for modern homes and period properties. From single room makeovers to complete house renovations, our 20 years of experience ensures your home transformation exceeds expectations."
        image="/gallery/internal/living-room-transformation.jpeg"
      />

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Our <span className="text-bsr-highlight">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Simple, transparent process from consultation to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Consultation</h3>
              <p className="text-gray-300 text-sm">Free consultation to discuss your project requirements and vision</p>
            </div>
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Quote</h3>
              <p className="text-gray-300 text-sm">Detailed, transparent quote with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Work</h3>
              <p className="text-gray-300 text-sm">Professional execution with minimal disruption to your home</p>
            </div>
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Completion</h3>
              <p className="text-gray-300 text-sm">Final inspection and your complete satisfaction guaranteed</p>
            </div>
          </div>

          {/* CTA after Process */}
          <div className="text-center mt-12">
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get your free consultation and detailed quote today - no obligations, just expert advice
              </p>
              <button
                onClick={openQuoteModal}
                className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Get Free Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Our <span className="text-bsr-highlight">Domestic Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive decorating solutions for every room in your home across Devon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check size={14} className="text-bsr-highlight flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Why Choose <span className="text-bsr-highlight">BSR for Your Home</span>
            </h2>
            <p className="text-xl text-gray-300">
              20 years of expertise in eco-friendly domestic decorating across Devon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-bsr-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA after Why Choose Us */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-bsr-highlight to-[#d001e8] rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-bsr-white mb-3">
                Experience the BSR Difference
              </h3>
              <p className="text-bsr-white text-opacity-90 mb-6">
                Join hundreds of satisfied customers across Devon who trust BSR for their home decorating needs. 
                Water-based paints, heritage expertise, and 20 years of proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openQuoteModal}
                  className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Get Your Free Quote</span>
                </button>
                <a
                  href="tel:01626911236"
                  className="border-2 border-bsr-yellow text-bsr-yellow hover:bg-bsr-yellow hover:text-bsr-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Call: 01626 911236</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Service <span className="text-bsr-highlight">Coverage Areas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional domestic decorating services across South East Devon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((location, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  location.type === 'HQ'
                    ? 'bg-bsr-highlight border-bsr-highlight text-bsr-black'
                    : location.type === 'main'
                    ? 'bg-bsr-gray border-bsr-gray-light hover:border-bsr-highlight'
                    : 'bg-bsr-black border-bsr-highlight border-opacity-50 hover:border-opacity-100'
                }`}
              >
                {location.type === 'HQ' && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-bsr-black text-bsr-highlight px-2 py-1 rounded text-xs font-bold">
                      HQ
                    </div>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${
                  location.type === 'HQ' ? 'text-bsr-black' : 'text-bsr-white'
                }`}>
                  {location.area}
                </h3>
                <p className={`text-sm ${
                  location.type === 'HQ' 
                    ? 'text-bsr-black text-opacity-80' 
                    : location.type === 'main'
                    ? 'text-gray-300'
                    : 'text-gray-400'
                }`}>
                  {location.description}
                </p>
                {location.type === 'larger' && (
                  <div className="mt-3">
                    <span className="text-xs text-bsr-highlight font-semibold bg-bsr-highlight bg-opacity-20 px-2 py-1 rounded">
                      Larger Projects
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Not sure if we cover your area? <button onClick={openQuoteModal} className="text-bsr-highlight hover:text-bsr-white transition-colors duration-200 font-semibold">Get in touch</button> for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects 
        category="domestic"
        title="Featured Domestic Projects"
        subtitle="Discover our latest home transformation projects across Devon - from period property restorations to modern eco-friendly builds"
      />

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Frequently Asked <span className="text-bsr-highlight">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our domestic decorating services in Devon
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden transition-all duration-300 hover:border-bsr-highlight"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-bsr-highlight"
                >
                  <h3 className="text-lg font-semibold text-bsr-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp size={24} className="text-bsr-highlight" />
                    ) : (
                      <ChevronDown size={24} className="text-bsr-highlight" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-bsr-gray-light pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <button
              onClick={openQuoteModal}
              className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Get your free, no-obligation quote today and see how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openQuoteModal}
              className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-8 py-3 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Get Free Quote</span>
            </button>
            <Link
              href="/portfolio"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
