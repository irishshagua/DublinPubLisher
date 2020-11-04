#!/bin/sh

cd src
clasp push -f
clasp undeploy --all
clasp deploy -V 12