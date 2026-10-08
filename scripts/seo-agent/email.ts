import { renderRunReport } from "./email-design.mjs";
import { Resend } from "resend";
import { CONFIG } from "./config";
import type { Recommendation } from "./strategy";
import type { CompetitorReport } from "./competitors";
import { mentionsPricing, safeRankings } from "./editorial-policy";

interface RankingChange {
  keyword: string;
  position: number | null;
  previousPosition: string;
  clicks: number;
  impressions: number;
}

interface EmailReportData {
  rankings: RankingChange[];
  blogPost: {
    slug?: string;
    title: string;
    targetKeyword: string;
    isRefresh: boolean;
  } | null;
  competitorReport: CompetitorReport;
  recommendations: Recommendation[];
  linksAdded: number;
  sessionSummary: string;
}

export function buildHtml(data: EmailReportData, reportDate = new Date()): string {
  return renderRunReport({ name: CONFIG.siteName, url: CONFIG.siteUrl }, data, reportDate).html;
}

export async function sendReport(data: EmailReportData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const reportEmail = process.env.REPORT_EMAIL;

  if (!apiKey || !reportEmail) {
    console.warn("Missing RESEND_API_KEY or REPORT_EMAIL — skipping email.");
    return;
  }

  const resend = new Resend(apiKey);
  const monthYear = new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const safeData: EmailReportData = {
    ...data,
    rankings: safeRankings(data.rankings),
    blogPost: data.blogPost && !mentionsPricing(`${data.blogPost.title} ${data.blogPost.targetKeyword}`)
      ? data.blogPost : null,
    recommendations: data.recommendations.filter((rec) =>
      !mentionsPricing(`${rec.category} ${rec.title} ${rec.description}`)
    ),
    competitorReport: {
      competitors: data.competitorReport.competitors.map((comp) => ({
        ...comp,
        recentPages: comp.recentPages.filter((page) => !mentionsPricing(page.url)),
      })),
    },
    sessionSummary: mentionsPricing(data.sessionSummary)
      ? "SEO analysis completed. Review the run log for details." : data.sessionSummary,
  };
  const html = buildHtml(safeData);
  if (mentionsPricing(html)) {
    throw new Error("SEO report includes price-led content and cannot be sent");
  }

  const result = await resend.emails.send({
    from: CONFIG.emailFrom,
    to: reportEmail,
    subject: `${CONFIG.emailSubjectPrefix} — ${monthYear}`,
    html,
    text: renderRunReport({ name: CONFIG.siteName, url: CONFIG.siteUrl }, safeData).text,
  });

  if (result.error) {
    throw new Error(`Resend error: ${result.error.message}`);
  }

  console.log("Resend response:", JSON.stringify(result));
  console.log(`Report email sent to ${reportEmail}`);
}
