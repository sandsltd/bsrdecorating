'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function BlogCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-highlight">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle size={48} className="text-bsr-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-bsr-white mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-bsr-white opacity-90 mb-8">
            Get a free quote for professional decorating services tailored to your needs.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openQuoteModal}
            className="bg-bsr-white text-bsr-highlight hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Get Your Free Quote
          </button>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-bsr-white text-bsr-white hover:bg-bsr-white hover:text-bsr-highlight px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
