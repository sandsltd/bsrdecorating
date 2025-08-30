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
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-bsr-black bg-opacity-95 backdrop-blur-sm border-b border-bsr-gray-light sticky top-0 z-50">
      {/* Mobile Phone Number Bar */}
      <div className="md:hidden bg-bsr-highlight py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <a
            href="tel:07805469770"
            className="text-bsr-white font-medium flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
          >
            <Phone size={16} />
            <span>07805 469770</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Logos/BSR Logo-4.png"
              alt="BSR Decorating Ltd"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-bsr-white hover:text-bsr-highlight transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
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
  );
};

export default Navigation;
