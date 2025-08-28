'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  ctaText: string;
  highlightColor: string;
}

const ServiceCard = ({ title, description, features, image, href, ctaText, highlightColor }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 group"
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={title.includes('Home') ? '/images/Home decorating image.jpeg' : '/images/Business decorating image.jpeg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-bsr-white mb-3 group-hover:text-bsr-highlight transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check size={18} className="text-bsr-highlight mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={href}
          className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-6 py-3 rounded-lg font-medium transition-all duration-200 group-hover:scale-105 transform shadow-lg hover:shadow-xl"
        >
          <span>{ctaText}</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
