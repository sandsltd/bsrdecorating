'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, categories } from '@/data/blogPosts';

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BSR Decorating Blog",
    "description": "Expert decorating tips, trends, and project insights from professional decorators in Devon",
    "url": "https://bsrdecorating.co.uk/blog",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    },
    "mainEntity": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://bsrdecorating.co.uk/blog/${post.slug}`,
      "image": `https://bsrdecorating.co.uk${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "BSR Decorating Team"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Decorating Blog | Tips, Trends & Insights from BSR Decorating Devon</title>
        <meta name="description" content="Expert decorating tips, trends, and project insights from BSR Decorating. Professional advice on painting, decorating, and property maintenance across Dawlish, Newton Abbot, Torquay, Exeter and Devon." />
        <meta name="keywords" content="decorating blog Devon, painting tips Dawlish, home decorating advice, commercial decorating insights, property maintenance blog, decorating trends Newton Abbot Torquay Exeter, professional decorator blog, painting advice Devon" />
        <meta property="og:title" content="Decorating Blog | BSR Decorating Devon" />
        <meta property="og:description" content="Expert decorating tips and insights from professional decorators in Devon" />
        <meta property="og:url" content="https://bsrdecorating.co.uk/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/Business decorating image.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Decorating Blog | BSR Decorating Devon" />
        <meta name="twitter:description" content="Expert decorating tips and insights from professional decorators in Devon" />
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
    </>
  );
}
