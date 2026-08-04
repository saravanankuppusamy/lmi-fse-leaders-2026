# Solutions: Reference Completed Capstone (Phase 2)

This folder is what a **completed** delivery week looks like at the end of Thursday. Instructors use it as the reference; learners can peek if stuck, but the goal of the capstone is the learner produces their own version, not copies this.

> **Note:** This folder is **not part of the starter kit**. Learners assemble their own app from the provided pieces (`starter/`, `components/`, `data-loading/`, `hooks-context/`, `data/`, `workflows/`) and write their own leadership artifacts from `templates/`.

## Run it

```bash
npm install
npm run dev          # live app on http://localhost:5173
npm run type-check   # clean
npm run build        # production build in dist/
npm run preview      # serve the production build on http://localhost:4173
```

No separate server is needed for the recent-quotes data feed. `public/quotes.json` is served by Vite itself: `npm run dev` serves it at `/quotes.json`, and `npm run build` copies it into `dist/` so `npm run preview` serves it the same way. The only setup that fails is opening `index.html` directly from the filesystem; always go through the dev server or preview.

## What's here

| Path | What it is |
|---|---|
| `src/App.tsx` | The shell with both provided components assembled in and the app wrapped in `QuotesProvider` (end-of-Day-3 state). |
| `src/components/QuoteForm.tsx` | The Day 3 (hook + context) version: uses `useQuoteEstimate`, saves via `addQuote`. |
| `src/components/PremiumDisplay.tsx` | The provided display component, unchanged. |
| `src/components/RecentQuotes.tsx` | The Day 3 (context) version: reads quotes, loading, and error from context. |
| `src/hooks/useQuoteEstimate.ts` | The provided custom hook, dropped in unchanged. |
| `src/context/QuotesContext.tsx` | The provided context provider (owns the `useEffect` fetch), dropped in unchanged. |
| `src/premium.ts` | The provided rate model with the sponsor's Monday rate decision applied (auto 85 / home 130 / life 65, values only). |
| `src/types.ts`, `src/sampleQuotes.ts`, `src/main.tsx`, `src/index.css` | Provided, unchanged. (`sampleQuotes.ts` is no longer imported after Day 3; the feed replaced it.) |
| `public/quotes.json` | The provided data feed, copied in on Day 3. |
| `.env` | The product title, configured on Day 2. |
| `.github/workflows/ci.yml` | The provided CI workflow, enabled on Day 3 unchanged. |
| `delivery-leadership-package/` | A filled-in example of all required leadership artifacts (vision brief, delivery goal, risk register, decision memo, status update, go/no-go, delivery review outline). |

The Tuesday type bug (`quote.coverage` in the provided `components/RecentQuotes.tsx`) does not appear here: this is the *fixed* state, and the Day 3 context version replaced that file anyway.

The point of the capstone is **what's in `delivery-leadership-package/`**, not what's in `src/`; the source is the same provided pieces every learner gets.
