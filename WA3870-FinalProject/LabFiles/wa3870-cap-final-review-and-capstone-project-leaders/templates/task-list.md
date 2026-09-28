# Task List (Reference Shape)

> The real task list lives on your GitHub Project board. This file is the **shape**: what each issue should look like before it leaves your hands. Link to the board from `vision-brief.md`.

## Issue template

```
Title: [AREA] short verb-first description

Who it's for: <user>. What they get: <thing>. Why it matters: <outcome>.

Done criteria
- [ ] Observable thing 1
- [ ] Observable thing 2
- [ ] Observable thing 3

Out of scope
- Anything that is *related* but explicitly not in this issue.

Linked decisions / risks
- (links to decision memos or risk-register rows if applicable)
```

## Suggested starter tasks (you may add, split, or drop)

| # | Title | Area | Priority |
|---|---|---|---|
| 1 | Run all three parts; log the client/API data gap | WIRE | P0 |
| 2 | Wire the client to the API (proxy, types, api module, context, form) | WIRE | P0 |
| 3 | Fix the seam defect the type-check catches (kit one-line fix) | TYPES | P0 |
| 4 | Retire the static data feed and bundled sample | DATA | P0 |
| 5 | Align the client rates to the API; set the launch title and banner | CONFIG | P0 |
| 6 | Mount GraphQL; run one query in the explorer; peek in mongosh | GRAPHQL | P1 |
| 7 | Build evergreen-quote-api:2.0; run the stack with the container | DOCKER | P0 |
| 8 | Demonstrate the full stack on the local cluster | K8S | P0 |
| 9 | Enable the two-job CI workflow | CI | P0 |
| 10 | Production build; preview the built client against the API | BUILD | P0 |
| 11 | Open PR from delivery/lead → main; self-review the program's diff | REVIEW | P0 |
| 12 | Build and rehearse the program showcase | SHOWCASE | P0 |
| 13 | Document one Copilot-assisted step + critique | AI | P2 (stretch) |
