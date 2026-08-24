# Evergreen Quote — Composition & Hooks (Solution)

The completed reference app. It adds:

- `src/hooks/useQuoteEstimate.ts` — the custom hook holding the form logic.
- `src/context/QuotesContext.tsx` — context + `useReducer` for the saved quotes.
- Updated `QuoteForm` (uses the hook + saves to context) and `RecentQuotes`
  (reads from context, no props).

```bash
npm install
npm run dev
```
