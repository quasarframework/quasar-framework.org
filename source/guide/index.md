title: Getting Started - Installation
---

**If you would like to learn what Quasar is all about and what it can do for you**, read the [Introduction to Quasar](/guide/introduction-to-quasar.html). Otherwise, let's get started by choosing how you'd like to use Quasar. There are three methods for using Quasar:

 * UMD/Standalone (embed into an existing project through CDN, progressive integration)
 * Development with Quasar CLI (**the premium developer experience, recommended**)
 * Vue CLI 3 plugin

Here's a comparison:

| Feature | UMD | Quasar CLI | Vue CLI 3 Plugin |
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

> If you are upgrading from previous Quasar versions, check the [Upgrade Guide](/guide/quasar-upgrade-guide.html).

## UMD / Standalone (uses CDN)
If you'd like to embed Quasar into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version. There is a helper UMD starter kit, which will show you how to get started and what CSS and JS tags to include into your project. While installing the UMD kit, the CLI will ask you some questions (what Quasar theme will you be using, what Quasar I18n to include, ...) and it will generate a simple HTML file that will demo how to use CDN to add Quasar:

```bash
# make sure you have @vue-cli (Vue CLI 3.0) globally installed
# Node.js >= 8.9.0 is required.

$ npm install -g vue-cli # or @vue/cli @vue/cli-init // recommended
# or:
$ yarn global add vue-cli # or @vue/cli @vue/cli-init

# then...
$ vue init quasarframework/quasar-starter-kit-umd <folder_name>
```

And you're done. Inspect the `index.html` file that was created in the new folder and learn how you can embed Quasar. You may want to repeat the step above to experiment with different setups based on the answers you give.

Now head on to read about [UMD/Standalone](/guide/embedding-quasar.html).

## Development with Quasar CLI (The best developer experience)
If you want to be able to build:
* a SPA (Single Page Application/Website),
* a SSR (Server-side Rendered App/Website),
* a PWA (Progressive Web App),
* a Mobile App (through Cordova),
* an Electron App,
...and
* benefit from from a faster developement workflow provided by the Quasar CLI, with HMR (Hot Module Reload)
* **share the same base-code for all those modes**
* benefit from the latest web recommended practices out of the box
* ability to write ES6 code
* benefit from Tree Shaking
* get your code optimized, minified, bundled in the best possible way
* ability to write SFC (Single File Component - for Vue)

...then go for the best developer experience:

First, we will need to install Quasar CLI. Make sure you have Node >=8 and NPM >=5 or Yarn installed on your machine. We'll also be installing Vue CLI, which is only used internally by Quasar for creating an initial Quasar application project. Both version 2 and 3 of Vue CLI will work for this.

```bash
# install vue-cli globally
$ npm install -g vue-cli # or @vue/cli @vue/cli-init // recommended
# or:
$ yarn global add vue-cli # or @vue/cli @vue/cli-init

# Node.js >= 8.9.0 is required.
$ npm install -g quasar-cli // recommended
# or:
$ yarn global add quasar-cli 
```

With Quasar CLI globally installed, we can now create a new project:
```bash
$ quasar init <folder_name>
```

Note that you don't need different projects, in order to build any one of the application options described above. This one project folder can seamlessly handle all of them.

To understand more about Quasar CLI, be sure to familiarize yourself [with the guide](/guide/quasar-cli.html). With this knowledge under your belt, you'll be able to take full advantage of all of Quasar CLI's many great features.

## Vue CLI 3 plugin
To work with Quasar via a Vue CLI plugin, you will need to make sure you have vue-cli 3.x.x installed globally. To make sure you have Vue CLI 3.0, use this command:

```
$ vue --version
```

You should see something like: 

```
$ vue --version
3.2.3
```

Should you have Vue CLI 2.x.x. installed, you'll need to uninstall it with:

```
$ npm uninstall -g vue-cli
# or: 
$ yarn global remove vue-cli
```
and then install Vue CLI 3.0 as follows: 

```
$ yarn global add @vue/cli
# or:
$ npm install -g @vue/cli // recommended
```

If you don't yet have a project created with vue-cli 3.x, then do so with:

```
$ vue create my-app
```

Navigate to the newly created project folder and add the cli plugin. Before installing it, make sure to commit your current changes should you wish to revert them later.

```
$ cd my-app
$ vue add quasar
```

The CLI will ask you if you want the plugin to replace some existing files. It is recommended that you do this, if you wish to have an example, so you can quickly develop your app.

Your Vue config (in package.json or vue.config.js file, depending on what you chose when you created your vue app) will also contain a `quasar` object. The most important property is `theme` (with possible values "mat" or "ios"), which you can later change, if you'd like.
