import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import BlogCTA from './BlogCTA';
import { blogPosts } from '@/data/blogPosts';
import { blogContent } from '@/data/blogContent';
import BlogContent from '@/components/BlogContent';

// Convert array to object for dynamic routing
const blogPostsMap = blogPosts.reduce((acc, post) => {
  acc[post.slug] = {
    ...post,
    author: "BSR Decorating Team",
    metaDescription: post.excerpt,
    keywords: getBlogKeywords(post.slug)
  };
  return acc;
}, {} as Record<string, {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  author: string;
  metaDescription: string;
  keywords: string;
}>);

// Helper function to get keywords for each blog post
function getBlogKeywords(slug: string): string {
  const keywordMap: Record<string, string> = {
    'end-tenancy-decorating-landlords-letting-agents': "end of tenancy decorating, landlord painting services, property management decorating, rental property maintenance, void period reduction",
    'professional-decorating-enhances-business-premises': "commercial decorating services, business painting contractors, office decorating, workplace transformation, professional painting",
    'cost-effective-decorating-rental-properties-hmos': "rental property decorating, HMO painting services, landlord decorating contractors, property investment decorating, cost effective painting"
  };
  return keywordMap[slug] || "";
}

// Helper function to get next/previous posts
function getAdjacentPosts(currentSlug: string) {
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentIndex = sortedPosts.findIndex(post => post.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
    next: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsMap[slug];
  const content = blogContent[slug];
  const { previous, next } = getAdjacentPosts(slug);

  if (!post || !content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-bsr-black via-bsr-gray to-bsr-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-bsr-highlight hover:text-[#d001e8] mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Blog</span>
          </Link>

          <div className="mb-6">
            <span className="bg-bsr-highlight text-bsr-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-bsr-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-300 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <span>By {post.author}</span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mb-16">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bsr-black/30 to-transparent"></div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-0 px-4 sm:px-6 lg:px-8 mb-16">
        <BlogContent sections={content.sections} />
      </article>

      {/* Article Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-bsr-gray-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Post */}
            <div className="text-left">
              {previous && (
                <Link 
                  href={`/blog/${previous.slug}`}
                  className="group block p-6 bg-bsr-gray border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 text-bsr-highlight mb-2">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="text-sm font-medium">Previous Post</span>
                  </div>
                  <h3 className="text-bsr-white font-semibold group-hover:text-bsr-highlight transition-colors duration-200 line-clamp-2">
                    {previous.title}
                  </h3>
                </Link>
              )}
            </div>

            {/* Next Post */}
            <div className="text-right">
              {next && (
                <Link 
                  href={`/blog/${next.slug}`}
                  className="group block p-6 bg-bsr-gray border border-bsr-gray-light rounded-lg hover:border-bsr-highlight transition-all duration-300"
                >
                  <div className="flex items-center justify-end space-x-2 text-bsr-highlight mb-2">
                    <span className="text-sm font-medium">Next Post</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <h3 className="text-bsr-white font-semibold group-hover:text-bsr-highlight transition-colors duration-200 line-clamp-2">
                    {next.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <BlogCTA />

      {/* SEO Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-bsr-white mb-4">
            Professional Decorating Services in Devon
          </h3>
          <p className="text-gray-300 mb-6">
            BSR Decorating provides expert painting and decorating services across Dawlish, Newton Abbot, Exeter, Torquay, and surrounding Devon areas. Contact us for reliable, professional decorating solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Dawlish Decorators</span>
            <span>•</span>
            <span>Newton Abbot Painting</span>
            <span>•</span>
            <span>Exeter Decorating</span>
            <span>•</span>
            <span>Commercial Decorating Devon</span>
            <span>•</span>
            <span>Residential Painting Services</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsMap[slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | BSR Decorating`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.image]
    }
  };
}
