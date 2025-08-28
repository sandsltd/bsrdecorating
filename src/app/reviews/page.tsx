'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, Award, Users } from 'lucide-react';

export default function ReviewsPage() {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2024-01-15",
      text: "BSR Decorating transformed our living room completely. The team was professional, clean, and the quality of work was exceptional. They took the time to understand our vision and delivered beyond our expectations. Highly recommend!",
      project: "Living Room Transformation"
    },
    {
      id: 2,
      name: "Mike Thompson",
      location: "Teignmouth",
      rating: 5,
      service: "commercial",
      date: "2024-01-10",
      text: "Outstanding service for our office renovation. The team completed the project on time and within budget. They worked around our business hours to minimize disruption. Will definitely use BSR again for future projects.",
      project: "Office Renovation"
    },
    {
      id: 3,
      name: "Emma Davis",
      location: "Exmouth",
      rating: 5,
      service: "domestic",
      date: "2024-01-05",
      text: "Fantastic attention to detail and great communication throughout the project. Our kitchen looks amazing! The color consultation was spot on and the finish is perfect. Thank you BSR!",
      project: "Kitchen Makeover"
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Newton Abbot",
      rating: 5,
      service: "commercial",
      date: "2023-12-20",
      text: "Professional service from start to finish. The team handled our retail space renovation with minimal disruption to our business. The quality of work is outstanding and the project was completed ahead of schedule.",
      project: "Retail Space Painting"
    },
    {
      id: 5,
      name: "Lisa Brown",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2023-12-15",
      text: "Excellent service! The team was punctual, professional, and the quality of work was top-notch. They transformed our bedroom into a beautiful, relaxing space. Highly recommend BSR Decorating.",
      project: "Bedroom Refresh"
    },
    {
      id: 6,
      name: "James Miller",
      location: "Exeter",
      rating: 5,
      service: "commercial",
      date: "2023-12-10",
      text: "Large-scale warehouse painting project completed to the highest standard. The team was efficient, safety-conscious, and delivered excellent results. Great value for money and professional service.",
      project: "Warehouse Painting"
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedService === 'all') return true;
    return review.service === selectedService;
  });

  const stats = [
    { icon: <Star size={32} />, value: "5.0", label: "Average Rating" },
    { icon: <Users size={32} />, value: "100+", label: "Happy Customers" },
    { icon: <ThumbsUp size={32} />, value: "98%", label: "Satisfaction Rate" },
    { icon: <Award size={32} />, value: "10+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Customer <span className="text-bsr-highlight">Reviews</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experience with BSR Decorating
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-bsr-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-bsr-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedService === service.id
                    ? 'bg-bsr-highlight text-bsr-white'
                    : 'bg-bsr-gray text-gray-300 hover:text-bsr-highlight border border-bsr-gray-light'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6 hover:border-bsr-highlight transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={24} className="text-bsr-highlight" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-bsr-highlight fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">({review.rating}.0)</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Project Info */}
                <div className="mb-4">
                  <p className="text-sm text-bsr-highlight font-medium">{review.project}</p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-bsr-white">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                  <span className="text-xs bg-bsr-highlight text-bsr-white px-2 py-1 rounded-full capitalize">
                    {review.service}
                  </span>
                </div>

                {/* Date */}
                <div className="mt-3 pt-3 border-t border-bsr-gray-light">
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Get your free quote today and experience the BSR difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </a>
            <a
              href="/gallery"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
