'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ServiceAreaMap from '@/components/ServiceAreaMap';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["07805 469770"],
      link: "tel:07805469770"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@bsrdecorating.co.uk"],
      link: "mailto:info@bsrdecorating.co.uk"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: ["Dawlish, Devon", "Serving the local area"],
      link: null
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Get in <span className="text-bsr-highlight">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a free, no-obligation quote and let&apos;s discuss your project.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Send us a <span className="text-bsr-highlight">Message</span>
            </h2>
            {isSubmitted ? (
              <div className="bg-bsr-gray border border-bsr-highlight rounded-lg p-8 text-center">
                <CheckCircle size={48} className="text-bsr-highlight mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bsr-white mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <ContactForm onSuccess={() => setIsSubmitted(true)} />
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-bsr-white mb-6">
              Contact <span className="text-bsr-highlight">Information</span>
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-bsr-highlight w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-bsr-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bsr-white mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">
                        {info.link ? (
                          <a
                            href={info.link}
                            className="hover:text-bsr-highlight transition-colors duration-200"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-lg font-semibold text-bsr-white mb-3">Why Choose BSR Decorating?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Free, no-obligation quotes</li>
                <li>• Fully insured and qualified</li>
                <li>• Local, reliable service</li>
                <li>• Competitive pricing</li>
                <li>• Quality workmanship guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bsr-white mb-4">
              Service <span className="text-bsr-highlight">Area</span>
            </h2>
            <p className="text-xl text-gray-300">
              We serve Dawlish and the surrounding areas in Devon
            </p>
          </div>
          
          <ServiceAreaMap />
        </div>
      </section>
    </div>
  );
}
