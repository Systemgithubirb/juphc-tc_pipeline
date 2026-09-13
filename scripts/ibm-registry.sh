#!/bin/sh
set -e

: "${IBM_REGION:?Set IBM_REGION, e.g. us-south}"
: "${IBM_NAMESPACE:?Set IBM_NAMESPACE to your IBM Container Registry namespace}"
: "${IBM_REGISTRY:=us.icr.io}"
: "${IMAGE_NAME:=tax-calculator}"
: "${IMAGE_TAG:=1.0}"

echo "Logging into IBM Cloud..."
ibmcloud login

echo "Setting registry region..."
ibmcloud cr region-set "${IBM_REGION}"

echo "Building IBM Registry tag..."
docker tag "${IMAGE_NAME}:${IMAGE_TAG}" \
  "${IBM_REGISTRY}/${IBM_NAMESPACE}/${IMAGE_NAME}:${IMAGE_TAG}"

echo "Pushing image..."
docker push "${IBM_REGISTRY}/${IBM_NAMESPACE}/${IMAGE_NAME}:${IMAGE_TAG}"

echo "Image pushed successfully:"
echo "${IBM_REGISTRY}/${IBM_NAMESPACE}/${IMAGE_NAME}:${IMAGE_TAG}"
