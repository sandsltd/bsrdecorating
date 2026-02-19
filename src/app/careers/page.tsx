'use client';

import { motion } from 'framer-motion';
import { Mail, Users, Star, Award } from 'lucide-react';
import Link from 'next/link';



export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Experienced Decorators",
    "description": "Join BSR Decorating as an experienced decorator. We need decorators from time to time for larger jobs and are always interested in hearing from experienced professionals.",
    "datePosted": "2025-01-25",
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
    "employmentType": "CONTRACTOR",
    "experienceRequirements": "Proven decorating experience required",
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
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Join Our <span className="text-bsr-highlight">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that delivers exceptional decorating services across Devon
          </p>
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
              We&apos;re always looking for talented individuals to join our growing team
            </p>
          </div>

          <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-8 text-center">
            <div className="mb-6">
              <Users size={48} className="text-bsr-highlight mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-bsr-white mb-2">No Current Vacancies</h3>
              <p className="text-gray-300 text-lg">
                We don&apos;t currently have any open positions, but we do need decorators from time to time for larger jobs and are always interested in hearing from experienced professionals.
              </p>
            </div>

            <div className="bg-bsr-black border border-bsr-highlight rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-bsr-white mb-4">Experienced Decorators</h4>
              <p className="text-gray-300 mb-4">
                If you have experience in decorating and are passionate about delivering quality work, we&apos;d love to hear from you.
              </p>
              <p className="text-gray-300 mb-4">
                We do need decorators from time to time for larger jobs, so please get in touch even if we don&apos;t have current vacancies.
              </p>
              <p className="text-gray-300 mb-6">
                Please send your CV and a covering letter to:
              </p>
              <a
                href="mailto:info@bsrdecorating.co.uk"
                className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <Mail size={18} />
                <span>info@bsrdecorating.co.uk</span>
              </a>
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
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Personal Qualities</h3>
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
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-bsr-white mb-8 opacity-90">
            Even if we don&apos;t have current vacancies, we do need decorators from time to time for larger jobs and are always interested in hearing from experienced professionals.
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
