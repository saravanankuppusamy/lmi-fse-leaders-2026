// Shared types for the Evergreen quote app (Solution).

// A union type: a CoverageType is one of exactly these three strings.
export type CoverageType = "auto" | "home" | "life";

// An interface describes the shape of one saved quote.
export interface Quote {
  id: number;
  type: CoverageType;
  age: number;
  coverageAmount: number;
  monthlyPremium: number;
}
