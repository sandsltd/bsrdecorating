'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogSection } from '@/data/blogContent';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

interface BlogContentProps {
  sections: BlogSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
  const { openQuoteModal } = useQuoteModal();
  
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
          className="text-bsr-highlight hover:text-[#A800B6] underline font-medium transition-colors duration-200"
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
            {typeof section.content === 'string' ? renderTextWithLinks(section.content) : 
             Array.isArray(section.content) ? section.content.join(' ') : 
             section.content}
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
            {typeof section.content === 'string' ? section.content : 
             Array.isArray(section.content) ? section.content.join(' ') : 
             section.content}
          </HeadingTag>
        );

      case 'subheading':
        return (
          <h3 
            key={index} 
            className="text-2xl font-semibold text-bsr-white mb-4 mt-8"
          >
            {typeof section.content === 'string' ? section.content : 
             Array.isArray(section.content) ? section.content.join(' ') : 
             section.content}
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
                <span className="text-lg">{typeof item === 'string' ? item : String(item)}</span>
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
              &ldquo;{typeof section.content === 'string' ? section.content : 
               Array.isArray(section.content) ? section.content.join(' ') : 
               section.content}&rdquo;
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
                className="inline-flex items-center space-x-2 bg-bsr-highlight hover:bg-[#A800B6] text-bsr-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>{section.linkText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        }
        return null;

      case 'colorPalette':
        if (Array.isArray(section.content)) {
          return (
            <div key={index} className="my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.content.map((color, colorIndex) => {
                  // Type guard to ensure it's a ColorSwatch
                  if (typeof color === 'object' && color !== null && 'hex' in color && 'name' in color && 'description' in color) {
                    return (
                      <div 
                        key={colorIndex}
                        className="bg-bsr-gray border border-bsr-gray-light rounded-lg p-4 hover:border-bsr-highlight transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div 
                            className="w-12 h-12 rounded-lg border-2 border-gray-600 shadow-sm"
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <div className="flex-1">
                            <h4 className="text-bsr-white font-semibold text-sm">{color.name}</h4>
                            <p className="text-gray-400 text-xs">{color.hex}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">{color.description}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        }
        return null;

      case 'quoteCTA':
        return (
          <div key={index} className="my-8 p-6 bg-bsr-gray border border-bsr-highlight rounded-lg text-center">
            <p className="text-bsr-white text-lg mb-4">
              {typeof section.content === 'string' ? section.content : 
               Array.isArray(section.content) ? section.content.join(' ') : 
               section.content}
            </p>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center space-x-2 bg-bsr-yellow hover:bg-bsr-yellow-light text-bsr-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        );

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
