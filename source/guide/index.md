title: Getting Started - Installation
---

If you want to learn what Quasar is and can do for you, read the [Introduction](/guide/introduction.html). Otherwise, let's get started:

Choose a starter kit based on what you want to do:
 * UMD Starter Kit (embed into an existing project through CDN install)
 * Main Starter Kit (**recommended**)

Here's a comparison:

| Feature | UMD | Main Starter Kit |
| --- | --- | --- |
| Ability to embed into an existing project | **Yes** | - |
| Ability to use CDN | **Yes** | **Yes** |
| ES6 support | - | **Yes** |
| Build System (HMR, minification, source maps, optimization, ...) | - | **Yes** |
| Take advantage of Quasar CLI for a stellar developer experience | - | **Yes** |
| Tree Shaking | - | **Yes** |
| SFC (Single File Component - for Vue) | - | **Yes** |
| Share same code for SPA, PWA, Mobile Apps, Electron Apps | - | **Yes** |
| Installation through CSS and JS html tags | **Yes** | - |
| Advanced configuration through dynamic quasar.conf.js | - | **Yes** |

## UMD Starter Kit (CDN install)
If you want to embed Quasar into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version. The UMD starter kit will ask you some questions and will generate a simple HTML file that will show you how to use CDN to add Quasar:

```bash
# make sure you have vue-cli globally installed
$ npm install -g vue-cli

# then...
$ vue init quasarframework/quasar-starter-kit-umd <folder_name>
```

And you're done. Inspect `index.html` file that was created in the new folder and learn how you can embed Quasar.

Now head on to read about [UMD Starter Kit](/guide/embedding-quasar.html).

## Main Starter Kit (Recommended)
If you want to be able to build:
* a SPA (Single Page Application/Website),
* a PWA (Progressive Web App),
* a Mobile App (through Cordova),
* an Electron App,
...sharing the same base-code, then go for the **Main Starter Kit**:

First, we install Quasar CLI. Make sure you have Node >=8 and NPM >=5 installed on your machine.

```bash
$ npm install -g quasar-cli
```

Then we create a project folder with Quasar CLI:
```bash
$ quasar init <folder_name>
```

Note that you don't need separate starter kits if you want to build any of the options described above. This one can seamlessly handle all of them.

Now head on to read about [Main Starter Kit](/guide/sr-installation.html) and also familiarize yourself with the [Quasar CLI](/guide/quasar-cli.html).
