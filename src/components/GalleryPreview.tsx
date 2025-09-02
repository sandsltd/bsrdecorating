'use client';

import { useState, useEffect } from 'react';
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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  // Get all projects - will only show the farmhouse project for now
  const galleryItems = projects;

  // Filter items based on filterCategories prop
  const filteredItems = filterCategories 
    ? galleryItems.filter(item => filterCategories.includes(item.category))
    : galleryItems;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedVideo(null);
      } else if (e.key === 'ArrowLeft') {
        const project = galleryItems.find(p => p.id === selectedProject);
        if (project && project.images && project.images.length > 1) {
          setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
          setSelectedVideo(null);
        }
      } else if (e.key === 'ArrowRight') {
        const project = galleryItems.find(p => p.id === selectedProject);
        if (project && project.images && project.images.length > 1) {
          setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
          setSelectedVideo(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject, galleryItems]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
                setSelectedVideo(null);
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
                <div className="mb-2">
                  <h3 className="font-semibold text-bsr-white text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
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
        
        const allImages = project.images || [project.image];
        const allVideos = project.videos || [];
        const hasVideos = allVideos.length > 0;

        const nextImage = () => {
          setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
          setSelectedVideo(null);
        };

        const prevImage = () => {
          setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
          setSelectedVideo(null);
        };
        
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            style={{ zIndex: 9999 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
                setSelectedVideo(null);
              }
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setSelectedVideo(null);
              }}
              className="absolute top-6 right-6 text-white hover:text-bsr-highlight z-20 bg-bsr-black hover:bg-bsr-gray rounded-full p-3 transition-all duration-300 shadow-lg"
            >
              <X size={28} />
            </button>

            {/* Modal Content */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-6">
              
              {/* Media Display Section */}
              <div className="relative flex-1 flex items-center justify-center min-h-[50vh] lg:min-h-0">
                <div className="relative w-full h-full max-h-[50vh] lg:max-h-[85vh] bg-gradient-to-br from-bsr-gray to-bsr-black rounded-2xl overflow-hidden shadow-2xl">
                  {selectedVideo ? (
                    /* Video Display */
                    <>
                      <video
                        src={selectedVideo}
                        controls
                        muted
                        className="w-full h-full object-contain p-4"
                        style={{ maxHeight: '100%' }}
                      />
                      
                      {/* Video Indicator */}
                      <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-bsr-highlight px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Video size={16} />
                        Video
                      </div>
                      
                      {/* Back to Images Button */}
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-4 right-4 bg-black bg-opacity-75 hover:bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200"
                      >
                        Back to Images
                      </button>
                    </>
                  ) : (
                    /* Image Display */
                    allImages.length > 0 && (
                      <>
                        <Image
                          src={allImages[currentImageIndex]}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-contain p-4"
                          priority
                        />
                        
                        {/* Image Counter */}
                        {allImages.length > 1 && (
                          <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {currentImageIndex + 1} / {allImages.length}
                          </div>
                        )}
                        
                        {/* Image Indicator */}
                        <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <ImageIcon size={16} />
                          Image
                        </div>
                      </>
                    )
                  )}
                </div>
                
                {/* Navigation Arrows - Only show for images */}
                {!selectedVideo && allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-bsr-black hover:bg-bsr-highlight text-white hover:text-bsr-black rounded-full p-4 transition-all duration-300 shadow-lg hover:scale-110"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-bsr-black hover:bg-bsr-highlight text-white hover:text-bsr-black rounded-full p-4 transition-all duration-300 shadow-lg hover:scale-110"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* Project Details Panel */}
              <div className="lg:w-96 bg-gradient-to-b from-bsr-black to-bsr-gray rounded-2xl p-6 shadow-2xl overflow-y-auto max-h-[40vh] lg:max-h-[85vh]">
                
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-white leading-tight">{project.title}</h2>
                    <div className="flex items-center gap-1 text-bsr-highlight bg-bsr-highlight bg-opacity-20 px-3 py-1 rounded-full">
                      <Star size={18} fill="currentColor" />
                      <span className="font-bold">{project.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <span className="bg-bsr-highlight text-bsr-black px-3 py-1 rounded-full font-semibold capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                    <span className="flex items-center gap-1">
                      📍 {project.location}
                    </span>
                  </div>
                  
                  {project.year && project.duration && (
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>🗓️ {project.year}</span>
                      <span>⏱️ {project.duration}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-bsr-highlight mb-3">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Full Description */}
                {project.fullDescription && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-bsr-highlight mb-3">Project Details</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                )}

                {/* Special Features */}
                {project.specialFeatures && project.specialFeatures.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-bsr-highlight mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {project.specialFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-bsr-highlight rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video Thumbnails */}
                {hasVideos && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-bsr-highlight mb-3 flex items-center gap-2">
                      <Video size={18} />
                      Project Videos
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {allVideos.map((video, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedVideo(video);
                          }}
                          className={`relative group bg-bsr-gray rounded-lg overflow-hidden border-2 transition-all duration-300 aspect-video ${
                            selectedVideo === video 
                              ? 'border-bsr-highlight shadow-lg' 
                              : 'border-gray-600 hover:border-bsr-highlight'
                          }`}
                        >
                          {/* Video Thumbnail Placeholder */}
                          <div className="absolute inset-0 bg-gradient-to-br from-bsr-gray to-bsr-black flex items-center justify-center">
                            <Video size={32} className="text-bsr-highlight" />
                          </div>
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                            <div className="w-12 h-12 bg-bsr-highlight bg-opacity-90 group-hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                              <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                            </div>
                          </div>
                          
                          {/* Video Label */}
                          <div className="absolute bottom-2 left-2 right-2 text-xs text-white bg-black bg-opacity-75 px-2 py-1 rounded">
                            Video {index + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Media Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <ImageIcon size={16} />
                      {allImages.length} {allImages.length === 1 ? 'Image' : 'Images'}
                    </span>
                    {hasVideos && (
                      <span className="flex items-center gap-2 text-bsr-highlight">
                        <Video size={16} />
                        {allVideos.length} {allVideos.length === 1 ? 'Video' : 'Videos'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })()}
    </section>
  );
};

export default GalleryPreview;
