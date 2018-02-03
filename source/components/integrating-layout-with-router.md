title: Integrating Layout with Router
---
You can benefit from Vue Router's capabilities while structuring your routes with a Quasar Layout. The information below is just a recommendation and not mandatory to follow. Quasar allows you full freedom. Take the lines below only as an example.

[Layout](/components/layout.html) is the component used to encapsulate pages, so that multiple pages will share the same header, left / right side and so on. However, you can also configure per page header/footer/left or right side, but they all must be children of QLayout component. In order to understand how this works, you need a little bit of reading on [Vue Router nested routes](http://router.vuejs.org/en/essentials/nested-routes.html).

## Example
To make it more clear, let's take an example. We have one layout ('user') and two pages ('user-feed' and 'user-profile'). We want to configure the website/app routes like this: `/user/feed` and `/user/profile`.

First, we create the layout and its pages:
```bash
$ quasar new layout user
 app:new Generated layout: src/layouts/user.vue +0ms
 app:new Make sure to reference it in src/router/routes.js +2ms

$ quasar new page user-feed user-profile
 app:new Generated page: src/pages/user-feed.vue +0ms
 app:new Make sure to reference it in src/router/routes.js +2ms

 app:new Generated page: src/pages/user-profile.vue +1ms
 app:new Make sure to reference it in src/router/routes.js +0ms
```

The commands above create the following folder structure:
```bash
src/
├── layouts
│   └── user.vue         # our QLayout definition
└── pages
    ├── user-feed.vue    # page for /user/feed route
    └── user-profile.vue # page for /user/profile route
```

Our routes configuration (`/src/router/routes.js`) should look like this:
```js
export default [
  {
    path: '/user',

    // We point it to our component
    // where we defined our QLayout
    component: () => import('layouts/user'),

    // Now we define the sub-routes.
    // These are getting injected into
    // layout (from above) automatically
    // by using <router-view> placeholder
    // (need to specify it in layout)
    children: [
      {
        path: 'feed',
        component: () => import('pages/user-feed')
      },
      {
        path: 'profile',
        component: () => import('pages/user-profile')
      }
    ]
  }
]
```

Please notice a few things:
* We are using lazy loading of layouts and pages (`() => import(<path>)`). If your website/app is small, then you can skip the lazy loading benefits as they could add more overhead than what it's worth:
  ```js
  import UserLayout from 'layouts/user'
  import UserFeed from 'pages/user-feed'
  import UserProfile from 'pages/user-profile'

  export default [
    path: '/user',
    component: UserLayout,
    children: [
      { path: 'feed', component: UserFeed },
      { path: 'profile', component: UserProfile }
    ]
  ]
  ```
* Quasar provides some out of the box Webpack aliases ('layouts' & 'pages'), which are used in the above examples.
* Pages of a Layout are declared as children of it in the Vue Router configuration so that `<router-view/>` will know what page component to inject. Remember to always use this Vue component whenever your Layout has pages attached to it.

  ```html
  <q-layout>
    ...
    <q-page-container>
      <!--
        This is where your pages will get
        injected into your Layout
      -->
      <router-view />
    </q-page-container>
    ...
  </q-layout>
  ```

> Read all [Vue Router](http://router.vuejs.org/) documentation to fully understand the example above and how to configure the router and its routes for your app.
