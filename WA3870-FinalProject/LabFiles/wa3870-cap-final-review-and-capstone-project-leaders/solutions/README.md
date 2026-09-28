# Solutions: Reference Completed Launch (Final Capstone)

This folder is what a **completed** delivery week looks like at the end of Thursday: the wired launch monorepo plus one example of a finished leadership package. Instructors use it as the reference; learners can peek if stuck, but the goal of the capstone is that the learner assembles their own launch, not copies this one.

> **Note:** This folder is **not part of the starter kit**. Learners assemble their own launch from the provided pieces (`starter/`, `api-client/`, `graphql/`, `docker/`, `k8s/`, `workflows/`) and write their own leadership artifacts from `templates/`.

## Run it

The API (MongoDB must be running; on the VM it is):

```bash
cd api
npm install
npm run seed
npm run dev
```

The client, in a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the printed URL (port 5173): the recent quotes come from the database, and a saved quote survives a reload. For the landing page, open `landing/index.html` with Live Server.

The containerized API (stop the dev server first; they share port 3000):

```bash
docker build -t evergreen-quote-api:2.0 ./api
docker run --rm --network host --env-file api/.env evergreen-quote-api:2.0
```

The cluster, in order from this folder (the database goes first so the API has something to connect to):

```bash
kind create cluster --name evergreen
docker pull mongo:7
kind load docker-image evergreen-quote-api:2.0 --name evergreen
kind load docker-image mongo:7 --name evergreen
kubectl apply --dry-run=client -f k8s/
kubectl apply -f k8s/mongo.yaml
kubectl wait --for=condition=available deploy/mongo --timeout=180s
kubectl apply -f k8s/
kubectl get pods
```

If the `mongo:7` load reports an error, continue anyway: the cluster can pull that public image directly. The `evergreen-quote-api` load is the one that must succeed, because your image exists only on this machine. Three `evergreen-quote-api` pods and one `mongo` pod reach `Running`; then `kubectl port-forward svc/evergreen-quote-api 3000:80` puts the cluster behind the same port 3000 the client's proxy already points at.

The production build: `npm run build` then `npm run preview` in `client/` serves the built files on port 4173 and still proxies `/api` to port 3000, so the production build runs against the real API.

## What's here

| Path | What it is |
|---|---|
| `landing/` | The marketing page with the launch banner set and both quote links pointing at the app (the Day 2 CONFIG edits). |
| `client/` | The wired React client: `src/api.ts` (the seam module), the API-backed context, the form that sends only type/age/coverageAmount, `BASE_RATES` aligned to 90/135/70, the launch title in `.env`. `sampleQuotes.ts` and `public/quotes.json` are gone: the stub feed was retired on Day 2. |
| `api/` | The Phase 3 quote service with GraphQL mounted at the two markers, plus the `Dockerfile` and `.dockerignore` copied in on Day 3. |
| `k8s/` | The cluster manifests: `deployment.yaml` (three replicas of `evergreen-quote-api:2.0`), `service.yaml`, `mongo.yaml`. |
| `.github/workflows/ci.yml` | The two-job pipeline (**Test the API**, **Type-check and build the client**), enabled on Day 3 unchanged. |
| `delivery-leadership-package/` | A filled-in example of all required leadership artifacts in the exemplar Delivery Lead's voice (Morgan Reyes): vision brief, delivery goal, risk register, decision memo, status update, go/no-go, program showcase outline. |

The Day 2 seam defect does **not** appear here: `client/src/api.ts` is the fixed version (`id: doc._id`). This folder is what a completed Tuesday looks like, not the moment before the type-check.

The point of the capstone is **what's in `delivery-leadership-package/`**, not what's in the source folders; the code is the same provided pieces every learner assembles.
