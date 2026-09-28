# Delivery Goal: Evergreen Quote

## Goal

> By Thursday EOD, the wired Evergreen Quote launch (the React client reading and saving quotes through the Express + MongoDB API at the standardized rates, containerized as `evergreen-quote-api:2.0`, demonstrated on the local `evergreen` cluster) is on `main` via a reviewed PR with both CI jobs green, and I can demo it to the managers on Friday without pre-apologizing.

## "Done" looks like

- The quote page loads its recent quotes from the API, and a saved quote survives a reload.
- The estimate on screen and the saved premium agree at the launch rates: auto/35/50000 reads $450.00 in both places.
- `npm test` (API, seven tests) and `npm run type-check` + `npm run build` (client) pass; both CI jobs on the merge commit are **green**.
- The containerized API serves the wired app, and the cluster demo shows three API pods behind one Service, port-forwarded to the same port 3000 the client's proxy already points at.
- The landing page carries the launch banner and both quote links point at the app.
- A reviewed PR is merged (squash), branch deleted, merge commit tagged `launch`.
- `delivery-leadership-package/` is complete and committed.

## Out of scope (this week)

- Renters coverage: deferred last week, stays deferred; see decision-memo.md.
- The quote form's default coverage type: routed to the engineering team's next window; content changes (the landing hero) are in, application code is not.
- Anything that depends on the shared demo cluster or a cloud account; the demo plan is local by design.
