# The Evergreen journey

> Read this before you touch anything in this repo. It is the story of the
> product you are about to launch, told in three phases, and it doubles as
> Monday morning's final review: every course in the program left a mark on
> the files around you, and this document tells you where to look. Plan 30 to
> 40 minutes, with the repo open beside it. Then keep it nearby all week: each
> day's wrap-up returns to one phase's lens (Monday the page, Tuesday the
> contracts, Wednesday the platform, Thursday the whole diff).

Evergreen Insurance Quote has been one promise since the first week of the
program: a believable monthly premium in front of a first-time shopper before
they leave for a competitor. Three phases kept that promise in three different
ways, and each phase's work is alive in this repo right now, side by side and
deliberately unconnected.

## Phase 1: a page that makes a promise

At the end of Phase 1, Evergreen Insurance Quote was a static site: a
marketing page that described the coverage, and a quote page that computed an
estimate when the visitor pressed a button. It was styled from one theme,
laid out to work on a phone, versioned in Git, reviewed through pull requests
on GitHub, and checked by the program's first GitHub Actions workflow. What it
could not do was remember: refresh the page and everything was gone, because
there was nowhere for anything to go.

Seven courses built that era: introduction to programming (where the premium
formula was first written as a plain script), the command line with Git and
IDEs, web fundamentals with HTML, CSS, layout with Flexbox and Bootstrap,
GitHub, and GitHub Actions.

Find it in this repo:

- `landing/index.html`: the Phase 1 era kept alive as the front door of the
  launch. Pure HTML, no JavaScript, opened with Live Server, the way the
  program's first weeks did it. The two `CONFIG` markers wait for launch day.
- `landing/theme.css`: the design tokens. One variable change still restyles
  the whole page; that is what the CSS and layout weeks bought.
- `.gitignore` (repo root): three teams' projects, one set of Git habits.
  Everything you do this week flows through the branch, commit, and
  pull-request discipline Phase 1 drilled.
- The premium formula itself: `client/src/premium.ts` and `api/src/premium.js`
  both descend from that first plain script. More on this pair in Phase 3;
  it repays a close look before Tuesday.

## Phase 2: an application that answers as you type

At the end of Phase 2, the page had been rebuilt the way the engineering
organization builds real products: a React single-page app on a TypeScript and
Vite toolchain. The estimate updated live as the visitor typed. Recent quotes
loaded from a data feed with visible loading and error states, and **Save this
quote** put the visitor's own number at the top of the list. But look closely
at what "feed" meant: a JSON file bundled with the app and served by its own
dev server. And a saved quote lived in memory: reload the page, and it was
gone. The product could answer instantly; it still could not remember.

Six courses built that era: JavaScript fundamentals, TypeScript with npm and
Vite, the React introduction, React beyond the basics, composition and hooks,
and the Phase 2 capstone week that assembled the app now sitting in `client/`.

Find it in this repo:

- `client/src/premium.ts`: the formula began life as a plain script; Phase 2
  gave it types. The math never changed; the contract around it did.
- `client/src/types.ts`: the contract the compiler enforces. Every component,
  hook, and provider under `client/src` is written against it. Note
  `id: number`, and remember it on Tuesday.
- `client/src/context/QuotesContext.tsx`: already replaced once, during the
  Phase 2 capstone, without a single component noticing. The exported hook
  stayed identical, so nothing downstream changed. It gets replaced again this
  week, the same way, for a bigger reason.
- `client/public/quotes.json`: the bundled sample standing in for a real API.
  The app still reads it today. Its sibling `client/src/sampleQuotes.ts` is
  the same data as a typed module; retiring both is a Day 2 step.

## Phase 3: a service that remembers

At the end of Phase 3, the product finally had a memory: the Evergreen Quote
API, an Express service with REST routes for the website, a GraphQL layer for
the partner pilot, and MongoDB storage with validation at the schema. It
shipped with a `node:test` safety net, ran in a container as
`evergreen-quote-api:1.0`, and was demonstrated on a local Kubernetes cluster
with a pipeline testing it on every push. A quote it stored survived a
restart. What it never had was a user interface: every quote it ever stored
arrived from `curl` or a test. The service could remember; nobody could see it.

Nine courses built that era: AI code generation with Copilot, Node and
Express, APIs and GraphQL, NoSQL databases, Express-to-database integration,
cloud platform deployment, Docker, EKS, and the Phase 3 capstone week that
assembled the API now sitting in `api/`.

Find it in this repo:

- `api/src/Quote.js`: where the contract moved server-side. The Mongoose
  schema rejects a bad quote before it reaches the database. Compare it with
  `client/src/types.ts`: they describe the same thing from opposite sides of
  a network that does not exist yet.
- `api/src/premium.js` beside `client/src/premium.ts`: the same Phase 1
  formula in two languages. Read both rate tables now, before Tuesday. The
  client still carries the Phase 2 sponsor rates (auto 85, home 130, life 65);
  the API carries the rates standardized last week (auto 90, home 135,
  life 70). They disagree, and this week that disagreement becomes visible on
  screen.
- `api/test/`: the safety net. Seven tests, green from Day 1, and they run
  again in CI on every push.
- `api/src/seed.js`: the six known quotes, with historical premiums quoted
  under an older rate table. That is normal for saved quotes; the API computes
  fresh premiums for new ones.
- `api/.env`: configuration travels by environment variable. The same names
  carry different values on your VM, in a container, and on a cluster, and
  that fact shapes most of Wednesday.

## The one thing the program never did

The page and the service have never spoken. Across three phases, the client
has never made a network request to the API, and the API has never answered a
browser. Today the client still reads a bundled file and forgets every save on
reload, while the API remembers everything and has nobody to remember it for.

Wiring the two halves together is this week, and it is the last move of the
program. When a quote you save in the browser is still there after a reload,
served from the database, through the API, into the React app, behind the
marketing page, the story you have been reading is complete. Your job as
Delivery Lead is to get it there by Friday, and then tell it in five minutes.
