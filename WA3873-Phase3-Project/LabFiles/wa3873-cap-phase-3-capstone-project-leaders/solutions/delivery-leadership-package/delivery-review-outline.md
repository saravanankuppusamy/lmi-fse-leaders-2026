# Delivery Review: Evergreen Quote

## Slide 1: Delivery goal & did we hit it?

- **Goal:** "The assembled Evergreen Quote API (REST and GraphQL over the seeded MongoDB, tested, containerized, demonstrated on the local cluster) on `main` via a reviewed PR with a green CI run."
- **Hit?** ☒ Yes: full scope, one deliberate deferral (renters coverage, first item of the next delivery window).

## Slide 2: What shipped

- Curl transcript inline: `GET /` answers `{"message":"Evergreen Quote API","status":"ok"}`; `GET /api/quotes/q1` returns the known quote; `POST /api/quote` returns 201 with `"monthlyPremium":450` at the sponsor's rates.
- Merged PR: #11 · CI run on the merge commit: green (install from the lock file + tests against a throwaway database); links in slide notes.
- Thursday's cluster: three API pods behind one Service, `curl localhost:8080/api/quotes` answering `[]`, then the first POST through the Service. Same image in three environments (dev server, container, cluster); only the configuration changed.

## Slide 3: Two key decisions

- **Deferred renters coverage.** The "one more dropdown option" moves the schema enum, the rates, the seed, the tests, the GraphQL schema, and the site dropdown as one change; I rejected the hack of pricing it outside the schema and gave the partner a date instead (first item, next window). The enum didn't make renters expensive; it made the cost *visible before* we committed. Memo on file.
- **Shipped on the current base image, patch scheduled.** The CVE is moderate, the API is not internet-exposed this week, and the patched `node:22-alpine` tag lands next week; the riskier move was an unscheduled base swap mid-delivery. The hold trigger ("if exposure changes before Friday, hold") stood all week and never fired.

## Slide 4: Risks & injects

- **Top risk tracked:** the API returns tidy 201s while a number inside is wrong (R1). It fired Tuesday: a $0.35 monthly premium on $50,000 of coverage, inside a perfect-looking 201. The demo lied; the tests did the math.
- **Inject #1 (Tue):** the renters ask plus the base-image CVE. Re-prioritized, decision memo and register row on file, sponsor confirmed both calls Wednesday morning.
- **Inject #2 (Wed):** customers rejected by an age validation while `main` went red on a "validation hotfix". I read the CI log, named the failure in plain English (a minimum of 110 where a maximum was meant), and routed it with two questions: which environment actually serves customers, and who owns reverting the hotfix; I offered to hold my own merge. Go call made *from* my branch's green CI, with the hold condition on `main` (green by Thursday 09:10, so it never fired).

## Slide 5: What I'd do differently next round

- Run `npm test` before the celebratory curl tour, not after it; the swapped-argument bug sat behind tidy 201s for most of an hour while I admired the routes.
- Put the "seeded quotes are historical, quoted under an older rate table" line in the demo script on Monday; I improvised it when the question first came up at a check-in.

## Q&A prep: likely questions

- *"The demo returned tidy 201s all week; why does one red test matter?"* Because the only broken thing was the number inside the 201: $0.35 a month for $50,000 of coverage. Nothing on the screen looked wrong. The tests are the only teammate that did the math.
- *"Why didn't you ship renters? It's one dropdown option."* The dropdown is the last of six pieces that must agree on what a renters quote is, and the database schema is the contract that makes them agree. The partner got a date and a real estimate instead of quotes our own system of record can't validate.
- *"Same image in three environments; what changed?"* Configuration, never code: `.env` for the dev server, `--env-file` for the container, the Deployment's `env` block for the cluster. That's why the cluster answered `[]` with the same image that returned six quotes locally.
