'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero';
import FeaturedProjects from '@/components/FeaturedProjects';
import ContactForm from '@/components/ContactForm';

export default function DecoratorsTorquayPage() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Torquay",
    "description": "Professional decorators in Torquay offering painting and decorating services",
    "url": "https://www.bsrdecorating.co.uk/decorators-torquay",
    "telephone": "01626911236",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Torquay"
      },
      {
        "@type": "City",
        "name": "Paignton"
      },
      {
        "@type": "City",
        "name": "Brixham"
      }
    ],
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ]
  };

  const services = [
    {
      title: "Coastal Property Specialist",
      description: "Expert decorating for Torquay's seafront and coastal properties",
      features: ["Salt-resistant paints", "Weather protection", "Marine-grade materials", "Balcony restoration"]
    },
    {
      title: "Holiday Let Decorating",
      description: "Quick turnaround decorating for Torquay's holiday rental properties",
      features: ["Fast completion", "Durable finishes", "Neutral schemes", "Between-booking service"]
    },
    {
      title: "Hotel & Guest House",
      description: "Commercial decorating for Torquay's hospitality sector",
      features: ["Minimal disruption", "Off-season scheduling", "Fire-rated paints", "Reception areas"]
    },
    {
      title: "Victorian Villa Restoration",
      description: "Specialist decorating for Torquay's period properties",
      features: ["Heritage colours", "Traditional techniques", "Ornate details", "Conservation approved"]
    }
  ];

  const areas = [
    "Torre", "Wellswood", "Babbacombe", "St Marychurch",
    "Cockington", "Shiphay", "Chelston", "Livermead",
    "Preston", "Paignton", "Brixham", "Watcombe"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        <ServiceHero
          title="Professional Decorators in Torquay"
          subtitle="Transform your property with Torbay's trusted painting & decorating specialists"
          description="Serving Torquay, Paignton, and Brixham for over 20 years, BSR Decorating specialises in coastal properties, holiday lets, and Victorian villa restoration. From seafront apartments to period homes, we're your local Torbay decorating experts."
          image="/gallery/external/torquay-seafront-property.jpeg"
        />

        {/* Why Choose BSR in Torquay */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bsr-white mb-4">
                Why Choose BSR <span className="text-bsr-highlight">Decorators in Torquay</span>
              </h2>
              <p className="text-xl text-gray-300">
                Torbay's trusted choice for professional painting & decorating
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Coastal Expertise</h3>
                <p className="text-gray-300 text-sm">Specialists in seafront & coastal property decoration</p>
              </div>
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Holiday Let Pros</h3>
                <p className="text-gray-300 text-sm">Quick turnarounds for rental properties</p>
              </div>
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Flexible Timing</h3>
                <p className="text-gray-300 text-sm">Work around your bookings & schedule</p>
              </div>
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Weather Resistant</h3>
                <p className="text-gray-300 text-sm">Marine-grade paints for coastal conditions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bsr-white mb-4">
                Decorating Services <span className="text-bsr-highlight">in Torquay</span>
              </h2>
              <p className="text-xl text-gray-300">
                Specialist painting & decorating for Torbay's unique properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-300">
                  <h3 className="text-xl font-semibold text-bsr-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
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

        {/* Areas Covered */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bsr-white mb-4">
                Areas We Cover <span className="text-bsr-highlight">in Torbay</span>
              </h2>
              <p className="text-xl text-gray-300">
                Providing decorating services across Torquay, Paignton & Brixham
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-bsr-black border border-bsr-gray-light rounded-lg p-4 text-center hover:border-bsr-highlight transition-all duration-300">
                  <p className="text-bsr-white font-medium">{area}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-300 mb-4">
                Covering the entire English Riviera and surrounding areas
              </p>
              <Link href="/areas/torquay" className="text-bsr-highlight hover:text-bsr-yellow transition-colors duration-200 font-semibold">
                View full Torquay service details →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <FeaturedProjects 
          category="torquay"
          title="Recent Torquay Projects"
          subtitle="See our latest decorating transformations across Torbay"
        />

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-bsr-white mb-6">
                  Get Your Free <span className="text-bsr-highlight">Torquay Quote</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your Torquay property? Whether it's a seafront apartment, holiday let, or period home, 
                  get in touch today for your free, no-obligation quote. We understand the unique challenges of coastal decorating.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-bsr-highlight" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Call us directly</p>
                      <a href="tel:01626911236" className="text-xl font-semibold text-bsr-white hover:text-bsr-highlight transition-colors">
                        01626 911236
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-bsr-highlight" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Serving</p>
                      <p className="text-xl font-semibold text-bsr-white">
                        Torquay, Paignton & Brixham
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-bsr-highlight" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Specialist in</p>
                      <p className="text-xl font-semibold text-bsr-white">
                        Coastal & holiday properties
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bsr-gray rounded-lg p-8">
                {contactFormSubmitted ? (
                  <div className="text-center py-8">
                    <p className="text-bsr-highlight text-lg font-semibold mb-2">Thank you!</p>
                    <p className="text-gray-300">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <ContactForm onSuccess={() => setContactFormSubmitted(true)} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Torquay's Trusted Decorating Professionals
            </h2>
            <p className="text-xl text-bsr-white mb-8 opacity-90">
              From seafront apartments to Victorian villas - we've got Torbay covered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01626911236"
                className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-8 py-3 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call: 01626 911236</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-3 rounded-md font-semibold transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}