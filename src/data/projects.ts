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
  },
  {
    id: 2,
    title: 'Georgian Property Porch Restoration',
    category: 'domestic',
    type: 'image',
    description: 'Interior and exterior decoration of a newly built porch on a Georgian property, replacing an old timber conservatory with professional finishing and attention to period details.',
    fullDescription: 'This was a small project carried out for a builder that had built a new porch on this Georgian property, removing the old timber conservatory. We carried out decoration of both the inside and the exterior, making good of the details on the exterior. The project required careful attention to the Georgian architectural style, ensuring that all decorative work complemented the property\'s historical character while providing a modern, durable finish.',
    location: 'Newton Abbot',
    year: 2025,
    duration: '1 week',
    specialFeatures: [
      'Georgian period property restoration',
      'New porch interior and exterior decoration',
      'Historical detail preservation',
      'Professional builder collaboration',
      'Period-appropriate finishing techniques',
      'Exterior detail making good'
    ],
    beforeAfter: false,
    image: '/portfolio/project2/PHOTO-2025-09-02-11-09-52.jpg',
    images: [
      '/portfolio/project2/PHOTO-2025-09-02-11-09-52.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-52 2.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-52 3.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-53.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-53 2.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-53 3.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-53 4.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-54.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-54 2.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-54 3.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-54 4.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-55.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-55 2.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-55 3.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-55 4.jpg',
      '/portfolio/project2/PHOTO-2025-09-02-11-09-56.jpg'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 3,
    title: 'Howden Insurance Shopfront Refresh',
    category: 'commercial',
    type: 'image',
    description: 'Complete shopfront refresh for two Howden Insurance locations in Exeter and Newton Abbot, implementing their new corporate colour scheme with professional commercial decorating standards.',
    fullDescription: 'We carried out a comprehensive refresh on 2 shopfronts for Howden Insurance based in Exeter and Newton Abbot, bringing in their new colour scheme. This commercial project required careful attention to corporate branding standards, ensuring consistent application of the new colour palette across both locations. The work involved exterior shopfront painting, signage preparation, and coordination with business operations to minimize disruption to daily operations.',
    location: 'Exeter & Newton Abbot',
    year: 2025,
    duration: '2 weeks',
    specialFeatures: [
      'Corporate branding implementation',
      'Multi-location project coordination',
      'New colour scheme application',
      'Minimal business disruption',
      'Professional commercial standards',
      'Consistent brand presentation'
    ],
    beforeAfter: false,
    image: '/portfolio/project3/PHOTO-2025-09-02-11-10-05.jpg',
    images: [
      '/portfolio/project3/PHOTO-2025-09-02-11-10-05.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-10-06.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-10-06 2.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-10-06 3.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-11-00.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-11-02.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-11-03.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-11-03 2.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-11-03 3.jpg',
      '/portfolio/project3/PHOTO-2025-09-02-11-11-04.jpg'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 4,
    title: 'Eco-Friendly Passive House Project',
    category: 'domestic',
    type: 'image',
    description: 'Complete spray application of water-based environmentally friendly paint on a brand-new passive house in Exeter, maintaining eco-conscious principles while delivering exceptional durability and breathability.',
    fullDescription: 'This was a brand-new property in Exeter where we were contracted to spray everything with water-based environmentally friendly paint that\'s highly breathable but also maintains a durable finish. Being a brand-new passive house, we kept the eco-conscious theme from the architect and worked very well alongside them. The project required specialized knowledge of sustainable building practices and eco-friendly materials, ensuring the paint system complemented the passive house energy efficiency standards.',
    location: 'Exeter',
    year: 2025,
    duration: '3 weeks',
    specialFeatures: [
      'Water-based environmentally friendly paint',
      'Passive house specialized application',
      'Highly breathable yet durable finish',
      'Eco-conscious material selection',
      'Architect collaboration',
      'Sustainable building standards compliance'
    ],
    beforeAfter: false,
    image: '/portfolio/project4/PHOTO-2025-09-02-11-12-51.jpg',
    images: [
      '/portfolio/project4/PHOTO-2025-09-02-11-12-51.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-12-53.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-12-54.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-12-55.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-12-56.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-12-58.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-06.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-07.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-09.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-13.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-16.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-17.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-19.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-20.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-20 2.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-20 3.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-20 4.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-21.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-21 2.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-21 3.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-22.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-22 2.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-22 3.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-23.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-23 2.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-23 3.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-23 4.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-24.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-24 2.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-24 3.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-24 4.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-25.jpg',
      '/portfolio/project4/PHOTO-2025-09-02-11-13-25 2.jpg'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 5,
    title: 'Multi-Property Exterior Restoration',
    category: 'commercial',
    type: 'image',
    description: 'Large-scale exterior renovation for property management company covering 16 properties with specialized coastal protection.',
    fullDescription: 'This was a large exterior project carried out in Dawlish for a property management company. We were tasked with carrying out all the decoration work on 16 properties, repairing extensive cracks, removing all previously failed paint, and rectifying rust issues from sea damage on metal beads. We worked closely with a paint manufacturer to ensure the buildings receive the full protection needed for coastal conditions.',
    location: 'Dawlish',
    year: 2024,
    duration: '8 weeks',
    specialFeatures: [
      'Multi-property coordination (16 buildings)',
      'Coastal weather protection specialist coatings',
      'Manufacturer collaboration for optimal paint systems',
      'Extensive crack repair and surface preparation',
      'Sea damage restoration on metalwork'
    ],
    beforeAfter: false,
    image: '/portfolio/project5/PHOTO-2025-09-02-11-16-48.jpg',
    images: [
      '/portfolio/project5/PHOTO-2025-09-02-11-16-48.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-48 5.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-48 4.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-48 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-48 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-47.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-47 5.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-47 4.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-47 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-47 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-46.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-46 4.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-46 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-46 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-45.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-45 5.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-45 4.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-45 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-45 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-44.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-44 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-44 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-43.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-43 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-43 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-42.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-42 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-41.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-41 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-41 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-40.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-40 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-39.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-39 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-39 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-38.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-38 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-38 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-37.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-37 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-37 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-36.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-36 4.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-36 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-36 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-35.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-35 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-35 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-34.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-34 3.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-34 2.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-33.jpg',
      '/portfolio/project5/PHOTO-2025-09-02-11-16-33 2.jpg'
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

// Helper function to get featured projects by category
export const getFeaturedProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.featured && project.category === category);
};

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
