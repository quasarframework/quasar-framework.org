title: App Data Pre-Fetch and State
---
The PreFetch is a feature available in Quasar CLI that allows a way for the components picked up by Vue Router (defined in `/src/router/routes.js`) to:
* pre-fetch data
* validate the route
* redirect to another route should some conditions are not met (like user should be logged in)
* can help in initializing the Store state

All the above will run before the actual route component gets to be rendered.

**It is designed to work with all Quasar modes** (SPA, PWA, SSR, Cordova, Electron), but it is especially useful for SSR builds.

## Installation
```js
// quasar.conf.js
return {
  preFetch: true
}
```

> When you use it exclusively to pre-fetch data, you are required to use a Vuex Store, so make sure your project folder has the `/src/store` folder when you create your project, otherwise generate a new project and copy the store folder contents to your current project.

## How It Helps SSR Mode
This feature is especially useful for the SSR mode (but not limited to it only). During SSR, we are essentially rendering a "snapshot" of our app, so if the app relies on some asynchronous data, **these data need to be pre-fetched and resolved before we start the rendering process**.

Another concern is that on the client, the same data needs to be available before we mount the client side app - otherwise the client app would render using different state and the hydration would fail.

To address this, the fetched data needs to live outside the view components, in a dedicated data store, or a "state container". On the server, we can pre-fetch and fill data into the store before rendering. The client-side store will directly pick up the server state before we mount the app.

## How It Works
The `preFetch` hook (described in next sections) is determined by the route visited - which also determines what components are rendered. In fact, the data needed for a given route is also the data needed by the components rendered at that route. **So it is natural (and also required) to place the hook logic inside route components.** This includes `/src/App.vue`, which in this case will run only once at the app bootup.

// TODO

## Usage
The hook is defined as a custom static function called `preFetch` on our route components. Note that because this function will be called before the components are instantiated, it doesn't have access to `this`.

``` html
<!-- some .vue component used as route -->
<template>
  <div>{{ item.title }}</div>
</template>

<script>
export default {
  // our hook here
  preFetch ({ store, currentRoute, redirect, ssrContext }) {
    // fetch data, validate route and optionally redirect to URL etc...

    // ssrContext is available only server-side in SSR mode

    // No access to "this" here as preFetch() is called before
    // the component gets instantiated.

    // Return a Promise if you are running an async job
    // Example:
    return store.dispatch('fetchItem', currentRoute.params.id)
  },

  computed: {
    // display the item from store state.
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>
```

### Redirecting Example
Example of redirecting the user under some circumstances, like when it tries to access a page that only an authenticated user should see.

```js
// We assume here we already wrote the authentication logic
// in the Vuex Store, so take as a high-level example only.
preFetch ({ store, redirect }) {
  if (!store.state.authenticated) {
    redirect('/login')
  }
}
```

Please note that the `redirect()` function takes an URL as parameter, so do not mistake this with a Vue Router route definition.

If `route(false)` is called, it aborts the current route navigation. Note that if you use it like this in `src/App.vue` it will halt the app bootup, which is undesirable.

### Using preFetch to Initialize the Store
The `preFetch` hook runs only once, when the app boots up, so you can use this opportunity to initialize the Vuex Store here.

```js
// App.vue
export default {
  // ...
  preFetch ({ store }) {
    // initialize something in store here
  }
}
```
