# Stakeholder Status Update: Evergreen Quote, Tue EOD

**To:** Priya Ramanathan (Project Sponsor)
**From:** Sam Okafor (Delivery Lead)
**Date:** Tue 17:00

## What shipped today

- Quote routes assembled and toured end to end: list, fetch by id, create, both validation 400s (Mongoose message read out loud), and the 404.
- `npm test` caught a real defect in the AI-drafted POST handler: a tidy 201 quoting $0.35 a month for $50,000 of coverage (the premium inputs were passed in the wrong order). The kit's one-line fix is in; seven tests green. The demo lied; the tests did the math.
- Service name configured (`Evergreen Quote API`), and your rate decision applied and spot-checked: auto, 35, 50000 now quotes 450.
- GraphQL mounted with the explorer at `/explorer`; a mutation's quote came straight back through `GET /api/quotes`. Same data, two doors.
- Risk register on file (five rows, see `risk-register.md`); decision memo on renters (see `decision-memo.md`) recommending defer.

## What slipped (and why)

- Nothing from the plan. Two calls from today's inject, both needing your confirmation: renters is a **no for this week** (the schema contract makes it a six-piece change; memo attached), and the base-image CVE is **acknowledged, not fixed**: moderate severity, the API is not internet-exposed this week, the patched tag lands next week, so I recommend shipping on the current base with the rebuild scheduled. The hold trigger is written down in `risk-register.md` (R4).

## What's next (tomorrow)

- Containerize and prove parity: the same curls through the container as through the dev server.
- Enable CI, then make the go/no-go call from the run, not from the demo.
- Review the site deploy artifacts (script plus both policies), and check Copilot's one drafted test with a written critique.

## What I need from you

- **Confirm by 11:00 Wed:** renters deferred to the next delivery window, offered to the partner as its first item (memo attached)?
- **Confirm by 11:00 Wed:** ship this week on the current `node:22-alpine` base, rebuild on the patched tag next week?
