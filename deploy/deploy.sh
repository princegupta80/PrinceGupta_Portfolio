#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Deploy the portfolio to Vercel.
#
# First run:  logs you into Vercel (if needed) and links this
#             folder to a Vercel project, then deploys to production.
# Later runs: builds and deploys the latest changes to production.
#
# Prerequisites: Vercel CLI (`npm i -g vercel`), a Vercel account.
# Usage:          ./deploy/deploy.sh   (from the portfolio/ folder)
# ─────────────────────────────────────────────────────────────
set -euo pipefail

cd "$(dirname "$0")/.."

command -v vercel >/dev/null || { echo "==> Vercel CLI not found, installing..."; npm i -g vercel; }

echo "==> Deploying to Vercel (production)..."
vercel --prod

echo ""
echo "✅ Deployed! Vercel printed your live URL above."
echo "   (Run 'vercel' without --prod any time you want a preview deploy instead.)"
