'use client';

import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, Award, Users, ExternalLink } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';



export default function ReviewsPage() {
  const [selectedService, setSelectedService] = useState('all');
  const { openQuoteModal } = useQuoteModal();

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const reviews = [
    {
      id: 1,
      name: "Duncan Attwood",
      location: "Dawlish",
      rating: 5,
      service: "commercial",
      date: "2024-01-15",
      text: "My thanks go to Ben at BSR Decorating. I need to keep our fit20 studio looking its best and after 4 years thought it was time to redecorate. Ben came out promptly to assess the work that was needed and to match the paint we already had, which is important to us as a franchise to ensure everything is on brand. Whilst he was there, he also gave recommendations to modify certain areas to break up large areas of block colour, particularly around window frames. His quote was good and in line with our expectations. When it came to completing the work, he agreed to work around us to not impact our business operations. He advised that some of the areas may need additional coats where we had previously suffered from peeling paint and that he would be happy to re-visit and amend any areas as required. We were very pleased with the standard of his work, which he kept the studio clean, tidy and moved items and put them back as if he had never been. I would highly recommend Ben and BSR Decorating for any of your decorating needs!",
      project: "fit20 Studio Renovation"
    },
    {
      id: 2,
      name: "Jonathan Downer",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2023-12-20",
      text: "Ben carried out a significant amount of work at our property - exterior and internal decorating for a large Victorian property. From the initial response to our enquiry, through providing a clear and fair quote, to performance of the work itself, Ben has been exceptional. Nothing has been too much trouble, and Ben has been flexible with his approach and clear in his communications. We are thrilled with the finish that has been achieved, and the professional and friendly way in which it has been executed, on time and in budget. I have no hesitation in recommending BSR Decorating.",
      project: "Victorian Property Renovation"
    },
    {
      id: 3,
      name: "Laurence Blyth",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2023-10-15",
      text: "BSR Decorating painted the outside of our house. They did a cracking job. Great to come back from work and find the job done, and no mess.",
      project: "Exterior House Painting"
    },
    {
      id: 4,
      name: "Ian Bond",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2023-09-10",
      text: "Ben is simply fantastic. I had my home rewired. You can't see where it was chased out. He did much of the project management, coordinating with the plasterer and electricians.",
      project: "Home Rewiring & Decorating"
    },
    {
      id: 5,
      name: "Tina Savelle",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2023-08-20",
      text: "So helpful, came to our aid, when we had been let down by someone else! Ben is amazing, friendly, punctual, trustworthy, and his work is such a high quality with great attention to detail. We would definitely recommend Ben in a heartbeat - thank you",
      project: "Emergency Decorating Work"
    },
    {
      id: 6,
      name: "Lorelle Wallis",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2022-06-15",
      text: "Very pleased with the work done on our cottage, Ben was very fast and did such a good job and managed to fit us in around other jobs which we were extremely grateful for. Will absolutely be recommending him to friends and family",
      project: "Cottage Renovation"
    },
    {
      id: 7,
      name: "Craig Townsend",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2022-05-10",
      text: "Excellent service and professional finish in all areas. Looks fantastic",
      project: "Interior Decorating"
    },
    {
      id: 8,
      name: "Tom Irish",
      location: "Dawlish",
      rating: 5,
      service: "domestic",
      date: "2022-04-20",
      text: "Great service & fair price. Repairs to cracked render and full exterior paint. Very pleased with the result, have recommended to others and will definitely use Ben's services again",
      project: "Exterior Render & Paint"
    },
    {
      id: 9,
      name: "Exeter Kindness",
      location: "Exeter",
      rating: 5,
      service: "commercial",
      date: "2022-03-15",
      text: "Ben Rourke of BSR Decorating painted a 10m2 wall to provide a blank canvas for our large-scale mural in Central Exeter and painted a black strip at the base of the wall and alongside the stairwell. Quick turnaround and did all this in record time! Ben is highly knowledgeable about paint products and techniques and provided advice on materials and temperature required to ensure quick drying in cold weather. One of the most good-natured tradespeople in Exeter, always positive and reassuring, with a generous heart for arranging paint for the mural donated. Going the extra mile by covering up graffiti on the freshly painted wall and looking forward to BSR Decorating adding an anti-graffiti layer. Excellent job.",
      project: "Exeter Kindness Project"
    },
    {
      id: 10,
      name: "James Owens",
      location: "Local Guide",
      rating: 5,
      service: "commercial",
      date: "2025-01-15",
      text: "We used Bsr to revamp our business unit where we sorely needed an up scale our look bsr and the team went through every step with us and where professional from start to finish on time and clean throughout the process we wouldn't use anyone eles going forward",
      project: "Business Unit Revamp"
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedService === 'all') return true;
    return review.service === selectedService;
  });

  const stats = [
    { icon: <Star size={32} />, value: "5.0", label: "Average Rating" },
    { icon: <Users size={32} />, value: "10", label: "Google Reviews" },
    { icon: <ThumbsUp size={32} />, value: "100%", label: "Satisfaction Rate" },
    { icon: <Award size={32} />, value: "5*", label: "Star Rating" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BSR Decorating",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "BSR Decorating",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dawlish",
          "addressRegion": "Devon",
          "addressCountry": "GB"
        }
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Customer Reviews | BSR Decorating Testimonials - 5 Star Rated Decorators Devon</title>
        <meta name="description" content="Read genuine customer reviews for BSR Decorating. 5-star rated professional decorators with excellent testimonials from satisfied customers across Dawlish, Newton Abbot, Torquay, Exeter and Devon." />
        <meta name="keywords" content="BSR Decorating reviews, decorator testimonials Devon, 5 star decorators, customer feedback painting decorating, decorator reviews Dawlish Newton Abbot Torquay Exeter, professional decorator testimonials" />
        <meta property="og:title" content="Customer Reviews | BSR Decorating Devon" />
        <meta property="og:description" content="5-star customer reviews from satisfied clients across Devon" />
        <meta property="og:url" content="https://bsrdecorating.co.uk/reviews" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/Business decorating image.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Reviews | BSR Decorating Devon" />
        <meta name="twitter:description" content="5-star customer reviews from satisfied clients across Devon" />
        <meta name="twitter:image" content="/images/Business decorating image.jpeg" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Customer <span className="text-bsr-highlight">Reviews</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don&apos;t just take our word for it - hear from our satisfied customers about their experience with BSR Decorating
          </p>
          
          {/* Leave a Review Button */}
          <div className="mt-8">
            <a
              href="https://g.page/r/CavCrG_DSS5wEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#4285f4] hover:bg-[#3367d6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Star size={20} className="text-yellow-300" />
              <span>Leave Us a Google Review</span>
              <ExternalLink size={18} />
            </a>
            <p className="text-sm text-gray-400 mt-3">
              Share your experience and help others discover our services
            </p>
          </div>
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
                      <Star key={i} size={18} className="text-bsr-yellow fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">({review.rating}.0)</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
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
            <button
              onClick={openQuoteModal}
              className="bg-bsr-yellow text-bsr-black hover:bg-yellow-300 px-8 py-3 rounded-md font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
            </button>
            <Link
              href="/portfolio"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
