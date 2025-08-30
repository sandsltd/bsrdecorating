'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'doors', name: 'Doors' },
    { id: 'external', name: 'External' },
    { id: 'internal', name: 'Internal' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Front Door Painting',
      category: 'doors',
      type: 'image',
      description: 'Professional front door painting with weather-resistant finishes and attention to detail',
      image: '/gallery/doors/front-door-painting.jpeg',
      images: [
        '/gallery/doors/front-door-painting.jpeg',
        '/gallery/doors/front-door-painting-2.jpeg'
      ],
      rating: 5,
      location: 'Dawlish'
    },
    {
      id: 2,
      title: 'Garage Door Painting',
      category: 'doors',
      type: 'image',
      description: 'Garage door painting and restoration with durable protective coatings',
      image: '/gallery/doors/garage-door-painting.jpeg',
      rating: 5,
      location: 'Teignmouth'
    },
    {
      id: 3,
      title: 'Exterior House Painting',
      category: 'external',
      type: 'image',
      description: 'External property painting with weather-resistant paints and protective finishes',
      image: '/gallery/external/exterior-painting.jpeg',
      images: [
        '/gallery/external/exterior-painting.jpeg',
        '/gallery/external/exterior-painting-2.jpeg'
      ],
      rating: 5,
      location: 'Torquay'
    },
    {
      id: 4,
      title: 'Interior Room Painting',
      category: 'internal',
      type: 'image',
      description: 'Professional interior painting with high-quality finishes and colour consultation',
      image: '/gallery/internal/living-room-transformation.jpeg',
      images: [
        '/gallery/internal/living-room-transformation.jpeg',
        '/gallery/internal/interior-painting-2.jpeg',
        '/gallery/internal/wallpaper-installation.jpeg'
      ],
      rating: 5,
      location: 'Exmouth'
    },
    {
      id: 5,
      title: 'Wallpaper Installation',
      category: 'internal',
      type: 'image',
      description: 'Expert wallpaper hanging with precise pattern matching and seamless finish',
      image: '/gallery/internal/wallpaper-installation.jpeg',
      rating: 5,
      location: 'Newton Abbot'
    },
    {
      id: 6,
      title: 'Bathroom Waterproof Painting',
      category: 'internal',
      type: 'image',
      description: 'Specialist bathroom painting with moisture-resistant finishes',
      image: '/gallery/internal/bathroom-renovation.jpeg',
      rating: 5,
      location: 'Dawlish'
    },
    {
      id: 7,
      title: 'Kitchen Decoration',
      category: 'internal',
      type: 'image',
      description: 'Kitchen painting with durable finishes suitable for high-use areas',
      image: '/gallery/internal/kitchen-renovation.jpeg',
      rating: 5,
      location: 'Bovey Tracey'
    },
    {
      id: 8,
      title: 'Bedroom Styling',
      category: 'internal',
      type: 'image',
      description: 'Bedroom decoration creating comfortable and stylish living spaces',
      image: '/gallery/internal/bedroom-makeover.jpeg',
      rating: 5,
      location: 'Kingsteignton'
    },
    {
      id: 9,
      title: 'Commercial Office Painting',
      category: 'commercial',
      type: 'image',
      description: 'Professional office space decoration for business environments',
      image: '/gallery/commercial/office-renovation.jpeg',
      rating: 5,
      location: 'Exeter'
    },
    {
      id: 10,
      title: 'Retail Space Decoration',
      category: 'commercial',
      type: 'image',
      description: 'Commercial retail environment painting and branding solutions',
      image: '/gallery/commercial/retail-space.jpeg',
      rating: 5,
      location: 'Plymouth'
    },
    {
      id: 11,
      title: 'Industrial & Warehouse',
      category: 'commercial',
      type: 'image',
      description: 'Large-scale industrial painting projects for warehouses and commercial buildings',
      image: '/gallery/commercial/warehouse-industrial.jpeg',
      rating: 5,
      location: 'Plymouth'
    },
    {
      id: 12,
      title: 'Room Transformation',
      category: 'internal',
      type: 'before-after',
      description: 'Complete room makeover showcasing our professional transformation capabilities',
      beforeImage: '/gallery/before-after/hall-transformation-before.jpeg',
      afterImage: '/gallery/before-after/hall-transformation-after.jpeg',
      rating: 5,
      location: 'Teignmouth'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
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
                <div className="relative h-64 overflow-hidden">
                  {project.type === 'video' ? (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-bsr-gray-light to-bsr-gray">
                      <Video size={48} className="text-bsr-highlight" />
                    </div>
                  ) : project.type === 'before-after' ? (
                    <div className="flex h-full">
                      <div className="w-1/2 relative">
                        {project.beforeImage && (
                          <Image
                            src={project.beforeImage}
                            alt={`${project.title} - Before`}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                          Before
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        {project.afterImage && (
                          <Image
                            src={project.afterImage}
                            alt={`${project.title} - After`}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute bottom-2 right-2 bg-bsr-highlight bg-opacity-90 text-white px-2 py-1 rounded text-xs">
                          After
                        </div>
                      </div>
                    </div>
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-bsr-gray-light to-bsr-gray">
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
                        <Star key={i} size={14} className="text-bsr-yellow fill-current" />
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

      {/* Image Carousel Modal */}
      {selectedProject && (() => {
        const project = projects.find(p => p.id === selectedProject);
        if (!project) return null;
        
        const projectImages = (project.images || [project.image]).filter(Boolean);
        const beforeAfterImages = project.type === 'before-after' 
          ? [project.beforeImage, project.afterImage].filter(Boolean)
          : [];
        const allImages = [...projectImages, ...beforeAfterImages].filter(Boolean);
        
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
              {allImages.length > 0 && allImages[currentImageIndex] && (
                <>
                  {/* Main Image */}
                  <div className="relative w-full h-full max-h-[80vh] bg-bsr-gray rounded-lg overflow-hidden">
                    <Image
                      src={allImages[currentImageIndex]!}
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
                        src={img as string}
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
    </div>
  );
}
