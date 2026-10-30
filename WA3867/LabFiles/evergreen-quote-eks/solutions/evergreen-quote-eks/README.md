# Evergreen Quote API - Orchestration with Kubernetes/EKS (Solution)

The completed reference manifests. The Deployment runs 3 replicas of the API
container; the Service exposes them behind one load-balanced endpoint.

`k8s/deployment.yaml` carries the local image name, `evergreen-quote-api:1.0`,
which is what the kind half of the lab uses. The EKS half replaces that one
line with the full ECR address and changes nothing else.

## Local cluster

```bash
docker build -t evergreen-quote-api:1.0 .
kind create cluster --name evergreen
kind load docker-image evergreen-quote-api:1.0 --name evergreen

kubectl apply -f k8s/
kubectl get pods                                              # three running pods
kubectl delete pod <one-pod-name>                             # self-healing
kubectl scale deployment/evergreen-quote-api --replicas=5      # scaling
kubectl port-forward svc/evergreen-quote-api 8080:80          # EXTERNAL-IP is <pending>
```

## Amazon EKS

```bash
export IMAGE=$ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$REPO:1.0
sed -i "s|image: evergreen-quote-api:1.0|image: $IMAGE|" k8s/deployment.yaml
kubectl apply -f k8s/
kubectl get svc evergreen-quote-api                           # a real elb.amazonaws.com address
```

## Clean up

```bash
kubectl delete -f k8s/                                        # releases the load balancer first
eksctl delete cluster --name evergreen-your-initials-1234 --region us-east-1
kind delete cluster --name evergreen
```
