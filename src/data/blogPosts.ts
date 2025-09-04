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
    title: "The Importance of End-of-Tenancy Decorating for Landlords and Letting Agents",
    excerpt: "Discover how professional end-of-tenancy decorating can reduce void periods, attract quality tenants, and maximise rental returns for landlords and letting agents.",
    category: "Landlord Services",
    date: "2025-01-20",
    readTime: "8 min read",
    image: "/images/to let.png",
    slug: "end-tenancy-decorating-landlords-letting-agents"
  },
  {
    id: 2,
    title: "How Professional Decorating Enhances Your Business Premises",
    excerpt: "Transform your business environment with professional commercial decorating. Discover how the right colours and finishes can boost staff morale, impress customers, and reflect your brand values.",
    category: "Commercial Services",
    date: "2025-01-18",
    readTime: "7 min read",
    image: "/images/office decorating.png",
    slug: "professional-decorating-enhances-business-premises"
  },
  {
    id: 3,
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
  { name: "Landlord Services", count: 1 },
  { name: "Commercial Services", count: 1 },
  { name: "Property Investment", count: 1 }
];

// Helper function to get the latest blog posts (sorted by date)
export const getLatestBlogPosts = (count: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
