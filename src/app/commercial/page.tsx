'use client';

import Link from 'next/link';
import { Check, Star, Phone, Clock, Shield, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import ServiceHero from '@/components/ServiceHero';
import FeaturedProjects from '@/components/FeaturedProjects';

import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function CommercialPage() {
  const { openQuoteModal } = useQuoteModal();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const services = [
    {
      title: "Office Decorating",
      description: "Professional office painting using eco-friendly water-based paints to create productive, healthy work environments.",
      features: ["Water-based eco-friendly paints", "Out-of-hours working", "Corporate colour schemes", "Minimal business disruption"]
    },
    {
      title: "Retail Space Painting",
      description: "Transform retail spaces with durable, high-traffic paint systems that enhance customer experience and brand image.",
      features: ["Brand colour matching", "High-traffic finishes", "Quick turnaround", "Weekend scheduling available"]
    },
    {
      title: "Industrial & Warehouse",
      description: "Specialised coating systems for industrial facilities with safety compliance and long-lasting protection.",
      features: ["Industrial-grade coatings", "Health & safety compliance", "Large-scale coordination", "Specialist protective finishes"]
    },
    {
      title: "Multi-Property Projects",
      description: "Comprehensive project management for property portfolios and large-scale commercial developments.",
      features: ["Multi-site coordination", "Consistent quality standards", "Timeline management", "Single point of contact"]
    },
    {
      title: "Shopfront Renovation",
      description: "Complete shopfront and exterior commercial painting to enhance your business's street appeal and branding.",
      features: ["Corporate branding implementation", "Weather-resistant coatings", "Planning permission guidance", "Signage preparation"]
    },
    {
      title: "Emergency & Maintenance",
      description: "Rapid response decorating services for maintenance, repairs, and urgent commercial painting needs.",
      features: ["24/7 emergency response", "Insurance claim support", "Temporary solutions", "Rapid mobilisation"]
    }
  ];

  const benefits = [
    {
      icon: <Building size={32} />,
      title: "Commercial Expertise",
      description: "20 years specialising in commercial projects across Devon's business sector"
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Scheduling",
      description: "Out-of-hours and weekend working to minimise business disruption"
    },
    {
      icon: <Shield size={32} />,
      title: "Full Commercial Insurance",
      description: "Comprehensive commercial liability and public indemnity insurance"
    },
    {
      icon: <Star size={32} />,
      title: "Project Management",
      description: "End-to-end project coordination with dedicated account management"
    }
  ];

  const coverageAreas = [
    { area: "Dawlish", type: "HQ", description: "Our headquarters and commercial hub" },
    { area: "Newton Abbot", type: "main", description: "Full commercial services available" },
    { area: "Bovey Tracey", type: "main", description: "Business and retail decorating" },
    { area: "Torquay", type: "main", description: "Tourism and hospitality sector specialist" },
    { area: "Exeter", type: "main", description: "City centre and business parks" },
    { area: "Topsham", type: "main", description: "Historic commercial properties" },
    { area: "Exmouth", type: "main", description: "Coastal commercial properties" },
    { area: "Plymouth", type: "larger", description: "Large commercial and industrial projects" },
    { area: "Honiton", type: "larger", description: "Commercial property portfolios" }
  ];

  const faqs = [
    {
      question: "What types of commercial properties do you work on?",
      answer: "We work on all types of commercial properties including offices, retail spaces, restaurants, hotels, warehouses, industrial facilities, and multi-property portfolios. Our experience spans from small local businesses to large corporate projects across Devon, with specialist expertise in tourism, hospitality, and industrial sectors."
    },
    {
      question: "Can you work outside normal business hours?",
      answer: "Yes, we specialise in out-of-hours working to minimise disruption to your business operations. We can work evenings, weekends, and during planned shutdowns. Our flexible scheduling ensures your business continues operating normally while we complete your decorating project."
    },
    {
      question: "Do you provide project management for large commercial projects?",
      answer: "Absolutely! We offer comprehensive project management including timeline coordination, budget control, quality assurance, and stakeholder communication. For multi-site projects, we provide a single point of contact and ensure consistent quality standards across all locations."
    },
    {
      question: "What's the typical cost for commercial decorating?",
      answer: "Commercial project costs vary significantly based on size, complexity, and specifications. Office spaces typically start from £2-4 per square foot, while retail and industrial projects are quoted individually. We provide detailed, transparent quotes with no hidden costs and can work within your budget parameters."
    },
    {
      question: "How long do commercial decorating projects take?",
      answer: "Project timelines depend on scope and size. Small offices typically take 3-7 days, retail spaces 1-2 weeks, and large commercial projects 2-8 weeks. We provide detailed project schedules and work efficiently to minimise business disruption while maintaining high quality standards."
    },
    {
      question: "Do you handle corporate branding and colour schemes?",
      answer: "Yes, we specialise in implementing corporate branding and colour schemes. We can match existing brand colours precisely, work with your marketing team, and ensure consistent application across multiple locations. Our experience includes major corporate rebrandings and franchise requirements."
    },
    {
      question: "Are you qualified for industrial and warehouse projects?",
      answer: "Yes, we're fully qualified for industrial and warehouse decorating with specialist knowledge of health & safety requirements, protective coatings, and industrial-grade paint systems. We understand regulations for food production, manufacturing, and storage facilities across Devon."
    },
    {
      question: "What insurance do you carry for commercial work?",
      answer: "We carry comprehensive commercial insurance including public liability, employer's liability, and professional indemnity insurance. All our work is covered by extensive warranties, and we're fully qualified with 20 years of commercial decorating experience across Devon."
    },
    {
      question: "Can you work on heritage and listed commercial buildings?",
      answer: "Yes, we have extensive experience with heritage and listed commercial buildings across Devon. We understand conservation requirements, work with conservation officers, and use appropriate traditional materials and techniques while meeting modern commercial standards."
    },
    {
      question: "Do you offer emergency commercial decorating services?",
      answer: "Yes, we provide rapid response emergency services for urgent commercial decorating needs including water damage, vandalism, or urgent maintenance. We can mobilize quickly and provide temporary solutions while planning comprehensive repairs to get your business back to normal."
    }
  ];

  return (
    <div className="min-h-screen">
        <ServiceHero
        title="Commercial Decorating Services"
        subtitle="Professional decorating solutions for businesses across South East Devon"
        description="Specialising in eco-friendly commercial decorating with minimal business disruption. From office renovations to multi-property projects, our 20 years of experience ensures your business transformation exceeds expectations while maintaining operational efficiency."
        image="/portfolio/project13/PHOTO-2025-09-02-12-45-21.jpg"
      />

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Our <span className="text-bsr-highlight">Commercial Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Streamlined process designed for minimal business disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Site Survey</h3>
              <p className="text-gray-300 text-sm">Comprehensive site assessment and project planning</p>
            </div>
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Proposal</h3>
              <p className="text-gray-300 text-sm">Detailed proposal with timeline and cost breakdown</p>
            </div>
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Execution</h3>
              <p className="text-gray-300 text-sm">Professional execution with minimal business disruption</p>
            </div>
            <div className="text-center">
              <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-bsr-white font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-bsr-white mb-2">Completion</h3>
              <p className="text-gray-300 text-sm">Final inspection and handover with warranty</p>
            </div>
          </div>

          {/* CTA after Process */}
          <div className="text-center mt-12">
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Ready to Start Your Commercial Project?
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get your free site survey and detailed commercial quote - no obligations, just expert advice
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
              Our <span className="text-bsr-highlight">Commercial Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive decorating solutions for all types of commercial properties across Devon
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
              Why Choose <span className="text-bsr-highlight">BSR for Your Business</span>
            </h2>
            <p className="text-xl text-gray-300">
              20 years of commercial decorating excellence across Devon&apos;s business sector
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
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Transform Your Business Space Today
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Join hundreds of businesses across Devon who trust BSR for their commercial decorating needs
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={openQuoteModal}
                  className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Get Your Free Quote</span>
                </button>
                <button
                  onClick={openQuoteModal}
                  className="border-2 border-bsr-yellow text-bsr-yellow hover:bg-bsr-yellow hover:text-bsr-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Call Now: 01626 911236</span>
                </button>
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
              Commercial <span className="text-bsr-highlight">Service Coverage</span>
            </h2>
            <p className="text-xl text-gray-300">
              Serving businesses across South East Devon from our Dawlish headquarters
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {coverageAreas.map((area, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-4 text-center transition-all duration-300 hover:transform hover:scale-105 ${
                  area.type === 'HQ' 
                    ? 'bg-bsr-highlight text-bsr-white' 
                    : area.type === 'main'
                    ? 'bg-bsr-gray border border-bsr-gray-light text-bsr-white hover:border-bsr-highlight'
                    : 'bg-bsr-black border border-bsr-gray-light text-gray-300 hover:border-bsr-yellow'
                }`}
              >
                <h3 className={`font-semibold mb-1 ${area.type === 'HQ' ? 'text-lg' : 'text-base'}`}>
                  {area.area}
                </h3>
                <p className={`text-xs ${area.type === 'HQ' ? 'text-bsr-white/90' : area.type === 'main' ? 'text-gray-300' : 'text-gray-400'}`}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm">
              <span className="text-bsr-highlight font-semibold">HQ</span> - Full services & rapid response • 
              <span className="text-bsr-white font-semibold"> Main Areas</span> - Complete commercial services • 
              <span className="text-bsr-yellow font-semibold"> Larger Projects</span> - Multi-property & industrial
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects 
        category="commercial"
        title="Featured Commercial Projects"
        subtitle="Explore our professional commercial decorating projects - from office transformations to large-scale property renovations"
      />

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Commercial Decorating <span className="text-bsr-highlight">FAQs</span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our commercial decorating services across Devon
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-bsr-black border border-bsr-gray-light rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bsr-gray-light transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-bsr-white pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp size={20} className="text-bsr-highlight flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA after FAQs */}
          <div className="text-center mt-12">
            <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-3">
                Still Have Questions About Your Commercial Project?
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get expert advice and a free consultation for your business decorating needs
              </p>
              <button
                onClick={openQuoteModal}
                className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Get Your Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-4">
            Ready to Transform Your Business Space?
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Join hundreds of businesses across Devon who trust BSR for professional commercial decorating with minimal disruption
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openQuoteModal}
              className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Get Free Commercial Quote</span>
            </button>
            <Link
              href="/portfolio"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
          <p className="text-bsr-white/80 text-sm mt-4">
            Free site surveys • No obligation quotes • 20 years commercial experience
          </p>
        </div>
      </section>
    </div>
  );
}
