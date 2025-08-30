'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, CheckCircle, Phone, Heart, Calendar, Clock } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import GalleryPreview from '@/components/GalleryPreview';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function Home() {
  const { openQuoteModal } = useQuoteModal();
  const testimonials = [
    {
      id: 1,
      name: "Duncan Attwood",
      location: "Dawlish",
      rating: 5,
      text: "My thanks go to Ben at BSR Decorating. I need to keep our fit20 studio looking its best and after 4 years thought it was time to redecorate. Ben came out promptly to assess the work that was needed and to match the paint we already had, which is important to us as a franchise to ensure everything is on brand.",
      service: "Commercial"
    },
    {
      id: 2,
      name: "Jonathan Downer",
      location: "Dawlish",
      rating: 5,
      text: "Ben carried out a significant amount of work at our property - exterior and internal decorating for a large Victorian property. From the initial response to our enquiry, through providing a clear and fair quote, to performance of the work itself, Ben has been exceptional.",
      service: "Domestic"
    },
    {
      id: 3,
      name: "Laurence Blyth",
      location: "Dawlish",
      rating: 5,
      text: "BSR Decorating painted the outside of our house. They did a cracking job. Great to come back from work and find the job done, and no mess.",
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
                "Colour consultation",
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
              buttonStyle="blue"
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
                Based in Dawlish, Devon, we&apos;re your local decorating experts with a reputation for reliability and trust.
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

      {/* Service Area Map */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-black to-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Service Area</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Covering <span className="text-bsr-highlight">South East Devon</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Based in Dawlish, we provide professional decorating services across Devon and surrounding areas
            </p>
          </div>

          <ServiceAreaMap />
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
              Don&apos;t just take our word for it - hear from our satisfied customers
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

      {/* Work Showcase Videos */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Our Work</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              See Our <span className="text-bsr-highlight">Projects in Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our professional decorating projects come to life with transformation videos and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Video 1 - Native video */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/tiktok/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Video 2 - Native video */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/tiktok/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Video 3 - Native video */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/tiktok/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Community & Charity Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-black to-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Community</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Supporting Our <span className="text-bsr-highlight">Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At BSR Decorating, we believe in giving back to our community and supporting causes that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Charity Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-bsr-highlight p-3 rounded-full">
                  <Heart size={24} className="text-bsr-white" />
                </div>
                <h3 className="text-2xl font-bold text-bsr-white">2025 London Marathon for InFocus Charity</h3>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I was proud to stand at the start line of the 2025 London Marathon InFocus Charity to run in support of @infocus charity. 
                This incredible cause helps change lives, and every pound raised makes a real difference.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Running the London Marathon was not just about the physical challenge - it was about supporting a charity that makes a real impact 
                in people&apos;s lives. InFocus Charity does incredible work, and I was honoured to run in their support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Heart size={18} />
                  <span>Support the Cause</span>
          </a>
          <a
                  href="#"
                  className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Learn More About InFocus
                </a>
              </div>
            </div>

            {/* Charity Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Charity Run.jpg"
                  alt="Ben running for charity"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/60 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Charity Run 2.jpg"
                  alt="Ben supporting InFocus charity"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Latest Blog Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Latest from Our Blog</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Decorating <span className="text-bsr-highlight">Tips & Insights</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest decorating trends, tips, and project showcases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Latest Blog Post 1 */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
          <Image
                  src="/images/Home decorating image.jpeg"
                  alt="Top 5 Colour Trends for 2025"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-bsr-highlight text-bsr-white px-3 py-1 rounded-full text-sm font-medium">
                    Design Trends
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>15 Jan 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-bsr-white mb-3 group-hover:text-bsr-highlight transition-colors duration-200">
                  Top 5 Colour Trends for 2025
                </h3>
                <p className="text-gray-300 mb-4">
                  Discover the latest colour trends that are transforming homes across Devon this year.
                </p>
                <Link
                  href="/blog/top-5-colour-trends-2025"
                  className="inline-flex items-center space-x-2 text-bsr-highlight hover:text-[#d001e8] font-medium transition-colors duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Latest Blog Post 2 */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
          <Image
                  src="/images/About Ben.jpg"
                  alt="How to Prepare Your Home for Professional Decorating"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-bsr-highlight text-bsr-white px-3 py-1 rounded-full text-sm font-medium">
                    Tips & Advice
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>10 Jan 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-bsr-white mb-3 group-hover:text-bsr-highlight transition-colors duration-200">
                  How to Prepare Your Home for Professional Decorating
                </h3>
                <p className="text-gray-300 mb-4">
                  Essential tips to help you prepare your home before the decorators arrive.
                </p>
                <Link
                  href="/blog/prepare-home-professional-decorating"
                  className="inline-flex items-center space-x-2 text-bsr-highlight hover:text-[#d001e8] font-medium transition-colors duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Latest Blog Post 3 */}
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
          <Image
                  src="/images/Business decorating image.jpeg"
                  alt="Project Showcase: Victorian Property Transformation"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-bsr-highlight text-bsr-white px-3 py-1 rounded-full text-sm font-medium">
                    Project Showcase
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>10 Dec 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>7 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-bsr-white mb-3 group-hover:text-bsr-highlight transition-colors duration-200">
                  Victorian Property Transformation
                </h3>
                <p className="text-gray-300 mb-4">
                  A detailed look at our recent Victorian property renovation project.
                </p>
                <Link
                  href="/blog/victorian-property-transformation-showcase"
                  className="inline-flex items-center space-x-2 text-bsr-highlight hover:text-[#d001e8] font-medium transition-colors duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>View All Blog Posts</span>
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
            <button
              onClick={openQuoteModal}
              className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </button>
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
