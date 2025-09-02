export interface Project {
  id: number;
  title: string;
  category: 'timber-repair' | 'doors' | 'external' | 'internal' | 'commercial' | 'domestic';
  type: 'image' | 'video';
  description: string;
  fullDescription?: string;
  location: string;
  year?: number;
  duration?: string;
  specialFeatures?: string[];
  beforeAfter?: boolean;
  image: string; // Main thumbnail image
  images?: string[]; // Additional images
  videos?: string[]; // Video files
  rating: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Historic Farmhouse Timber Restoration',
    category: 'domestic',
    type: 'image',
    description: 'Extensive timber repair and restoration work on a traditional farmhouse near Honiton, bringing 25-year-old weathered timber back to life with seamless repairs.',
    fullDescription: 'This property required extensive timber repair work on a beautiful farmhouse located in Fenny Bridges near Honiton. The property hadn\'t undergone any significant maintenance work for nearly 25 years, making this a truly massive undertaking. Our skilled craftsmen meticulously spliced in new timber sections, ensuring every repair was seamlessly integrated to look as if the repairs were never there. The project demanded exceptional attention to detail, matching wood grain patterns, aging techniques, and traditional joinery methods to preserve the farmhouse\'s authentic character while ensuring structural integrity for decades to come.',
    location: 'Fenny Bridges, Honiton',
    year: 2025,
    duration: '3 weeks',
    specialFeatures: [
      'Heritage timber matching and splicing',
      'Traditional joinery techniques',
      'Seamless repair integration',
      '25-year restoration project',
      'Weather damage restoration',
      'Structural integrity reinforcement'
    ],
    beforeAfter: true,
    image: '/portfolio/project1/PHOTO-2025-09-02-11-07-28.jpg', // Using one of the highest quality images as main
    images: [
      '/portfolio/project1/PHOTO-2025-09-02-11-07-28.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-49.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-53.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-08.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-08 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-08 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-09.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-09 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-09 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-27.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-27 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-26.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-26 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-26 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-25.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-25 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-25 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-24.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-24 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-23.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-23 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-23 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-22.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-22 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-22 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-22 4.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-22 5.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-21.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-21 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-21 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-21 4.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-20.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-20 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-20 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-19.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-19 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-18.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-18 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-18 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-17.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-17 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-16.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-16 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-16 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-15.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-15 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-14.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-14 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-13.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-13 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-13 3.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-12.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-12 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-10.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-10 2.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-07-09.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-05.jpg',
      '/portfolio/project1/PHOTO-2025-09-02-11-08-07.jpg'
    ],
    videos: [
      '/portfolio/project1/VIDEO-2025-09-02-11-07-27.mp4',
      '/portfolio/project1/VIDEO-2025-09-02-11-07-36.mp4',
      '/portfolio/project1/VIDEO-2025-09-02-11-07-44.mp4'
    ],
    rating: 5,
    featured: true
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category?: string): Project[] => {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
