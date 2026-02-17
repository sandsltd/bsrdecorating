export const CONFIG = {
  // Google Search Console
  gscSiteUrl: "sc-domain:bsrdecorating.co.uk",

  // File paths
  strategyDocPath: "docs/seo-strategy.md",
  blogPostsPath: "src/data/blogPosts.ts",
  blogContentPath: "src/data/blogContent.ts",
  blogKeywordsPath: "src/app/blog/[slug]/page.tsx",

  // Content generation
  contentModel: "claude-sonnet-4-5-20250929" as const,
  maxBlogWordCount: 1500,
  minBlogWordCount: 1000,

  // Email
  emailFrom: "noreply@bsrdecorating.co.uk",
  emailSubjectPrefix: "BSR Decorating SEO Report",

  // Site
  siteUrl: "https://www.bsrdecorating.co.uk",
  siteName: "BSR Decorating",
};
