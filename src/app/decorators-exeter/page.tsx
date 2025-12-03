import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero';
import FeaturedProjects from '@/components/FeaturedProjects';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Decorators in Exeter | Professional Painters & Decorators | BSR Decorating',
  description: 'Looking for decorators in Exeter? BSR Decorating offers professional painting & decorating services. 20+ years experience, free quotes. Call 01626 911236.',
  keywords: 'decorators in exeter, decorators exeter, painter decorator exeter, painting and decorating exeter, exeter decorators, exeter painters',
  openGraph: {
    title: 'Professional Decorators in Exeter - BSR Decorating',
    description: 'Expert decorators serving Exeter and surrounding areas. Domestic & commercial painting specialists with 20+ years experience.',
    type: 'website',
    url: 'https://www.bsrdecorating.co.uk/decorators-exeter'
  },
  alternates: {
    canonical: 'https://www.bsrdecorating.co.uk/decorators-exeter'
  }
};

export default function DecoratorsExeterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating - Exeter",
    "description": "Professional decorators in Exeter offering painting and decorating services",
    "url": "https://www.bsrdecorating.co.uk/decorators-exeter",
    "telephone": "01626911236",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Exeter",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.7184,
      "longitude": -3.5339
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Exeter"
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
      title: "Interior Painting",
      description: "Transform your Exeter home with our professional interior painting service",
      features: ["Free colour consultation", "Eco-friendly paints", "Minimal disruption", "Clean & tidy service"]
    },
    {
      title: "Exterior Painting",
      description: "Weather-resistant exterior painting perfect for Exeter's climate",
      features: ["Weatherproofing", "Scaffold included", "10-year guarantee", "Heritage colours available"]
    },
    {
      title: "Commercial Decorating",
      description: "Professional commercial decorating for Exeter businesses",
      features: ["Out-of-hours work", "Minimal disruption", "Health & safety compliant", "Competitive rates"]
    },
    {
      title: "Heritage Properties",
      description: "Specialist decorating for Exeter's period and listed buildings",
      features: ["Traditional techniques", "Breathable paints", "Conservation experience", "Listed building approved"]
    }
  ];

  const areas = [
    "St Leonards", "Heavitree", "Whipton", "Pinhoe", 
    "Topsham", "Countess Wear", "Alphington", "Marsh Barton",
    "Pennsylvania", "St Thomas", "Exwick", "City Centre"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        <ServiceHero
          title="Professional Decorators in Exeter"
          subtitle="Transform your property with Exeter's trusted painting & decorating specialists"
          description="With over 20 years of experience serving Exeter and surrounding areas, BSR Decorating delivers exceptional quality for both domestic and commercial projects. From city centre offices to suburban homes, we're your local decorating experts."
          image="/gallery/external/victorian-exeter-restoration.jpeg"
        />

        {/* Why Choose BSR in Exeter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bsr-white mb-4">
                Why Choose BSR <span className="text-bsr-highlight">Decorators in Exeter</span>
              </h2>
              <p className="text-xl text-gray-300">
                Exeter's trusted choice for professional painting & decorating since 2004
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Local Exeter Team</h3>
                <p className="text-gray-300 text-sm">Based nearby, we know Exeter properties inside out</p>
              </div>
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">20+ Years Experience</h3>
                <p className="text-gray-300 text-sm">Trusted by hundreds of Exeter homeowners</p>
              </div>
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Fast Response</h3>
                <p className="text-gray-300 text-sm">Quick quotes and flexible scheduling</p>
              </div>
              <div className="text-center">
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-bsr-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-bsr-white mb-2">Fully Insured</h3>
                <p className="text-gray-300 text-sm">Complete peace of mind guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bsr-white mb-4">
                Decorating Services <span className="text-bsr-highlight">in Exeter</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive painting & decorating solutions for every Exeter property
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
                Areas We Cover <span className="text-bsr-highlight">in Exeter</span>
              </h2>
              <p className="text-xl text-gray-300">
                Providing decorating services across all Exeter neighbourhoods
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
                Plus all surrounding areas within 15 miles of Exeter city centre
              </p>
              <Link href="/areas/exeter" className="text-bsr-highlight hover:text-bsr-yellow transition-colors duration-200 font-semibold">
                View full Exeter service details →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <FeaturedProjects 
          category="exeter"
          title="Recent Exeter Projects"
          subtitle="See our latest decorating transformations across Exeter"
        />

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-bsr-white mb-6">
                  Get Your Free <span className="text-bsr-highlight">Exeter Quote</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your Exeter property? Get in touch today for your free, no-obligation quote. 
                  We typically respond within 24 hours and can often visit your property the same week.
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
                        Exeter & 15 mile radius
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-bsr-highlight" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">Response time</p>
                      <p className="text-xl font-semibold text-bsr-white">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bsr-gray rounded-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Exeter's Choice for Quality Decorating
            </h2>
            <p className="text-xl text-bsr-white mb-8 opacity-90">
              Join hundreds of satisfied customers across Exeter who trust BSR Decorating
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