#!/bin/bash

GIT_STATUS_LINES=$(git status --porcelain | wc -l)
if [ $GIT_STATUS_LINES -ge 1 ] ; then
	echo "Error: Cannot publish changes. Some of the files are not committed. See git status to get more details.";
 	git status;
	exit 1;
fi

GIT_CURRENT_REVISION=$(git rev-parse --verify HEAD)
GIT_COMMIT_MESSAGE="Generated page based on revision "$GIT_CURRENT_REVISION

cd ../2015.mobilization.pl-gh-pages
git pull
git add -A
git commit -m "$GIT_COMMIT_MESSAGE"
git push origin gh-pages
