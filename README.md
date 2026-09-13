# Cloud Native Tax Calculator — Final Project

This repository is organized to match the 10-point final assignment:

## Part A — Plan your changes
- `docs/part-a-plan.md` contains the Epic and Stories.
- `docs/submission-checklist.md` maps every grading point to a project artifact.

## Part B — Modernize the application
- `Dockerfile` containerizes the Node.js application.
- `scripts/build-image.sh` builds the local image.
- `scripts/run-container.sh` runs and tests the local container.
- `scripts/ibm-registry.sh` tags and pushes the image to IBM Cloud Container Registry.
- `k8s/deployment.yaml` deploys the image to Kubernetes/IBM Cloud.

## Part C — Enhance DevOps
- `spec/taxCalculatorSpec.js` contains Jasmine unit tests.
- `tekton/tasks.yaml` defines test, build and deployment tasks.
- `tekton/pipeline.yaml` calls those tasks in order.
- `tekton/pipeline-run.yaml` is a PipelineRun template.

## Run locally

Prerequisite: Node.js 20+.

```bash
npm install
npm test
npm start
```

Open:

```text
http://localhost:3000
```

Health endpoint:

```text
http://localhost:3000/health
```

## Docker

```bash
docker build -t tax-calculator:1.0 .
docker run -d --name tax-calculator -p 3000:3000 tax-calculator:1.0
curl http://localhost:3000/health
```

Or:

```bash
docker compose up --build
```

## IBM Cloud Registry

Set your own values:

```bash
export IBM_REGION=us-south
export IBM_NAMESPACE=YOUR_NAMESPACE
export IBM_REGISTRY=us.icr.io
export IMAGE_NAME=tax-calculator
export IMAGE_TAG=1.0
```

Then:

```bash
./scripts/ibm-registry.sh
```

Do not put IBM API keys, registry passwords or other credentials in the repository.

## IBM Cloud Kubernetes deployment

After pushing the image, replace `IMAGE_PLACEHOLDER` in `k8s/deployment.yaml` with:

```text
us.icr.io/YOUR_NAMESPACE/tax-calculator:1.0
```

Then configure your IBM Kubernetes cluster and run:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl rollout status deployment/tax-calculator
kubectl get service tax-calculator
```

Use the external IP/hostname shown by the Service as the deployed application URL.

## Tekton

Apply:

```bash
kubectl apply -f tekton/tasks.yaml
kubectl apply -f tekton/pipeline.yaml
```

Then use a PipelineRun based on `tekton/pipeline-run.yaml`.

The pipeline is:

```text
Unit Tests → Build Image → Deploy Image
```

## Important submission note

The repository contains the complete code/configuration needed for the assignment, but a real IBM Cloud deployment requires your own IBM Cloud account, cluster/registry namespace and credentials. Therefore, do not submit fabricated screenshots or fabricated cloud output. Run the commands and place your real terminal output/screenshots in `submission/`.

## Suggested GitHub repository name

`tax-calculator-final-project`

## Project health check

The app exposes:

```text
GET /health
```

Expected response:

```json
{
  "status": "UP",
  "service": "tax-calculator"
}
```
