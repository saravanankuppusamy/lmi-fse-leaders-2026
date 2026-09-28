# Solutions: Reference Completed Capstone (Phase 3)

This folder is what a **completed** delivery week looks like at the end of Thursday. Instructors use it as the reference; learners can peek if stuck, but the goal of the capstone is the learner produces their own version, not copies this.

> **Note:** This folder is **not part of the starter kit**. Learners assemble their own service from the provided pieces (`starter/`, `api-routes/`, `graphql/`, `data/`, `containerize/`, `workflows/`, `site/`, `deploy/`, `k8s/`) and write their own leadership artifacts from `templates/`.

## Run it

With the VM's local MongoDB running:

```bash
npm install
npm run seed         # loads the six known quotes into the 'evergreen' database
npm run dev          # API on http://localhost:3000; GraphQL explorer at /explorer
npm test             # seven tests, all green, against the throwaway 'evergreen-test' database
```

Containerized (stop the dev server first):

```bash
docker build -t evergreen-quote-api:1.0 .
docker run --rm --network host --env-file .env evergreen-quote-api:1.0
```

On the local cluster, in order (the database goes first so the API has something to connect to; this is the kit README's Day 4 sequence):

```bash
kind create cluster --name evergreen
docker pull mongo:7
kind load docker-image evergreen-quote-api:1.0 mongo:7 --name evergreen
kubectl apply --dry-run=client -f k8s/
kubectl apply -f k8s/mongo.yaml
kubectl wait --for=condition=available deploy/mongo --timeout=180s
kubectl apply -f k8s/
kubectl get pods
```

Then `kubectl port-forward svc/evergreen-quote-api 8080:80` in its own terminal, `curl localhost:8080/api/quotes` (the answer is `[]`: same image, different environment, different data), and `kind delete cluster --name evergreen` when done.

## What's here

| Path | What it is |
|---|---|
| `src/index.js` | The starter shell with all four `INSERT` markers filled in: quote routes registered and GraphQL mounted (end-of-Day-2 state). |
| `src/routes.js` | The provided routes module with the kit's one-line fix applied (the premium arguments in the right order). |
| `src/graphql.js` | The provided GraphQL piece, dropped in unchanged; explorer at `/explorer`. |
| `src/premium.js` | The provided rate table with the sponsor's Monday rate decision applied (auto 90 / home 135 / life 70, values only). |
| `src/Quote.js`, `src/db.js`, `src/seed.js` | Provided, unchanged. |
| `test/api.test.mjs` | The provided test suite, unchanged; all seven tests pass against this tree. |
| `.env` | `SERVICE_NAME` set to the name the sponsor announced Monday; `MONGODB_URI` at the local default. |
| `package-lock.json` | The committed lock file; CI installs from it with `npm ci`. |
| `Dockerfile`, `.dockerignore` | Provided, copied in on Day 3 unchanged. |
| `.github/workflows/ci.yml` | The provided CI workflow, enabled on Day 3 unchanged. |
| `site/`, `deploy/` | The marketing site and the S3 deploy artifacts (script, both policies, `infrastructure.md`), copied in on Day 3 unchanged. |
| `k8s/` | The cluster manifests (`deployment.yaml`, `service.yaml`, `mongo.yaml`), copied in on Day 4 unchanged. |
| `delivery-leadership-package/` | A filled-in example of all required leadership artifacts (vision brief, delivery goal, risk register, decision memo, status update, go/no-go, delivery review outline). |

The Tuesday route bug (the swapped premium arguments in the provided `api-routes/routes.js`) does not appear here: `src/routes.js` is the fixed version, the state after the kit's one-line fix and a green `npm test`.

The point of the capstone is **what's in `delivery-leadership-package/`**, not what's in `src/`; the source is the same provided pieces every learner gets.
