import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

interface RankingData {
  keyword: string;
  position: number | null;
  previousPosition: string;
  clicks: number;
  impressions: number;
}

export interface Recommendation {
  priority: "high" | "medium" | "low";
  category: string;
  title: string;
  description: string;
}

export async function generateRecommendations(
  strategyContent: string,
  rankings: RankingData[]
): Promise<Recommendation[]> {
  const anthropic = new Anthropic();

  // Gather existing blog posts
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  const existingPosts: string[] = [];
  if (fs.existsSync(postsPath)) {
    const content = fs.readFileSync(postsPath, "utf-8");
    const titleMatches = content.match(/title:\s*['"]([^'"]+)['"]/g);
    if (titleMatches) {
      for (const m of titleMatches) {
        const title = m.match(/['"]([^'"]+)['"]/)?.[1];
        if (title) existingPosts.push(title);
      }
    }
  }

  // Gather site pages
  const appDir = path.join(process.cwd(), "src/app");
  const sitePages: string[] = [];
  function scanPages(dir: string, prefix: string) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name.startsWith("(") || entry.name === "api") continue;
        const pagePath = path.join(dir, entry.name, "page.tsx");
        if (fs.existsSync(pagePath)) {
          sitePages.push(`${prefix}/${entry.name}`);
        }
        scanPages(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      }
    }
  }
  sitePages.push("/");
  scanPages(appDir, "");

  const rankingSummary = rankings
    .map((r) => {
      const pos = r.position !== null ? `#${r.position}` : "Not indexed";
      return `- "${r.keyword}": ${pos} (prev: ${r.previousPosition}, clicks: ${r.clicks}, impressions: ${r.impressions})`;
    })
    .join("\n");

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `You are a technical SEO consultant analysing the current state of bsrdecorating.co.uk, a painter and decorator based in Dawlish, Devon, targeting Exeter and Topsham markets. They specialise in domestic, commercial, heritage/period properties, kitchen spraying, and eco-friendly paints.

## Current SEO Strategy
${strategyContent}

## Current Keyword Rankings
${rankingSummary}

## Existing Blog Posts
${existingPosts.length > 0 ? existingPosts.map((t) => `- ${t}`).join("\n") : "None yet."}

## Current Site Pages
${sitePages.map((p) => `- ${p}`).join("\n")}

## Your Task
Analyse the current SEO state and provide 3-5 actionable recommendations. Think about:

1. **New pages to create** — Are there keywords needing dedicated pages? (e.g. kitchen spraying landing page, comparison pages, new area pages)
2. **Technical SEO improvements** — Missing structured data, meta tag improvements, internal linking gaps, schema markup opportunities (LocalBusiness, Service, FAQ)
3. **Content gaps** — Topics or angles not covered that would build authority in heritage decorating, kitchen spraying, or the Exeter market
4. **Quick wins** — Low-effort changes that could improve rankings for specific keywords (e.g. a keyword close to page 1)
5. **Competitive opportunities** — Based on competitors (Simon Santucci's 19 location pages, Vivid Decor's active blog)

Important:
- Be specific and actionable — "Add FAQ schema to the cost guide page" is better than "Improve on-page SEO"
- Reference specific keywords and their current rankings
- Consider the 994 listed buildings and 20 conservation areas in Exeter as content opportunities
- Prioritise by impact
- Use UK English

Respond in EXACTLY this JSON format, nothing else:
[
  {
    "priority": "high",
    "category": "Category Name",
    "title": "Short actionable title",
    "description": "2-3 sentences explaining what to do and why. Be specific about which pages, keywords, or technical elements to change."
  }
]`,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  try {
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    console.warn("Failed to parse recommendations JSON, skipping.");
    return [];
  }
}
