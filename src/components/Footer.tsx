import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bsr-gray border-t border-bsr-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/Logos/BSR Logo-4.png"
                alt="BSR Decorating Ltd"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional decorating services for both domestic and commercial properties in Dawlish, Devon.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bsr-highlight hover:text-[#d001e8] transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bsr-highlight hover:text-[#d001e8] transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>
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
                <Link href="/gallery" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-bsr-highlight transition-colors duration-200">
                  Reviews
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
                <span className="text-gray-300">07700 900000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-bsr-highlight" />
                <span className="text-gray-300">info@bsrdecorating.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-bsr-highlight" />
                <span className="text-gray-300">Dawlish, Devon</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-bsr-gray-light mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} BSR Decorating Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
