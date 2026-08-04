# Evergreen Quote: Vision Brief

## Product
**Name:** Evergreen Insurance Quote (Phase 2 React rebuild)
**Delivery week:** 2
**Delivery Lead:** Alex Rivera
**Engineering team (represented by):** https://github.com/alex-rivera/evergreen-quote-react-delivery
**GitHub Project board:** https://github.com/users/alex-rivera/projects/7

## Who is the customer?
A first-time insurance shopper, a new renter or new homeowner in their 20s or 30s, who was told they "need insurance by the 1st" and wants a fast, no-commitment number on their phone. They have never bought insurance, are not loyal to a carrier, and will pick whichever site shows a believable number fastest.

## What pain does Evergreen Quote remove?
The Phase 1 page already showed a number after a button press. But this customer compares as they think (*"what if I picked home instead of auto? what if I raised the coverage?"*), and every press-and-wait cycle loses a few of them. Phase 2 makes the number move *as they type*, shows them what other customers are paying, and lets them save a quote to compare. No account, no email, no waiting.

## What does "good" look like at end of the week?
- `npm install && npm run dev` works first time from the committed lock file.
- The estimated premium updates live as the visitor types, for auto / home / life, under the sponsor's rate decision.
- Recent quotes load from the data feed with a visible loading state; a saved quote appears at the top of the list instantly.
- `npm run type-check` and `npm run build` pass; what CI builds is what ships.
- The work is on `main` via a reviewed PR with a green CI run, and I can demo it Friday without pre-apologizing.

## What are we explicitly NOT doing this week?
- No ZIP-code field / regional pricing (marketing's ask); deferred, see decision-memo.md.
- No real rate engine; the typed rate model is a placeholder, and pricing is engineering's job in a future round.
- No customer accounts, no persistence of saved quotes, no email capture.
- No toolchain upgrade mid-week; the versions stay pinned, see status-update.md.

## How will we know if it worked?
- 100% of cohort stakeholders see the estimate move as they type, on the first try, with no console errors.
- The recent-quotes panel never shows a blank space; it shows data, a loading message, or an error message, always.
- The delivery review demo runs end-to-end without me needing to say "imagine that…".
