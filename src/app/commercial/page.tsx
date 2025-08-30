'use client';

import Link from 'next/link';
import { Check, Star, Phone, Clock, Shield, Building } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero';
import GalleryPreview from '@/components/GalleryPreview';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function CommercialPage() {
  const { openQuoteModal } = useQuoteModal();
  const services = [
    {
      title: "Office Decorating",
      description: "Professional office painting and decorating to create productive and welcoming work environments.",
      features: ["Minimal disruption", "Out-of-hours working", "Corporate colour schemes", "Durable finishes"]
    },
    {
      title: "Retail Space Painting",
      description: "Transform retail spaces with professional painting that enhances customer experience and brand image.",
      features: ["Brand colour matching", "High-traffic finishes", "Quick turnaround", "Minimal downtime"]
    },
    {
      title: "Industrial & Warehouse",
      description: "Specialized painting services for industrial facilities and warehouse spaces.",
      features: ["Industrial-grade paints", "Safety compliance", "Large-scale projects", "Durable coatings"]
    },
    {
      title: "Project Management",
      description: "Complete project management for large commercial decorating projects.",
      features: ["Timeline management", "Budget control", "Quality assurance", "Stakeholder communication"]
    }
  ];

  const benefits = [
    {
      icon: <Building size={32} />,
      title: "Commercial Expertise",
      description: "Specialized knowledge of commercial decorating requirements and regulations"
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Scheduling",
      description: "Work around your business hours with minimal disruption to operations"
    },
    {
      icon: <Shield size={32} />,
      title: "Fully Insured",
      description: "Complete commercial liability insurance for peace of mind"
    },
    {
      icon: <Star size={32} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties"
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Commercial Decorating Services"
        subtitle="Professional decorating solutions for businesses in Dawlish, Devon"
        description="From office renovations to retail space transformations, we provide commercial decorating services that enhance your business environment while minimizing disruption to your operations."
        image="/commercial-hero.jpg"
      />

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Our <span className="text-bsr-highlight">Commercial Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive decorating solutions for all types of commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-300">
                <h3 className="text-xl font-semibold text-bsr-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check size={16} className="text-bsr-highlight flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-bsr-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Commercial Gallery Preview */}
      <GalleryPreview 
        filterCategories={['Commercial', 'External']}
        title="Commercial Project Gallery"
        subtitle="View our professional commercial decorating projects including offices, retail spaces, and industrial properties"
      />

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-4">
            Ready to Transform Your Business Space?
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Get your free, no-obligation quote today and see how we can enhance your commercial property.
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
              href="/gallery"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
