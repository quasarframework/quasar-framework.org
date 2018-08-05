title: Getting Started - Installation
---

**If you want to learn what Quasar is and what it can do for you**, read the [Introduction to Quasar](/guide/introduction-to-quasar.html). Otherwise, let's get started and choose how you want to use Quasar:
 * UMD/Standalone (embed into an existing project through CDN, progressive integration)
 * Starter Kit handled by Quasar CLI (**the premium experience, recommended**)
 * Vue CLI 3 plugin

Here's a comparison:

| Feature | UMD | Starter Kit | Vue CLI 3 Plugin |
| --- | --- | --- | --- |
| Ability to embed into an existing project | **Yes** | - | **Yes, if it is Vue CLI app** |
| Progressive integration of Quasar | **Yes** | - | - |
| Ability to serve Quasar from CDN | **Yes** | - | - |
| Build SPA, PWA | **Yes** | **Yes** | **Yes** |
| Build SSR (+ optional PWA client takeover) | - | **Yes** | ?? |
| Build Mobile Apps, Electron Apps | **Yes** | **Yes** | - |
| Dynamic RTL support for Quasar components | **Yes** | **Yes** | **Yes** |
| Generating your own website/app RTL equivalent CSS rules automatically by Quasar | - | **Yes** | **Yes** |
| Take advantage of Quasar CLI for a stellar developer experience | - | **Yes** | - |
| Tree Shaking | - | **Yes** | **Yes** |
| SFC (Single File Component - for Vue) | - | **Yes** | **Yes** |
| Advanced configuration through dynamic quasar.conf.js | - | **Yes** | - |
| Unit & end to end testing | - | **Not yet** | **Yes** |

> If you are upgrading from previous Quasar versions, check [Upgrade Guide](/guide/quasar-upgrade-guide.html).

## UMD / Standalone (uses CDN)
If you want to embed Quasar into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version. There a helper UMD starter kit which will show you how to get started and what CSS and JS tags to include into your project. It will ask you some questions (what Quasar theme will you be using, what Quasar I18n to include, ...) and it will generate a simple HTML file that will demo on how to use CDN to add Quasar:

```bash
# make sure you have vue-cli globally installed
# Node.js >= 8.9.0 is required.

$ yarn global add vue-cli
# or:
$ npm install -g vue-cli

# then...
$ vue init quasarframework/quasar-starter-kit-umd <folder_name>
```

And you're done. Inspect `index.html` file that was created in the new folder and learn how you can embed Quasar. You may want to repeat the step above to experiment with different setups based on the answers you give out.

Now head on to read about [UMD/Standalone](/guide/embedding-quasar.html).

## Starter Kit (Recommended)
If you want to be able to build:
* a SPA (Single Page Application/Website),
* a SSR (Server-side Rendered App/Website),
* a PWA (Progressive Web App),
* a Mobile App (through Cordova),
* an Electron App,
...and
* benefit from a stellar experience provided by Quasar CLI, with HMR (Hot Module Reload)
* **share the same base-code for all those modes**
* benefit from the latest web recommended practices out of the box
* ability to write ES6 code
* benefit from Tree Shaking
* get your code optimized, minified, bundled in the best possible way
* ability to write SFC (Single File Component - for Vue)
...then go for the **Starter Kit** way:

First, we install Quasar CLI. Make sure you have Node >=8 and NPM >=5 installed on your machine.

```bash
# make sure you have vue-cli globally installed
# see https://cli.vuejs.org/guide/installation.html for using latest Vue CLI @vue/cli
$ yarn global add vue-cli
# or:
$ npm install -g vue-cli

# Node.js >= 8.9.0 is required.
$ yarn global add quasar-cli
# or:
$ npm install -g quasar-cli
```

Then we create a project folder with Quasar CLI:
```bash
$ quasar init <folder_name>
```

Note that you don't need separate starter kits if you want to build any of the options described above. This one can seamlessly handle all of them.

Now head on to read about [Main Starter Kit](/guide/app-installation.html) and also familiarize yourself with the [Quasar CLI](/guide/quasar-cli.html).

## Vue CLI 3 plugin
Make sure you have vue-cli 3.x.x:
Note the Vue CLI package name has changed from vue-cli to @vue/cli
If you have vue-cli installed, unistall it using npm uninstall -g vue-cli before installing. npm install -g @vue/cli 
Please see - https://cli.vuejs.org/guide/installation.html
```
vue --version
```

If you don't have a project created with vue-cli 3.x yet:

```
vue create my-app
```

Navigate to the newly created project folder and add the cli plugin. Before installing it, make sure to commit your current changes should you wish to revert them later.

```
cd my-app
vue add quasar
```

It will ask you if you want the plugin to replace some existing files. It is recommended that you do it if you wish to have an example so you can quickly develop your app.

Your Vue config (in package.json or vue.config.js file, depending on what you chose when you created your vue app) will also contain a `quasar` Object. Most important property is `theme` (with possible values "mat" or "ios"), which you can later change should you want.
