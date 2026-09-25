// quotes.js — in-memory data and premium math (provided).
const BASE_RATES = { auto: 80, home: 120, life: 60 };

export function calculatePremium(type, age, coverageAmount) {
  const base = BASE_RATES[type] ?? 100;
  const ageFactor = age < 25 ? 1.4 : age > 60 ? 1.25 : 1.0;
  const raw = base * ageFactor * (coverageAmount / 10000);
  return Math.round(raw * 100) / 100;
}

export const quotes = [
  { id: "q1", type: "auto", age: 41, coverageAmount: 50000, monthlyPremium: 96.0 },
  { id: "q2", type: "home", age: 52, coverageAmount: 250000, monthlyPremium: 375.0 },
  { id: "q3", type: "life", age: 29, coverageAmount: 100000, monthlyPremium: 84.0 },
  { id: "q4", type: "auto", age: 23, coverageAmount: 30000, monthlyPremium: 100.8 },
];
