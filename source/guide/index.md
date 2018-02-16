title: Getting Started - Installation
---

**If you want to learn what Quasar is and what it can do for you**, read the [Introduction to Quasar](/guide/introduction.html). Otherwise, let's get started and choose how you want to use Quasar:
 * UMD/Standalone (embed into an existing project through CDN, progressive integration)
 * Starter Kit handled by Quasar CLI (**recommended**)

Here's a comparison:

| Feature | UMD | Starter Kit |
| --- | --- | --- |
| Ability to embed into an existing project | **Yes** | - |
| Progressive integration of Quasar | **Yes** | - |
| Ability to use CDN | **Yes** | **Yes*** |
| Build SPA, PWA, Mobile Apps, Electron Apps | **Yes** | **Yes** |
| Take advantage of Quasar CLI for a stellar developer experience | - | **Yes** |
| Tree Shaking | - | **Yes** |
| SFC (Single File Component - for Vue) | - | **Yes** |
| Advanced configuration through dynamic quasar.conf.js | - | **Yes** |

## UMD / Standalone (uses CDN)
If you want to embed Quasar into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version. There a helper UMD starter kit which will show you how to get started and what CSS and JS tags to include into your project. It will ask you some questions (what Quasar theme will you be using, what Quasar I18n to include, ...) and it will generate a simple HTML file that will demo on how to use CDN to add Quasar:

```bash
# make sure you have vue-cli globally installed
$ npm install -g vue-cli

# then...
$ vue init quasarframework/quasar-starter-kit-umd <folder_name>
```

And you're done. Inspect `index.html` file that was created in the new folder and learn how you can embed Quasar. You may want to repeat the step above to experiment with different setups based on the answers you give out.

Now head on to read about [UMD/Standalone](/guide/embedding-quasar.html).

## Starter Kit (Recommended)
If you want to be able to build:
* a SPA (Single Page Application/Website),
* a PWA (Progressive Web App),
* a Mobile App (through Cordova),
* an Electron App,
...and
* benefit from a stellar experience provided by Quasar CLI, with HMR (Hot Module Reload)
* share the same base-code for all those modes
* benefit from the latest web recommended practices out of the box
* ability to write ES6 code
* benefit from Tree Shaking
* get your code optimized, minified, bundled in the best possible way
* ability to write SFC (Single File Component - for Vue)
...then go for the **Starter Kit** way:

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
