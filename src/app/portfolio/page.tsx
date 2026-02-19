'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectLocationMap from '@/components/ProjectLocationMap';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "BSR Decorating Project Portfolio",
    "description": "Gallery of completed decorating projects across Devon",
    "url": "https://www.bsrdecorating.co.uk/portfolio",
    "image": projects.map(project => ({
      "@type": "ImageObject",
      "url": `https://www.bsrdecorating.co.uk${project.image}`,
      "name": project.title,
      "description": project.description,
      "contentLocation": {
        "@type": "Place",
        "name": project.location,
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Devon",
          "addressCountry": "GB"
        }
      }
    })),
    "provider": {
      "@type": "LocalBusiness",
      "name": "BSR Decorating",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dawlish",
        "addressRegion": "Devon",
        "addressCountry": "GB"
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'commercial', name: 'Commercial' },
  ];

  // Use projects from the data file
  const allProjects = projects;

  const filteredProjects = allProjects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowLeft') {
        const project = allProjects.find(p => p.id === selectedProject);
        if (project && project.images && project.images.length > 1) {
          setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
        }
      } else if (e.key === 'ArrowRight') {
        const project = allProjects.find(p => p.id === selectedProject);
        if (project && project.images && project.images.length > 1) {
          setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject, allProjects]);

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
    <>
      <Head>
        <title>Project Portfolio | BSR Decorating Work Gallery - Dawlish, Newton Abbot, Torquay & Exeter</title>
        <meta name="description" content="View our completed decorating projects across Devon. Professional painting and decorating portfolio showcasing domestic and commercial work in Dawlish, Newton Abbot, Torquay, Exeter and surrounding areas." />
        <meta name="keywords" content="decorating portfolio Devon, painting projects gallery, before after decorating, BSR project examples, decorating work Dawlish Newton Abbot Torquay Exeter, completed decorating projects, professional decorating gallery" />
        <meta property="og:title" content="Project Portfolio | BSR Decorating Devon" />
        <meta property="og:description" content="Completed decorating projects across Devon - see our professional work" />
        <meta property="og:url" content="https://www.bsrdecorating.co.uk/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio/project1/PHOTO-2025-09-02-11-07-09.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Portfolio | BSR Decorating Devon" />
        <meta name="twitter:description" content="Completed decorating projects across Devon - see our professional work" />
        <meta name="twitter:image" content="/portfolio/project1/PHOTO-2025-09-02-11-07-09.jpg" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-bsr-white mb-6"
          >
            Our{' '}
            <span className="text-bsr-highlight">Project Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Explore our completed projects showcasing professional decorating, restoration, and renovation work across Devon
          </motion.p>
        </div>
      </section>

      {/* Project Location Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-bsr-highlight bg-opacity-20 border border-bsr-highlight rounded-full px-6 py-2 mb-6">
              <span className="text-bsr-highlight font-semibold">Project Locations</span>
            </div>
            <h2 className="text-4xl font-bold text-bsr-white mb-6">
              Where We&apos;ve <span className="text-bsr-highlight">Delivered Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the locations of our completed projects across Devon. Each marker shows the number of projects we&apos;ve completed in that area.
            </p>
          </div>

          <ProjectLocationMap />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-bsr-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-bsr-highlight text-bsr-black'
                    : 'bg-bsr-gray text-bsr-white hover:bg-bsr-gray-light'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-300">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-bsr-black border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(project.id);
                    setCurrentImageIndex(0);
                    setSelectedVideo(null); // Reset video selection when opening project
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                  />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
                    
                    {/* Project Type Icon */}
                    <div className="absolute top-4 left-4 bg-bsr-highlight text-bsr-black p-2 rounded-lg">
                      {project.type === 'image' ? <ImageIcon size={20} /> : <Video size={20} />}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black bg-opacity-75 text-bsr-highlight px-2 py-1 rounded-lg">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-semibold">{project.rating}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-bsr-white mb-2 group-hover:text-bsr-highlight transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-bsr-highlight font-semibold capitalize">
                        {project.category.replace('-', ' ')}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (() => {
        const project = allProjects.find(p => p.id === selectedProject);
        if (!project) return null;

        const allImages = project.images || [project.image];
        const allVideos = project.videos || [];
        const hasVideos = allVideos.length > 0;

        const nextImage = () => {
          setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
          setSelectedVideo(null); // Clear video selection when navigating images
        };

        const prevImage = () => {
          setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
          setSelectedVideo(null); // Clear video selection when navigating images
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
              }
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
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
                          priority={currentImageIndex === 0}
                          loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
                          sizes="(max-width: 768px) 100vw, 90vw"
                          quality={85}
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
      </div>
    </>
  );
}