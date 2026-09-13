#!/bin/sh
set -e

: "${IBM_REGION:?Set IBM_REGION}"
: "${IBM_CLUSTER_NAME:?Set IBM_CLUSTER_NAME to your Kubernetes/OpenShift cluster}"

ibmcloud login
ibmcloud target -r "${IBM_REGION}"

# For IBM Kubernetes Service:
ibmcloud ks cluster config --cluster "${IBM_CLUSTER_NAME}"

echo "Cluster context configured."
kubectl get nodes
