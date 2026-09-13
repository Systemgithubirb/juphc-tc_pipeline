#!/bin/sh
set -e
docker rm -f tax-calculator 2>/dev/null || true
docker run -d --name tax-calculator -p 3000:3000 tax-calculator:1.0
echo "Container started at http://localhost:3000"
echo "Health check:"
curl -fsS http://localhost:3000/health
echo
