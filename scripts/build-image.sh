#!/bin/sh
set -e
IMAGE_NAME="${IMAGE_NAME:-tax-calculator}"
TAG="${TAG:-1.0}"
docker build -t "${IMAGE_NAME}:${TAG}" .
echo "Built image: ${IMAGE_NAME}:${TAG}"
