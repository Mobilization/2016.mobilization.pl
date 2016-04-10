# Mobilization 2016 - Website
Hi, in this repository (on master branch) you can find source code of static page generator powered by [DocPad](https://docpad.org) for the official website (http://2016.mobilization.pl). The result page is hosted on the gh-pages branch.

## "API"

Would you like to integrate your mobile app with our website? Or even create a dedicated app? It's more than welcome! We've prepared some json files you can use to retrieve all data which are being used by the website to make your programs perfectly synchronized!

##### Links to the files
- http://2016.mobilization.pl/api/breaks.json
- http://2016.mobilization.pl/api/event.json
- http://2016.mobilization.pl/api/partners.json
- http://2016.mobilization.pl/api/schedule.json
- http://2016.mobilization.pl/api/slots.json
- http://2016.mobilization.pl/api/speakers.json
- http://2016.mobilization.pl/api/sponsors.json
- http://2016.mobilization.pl/api/talks.json
- http://2016.mobilization.pl/api/venues.json

As you probably noticed some of the files are empty. If you'd like to start now, please take a look at demo files below. We can guarantee the original files will have exactly the same structure.

- http://2016.mobilization.pl/api-demo/breaks.json
- http://2016.mobilization.pl/api-demo/event.json
- http://2016.mobilization.pl/api-demo/partners.json
- http://2016.mobilization.pl/api-demo/schedule.json
- http://2016.mobilization.pl/api-demo/slots.json
- http://2016.mobilization.pl/api-demo/speakers.json
- http://2016.mobilization.pl/api-demo/sponsors.json
- http://2016.mobilization.pl/api-demo/talks.json
- http://2016.mobilization.pl/api-demo/venues.json

##### How do we know the data has been updated 
At some point you'll need to decide if synchronization is needed or not. Also you probably would like to know if the json files has been changed since the last update or not. To solve the issue pretty effectively you can use simple GitHub API call which gives you sha1 checksum for all files in api directory. 

```bash
curl -i 'https://api.github.com/repos/Mobilization/2016.mobilization.pl/contents/api?ref=gh-pages'
```

##### And one more thing you should know about the images
You don't need to download images everytime you sync json files. If a field (i.e. `img_url`) refers to the same filename you'd already downloaded then you can be sure the image has not been changed. Everytime we update an image its filename is changed as well. 

## How to install 2016.mobilization.pl locally

Before you start pulling down the repository please ensure you've got Node.js (https://nodejs.org/download/) installed on your computer. The project was tested on Node.js v0.12.4.

Here https://raw.githubusercontent.com/mobilization/2016.mobilization.pl/master/bin/install.sh you can find a simple script to install both src (docpad) & out (html) projects.

You can install this via the command-line with `curl`.
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/mobilization/2016.mobilization.pl/master/bin/install.sh)"
``` 

The script will pull the project and put into the following structure:

`mobilization.pl/2016.mobilization.pl` - for master branch (src project)
`mobilization.pl/2016.mobilization.pl-gh-pages` - for gh-pages branch (out project)

In most of cases you won't need to update 2016.mobilization.pl-gh-pages, docpad will do it for you.

## How to run the page locally

```
cd mobilization.pl/2016.mobilization.pl
./run.sh
```

## How to push changes to gh-pages branch (production)

In `mobilization.pl/2016.mobilization.pl/bin` you will find few scripts simplifying publishing process. Please run the scripts via symbolic links in `mobilization.pl/2016.mobilization.pl`.

- `./clean.sh` - Clean up the out folder and sync with remote repository.
- `./generate.sh` - Re-generate the out files.
- `./publish.sh` - Commit the out files and push to remote.


