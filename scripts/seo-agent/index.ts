import fs from "fs";
import path from "path";
import { CONFIG } from "./config";
import { checkRankings } from "./rankings";
import { generateBlogPost } from "./content";
import { addInternalLinks } from "./linking";
import { checkCompetitors } from "./competitors";
import { generateRecommendations } from "./strategy";
import {
  publishPost,
  updateSessionLog,
  updateStrategyTopicStatus,
  commitAndPush,
} from "./publish";
import { sendReport } from "./email";

async function main() {
  console.log("=== BSR Decorating SEO Agent ===\n");

  const strategyPath = path.join(process.cwd(), CONFIG.strategyDocPath);

  if (!fs.existsSync(strategyPath)) {
    throw new Error(`Strategy doc not found: ${strategyPath}`);
  }

  // --- Stage 1: Rankings Check ---
  console.log("--- Stage 1: Checking keyword rankings ---\n");
  const { rankings, strategyDocUpdated } = await checkRankings();

  const indexedCount = rankings.filter((r) => r.position !== null).length;
  console.log(
    `\nRankings checked: ${indexedCount}/${rankings.length} keywords indexed.\n`
  );

  // --- Stage 2: Content Generation (new or refresh) ---
  console.log("--- Stage 2: Generating/refreshing blog content ---\n");
  const blogPost = await generateBlogPost(strategyDocUpdated, rankings);

  if (blogPost) {
    // Write the blog post to the TypeScript data files
    publishPost(blogPost);
  }

  // --- Stage 3: Internal Linking ---
  console.log("--- Stage 3: Adding internal links ---\n");
  const linksAdded = await addInternalLinks();
  console.log(`Internal linking: ${linksAdded} links added.\n`);

  // --- Stage 4: Competitor Tracking ---
  console.log("--- Stage 4: Checking competitor websites ---\n");
  const competitorReport = await checkCompetitors();

  // --- Stage 5: SEO Strategy Analysis ---
  console.log("\n--- Stage 5: Analysing SEO strategy ---\n");
  const recommendations = await generateRecommendations(
    strategyDocUpdated,
    rankings
  );
  console.log(`Generated ${recommendations.length} recommendations.\n`);

  // --- Stage 6: Publish & Report ---
  console.log("--- Stage 6: Publishing and reporting ---\n");

  const summaryParts: string[] = [];
  summaryParts.push(
    `Checked rankings for ${rankings.length} keywords (${indexedCount} indexed)`
  );

  if (blogPost) {
    const action = blogPost.isRefresh ? "Refreshed" : "Generated";
    summaryParts.push(
      `${action} blog post: "${blogPost.title}" targeting "${blogPost.targetKeyword}"`
    );
  } else {
    summaryParts.push("No new blog post needed — all planned topics covered");
  }

  if (linksAdded > 0) {
    summaryParts.push(`Added ${linksAdded} internal links across blog posts`);
  }

  const activeCompetitors = competitorReport.competitors.filter(
    (c) => c.recentPages.length > 0
  );
  if (activeCompetitors.length > 0) {
    summaryParts.push(
      `${activeCompetitors.length} competitors have published new content recently`
    );
  }

  summaryParts.push(
    `Generated ${recommendations.length} SEO recommendations`
  );

  const sessionSummary = summaryParts.join(". ") + ".";

  // Update strategy doc: session log + topic status
  let finalStrategy = updateSessionLog(strategyDocUpdated, sessionSummary);
  if (blogPost && !blogPost.isRefresh) {
    finalStrategy = updateStrategyTopicStatus(
      finalStrategy,
      blogPost.slug,
      blogPost.title
    );
  }

  // Commit everything and push
  commitAndPush(finalStrategy, blogPost, linksAdded > 0);

  // Send email report
  await sendReport({
    rankings,
    blogPost: blogPost
      ? {
          title: blogPost.title,
          targetKeyword: blogPost.targetKeyword,
          isRefresh: blogPost.isRefresh,
        }
      : null,
    competitorReport,
    recommendations,
    linksAdded,
    sessionSummary,
  });

  console.log("\n=== SEO Agent complete ===");
}

main().catch((error) => {
  console.error("SEO Agent failed:", error);
  process.exit(1);
});
