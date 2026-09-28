# Go / No-Go: Launch Decision

**Date / time:** Wed 16:30
**Decision:** ☒ GO

## CI evidence

- Latest run on `delivery/lead` (both jobs): **green** · link: `https://github.com/morgan-reyes/evergreen-quote-launch/actions/runs/17482290513`
- Workflow file: `.github/workflows/ci.yml`
- What the workflow actually checked: **Test the API** ran the seven API tests against a real `mongo:7` service container after `npm ci` from the lock file; **Type-check and build the client** ran `npm ci`, `npm run type-check`, and `npm run build`. It did **not** check the cluster demo, the landing links, or that the premiums are believable; those are human checks, and I did them today (three API pods and one mongo Running, a quote saved through the port-forward landed in the cluster's database).

## What "GO" would mean

- Merge `delivery/lead` → `main` Thursday morning, squash, delete branch.
- Tag the merge commit `launch`.
- Friday's showcase demo runs on the verified local stack: the `evergreen` kind cluster, port-forwarded to 3000, exactly as confirmed in writing Tuesday.

## What "NO-GO" would mean

- Hold the merge until: n/a (the flip conditions are in my call below).
- Owner of that condition: n/a.
- Re-evaluate at: n/a.

## My call

**Go, on my own stack's evidence.** Both CI jobs are green on the commit I demoed from, and today's incident is not in my stack: the manager's dry run hit the **shared demo cluster**, where the platform team renamed an environment variable (`MONGO_URI` where the app reads `MONGODB_URI`) about 30 minutes before that cluster's API pods started crash-looping. I routed the pod log and the rename to the platform owner with one specific question (who owns reverting it), and sent the manager a calm holding note; nothing in this launch touches that environment. What would flip this to no-go: either CI job red on `main` after Thursday's squash-merge, or the cluster demo failing its Thursday 16:00 re-verification. If the shared environment is still down on Friday, nothing changes: the demo plan already does not depend on it.
