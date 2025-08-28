'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-bsr-black flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Rating Badge */}
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-4 py-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-bsr-highlight fill-current" />
                ))}
              </div>
              <span className="text-bsr-highlight font-semibold">5.0 on Google</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bsr-white mb-6 leading-tight">
              Professional
              <br />
              <span className="text-bsr-highlight">Decorating Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-bsr-highlight font-semibold mb-6">
              Serving Dawlish & Devon Since 2014
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Specialists in interior and exterior painting, with additional services including wallpaper hanging, 
              color consultation, and complete home transformations. Professional service at your location.
            </p>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-bsr-gray bg-opacity-50 rounded-lg p-4">
                <div className="bg-bsr-highlight p-2 rounded-lg">
                  <Phone size={20} className="text-bsr-white" />
                </div>
                <div>
                  <p className="font-semibold text-bsr-white">Mobile Service</p>
                  <p className="text-sm text-gray-300">We come to you across Devon</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-bsr-gray bg-opacity-50 rounded-lg p-4">
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
              <Link
                href="/contact"
                className="bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/gallery"
                className="bg-bsr-gray hover:bg-bsr-gray-light text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 border border-bsr-gray-light hover:border-bsr-highlight"
              >
                <span>Check Our Work</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Side - Large BSR Logo */}
          <div className="relative flex items-center justify-center">
            <div className="bg-bsr-gray bg-opacity-30 rounded-3xl p-12 border border-bsr-gray-light backdrop-blur-sm">
              <div className="text-center">
                <Image
                  src="/Logos/BSR Logo-4.png"
                  alt="BSR Decorating Ltd"
                  width={500}
                  height={200}
                  className="h-40 w-auto mx-auto mb-6"
                  priority
                />
                <h3 className="text-2xl font-bold text-bsr-white mb-3">Transform Your Space</h3>
                <p className="text-gray-300 text-lg">Professional decorating services for homes and businesses</p>
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
