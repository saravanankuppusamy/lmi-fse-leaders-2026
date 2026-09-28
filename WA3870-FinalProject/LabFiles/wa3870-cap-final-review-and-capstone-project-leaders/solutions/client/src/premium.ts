// The premium logic, typed (provided). The components call this; you never
// modify the function. (Solution state: aligned with the API's
// standardized rates per the sponsor's launch decision.)
import type { CoverageType } from "./types";

const BASE_RATES: Record<CoverageType, number> = {
  auto: 90,
  home: 135,
  life: 70,
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
