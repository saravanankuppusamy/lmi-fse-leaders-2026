// The premium logic from Week 1 — now it needs types.
// In the lab you will add the type annotations marked with TODO.

import type { CoverageType } from "./types";

// A Record maps every CoverageType to a number. Once CoverageType is defined,
// TypeScript will require this object to have a key for each coverage type.
const BASE_RATES: Record<CoverageType, number> = {
  auto: 80,
  home: 120,
  life: 60,
};

// TODO 3: Add type annotations to the parameters and the return type.
//         type: CoverageType, age: number, coverageAmount: number, returns number
export function calculatePremium(type, age, coverageAmount) {
  const base = BASE_RATES[type] ?? 100;
  const ageFactor = age < 25 ? 1.4 : age > 60 ? 1.25 : 1.0;
  const coverageFactor = coverageAmount / 10000;
  return base * ageFactor * coverageFactor;
}

// TODO 4: Add type annotations (age: number, coverageAmount: number, returns void).
export function validateInputs(age, coverageAmount) {
  if (Number.isNaN(age) || age < 18 || age > 100) {
    throw new Error("Please enter an age between 18 and 100.");
  }
  if (Number.isNaN(coverageAmount) || coverageAmount < 10000) {
    throw new Error("Coverage amount must be at least $10,000.");
  }
}
