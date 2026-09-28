# Evergreen Quote: Vision Brief

## Product
**Name:** Evergreen Insurance - Instant Quote (the launch: full-stack delivery)
**Delivery week:** Final
**Delivery Lead:** Morgan Reyes (solo)
**Engineering team (represented by):** https://github.com/morgan-reyes/evergreen-quote-launch
**GitHub Project board:** https://github.com/users/morgan-reyes/projects/9

## Who is the customer?
The same shopper the program has served since Phase 1: a first-time insurance buyer in their 20s or 30s who was told they "need insurance by the 1st" and wants a believable number on their phone, fast, with no account and no phone call. What is new this week is that they come back. They got a number on Tuesday; on Thursday they want to see it again, next to a second option. Today their alternative is a folder of screenshots and a carrier site that starts them from zero on every visit.

## What pain does Evergreen Quote remove?
The program built the two halves of the answer separately. Phase 2 built a page that estimates as you type but forgets you on reload; Phase 3 built a service that remembers quotes but has no face. The customer's real moment ("is the quote I saved still there?") has never once worked. Wiring the halves together is the launch: an estimate that moves as they type, and a saved quote that is still there when they come back.

## What does "good" look like at end of the week?
- The recent-quotes panel shows the database's quotes, not a bundled sample; save a quote, reload the page, and it is still there.
- The estimate on screen and the saved premium agree to the cent at the launch rates: auto/35/50000 reads $450.00 in both places.
- Both CI jobs (**Test the API**, **Type-check and build the client**) are green on the merge commit on `main`.
- The same image that ran on my VM (`evergreen-quote-api:2.0`) runs as three replicas behind one Service on the `evergreen` cluster, and a quote saved in the browser lands in the cluster's database.
- The landing page carries the sponsor's launch banner, and both quote links point at the running app.

## What are we explicitly NOT doing this week?
- No renters coverage. Deferred last week, stays deferred; see decision-memo.md for the two validation systems it touches.
- No change to the quote form's default coverage type. Application code belongs to the engineering team two days before launch; routed with a recommendation, see decision-memo.md.
- No shared cloud environment. The platform team confirmed there is no shared window this week; the Friday demo runs on the VM (kind cluster plus port-forward), confirmed in writing Tuesday.
- No accounts, no email capture, and no rate changes beyond the sponsor's alignment instruction: the server is the source of truth.

## How will we know if it worked?
- 100% of demo attempts: a saved quote survives a reload, and the estimate equals the saved premium to the cent.
- The Friday showcase runs end to end on the local stack, inside the 5-minute slot, without me saying "imagine that", with managers in the room.
