import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

interface BlogSection {
  type: string;
  content?: string | string[];
  level?: number;
  imageAlt?: string;
  href?: string;
  linkText?: string;
}

interface NewPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  targetKeyword: string;
  sections: BlogSection[];
  isRefresh: boolean;
}

// Blog images pool — 50 stock images categorised by topic
const IMAGE_POOL: Record<string, string[]> = {
  "Heritage Restoration": [
    "/images/blog/05-painter-brush-ladder.webp",
    "/images/blog/35-empty-room-renovation.webp",
    "/images/blog/36-house-renovation.webp",
    "/images/blog/43-wooden-door-white-house.webp",
    "/images/blog/40-house-painter-undercoating.webp",
    "/images/blog/15-man-renovation-room.webp",
  ],
  "Commercial Services": [
    "/images/blog/09-painting-new-apartment.webp",
    "/images/blog/10-people-painting-wall.webp",
    "/images/blog/14-four-people-scaffolding.webp",
    "/images/blog/46-man-stepladder-taping.webp",
  ],
  "Landlord Services": [
    "/images/blog/09-painting-new-apartment.webp",
    "/images/blog/35-empty-room-renovation.webp",
    "/images/blog/12-white-painted-wall.webp",
    "/images/blog/47-white-painted-wall.webp",
  ],
  "Property Investment": [
    "/images/blog/35-empty-room-renovation.webp",
    "/images/blog/36-house-renovation.webp",
    "/images/blog/09-painting-new-apartment.webp",
    "/images/blog/15-man-renovation-room.webp",
  ],
  "Seasonal Trends": [
    "/images/blog/21-color-shade-samples.webp",
    "/images/blog/23-paint-color-swatches.webp",
    "/images/blog/34-pink-paint-samples.webp",
    "/images/blog/31-blue-yellow-painted-wall.webp",
    "/images/blog/29-gray-white-paint-wall.webp",
  ],
  "Waterfront Maintenance": [
    "/images/blog/13-senior-man-exterior-scaffolding.webp",
    "/images/blog/02-man-painting-house.webp",
    "/images/blog/33-painting-fence-brush.webp",
    "/images/blog/43-wooden-door-white-house.webp",
  ],
  "Expert Advice": [
    "/images/blog/07-paint-bucket-rollers.webp",
    "/images/blog/08-paint-brush-bucket.webp",
    "/images/blog/16-gallons-of-paint.webp",
    "/images/blog/21-color-shade-samples.webp",
    "/images/blog/22-roller-in-paint-tray.webp",
    "/images/blog/23-paint-color-swatches.webp",
    "/images/blog/44-white-paint-buckets.webp",
  ],
  "Kitchen Spraying": [
    "/images/blog/03-man-paint-roller.webp",
    "/images/blog/18-person-painting.webp",
    "/images/blog/30-hand-paint-roller-decor.webp",
    "/images/blog/39-wall-half-painted.webp",
  ],
  "Pricing Guide": [
    "/images/blog/07-paint-bucket-rollers.webp",
    "/images/blog/16-gallons-of-paint.webp",
    "/images/blog/28-roller-brush-paint-tray.webp",
    "/images/blog/44-white-paint-buckets.webp",
  ],
  "Luxury Decorating": [
    "/images/blog/21-color-shade-samples.webp",
    "/images/blog/23-paint-color-swatches.webp",
    "/images/blog/34-pink-paint-samples.webp",
    "/images/blog/29-gray-white-paint-wall.webp",
    "/images/blog/12-white-painted-wall.webp",
  ],
};

// All 50 images as fallback — ensures no image gets reused until all are exhausted
const ALL_BLOG_IMAGES = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const names = [
    "paint-roller-wall", "man-painting-house", "man-paint-roller", "man-painting-wall",
    "painter-brush-ladder", "man-polishing-ceiling", "paint-bucket-rollers", "paint-brush-bucket",
    "painting-new-apartment", "people-painting-wall", "paint-roller-painting", "white-painted-wall",
    "senior-man-exterior-scaffolding", "four-people-scaffolding", "man-renovation-room",
    "gallons-of-paint", "woman-painting-wall", "person-painting", "woman-painting-wall-2",
    "woman-adhesive-tape-wall", "color-shade-samples", "roller-in-paint-tray", "paint-color-swatches",
    "couple-painting-house", "couple-painting-wall", "couple-painting-wall-2", "couple-painting-together",
    "roller-brush-paint-tray", "gray-white-paint-wall", "hand-paint-roller-decor",
    "blue-yellow-painted-wall", "hand-holding-paint-brush", "painting-fence-brush",
    "pink-paint-samples", "empty-room-renovation", "house-renovation", "woman-paint-splash",
    "woman-in-overalls", "wall-half-painted", "house-painter-undercoating", "unfinished-painted-wall",
    "dirty-paint-bucket", "wooden-door-white-house", "white-paint-buckets", "paint-roller-stepladder",
    "man-stepladder-taping", "white-painted-wall", "multicolor-paint-splashes",
    "multicolor-abstract-painting", "abstract-multicolor-paints",
  ];
  return `/images/blog/${num}-${names[i]}.webp`;
});

function getUsedImages(): Set<string> {
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  const content = fs.readFileSync(postsPath, "utf-8");
  const used = new Set<string>();
  const imageMatches = content.match(/image:\s*['"]([^'"]+)['"]/g);
  if (imageMatches) {
    for (const m of imageMatches) {
      const img = m.match(/['"]([^'"]+)['"]/)?.[1];
      if (img) used.add(img);
    }
  }
  return used;
}

function pickImage(category: string): string {
  const used = getUsedImages();
  // Try category-specific images first
  const pool = IMAGE_POOL[category] || [];
  const unused = pool.filter((img) => !used.has(img));
  if (unused.length > 0) {
    return unused[Math.floor(Math.random() * unused.length)];
  }
  // Fall back to any unused image from the full set
  const allUnused = ALL_BLOG_IMAGES.filter((img) => !used.has(img));
  if (allUnused.length > 0) {
    return allUnused[Math.floor(Math.random() * allUnused.length)];
  }
  // All 50 used — cycle back through category pool
  return (pool.length > 0 ? pool : ALL_BLOG_IMAGES)[Math.floor(Math.random() * (pool.length || ALL_BLOG_IMAGES.length))];
}

function run(cmd: string): string {
  console.log(`> ${cmd}`);
  return execSync(cmd, { encoding: "utf-8", cwd: process.cwd() }).trim();
}

function getNextId(): number {
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  const content = fs.readFileSync(postsPath, "utf-8");
  const idMatches = content.match(/id:\s*(\d+)/g);
  if (!idMatches) return 1;

  const ids = idMatches.map((m) => parseInt(m.replace(/id:\s*/, "")));
  return Math.max(...ids) + 1;
}

function estimateReadTime(sections: BlogSection[]): string {
  let wordCount = 0;
  for (const section of sections) {
    if (typeof section.content === "string") {
      wordCount += section.content.split(/\s+/).length;
    } else if (Array.isArray(section.content)) {
      for (const item of section.content) {
        if (typeof item === "string") {
          wordCount += item.split(/\s+/).length;
        }
      }
    }
  }
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

function serializeSection(section: BlogSection, indent: string): string {
  const parts: string[] = [];
  parts.push(`${indent}{`);
  parts.push(`${indent}  type: '${section.type}',`);

  if (section.content !== undefined) {
    if (typeof section.content === "string") {
      // Escape single quotes and newlines in string content
      const escaped = section.content
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\n/g, "\\n");
      parts.push(`${indent}  content: '${escaped}',`);
    } else if (Array.isArray(section.content)) {
      parts.push(`${indent}  content: [`);
      for (const item of section.content) {
        if (typeof item === "string") {
          const escaped = item
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "\\'")
            .replace(/\n/g, "\\n");
          parts.push(`${indent}    '${escaped}',`);
        }
      }
      parts.push(`${indent}  ],`);
    }
  }

  if (section.level !== undefined) {
    parts.push(`${indent}  level: ${section.level},`);
  }
  if (section.imageAlt !== undefined) {
    const escaped = section.imageAlt.replace(/'/g, "\\'");
    parts.push(`${indent}  imageAlt: '${escaped}',`);
  }
  if (section.href !== undefined) {
    parts.push(`${indent}  href: '${section.href}',`);
  }
  if (section.linkText !== undefined) {
    const escaped = section.linkText.replace(/'/g, "\\'");
    parts.push(`${indent}  linkText: '${escaped}',`);
  }

  parts.push(`${indent}},`);
  return parts.join("\n");
}

function addPostMetadata(post: NewPost): void {
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  let content = fs.readFileSync(postsPath, "utf-8");

  const nextId = getNextId();
  const today = new Date().toISOString().split("T")[0];
  const readTime = post.sections ? estimateReadTime(post.sections) : "5 min read";

  // Escape single quotes in title and excerpt
  const escapedTitle = post.title.replace(/'/g, "\\'");
  const escapedExcerpt = post.excerpt.replace(/'/g, "\\'");

  const newEntry = `  {
    id: ${nextId},
    title: '${escapedTitle}',
    excerpt: '${escapedExcerpt}',
    category: '${post.category}',
    date: '${today}',
    readTime: '${readTime}',
    image: '${pickImage(post.category)}',
    slug: '${post.slug}',
  },`;

  // Insert at the beginning of the blogPosts array (newest first)
  // Look for "= [" after the export to avoid matching "BlogPost[]" type annotation
  const arrayDecl = content.indexOf("export const blogPosts");
  if (arrayDecl === -1) {
    throw new Error("Could not find blogPosts array in blogPosts.ts");
  }

  const arrayAssignment = content.indexOf("= [", arrayDecl);
  if (arrayAssignment === -1) {
    throw new Error("Could not find '= [' for blogPosts array");
  }

  // Find the "[" in "= ["
  const firstBracket = content.indexOf("[", arrayAssignment);

  // Insert after the opening bracket
  content =
    content.slice(0, firstBracket + 1) +
    "\n" +
    newEntry +
    content.slice(firstBracket + 1);

  // Update categories count if the category exists
  const categoryRegex = new RegExp(
    `(\\{\\s*name:\\s*'${post.category}'\\s*,\\s*count:\\s*)(\\d+)(\\s*\\})`,
    "g"
  );
  if (categoryRegex.test(content)) {
    content = content.replace(categoryRegex, (_, prefix, count, suffix) => {
      return `${prefix}${parseInt(count) + 1}${suffix}`;
    });
  }

  fs.writeFileSync(postsPath, content);
  console.log(`Added post metadata: id=${nextId}, slug="${post.slug}"`);
}

function addPostContent(post: NewPost): void {
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  let content = fs.readFileSync(contentPath, "utf-8");

  // Serialize sections
  const sectionLines = post.sections
    .map((s) => serializeSection(s, "      "))
    .join("\n");

  const newContentEntry = `  '${post.slug}': {
    sections: [
${sectionLines}
    ],
  },`;

  // Find the end of the blogContent object — look for the closing }; of the export
  // Insert before the last entry's closing
  const exportMatch = content.match(/export const blogContent[^{]*\{/);
  if (!exportMatch) {
    throw new Error("Could not find blogContent export in blogContent.ts");
  }

  const insertAfter = exportMatch.index! + exportMatch[0].length;

  content =
    content.slice(0, insertAfter) +
    "\n" +
    newContentEntry +
    content.slice(insertAfter);

  fs.writeFileSync(contentPath, content);
  console.log(`Added post content for slug: "${post.slug}"`);
}

function updatePostContent(post: NewPost): void {
  const contentPath = path.join(process.cwd(), CONFIG.blogContentPath);
  let content = fs.readFileSync(contentPath, "utf-8");

  // Find the existing entry for this slug and replace its sections
  const slugStart = content.indexOf(`'${post.slug}':`);
  if (slugStart === -1) {
    // Slug not found, add as new
    addPostContent(post);
    return;
  }

  // Find the matching closing brace for this entry
  let braceCount = 0;
  let entryStart = content.indexOf("{", slugStart);
  let i = entryStart;

  for (; i < content.length; i++) {
    if (content[i] === "{") braceCount++;
    if (content[i] === "}") {
      braceCount--;
      if (braceCount === 0) break;
    }
  }

  const entryEnd = i + 1;

  // Build the replacement
  const sectionLines = post.sections
    .map((s) => serializeSection(s, "      "))
    .join("\n");

  const replacement = `{
    sections: [
${sectionLines}
    ],
  }`;

  content = content.slice(0, entryStart) + replacement + content.slice(entryEnd);
  fs.writeFileSync(contentPath, content);
  console.log(`Updated post content for slug: "${post.slug}"`);
}

function updatePostMetadata(post: NewPost): void {
  const postsPath = path.join(process.cwd(), CONFIG.blogPostsPath);
  let content = fs.readFileSync(postsPath, "utf-8");

  // Find the entry for this slug and update title/excerpt
  const slugPattern = new RegExp(
    `(\\{[^}]*slug:\\s*'${post.slug}'[^}]*\\})`,
    "s"
  );
  const match = content.match(slugPattern);

  if (match) {
    let entry = match[1];

    // Update title
    const escapedTitle = post.title.replace(/'/g, "\\'");
    entry = entry.replace(/title:\s*'[^']*'/, `title: '${escapedTitle}'`);

    // Update excerpt
    const escapedExcerpt = post.excerpt.replace(/'/g, "\\'");
    entry = entry.replace(/excerpt:\s*'[^']*'/, `excerpt: '${escapedExcerpt}'`);

    // Update readTime
    const readTime = estimateReadTime(post.sections);
    entry = entry.replace(/readTime:\s*'[^']*'/, `readTime: '${readTime}'`);

    content = content.replace(match[1], entry);
    fs.writeFileSync(postsPath, content);
    console.log(`Updated post metadata for slug: "${post.slug}"`);
  }
}

function addPostKeywords(post: NewPost): void {
  const keywordsPath = path.join(process.cwd(), CONFIG.blogKeywordsPath);
  let content = fs.readFileSync(keywordsPath, "utf-8");

  // Check if this slug already has keywords
  if (content.includes(`'${post.slug}':`)) {
    console.log(`Keywords already exist for slug: "${post.slug}"`);
    return;
  }

  // Build keyword string from targetKeyword and slug words
  const slugWords = post.slug.replace(/-/g, " ");
  const keywords = `${post.targetKeyword}, ${slugWords}`;

  // Find the return statement in getBlogKeywords — insert before it
  const returnMarker = 'return keywordMap[slug] || "";';
  const returnIdx = content.indexOf(returnMarker);
  if (returnIdx === -1) {
    console.log("Warning: Could not find keywordMap return in page.tsx, skipping keywords");
    return;
  }

  // Find the closing }; of the keywordMap object just before the return
  // Walk backwards from the return to find the "};" that closes keywordMap
  const beforeReturn = content.lastIndexOf("};", returnIdx);
  if (beforeReturn === -1) {
    console.log("Warning: Could not find keywordMap closing in page.tsx, skipping keywords");
    return;
  }

  // Insert a new entry before the closing };
  const escapedKeywords = keywords.replace(/"/g, '\\"');
  const newEntry = `    '${post.slug}': "${escapedKeywords}",\n  `;

  content = content.slice(0, beforeReturn) + newEntry + content.slice(beforeReturn);

  fs.writeFileSync(keywordsPath, content);
  console.log(`Added keywords for slug: "${post.slug}"`);
}

export function publishPost(post: NewPost): void {
  if (post.isRefresh) {
    updatePostMetadata(post);
    updatePostContent(post);
  } else {
    addPostMetadata(post);
    addPostContent(post);
    addPostKeywords(post);
  }
}

export function updateSessionLog(
  strategyContent: string,
  summary: string
): string {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const newEntry = `### ${today} — Automated SEO Agent Run
- **What was done:** ${summary}
- **Run type:** Automated (GitHub Actions)
`;

  const sessionLogMarker = "## Session Log";
  const instructionsEnd =
    "> **Instructions for future sessions:**";

  const markerIndex = strategyContent.indexOf(sessionLogMarker);
  if (markerIndex === -1) {
    return strategyContent + "\n\n" + sessionLogMarker + "\n\n" + newEntry;
  }

  const afterMarker = strategyContent.indexOf(instructionsEnd, markerIndex);
  if (afterMarker !== -1) {
    const nextNewline = strategyContent.indexOf("\n\n", afterMarker);
    const insertPoint = nextNewline !== -1 ? nextNewline + 2 : afterMarker;
    return (
      strategyContent.slice(0, insertPoint) +
      newEntry +
      "\n" +
      strategyContent.slice(insertPoint)
    );
  }

  const headerEnd = strategyContent.indexOf("\n", markerIndex);
  return (
    strategyContent.slice(0, headerEnd + 1) +
    "\n" +
    newEntry +
    "\n" +
    strategyContent.slice(headerEnd + 1)
  );
}

export function updateStrategyTopicStatus(
  strategyContent: string,
  slug: string,
  title: string
): string {
  // Find the topic row that matches and mark it as published
  // Look for rows with "No" in the Published column
  const topicRows = strategyContent.match(
    /\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|\s*No\s*\|[^|]*\|/g
  );

  if (!topicRows) return strategyContent;

  for (const row of topicRows) {
    // Check if the slug matches the topic (rough match)
    const slugWords = slug.replace(/-/g, " ").toLowerCase();
    const rowLower = row.toLowerCase();

    // Extract keyword from the row
    const parts = row.split("|").filter((p) => p.trim());
    if (parts.length < 5) continue;

    const keyword = parts[2]?.trim().toLowerCase() || "";
    const keywordWords = keyword.split(" ");
    const matchCount = keywordWords.filter((w) =>
      slugWords.includes(w)
    ).length;

    if (matchCount >= keywordWords.length * 0.4) {
      const updated = row
        .replace(/\|\s*No\s*\|/, "| Yes |")
        .replace(/\|\s*—\s*\|$/, `| ${slug} |`);
      strategyContent = strategyContent.replace(row, updated);
      break;
    }
  }

  return strategyContent;
}

export function commitAndPush(
  strategyContent: string,
  blogPost: NewPost | null,
  linksModified: boolean
): void {
  const strategyPath = path.join(process.cwd(), CONFIG.strategyDocPath);
  fs.writeFileSync(strategyPath, strategyContent);

  run('git config user.name "github-actions[bot]"');
  run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');

  // Stage strategy doc
  run(`git add ${CONFIG.strategyDocPath}`);

  // Stage blog data files if modified
  if (blogPost || linksModified) {
    run(`git add ${CONFIG.blogPostsPath}`);
    run(`git add ${CONFIG.blogContentPath}`);
  }

  // Stage keywords file if a new post was added
  if (blogPost && !blogPost.isRefresh) {
    run(`git add ${CONFIG.blogKeywordsPath}`);
  }

  const status = run("git status --porcelain");
  if (!status) {
    console.log("No changes to commit.");
    return;
  }

  const commitMsg = blogPost
    ? `chore(seo): agent run — rankings + ${blogPost.isRefresh ? "refreshed" : "new"} blog post`
    : "chore(seo): agent run — rankings check";

  const msgFile = path.join(process.cwd(), ".commit-msg.tmp");
  fs.writeFileSync(msgFile, commitMsg);
  try {
    run("git commit -F .commit-msg.tmp");
  } finally {
    if (fs.existsSync(msgFile)) fs.unlinkSync(msgFile);
  }
  run("git pull --rebase origin main");
  run("git push origin main");
  console.log("All changes committed and pushed to main.");
}
