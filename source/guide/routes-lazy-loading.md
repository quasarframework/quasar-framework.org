title: Routes Lazy Loading
---

Quasar starter kits are lazy loading all your website/app's routes by default in order to save bytes sent on the wire when the app is big. Rather than loading ALL routes at start, they are loaded on demand as user navigates to different routes.

When building, you will notice a lot of .js files being generated. One for each route being lazy-loaded. These are called Webpack "chunks".

## Using lazy loading
Take a look at `/src/router.js`. Notice route components are declared using the `load()` function, which does the code splitting.

```js
// sections from /src/router.js

function load (component) {
  // '@' is aliased to src/components
  return () => System.import(`@/${component}.vue`)
}

export default new VueRouter({
  // ...,
  routes: [
    { path: '/', component: load('Hello') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
```

> **IMPORTANT**
> Code splitting is a Webpack feature. Lazy loading a file from a folder will force Webpack to generate a chunk for each file in that folder, regardless of it ever being loaded or not at runtime.
> <br>The explanation is simple: Webpack cannot know at build time which files from that folder will be requested at runtime, so it must ensure that all possibilities work.
> <br>However, Webpack will not generate chunks for subfolders of the specified folder. Use this information when structuring your `/src/components` folder to speed up build time.

## Avoiding lazy loading
Lazy loading is very efficient for big websites/apps with lots of routes/pages. However, the benefits of lazy loading routes when building a small website/app fade away. Making an extra HTTP request for loading a 2-3KB page vue file is more costly than integrating the file in the main chunk.

Let's learn how to avoid lazy loading a vue file. Take a look again at `/src/router.js`. Notice the `load()` function which does code splitting. All you have to do to avoid generating chunks is not use it, and instead import it directly:

```js
// Avoiding generating chunk

import MyPage from '...path.to.vue.file'

// ...

export default new VueRouter({
  // ....,

  routes: [
    { path: '/', component: MyPage },
    // ...
  ]
})
```
