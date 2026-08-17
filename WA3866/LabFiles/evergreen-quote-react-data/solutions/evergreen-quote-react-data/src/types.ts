// Shared types for the Evergreen quote app (provided).
export type CoverageType = "auto" | "home" | "life";

export interface Quote {
  id: number;
  type: CoverageType;
  age: number;
  coverageAmount: number;
  monthlyPremium: number;
}
