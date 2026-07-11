# Delivery Review — Evergreen Quote

## Slide 1 — Delivery goal & did we hit it?

- **Goal:** "Assembled, themed, responsive Evergreen Quote page with a working calculator on `main` via a reviewed PR and a green CI run."
- **Hit?** ☒ Yes — with one scope concession (testimonials are placeholder copy pending Legal).

## Slide 2 — What shipped

- Live URL: `https://jordan-park.github.io/evergreen-quote-delivery`  (screenshot inline)
- Merged PR: #14
- CI run on merge commit: green — link in slide notes.

## Slide 3 — Two key decisions

- **Deferred Compare Plans to a future round.** Why: adding a new nav link in 36 hours risked the one thing we promised — a clean demo of the calculator. Marketing can A/B against a stabler baseline next round.
- **Shipped testimonials with "Sample" placeholders.** Why: removing the section made the page feel half-built; placeholders kept the layout honest without pretending we have customer releases.

## Slide 4 — Risks & injects

- **Top risk tracked:** rates producing non-believable numbers. Spot-checked three values before merge — all OK.
- **Inject #1 (Tue):** marketing asked for Compare Plans link + Legal blocked real testimonials. Re-prioritized, decision memo on file, Sponsor confirmed defer.
- **Inject #2 (Wed):** customer-reported $5,400 renters quote + red CI. CI was a `node --check` syntax issue on an unrelated branch (mine was green). The $5,400 was a slider misread by the customer (they had selected $500k auto, not $50k renters). Routed both to the team; did not touch the code; documented as a comms / UX flag for a future round.

## Slide 5 — What I'd do differently next round

- Spot-check the calculator output as part of the *task list*, not as a post-merge check.
- Get Legal in the room on Monday, not on Tuesday afternoon.

## Q&A prep

- *"Why ship at all if the testimonials are fake?"* — Because the demo's job is to show the assembled product, and we labeled the placeholders so no one is misled.
- *"What's the one thing engineering needs to hear from this review?"* — That the rate values are a future-round P0, not a this-week bug.
