# Program Showcase: Evergreen Quote

## Slide 1: Delivery goal & did we hit it?

- **Goal:** "The wired Evergreen Quote launch (client reading and saving through the API at the standardized rates, containerized, demonstrated on the local cluster) on `main` via a reviewed PR with both CI jobs green."
- **Hit?** ☒ Yes. Merged Thursday, both jobs green on `main`, tagged `launch`; one ask routed (the form default), one deferral held (renters).

## Slide 2: What shipped

- Demo, live from the cluster: the recent quotes come from the database; I save a quote, reload, and it is still there; the estimate and the saved premium both read $450.00.
- Merged PR #14. The diff is the program: HTML, TypeScript, JavaScript, a Dockerfile, YAML, a pipeline. I self-reviewed it as the program's table of contents before asking anyone else to look.
- The green two-job run on the merge commit (**Test the API** · **Type-check and build the client**); link in slide notes.

## Slide 3: Two key decisions

- **Lead with life in content, not in code.** Marketing's hero rewrite: approved, done in 10 minutes. The form default: declined and routed; application code belongs to the engineering team two days before launch. Why it mattered: the launch shipped calm, and marketing still got their headline. (See decision-memo.md.)
- **The GO came from my stack's evidence, not the incident's noise.** Wednesday's outage was the shared demo cluster; this launch never touched it. Naming *which environment is broken* is what let me say GO without bravado. Why it mattered: the managers in this room saw "Could not load recent quotes" on Wednesday, and the launch was never at risk.

## Slide 4: Risks & injects

- **Top risk tracked:** premium math lives in two places. Tuesday it was on screen: estimate $425.00, saved row $450.00/mo for the same inputs. The sponsor's alignment instruction resolved it as one CONFIG edit; the server is the source of truth.
- **Inject #1 (Tue):** marketing's life-coverage ask, a renters callback, and the platform team pulling the shared cloud window. Sorted content from code, routed the code, kept renters deferred, and confirmed the local demo plan in writing.
- **Inject #2 (Wed):** a manager's dry run failed on the shared demo cluster. I read the pod log and named it in plain English: the API pods restart because they cannot find the database; the database is healthy; the change was a renamed environment variable, `MONGO_URI` where the app reads `MONGODB_URI`. Routed to the platform owner with one question, calm holding note to the manager, GO held (see go-no-go.md).

## Slide 5: What three phases built

- One journey: a static page that estimated (Phase 1), then a live, typed React app (Phase 2), then a service with a database (Phase 3), and this week the two halves wired together, in a container, on a cluster, merged with green CI. The first quote that ever survived a reload happened on Tuesday of the final week; everything before it was building toward that moment.
- **What I take back to work on Monday:** route problems to their owner with evidence and one specific question, and name the broken environment before naming a fix.
- **One thing I'd do differently next round:** confirm the demo environment in writing on Monday morning, not when an inject forces the issue on Tuesday.

## Q&A prep: likely questions

- *"It worked on your machine; why should I believe it works anywhere else?"* Because my machine is doing the least of the work: the same image ran as three replicas behind one Service on a cluster, and CI rebuilt and tested everything from the lock files on a machine I have never seen.
- *"Why didn't you fix the crashing pods yourself on Wednesday?"* They were the platform team's pods, broken by the platform team's change. My job was the evidence, one specific question, and protecting the launch; their fix was a one-line revert.

(Rehearsed Thursday afternoon: 4 minutes 40 seconds, inside the 5-minute slot.)
