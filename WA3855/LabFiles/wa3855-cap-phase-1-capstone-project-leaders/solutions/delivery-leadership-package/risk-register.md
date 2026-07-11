# Risk Register

| # | Risk | Owner | Likelihood | Impact | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | theme.css overrides break Bootstrap utility classes on small screens | Jordan | M | M | Test at 375 / 768 / 1280 after every paste; keep theme.css scoped to brand colors only | Layout still broken at 16:00 Tue → ask instructor (project sponsor) for a scope cut |
| R2 | Testimonials section can't ship without Legal sign-off on quotes | Priya (Sponsor) | H | L | Swap to placeholder testimonials labeled "Sample" until Legal returns | Legal hasn't responded by Wed 12:00 → ship with placeholders, name it in the demo |
| R3 | Provided ratePerThousand values produce non-believable numbers ($5,400 for renters) | Jordan + engineering | M | H | Sanity-check three sample inputs after wiring; document the rate decision | Any quote > $500/mo on default slider → flag to sponsor before merge |
| R4 | CI on `main` goes red after merge and blocks Friday demo | Jordan | L | H | Don't merge unless CI green on the branch; keep a "rollback" line ready | Red main > 30 min → revert, not roll forward |
| R5 | Solo learner gets stuck on git/PR mechanics and burns a half-day | Jordan | M | M | Pair with K. Singh for the Day 4 PR specifically; pre-stage gh CLI auth Monday | Stuck > 60 min on PR open → ask instructor, don't grind |

## How I'll use this register

I'll re-read it at the start of every daily check-in. If a risk fires, I'll move it to the top of the status update that day. The register lives in the repo so peers reviewing my work Friday can see what I was watching for — not just what went wrong.
