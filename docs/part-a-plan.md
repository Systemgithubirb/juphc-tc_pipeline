# Part A — Plan Your Changes

## Epic

**Epic: Modernize and automate the Cloud Native Tax Calculator**

As a development team, we want to modernize the Tax Calculator, package it in a Docker container, deploy it on IBM Cloud, and automate testing/build/deployment with a Tekton CI/CD pipeline so that releases are repeatable and reliable.

## Stories

### Story 1 — Unit testing
As a developer, I want Jasmine unit tests for the tax calculation logic so that changes can be verified automatically.

Acceptance criteria:
- Jasmine is configured.
- Tax calculation has multiple unit tests.
- `npm test` finishes successfully.

### Story 2 — Containerize the application
As a developer, I want a Dockerfile so that the Tax Calculator can run consistently in a container.

Acceptance criteria:
- Dockerfile exists.
- Image builds successfully.
- Container exposes port 3000.
- `/health` returns HTTP 200.

### Story 3 — Build Docker image
As a developer, I want a repeatable image-build command so that the same application can be packaged for deployment.

Acceptance criteria:
- `docker build` succeeds.
- Image is tagged `tax-calculator:1.0`.

### Story 4 — Deploy and test locally
As a developer, I want to run the image locally so that I can verify the container before cloud deployment.

Acceptance criteria:
- Container starts.
- Web UI loads.
- `/health` returns `UP`.
- Tax calculation works.

### Story 5 — Push image to IBM Cloud Container Registry
As a developer, I want to tag and push the image to IBM Cloud Container Registry so that the cloud deployment can use the image.

Acceptance criteria:
- IBM CLI login succeeds.
- Registry region is selected.
- Image is tagged with IBM registry path.
- Image push succeeds.

### Story 6 — Deploy on IBM Cloud
As a developer, I want to deploy the container to an IBM Cloud Kubernetes environment so that the application is accessible remotely.

Acceptance criteria:
- Deployment and Service are created.
- Rollout succeeds.
- Application URL responds.

### Story 7 — Create Tekton tasks
As a DevOps engineer, I want separate Tekton tasks for tests, image build and deployment.

Acceptance criteria:
- Test task exists.
- Build task exists.
- Deploy task exists.

### Story 8 — Create Tekton pipeline
As a DevOps engineer, I want the tasks connected in the correct order.

Acceptance criteria:
- Tests run first.
- Build runs only after tests.
- Deployment runs only after build.

### Story 9 — Run Tekton pipeline
As a DevOps engineer, I want a PipelineRun so that the whole workflow can execute automatically.

Acceptance criteria:
- PipelineRun starts.
- All tasks succeed.
- Final deployment becomes ready.

### Story 10 — Deploy pipeline-built image
As a DevOps engineer, I want the image produced by the pipeline to be deployed so that the cloud release is automated.

Acceptance criteria:
- Pipeline image is pushed to registry.
- Deployment references the pipeline image tag.
- Application is reachable after rollout.
