'use client';

import Link from 'next/link';
import { ArrowRight, Image as ImageIcon, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const GalleryPreview = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Living Room Transformation',
      category: 'Domestic',
      beforeAfter: true
    },
    {
      id: 2,
      type: 'video',
      title: 'Office Renovation',
      category: 'Commercial',
      beforeAfter: false
    },
    {
      id: 3,
      type: 'image',
      title: 'Kitchen Makeover',
      category: 'Domestic',
      beforeAfter: true
    },
    {
      id: 4,
      type: 'image',
      title: 'Retail Space',
      category: 'Commercial',
      beforeAfter: false
    },
    {
      id: 5,
      type: 'video',
      title: 'Bedroom Refresh',
      category: 'Domestic',
      beforeAfter: true
    },
    {
      id: 6,
      type: 'image',
      title: 'Warehouse Painting',
      category: 'Commercial',
      beforeAfter: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bsr-white mb-4">
            Our <span className="text-bsr-highlight">Work Gallery</span>
          </h2>
          <p className="text-xl text-gray-300">
            See the transformation in action with our before & after gallery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-bsr-black border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300"
            >
              {/* Image/Video Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-bsr-gray-light to-bsr-gray flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  {item.type === 'video' ? (
                    <div className="bg-bsr-highlight bg-opacity-20 p-4 rounded-full mb-3">
                      <Video size={48} className="text-bsr-highlight" />
                    </div>
                  ) : (
                    <div className="bg-bsr-highlight bg-opacity-20 p-4 rounded-full mb-3">
                      <ImageIcon size={48} className="text-bsr-highlight" />
                    </div>
                  )}
                  <p className="text-gray-400 text-sm font-medium">Media placeholder</p>
                  <p className="text-gray-500 text-xs mt-1">Click to view</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-bsr-highlight text-bsr-white px-4 py-2 rounded-md font-medium">
                    View Project
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-bsr-white text-sm">
                    {item.title}
                  </h3>
                  {item.beforeAfter && (
                    <span className="text-xs bg-bsr-highlight text-bsr-white px-2 py-1 rounded-full">
                      Before/After
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View Full Gallery</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
