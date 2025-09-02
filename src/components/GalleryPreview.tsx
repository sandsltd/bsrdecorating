'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Image as ImageIcon, Video, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

interface GalleryPreviewProps {
  filterCategories?: string[];
  title?: string;
  subtitle?: string;
}

const GalleryPreview = ({ 
  filterCategories, 
  title = "Featured Projects",
  subtitle = "See some of our recent work"
}: GalleryPreviewProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Get all projects - will only show the farmhouse project for now
  const galleryItems = projects;

  // Filter items based on filterCategories prop
  const filteredItems = filterCategories 
    ? galleryItems.filter(item => filterCategories.includes(item.category))
    : galleryItems;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bsr-white mb-4">
            {title.split(' ').map((word, index, array) => 
              index === array.length - 1 ? (
                <span key={index} className="text-bsr-highlight">{word}</span>
              ) : (
                `${word} `
              )
            )}
          </h2>
          <p className="text-xl text-gray-300">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-bsr-black border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(item.id);
                setCurrentImageIndex(0);
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bsr-gray-light to-bsr-gray flex items-center justify-center">
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
                    </div>
                  </div>
                )}
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
            <span>View Full Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Image Carousel Modal */}
      {selectedProject && (() => {
        const project = galleryItems.find(p => p.id === selectedProject);
        if (!project) return null;
        
        const allImages = project.images || [project.image].filter(Boolean);
        
        const nextImage = () => {
          setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
        };
        
        const prevImage = () => {
          setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
        };
        
        return (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 text-white hover:text-bsr-highlight z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X size={24} />
            </button>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center p-4">
              {allImages.length > 0 && (
                <>
                  {/* Main Image */}
                  <div className="relative w-full h-full max-h-[80vh] bg-bsr-gray rounded-lg overflow-hidden">
                    <Image
                      src={allImages[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all duration-200"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all duration-200"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </>
              )}
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-bsr-highlight mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>{project.location}</span>
                      <span className="capitalize">{project.category}</span>
                      {allImages.length > 1 && (
                        <span>{currentImageIndex + 1} of {allImages.length}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-bsr-yellow fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              {allImages.length > 1 && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index 
                          ? 'border-bsr-highlight' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default GalleryPreview;
