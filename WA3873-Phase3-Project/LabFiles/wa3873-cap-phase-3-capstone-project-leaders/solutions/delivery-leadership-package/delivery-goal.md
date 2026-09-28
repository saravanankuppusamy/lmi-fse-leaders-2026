# Delivery Goal: Evergreen Quote

## Goal

> By Thursday EOD, the assembled Evergreen Quote API (REST and GraphQL over Monday's seeded MongoDB, tested, containerized, demonstrated on the local cluster) is on `main` via a reviewed PR with a green CI run, and I can demo it without pre-apologizing.

## "Done" looks like

- The API answers every documented route: list, fetch by id, create with a computed premium (auto, 35, 50000 returns 201 with `"monthlyPremium":450` at the sponsor's rates).
- The same data answers through GraphQL, with the explorer at `/explorer`; a mutation's quote shows up through `GET /api/quotes`. Same data, two doors.
- `npm test` passes (seven tests); the safety net holds. It already earned its keep on Tuesday.
- The containerized API serves the same answers as the dev server, and the CI run on the merge commit is **green**.
- The cluster demo shows three API pods behind one Service, from empty database to first quote.
- A reviewed PR is merged, branch deleted, merge commit tagged `phase-3`.
- `delivery-leadership-package/` is complete and committed.

## Out of scope (this week)

- Renters coverage: deferred to the next delivery window, proposed as its first item, see decision-memo.md.
- Base-image upgrade: the patched `node:22-alpine` tag lands next week; risk-register.md (R4) holds the trigger.
- Live S3 and EKS deploys: run only if the instructor decides there is time; the required path is artifact review and local preview.
- Anything that puts the API on the public internet this week.
