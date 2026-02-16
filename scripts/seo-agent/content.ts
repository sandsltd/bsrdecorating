import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

interface RankingData {
  keyword: string;
  position: number | null;
  previousPosition: string;
}

interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "quote" | "image" | "link" | "quoteCTA";
  content?: string | string[];
  level?: number;
  imageAlt?: string;
  href?: string;
  linkText?: string;
}

interface GeneratedPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  targetKeyword: string;
  sections: BlogSection[];
  isRefresh: boolean;
}

interface ExistingPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
}

function getExistingPosts(): {
  slugs: Set<string>;
  titles: string[];
  posts: ExistingPost[];
  nextId: number;
} {
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  const slugs = new Set<string>();
  const titles: string[] = [];
  const posts: ExistingPost[] = [];
  let maxId = 0;

  if (!fs.existsSync(postsPath)) return { slugs, titles, posts, nextId: 1 };

  const content = fs.readFileSync(postsPath, "utf-8");

  // Parse blog post entries from the TypeScript file
  const postRegex = /\{\s*id:\s*(\d+)\s*,\s*title:\s*["']([^"']+)["']\s*,\s*excerpt:\s*["']([^"']*?)["']\s*,\s*category:\s*["']([^"']+)["']\s*,\s*date:\s*["']([^"']+)["']\s*,[^}]*slug:\s*["']([^"']+)["']\s*[,}]/gs;
  let match;

  while ((match = postRegex.exec(content)) !== null) {
    const id = parseInt(match[1]);
    const title = match[2];
    const category = match[4];
    const date = match[5];
    const slug = match[6];

    slugs.add(slug);
    titles.push(title);
    posts.push({ id, title, slug, category, date });
    if (id > maxId) maxId = id;
  }

  return { slugs, titles, posts, nextId: maxId + 1 };
}

function pickNextTopic(strategyContent: string): {
  keyword: string;
  context: string;
  category: string;
} | null {
  const { slugs } = getExistingPosts();

  // Extract only the Blog Topic Queue section to avoid matching other tables
  const startMarker = "### Blog Topic Queue";
  const endMarker = "### Already Published";
  const startIdx = strategyContent.indexOf(startMarker);
  const endIdx = strategyContent.indexOf(endMarker, startIdx);
  const topicSection = startIdx !== -1
    ? (endIdx !== -1 ? strategyContent.slice(startIdx, endIdx) : strategyContent.slice(startIdx))
    : strategyContent;

  // Parse the Blog Topic Queue from the strategy doc
  const topicRegex = /\|\s*\d+\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*[^|]+?\s*\|\s*(No|Partial)\s*\|/g;
  let match;

  while ((match = topicRegex.exec(topicSection)) !== null) {
    const topic = match[1].trim();
    const keyword = match[2].trim();
    const status = match[3].trim();

    if (status === "No") {
      // Determine category from the keyword/topic
      const category = inferCategory(topic, keyword);
      return { keyword, context: topic, category };
    }
  }

  return null;
}

function inferCategory(topic: string, keyword: string): string {
  const text = (topic + " " + keyword).toLowerCase();
  if (text.includes("kitchen") || text.includes("spraying")) return "Kitchen Spraying";
  if (text.includes("heritage") || text.includes("conservation") || text.includes("listed") || text.includes("period") || text.includes("limewash") || text.includes("breathable")) return "Heritage Restoration";
  if (text.includes("exterior") || text.includes("weather") || text.includes("coastal") || text.includes("devon climate")) return "Expert Advice";
  if (text.includes("commercial") || text.includes("business")) return "Commercial Services";
  if (text.includes("landlord") || text.includes("hmo") || text.includes("rental")) return "Landlord Services";
  if (text.includes("cost") || text.includes("price") || text.includes("how much")) return "Pricing Guide";
  if (text.includes("trend") || text.includes("season") || text.includes("spring") || text.includes("winter") || text.includes("autumn")) return "Seasonal Trends";
  if (text.includes("damp") || text.includes("new build") || text.includes("eco")) return "Expert Advice";
  return "Expert Advice";
}

async function generateNewTopic(
  strategyContent: string
): Promise<{ keyword: string; context: string; category: string }> {
  const { titles } = getExistingPosts();
  const anthropic = new Anthropic();

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are an SEO strategist for BSR Decorating (bsrdecorating.co.uk), a painter and decorator based in Dawlish, Devon, targeting Exeter and Topsham markets.

## SEO Strategy
${strategyContent}

## Existing Blog Posts
${titles.length > 0 ? titles.map((t) => `- ${t}`).join("\n") : "None yet."}

## Your Task
Suggest ONE new blog post topic that would be valuable for SEO. Consider:
- Long-tail keywords homeowners in Exeter and Topsham might search for
- Heritage and conservation area decorating (994 listed buildings in Exeter, 20 conservation areas)
- Kitchen spraying as a growing niche
- Period property painting challenges specific to Devon
- Topics that complement existing posts without duplicating them
- Seasonal angles relevant to the Exeter decorating market

Respond in EXACTLY this JSON format, nothing else:
{"keyword": "the target keyword phrase", "context": "A 1-2 sentence description of the article angle", "category": "one of: Expert Advice, Heritage Restoration, Seasonal Trends, Commercial Services, Waterfront Maintenance, Luxury Decorating, Landlord Services, Property Investment, Pricing Guide, Kitchen Spraying"}`,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";
  return JSON.parse(text);
}

function findPostToRefresh(
  rankings: RankingData[]
): { post: ExistingPost; reason: string } | null {
  const { posts } = getExistingPosts();
  if (posts.length === 0) return null;

  const now = new Date();

  for (const post of posts) {
    const publishedDate = new Date(post.date);
    const ageInDays =
      (now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays < 60) continue;

    // For BSR, we match on slug-derived keywords since there's no explicit targetKeyword field
    // Check if any ranking keyword appears in the slug
    for (const ranking of rankings) {
      const slugWords = post.slug.toLowerCase().replace(/-/g, " ");
      const keywordWords = ranking.keyword.toLowerCase();

      // Check for meaningful overlap
      const keywordParts = keywordWords.split(" ");
      const matchCount = keywordParts.filter((part) =>
        slugWords.includes(part)
      ).length;

      if (matchCount < keywordParts.length * 0.5) continue;

      // Detect declining rankings
      const prevMatch = ranking.previousPosition.match(/Position ([\d.]+)/);
      if (prevMatch && ranking.position !== null) {
        const prev = parseFloat(prevMatch[1]);
        const drop = ranking.position - prev;
        if (drop >= 5) {
          return {
            post,
            reason: `Ranking dropped from #${prev} to #${ranking.position} for "${ranking.keyword}"`,
          };
        }
      }

      // Detect posts that were indexed but are now gone
      if (prevMatch && ranking.position === null) {
        return {
          post,
          reason: `Lost ranking for "${ranking.keyword}" (was Position ${prevMatch[1]}, now not indexed)`,
        };
      }

      // Detect posts older than 4 months that never ranked
      if (ageInDays > 120 && ranking.position === null) {
        return {
          post,
          reason: `Published ${Math.round(ageInDays)} days ago and still not ranking for "${ranking.keyword}"`,
        };
      }
    }
  }

  return null;
}

export async function generateBlogPost(
  strategyContent: string,
  rankings: RankingData[] = []
): Promise<GeneratedPost | null> {
  // Check if any existing post needs refreshing first
  const refreshCandidate = findPostToRefresh(rankings);

  if (refreshCandidate) {
    console.log(
      `Refreshing post: "${refreshCandidate.post.title}" — ${refreshCandidate.reason}`
    );
    return await refreshPost(refreshCandidate.post, refreshCandidate.reason, strategyContent);
  }

  let topic = pickNextTopic(strategyContent);

  if (!topic) {
    console.log(
      "All planned topics covered. Generating a new topic with AI..."
    );
    topic = await generateNewTopic(strategyContent);
    console.log(`AI suggested topic: "${topic.keyword}"`);
  }

  console.log(`Generating blog post for keyword: "${topic.keyword}"`);

  const anthropic = new Anthropic();
  const today = new Date().toISOString().split("T")[0];

  const prompt = `You are writing a blog post for BSR Decorating (bsrdecorating.co.uk), a painter and decorator based in Dawlish, Devon, serving Exeter, Topsham, and surrounding areas. They have 20+ years experience and specialise in domestic, commercial, heritage/period properties, kitchen spraying, and eco-friendly paints.

## SEO Strategy Context
${strategyContent}

## Your Task
Write a blog post targeting this keyword: "${topic.keyword}"
Context: ${topic.context}

## Requirements
- Length: ${CONFIG.minBlogWordCount}-${CONFIG.maxBlogWordCount} words
- Language: UK English (use "s" not "z" in words like "optimisation", "organisation")
- Tone: Professional but approachable. Expert knowledge through specifics, not jargon. Local and personal — reference specific Exeter/Topsham streets, landmarks, and areas.
- Include the target keyword naturally 3-5 times. Don't keyword-stuff.
- Reference specific Exeter data: 994 listed buildings, 20 conservation areas, specific property prices from the strategy doc
- Include internal links using markdown format [text](/path) — link to at least 2 other BSR pages (area pages, service pages, or blog posts)
- Use industry terminology but explain it. Write for homeowners, not decorators.
- Structure with clear H2 and H3 headings
- Include a practical, actionable conclusion with a call to action mentioning BSR Decorating

## CRITICAL: Output Format
You MUST return a JSON object with this EXACT structure. No explanation, no code fences, just the JSON:

{
  "title": "Post Title Here",
  "slug": "url-friendly-slug-here",
  "excerpt": "A compelling 1-2 sentence excerpt under 200 characters",
  "readTime": "X min read",
  "sections": [
    {"type": "paragraph", "content": "Opening paragraph text. Can include [internal links](/path)."},
    {"type": "heading", "content": "Main Section Heading", "level": 2},
    {"type": "paragraph", "content": "Section content..."},
    {"type": "subheading", "content": "Subsection Heading", "level": 3},
    {"type": "list", "content": ["Bullet point 1", "Bullet point 2", "Bullet point 3"]},
    {"type": "quote", "content": "A relevant quote or key takeaway"},
    {"type": "quoteCTA", "content": "Ready to transform your home? Contact BSR Decorating for a free, no-obligation quote."}
  ]
}

Section types available:
- "paragraph": content is a string (supports [link text](/url) for internal links)
- "heading": content is string, level is 2
- "subheading": content is string, level is 3
- "list": content is string[] (array of bullet points)
- "quote": content is a string
- "quoteCTA": content is a string (call-to-action, use at end of post)

Important: Do NOT use markdown formatting (no **, no ##). Just plain text in sections. The rendering handles formatting.`;

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  try {
    // Strip code fences and find the JSON object
    let cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    // If the response doesn't start with {, try to find the JSON object
    const jsonStart = cleaned.indexOf("{");
    const jsonEnd = cleaned.lastIndexOf("}");
    if (jsonStart !== -1 && jsonEnd > jsonStart) {
      cleaned = cleaned.slice(jsonStart, jsonEnd + 1);
    }
    const parsed = JSON.parse(cleaned);

    console.log(`Blog post generated: "${parsed.title}" (${parsed.slug})`);

    return {
      title: parsed.title,
      slug: parsed.slug,
      excerpt: parsed.excerpt,
      category: topic.category,
      targetKeyword: topic.keyword,
      sections: parsed.sections,
      isRefresh: false,
    };
  } catch (error) {
    console.error("Failed to parse generated blog post JSON:", error);
    console.error("Raw response (first 500 chars):", text.slice(0, 500));
    console.error("Raw response (last 500 chars):", text.slice(-500));

    // Retry with a simpler prompt asking for just JSON
    console.log("Retrying content generation with simplified prompt...");
    try {
      const retryResponse = await anthropic.messages.create({
        model: CONFIG.contentModel,
        max_tokens: 4096,
        messages: [
          { role: "user", content: prompt },
          { role: "assistant", content: text },
          { role: "user", content: "Your response contained invalid JSON. Please return ONLY the JSON object, starting with { and ending with }. No code fences, no explanation." },
        ],
      });

      const retryText = retryResponse.content[0].type === "text" ? retryResponse.content[0].text : "";
      let retryCleaned = retryText.trim();
      const rStart = retryCleaned.indexOf("{");
      const rEnd = retryCleaned.lastIndexOf("}");
      if (rStart !== -1 && rEnd > rStart) {
        retryCleaned = retryCleaned.slice(rStart, rEnd + 1);
      }
      const retryParsed = JSON.parse(retryCleaned);

      console.log(`Blog post generated on retry: "${retryParsed.title}" (${retryParsed.slug})`);

      return {
        title: retryParsed.title,
        slug: retryParsed.slug,
        excerpt: retryParsed.excerpt,
        category: topic.category,
        targetKeyword: topic.keyword,
        sections: retryParsed.sections,
        isRefresh: false,
      };
    } catch (retryError) {
      console.error("Retry also failed:", retryError);
      return null;
    }
  }
}

async function refreshPost(
  post: ExistingPost,
  reason: string,
  strategyContent: string
): Promise<GeneratedPost | null> {
  const anthropic = new Anthropic();

  // Read the existing content for this post
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  const contentFile = fs.readFileSync(contentPath, "utf-8");

  // Extract existing sections for this slug
  const slugPattern = new RegExp(
    `["']${post.slug}["']\\s*:\\s*\\{\\s*sections:\\s*\\[([\\s\\S]*?)\\]\\s*\\}`,
    "m"
  );
  const existingMatch = contentFile.match(slugPattern);
  const existingContent = existingMatch ? existingMatch[1] : "No existing content found";

  const prompt = `You are refreshing/rewriting a blog post for BSR Decorating (bsrdecorating.co.uk), a painter and decorator based in Dawlish, Devon.

## Why This Post Needs Refreshing
${reason}

## SEO Strategy Context
${strategyContent}

## Current Post
Title: "${post.title}"
Category: "${post.category}"
Published: ${post.date}

## Current Content Sections (raw)
${existingContent.slice(0, 3000)}

## Your Task
Rewrite and improve this blog post to make it rank better.

## What To Improve
- Update any outdated information
- Improve structure and readability
- Add more practical, actionable advice specific to Exeter/Topsham
- Strengthen keyword targeting without stuffing
- Make the introduction more compelling
- Add internal links to BSR service and area pages

## Requirements
- Length: ${CONFIG.minBlogWordCount}-${CONFIG.maxBlogWordCount} words
- Language: UK English
- Keep the same slug: "${post.slug}"
- Professional but approachable tone

## CRITICAL: Output Format
Return ONLY a JSON object with this structure. No explanation, no code fences:

{
  "title": "Updated Post Title",
  "slug": "${post.slug}",
  "excerpt": "Updated excerpt under 200 characters",
  "readTime": "X min read",
  "sections": [
    {"type": "paragraph", "content": "..."},
    {"type": "heading", "content": "...", "level": 2},
    {"type": "paragraph", "content": "..."},
    {"type": "list", "content": ["...", "..."]},
    {"type": "quoteCTA", "content": "..."}
  ]
}`;

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  try {
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const parsed = JSON.parse(cleaned);

    console.log(`Refreshed post: "${parsed.title}" (${parsed.slug})`);

    return {
      title: parsed.title,
      slug: parsed.slug,
      excerpt: parsed.excerpt,
      category: post.category,
      targetKeyword: "",
      sections: parsed.sections,
      isRefresh: true,
    };
  } catch (error) {
    console.error("Failed to parse refreshed blog post JSON:", error);
    return null;
  }
}
