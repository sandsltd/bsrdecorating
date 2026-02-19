'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Calendar, Users, HandHeart, MapPin, Phone, Mail } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';



export default function CommunityPage() {
  const { openQuoteModal } = useQuoteModal();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BSR Decorating",
    "description": "Local decorating business committed to community support and environmental protection",
    "url": "https://www.bsrdecorating.co.uk/community",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dawlish",
      "addressRegion": "Devon",
      "addressCountry": "GB"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Eco-Friendly Decorating Services",
        "description": "Professional decorating using water-based paints and sustainable practices"
      }
    },
    "sponsor": [
      {
        "@type": "Organization",
        "name": "Surfers Against Sewage",
        "url": "https://www.sas.org.uk/",
        "description": "Ocean conservation charity focused on protecting marine environments"
      },
      {
        "@type": "Organization",
        "name": "InFocus Charity",
        "url": "https://infocus-charity.org.uk",
        "description": "Community charity supported through fundraising activities"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-bsr-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-black to-bsr-gray">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
            <Heart size={16} className="text-bsr-highlight" />
            <span className="text-bsr-highlight font-semibold">Community</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-6">
            Supporting Our <span className="text-bsr-highlight">Local Community</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At BSR Decorating, we believe in giving back to the community that supports us. 
            From charity runs to local partnerships, we&apos;re committed to making a positive difference in Devon.
          </p>
        </div>
      </section>

      {/* Environmental Commitment - Surfers Against Sewage */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#0970B5] p-3 rounded-full">
                  {/* Wave icon representing ocean/environment */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-bsr-white">Protecting Our Coastlines</h2>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-[#0970B5] font-bold text-lg">Supporting</div>
                  <Image
                    src="/images/logo-2.png"
                    alt="Surfers Against Sewage"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At BSR Decorating we&apos;re committed to doing more than just transforming properties. We proudly donate to 
                <strong className="text-[#0970B5]"> Surfers Against Sewage</strong>, helping to protect our coastlines and marine life.
              </p>

              <div className="bg-[#0970B5]/10 border-l-4 border-[#0970B5] p-4 mb-6">
                <p className="text-gray-300 italic">
                  &ldquo;We are Ocean Activists. We are the voice of the ocean. Campaigning for a thriving ocean, thriving people.&rdquo; 
                  <span className="text-[#0970B5] font-semibold">- Surfers Against Sewage</span>
                </p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                SAS leads the fight against sewage pollution and plastic waste through their 
                <strong className="text-[#0970B5]"> #EndSewagePollution campaign</strong> and 
                <strong className="text-[#0970B5]"> The People vs Plastic</strong> movement. As Ocean Activists, 
                they work tirelessly to clean up our waterways and hold polluters to account.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                That&apos;s why we choose <strong className="text-bsr-highlight">eco-friendly water-based paint systems</strong> wherever possible. 
                Unlike solvent-based paints, they contain fewer harmful chemicals, which means less pollution running into our oceans.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Every project we complete doesn&apos;t just look great – <strong className="text-bsr-highlight">it leaves a cleaner footprint behind</strong>.
              </p>

              <div className="bg-bsr-black bg-opacity-50 rounded-lg p-6 border border-[#0970B5]/30">
                <h4 className="font-semibold text-[#0970B5] mb-3 flex items-center space-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0970B5]">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                  </svg>
                  <span>Our Eco-Friendly Commitment</span>
                </h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Water-based paint systems reduce harmful chemical runoff</li>
                  <li>• Lower VOC emissions for healthier indoor air quality</li>
                  <li>• Supporting SAS&apos;s #EndSewagePollution campaign through donations</li>
                  <li>• Contributing to The People vs Plastic movement</li>
                  <li>• Environmentally responsible disposal of materials</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://www.sas.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0970B5] hover:bg-[#095A9C] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"/>
                  </svg>
                  <span>Visit Surfers Against Sewage</span>
                </a>
                <a
                  href="mailto:info@bsrdecorating.co.uk"
                  className="border-2 border-[#0970B5] text-[#0970B5] hover:bg-[#0970B5] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Ask About Our Eco-Friendly Options
                </a>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0970B5]/20 to-bsr-highlight/20 rounded-2xl p-8 border border-[#0970B5]/30">
                {/* Ocean/Wave visualization */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold text-[#0970B5] mb-2">Clean Coasts</h3>
                  <p className="text-gray-300">Protected Marine Life</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-bsr-black/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="text-bsr-highlight font-semibold">Water-Based</div>
                    <div className="text-gray-300 text-sm">Paint Systems</div>
                  </div>
                  <div className="bg-bsr-black/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🌱</div>
                    <div className="text-bsr-highlight font-semibold">Eco-Friendly</div>
                    <div className="text-gray-300 text-sm">Low VOC</div>
                  </div>
                  <div className="bg-bsr-black/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">💧</div>
                    <div className="text-bsr-highlight font-semibold">Less Pollution</div>
                    <div className="text-gray-300 text-sm">Ocean Safe</div>
                  </div>
                  <div className="bg-bsr-black/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">❤️</div>
                    <div className="text-bsr-highlight font-semibold">Direct Support</div>
                    <div className="text-gray-300 text-sm">SAS Donations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* London Marathon 2025 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-bsr-highlight p-3 rounded-full">
                  <Heart size={24} className="text-bsr-white" />
                </div>
                <h2 className="text-3xl font-bold text-bsr-white">2025 London Marathon for InFocus Charity</h2>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I was proud to stand at the start line of the 2025 London Marathon to run in support of 
                <strong className="text-bsr-highlight"> @infocus charity</strong>. This incredible cause helps change lives, 
                and every pound raised makes a real difference.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Running the London Marathon was not just about the physical challenge - it was about supporting a charity 
                that makes a real impact in people&apos;s lives. InFocus Charity does incredible work in the community, 
                and I was honoured to run in their support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://infocus-charity.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Heart size={18} />
                  <span>Support the Cause</span>
                </a>
                <a
                  href="https://infocus-charity.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Learn More About InFocus
                </a>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Charity Run.jpg"
                  alt="Ben running for charity"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/60 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Charity Run 2.jpg"
                  alt="Ben supporting InFocus charity"
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-black to-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Our <span className="text-bsr-highlight">Community Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do, from our decorating services to our community involvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-bsr-gray border border-bsr-gray-light rounded-lg p-8">
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Giving Back</h3>
              <p className="text-gray-300">
                We believe in supporting the communities that support us through charity work, 
                local partnerships, and community initiatives.
              </p>
            </div>

            <div className="text-center bg-bsr-gray border border-bsr-gray-light rounded-lg p-8">
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Local Focus</h3>
              <p className="text-gray-300">
                As a local business based in Dawlish, we understand the importance of supporting 
                our neighbours and contributing to our local economy.
              </p>
            </div>

            <div className="text-center bg-bsr-gray border border-bsr-gray-light rounded-lg p-8">
              <div className="bg-bsr-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-bsr-white" />
              </div>
              <h3 className="text-xl font-semibold text-bsr-white mb-4">Making a Difference</h3>
              <p className="text-gray-300">
                Every project we complete and every community initiative we support is an opportunity 
                to make a positive impact in people&apos;s lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Partnerships */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Local <span className="text-bsr-highlight">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-300">
              We&apos;re proud to work with and support local businesses and organizations across Devon
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-bsr-black bg-opacity-50 rounded-lg p-8 border border-bsr-gray-light">
              <h3 className="text-2xl font-bold text-bsr-highlight mb-4">Supporting Local Business</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We prioritise working with local suppliers and subcontractors whenever possible, 
                helping to keep money circulating within our Devon communities. From paint suppliers 
                to equipment hire, we choose local first.
              </p>
              <div className="flex items-center space-x-2 text-bsr-highlight">
                <MapPin size={18} />
                <span className="font-semibold">Serving Dawlish, Newton Abbot, Torquay, Exeter & surrounding areas</span>
              </div>
            </div>

            <div className="bg-bsr-black bg-opacity-50 rounded-lg p-8 border border-bsr-gray-light">
              <h3 className="text-2xl font-bold text-bsr-highlight mb-4">Community Projects</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We regularly contribute our decorating expertise to community projects, local schools, 
                and charitable organizations. If you represent a local cause that could benefit from 
                our services, we&apos;d love to hear from you.
              </p>
              <div className="flex items-center space-x-2 text-bsr-highlight">
                <Heart size={18} />
                <span className="font-semibold">Making our communities more beautiful, one project at a time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-black to-bsr-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-6">
            Get <span className="text-bsr-highlight">Involved</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you&apos;re a local business, charity, or community organization, 
            we&apos;d love to explore how we can work together to benefit our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <Calendar size={24} className="text-bsr-highlight mx-auto mb-3" />
              <h4 className="font-semibold text-bsr-white mb-2">Community Events</h4>
              <p className="text-gray-300 text-sm">Partner with us for local events and fundraisers</p>
            </div>
            
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <HandHeart size={24} className="text-bsr-highlight mx-auto mb-3" />
              <h4 className="font-semibold text-bsr-white mb-2">Charity Support</h4>
              <p className="text-gray-300 text-sm">Discuss how we can support your charitable cause</p>
            </div>
            
            <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-6">
              <Users size={24} className="text-bsr-highlight mx-auto mb-3" />
              <h4 className="font-semibold text-bsr-white mb-2">Local Partnerships</h4>
              <p className="text-gray-300 text-sm">Explore business partnerships and collaborations</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bsrdecorating.co.uk"
              className="bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              <span>Email Us About Community Projects</span>
            </a>
            <a
              href="tel:01626911236"
              className="border-2 border-bsr-highlight text-bsr-highlight hover:bg-bsr-highlight hover:text-bsr-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call: 01626 911236</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bsr-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-bsr-white mb-10 opacity-90">
            Whether it&apos;s a community project or your own home, we&apos;re here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={openQuoteModal}
              className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <Link
              href="/portfolio"
              className="border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
