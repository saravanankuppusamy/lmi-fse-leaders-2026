# Decision Memo: Lead with Life in Content, Not in Code

**Date:** Tue afternoon (after Inject #1)
**Author:** Morgan Reyes
**Decision area:** Launch-week scope tradeoff

## Context

Marketing asked Tuesday at 14:00 for the Friday launch to lead with life coverage: rewrite the landing hero and make life the quote form's default coverage type. The same note carried a one-line renters callback ("you may remember deferring this one last week; still on the wish list") and the platform team's confirmation that there is no shared cloud window this week, with a request to confirm the demo plan in writing. Three asks, two days before launch.

## Options considered

1. **Take all three changes into the launch.** Pros: marketing gets everything at once. Cons: the form default is application code owned by the engineering team, and renters is not one field. It touches the client's `CoverageType` union, the premium tables in two languages, the form, and the API's Mongoose enum: two validation systems that must change together. Last week's capstone deferred it for exactly this shape.
2. **Change the client only.** Set the form default myself and add renters to the client's union without touching the API. Pros: fast, and Friday's demo would look responsive to marketing. Cons: this is the hack I rejected. A client that offers renters while the API's schema refuses it turns the customer's commit moment into a 400 error, and the type system that caught Tuesday's seam defect becomes the thing I am quietly working around.
3. **Content changes now, code changes routed.** Approve the hero rewrite: the landing page is pure HTML content with no behavior, and the edit took 10 minutes. Decline the form default for this launch and route it to the engineering team with a written recommendation that it leads their next window; it is small, but it is their file, two days before launch. Keep renters deferred with a named slot: first candidate for the round after launch, already sized at five files, two languages, two validation systems.

## Recommendation

**Option 3.** The hero shipped Tuesday afternoon; the routing note and the written demo-plan confirmation (kind cluster plus port-forward to 3000 on my VM; nothing depends on a shared cloud window) went out the same hour.

## Why

Two days before a launch, the only safe change is one whose whole blast radius I can see. Content has none. The other two asks each cross a boundary (a team's application code, a schema shared by two systems), and a launch demo is the worst place to discover the far side of a boundary.

## What would change my mind

If the engineering team confirmed by Wednesday 12:00 that they would land the form default themselves with both CI jobs green, I would take it into the launch. Renters stays deferred regardless; its slot is named, and "still on the wish list" is not a delivery date.
