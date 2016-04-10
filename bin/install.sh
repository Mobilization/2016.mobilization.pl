#!/bin/bash

MOBILIZATION_DOMAIN="2016.mobilization.pl"

# create a new folder for the project
mkdir -p mobilization.pl
cd mobilization.pl

# clone master branch folder
git clone https://github.com/mobilization/$MOBILIZATION_DOMAIN.git

# create symbolic links 
ln -s bin/clean.sh $MOBILIZATION_DOMAIN/clean.sh
ln -s bin/generate.sh $MOBILIZATION_DOMAIN/generate.sh
ln -s bin/publish.sh $MOBILIZATION_DOMAIN/publish.sh
ln -s bin/run.sh $MOBILIZATION_DOMAIN/run.sh

# clone gh-pages branch folder
mkdir $MOBILIZATION_DOMAIN-gh-pages
cd $MOBILIZATION_DOMAIN-gh-pages
git clone https://github.com/mobilization/$MOBILIZATION_DOMAIN.git .
git checkout gh-pages

echo ""
echo "The mobilization.pl project has been installed successfully!"
echo "Please don't modify files in $MOBILIZATION_DOMAIN-gh-pages manually."
echo "You can find some guidelines in mobilization.pl/$MOBILIZATION_DOMAIN/README.md file."
