# Evergreen Quote — Cloud Deployment (Solution)

The completed reference. `deploy/deploy-to-s3.sh` contains the finished AWS CLI
commands; `BUCKET` still needs the globally unique bucket name each student
creates.

```bash
cd site && python3 -m http.server 8080   # run the artifact locally

# Real deploy (needs a bucket with static website hosting on,
# bucket-policy.json applied, and configured AWS credentials):
aws sts get-caller-identity
bash deploy/deploy-to-s3.sh

# Clean up
aws s3 rm "s3://YOUR-BUCKET-NAME" --recursive
aws s3 rb "s3://YOUR-BUCKET-NAME"
```
