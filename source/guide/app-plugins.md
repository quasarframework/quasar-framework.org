title: App Plugins
---
A common use case for Quasar applications is to run code before the root Vue instance is instantiated.
Quasar provides a very elegant solution to that problem by allowing users to define so-called app plugins.

> **IMPORTANT**
> Do not mistake app plugins this with Quasar plugins, like ActionSheet, Dialog, Notify. These are something else entirely and they will be covered in [Components](/components) section.

In earlier Quasar versions, to run code before the root Vue instance was instantiated, you could alter the `/src/main.js` file and add any code you needed to execute.

There is one problem with this approach. With growing project size your `main.js` file most likely would get very cluttered and hard to maintain, which breaks with Quasars concept of encouraging developers to write maintainable and elegant cross-platform applications.

With app plugins, it is possible to split each of your dependency into a self-contained, easy to maintain the file.

## Anatomy of an app plugin

An app plugin is a simple JavaScript file which needs to export a function. Quasar will then call the exported function when it boots the application and additionally passes an object with the following properties to the function:

* `app` is the Object with which the root component gets instantiated by Vue
* `router` is the instance of Vue Router from 'src/router/index.js'
* `store` is the instance of Vuex from 'src/store/index.js' - **store only will be passed if your project uses vuex**
* `Vue` is same as if we do `import Vue from 'vue'` and it's there for convenience

## When to use app plugins

> **IMPORTANT**
> Please make sure you understand what problem app plugins solve and when it is appropriate to use them, to avoid applying them in cases where they are not needed.

App plugins fulfill one special purpose: they run code **before** the App's Vue root component is instantiated while giving you access to certain variables, which is required if you need to initialize a library, interfere with the router or add prototypes to the root instance.

### Examples of appropriate usage of app plugins
* Your Vue plugins requires instantiation of data that is added to the root instance - An example would be [vue-i18n](https://github.com/kazupon/vue-i18n/)
* You want to add something to the Vue prototype for convenient access - An example would be to add `Vue.$axios`
* You want to interfere with the router - An example would be to use `router.beforeEach` for authentication
* Configure aspects of libraries - An example would be to add a base URL to axios

### Examples of unneeded usage of app plugins
* Usage a plain JavaScript libraries like axios or lodash, you can simply import it where you intend to use this
* Make API requests - You probably want to do this inside your pages Vue component

## Usage of app plugins

The first step is always to generate a new plugin using Quasar CLI:

```bash
$ quasar new plugin <name>
```
Where `<name>` should be exchanged by a suitable name for your plugin.

This command creates a new file: `/src/plugins/<name>.js` with the following content:

```js
// import something here

// leave the export, even if you don't use it
export default ({ app, router, store, Vue }) => {
  // something to do
}
```

You can now add content to that file depending on what the intended use of your plugin is.
Do not forget that you default export needs to be a function.
Check [#Examples-of-common-plugins] for examples of common plugins.

The last step is to tell Quasar to use your new plugin. For this to happen you need to add the plugin in `/quasar.conf.js`

```js
plugins: [
  '<name>' // references /src/plugins/<name>.js
]
```

## Examples of common plugins

### axios

```js
import axios from 'axios'

export default ({ Vue }) => {
  // we add it to Vue prototype
  // so we can reference it in Vue files
  // without the need to import axios
  Vue.prototype.$axios = axios

  // Example: this.$axios will reference Axios now so you don't need stuff like vue-axios
}
```

### vue-i18n

```js
// we import the external package
import VueI18n from 'vue-i18n'

// let's say we have a file in /src/i18n containing the language pack
import messages from 'src/i18n'

export default ({ app, Vue }) => {
  // we tell Vue to use our Vue package:
  Vue.use(VueI18n)

  // Set i18n instance on app;
  // We inject it into root component by doing so;
  // new Vue({..., i18n: ... }).$mount(...)
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  })
}
```

### Router authentication

```js
export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here like calling an API endpoint
  })
}
```

## Accessing data from plugins
Sometimes you want to access data which you configure in your app plugin in files where you don't have access to the root Vue instance.

Fortunately, because app plugins are just normal JavaScript files you can add as many named export to your app plugin as you want.

Let's take the example of vue-i18n. Sometimes you want to translate strings inside your JavaScript files, but you can not access the root Vue instance.
To solve this you can export the i18n instance in your plugin and import it elsewhere.

Consider the following plugin file for vue-i18n:

```js
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  })

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  app.i18n = i18n
}

export { i18n }
```

In your JavaScript file, you'll be able to import the i18n instance like this

```js
import { i18n } from 'src/plugins/i18n'
```

## Special App Plugin: Boot
Every Quasar website/app is booted up after plugins have been loaded and executed. The last step is to call `new Vue()` and attach it to the DOM.

If for whatever reason, you need to control this final step and decide the specific moment when Vue kicks in, you can create a special Quasar plugin named "boot" (**requires Quasar v0.15.6+**).

> Remember to only use this plugin for eventually calling `new Vue(app)`. Don't use this for initializing any library you may have -- for that, use a regular app plugin.

```bash
# we create the boot plugin
$ quasar new plugin boot
 app:new Generated plugin: src/plugins/boot.js +0ms
 app:new Make sure to reference it in quasar.conf.js > plugins +2ms
```

We then add this plugin to app plugins list in `/quasar.conf.js`:
```
module.export = function (ctx) {
  return {
    plugin: [
      'boot'
    ],
    ...
  }
}
```

> **IMPORTANT**
> The name "boot" for your plugin has a special meaning to Quasar CLI. It runs this plugin after all other app initialization has been executed and right before kicking off Vue with `new Vue()`. By adding this plugin you are responsible for kicking off Vue yourself, as we'll see next.

We edit our new plugin (`/src/plugins/boot.js`):
```js
export default ({ app, Vue }) => {
  // do some logic here...

  // ... then, kick off our Quasar website/app:
  new Vue(app)
  // "app" has everything cooked in by Quasar CLI,
  // you don't need to inject it with anything at this point
}
```

> **IMPORTANT**
> Do not forget to have at least one decisional branch where you call `new Vue(app)` otherwise your app won't boot and you'll only see a blank page!
