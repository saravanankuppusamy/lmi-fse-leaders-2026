// Shared types for the Evergreen quote app.
// You will define these in the lab. Until you do, TypeScript will underline
// the places that use them in red — that is TypeScript telling you a contract
// is missing.

// TODO 1: Define a union type called CoverageType with exactly three values:
//         "auto", "home", and "life".
//
//         export type CoverageType = ...

// TODO 2: Define an interface called Quote that describes one saved quote.
//         It needs: id (number), type (CoverageType), age (number),
//         coverageAmount (number), and monthlyPremium (number).
//
//         export interface Quote { ... }

// This empty export makes the file a module so the other files can import from
// it. Without at least one export, TypeScript says "types is not a module."
// Once you add CoverageType and Quote above, you can delete this line.
export {};
