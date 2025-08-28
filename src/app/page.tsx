import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import GalleryPreview from '@/components/GalleryPreview';

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Dawlish",
      rating: 5,
      text: "BSR Decorating transformed our living room completely. Professional, clean, and excellent quality work. Highly recommend!",
      service: "Domestic"
    },
    {
      id: 2,
      name: "Mike Thompson",
      location: "Teignmouth",
      rating: 5,
      text: "Outstanding service for our office renovation. Completed on time and within budget. Will definitely use again.",
      service: "Commercial"
    },
    {
      id: 3,
      name: "Emma Davis",
      location: "Exmouth",
      rating: 5,
      text: "Fantastic attention to detail and great communication throughout the project. Our kitchen looks amazing!",
      service: "Domestic"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Split */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-black to-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-bsr-white mb-6">
              Professional <span className="text-bsr-highlight">Decorating Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you need domestic or commercial decorating, we provide exceptional quality workmanship 
              with attention to detail that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Domestic Decorating */}
            <ServiceCard
              title="Home Decorating"
              description="Transform your home with our professional domestic decorating services. From single rooms to complete house renovations."
              features={[
                "Interior & exterior painting",
                "Wallpaper hanging & removal",
                "Preparation & finishing",
                "Color consultation",
                "Free quotes & estimates"
              ]}
              image="/domestic-preview.jpg"
              href="/domestic"
              ctaText="View Domestic Services"
              highlightColor="bsr-highlight"
            />

            {/* Commercial Decorating */}
            <ServiceCard
              title="Commercial Decorating"
              description="Professional commercial decorating for offices, retail spaces, and industrial properties. Minimal disruption, maximum impact."
              features={[
                "Office & retail spaces",
                "Industrial & warehouse",
                "Out-of-hours working",
                "Health & safety compliance",
                "Project management"
              ]}
              image="/commercial-preview.jpg"
              href="/commercial"
              ctaText="View Commercial Services"
              highlightColor="bsr-highlight"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Why Choose <span className="text-bsr-highlight">BSR Decorating</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-2">Quality Workmanship</h3>
              <p className="text-gray-300">
                We take pride in every project, ensuring the highest standards of workmanship and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-2">Local & Reliable</h3>
              <p className="text-gray-300">
                Based in Dawlish, Devon, we're your local decorating experts with a reputation for reliability and trust.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-2">Competitive Pricing</h3>
              <p className="text-gray-300">
                Fair, transparent pricing with no hidden costs. We provide detailed quotes and stick to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              What Our <span className="text-bsr-highlight">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>View All Reviews</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-bsr-white mb-10 opacity-90">
            Get your free, no-obligation quote today and see how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
