// Provided for you — the DOM wiring. You will not need to change this file.
// Notice how it imports typed functions and a typed data array from the other
// modules. The types come from types.ts, which you will fill in.

import { calculatePremium, validateInputs } from "./premium";
import type { CoverageType, Quote } from "./types";
import { sampleQuotes } from "./sampleQuotes";

// Typed DOM lookups — the generic <...> tells TypeScript exactly what we get back.
const form = document.querySelector<HTMLFormElement>("#quote-form")!;
const typeEl = document.querySelector<HTMLSelectElement>("#coverage-type")!;
const ageEl = document.querySelector<HTMLInputElement>("#age")!;
const amountEl = document.querySelector<HTMLInputElement>("#coverage-amount")!;
const estimateEl = document.querySelector<HTMLSpanElement>("#estimate-amount")!;
const messageEl = document.querySelector<HTMLParagraphElement>("#message")!;
const recentList = document.querySelector<HTMLUListElement>("#recent-list")!;

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function updateEstimate(): void {
  const type = typeEl.value as CoverageType;
  const age = Number(ageEl.value);
  const coverageAmount = Number(amountEl.value);

  try {
    validateInputs(age, coverageAmount);
    const premium = calculatePremium(type, age, coverageAmount);
    estimateEl.textContent = formatCurrency(premium);
    messageEl.textContent = "";
  } catch (error) {
    estimateEl.textContent = "—";
    messageEl.textContent = error instanceof Error ? error.message : "Invalid input.";
  }
}

function renderRecentQuotes(quotes: Quote[]): void {
  recentList.innerHTML = "";
  quotes.forEach((quote) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="quote-type">${quote.type}</span> &mdash;
      <span class="quote-premium">${formatCurrency(quote.monthlyPremium)}/mo</span>
    `;
    recentList.appendChild(li);
  });
}

updateEstimate();
form.addEventListener("input", updateEstimate);
renderRecentQuotes(sampleQuotes);
