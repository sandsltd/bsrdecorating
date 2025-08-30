'use client';

import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ServiceHero = ({ title, subtitle, description, image }: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center center'
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-bsr-black/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#E801F8_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-bsr-highlight mb-4 font-semibold drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          {subtitle}
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
