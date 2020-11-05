# DublinPubLisher
Google App Script to allow adding pubs to the Dublin pub list by commiting a change to the master repo with the new details

## Tasks
This repo is a work in progress. Below is still left to do...

 [x] Workflow publishes to Google App Script
 [x] Workflow needs to deploy the script
 [] The script needs to work 😅

# Deploy
There's a github actions pipeline setup to publish the code from [src](src/) to Google Script. It runs the [deployment script](deploy/publish.sh) to deploy with [clasp](https://github.com/google/clasp).

