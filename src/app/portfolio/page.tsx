'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '@/data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'timber-repair', name: 'Timber Repair' },
    { id: 'doors', name: 'Doors' },
    { id: 'external', name: 'External' },
    { id: 'internal', name: 'Internal' },
    { id: 'commercial', name: 'Commercial' },
  ];

  // Use projects from the data file
  const allProjects = projects;

  const filteredProjects = allProjects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
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
                  onClick={() => {
                    setSelectedProject(project.id);
                    setCurrentImageIndex(0);
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
        const hasVideos = project.videos && project.videos.length > 0;

        const nextImage = () => {
          setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
        };

        const prevImage = () => {
          setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
        };

        return (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white hover:text-bsr-highlight z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-bsr-highlight">
                    <Star size={16} fill="currentColor" />
                    <span className="font-semibold">{project.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-bsr-highlight capitalize">
                    {project.category.replace('-', ' ')}
                  </span>
                  <span className="text-gray-400">{project.location}</span>
                  {allImages.length > 1 && (
                    <span className="text-gray-400">
                      {currentImageIndex + 1} / {allImages.length}
                    </span>
                  )}
                </div>
                {project.fullDescription && (
                  <div className="mt-3 pt-3 border-t border-gray-600">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                )}
                {project.specialFeatures && project.specialFeatures.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-600">
                    <h4 className="text-sm font-semibold text-bsr-highlight mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.specialFeatures.map((feature, index) => (
                        <span key={index} className="text-xs bg-bsr-highlight text-bsr-black px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {hasVideos && (
                  <div className="mt-3 pt-3 border-t border-gray-600">
                    <p className="text-sm text-bsr-highlight">
                      📹 This project includes video content
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}