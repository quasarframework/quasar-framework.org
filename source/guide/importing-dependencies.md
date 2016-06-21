title: Importing External Dependencies
---
Quasar easily allows you to import external dependencies from NPM. Here are the few steps to follow to achieve this:

1. NPM install your dependency.
  > It may be the case that the package you are installing also depends on other packages. NPM install them too, but ignore the ones already supplied by Quasar (see [Built-In Stack](/guide/built-in-stack.html)) so you won't duplicate them.

2. Configure `quasar.build.yml` (the [App Configuration file](/guide/quasar-app-configuration.html)) so Quasar will embed these dependencies.

  You are interested in `deps` property which features both the Javascript dependency files as well as the CSS ones.
  Take a look inside the `node_modules/[package_name]` folder and see what files to include for Quasar. The Javascript file is usually specified in `package.json` under the "main" property. Most packages have a `dist` folder featuring the files you need.

  > **IMPORTANT**
  > Do **not** include the file extension for your JS or CSS imports. For example specify *node_modules/vue-google-maps/vue-google-maps* instead of *node_modules/vue-google-maps/vue-google-maps.js*.

  > Depending on the build type (development or production), Quasar will embed, for example `vue-google-maps.js` or `vue-google-maps.min.js` (if this latter file exists). Remember not to end your import string with `.js` in `quasar.build.yml`. Same thing for CSS imports too.

  > The order in which dependencies are specified matters!

3. Use your dependency. Check out your dependency's website and look on how to use the dependency as "standalone", meaning look for the global Objects that they inject.

## Study Case

Let's embed `vue-google-maps` as a study case.

First we npm install it and see it depends on Q, Lodash and Vue. Vue is already supplied, so we only npm install Q and Lodash.

Then we take a look into `node_modules/lodash` and `node_modules/q` folders to see what to tell Quasar to embed in `quasar.build.yml`.

``` yaml
deps:
  js: [
    'node_modules/q/q',
    'node_modules/lodash/lodash',
    'node_modules/vue-google-maps/index'
    ]
```

Now all we have to do is use our new dependency. Looking on their website for a "standalone" use case, we see that the package exports `VueGoogleMap` global.

``` js
VueGoogleMap.load({
  'key': 'YOUR_API_KEY',
});

// this package requires us to declare the components
// we are going to use from it, so here it is:
Vue.component('google-map', VueGoogleMap.Map);
```

Now be creative on where to include the code above.

#### Option A - Global Availability
If multiple Pages use the package, then include it in `src/index.html` under the `quasar.boot()` call, right before `quasar.start.app()`, like this:

```js
quasar.boot(function() {
  VueGoogleMap.load({
    'key': 'YOUR_API_KEY',
  });
  Vue.component('google-map', VueGoogleMap.Map);

  quasar.start.app();
});
```

Or you can add a new file, let's say `js/app.js`:
``` js
VueGoogleMap.load({
  'key': 'YOUR_API_KEY',
});
Vue.component('google-map', VueGoogleMap.Map);

quasar.start.app();
```
and in your `src/index.html` you'll write:
``` js
quasar.boot(function() {
  quasar.require.script('js/app');
});
```

Read more about [Quasar Starting Point](/guide/quasar-app-starting-point.html).

#### Option B - Local Availability
If only one Page uses it, then embed the code in the script file of your Page (`script.*page-name*.js`), before defining `module.exports`.

Or you can specify `components` property in your Page VueModel declaration:

``` js
...
module.exports = {
  ...,
  components: {
    'google-map': VueGoogleMap.Map
  }
};
```
