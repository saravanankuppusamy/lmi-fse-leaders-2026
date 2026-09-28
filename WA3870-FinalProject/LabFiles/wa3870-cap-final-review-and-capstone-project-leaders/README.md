# Evergreen Quote Launch: Final Capstone Starter Kit

On the lab VM this folder is deployed to:

    ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/

Every provided piece the lab mentions lives here, and every paste-in snippet
and command sequence the assembly steps need is printed on this page. If a
step says "use the provided X," X is in this kit.

## What's in here

| Folder | What it is | When you use it |
| --- | --- | --- |
| `starter/` | The launch monorepo: `landing/` (the marketing page), `client/` (the Phase 2 React app), `api/` (the Phase 3 quote service), plus the briefs and `EVERGREEN-JOURNEY.md` | Day 1 |
| `api-client/` | The five wiring pieces that connect the client to the API | Day 2 |
| `graphql/` | `graphql.js`, the GraphQL layer for the API | Day 2 |
| `docker/` | The `Dockerfile` and `.dockerignore` for the API image | Day 3 |
| `k8s/` | The cluster manifests (`deployment.yaml`, `service.yaml`, `mongo.yaml`) | Day 3 |
| `workflows/` | `ci.yml`, the two-job GitHub Actions pipeline | Day 3 |
| `templates/` | Markdown templates for every written deliverable | All week |
| `delivery-leadership-package/` | The empty scaffold you copy into your repo on Day 1 | Day 1 |
| `solutions/` | Instructor reference: the wired end state and an example leadership package. **Not part of the starter kit.** | Reference only |

## Where each provided piece goes

| Kit file | Destination in your repo | Day | Action |
| --- | --- | --- | --- |
| `starter/` (whole folder) | the repo root | 1 | Copy, then `git init` |
| `delivery-leadership-package/` | `delivery-leadership-package/` | 1 | Copy the empty scaffold |
| `api-client/vite.config.ts` | `client/vite.config.ts` | 2 | Copy (replaces) |
| `api-client/types.ts` | `client/src/types.ts` | 2 | Copy (replaces) |
| `api-client/api.ts` | `client/src/api.ts` | 2 | Copy (new file) |
| `api-client/QuotesContext.tsx` | `client/src/context/QuotesContext.tsx` | 2 | Copy (replaces) |
| `api-client/QuoteForm.tsx` | `client/src/components/QuoteForm.tsx` | 2 | Copy (replaces) |
| `graphql/graphql.js` | `api/src/graphql.js` | 2 | Copy, then paste the two lines below |
| `docker/Dockerfile` | `api/Dockerfile` | 3 | Copy |
| `docker/.dockerignore` | `api/.dockerignore` | 3 | Copy |
| `k8s/` yaml files | `k8s/` | 3 | Copy |
| `workflows/ci.yml` | `.github/workflows/ci.yml` | 3 | Copy, commit, push |

## Day 1: running all three parts

From the repo root, in three terminals (or one at a time):

The landing page: open `landing/index.html` with Live Server (right-click the
file in VS Code, **Open with Live Server**).

The API:

```bash
cd api
npm install
npm run seed
npm run dev
```

Then `curl http://localhost:3000/api/quotes` shows the six seeded quotes.

The client:

```bash
cd client
npm install
npm run dev
```

Open the printed URL (port 5173). Compare the recent-quotes panel with the
curl output: the app shows its own bundled sample; the API serves the
database. They do not match. That gap is the week.

## Day 2: wiring the client to the API

Run these from the repo root, in order:

```bash
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/api-client/vite.config.ts client/vite.config.ts
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/api-client/types.ts client/src/types.ts
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/api-client/api.ts client/src/api.ts
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/api-client/QuotesContext.tsx client/src/context/QuotesContext.tsx
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/api-client/QuoteForm.tsx client/src/components/QuoteForm.tsx
```

Then retire the stub data the old version read; the API is the source of
truth now:

```bash
git rm client/src/sampleQuotes.ts client/public/quotes.json
```

Restart the client dev server (the proxy in the new `vite.config.ts` loads at
startup), then check the contracts:

```bash
cd client
npm run type-check
```

Exactly one error. That is the seam fix below.

## Day 2: the one-line seam fix

The type-check names the file and line: the API sends documents whose id
field is `_id`, and the mapper in `client/src/api.ts` reads a field that does
not exist. Find:

```typescript
    id: doc.id,
```

Replace it with:

```typescript
    id: doc._id,
```

Run `npm run type-check` again: clean.

## Day 2: wiring GraphQL into the API

Copy the piece:

```bash
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/graphql/graphql.js api/src/graphql.js
```

In `api/src/index.js`, at `// INSERT: GraphQL import`:

```javascript
import { mountGraphQL } from "./graphql.js";
```

At `// INSERT: mount GraphQL`:

```javascript
mountGraphQL(app);
```

Restart the API; the explorer is at `http://localhost:3000/explorer`.

## Day 2: configuration values

| File | What to change | Value |
| --- | --- | --- |
| `client/src/premium.ts` | The three `BASE_RATES` numbers only | The API's standardized rates (the sponsor's launch instruction) |
| `client/.env` | `VITE_APP_TITLE` | The launch title the sponsor announced |
| `landing/index.html` | The two `CONFIG` markers | The launch banner text, and `http://localhost:5173` for both quote links |

Restart the client dev server after editing `.env`.

## Day 3: building and running the container

```bash
docker build -t evergreen-quote-api:2.0 ./api
```

Stop the API dev server, then:

```bash
docker run --rm --network host --env-file api/.env evergreen-quote-api:2.0
```

The wired client keeps working; only where the API runs changed. Stop it with
`Ctrl+C` when the cluster takes over.

## Day 3: deploying the stack to the local cluster

Run these in order from the repo root. The database goes first so the API has
something to connect to.

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

If the `mongo:7` load reports an error, continue anyway: the cluster can pull
that public image directly. The `evergreen-quote-api` load is the one that
must succeed, because your image exists only on this machine.

Three `evergreen-quote-api` pods and one `mongo` pod reach `Running`. Then,
in its own terminal:

```bash
kubectl port-forward svc/evergreen-quote-api 3000:80
```

Port 3000 on purpose: the client's proxy still points at `localhost:3000`, so
the running app now talks to the cluster without changing a line. Save a
quote in the browser: it lands in the cluster's database. When the demo is
done, `Ctrl+C` the port-forward and:

```bash
kind delete cluster --name evergreen
```

(Thursday's rehearsal keeps the cluster running; teardown is a Friday-close
step.)

## Day 3: enabling CI

```bash
mkdir -p .github/workflows
cp ~/Labfiles/wa3870-cap-final-review-and-capstone-project-leaders/workflows/ci.yml .github/workflows/ci.yml
git add .github && git commit -m "Enable CI" && git push
```

Two jobs run: **Test the API** and **Type-check and build the client**.

## Day 4: the production build

```bash
cd client
npm run build
npm run preview
```

`npm run preview` serves the built files and still proxies `/api` to port
3000, so the production build runs against the real API. Open the printed
URL (port 4173) and confirm the recent quotes load.

## Day 4: the gated cloud window (only if the instructor opens it)

The instructor announces at Thursday's check-in whether the week has time
for this block. If the window is closed, skip this section: nothing in it is
required, and Friday's demo never depends on it. Entry condition: your PR is
merged with green CI, and `aws sts get-caller-identity` answers with your
sandbox account from the EKS week.

Start the cluster first; it builds unattended for 15 to 20 minutes. Pick a
unique name (lowercase letters, numbers, hyphens) and run this in its own
terminal:

```bash
eksctl create cluster \
  --name evergreen-launch-your-initials-1234 \
  --region us-east-1 \
  --nodes 2 \
  --node-type t3.medium \
  --managed \
  --write-kubeconfig=false
```

While it builds, push the launch image to ECR (from the repo root):

```bash
export ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
export REPO=evergreen-quote-api-your-initials-1234
export IMAGE=$ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$REPO:2.0
aws ecr create-repository --repository-name $REPO --region us-east-1
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
docker tag evergreen-quote-api:2.0 $IMAGE
docker push $IMAGE
```

When `eksctl` reports the cluster ready, connect to it deliberately and
point the manifest at ECR (a temporary edit; it is never committed):

```bash
aws eks update-kubeconfig --region us-east-1 --name evergreen-launch-your-initials-1234
kubectl config current-context
sed -i "s|image: evergreen-quote-api:2.0|image: $IMAGE|" k8s/deployment.yaml
```

Deploy, database first, in the same order as Wednesday:

```bash
kubectl apply -f k8s/mongo.yaml
kubectl wait --for=condition=available deploy/mongo --timeout=180s
kubectl apply -f k8s/
kubectl get pods
kubectl get svc evergreen-quote-api
```

Re-run the `get svc` until `EXTERNAL-IP` shows an address ending in
`.elb.amazonaws.com` (two to three minutes), then:

```bash
export API_URL=$(kubectl get svc evergreen-quote-api \
  -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
curl http://$API_URL/api/quotes
```

`[]` is correct: the cloud database was born minutes ago and holds nothing.
To save a quote into it from the app, stop the kind port-forward if one is
running (it holds port 3000), then:

```bash
kubectl port-forward svc/evergreen-quote-api 3000:80
```

Save a quote in the browser, then run the `curl` again: your quote, over
the public internet.

Clean up starting no later than 15:00, in this order. Check the context
first: `kubectl config current-context` must print the long EKS ARN, not
`kind-evergreen`, because the first delete must not land on your kind
cluster.

```bash
kubectl delete -f k8s/
eksctl delete cluster --name evergreen-launch-your-initials-1234 --region us-east-1
aws ecr delete-repository --repository-name $REPO --region us-east-1 --force
git checkout -- k8s/deployment.yaml
kubectl config use-context kind-evergreen
kubectl get pods
```

Deleting the Service is what releases the AWS load balancer; the `eksctl
delete` runs unattended for 10 to 15 minutes. The `git checkout` restores
the local image name on `main`, and the last `kubectl get pods` shows the
kind cluster's three API pods and mongo untouched for Friday. Before the
wrap, confirm `eksctl get cluster --region us-east-1` reports nothing.

## About the API tests

`api/` ships with its routes assembled and its test suite green: run
`cd api && npm test` any day to prove it. (The database must be running,
which on the VM it is.)

## About `solutions/`

`solutions/` is the instructor's reference: the wired end state of the launch
and one example of a completed `delivery-leadership-package/`. It is not part
of your starter kit, and the Day 2 seam defect does not appear in it.
