#!/bin/sh

cd src
sed -i "s/<GITHUB_API_TOKEN>/$GAS_GH_API_TOKEN/g" Code.js
clasp push -f
clasp deploy -i AKfycbzYFe1k_Ad0Y7523gcWqXOTe83EH8cupLXsRhXtNo_gNGr_L1F7