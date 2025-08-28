import Link from 'next/link';
import { Check, Star, Phone, Clock, Shield, Palette } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero';

export default function DomesticPage() {
  const services = [
    {
      title: "Interior Painting",
      description: "Professional interior painting for all rooms including living rooms, bedrooms, kitchens, and bathrooms.",
      features: ["Color consultation", "Surface preparation", "Multiple coats", "Clean finish"]
    },
    {
      title: "Exterior Painting",
      description: "Exterior house painting to protect and enhance your property's curb appeal.",
      features: ["Weather-resistant paints", "Surface preparation", "Scaffolding if needed", "Long-lasting finish"]
    },
    {
      title: "Wallpaper Hanging",
      description: "Expert wallpaper installation and removal services for any room in your home.",
      features: ["Pattern matching", "Seamless installation", "Removal services", "Wall preparation"]
    },
    {
      title: "Decorating Consultation",
      description: "Professional advice on colors, finishes, and design to achieve your perfect look.",
      features: ["Color schemes", "Material selection", "Style advice", "Budget planning"]
    }
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Fully Insured",
      description: "Complete peace of mind with full public liability insurance"
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Scheduling",
      description: "Work around your schedule with convenient appointment times"
    },
    {
      icon: <Palette size={32} />,
      title: "Color Expertise",
      description: "Professional color consultation to achieve your perfect look"
    },
    {
      icon: <Star size={32} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee"
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Domestic Decorating Services"
        subtitle="Transform your home with our professional decorating services in Dawlish, Devon"
        description="From single room makeovers to complete house renovations, we provide exceptional quality workmanship with attention to detail that will make your home truly special."
        image="/domestic-hero.jpg"
      />

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bsr-white mb-4">
              Our <span className="text-bsr-highlight">Domestic Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive decorating solutions for every room in your home
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
              Why Choose <span className="text-bsr-highlight">BSR for Your Home</span>
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
            <Link
              href="/contact"
              className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Get Free Quote</span>
            </Link>
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
