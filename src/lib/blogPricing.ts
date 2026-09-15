import type { BlogSection } from '@/data/blogContent';

// Blog articles should explain the work and invite a project-specific quote,
// rather than publish figures that may be mistaken for BSR's current rates.
export const hasMonetaryAmount = (text: string): boolean =>
  /(?:£\s*|GBP\s*)\d[\d,.]*/i.test(text) ||
  /\b(?:few|several|hundreds?|thousands?|millions?|tens of thousands of)\s+(?:hundred|thousand|million)?\s*pounds?\b/i.test(text) ||
  /\b(?:costs?|costing|priced at)\s+(?:a\s+)?(?:few|several|hundreds?|thousands?)\s+(?:hundred|thousand)?\b/i.test(text) ||
  /\b(?:costs?|prices?|rates?|premiums?|savings?)\b[^.!?]{0,100}\b\d+(?:[-–]\d+)?%/i.test(text);

function withoutPriceSentences(text: string): string {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z<\[])/)
    .filter((sentence) => !hasMonetaryAmount(sentence))
    .join(' ')
    .trim();
}

export function blogSectionsWithoutPricing(sections: BlogSection[]): BlogSection[] {
  const result: BlogSection[] = [];
  let skipLevel: number | null = null;

  for (const section of sections) {
    if (section.type === 'heading' || section.type === 'subheading') {
      const level = section.level ?? (section.type === 'heading' ? 2 : 3);
      if (skipLevel !== null && level > skipLevel) continue;
      skipLevel = null;

      if (typeof section.content === 'string' && /\b(?:costs?|prices?|pricing|budgets?)\b/i.test(section.content)) {
        skipLevel = level;
        continue;
      }
    } else if (skipLevel !== null) {
      continue;
    }

    if (typeof section.content === 'string') {
      const content = withoutPriceSentences(section.content);
      if (content) result.push({ ...section, content });
    } else if (Array.isArray(section.content) && section.content.every((item) => typeof item === 'string')) {
      const content = section.content
        .map((item) => withoutPriceSentences(item as string))
        .filter(Boolean);
      if (content.length) result.push({ ...section, content });
    } else {
      result.push(section);
    }
  }

  return result;
}
