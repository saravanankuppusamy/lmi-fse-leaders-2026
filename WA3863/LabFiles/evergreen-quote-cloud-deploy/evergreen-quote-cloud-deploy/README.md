# Evergreen Quote — Cloud Deployment (Starter)

Deploy the Evergreen static site to a real **S3** bucket in AWS. You run the site
locally to confirm the artifact works, create the bucket, turn on static website
hosting, apply the policies that say who may read and who may write, then
complete and run the deploy script.

You need an **AWS account** and **AWS CLI credentials**. Your instructor provides
both.

## Run the site locally

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to AWS

```bash
aws sts get-caller-identity      # confirm the CLI is connected (aws configure if not)
# set BUCKET in deploy/deploy-to-s3.sh, complete the TODOs, then:
bash deploy/deploy-to-s3.sh
```

## Files

- `site/` — the static site (the artifact you deploy).
- `deploy/deploy-to-s3.sh` — the deployment script (complete the `TODO`s).
- `deploy/bucket-policy.json` — public read access for the website (you apply this).
- `deploy/iam-policy.json` — least-privilege permissions for the deploy role (reference).
- `deploy/infrastructure.md` — how S3 static website hosting serves the site.

## Clean up

```bash
aws s3 rm "s3://YOUR-BUCKET-NAME" --recursive
aws s3 rb "s3://YOUR-BUCKET-NAME"
```

Follow the lab guide.
