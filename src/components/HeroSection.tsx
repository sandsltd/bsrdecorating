'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="relative min-h-screen bg-bsr-black flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-bsr-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="backdrop-blur-sm bg-bsr-black/20 rounded-2xl p-6 lg:p-8 border border-bsr-gray-light/30">
            {/* Rating Badge */}
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-4 py-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-bsr-yellow fill-current" />
                ))}
              </div>
              <span className="text-bsr-highlight font-semibold">5.0 on Google (9 reviews)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bsr-white mb-6 leading-tight">
              Meet Ben
              <br />
              <span className="text-bsr-highlight">Your Local Decorator</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-bsr-highlight font-semibold mb-6">
              Professional Decorating Services in Dawlish & Devon
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Hi, I&apos;m Ben Rourke, owner of BSR Decorating. With over 15 years of experience, I specialize in 
              interior and exterior painting, wallpaper hanging, and complete home transformations. 
              I bring professionalism, quality, and personal service to every project.
            </p>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-bsr-gray bg-opacity-50 rounded-lg p-4 border border-bsr-gray-light">
                <div className="bg-bsr-highlight p-2 rounded-lg">
                  <Phone size={20} className="text-bsr-white" />
                </div>
                <div>
                  <p className="font-semibold text-bsr-white">Personal Service</p>
                  <p className="text-sm text-gray-300">Direct contact with Ben</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-bsr-gray bg-opacity-50 rounded-lg p-4 border border-bsr-gray-light">
                <div className="bg-bsr-highlight p-2 rounded-lg">
                  <Star size={20} className="text-bsr-white" />
                </div>
                <div>
                  <p className="font-semibold text-bsr-white">Quality Guaranteed</p>
                  <p className="text-sm text-gray-300">Satisfaction or we fix it</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openQuoteModal}
                className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} />
              </button>
              <Link
                href="/gallery"
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <span>Check Our Work</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Side - Ben's Image with Professional Styling */}
          <div className="relative flex items-center justify-center">
            <div className="relative backdrop-blur-sm bg-bsr-black/10 rounded-3xl p-4 border border-bsr-gray-light/20">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/About Ben.jpg"
                  alt="Ben Rourke - BSR Decorating"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/60 via-transparent to-transparent"></div>
              </div>
              

              
              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-bsr-black/90 backdrop-blur-sm rounded-full px-4 py-2 border border-bsr-yellow">
                <span className="text-bsr-yellow font-semibold text-sm">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowRight size={24} className="text-bsr-highlight rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
