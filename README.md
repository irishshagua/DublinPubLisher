# DublinPubLisher
Google App Script to allow adding pubs to the Dublin pub list by commiting a change to the master repo with the new details

# Deploy
There's a github actions pipeline setup to publish the code from [src](src/) to Google Script. It runs the [deployment script](deploy/publish.sh) to deploy with [clasp](https://github.com/google/clasp).

# Attributions
The GitHubActions file has been borrowed from a [@pamelafox gist](https://gist.github.com/pamelafox/ea0474daa137f035b489bf78cc5797ea), so much appreciation there.
