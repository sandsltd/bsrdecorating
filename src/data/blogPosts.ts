export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Luxury Decorating Trends in Exeter",
    excerpt: "Discover the latest luxury decorating trends for Exeter's most prestigious areas including St. Leonard's, Pennsylvania, and Newtown. From heritage restoration to modern luxury finishes.",
    category: "Luxury Decorating",
    date: "2025-01-25",
    readTime: "12 min read",
    image: "/portfolio/project1/PHOTO-2025-09-02-11-07-09.jpg",
    slug: "luxury-decorating-trends-exeter"
  },
  {
    id: 2,
    title: "Heritage Property Restoration in Topsham",
    excerpt: "Expert guide to heritage property restoration in Topsham's conservation area. Learn about period techniques, conservation compliance, and traditional materials for historic homes.",
    category: "Heritage Restoration",
    date: "2025-01-23",
    readTime: "10 min read",
    image: "/portfolio/project2/PHOTO-2025-09-02-11-09-52.jpg",
    slug: "heritage-property-restoration-topsham"
  },
  {
    id: 3,
    title: "Commercial Office Decorating in Exeter City Centre",
    excerpt: "Professional commercial office decorating strategies for Exeter's business district. From historic city centre offices to modern business parks, discover premium decorating solutions.",
    category: "Commercial Services",
    date: "2025-01-21",
    readTime: "9 min read",
    image: "/portfolio/project5/PHOTO-2025-09-02-11-16-33.jpg",
    slug: "commercial-office-decorating-exeter-city-centre"
  },
  {
    id: 4,
    title: "Autumn Decorating Trends for Devon Homes",
    excerpt: "Discover the latest autumn decorating trends perfect for Devon properties. From warm autumnal shades to seasonal colour schemes, transform your Exeter or Topsham home with mellow autumn colours.",
    category: "Seasonal Trends",
    date: "2025-01-24",
    readTime: "8 min read",
        image: "/portfolio/project19/PHOTO-2025-09-03-11-18-18.jpg",
    slug: "autumn-decorating-trends-devon-homes"
  },
  {
    id: 5,
    title: "Waterfront Property Maintenance in Topsham",
    excerpt: "Specialist guide to waterfront property maintenance in Topsham's riverside location. Marine-grade protection, salt air resistance, and flood-resistant finishes for estuary properties.",
    category: "Waterfront Maintenance",
    date: "2025-01-19",
    readTime: "11 min read",
    image: "/portfolio/project11/PHOTO-2025-09-02-11-40-49.jpg",
    slug: "waterfront-property-maintenance-topsham"
  },
  {
    id: 6,
    title: "The Importance of End-of-Tenancy Decorating for Landlords and Letting Agents",
    excerpt: "Discover how professional end-of-tenancy decorating can reduce void periods, attract quality tenants, and maximise rental returns for landlords and letting agents.",
    category: "Landlord Services",
    date: "2025-01-20",
    readTime: "8 min read",
    image: "/images/to let.png",
    slug: "end-tenancy-decorating-landlords-letting-agents"
  },
  {
    id: 7,
    title: "How Professional Decorating Enhances Your Business Premises",
    excerpt: "Transform your business environment with professional commercial decorating. Discover how the right colours and finishes can boost staff morale, impress customers, and reflect your brand values.",
    category: "Commercial Services",
    date: "2025-01-18",
    readTime: "7 min read",
    image: "/images/office decorating.png",
    slug: "professional-decorating-enhances-business-premises"
  },
  {
    id: 8,
    title: "Cost-Effective Decorating Solutions for Rental Properties and HMOs",
    excerpt: "Maximise your rental property portfolio with smart decorating choices. Learn about hardwearing finishes, strategic colour schemes, and efficient turnaround solutions for HMOs and rental properties.",
    category: "Property Investment",
    date: "2025-01-15",
    readTime: "9 min read",
    image: "/images/affordable decorating.png",
    slug: "cost-effective-decorating-rental-properties-hmos"
  }
];

export const categories = [
  { name: "All Posts", count: blogPosts.length },
  { name: "Luxury Decorating", count: 1 },
  { name: "Heritage Restoration", count: 1 },
  { name: "Commercial Services", count: 2 },
  { name: "Waterfront Maintenance", count: 1 },
  { name: "Seasonal Trends", count: 1 },
  { name: "Landlord Services", count: 1 },
  { name: "Property Investment", count: 1 }
];

// Helper function to get the latest blog posts (sorted by date)
export const getLatestBlogPosts = (count: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
