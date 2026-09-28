// Shared types for the Evergreen quote app (provided - Day 2, REPLACES
// src/types.ts). These are the contracts every provided piece is written
// against. One change from the Phase 2 era: quote ids are strings now,
// because the API's database assigns them ("q1" for seeded quotes, UUIDs
// for new ones). Numbers made up by the browser are retired.
export type CoverageType = "auto" | "home" | "life";

export interface Quote {
  id: string;
  type: CoverageType;
  age: number;
  coverageAmount: number;
  monthlyPremium: number;
}
