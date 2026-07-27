// The premium logic from Week 1 — now fully typed (Solution).

import type { CoverageType } from "./types";

const BASE_RATES: Record<CoverageType, number> = {
  auto: 80,
  home: 120,
  life: 60,
};

export function calculatePremium(
  type: CoverageType,
  age: number,
  coverageAmount: number
): number {
  const base = BASE_RATES[type] ?? 100;
  const ageFactor = age < 25 ? 1.4 : age > 60 ? 1.25 : 1.0;
  const coverageFactor = coverageAmount / 10000;
  return base * ageFactor * coverageFactor;
}

export function validateInputs(age: number, coverageAmount: number): void {
  if (Number.isNaN(age) || age < 18 || age > 100) {
    throw new Error("Please enter an age between 18 and 100.");
  }
  if (Number.isNaN(coverageAmount) || coverageAmount < 10000) {
    throw new Error("Coverage amount must be at least $10,000.");
  }
}
