// evergreen-features.js - AI-assisted feature work (Starter)
// ---------------------------------------------------------
// This file is where you will practice working WITH GitHub Copilot, using
// inline completions and the Ask, Edit, Plan, and Agent chat modes, and, just
// as importantly, reviewing what it produces. Treat every AI suggestion as a
// DRAFT to verify, not a finished answer.
//
// Run `node --test` (see test.mjs) at any point to check your work.

// ===========================================================================
// EXERCISE 1 - Comment-driven generation (Copilot completions)
// ===========================================================================
// Write the function body below from this specification. Put your cursor on a
// blank line inside the function, pause, and review Copilot's ghost-text
// suggestion against the spec BEFORE accepting it with Tab.
//
// Spec: applyMultiPolicyDiscount(premium, policyCount)
//   - 1 policy  -> no discount
//   - 2 policies -> 10% off
//   - 3 or more -> 15% off
//   - return the discounted premium rounded to 2 decimal places
export function applyMultiPolicyDiscount(premium, policyCount) {
  // TODO 1: implement from the spec above with Copilot's help.
  return premium;
}

// ===========================================================================
// EXERCISE 2 - Review an AI-generated function for a bug (Ask mode)
// ===========================================================================
// The function below is exactly what an AI assistant produced for the spec:
//   "Return a one-line summary like 'AUTO — $96.00/mo' (uppercase type,
//    premium formatted as US currency)."
// It LOOKS right and even runs, but it has a subtle bug. Find and fix it.
// (Hint: run `node --test`, read the failing expectation, then select this
//  function and ask Copilot in Ask mode what is wrong with it.)
export function formatQuoteSummary(quote) {
  // TODO 2: review and fix the bug in the line below.
  const type = quote.type.toUpperCase;
  const premium = "$" + quote.monthlyPremium + "/mo";
  return `${type} — ${premium}`;
}

// ===========================================================================
// EXERCISE 3 - Spot the hallucination (Ask mode)
// ===========================================================================
// An AI assistant suggested this helper. It is confident and plausible, but it
// calls an API that does not exist in JavaScript. Replace the invented call
// with real, working code.
//   Spec: parseAmount("$1,250.50") -> 1250.5  (a number)
export function parseAmount(text) {
  // TODO 3: Number.parseMoney is NOT a real function (a hallucination).
  //         Replace it with real parsing logic.
  return Number.parseMoney(text);
}

// ===========================================================================
// EXERCISE 5 - Interrogate code you didn't write (Ask mode)
// ===========================================================================
// This function WORKS and its tests already pass, but it is a nest of
// ternaries nobody wants to decode by hand. Don't edit it yet. Select it and
// use Ask mode to explain what it returns for every score range, then check
// the explanation against the riskTier test in test.mjs.
//
// EXERCISE 6 - Refactor with a safety net (Edit mode)
// ---------------------------------------------------------------------------
// TODO 6: use Edit mode to refactor this into readable if/else statements
//         with early returns, WITHOUT changing its behavior. Review the diff,
//         keep it, then run `node --test` to prove behavior is unchanged.
export function riskTier(score) {
  return score >= 80 ? "LOW" : score >= 50 ? (score < 65 ? "ELEVATED" : "MODERATE") : "HIGH";
}

// ===========================================================================
// EXERCISES 7 & 8 - Plan the feature, then delegate it (Plan + Agent modes)
// ===========================================================================
// Spec: quoteBundleTotal(quotes)
//   - quotes is a non-empty array of quote objects: { type, monthlyPremium }
//   - throw a RangeError if quotes is empty
//   - sum the monthly premiums, then apply the multi-policy discount by
//     REUSING applyMultiPolicyDiscount with quotes.length as the policy count
//   - return the discounted total as a number rounded to 2 decimal places
//
// TODO 7 & 8: do not write this by hand. Use Plan mode to produce and review
//             a plan (Exercise 7), then Agent mode to implement and verify it
//             (Exercise 8).
export function quoteBundleTotal(quotes) {
  throw new Error("Not implemented: see Exercises 7 & 8 in the lab guide.");
}
