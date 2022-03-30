#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex
export NODE_OPTIONS=--openssl-legacy-provider
yarn build
rm -rf umd/*.txt
./coffee/upload.coffee
