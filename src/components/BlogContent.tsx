import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogSection } from '@/data/blogContent';

interface BlogContentProps {
  sections: BlogSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
  // Helper function to render text with inline links
  const renderTextWithLinks = (text: string) => {
    // Split text by [link](url) pattern
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      // Add the link
      parts.push(
        <Link
          key={match.index}
          href={match[2]}
          className="text-bsr-highlight hover:text-[#d001e8] underline font-medium transition-colors duration-200"
        >
          {match[1]}
        </Link>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 1 ? parts : text;
  };

  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'paragraph':
        return (
          <p 
            key={index} 
            className="text-gray-300 leading-relaxed mb-6 text-lg"
          >
            {typeof section.content === 'string' ? renderTextWithLinks(section.content) : section.content}
          </p>
        );

      case 'heading':
        const HeadingTag = `h${section.level || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        const headingClasses = {
          1: "text-4xl md:text-5xl font-bold text-bsr-white mb-8 mt-12",
          2: "text-3xl font-bold text-bsr-highlight mb-6 mt-12",
          3: "text-2xl font-semibold text-bsr-white mb-4 mt-8",
          4: "text-xl font-semibold text-bsr-white mb-3 mt-6",
          5: "text-lg font-semibold text-bsr-white mb-2 mt-4",
          6: "text-base font-semibold text-bsr-white mb-2 mt-4"
        };
        
        return (
          <HeadingTag 
            key={index} 
            className={headingClasses[section.level as keyof typeof headingClasses] || headingClasses[2]}
          >
            {section.content}
          </HeadingTag>
        );

      case 'subheading':
        return (
          <h3 
            key={index} 
            className="text-2xl font-semibold text-bsr-white mb-4 mt-8"
          >
            {section.content}
          </h3>
        );

      case 'list':
        const listItems = Array.isArray(section.content) ? section.content : [section.content];
        return (
          <ul key={index} className="mb-6 space-y-3">
            {listItems.map((item, itemIndex) => (
              <li 
                key={itemIndex} 
                className="text-gray-300 leading-relaxed flex items-start"
              >
                <span className="text-bsr-highlight mr-3 mt-1.5 flex-shrink-0">•</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'quote':
        return (
          <blockquote 
            key={index} 
            className="my-8 p-6 bg-bsr-gray border-l-4 border-bsr-highlight rounded-r-lg"
          >
            <p className="text-bsr-white text-xl font-medium italic leading-relaxed">
              &ldquo;{section.content}&rdquo;
            </p>
          </blockquote>
        );

      case 'image':
        if (typeof section.content === 'string') {
          return (
            <div key={index} className="my-8">
              <Image
                src={section.content}
                alt={section.imageAlt || 'Blog image'}
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {section.imageAlt && (
                <p className="text-center text-gray-400 text-sm mt-2">
                  {section.imageAlt}
                </p>
              )}
            </div>
          );
        }
        return null;

      case 'link':
        if (section.href && section.linkText) {
          return (
            <div key={index} className="my-6">
              <Link
                href={section.href}
                className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#d001e8] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>{section.linkText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}
