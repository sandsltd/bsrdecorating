'use client';

import { motion } from 'framer-motion';
import { Mail, Users, Star, Award, Briefcase, MapPin, PoundSterling, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';



export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Full-Time Experienced Decorator",
    "description": "Join BSR Decorating as a full-time experienced decorator. We are looking for a skilled professional to join our team delivering high-quality decorating services across Devon. Pay is negotiable depending on experience.",
    "datePosted": "2026-04-30",
    "hiringOrganization": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      },
      "url": "https://www.bsrdecorating.co.uk"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    },
    "employmentType": "FULL_TIME",
    "experienceRequirements": "Proven decorating experience required",
    "qualifications": "Experienced decorator with strong attention to detail and a professional approach",
    "skills": [
      "Interior painting",
      "Exterior painting",
      "Surface preparation",
      "Attention to detail",
      "Customer service"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-bsr-highlight/40 bg-bsr-highlight/10 px-4 py-2 text-sm font-medium text-bsr-highlight mb-6">
            Now Hiring Across Devon
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Full-Time <span className="text-bsr-highlight">Experienced Decorator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join BSR Decorating and help deliver high-quality decorating work for customers across Devon.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bsrdecorating.co.uk"
              className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Apply by Email</span>
            </a>
            <Link
              href="/contact"
              className="border border-bsr-gray-light text-bsr-white hover:border-bsr-highlight hover:text-bsr-highlight px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Current Vacancies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bsr-white mb-4">
              Current <span className="text-bsr-highlight">Vacancies</span>
            </h2>
            <p className="text-lg text-gray-300">
              We&apos;re currently recruiting for an experienced decorator to join our growing team
            </p>
          </div>

          <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-5">
                <Briefcase size={24} className="text-bsr-highlight mb-3" />
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">Role Type</p>
                <p className="text-lg font-semibold text-bsr-white">Full-Time</p>
              </div>
              <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-5">
                <MapPin size={24} className="text-bsr-highlight mb-3" />
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">Location</p>
                <p className="text-lg font-semibold text-bsr-white">Devon</p>
              </div>
              <div className="bg-bsr-black border border-bsr-gray-light rounded-lg p-5">
                <PoundSterling size={24} className="text-bsr-highlight mb-3" />
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">Pay</p>
                <p className="text-lg font-semibold text-bsr-white">Negotiable</p>
              </div>
            </div>

            <div className="bg-bsr-black border border-bsr-highlight rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Users size={40} className="text-bsr-highlight flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-bsr-white mb-3">Full-Time Experienced Decorator</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    We&apos;re looking for an experienced decorator to join the BSR Decorating team and help deliver reliable, high-standard work for domestic and commercial customers across Devon.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Pay is negotiable depending on experience. If you take pride in quality workmanship, communicate well with customers, and can work to a professional finish, we&apos;d like to hear from you.
                  </p>
                  <a
                    href="mailto:info@bsrdecorating.co.uk"
                    className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    <Mail size={18} />
                    <span>Send CV to info@bsrdecorating.co.uk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bsr-white mb-4">
              Why Work With <span className="text-bsr-highlight">BSR Decorating</span>
            </h2>
            <p className="text-lg text-gray-300">
              Join a team that values quality, professionalism, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-2">Quality Focus</h3>
              <p className="text-gray-300">
                Work with a team that takes pride in every project and maintains the highest standards of workmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-2">Team Environment</h3>
              <p className="text-gray-300">
                Join a supportive team where your skills and experience are valued and your growth is encouraged.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-2">Professional Development</h3>
              <p className="text-gray-300">
                Opportunities to develop your skills and work on a variety of interesting projects across Devon.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-bsr-white mb-5">About The Role</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>Carry out high-quality interior and exterior decorating work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>Prepare surfaces properly and maintain a clean, professional finish.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>Represent the business well on site with a reliable, customer-focused attitude.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>Work as part of the team on projects across Devon.</span>
                </li>
              </ul>
            </div>

            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-bsr-white mb-5">What We Offer</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>Full-time position with a respected local decorating business.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>Pay negotiable depending on experience and suitability for the role.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>A steady mix of interesting work across domestic and commercial projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-bsr-highlight flex-shrink-0 mt-1" />
                  <span>A team that values professionalism, reliability, and quality workmanship.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bsr-white mb-4">
              What We <span className="text-bsr-highlight">Look For</span>
            </h2>
            <p className="text-lg text-gray-300">
              The qualities and experience we value in our team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Experience & Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Proven decorating experience</li>
                <li>• Attention to detail</li>
                <li>• Knowledge of materials and techniques</li>
                <li>• Ability to work independently and as part of a team</li>
                <li>• Strong communication skills</li>
              </ul>
            </div>

            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Professional Qualities</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional attitude</li>
                <li>• Reliability and punctuality</li>
                <li>• Customer-focused approach</li>
                <li>• Willingness to learn and develop</li>
                <li>• Pride in delivering quality work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-bsr-white mb-4">
            Apply For The Role
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Send your CV and a short covering letter outlining your experience. If you&apos;re a strong fit for the role, BSR Decorating will be in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bsrdecorating.co.uk"
              className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Send Your CV</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
