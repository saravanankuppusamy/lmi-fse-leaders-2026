# Evergreen Quote API: Phase 3 Capstone Starter Kit

On the lab VM this folder is deployed to:

    ~/Labfiles/wa3873-cap-phase-3-capstone-project-leaders/

Every provided piece the lab mentions lives here, and every paste-in snippet
the assembly steps need is printed on this page. If a step says "use the
provided X," X is in this kit.

## What's in here

| Folder | What it is | When you use it |
| --- | --- | --- |
| `starter/` | The engineering team's runnable API baseline, plus `CAPSTONE-BRIEF.md` and the test suite | Day 1 |
| `data/` | `quotes-seed.js`, the mongosh script that loads the six known quotes | Day 1 |
| `api-routes/` | `routes.js`, the quote routes module (the POST handler was drafted with an AI assistant) | Day 2 |
| `graphql/` | `graphql.js`, the GraphQL schema, resolvers, and explorer page | Day 2 |
| `containerize/` | The `Dockerfile` and `.dockerignore` | Day 3 |
| `workflows/` | `ci.yml`, the GitHub Actions pipeline | Day 3 |
| `site/` | The Evergreen marketing site (HTML, CSS, JS, data file) | Day 3 |
| `deploy/` | The S3 deploy script, both policies, and `infrastructure.md` | Day 3 |
| `k8s/` | The cluster manifests (`deployment.yaml`, `service.yaml`, `mongo.yaml`) and `eks-notes.md` | Day 4 |
| `templates/` | Markdown templates for every written deliverable | All week |
| `delivery-leadership-package/` | The empty scaffold you copy into your repo on Day 1 | Day 1 |
| `solutions/` | Instructor reference: the assembled end state and an example leadership package. **Not part of the starter kit.** | Reference only |

## Where each provided piece goes

| Kit file | Destination in your repo | Day | Action |
| --- | --- | --- | --- |
| `starter/` (whole folder) | the repo root | 1 | Copy, then `git init` |
| `delivery-leadership-package/` | `delivery-leadership-package/` | 1 | Copy the empty scaffold |
| `data/quotes-seed.js` | nowhere (run in place with mongosh) | 1 | Run |
| `api-routes/routes.js` | `src/routes.js` | 2 | Copy, then paste the two wiring lines below |
| `graphql/graphql.js` | `src/graphql.js` | 2 | Copy, then paste the two GraphQL lines below |
| `containerize/Dockerfile` | `Dockerfile` (repo root) | 3 | Copy |
| `containerize/.dockerignore` | `.dockerignore` (repo root) | 3 | Copy |
| `workflows/ci.yml` | `.github/workflows/ci.yml` | 3 | Copy, commit, push |
| `site/` (whole folder) | `site/` | 3 | Copy |
| `deploy/` (whole folder) | `deploy/` | 3 | Copy |
| `k8s/` yaml files | `k8s/` | 4 | Copy |

## Day 1: seeding the database with mongosh

Load the six known quotes into the `evergreen` database:

```bash
mongosh evergreen ~/Labfiles/wa3873-cap-phase-3-capstone-project-leaders/data/quotes-seed.js
```

You should see: `Inserted 6 quotes into the 'quotes' collection.`

Then look at what you loaded, still in the database shell:

```bash
mongosh evergreen
```

```javascript
db.quotes.find()
db.quotes.countDocuments()
db.quotes.find({ type: "auto" })
db.quotes.find({ tags: "renewal" })
```

Type `exit` to leave the shell.

## Day 2: wiring the quote routes into `src/index.js`

Copy the piece first:

```bash
cp ~/Labfiles/wa3873-cap-phase-3-capstone-project-leaders/api-routes/routes.js src/routes.js
```

Then paste each line at its matching `INSERT` marker in `src/index.js`:

At `// INSERT: route import`:

```javascript
import { registerQuoteRoutes } from "./routes.js";
```

At `// INSERT: register the quote routes`:

```javascript
registerQuoteRoutes(app);
```

## Day 2: wiring GraphQL into `src/index.js`

Copy the piece:

```bash
cp ~/Labfiles/wa3873-cap-phase-3-capstone-project-leaders/graphql/graphql.js src/graphql.js
```

At `// INSERT: GraphQL import`:

```javascript
import { mountGraphQL } from "./graphql.js";
```

At `// INSERT: mount GraphQL`:

```javascript
mountGraphQL(app);
```

## Day 2: configuration values

| File | What to change | Value |
| --- | --- | --- |
| `.env` | `SERVICE_NAME` | The official name the sponsor announced Monday |
| `src/premium.js` | The three `BASE_RATES` numbers only | The sponsor's Monday rate decision |

Restart the dev server after editing `.env`; `node --watch` reloads code, not
environment files.

## Day 2: the one-line route fix

The test suite flags one route: the POST handler passes the premium inputs in
the wrong order. In `src/routes.js`, find:

```javascript
const monthlyPremium = calculatePremium(type, Number(coverageAmount), Number(age));
```

Replace it with:

```javascript
const monthlyPremium = calculatePremium(type, Number(age), Number(coverageAmount));
```

Run `npm test` again; all seven tests pass.

## Day 3: building and running the container

From the repo root, with the Dockerfile and `.dockerignore` copied in:

```bash
docker build -t evergreen-quote-api:1.0 .
```

Stop the dev server first if it is running, then:

```bash
docker run --rm --network host --env-file .env evergreen-quote-api:1.0
```

`--network host` lets the container reach the MongoDB running on your VM;
`--env-file .env` hands it the same configuration your dev server reads.
Stop it with `Ctrl+C`.

## Day 3: enabling CI

```bash
mkdir -p .github/workflows
cp ~/Labfiles/wa3873-cap-phase-3-capstone-project-leaders/workflows/ci.yml .github/workflows/ci.yml
git add .github && git commit -m "Enable CI" && git push
```

Then open the repository's **Actions** tab and watch the run.

## Day 3: previewing and reviewing the site deploy

Local preview (stop it afterward with `Ctrl+C`):

```bash
cd site
python3 -m http.server 8080
```

Review checks for the deploy artifacts (no AWS account needed):

```bash
bash -n deploy/deploy-to-s3.sh
```

No output means the script parses. Read `deploy/infrastructure.md`, then
`deploy/bucket-policy.json` (who may read the site) and
`deploy/iam-policy.json` (who may write it). The live S3 deploy is a separate,
time-gated path: your cohort has AWS accounts, and the instructor decides
whether the schedule has room for it. The lab marks it clearly; skipping it
costs you nothing.

## Day 4: deploying to the local cluster

Run these in order from the repo root. The database goes first so the API has
something to connect to.

```bash
kind create cluster --name evergreen
docker pull mongo:7
kind load docker-image evergreen-quote-api:1.0 --name evergreen
kind load docker-image mongo:7 --name evergreen
kubectl apply --dry-run=client -f k8s/
kubectl apply -f k8s/mongo.yaml
kubectl wait --for=condition=available deploy/mongo --timeout=180s
kubectl apply -f k8s/
kubectl get pods
```

If the `mongo:7` load fails with `ctr: content digest ... not found`,
continue anyway: that is a known quirk of loading a multi-platform public
image into kind, and the cluster pulls `mongo:7` straight from Docker Hub
when the pod starts. The `evergreen-quote-api` load is the one that must
succeed, because your image exists only on this machine.

You should see three `evergreen-quote-api` pods and one `mongo` pod reach
`Running`. Then, in its own terminal:

```bash
kubectl port-forward svc/evergreen-quote-api 8080:80
```

And in another:

```bash
curl localhost:8080/api/quotes
```

The answer is `[]`: same image, different environment, different data. When
the demo is done:

```bash
kind delete cluster --name evergreen
```

## About `npm test`

The test suite imports `src/routes.js`, which you copy in on Day 2. Running
`npm test` on Day 1 fails with `Cannot find module`; that is expected, not a
problem to fix.

## About `solutions/`

`solutions/` is the instructor's reference: the assembled end state of the
week and one example of a completed `delivery-leadership-package/`. It is not
part of your starter kit, and the Tuesday route bug does not appear in it.
