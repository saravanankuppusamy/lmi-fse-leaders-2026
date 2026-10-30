# Evergreen Quote API - Orchestration with Kubernetes/EKS (Starter)

Run the Evergreen API container on **Kubernetes** twice: first on a local
`kind` cluster on this VM, then on **Amazon EKS**. The manifests are the same
both times. Only the platform underneath changes.

## Files

- `Dockerfile`, `package.json`, `src/` - the Evergreen API from Week 7, ready to build.
- `k8s/deployment.yaml` - desired state: how many copies, which image, which port.
- `k8s/service.yaml` - a stable, load-balanced endpoint for the pods.

Complete the six `TODO`s across the two manifests, following the lab guide.

## Half 1: the local cluster

```bash
docker build -t evergreen-quote-api:1.0 .
kind create cluster --name evergreen
kind load docker-image evergreen-quote-api:1.0 --name evergreen   # the cluster can't see your images

kubectl apply --dry-run=client -f k8s/    # checks shape, not values
kubectl apply -f k8s/
kubectl get pods                          # three running pods
kubectl get svc evergreen-quote-api       # EXTERNAL-IP stays <pending>: no cloud here

kubectl port-forward svc/evergreen-quote-api 8080:80
curl http://localhost:8080/api/quotes     # in another terminal
```

## Half 2: Amazon EKS

Start this first; it takes 15-20 minutes.

```bash
eksctl create cluster --name evergreen-your-initials-1234 --region us-east-1 \
  --nodes 2 --node-type t3.medium --managed --write-kubeconfig=false
```

Then publish the image and deploy the same files:

```bash
export ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
export REPO=evergreen-quote-api-your-initials-1234
export IMAGE=$ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$REPO:1.0

aws ecr create-repository --repository-name $REPO --region us-east-1
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
docker tag evergreen-quote-api:1.0 $IMAGE && docker push $IMAGE

aws eks update-kubeconfig --region us-east-1 --name evergreen-your-initials-1234
sed -i "s|image: evergreen-quote-api:1.0|image: $IMAGE|" k8s/deployment.yaml
kubectl apply -f k8s/
kubectl get svc evergreen-quote-api       # EXTERNAL-IP becomes a real AWS address
```

## Clean up

Order matters: the Kubernetes objects go first, so the load balancer is released
before `eksctl` tries to delete the network it is attached to.

```bash
kubectl delete -f k8s/
eksctl delete cluster --name evergreen-your-initials-1234 --region us-east-1
aws ecr delete-repository --repository-name $REPO --region us-east-1 --force
kind delete cluster --name evergreen
```

`kubectl config current-context` tells you which cluster you are about to change.
Check it before every `apply`.
