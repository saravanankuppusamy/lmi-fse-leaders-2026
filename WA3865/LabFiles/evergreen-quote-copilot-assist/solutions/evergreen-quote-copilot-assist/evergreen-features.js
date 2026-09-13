// evergreen-features.js - AI-assisted feature work (Solution)
// Each function below is the verified, tested result of directing Copilot
// (completions, Ask, Edit, Plan, and Agent modes) and then inspecting,
// editing, and testing the output.

// EXERCISE 1 - Comment-driven generation (completions)
export function applyMultiPolicyDiscount(premium, policyCount) {
  let rate = 0;
  if (policyCount === 2) rate = 0.1;
  else if (policyCount >= 3) rate = 0.15;
  const discounted = premium * (1 - rate);
  return Math.round(discounted * 100) / 100;
}

// EXERCISE 2 - Review an AI-generated function for a bug (Ask mode).
// The bug was `quote.type.toUpperCase` (missing parentheses; it referenced the
// function instead of calling it), and the premium was not formatted to 2 dp.
export function formatQuoteSummary(quote) {
  const type = quote.type.toUpperCase();
  const premium = "$" + quote.monthlyPremium.toFixed(2) + "/mo";
  return `${type} — ${premium}`;
}

// EXERCISE 3 - Spot the hallucination (Ask mode).
// `Number.parseMoney` does not exist. Strip the currency symbols and parse.
export function parseAmount(text) {
  return Number(text.replace(/[$,]/g, ""));
}

// EXERCISES 5 & 6 - Ask mode explained the original nested ternary; Edit mode
// refactored it into readable early returns. Behavior is unchanged, and the
// riskTier tests prove it.
export function riskTier(score) {
  if (score >= 80) return "LOW";
  if (score >= 65) return "MODERATE";
  if (score >= 50) return "ELEVATED";
  return "HIGH";
}

// EXERCISES 7 & 8 - Planned in Plan mode, implemented and test-verified by
// Agent mode, then reviewed by a human. Reuses applyMultiPolicyDiscount
// instead of duplicating the discount tiers.
export function quoteBundleTotal(quotes) {
  if (!Array.isArray(quotes) || quotes.length === 0) {
    throw new RangeError("quotes must be a non-empty array of quotes");
  }
  const total = quotes.reduce((sum, quote) => sum + quote.monthlyPremium, 0);
  return applyMultiPolicyDiscount(total, quotes.length);
}
