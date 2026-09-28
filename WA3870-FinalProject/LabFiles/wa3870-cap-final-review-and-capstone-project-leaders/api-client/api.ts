// src/api.ts - the typed client for the Evergreen Quote API (provided -
// Day 2, new file). This module is the seam between the two halves of the
// program: it speaks the API's wire format on one side and the app's Quote
// contract on the other.
import type { Quote, CoverageType } from "./types";

// What the API actually sends over the wire. MongoDB documents carry _id.
export interface ApiQuote {
  _id: string;
  type: CoverageType;
  age: number;
  coverageAmount: number;
  monthlyPremium: number;
  tags: string[];
}

// What the app sends when a visitor saves a quote. No id and no premium:
// the database assigns the id, and the API computes the premium.
export interface NewQuoteInput {
  type: CoverageType;
  age: number;
  coverageAmount: number;
}

function toQuote(doc: ApiQuote): Quote {
  return {
    id: doc.id,
    type: doc.type,
    age: doc.age,
    coverageAmount: doc.coverageAmount,
    monthlyPremium: doc.monthlyPremium,
  };
}

export async function fetchQuotes(signal?: AbortSignal): Promise<Quote[]> {
  const res = await fetch("/api/quotes", { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: ApiQuote[] = await res.json();
  return data.map(toQuote);
}

export async function saveQuote(input: NewQuoteInput): Promise<Quote> {
  const res = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const doc: ApiQuote = await res.json();
  return toQuote(doc);
}
