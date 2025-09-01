# BSR Blog Management Guide

This guide explains how to easily add new blog posts to the BSR Decorating website.

## Quick Overview

The blog system uses two main files:
- `/src/data/blogPosts.ts` - Blog metadata (title, date, category, etc.)
- `/src/data/blogContent.ts` - Blog content structure (headings, paragraphs, lists, etc.)

## Adding a New Blog Post

### Step 1: Add Blog Metadata

Open `/src/data/blogPosts.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  id: 4, // Next sequential number
  title: "Your Blog Post Title",
  excerpt: "A brief description of the blog post for previews and SEO",
  category: "Category Name", // e.g., "Tips & Advice", "Commercial Services"
  date: "2025-01-25", // YYYY-MM-DD format
  readTime: "6 min read",
  image: "/images/your-blog-image.jpg", // Add image to /public/images/
  slug: "your-blog-post-slug" // URL-friendly version (lowercase, hyphens)
}
```

### Step 2: Add Blog Content

Open `/src/data/blogContent.ts` and add content for your new post:

```typescript
'your-blog-post-slug': {
  sections: [
    {
      type: 'paragraph',
      content: 'Your opening paragraph content...'
    },
    {
      type: 'heading',
      content: 'Main Section Title',
      level: 2
    },
    {
      type: 'paragraph',
      content: 'More content...'
    },
    {
      type: 'list',
      content: [
        'First bullet point',
        'Second bullet point',
        'Third bullet point'
      ]
    },
    {
      type: 'quote',
      content: 'An important quote or callout text'
    }
  ]
}
```

### Step 3: Add Keywords (Optional)

In `/src/app/blog/[slug]/page.tsx`, update the `getBlogKeywords` function:

```typescript
function getBlogKeywords(slug: string): string {
  const keywordMap: Record<string, string> = {
    // ... existing entries
    'your-blog-post-slug': "keyword1, keyword2, keyword3, SEO keywords"
  };
  return keywordMap[slug] || "";
}
```

### Step 4: Update Categories (If New)

If you're adding a new category, update `/src/data/blogPosts.ts`:

```typescript
export const categories = [
  { name: "All Posts", count: blogPosts.length },
  { name: "Landlord Services", count: 1 },
  { name: "Commercial Services", count: 1 },
  { name: "Property Investment", count: 1 },
  { name: "Your New Category", count: 1 } // Add new category
];
```

## Content Section Types

### Paragraph
```typescript
{
  type: 'paragraph',
  content: 'Your paragraph text here...'
}
```

### Headings
```typescript
{
  type: 'heading',
  content: 'Your Heading Text',
  level: 2 // 1-6, where 1 is largest
}
```

### Subheadings
```typescript
{
  type: 'subheading',
  content: 'Your Subheading Text'
}
```

### Lists
```typescript
{
  type: 'list',
  content: [
    'First list item',
    'Second list item',
    'Third list item'
  ]
}
```

### Quotes/Callouts
```typescript
{
  type: 'quote',
  content: 'Important quote or highlighted text'
}
```

### Images (Future Feature)
```typescript
{
  type: 'image',
  content: '/images/blog-image.jpg',
  imageAlt: 'Description of the image'
}
```

### Internal Links (Buttons)
```typescript
{
  type: 'link',
  href: '/domestic',
  linkText: 'View Our Domestic Services'
}
```

### Inline Links (Within Text)
Use markdown-style links within paragraph content:
```typescript
{
  type: 'paragraph',
  content: 'Check out our [domestic decorating services](/domestic) for more information.'
}
```

## Design Features

The blog system automatically provides:

- ✅ **Professional Typography** - Properly styled headings, paragraphs, and lists
- ✅ **Responsive Design** - Works on all devices
- ✅ **SEO Optimization** - Meta tags, structured data, keywords
- ✅ **Navigation** - Previous/next post links
- ✅ **Consistent Branding** - BSR color scheme and styling
- ✅ **Featured Images** - Hero image for each post
- ✅ **Category Tags** - Visual category indicators
- ✅ **Date Formatting** - UK date format
- ✅ **Reading Time** - Estimated reading time
- ✅ **Author Attribution** - BSR Decorating Team
- ✅ **Call-to-Action** - Quote request integration
- ✅ **Social Sharing** - Open Graph and Twitter meta tags

## Best Practices

### Writing Content
- Start with an engaging opening paragraph
- Use clear, descriptive headings
- Break up long content with subheadings
- Include bullet points for easy scanning
- Add quotes for important points
- Keep paragraphs to 2-3 sentences max

### SEO Optimization
- Include target keywords naturally in content
- Use descriptive, keyword-rich titles
- Write compelling excerpts (140-160 characters)
- Choose URL-friendly slugs
- Include location keywords (Devon, Dawlish, etc.)

### Images
- Use high-quality images (800px+ width)
- Optimize file sizes for web
- Use descriptive file names
- Add images to `/public/images/` folder
- Use relevant images that support the content

## File Structure

```
src/
├── data/
│   ├── blogPosts.ts          # Blog metadata and list
│   └── blogContent.ts        # Structured blog content
├── components/
│   └── BlogContent.tsx       # Renders blog content sections
└── app/
    └── blog/
        ├── page.tsx          # Blog listing page
        └── [slug]/
            ├── page.tsx      # Individual blog post page
            └── BlogCTA.tsx   # Call-to-action component
```

## Examples

Look at the existing blog posts for examples:
- `end-tenancy-decorating-landlords-letting-agents`
- `professional-decorating-enhances-business-premises`
- `cost-effective-decorating-rental-properties-hmos`

These show how to structure content effectively and write for your target audience.

## Testing Your New Post

1. Add the blog post data and content
2. Start the development server: `npm run dev`
3. Visit: `http://localhost:3000/blog/your-blog-post-slug`
4. Check the blog listing: `http://localhost:3000/blog`
5. Verify it appears on the homepage: `http://localhost:3000`

Your new blog post will automatically appear in:
- The main blog listing page
- The homepage "Latest Blog Posts" section (if it's one of the 3 most recent)
- Navigation between posts
- All with proper SEO and styling applied automatically!
