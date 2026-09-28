# Launch brief: Evergreen Insurance Quote, final delivery

> This is the launch brief. Three teams built the pieces over three phases;
> nobody has ever connected them. You are not being asked to build the
> product; it is built, three times over. You are being asked to lead its
> launch. Form opinions as you read: what is the user value? What is risky?
> What would you cut if Friday came early?

## The product

**Evergreen Insurance Quote** goes live on Friday as one product. Today it is
three: a marketing page that promises an instant quote, a React app that
computes one, and an API that stores quotes in a database. Each is finished.
None of them has ever spoken to another.

The launched product is the whole path: a visitor lands on the marketing
page, clicks through to the quote app, watches a live estimate as they type,
saves their quote, and the quote lands in the database, still there tomorrow.
The same service answers the partner pilot over GraphQL, runs in a container,
and is demonstrated on a Kubernetes cluster. On Friday afternoon that path is
shown, end to end, to an audience that includes your managers.

## Who it's for

The first-time insurance shopper, same as always: a fast, believable number
on their phone with no account and no phone call. Behind them, the partner
pilot team, who query quotes over GraphQL and pick their own fields. Behind
both, the operations team, who need the service containerized, tested in a
pipeline, and runnable on the company's cluster platform. And this week
specifically, the launch audience: managers who watched none of the build and
judge the product by what they see in five minutes on Friday.

## What you'll assemble

Every step is a provided piece with exact placement instructions in the kit
README. Writing code is never required to complete this capstone.

1. **The wiring**: the proxy and API client pieces that point the app's
   recent-quotes panel and its save action at the real service instead of the
   bundled file.
2. **The retirement**: the stub data leaves the repo. The database is the
   source of truth for every quote the app shows.
3. **The launch configuration**: the client's rate table, the app title, and
   the landing banner aligned to the values the sponsor announces on Monday.
4. **The GraphQL layer**: mounted at the API's markers for the partner pilot,
   with the in-browser explorer to prove it.
5. **The container**: the API packaged as `evergreen-quote-api:2.0`; the
   launch bumps last week's 1.0.
6. **The cluster demo**: three API replicas plus a database on the local
   `kind` cluster, with the running app saving quotes into it.
7. **The pipeline**: the two-job CI workflow, testing the API and
   type-checking and building the client, green on every push and on the
   merged `main`.

## What is explicitly out of scope

No authentication, no payments, no real rate engine. And no cloud spend on
the required path: the demo of record runs on your VM's local cluster, and
no required step needs an AWS account. One exception is gated, not optional:
if the week runs ahead of schedule, the sponsor may open a short Thursday
cloud-verification window, in which the launch image takes one pass over
Amazon EKS on your own sandbox account and everything comes down the same
afternoon. The product launches when the path works, not when a bill
arrives.

## What "good" looks like

- A quote saved in the browser survives a reload and shows the same premium
  the estimate promised.
- The diff that merges into `main` reads like the program's table of
  contents: HTML, CSS, TypeScript, JavaScript, a Dockerfile, cluster
  manifests, and a CI config in one reviewed pull request.
- Both CI jobs are green on the merged `main`.
- The showcase lands in five minutes: page to app to saved quote to cluster,
  told for people who watched none of the build.

## Known risks to watch

- The seam between two teams' contracts has never been crossed. The client
  and the API each describe a quote in their own terms, and no one has ever
  made them agree across a real network. Expect the compiler, not the demo,
  to find the gap; that is what it is for.
- Premium math lives in two places, and today they disagree. Watch which
  number the customer actually sees, and know where each one comes from,
  before anyone asks you on Friday.
- The cluster is a third environment, after your VM and the container.
  Configuration travels by environment variable; assumptions do not.
- The launch audience includes people who watched none of the build. A demo
  that assumes context loses them in the first minute; the story has to carry
  the product.

These are exactly the kinds of tradeoffs you will lead this week.
