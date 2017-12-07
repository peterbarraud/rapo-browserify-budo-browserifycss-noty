# Quick try out of Noty
Just a quick setup of Noty using Browserify + Budo + BrowserifyCSS

## Get going
1. Clone this repo
2. `cd` into the resultant dir
3. Run `npm install` to get the dependencies
4. Run `npm start` to launch the project in your default browser running on a local (`Node`-based) web server with `livereload` - all setup.

## Where you'll find what
* `index.js` is your browserify startup file. Thats got the reference to the CSS libs
* `./src` is your source dir. It's got js and style folder
* `main.js` thats got your Noty stuff in there

## Building the project for deployment
This is split into two parts
* `build.js`: Builds the `JS` and `CSS` outputs
* `html-dist.config`: Uses [html-dist](https://www.npmjs.com/package/html-dist) to inject the CSS into the HTML

Then generate build:
```
npm run build
```
### Testing the build
If you want to check the build - Just to make sure:
```
npm run testbuild
```
This runs `budo` on the build