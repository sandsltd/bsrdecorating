import { hasMonetaryAmount } from "../../src/lib/blogPricing";

// This applies to topics, recommendations and reports as well as article copy.
// A tailored quote is fine; published rates or price-led SEO content are not.
export function mentionsPricing(text: string): boolean {
  return /[£$€]\s*\d/.test(text) || text.includes("£") || hasMonetaryAmount(text) ||
    /\b\d{2,}(?:[.,]\d+)?\s*(?:per|a)\s+(?:room|hour|day|kitchen|job|unit|litre|square metre)\b/i.test(text) ||
    /\b(?:prices?|pricing|priced|costs?|costing|rates?|fees?|budgets?|discounts?|sav(?:e|es|ed|ing|ings?)|affordable|cheap(?:er|est)?|expensive|payments?|money|pounds?|GBP|how much|value for money)\b/i.test(text);
}

export function activeStrategyForPrompt(strategy: string): string {
  const currentPlan = strategy.split("\n## Session Log")[0];
  return currentPlan.split("\n").filter((line) => !mentionsPricing(line)).join("\n");
}

export function safeRankings<T extends { keyword: string }>(rankings: T[]): T[] {
  return rankings.filter((ranking) => !mentionsPricing(ranking.keyword));
}

export function assertNoPricing(copy: string[], label: string): void {
  if (copy.some(mentionsPricing)) {
    throw new Error(`${label} includes price-led content and cannot be published`);
  }
}
