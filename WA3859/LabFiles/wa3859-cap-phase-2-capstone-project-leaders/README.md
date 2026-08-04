# Evergreen Quote: Phase 2 Capstone Starter Kit

This folder is your **starter kit**. Every "provided piece" the lab tells you to use lives here. You assemble from these; you do not author new code.

On the lab VM this folder is deployed to:

    ~/LabFiles/wa3859-cap-phase-2-capstone-project-leaders/

## What's in here

| Folder | What it's for | When you use it |
|---|---|---|
| `starter/` | The engineering team's runnable React + TypeScript + Vite project shell (`src/App.tsx` with `INSERT` markers, the typed rate model, the toolchain config, `README.md`, `CAPSTONE-BRIEF.md`). Push it to your own GitHub repo and assemble onto it. | **Day 1**: read the brief, run it, push it to GitHub. |
| `components/` | The three provided React components: `QuoteForm.tsx`, `PremiumDisplay.tsx`, `RecentQuotes.tsx` (props version; ships with one known type error, and the one-line fix is below). | **Day 2 morning**: drop into `src/components/`, wire into `App.tsx`. |
| `data-loading/` | `RecentQuotes.tsx` (the `useEffect` data-fetching version). Replaces Day 2's `RecentQuotes.tsx`. | **Day 3 morning**: switch the list to the data feed. |
| `data/` | `quotes.json`: the recent-quotes data feed (stands in for the quotes API). | **Day 3 morning**: copy to `public/quotes.json`. |
| `hooks-context/` | `useQuoteEstimate.ts` (custom hook), `QuotesContext.tsx` (context provider that owns the fetch), and the hook/context versions of `QuoteForm.tsx` and `RecentQuotes.tsx`. | **Day 3 morning**: the behavior-preserving refactor. |
| `workflows/` | `ci.yml`: the GitHub Actions CI workflow (`npm ci`, type-check, production build on every push). | **Day 3 morning**: enable CI. |
| `templates/` | Markdown templates for every required deliverable. | **All week**: copy into your `delivery-leadership-package/`. |
| `delivery-leadership-package/` | An **empty scaffold** (just a `.gitkeep`) for your written leadership artifacts. Copy it into your own repo on Day 1, then fill it from `templates/`. | **All week**: your deliverables live here. |

> **Note:** The `solutions/` folder that sits next to these is **not part of the starter kit**. It is a fully completed reference for instructors. Assemble your own work from the pieces above; don't copy from `solutions/`.

## Where each provided piece goes

| Kit file | Destination in your repo | Day | Action |
|---|---|---|---|
| `components/QuoteForm.tsx` | `src/components/QuoteForm.tsx` | 2 | copy in |
| `components/PremiumDisplay.tsx` | `src/components/PremiumDisplay.tsx` | 2 | copy in |
| `components/RecentQuotes.tsx` | `src/components/RecentQuotes.tsx` | 2 | copy in (then apply the one-line fix below) |
| `data-loading/RecentQuotes.tsx` | `src/components/RecentQuotes.tsx` | 3 | **replace** Day 2's file |
| `data/quotes.json` | `public/quotes.json` | 3 | copy in (create `public/`) |
| `hooks-context/useQuoteEstimate.ts` | `src/hooks/useQuoteEstimate.ts` | 3 | copy in (create `src/hooks/`) |
| `hooks-context/QuotesContext.tsx` | `src/context/QuotesContext.tsx` | 3 | copy in (create `src/context/`) |
| `hooks-context/QuoteForm.tsx` | `src/components/QuoteForm.tsx` | 3 | **replace** Day 2's file |
| `hooks-context/RecentQuotes.tsx` | `src/components/RecentQuotes.tsx` | 3 | **replace** the data-loading file |
| `workflows/ci.yml` | `.github/workflows/ci.yml` | 3 | copy in (create the folders) |

## Day 2: wiring the components into `App.tsx`

**Imports.** Replace the marker line

```tsx
// INSERT: component imports (Day 2 - paste the import lines from the kit README here)
```

with these three lines:

```tsx
import QuoteForm from "./components/QuoteForm";
import RecentQuotes from "./components/RecentQuotes";
import { sampleQuotes } from "./sampleQuotes";
```

**JSX.** Delete the `{/* INSERT: quote-form-section ... */}` comment **and** the placeholder `<section className="quote-form-section">...</section>` block under it, and paste this in their place:

```tsx
        <section className="quote-form-section">
          <QuoteForm />
          <RecentQuotes quotes={sampleQuotes} />
        </section>
```

You are pasting this, not writing it.

## Day 2: configuration values

| What | File | Change |
|---|---|---|
| Product title | `.env` | Set `VITE_APP_TITLE=Evergreen Insurance - Get a Quote` (replace the `CHANGEME` value; watch the browser tab after the dev server restarts). |
| Sponsor rates | `src/premium.ts` | In `BASE_RATES`, update the three **values** to the sponsor's Monday rate decision. Values only; do not touch the keys or the function. |

## Day 2: the one-line type fix

The engineering team shipped `components/RecentQuotes.tsx` with a known type error. Run `npm run type-check`, read the error, then apply this one-line fix in `src/components/RecentQuotes.tsx`:

```tsx
// Before (the bug: 'coverage' is not part of the Quote contract):
<span className="quote-type">{quote.coverage}</span> -{" "}

// After (the fix):
<span className="quote-type">{quote.type}</span> -{" "}
```

Re-run `npm run type-check`: it should report no errors, and the coverage-type labels appear in the browser.

## Day 3: switching the list to the data feed

After you replace `src/components/RecentQuotes.tsx` with `data-loading/RecentQuotes.tsx` and copy `data/quotes.json` to `public/quotes.json`, make two one-line edits in `src/App.tsx` (the compiler will point at both if you forget):

1. **Delete** this import line; the sample data is no longer used:

   ```tsx
   import { sampleQuotes } from "./sampleQuotes";
   ```

2. **Change** the `RecentQuotes` JSX; the list no longer arrives through a prop:

   ```tsx
   // Before:
   <RecentQuotes quotes={sampleQuotes} />

   // After:
   <RecentQuotes />
   ```

## Day 3: wiring the context provider into `App.tsx`

After you copy in `hooks-context/` (see the placement table), make these edits in `src/App.tsx`:

**Import.** Add this line under the two component imports:

```tsx
import { QuotesProvider } from "./context/QuotesContext";
```

**Wrap.** In the `return`, change the outer fragment tags into provider tags:

```tsx
// Before:
  return (
    <>
      ...everything...
    </>
  );

// After:
  return (
    <QuotesProvider>
      ...everything...
    </QuotesProvider>
  );
```

Only the two tags change; everything between them stays exactly as it was.

## Day 3: enabling CI

```bash
mkdir -p .github/workflows
cp ~/LabFiles/wa3859-cap-phase-2-capstone-project-leaders/workflows/ci.yml .github/workflows/
git add .github/workflows/ci.yml
git commit -m "Enable CI workflow"
git push
```

Do not modify the workflow itself (the optional CI challenge in the lab is the one exception).
