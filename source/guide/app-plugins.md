title: App Plugins
---
Quasar allows you to define Javascript App plugins to be run before instantiating the root Vue application component. **This is especially helpful when using your own libraries or external modules**.

> **IMPORTANT**
> **Do not mistake app plugins this with Quasar plugins, like ActionSheet, Dialog, Notify. These are something else entirely and they will be covered in [Components](/components) section**.

Quasar pre-v0.15 developers were used to having a `/src/main.js` file where they would import and configure external modules/packages. The problem with this is that main.js becomes very cluttered, hard to read and reason with.

Quasar's solution to this problem is the `/src/plugins` folder. Each file created here should handle one external dependency.

## Adding a App Plugin
Let's learn by having some examples:

### Axios
Let's say that we want to include Axios package. First, we npm install it:

```bash
$ npm install --save axios
```

Then we use Quasar CLI to create a app plugin:

```bash
$ quasar new plugin axios
 app:new Generated plugin: src/plugins/axios.js +0ms
 app:new Make sure to reference it in quasar.conf.js > plugins +2ms
```
This command creates a new file: `/src/plugins/axios.js` with the following content:

```js
// import something here

// leave the export, even if you don't use it
export default ({ app, router, store, Vue }) => {
  // something to do
}
```

Now let's edit this file so it can initialize Axios:
```
import axios from 'axios'

export default ({ Vue }) => {
  // we add it to Vue prototype
  // so we can reference it in Vue files
  // without the need to import axios
  Vue.prototype.$axios = axios

  // Example: this.$axios will reference Axios now
}
```

Last step is to reference this file in `/quasar.conf.js` so Quasar picks it up:
```
plugins: [
  'axios' // references /src/plugins/axios.js
]
```

Easy right? We don't even need vue-axios now, which basically does the same.

### vue-i18n
```bash
# we npm install it
$ npm install --save vue-i18n

# we create a app plugin named i18n for it
$ quasar new plugin i18n
 app:new Generated plugin: src/plugins/i18n.js +0ms
 app:new Make sure to reference it in quasar.conf.js > plugins +2ms
```
We now edit `/src/plugins/i18n.js`:
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
We've created the plugin file, now it's time to tell Quasar to use it. Edit `/quasar.conf.js`:
```js
plugins: [
  'i18n' // referencing '/src/plugins/i18n.js'
]
```

## Plugin File
Please take note of some things:
* Plugin files are run **before** the App's Vue root component is instantiated
* We are exporting a function. This is required, regardless of whether you do something in it or not.
* Import packages outside of the exporting function and handle them within the exporting function. Outside of the exporting function you shouldn't write anything but the imports.
* The default exporting function takes one Object as parameter and this Object has some properties: app, router, store (if using Vuex), Vue:
  ```js
  export default ({ app, router, store, Vue }) => {
  ```
  * "app" is the Object with which the root component gets instantiated by Vue -- you can use it to inject things into it; some vue packages need this, like vue-i18n;
  * "router" is the instance of Vue Router from 'src/router/index.js'
  * "Vue" is same as if we do `import Vue from 'vue'` and it's there for convenience

## Special "Boot" App Plugin
Every Quasar website/app is booted up after plugins have been loaded and executed. Last step is to call `new Vue()` and attach it to the DOM.

If, for whatever reason, you need to control this final step and decide the specific moment when Vue kicks in, you can create a special Quasar plugin named "boot".

> Remember to only use this plugin for eventually calling `new Vue(app)`. Don't use this for initializating any library you may have -- for that, use a regular app plugin.

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
> The name "boot" for your plugin has meaning to Quasar CLI. It runs this plugin after all other app initialization has been executed and right before kicking off Vue with `new Vue()`. By adding this plugin you are responsible of kicking off Vue yourself, as we'll see next.

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
