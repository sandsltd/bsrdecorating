'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useState, useEffect, useMemo } from 'react';

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();
  
  // Array of background images to cycle through - memoized to prevent re-renders
  const backgroundImages = useMemo(() => [
    "/heroloop/PHOTO-2025-09-03-11-16-34.JPG",
    "/heroloop/f93bd364-aa09-43a8-b158-b11ae1c1f4da.JPG",
    "/heroloop/e9b8ed9c-03ff-4b21-aa11-2752d032f63d.JPG",
    "/heroloop/e3fc38b1-946c-4f74-a90e-26e632b334df.JPG",
    "/heroloop/bd646138-e26d-4f6c-b26a-dbde73abd379.JPG",
    "/heroloop/bb3839b2-e55b-4e9f-97b3-d4b5be1e6205.JPG",
    "/heroloop/a6a396d6-7850-461c-9cda-61aeacc6a19a.JPG",
    "/heroloop/05832a9d-5af1-438a-ba60-1d53f8fa141c.JPG",
    "/heroloop/83b1ceef-b211-4a06-ba2b-c71a0d517a17.JPG",
    "/heroloop/5fecae60-ae8a-4ff9-bc67-d79c0447e195.JPG",
    "/heroloop/01dcd149-3c15-4565-b78f-f272cbd9f086.JPG",
    "/heroloop/0be4ca73-ac98-48de-97d2-dded0ac3511f.JPG"
  ], []);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Preload next image for smoother transitions
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
    const img = new window.Image();
    img.src = backgroundImages[nextIndex];
  }, [currentImageIndex, backgroundImages]);
  
  return (
    <section className="relative min-h-screen bg-bsr-black flex items-center justify-center pt-28 md:pt-16 lg:pt-28">
      {/* Image Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => {
          // Only render current and adjacent images for better performance
          const shouldRender = index === 0 || index === currentImageIndex || index === (currentImageIndex + 1) % backgroundImages.length;

          return shouldRender ? (
            <Image
              key={image}
              src={image}
              alt="BSR Decorating Professional Work"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                objectPosition: 'center center'
              }}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              quality={75}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          ) : null;
        })}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-bsr-black/40 md:bg-bsr-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Mobile: Separate sections, Desktop: Single container */}
          <div className="md:backdrop-blur-md md:bg-bsr-black/20 md:rounded-2xl md:p-6 lg:p-8 md:border md:border-bsr-gray-light/30 md:shadow-2xl">
            {/* Rating Badge */}
            <a
              href="https://share.google/2x9XTKoO4xSoPgnC6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-bsr-black/70 backdrop-blur-sm border border-bsr-highlight rounded-full px-4 py-2 mb-8 shadow-lg hover:bg-bsr-black/80 hover:border-bsr-yellow transition-all duration-200 hover:shadow-xl"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-bsr-yellow fill-current" />
                ))}
              </div>
              <span className="text-bsr-highlight font-semibold">5.0 on Google</span>
            </a>

            {/* Main Headline */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bsr-white leading-tight" style={{ filter: 'drop-shadow(0 0 16px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 8px rgba(0, 0, 0, 0.6))' }}>
                Welcome to
                <br />
                <span className="text-bsr-highlight">BSR Decorating</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="text-xl text-bsr-highlight font-semibold" style={{ filter: 'drop-shadow(0 0 16px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 8px rgba(0, 0, 0, 0.6))' }}>
                Expert Commercial & Domestic Decorating Services
              </p>
            </div>

            {/* Description */}
            <div className="bg-bsr-black/60 backdrop-blur-sm rounded-lg p-4 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Our experienced team of professional decorators brings over 20 years of expertise to every project. 
                We specialise in commercial and domestic interior and exterior painting, wallpaper installation, 
                plus complete property transformations. Quality workmanship and exceptional results guaranteed.
              </p>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-bsr-black/70 backdrop-blur-sm rounded-lg p-4 border border-bsr-gray-light/50 md:border-bsr-gray-light shadow-lg">
                <div className="bg-bsr-highlight p-2 rounded-lg">
                  <Phone size={20} className="text-bsr-white" />
                </div>
                <div>
                  <p className="font-semibold text-bsr-white">Professional Service</p>
                  <p className="text-sm text-gray-200 md:text-gray-300">Direct contact with our team</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-bsr-black/70 backdrop-blur-sm rounded-lg p-4 border border-bsr-gray-light/50 md:border-bsr-gray-light shadow-lg">
                <div className="bg-bsr-highlight p-2 rounded-lg">
                  <Star size={20} className="text-bsr-white" />
                </div>
                <div>
                  <p className="font-semibold text-bsr-white">Quality Guaranteed</p>
                  <p className="text-sm text-gray-200 md:text-gray-300">Satisfaction or we fix it</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Work Video with CTA Buttons */}
          <div className="relative flex flex-col space-y-8">
            {/* Video Container */}
            <div className="relative backdrop-blur-md bg-bsr-black/30 md:bg-bsr-black/10 rounded-3xl p-4 border border-bsr-gray-light/40 md:border-bsr-gray-light/20 shadow-2xl">
              {/* Main Video Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <video
                  className="w-full h-auto object-cover aspect-[4/5]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-bsr-black/90 backdrop-blur-sm rounded-full px-4 py-2 border border-bsr-yellow">
                <span className="text-bsr-yellow font-semibold text-sm">20+ Years Experience</span>
              </div>

              {/* BSR Logo Badge */}
              <div className="absolute -bottom-4 -left-4">
                <Image
                  src="/Logos/Logo white.png"
                  alt="BSR Decorating Logo"
                  width={120}
                  height={120}
                  className="h-24 w-24 drop-shadow-lg"
                  quality={80}
                />
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
                href="/portfolio"
                className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <span>Check Our Work</span>
                <ArrowRight size={20} />
              </Link>
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
