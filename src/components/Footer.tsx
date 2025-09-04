'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const Footer = () => {
  const { openQuoteModal } = useQuoteModal();
  return (
    <footer className="bg-bsr-gray border-t border-bsr-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/Logos/BSR Logo-7.png"
                alt="BSR Decorating"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional decorating services for both domestic and commercial properties across Devon. Serving Dawlish, Newton Abbot, Torquay, Exeter, Topsham, Exmouth & Bovey Tracey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-bsr-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/domestic" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Domestic Decorating
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Commercial Decorating
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-bsr-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-bsr-highlight" />
                <a href="tel:01626911236" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  01626 911236
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-bsr-highlight" />
                <a href="mailto:info@bsrdecorating.co.uk" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  info@bsrdecorating.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-bsr-highlight" />
                <span className="text-gray-300">Dawlish, Devon</span>
              </div>
            </div>
                                <button
                      onClick={openQuoteModal}
                      className="inline-block mt-4 bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-4 py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      Get Free Quote
                    </button>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-bsr-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/bsrdecorating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bsr-gray hover:bg-bsr-highlight p-2 rounded-full transition-colors duration-200 group"
                >
                  <Facebook size={20} className="text-gray-300 group-hover:text-bsr-white" />
                </a>
                <a
                  href="https://instagram.com/bsrdecorating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bsr-gray hover:bg-bsr-highlight p-2 rounded-full transition-colors duration-200 group"
                >
                  <Instagram size={20} className="text-gray-300 group-hover:text-bsr-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@bsr.decorating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bsr-gray hover:bg-bsr-highlight p-2 rounded-full transition-colors duration-200 group"
                >
                  {/* Custom TikTok Icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="text-gray-300 group-hover:text-bsr-white"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bsr-gray-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} BSR Decorating. All rights reserved.
            </p>
            
            {/* Developer Credit */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Website by</span>
              <a
                href="https://www.saunders-simmons.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="https://www.saunders-simmons.co.uk/SANDSLOGO.png"
                  alt="Saunders Simmons Ltd"
                  width={240}
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-gray-300 font-medium text-sm">
                  Saunders Simmons Ltd
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
