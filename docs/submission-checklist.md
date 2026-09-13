# 10-Point Submission Checklist

| Point | Requirement | Evidence to submit |
|---|---|---|
| 1 | Run unit tests using Jasmine | Terminal output showing `npm test` and all specs passed |
| 2 | Create Dockerfile | GitHub URL to `Dockerfile` and/or code screenshot |
| 3 | Build Docker image | Terminal output showing successful `docker build` |
| 4 | Deploy/test Docker container | Browser screenshot + `/health` output |
| 5 | Tag/push to IBM Cloud Registry | Terminal output from IBM registry tag/push |
| 6 | Deploy Tax Calculator on IBM Cloud | Cloud deployment screenshot + URL |
| 7 | Create Tekton Pipeline tasks | GitHub URL to `tekton/tasks.yaml` |
| 8 | Extend pipeline to call tasks | GitHub URL to `tekton/pipeline.yaml` |
| 9 | Run Tekton pipeline | `tkn pipelinerun` output/log screenshot |
| 10 | Deploy image built using pipeline | Final cloud application screenshot/URL |

## Evidence naming

Save real evidence using:

```text
submission/
├── 01-jasmine-tests.txt
├── 02-dockerfile.txt
├── 03-docker-build.txt
├── 04-docker-container.png
├── 05-ibm-registry.txt
├── 06-ibm-cloud.png
├── 07-tekton-tasks.txt
├── 08-tekton-pipeline.txt
├── 09-tekton-run.txt
└── 10-pipeline-deployment.png
```

Never invent terminal output or screenshots. Run the project and paste your actual results.
