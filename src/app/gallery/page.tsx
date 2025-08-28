'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Filter, Star } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'before-after', name: 'Before & After' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Living Room Transformation',
      category: 'domestic',
      type: 'before-after',
      description: 'Complete living room makeover with modern color scheme',
      beforeImage: '/gallery/living-room-before.jpg',
      afterImage: '/gallery/living-room-after.jpg',
      rating: 5,
      location: 'Dawlish'
    },
    {
      id: 2,
      title: 'Office Renovation',
      category: 'commercial',
      type: 'video',
      description: 'Modern office space renovation for local business',
      videoUrl: 'https://vimeo.com/example',
      rating: 5,
      location: 'Teignmouth'
    },
    {
      id: 3,
      title: 'Kitchen Makeover',
      category: 'domestic',
      type: 'before-after',
      description: 'Kitchen transformation with contemporary design',
      beforeImage: '/gallery/kitchen-before.jpg',
      afterImage: '/gallery/kitchen-after.jpg',
      rating: 5,
      location: 'Exmouth'
    },
    {
      id: 4,
      title: 'Retail Space',
      category: 'commercial',
      type: 'image',
      description: 'Retail store painting and branding',
      image: '/gallery/retail-space.jpg',
      rating: 5,
      location: 'Newton Abbot'
    },
    {
      id: 5,
      title: 'Bedroom Refresh',
      category: 'domestic',
      type: 'before-after',
      description: 'Master bedroom transformation',
      beforeImage: '/gallery/bedroom-before.jpg',
      afterImage: '/gallery/bedroom-after.jpg',
      rating: 5,
      location: 'Dawlish'
    },
    {
      id: 6,
      title: 'Warehouse Painting',
      category: 'commercial',
      type: 'image',
      description: 'Large-scale industrial painting project',
      image: '/gallery/warehouse.jpg',
      rating: 5,
      location: 'Exeter'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'before-after') return project.type === 'before-after';
    return project.category === selectedCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bsr-black via-bsr-gray to-bsr-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsr-white mb-4">
            Our <span className="text-bsr-highlight">Work Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and see the transformation in action
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-bsr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-bsr-highlight text-bsr-white'
                    : 'bg-bsr-black text-gray-300 hover:text-bsr-highlight border border-bsr-gray-light'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bsr-gray border border-bsr-gray-light rounded-lg overflow-hidden hover:border-bsr-highlight transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image/Video */}
                <div className="relative h-64 bg-gradient-to-br from-bsr-gray-light to-bsr-gray">
                  {project.type === 'video' ? (
                    <div className="flex items-center justify-center h-full">
                      <Video size={48} className="text-bsr-highlight" />
                    </div>
                  ) : project.type === 'before-after' ? (
                    <div className="flex h-full">
                      <div className="w-1/2 bg-bsr-black flex items-center justify-center">
                        <span className="text-xs text-gray-400">Before</span>
                      </div>
                      <div className="w-1/2 bg-bsr-highlight flex items-center justify-center">
                        <span className="text-xs text-bsr-white">After</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <ImageIcon size={48} className="text-bsr-highlight" />
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-bsr-highlight text-bsr-white px-4 py-2 rounded-md font-medium">
                        View Project
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-bsr-white">{project.title}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-bsr-highlight fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{project.location}</span>
                    <div className="flex space-x-2">
                      {project.type === 'before-after' && (
                        <span className="text-xs bg-bsr-highlight text-bsr-white px-2 py-1 rounded-full">
                          Before/After
                        </span>
                      )}
                      <span className="text-xs bg-bsr-gray-light text-gray-300 px-2 py-1 rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-bsr-gray border border-bsr-gray-light rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-bsr-white">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-bsr-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="bg-bsr-black border border-bsr-gray-light rounded-lg h-64 flex items-center justify-center mb-4">
                <div className="text-center">
                  <ImageIcon size={48} className="text-bsr-highlight mx-auto mb-2" />
                  <p className="text-gray-400">Project detail view</p>
                </div>
              </div>
              
              <p className="text-gray-300">
                {projects.find(p => p.id === selectedProject)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
