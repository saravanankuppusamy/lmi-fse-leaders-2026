#!/usr/bin/env bash
# deploy-to-s3.sh — deploy the Evergreen static site to an S3 bucket (Solution)
set -euo pipefail

BUCKET="evergreen-quote-site-CHANGE-ME"   # the bucket you created
REGION="us-east-1"                        # the region you created it in
SITE_DIR="$(dirname "$0")/../site"        # the folder to upload

if [[ "$BUCKET" == *CHANGE-ME* ]]; then
  echo "Set BUCKET at the top of this script to the bucket you created." >&2
  exit 1
fi

echo "Deploying $SITE_DIR to s3://$BUCKET ..."

# 1) Upload the site; --delete removes stale files from the bucket.
aws s3 sync "$SITE_DIR" "s3://$BUCKET" --delete

# 2) List what is now in the bucket, so the deploy checks its own work.
aws s3 ls "s3://$BUCKET" --recursive --human-readable

echo
echo "Done. Your site: http://$BUCKET.s3-website-$REGION.amazonaws.com"
