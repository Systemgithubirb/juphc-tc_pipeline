# Tekton Pipeline

The pipeline intentionally follows the grading order:

1. `run-tests` — installs dependencies and runs Jasmine.
2. `build-image` — builds and pushes the Docker image with Kaniko.
3. `deploy-image` — applies the Kubernetes deployment and waits for rollout.

Before running it, make sure:
- Tekton Pipelines is installed.
- The Kubernetes service account has permission to create/update Deployments and Services.
- The workspace contains this repository.
- Kaniko has credentials for the target IBM Container Registry.
- `IMAGE` points to your IBM Cloud Container Registry image.

Example:

```bash
kubectl apply -f tekton/tasks.yaml
kubectl apply -f tekton/pipeline.yaml
kubectl create -f tekton/pipeline-run.yaml
tkn pipelinerun list
tkn pipelinerun logs <PIPELINERUN_NAME> -f
```

For an IBM Cloud setup, configure the registry secret/service account according
to the cluster's registry-authentication method. Do not commit registry tokens
or API keys to GitHub.