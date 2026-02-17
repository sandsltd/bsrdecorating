import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";
import type { CompetitorReport } from "./competitors";

interface RankingData {
  keyword: string;
  position: number | null;
  clicks: number;
  impressions: number;
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
  wordCount: number;
  refreshReason: string | null;
}

function countWords(sections: BlogSection[]): number {
  let count = 0;
  for (const section of sections) {
    if (typeof section.content === "string") {
      count += section.content.split(/\s+/).filter(Boolean).length;
    } else if (Array.isArray(section.content)) {
      for (const item of section.content) {
        if (typeof item === "string") {
          count += item.split(/\s+/).filter(Boolean).length;
        }
      }
    }
  }
  return count;
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

async function generateSmartTopic(
  strategyContent: string,
  rankings: RankingData[],
  competitorReport: CompetitorReport | null
): Promise<{ keyword: string; context: string; category: string }> {
  const { titles, posts } = getExistingPosts();
  const anthropic = new Anthropic();

  // Build rankings intelligence
  const nearPageOne = rankings
    .filter((r) => r.position !== null && r.position > 10 && r.position <= 25)
    .sort((a, b) => (a.position || 999) - (b.position || 999));

  const notIndexed = rankings
    .filter((r) => r.position === null && r.impressions === 0);

  const declining = rankings.filter((r) => {
    const prevMatch = r.previousPosition.match(/Position ([\d.]+)/);
    if (!prevMatch || r.position === null) return false;
    return r.position - parseFloat(prevMatch[1]) >= 3;
  });

  const highImpressionLowClick = rankings
    .filter((r) => r.impressions > 10 && r.clicks === 0);

  // Build competitor intelligence
  let competitorActivity = "No competitor data available.";
  if (competitorReport) {
    const active = competitorReport.competitors.filter((c) => c.recentPages.length > 0);
    if (active.length > 0) {
      competitorActivity = active.map((c) => {
        const pages = c.recentPages.slice(0, 5).map((p) => {
          const pagePath = p.url.replace(/https?:\/\/[^/]+/, "");
          return `  - ${pagePath}`;
        }).join("\n");
        return `${c.name} (${c.domain}) — ${c.recentPages.length} new pages:\n${pages}`;
      }).join("\n\n");
    } else {
      competitorActivity = "No competitors have published new content recently.";
    }
  }

  // Seasonal context
  const month = new Date().getMonth(); // 0-11
  const seasonalContext = month >= 1 && month <= 3
    ? "It's late winter/early spring — perfect time for content about spring exterior painting, property refresh, and booking ahead for summer."
    : month >= 4 && month <= 6
    ? "It's spring/early summer — peak demand season. Focus on exterior work, outdoor painting, and timely content."
    : month >= 7 && month <= 9
    ? "It's summer/early autumn — still high demand. Good time for autumn prep content, interior decorating for winter."
    : "It's late autumn/winter — focus on interior decorating, landlord turnaround season, commercial work, and planning for spring.";

  const existingPostsList = posts.map((p) => `- "${p.title}" (${p.category}, ${p.slug})`).join("\n");

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are an expert SEO strategist for BSR Decorating (bsrdecorating.co.uk), a painter and decorator based in Dawlish, Devon, targeting Exeter and Topsham markets. 20+ years experience, specialising in heritage properties, kitchen spraying, and eco-friendly paints.

## LIVE RANKINGS DATA
${nearPageOne.length > 0 ? `**Near page 1 (positions 11-25 — quick wins with supporting content):**\n${nearPageOne.map((r) => `- "${r.keyword}" at position #${r.position} (${r.impressions} impressions, ${r.clicks} clicks)`).join("\n")}` : "No keywords near page 1 yet."}

${declining.length > 0 ? `**Declining keywords (need supporting content):**\n${declining.map((r) => `- "${r.keyword}" dropped to #${r.position} (was ${r.previousPosition})`).join("\n")}` : ""}

${highImpressionLowClick.length > 0 ? `**High impressions but no clicks (CTR opportunity — better titles/content):**\n${highImpressionLowClick.map((r) => `- "${r.keyword}" — ${r.impressions} impressions, 0 clicks`).join("\n")}` : ""}

${notIndexed.length > 0 ? `**Not indexed yet (${notIndexed.length} keywords):** Content gaps that need blog posts to start ranking.` : ""}

## COMPETITOR ACTIVITY (Last 3 months)
${competitorActivity}

## SEASONAL CONTEXT
${seasonalContext}

## MARKET CONTEXT
- Exeter: 994 listed buildings, 20 conservation areas, ~138,000 population
- Topsham: 228 listed buildings, avg property £506k, affluent riverside area
- Cranbrook: Growing new town (3,300 to 8,000 homes) — new build opportunity
- Liveable Exeter: 12,000 new homes programme — future demand
- Kitchen cabinet spraying: fastest-growing decorator service in UK
- 61% of businesses report difficulty hiring skilled tradespeople

## EXISTING BLOG POSTS (${posts.length} total — DO NOT duplicate these)
${existingPostsList}

## YOUR TASK
Analyse all the data above and suggest ONE new blog post topic. Use this decision framework:

1. **FIRST PRIORITY:** Is there a keyword near page 1 (position 11-25) that a new supporting blog post could help push onto page 1? Write content that targets a long-tail variant of that keyword.
2. **SECOND PRIORITY:** Are competitors publishing content in an area where BSR has no coverage? Write a better version targeting that gap.
3. **THIRD PRIORITY:** Is there a seasonal opportunity right now? Write timely content that will rank when demand peaks.
4. **FOURTH PRIORITY:** Is there an untapped keyword cluster (heritage, kitchen spraying, eco-friendly, landlord, commercial) with room for more content?

The topic MUST:
- Target a specific long-tail keyword phrase that real people search for
- Be locally relevant to Exeter, Topsham, or Devon (not generic national content)
- NOT duplicate any existing blog post
- Have clear search intent (someone searching this wants to hire a decorator or learn about decorating)

Respond in EXACTLY this JSON format, nothing else:
{"keyword": "the target keyword phrase", "context": "Why this topic was chosen based on the data — reference specific rankings, competitor activity, or seasonal timing", "category": "one of: Expert Advice, Heritage Restoration, Seasonal Trends, Commercial Services, Waterfront Maintenance, Luxury Decorating, Landlord Services, Property Investment, Pricing Guide, Kitchen Spraying"}`,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";
  try {
    let cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const jsonStart = cleaned.indexOf("{");
    const jsonEnd = cleaned.lastIndexOf("}");
    if (jsonStart !== -1 && jsonEnd > jsonStart) {
      cleaned = cleaned.slice(jsonStart, jsonEnd + 1);
    }
    const parsed = JSON.parse(cleaned);
    console.log(`Smart topic selection reason: ${parsed.context}`);
    return parsed;
  } catch {
    // Fallback to a safe default
    console.warn("Failed to parse smart topic JSON, falling back to basic topic");
    return {
      keyword: "decorator exeter tips",
      context: "Fallback topic — smart picker failed to return valid JSON",
      category: "Expert Advice",
    };
  }
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
  rankings: RankingData[] = [],
  competitorReport: CompetitorReport | null = null
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

  if (topic) {
    console.log(`Queued topic found: "${topic.keyword}"`);
  } else {
    console.log(
      "All planned topics covered. Using smart topic picker..."
    );
    topic = await generateSmartTopic(strategyContent, rankings, competitorReport);
    console.log(`Smart topic selected: "${topic.keyword}"`);
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
      wordCount: countWords(parsed.sections),
      refreshReason: null,
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
        wordCount: countWords(retryParsed.sections),
        refreshReason: null,
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
      wordCount: countWords(parsed.sections),
      refreshReason: reason,
    };
  } catch (error) {
    console.error("Failed to parse refreshed blog post JSON:", error);
    return null;
  }
}
