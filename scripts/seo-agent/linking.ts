import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

export interface LinkingResult {
  total: number;
  details: { postTitle: string; linksAdded: number }[];
}

interface PostInfo {
  slug: string;
  title: string;
  category: string;
}

function getAllPosts(): PostInfo[] {
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  if (!fs.existsSync(postsPath)) return [];

  const content = fs.readFileSync(postsPath, "utf-8");
  const posts: PostInfo[] = [];

  const postRegex = /\{\s*id:\s*\d+\s*,\s*title:\s*['"]([^'"]+)['"]\s*,[^}]*category:\s*['"]([^'"]+)['"]\s*,[^}]*slug:\s*['"]([^'"]+)['"]\s*[,}]/gs;
  let match;

  while ((match = postRegex.exec(content)) !== null) {
    posts.push({
      title: match[1],
      category: match[2],
      slug: match[3],
    });
  }

  return posts;
}

function getPostContent(slug: string): string[] {
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  const content = fs.readFileSync(contentPath, "utf-8");

  // Extract paragraph content for this slug
  const paragraphs: string[] = [];
  const slugStart = content.indexOf(`'${slug}':`);
  if (slugStart === -1) return paragraphs;

  // Find the sections array for this slug
  let braceCount = 0;
  const entryStart = content.indexOf("{", slugStart);
  let entryEnd = entryStart;

  for (let i = entryStart; i < content.length; i++) {
    if (content[i] === "{") braceCount++;
    if (content[i] === "}") {
      braceCount--;
      if (braceCount === 0) {
        entryEnd = i + 1;
        break;
      }
    }
  }

  const entryContent = content.slice(entryStart, entryEnd);

  // Count existing internal links
  const linkMatches = entryContent.match(/\[([^\]]+)\]\(\/[^)]+\)/g) || [];
  return linkMatches.map((l) => l);
}

function countInternalLinks(slug: string): number {
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  const content = fs.readFileSync(contentPath, "utf-8");

  const slugStart = content.indexOf(`'${slug}':`);
  if (slugStart === -1) return 0;

  let braceCount = 0;
  const entryStart = content.indexOf("{", slugStart);
  let entryEnd = entryStart;

  for (let i = entryStart; i < content.length; i++) {
    if (content[i] === "{") braceCount++;
    if (content[i] === "}") {
      braceCount--;
      if (braceCount === 0) {
        entryEnd = i + 1;
        break;
      }
    }
  }

  const entryContent = content.slice(entryStart, entryEnd);
  const links = entryContent.match(/\[([^\]]+)\]\(\//g) || [];
  return links.length;
}

function getPostSectionText(slug: string): string {
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  const content = fs.readFileSync(contentPath, "utf-8");

  const slugStart = content.indexOf(`'${slug}':`);
  if (slugStart === -1) return "";

  let braceCount = 0;
  const entryStart = content.indexOf("{", slugStart);
  let entryEnd = entryStart;

  for (let i = entryStart; i < content.length; i++) {
    if (content[i] === "{") braceCount++;
    if (content[i] === "}") {
      braceCount--;
      if (braceCount === 0) {
        entryEnd = i + 1;
        break;
      }
    }
  }

  return content.slice(entryStart, entryEnd);
}

export async function addInternalLinks(): Promise<LinkingResult> {
  const posts = getAllPosts();

  if (posts.length < 2) {
    console.log("Not enough posts for internal linking.");
    return { total: 0, details: [] };
  }

  const anthropic = new Anthropic();
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  let contentFile = fs.readFileSync(contentPath, "utf-8");

  let totalLinksAdded = 0;
  const details: { postTitle: string; linksAdded: number }[] = [];

  for (const post of posts) {
    const existingLinks = countInternalLinks(post.slug);
    if (existingLinks >= 3) {
      continue;
    }

    const otherPosts = posts.filter((p) => p.slug !== post.slug);
    if (otherPosts.length === 0) continue;

    const sectionText = getPostSectionText(post.slug);
    if (!sectionText) continue;

    // Extract just the paragraph content strings for the AI
    const paragraphContents: string[] = [];
    const paragraphRegex = /type:\s*'paragraph',\s*content:\s*'((?:[^'\\]|\\.)*)'/g;
    let pMatch;
    while ((pMatch = paragraphRegex.exec(sectionText)) !== null) {
      paragraphContents.push(pMatch[1].replace(/\\'/g, "'").replace(/\\n/g, "\n"));
    }

    if (paragraphContents.length === 0) continue;

    const otherPostsList = otherPosts
      .map(
        (p) =>
          `- Title: "${p.title}" | URL: /blog/${p.slug} | Category: "${p.category}"`
      )
      .join("\n");

    const response = await anthropic.messages.create({
      model: CONFIG.contentModel,
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are adding internal links to a blog post for BSR Decorating. The goal is to naturally link to related posts where it makes sense contextually.

## Current Post
Title: "${post.title}"
Category: "${post.category}"

## Current Paragraphs
${paragraphContents.map((p, i) => `[${i}]: ${p}`).join("\n\n")}

## Other Posts Available to Link To
${otherPostsList}

## Also consider linking to these hub pages:
- Exeter area page: /areas/exeter
- Topsham area page: /areas/topsham
- Dawlish area page: /areas/dawlish
- Domestic services: /domestic
- Commercial services: /commercial

## Existing Internal Links
This post already has ${existingLinks} internal links.

## Rules
- Add ${Math.max(1, 3 - existingLinks)} internal links where contextually relevant
- Use markdown link format: [anchor text](/path)
- Only link where it genuinely makes sense — don't force links
- Return a JSON array of modifications. Each modification has the paragraph index and the updated paragraph text.
- If no natural linking opportunities exist, return an empty array []

## Output Format
Return ONLY a JSON array, no explanation:
[
  {"index": 0, "content": "Updated paragraph text with [natural anchor text](/blog/some-slug) included."},
  {"index": 3, "content": "Another paragraph with a [relevant link](/areas/exeter)."}
]`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    try {
      const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      const modifications = JSON.parse(cleaned);

      if (!Array.isArray(modifications) || modifications.length === 0) continue;

      let linksAdded = 0;

      for (const mod of modifications) {
        if (mod.index >= 0 && mod.index < paragraphContents.length) {
          const oldContent = paragraphContents[mod.index];
          const newContent = mod.content;

          // Count new links in the modified content
          const oldLinks = (oldContent.match(/\[([^\]]+)\]\(\//g) || []).length;
          const newLinks = (newContent.match(/\[([^\]]+)\]\(\//g) || []).length;
          const added = newLinks - oldLinks;

          if (added > 0) {
            // Escape for TypeScript string
            const oldEscaped = oldContent.replace(/'/g, "\\'").replace(/\n/g, "\\n");
            const newEscaped = newContent.replace(/'/g, "\\'").replace(/\n/g, "\\n");

            contentFile = contentFile.replace(oldEscaped, newEscaped);
            linksAdded += added;
          }
        }
      }

      if (linksAdded > 0) {
        totalLinksAdded += linksAdded;
        details.push({ postTitle: post.title, linksAdded });
        console.log(
          `Added ${linksAdded} internal links to "${post.title}"`
        );
      }
    } catch {
      console.warn(`Failed to parse linking response for "${post.title}"`);
    }
  }

  if (totalLinksAdded > 0) {
    fs.writeFileSync(contentPath, contentFile);
  }

  return { total: totalLinksAdded, details };
}
