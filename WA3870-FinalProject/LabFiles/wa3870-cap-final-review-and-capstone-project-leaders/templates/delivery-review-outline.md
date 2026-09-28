# Program Showcase: Evergreen Quote

> Copy to `delivery-leadership-package/delivery-review-outline.md`. Five slides OR one page. Target: 5 minutes spoken, then 3 minutes of questions. Your audience on Friday afternoon includes your managers; assume they have not seen the program from the inside.

## Slide 1: Delivery goal & did we hit it?

- Goal (one sentence): _from delivery-goal.md_
- Hit? ☐ Yes  ☐ Partially  ☐ No
- One-line "why" either way.

## Slide 2: What shipped

- A screenshot of the wired app: the quote page showing quotes that came from the database.
- Link to the merged PR (the diff is the whole program in one page: HTML, TypeScript, JavaScript, a Dockerfile, YAML).
- Link to the green two-job CI run (API tests + client type-check and build).

## Slide 3: Two key decisions

- **Decision 1:** _one line._  Why it mattered: _one line._
- **Decision 2:** _one line._  Why it mattered: _one line._
- (Both should be in `decision-memo.md`.)

## Slide 4: Risks & injects

- Top risk we tracked: _from risk-register.md._
- Inject #1 (Tue): _what landed, how we re-prioritized._
- Inject #2 (Wed): _what landed, what we did, the go/no-go call._

## Slide 5: What three phases built

- The journey in one slide: static page, then a live typed React app, then a service with a database, then a wired, containerized, orchestrated product.
- One sentence: what I take back to work on Monday.
- One thing I'd do differently next round.

## Q&A prep: likely questions

- _e.g., "Why didn't you ship X?"_
- _e.g., "The demo returned quotes all week; why does one red test matter?"_
