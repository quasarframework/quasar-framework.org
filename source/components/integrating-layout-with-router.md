title: Integrating Layout with Router
---
You can benefit from Vue Router's capabilities while structuring your routes with a Quasar Layout. The information below is just a recommendation and not a mandatory folder/files structure to follow. Quasar allows you full freedom. Take the lines below only as an example.

As you will read in the next documentation pages, Layout is the component used to encapsulate pages, so that multiple pages will share the same header, left / right side and so on. In order to understand how this works, you need a little bit of reading on [Vue Router nested routes](http://router.vuejs.org/en/essentials/nested-routes.html).

## Example
To make it more clear, let's take an example. We have one layout ('user-layout') and two pages ('user-feed' and 'user-profile'). We want to configure the website/app routes like this: `/user/feed` and `/user/profile`.

Our router configuration (usually in `/src/router.js`) will look like this:
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (component) {
  return () => System.import(`components/${component}.vue`)
}

const routes = [
  {
    path: '/user',

    // We point it to our component
    // where we defined our QLayout
    component: load('user/layout'),

    // Now we define the sub-routes.
    // These are getting injected into
    // layout (from above) automatically
    // by using <router-view> placeholder
    // (need to specify it in layout)
    children: [
      {
        path: 'feed',
        component: load('user/feed')
      },
      {
        path: 'profile',
        component: load('user/profile')
      }
    ]
  }
]

export default new VueRoute({
  ...,
  routes // our routes
})
```

The above routes look for a folder called 'user' in '/src/components'. Feel free to tweak `load()` function to your liking. The file structure needed for vue components of your app for the configuration above is:
```bash
src/
└── components/
    └── user
        ├── layout.vue   # our vue component where we use QLayout
        ├── feed.vue     # our user feed page
        └── profile.vue  # our user profile page
```

Pages get injected into QLayout where `<router-view>` component is specified, replacing it. Remember to always use this Vue component whenever your Layout has pages attached to it.

```html
<q-layout>
  ...
  <!--
    This is where your pages will get
    injected into your Layout
  -->
  <router-view />
  ...
</q-layout>
```

> Read all [Vue Router](http://router.vuejs.org/) documentation to fully understand the example above and how to configure the router and its routes for your app.
