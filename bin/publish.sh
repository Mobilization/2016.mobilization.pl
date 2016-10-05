#!/bin/bash

GIT_STATUS_LINES=$(git status --porcelain | wc -l)
GIT_REMOTE_LOCAL_DIFF=$(git log origin/master..master | wc -l)

if [ $GIT_STATUS_LINES -ge 1 ] || [ $GIT_REMOTE_LOCAL_DIFF -ne 0 ] ; then
	echo "Error: Cannot publish changes. Some changes have not been committed or pushed. See git status to get more details.";
 	git status;
	exit 1;
fi

GIT_CURRENT_REVISION=$(git rev-parse --verify HEAD)
GIT_COMMIT_MESSAGE="Generated page based on revision "$GIT_CURRENT_REVISION

cd ../2016.mobilization.pl-gh-pages
git pull -X ours
git add -A
git commit -m "$GIT_COMMIT_MESSAGE"
git push origin gh-pages
