// The premium logic, typed (provided). You will call this from your component.
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

export function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
