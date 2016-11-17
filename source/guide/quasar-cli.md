title: Quasar CLI
---
Quasar CLI allows you to start new projects in no time by generating a starter boilerplate filled with everything you need. It also does most of the heavy-lifting so you don’t have to take care of the redundant tasks. You must install it to generate and manage a Quasar App.

``` bash
$ npm install -g quasar-cli
```

Familiarize yourself with the list of commands:
``` bash
$ quasar
```

See help for any command:
``` bash
$ quasar [command name] --help
```

## Create App

Initializes an App folder with a starter boilerplate.
``` bash
$ quasar init [template name] <folder-name>
```

> By omitting the `template name` parameter the CLI will detect latest App template and generate the App folder with it.

By convention, templates follow the syntax `v[number]`, where `number` is 1, 2, 3... The number designates the major version of Quasar you are using. Currently, only `v1` is available for 0.x and (soon to be released) 1.x versions.

You can check available App template list at any time with:

``` bash
$ quasar list
```

## Development Server
Developing your App by compiling and maintaining code in-memory. A web server will serve your App while offering hot-reload out of the box. Running in-memory offers faster rebuilds when you change your code.

> Hot Reload is much more than just refreshing your browser when code changes. It skips the refresh and updates your code on the fly while maintaining your App's state (like your VueModel's data). Please note that there are cases when this is impossible, so the dev webserver will simply refresh your browser.

Furthermore, you can develop your App directly on a phone and still benefit from Hot-Reload. Download and install the Quasar Play App (currently only on Google Play Store).

``` bash
# run development server (with default theme)
$ quasar dev

# run development server with specific theme
$ quasar dev mat
$ quasar dev ios

# dev server with QR code
# scan QR code with Quasar Play app
$ quasar dev -p
$ quasar dev --play
$ quasar dev mat --play
```

If you wish to change the port serving your App you have 2 options:
* Open up `/config/index.js` file and change `dev.port` property.
* If this is a one time thing, specify the port as an environment variable:
  ``` bash
  $ PORT=3000 quasar dev
  ```

## Build App for Production
Quasar CLI can pack everything together and optimize your App for production. Minifies source code, extracts vendor components and leverages browser cache, and many more.

``` bash
# build for production
$ quasar build

# build for production with specific theme
$ quasar build mat
$ quasar build ios
```

You can also clean up the build assets with:
``` bash
$ quasar clean
```

## Generating Components
After creating an App folder with the CLI, inside your App you'll have a folder named `/templates` that contains templates for: `layout`, `view` (page), or a generic Vue `component`.

You can generate components for your App in your `/src` folder:
```
# get available Component templates
$ quasar new -l
$ quasar new --list

# generate .vue file from a Component template
$ quasar new component Hello

# generate .vue file from a template to a subfolder
$ quasar new layout layout/about/help/Hello
# the above creates src/components/layout/about/help/Hello.vue
```

> Add your own component templates. Quasar will be able to handle them.

## App Wrappers - Cordova
Current App Wrappers available is for Cordova only. More will be added in the future, to allow you to build an Electron App, a Google Chrome extension, or a standalone progressive Web App, to name a few examples.

The CLI command is like this:
``` bash
$ quasar wrap <wrapper name>
```

Further reading on Cordova wrapper is available [here](/guide/cordova-wrapper.html).

## Lint App Code
ESlint is used to check your ES6 Javascript files.

``` bash
$ quasar lint
```

## Run Test Suites
The starter boilerplate comes packed with both Unit and End to end testing.

``` bash
# Run both unit and e2e tests
$ quasar test

# Run either unit or e2e tests
$ quasar test -u
$ quasar test -e
```

Note: You may have to [install Java](https://www.java.com/download/) on your hosting OS to run the end to end tests, because of a Selenium dependancy.

## Serve Static-Content Folder
You are able to create an ad-hoc web server to serve static-content web files from a folder. Browser sessions are automatically refreshed when content changes. User click/scroll can be synchronized.

This command comes in really handy after building your Quasar App for production. The `/dist` folder contains files that are meant to be served with a webserver. So here you go:

``` bash
# Serve current folder:
$ quasar serve

# ..or serve a full or relative path
$ quasar serve ./dist
$ quasar serve /work/quasar-app/dist
```

This command does not rely on Quasar Framework. Any folder with any web content can be served.
