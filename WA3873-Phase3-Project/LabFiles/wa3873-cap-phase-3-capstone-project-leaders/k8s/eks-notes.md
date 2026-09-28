# From kind to EKS: what the real path adds (read-only)

Your Thursday demo runs these same manifests on a `kind` cluster: a real
Kubernetes, living entirely on your VM. Shipping to Amazon EKS uses the same
files with three additions. This page is a briefing, not a task list; do not
run any of it unless your instructor confirmed a live AWS window on Monday.

## What changes

1. **The image needs a registry.** A kind cluster loads your local image
   directly (`kind load docker-image`). A cloud cluster pulls from a registry,
   so the team would create an Amazon ECR repository, tag the image as
   `<account-id>.dkr.ecr.us-east-1.amazonaws.com/evergreen-quote-api:1.0`, push
   it, and change the one `image:` line in `k8s/deployment.yaml` to match.
2. **The cluster is provisioned, not created in seconds.** `eksctl create
   cluster` stands up managed control-plane and worker nodes; it takes about
   15 to 20 minutes and creates real AWS resources.
3. **The LoadBalancer becomes real.** On kind, the `LoadBalancer` Service
   never gets an external address, which is why the demo uses
   `kubectl port-forward`. On EKS, the same Service provisions an actual AWS
   load balancer with a public URL.

## What it costs

An EKS control plane bills at about $0.10 per hour, plus the worker nodes and
the load balancer: roughly $0.25 per hour for a small demo cluster. The money
stops only when the cluster is deleted.

## Why the demo does not need it

Everything the manifests claim (three replicas, self-healing, a stable Service
in front of changing pods, configuration injected by the platform) is true on
kind exactly as it is on EKS. What EKS adds is scale, a public address, and a
bill. As a leader, the question to ask before anyone runs `eksctl` is the same
go/no-go you practice this week: what does the live cluster prove that the
local one cannot, and who turns it off?
