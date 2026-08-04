# Delivery Goal: Evergreen Quote

## Goal

> By Thursday EOD, the assembled Evergreen Quote React app (typed, live-updating estimate, recent quotes loaded from the data feed, hook and context wired in with no behavior change) is on `main` via a reviewed PR with a green CI run (type-check + production build), and I can demo it without pre-apologizing.

## "Done" looks like

- The estimate updates as the visitor types; auto / home / life all return believable numbers under the sponsor's rates.
- Recent quotes load from `quotes.json` with a visible loading state; **Save this quote** puts a new row at the top instantly.
- `npm run type-check` passes; the contracts hold.
- `npm run build` produces `dist/` and CI is green on the merge commit.
- One reviewed PR merged, branch deleted.
- `delivery-leadership-package/` is complete and committed.

## Out of scope (this week)

- ZIP-code field and regional pricing: deferred, see decision-memo.md.
- Toolchain version upgrade: pinned until the platform team's window next week.
- Anything that asks the customer for an email.
