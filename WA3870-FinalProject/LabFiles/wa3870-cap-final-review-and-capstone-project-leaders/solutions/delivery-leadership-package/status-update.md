# Stakeholder Status Update: Evergreen Quote, Tue EOD

**To:** Priya Ramanathan (Project Sponsor)
**From:** Morgan Reyes (Delivery Lead)
**Date:** Tue 17:00

## What shipped today

- The client is wired to the API: the five provided pieces copied in, exactly one type error at the seam (the compiler named the file and line; the kit's one-line fix, `id: doc.id` → `id: doc._id`, made it clean), and then the program's first persistent quote: saved, reloaded, still there.
- Decommissioning the stub feed: `sampleQuotes.ts` and `quotes.json` retired from the repo. The database is the only source of recent quotes now.
- Your rate instruction applied. The drift was visible on screen (estimate $425.00, saved row $450.00/mo for the same inputs); after aligning the client to 90/135/70, both read $450.00. One CONFIG edit, spot-checked.
- The launch title in `.env`, your banner line and both quote links on the landing page, and marketing's hero rewrite applied (content only, 10 minutes).
- GraphQL mounted at the two markers; one mutation verified in the explorer (life/30/100000 → 700) and the saved document confirmed in `mongosh`.

## What slipped (and why)

- Nothing from the plan. Marketing's quote-form default ask is **acknowledged, not done**: it is application code in the engineering team's file, two days before launch. I routed it to them with my recommendation that it leads their next window; renters stays deferred (see `decision-memo.md`).

## What's next (tomorrow)

- Build `evergreen-quote-api:2.0`; run the stack from the container, then on the kind cluster, database first.
- Enable the two-job CI and make the Friday go/no-go from its signal.
- The required Copilot seed step, with a written critique.

## What I need from you

- **Confirm by 11:00 Wed:** the form default stays out of this launch (routed to engineering), and renters stays deferred.
- **Acknowledge the written demo plan I sent at 15:10:** Friday's demo runs on my VM (kind cluster plus port-forward to 3000); nothing depends on a shared cloud window.
