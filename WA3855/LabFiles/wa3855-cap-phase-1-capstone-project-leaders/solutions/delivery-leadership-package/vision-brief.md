# Evergreen Quote — Vision Brief

## Product
**Name:** Evergreen Insurance Quote
**Delivery week:** 1
**Delivery Lead:** Jordan Park
**Engineering team (represented by):** https://github.com/jordan-park/evergreen-quote-delivery
**GitHub Project board:** https://github.com/users/jordan-park/projects/4

## Who is the customer?
A first-time renter in their 20s or 30s who just signed a lease in Greater Boston and was told by their landlord they need renters insurance "by the 1st." They've never bought insurance before, are not loyal to a carrier, and will pick whichever option lets them get a number in under two minutes on their phone.

## What pain does Evergreen Quote remove?
Today this customer Googles "renters insurance quote" and lands on five sites that each ask for 12 fields and an email before showing a number. They bounce. Evergreen shows a real number in under a minute, on three fields, on a phone — that's the wedge.

## What does "good" look like at end of the week?
- A reachable URL where the page loads, themed, on phone and desktop.
- Submitting the form returns a believable monthly number for auto / home / renters.
- The page is recognizably "Evergreen" — green brand, Coverage-that-grows-with-you hero.
- The work is on `main` via a reviewed PR with a green CI run.
- I can point a stakeholder at the URL Friday and not pre-apologize.

## What are we explicitly NOT doing this week?
- No real rate engine — the calculator is a placeholder; pricing is engineering's job in a future round.
- No customer accounts, no saved quotes, no email capture.
- No Compare Plans page (marketing's ask) — deferred, see decision-memo.md.
- No A/B test wiring.

## How will we know if it worked?
- 100% of cohort stakeholders can submit the form on a phone-width browser without horizontal scroll.
- The delivery review demo runs end-to-end without me needing to say "imagine that…".
