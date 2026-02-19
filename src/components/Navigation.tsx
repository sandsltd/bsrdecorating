'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Domestic Decorating', href: '/domestic' },
    { name: 'Commercial Decorating', href: '/commercial' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  // Desktop main nav items (excluding items moved to top bar)
  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Domestic Decorating', href: '/domestic' },
    { name: 'Commercial Decorating', href: '/commercial' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Top Bar - Only visible on desktop */}
      <div className="hidden lg:block bg-bsr-gray border-b border-bsr-gray-light fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Left side links */}
            <div className="flex items-center">
              {[
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Blog', href: '/blog' },
                { name: 'Community', href: '/community' },
                { name: 'Careers', href: '/careers' },
              ].map((item, index, array) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="text-bsr-white hover:text-bsr-highlight transition-colors duration-200 font-medium text-sm px-3 py-1"
                  >
                    {item.name}
                  </Link>
                  {/* Add separator after each item except the last one */}
                  {index < array.length - 1 && (
                    <div className="h-4 w-px bg-white opacity-80 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right side contact info */}
            <div className="flex items-center">
              <a
                href="tel:01626911236"
                className="text-bsr-white hover:text-bsr-highlight transition-colors duration-200 font-medium text-sm flex items-center space-x-2 px-3 py-1"
              >
                <Phone size={14} />
                <span>01626 911236</span>
              </a>
              {/* Contact separator */}
              <div className="h-4 w-px bg-white opacity-80 mx-2"></div>
              <a
                href="mailto:info@bsrdecorating.co.uk"
                className="text-bsr-white hover:text-bsr-highlight transition-colors duration-200 font-medium text-sm px-3 py-1"
              >
                info@bsrdecorating.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>

    <nav className="bg-bsr-black bg-opacity-95 backdrop-blur-sm border-b border-bsr-gray-light fixed top-0 lg:top-10 left-0 right-0 z-50">
      {/* Mobile Phone Number Bar */}
      <div className="md:hidden bg-bsr-highlight py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <a
            href="tel:01626911236"
            className="text-bsr-white font-medium flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
          >
            <Phone size={16} />
            <span>01626 911236</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Logos/BSR Logo-7.png"
              alt="BSR Decorating"
              width={60}
              height={60}
              className="h-10 w-auto"
              priority
              quality={75}
              fetchPriority="high"
            />
            <span className="text-bsr-white font-semibold text-sm md:text-lg">
              BSR Decorating
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {mainNavItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  className="text-bsr-white hover:text-bsr-highlight transition-colors duration-200 font-medium px-4 py-2"
                >
                  {item.name}
                </Link>
                {/* Add separator after each item except the last one */}
                {index < mainNavItems.length - 1 && (
                  <div className="h-6 w-px bg-gray-400 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
                                <button
                      onClick={openQuoteModal}
                      className="bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Phone size={16} />
                      <span>Get Quote</span>
                    </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-bsr-white hover:text-bsr-highlight transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-bsr-gray border-t border-bsr-gray-light">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-bsr-white hover:text-bsr-highlight hover:bg-bsr-gray-light rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
                                    <button
                        onClick={() => {
                          openQuoteModal();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 bg-bsr-yellow text-bsr-black rounded-md font-medium mt-4"
                      >
                        Get Quote
                      </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
