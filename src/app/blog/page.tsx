'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Colour Trends for 2025",
      excerpt: "Discover the latest colour trends that are transforming homes across Devon this year, from calming neutrals to bold statement colours.",
      category: "Design Trends",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/images/Home decorating image.jpeg",
      slug: "top-5-colour-trends-2025"
    },
    {
      id: 2,
      title: "How to Prepare Your Home for Professional Decorating",
      excerpt: "Essential tips to help you prepare your home before the decorators arrive, ensuring a smooth and efficient decorating process.",
      category: "Tips & Advice",
      date: "2025-01-10",
      readTime: "4 min read",
      image: "/images/About Ben.jpg",
      slug: "prepare-home-professional-decorating"
    },
    {
      id: 3,
      title: "Commercial vs Domestic Decorating: Key Differences",
      excerpt: "Understanding the important differences between commercial and domestic decorating projects and what to expect from each.",
      category: "Industry Insights",
      date: "2025-01-05",
      readTime: "6 min read",
      image: "/images/Business decorating image.jpeg",
      slug: "commercial-vs-domestic-decorating-differences"
    },
    {
      id: 4,
      title: "The Benefits of Professional Wallpaper Installation",
      excerpt: "Why choosing professional wallpaper installation over DIY can save you time, money, and ensure a flawless finish.",
      category: "Services",
      date: "2024-12-20",
      readTime: "3 min read",
      image: "/images/Home decorating image.jpeg",
      slug: "benefits-professional-wallpaper-installation"
    },
    {
      id: 5,
      title: "Exterior Painting: Weather Considerations for Devon",
      excerpt: "Important weather considerations when planning exterior painting projects in Devon's unique climate conditions.",
      category: "Tips & Advice",
      date: "2024-12-15",
      readTime: "4 min read",
      image: "/images/Business decorating image.jpeg",
      slug: "exterior-painting-weather-devon"
    },
    {
      id: 6,
      title: "Project Showcase: Victorian Property Transformation",
      excerpt: "A detailed look at our recent Victorian property renovation project, showcasing the transformation from start to finish.",
      category: "Project Showcase",
      date: "2024-12-10",
      readTime: "7 min read",
      image: "/images/About Ben.jpg",
      slug: "victorian-property-transformation-showcase"
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Design Trends", count: 1 },
    { name: "Tips & Advice", count: 2 },
    { name: "Industry Insights", count: 1 },
    { name: "Services", count: 1 },
    { name: "Project Showcase", count: 1 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Decorating <span className="text-bsr-highlight">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tips, trends, and insights from the BSR Decorating team
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-6 py-2 rounded-full font-medium transition-colors duration-200 bg-bsr-highlight text-bsr-white hover:bg-[#d001e8]"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 group"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-bsr-highlight text-bsr-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-bsr-white mb-3 group-hover:text-bsr-highlight transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-bsr-highlight hover:text-[#d001e8] font-medium transition-colors duration-200 group-hover:translate-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="transition-transform duration-200" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-bsr-white mb-4">
            Stay Updated with Decorating Tips
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Get the latest decorating trends, tips, and project showcases delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-bsr-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bsr-white"
            />
            <button className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bsr-white mb-4">
              Professional Decorating in <span className="text-bsr-highlight">Devon</span>
            </h2>
            <p className="text-lg text-gray-300">
              Expert decorating services across Dawlish, Teignmouth, Exmouth, and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Interior and exterior painting</li>
                <li>• Wallpaper hanging and removal</li>
                <li>• Colour consultation</li>
                <li>• Commercial decorating</li>
                <li>• Domestic decorating</li>
                <li>• Surface preparation</li>
              </ul>
            </div>

            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Dawlish</li>
                <li>• Teignmouth</li>
                <li>• Exmouth</li>
                <li>• Newton Abbot</li>
                <li>• Exeter</li>
                <li>• Surrounding Devon areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
