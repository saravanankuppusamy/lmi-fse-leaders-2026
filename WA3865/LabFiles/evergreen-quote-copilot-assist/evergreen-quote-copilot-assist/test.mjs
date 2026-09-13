// test.mjs — verify your work with Node's built-in test runner.
// Run:  node --test
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  applyMultiPolicyDiscount,
  formatQuoteSummary,
  parseAmount,
  riskTier,
  quoteBundleTotal,
} from "./evergreen-features.js";

test("applyMultiPolicyDiscount: 1 policy = no discount", () => {
  assert.equal(applyMultiPolicyDiscount(100, 1), 100);
});

test("applyMultiPolicyDiscount: 2 policies = 10% off", () => {
  assert.equal(applyMultiPolicyDiscount(100, 2), 90);
});

test("applyMultiPolicyDiscount: 3+ policies = 15% off", () => {
  assert.equal(applyMultiPolicyDiscount(100, 3), 85);
  assert.equal(applyMultiPolicyDiscount(200, 5), 170);
});

test("applyMultiPolicyDiscount: rounds to 2 decimals", () => {
  assert.equal(applyMultiPolicyDiscount(96.0, 2), 86.4);
});

test("formatQuoteSummary: uppercase type and currency", () => {
  const summary = formatQuoteSummary({ type: "auto", monthlyPremium: 96 });
  assert.equal(summary, "AUTO — $96.00/mo");
});

test("parseAmount: parses a currency string to a number", () => {
  assert.equal(parseAmount("$1,250.50"), 1250.5);
  assert.equal(parseAmount("$96.00"), 96);
});

// These pass from the start and must STILL pass after the Exercise 6 refactor.
test("riskTier: maps scores to the right tiers (boundaries included)", () => {
  assert.equal(riskTier(95), "LOW");
  assert.equal(riskTier(80), "LOW");
  assert.equal(riskTier(79), "MODERATE");
  assert.equal(riskTier(65), "MODERATE");
  assert.equal(riskTier(64), "ELEVATED");
  assert.equal(riskTier(50), "ELEVATED");
  assert.equal(riskTier(49), "HIGH");
});

test("quoteBundleTotal: one quote gets no discount", () => {
  assert.equal(quoteBundleTotal([{ type: "auto", monthlyPremium: 100 }]), 100);
});

test("quoteBundleTotal: two quotes get 10% off the total", () => {
  const quotes = [
    { type: "auto", monthlyPremium: 60 },
    { type: "home", monthlyPremium: 40 },
  ];
  assert.equal(quoteBundleTotal(quotes), 90);
});

test("quoteBundleTotal: three or more quotes get 15% off the total", () => {
  const quotes = [
    { type: "auto", monthlyPremium: 50 },
    { type: "home", monthlyPremium: 30 },
    { type: "renters", monthlyPremium: 20 },
  ];
  assert.equal(quoteBundleTotal(quotes), 85);
});

test("quoteBundleTotal: an empty bundle throws a RangeError", () => {
  assert.throws(() => quoteBundleTotal([]), RangeError);
});
