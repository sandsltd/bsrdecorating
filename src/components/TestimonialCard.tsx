'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard = ({ name, location, rating, text, service }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-300 group"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote size={24} className="text-bsr-highlight" />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} className="text-bsr-highlight fill-current" />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-400">({rating}.0)</span>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 mb-4 leading-relaxed italic">
        "{text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-bsr-white">{name}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
        <span className="text-xs bg-bsr-highlight text-bsr-white px-2 py-1 rounded-full">
          {service}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
