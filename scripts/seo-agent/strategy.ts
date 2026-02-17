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

  // Scan for existing schema markup on area pages
  const schemaInfo: string[] = [];
  for (const page of sitePages) {
    if (!page.startsWith("/areas/")) continue;
    const pagePath = path.join(appDir, ...page.split("/").filter(Boolean), "page.tsx");
    if (!fs.existsSync(pagePath)) continue;
    const pageContent = fs.readFileSync(pagePath, "utf-8");
    const schemas: string[] = [];
    if (pageContent.includes("ProfessionalService")) schemas.push("ProfessionalService");
    if (pageContent.includes("LocalBusiness")) schemas.push("LocalBusiness");
    if (pageContent.includes("FAQPage")) schemas.push("FAQPage");
    if (pageContent.includes("BreadcrumbList")) schemas.push("BreadcrumbList");
    if (pageContent.includes("makesOffer")) schemas.push("makesOffer");
    if (pageContent.includes("priceRange")) schemas.push("priceRange");
    if (pageContent.includes("areaServed")) schemas.push("areaServed");
    if (schemas.length > 0) {
      schemaInfo.push(`${page}: ${schemas.join(", ")}`);
    }
  }

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

## Existing Schema Markup on Area Pages
${schemaInfo.length > 0 ? schemaInfo.map((s) => `- ${s}`).join("\n") : "No schema detected on area pages."}

## Your Task
Analyse the current SEO state and provide 3-5 actionable recommendations. Think about:

1. **New pages to create** — Are there keywords needing dedicated pages? (e.g. comparison pages, new area pages, new service pages)
2. **Technical SEO improvements** — Missing structured data, meta tag improvements, internal linking gaps, schema markup opportunities
3. **Content gaps** — Topics or angles not covered that would build authority in heritage decorating, kitchen spraying, or the Exeter market
4. **Quick wins** — Low-effort changes that could improve rankings for specific keywords (e.g. a keyword close to page 1)
5. **Competitive opportunities** — Based on competitors (Simon Santucci's 19 location pages, Vivid Decor's active blog)

CRITICAL RULES:
- Do NOT recommend creating pages that already exist in the "Current Site Pages" list above
- Do NOT recommend adding schema markup that is already present in the "Existing Schema Markup" list above
- Do NOT recommend things that have already been implemented — check the lists above first
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
