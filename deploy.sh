#!/bin/sh

./build.sh
cd build/distributions || exit 1
unzip deployable-artifact.zip
echo -snapshot >> VERSION
./deployer.sh -dev
cd ../../