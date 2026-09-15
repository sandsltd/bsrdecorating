import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { activeStrategyForPrompt, assertNoPricing, mentionsPricing, safeRankings } from "./editorial-policy";

test("blocks figures and price-led language while allowing a tailored quote", () => {
  for (const text of ["£750 per kitchen", "GBP 750", "$750", "750 per kitchen", "Pricing Guide", "What does decorating cost?", "Save 15%", "affordable rates"]) {
    assert.equal(mentionsPricing(text), true, text);
    assert.throws(() => assertNoPricing([text], "Article"));
  }
  assert.doesNotThrow(() => assertNoPricing(["Ask for a tailored written quote"], "Article"));
});

test("removes retired topics and run history from model context", () => {
  const strategy = readFileSync("docs/seo-strategy.md", "utf8");
  const context = activeStrategyForPrompt(strategy);
  assert.match(context, /decorator exeter/);
  assert.doesNotMatch(context, /Session Log/);
  for (const line of context.split("\n")) assert.equal(mentionsPricing(line), false, line);
});

test("excludes price search terms from worker rankings", () => {
  const input = [
    { keyword: "decorator exeter", position: 12 },
    { keyword: "exterior painting cost exeter", position: 9 },
  ];
  assert.deepEqual(safeRankings(input), [input[0]]);
});
