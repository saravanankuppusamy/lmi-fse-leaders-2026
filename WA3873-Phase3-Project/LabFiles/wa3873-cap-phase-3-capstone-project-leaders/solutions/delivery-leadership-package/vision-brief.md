# Evergreen Quote: Vision Brief

## Product
**Name:** Evergreen Quote API (Phase 3 service delivery)
**Delivery week:** 3
**Delivery Lead:** Sam Okafor (solo)
**Engineering team (represented by):** https://github.com/sam-okafor/evergreen-quote-api-delivery
**GitHub Project board:** https://github.com/users/sam-okafor/projects/5

## Who is the customer?
Two customers now. First, the same first-time insurance shopper from Phases 1 and 2, a new renter or new homeowner in their 20s or 30s who "needs insurance by the 1st", at a new moment: the day after. They got a number yesterday, closed the tab, and today the number is gone; their only alternative is to re-enter everything and hope it matches. Second, everything that is not our web page: the partner aggregator that came knocking this week, the marketing site, a future support tool. Today none of them can get a quote at all, because until now a quote only ever existed inside one browser tab.

## What pain does Evergreen Quote remove?
Phases 1 and 2 shipped a page that computes a number and forgets it. Phase 3 turns the quote from a moment into a record: it survives the tab closing, it has an id anyone can fetch (`GET /api/quotes/q1`), the premium is computed once by one shared rate table instead of being re-implemented per screen, and there are two documented doors to the same data: REST for the site, GraphQL for consumers that want exactly the fields they ask for. A quote that persists is what makes partners, support, and "come back tomorrow" possible.

## What does "good" look like at end of the week?
- On a fresh clone, `npm install`, `npm run seed`, and `npm run dev` bring the API up; `GET /api/quotes` returns the six known quotes, and `POST /api/quote` returns 201 with the premium computed at the sponsor's rates (auto, 35, 50000 quotes 450).
- The same data answers through GraphQL, with the explorer at `/explorer`.
- `npm test` is green (seven tests), and the CI run on the merge commit is green.
- The containerized API serves the same answers as the dev server, and the local cluster runs three API pods behind one Service.
- The work is on `main` via a reviewed PR, and I can demo it Friday without pre-apologizing.

## What are we explicitly NOT doing this week?
- No renters coverage; deferred to the next delivery window, see decision-memo.md.
- No auth, API keys, or rate limiting; the API is not internet-exposed this week.
- No real rate engine; `BASE_RATES` is a placeholder, and pricing stays engineering's job in a future round.
- No base-image upgrade mid-week; the patched `node:22-alpine` tag lands next week, see risk-register.md (R4).
- No required cloud spend; the S3 deploy is an artifact review plus local preview, and EKS stays a read-only note.

## How will we know if it worked?
- Every documented route answers with its documented status on the first demo try: 200 for list and fetch, 201 for create, 400 for both validation cases, 404 for an unknown id. Zero surprises.
- The Thursday cluster demo goes from empty database to first POST to that quote fetched back through the Service, live, with no edits in between.
- The delivery review runs end-to-end without me needing to say "imagine that...".
