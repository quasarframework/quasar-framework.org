title: Electron App Wrapper
---
You can build Electron apps by wrapping your Quasar project with its Electron wrapper. We'll be using Quasar CLI to manage this.

> The Quasar Electron wrapper can be installed on top of the **default** starter kit. Won't work with any other specific starter kits, like "pwa".

## Wrap your App
Now let's create the Wrapper for your App.
``` bash
$ quasar wrap electron
```

This command generates a subfolder inside your App named `/electron`. It contains the assets of an Electron project **mapped to your Quasar App**.

Next, change current directory to the newly created `/electron` folder and npm install its dependencies:

``` bash
$ cd electron
$ npm install
```

## Development with Electron
You can benefit from Hot Reload while developing an Electron app. The wrapper will open an Electron app which will point to your App. As a bonus, besides Hot Reload, the Chrome Dev Tools will also be available so you can easily inspect code.

``` bash
# Make sure you keep running (from root project folder):
$ quasar dev
# then from Electron wrapper folder
$ quasar dev
```

## Building Electron App
Make sure you build Quasar app from root project folder before packaging it with Electron and then follow these steps:

``` bash
# from Electron wrapper folder:
$ quasar build
```

If you want to only build for a specific platform, like Linux, simply add another parameter to `quasar build`:
``` bash
$ quasar build linux # for Linux
# or
$ quasar build darwin # for MacOS
# or
$ quasar build win32 # for Windows
# or
$ quasar build mas
```

## Electron App Structure

``` bash
.
├── build                # build files
│   ├── script.build.js  # production build for Electron
│   └── script.clean.js  # cleaning build artifacts
├── config               # build config folder
│   └── index.js         # configure your build
├── dist                 # where production build will go
│   └── ...
├── electron.js          # main Electron runner
├── icons                # icons for your Electron App
│   ├── icon.icns
│   └── icon.ico
└── package.json         # npm scripts and dependencies for Electron
```

## Debugging
While developing you got Chrome Dev Tools available. But what happens when the production build has something failing? It may happen, for example, that if you made a mistake in the code in some scenarios you'll only see a blank window showing up. So how can you debug this? Simple:

``` bash
$ electron --debug=[port] path/to/production/executable

# Example:
$ electron --debug="4444" electron/dist/QuasarElectronApp-linux-x64/QuasarElectronApp
```

Your Electron App will be opened and you can check console output for errors.
