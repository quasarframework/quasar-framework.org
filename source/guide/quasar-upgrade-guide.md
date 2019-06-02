title: Upgrade Guide
---
We'll cover how to upgrade to a new Quasar version in your project, both for [UMD](/guide/embedding-quasar.html) and using the project initialization feature of the [CLI](/guide/app-installation.html). Then we'll go on to discuss how you can migrate v0.15 to v0.16 and your pre v0.15 project to v0.15+.

## Upgrading to a newer Quasar version
This applies when upgrading from v0.15+ to a newer Quasar version, including v0.16 and v0.17.

> **IMPORTANT**
> **Quasar v0.15+ requires Node.js version 8.9.0 or greater**

### UMD
Simply replace the version string in all the CSS and JS tags that refer to Quasar to the newer version.

### The CLI
As you may have noticed, the only dependency in your project (unless you've also installed a linter or your own deps) is `quasar-cli`. All you need is to update this dependency.

```bash
$ yarn add --dev quasar-cli@latest
# or:
$ npm install --save-dev quasar-cli@latest
```

Quasar CLI is installed both globally and locally. When you issue a Quasar command, the global installation defers to the project locally installed Quasar CLI. This allows you to skip writing npm scripts in your package.json (for Quasar commands), and also it allows you to run different Quasar versions in multiple projects.

Watch for Quasar CLI version. It's not the same thing as Quasar version. Type `$ quasar info`. All you need to know is that the major and minor part of Quasar CLI version matches Quasar version. So for example installing latest Quasar CLI v0.15.x will ensure you are using latest Quasar v0.15.x. While working on v0.15.x, no breaking changes will occur, so you are safe (& recommended) to upgrade to latest Quasar CLI as it's released.

> **Caveat**
> Sometimes after you npm install a package, or even update current packages, might screw things up. You'll get errors that some packages are missing and you need to install them. In such cases, delete node_modules and package-lock.json and npm install again.
> Same goes for Yarn. In case you get errors, delete node_modules and yarn.lock then install again.

## Upgrading v0.16 to v0.17
There’s only one breaking change, regarding QLayoutDrawer `mini-width` prop. It is now a Number (instead of String!) defining width in pixels (default: 60).

> v0.17 introduces the SSR mode for Quasar CLI, and the following changes will be required only if you build for SSR too. Otherwise, you can simply upgrade the `quasar-cli` dependency and benefit from the latest goodies.

A minor change that you should be aware of is that we are deprecating the special `boot` app plugin and it will be removed in the next version in favor of using the [PreFetch Feature](/guide/app-prefetch-feature.html) in `src/App.vue` and calling `redirect(false)` in case you want to abort the initial app render. For the time being it is still available, but you should migrate as soon as possible.

### SSR mode (ONLY)
Like mentioned above, these changes will be required by the Quasar CLI only when you build with SSR mode. After doing these changes you’ll still be able to build the other modes (SPA/PWA/Cordova/Electron) too.

##### src/router/index.js
You need to have a default export set to "function ({ store })" which returns a new instance of Router instead of default exporting the Router instance itself.

```js
// OLD WAY
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import routes from './routes'
  Vue.use(VueRouter)

  // in the new way, we'll wrap the instantiation into:
  // export default function ({ store }) --> store is optional
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,
    // Leave these as they are and change from quasar.conf.js instead!
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  })

  // in the new way, this will be no more
  export default Router

// NEW WAY
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import routes from './routes'
  Vue.use(VueRouter)

  // DO NOT import the store here as you will receive it as
  // parameter in the default exported function:

  export default function (/* { store } */) {
    // IMPORTANT! Instantiate Router inside this function

    const Router = new VueRouter({
      scrollBehavior: () => ({ y: 0 }),
      routes,
      // Leave these as they are and change from quasar.conf.js instead!
      mode: process.env.VUE_ROUTER_MODE,
      base: process.env.VUE_ROUTER_BASE,
    })

    return Router
  }
```

##### src/store/index.js
You need to have a default export set to "function ()" which returns a new instance of Vuex Store instead of default exporting the Store instance itself.

Some of you might need the Router instance on the Store. It is accessible through `this.$router` inside your actions, mutations, etc.

```js
// OLD WAY
  import Vue from 'vue'
  import Vuex from 'vuex'
  import example from './module-example'
  Vue.use(Vuex)

  // in the new way, we'll wrap the instantiation into:
  // export default function ()
  const store = new Vuex.Store({
    modules: {
      example
    }
  })

  // in the new way, this will be no more
  export default store

// NEW WAY
  import Vue from 'vue'
  import Vuex from 'vuex'
  import example from './module-example'
  Vue.use(Vuex)

  export default function () {
    // IMPORTANT! Instantiate Store inside this function

    const Store = new Vuex.Store({
      modules: {
        example
      }
    })

    return Store
  }
```

Also, if you want to be able to access the Router instance from vuex actions, mutations, etc, you need to make some simple changes (in all of them):

```js
// OLD WAY:
export const someAction = (context) => { ... }

// NEW WAY:
export function someAction (context) {
  // now we have access to:
  this.$router
}
```

## Upgrading v0.15 to v0.16
The difference between Quasar v0.15.x and v0.16 is minimal. No big breaking changes as you can see below. The only reason for bumping Quasar's version is to maintain consistency (same major + minor version) with Quasar CLI (which got an important update: webpack 4, babel 7, Workbox, electron-builder support, ionicons v4 and many more).

Upgrading from v0.15.x should be seamless if you are using Quasar CLI -- which will guide you to do some minor changes to your project folder. Note that Ionicons v4 has breaking changes, so if you are using it in your project, then you need to update each such icon to its new name.

If you face any problems, there is probably something conflicting in your npm modules. It is either babel, webpack or eslint. The console messages will tell you more about what is wrong.

> **Remember you'll be using Webpack 4, so all your webpack plugins must be compatible with it**. For example, you need to upgrade to a newer `eslint-loader`, `babel-eslint` etc package if you already have it in your package.json as dev dependency.

If you're using ESLint, make sure you have these in your package.json (minimum version required):
```json
"babel-eslint": "^8.2.1",
"eslint": "^4.18.2",
"eslint-config-standard": "^11.0.0",
"eslint-friendly-formatter": "^4.0.1",
"eslint-loader": "^2.0.0",
"eslint-plugin-import": "^2.9.0",
"eslint-plugin-node": "^6.0.1",
"eslint-plugin-promise": "^3.7.0",
"eslint-plugin-standard": "^3.0.1",
"eslint-plugin-vue": "^4.3.0",
```

If you are seeing babel issues when you run `quasar dev`, then you have probably installed a package that is using babel-core instead of @babel/core - such as `cypress-vue-unit-test`. To find out which one it is, run: `npm ls babel-core` and then remove the offending source.

```bash
# cd into project folder
$ rm yarn.lock                       # or: package-lock.json (if installed through npm)
$ rm -rf node_modules/
$ npm install --global @quasar/cli@latest
$ yarn add --dev quasar-cli@latest   # or: npm install --save-dev quasar-cli@latest
$ yarn                               # or: npm install
```

##### Breaking Changes:
* QIcon: removed "mat" & "ios" props for performance reasons (use `:name="$q.theme === 'mat' ? val : otherVal"` instead)
* Removed utils > dom > viewport() method (use window.innerHeight/innerWidth instead)
* Updated Quasar ionicons set to Ionicons v4 -- compatible with quasar-extras@2.0
* [Web Workers break Upstream Hot Module Reload HMR] (https://github.com/webpack/webpack/issues/6642)
* [Web Workers require update to webpack.cfg] (/guide/app-quasar.conf.js.html) for quasar.conf.js

## Upgrading pre v0.15 to Quasar v0.15+
There's been A LOT of work done for v0.15. The Quasar CLI has been rewritten from scratch to allow for a stellar development experience (Mobile App developers and Electron will fall in love with it!). Only one CLI initialized project is required in order to handle websites, PWAs, Mobile Apps and Electron Apps. Building any of those is a matter of just adding a parameter to the dev/build command.

**Furthermore, you can now use an UMD/standalone version of Quasar to embed in an existing project. No build step is required.**

Take some time to read all "Guide" pages once again. It will help you understand the true power of Quasar v0.15+ and what you can do with it.

So, what is new and what has changed? Everything has been polished. The full list of enhancements and new features is exhausting. We'll try to cover the major parts only. This is just a guide to get you started so that you know where to look in docs for things that have changed.

### First step - when using the CLI
First we make sure we update the globally installed Quasar version (needs to be at least v0.15). Then we create a new project folder:

```bash
# remove old quasar-cli package if you have it
$ npm uninstall -g quasar-cli

# install the new one
$ npm install -g @quasar/cli
```

Then we create a project folder with Quasar CLI:
```bash
$ quasar create <folder_name> -b v0.16
```

Observe the new [project structure](/guide/app-directory-structure.html). Start to port out files to the new project folder, taking into account the far superior structure. **Using the new project initialization feature will allow you to take advantage of future seamless upgrades!** In any case, do not simply copy your `/src` folder over to the newly initialized project folder.

### Build configuration no longer required
You'll notice a newly initialized project doesn't provide a `/build` or `/config` folders. They are no longer required. Everything can be easily configured from `/quasar.conf.js` now. You don't need to know Webpack. [More Info](/guide/app-quasar.conf.js.html).

### No main.js?
Yes. It's no longer there because you don't need it anymore. For initialization code and importing libraries into your website/app, read about [App Plugins](/guide/app-plugins.html).

### Importing Components/Directives/etc
You're no longer required to import Quasar components and directives anywhere in your app. Simply configuring `/quasar.conf.js` in `framework` Object will suffice. [More Info](/guide/app-quasar.conf.js.html).

### Quasar Plugins?
Yes, this refers to Action Sheet, Notify (replacement of Toast and Alert), LocalStorage/SessionStorage and so on. They are available globally or under the Vue `$q` Object injection, and need to be specified in `/quasar.conf.js > framework > plugins` in order for them to be available.

### Revamps
* Typography
* Flex CSS gutter classes
* QLayout & co. You'll love the new features! Be sure to check this out. Major improvements in syntax and flexibility. Some breaking changes, like slots no longer being used.
* QBtn (new features!)
* QToolbar (small update regarding buttons)
* QBreadcrumbs (powerful component instead of just CSS)
* QPagination (major improvements)
* QCollapsible (new powerful features!)
* QTable (replacing QDataTable -- full customization now!)
* Lists & List Items -- more options, better control, "dark" theme
* QTree (the most advanced you'll ever see and need!)
* ActionSheet (now as a Quasar Plugin & QActionSheet component too! -- has new features too)
* Dialog (now as a Quasar Plugin & QDialog component too for unlimited flexibility! -- has new features too)
* QModal - Easier to use than ever! Now with full v-model support.
* QPopover & QTooltip - new animation, ability to close it without the need of a Vue reference (through `v-close-overlay` directive), full support for v-model now
* Loading (now as a Quasar Plugin)
* QCarousel - Easier to use. Fully customizable!
* Transitions - No need for QTransition anymore! Minimum overhead, better performance.
* QAlert - new features
* QChat - new features
* TouchSwipe, TouchHold and TouchPan - Much better implementation, more control. Read about these directive's modifiers.
* AppFullscreen & AppVisibility - Now as Quasar Plugins, with reactive state properties that can be used in Vue watchers
* QUploader - new features & design

Also notice QInlineDatetime has been renamed to QDatetimePicker.

### New Components or Features
* [Spacing](/components/spacing.html) CSS classes
* [QTable](/components/datatable.html) - It's on the Revamps list too, but it sure deserves a place here too. Prepare for next level Data Tables, now fully customizable! Check out the demo too.
* [QEditor](/components/editor---wysiwyg.html) - Quasar's own WYSIWYG approach! This alone would deserve its own section.
* [Notify](/components/notify.html) - A merge between Toast and Alert, with flexible positioning and awesome animations.
* [QColor](/components/color-input.html) - Color Picker!
* New button types: [QBtnGroup](/components/button-group.html) and [QBtnDropdown](/components/dropdown-button.html)
* [QBtnToggle](/components/button-toggle.html) - A radio-like component, but with buttons

### I18n for Quasar Components
Be sure to check out the [Internationalization](/components/internationalization.html) for Quasar Components.

### Icon Packs
You can now tell Quasar to use one of Fontawesome, Ionicons, MDI or Material Icons for its components. You are no longer required to include Material Icons. You can use any of these packs as default.

Also, small change for Fontawesome icons:
```html
<!-- pre v0.15 -->
<q-icon name="fa-paypal fab" />

<!-- v0.15+ -->
<!-- Copy paste fontawesome icon class as it's in fontawesome docs now -->
<q-icon name="fab fa-paypal" />
```

### Vue Prototype Injections
You can use `$q` injection for convenience, accessing Quasar Theme, Quasar I18n, Quasar Platform, and many more. Quasar Plugins add functionality to it. Read [doc page](/components/vue-prototype-injections.html), especially if you build Cordova or Electron apps.

### What has been dropped?
* Global Event Bus (Events) -- no longer needed. Use Vue root component events instead. [More Info](/components/global-event-bus.html)
* QFixedPosition -- now replaced by a more powerful QPageSticky
* QSideLink -- no longer required! Simply use a QItem or whatever component you want and bind an `@click="$router.push(...)"` to it.
* Alert and Toast as methods. They've been merged into [Notify](/components/notify.html).
* HTML Table. You can however check code from v0.14 and embed it yourself into your app.
* Image Gallery - no longer needed. The new QCarousel is so powerful that you'll immediately see the benefit of switching to it.
* QTransition - no longer required. Simply use Vue's `<transition>` (or `<transition-group>`) instead. [More Info](/components/transition.html)
* QDatetimeRange - it's so easy to simply write two QDatetime side by side that this component is simply not required anymore; this allows you full flexibility too.

### New Layout
The following upgrade guide for [QLayout](/components/layout.html) barely scratches the surface, but it's a starting point.

```html
<!-- v0.14 -->
<q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
  <!-- Header -->
  <q-toolbar slot="header">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Layout Header
      <span slot="subtitle">Optional subtitle</span>
    </q-toolbar-title>
    <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="menu" />
    </q-btn>
  </q-toolbar>

  <!-- Navigation -->
  <q-tabs slot="navigation">
    <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
    <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
    <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
    <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
  </q-tabs>

  <!-- Left Side Panel -->
  <div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-side-link item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-side-link>
    </q-list>
  </div>

  <!-- Right Side Panel -->
  <div slot="right">
    Right Side of Layout
  </div>

  <!-- sub-routes get injected here: -->
  <router-view />

  <!-- Footer -->
  <q-toolbar slot="footer">
    <q-toolbar-title>
      Layout Footer
    </q-toolbar-title>
  </q-toolbar>
</q-layout>
```

We upgrade it to v0.15+. Notice that in order for us to place navigation tabs on header (for Material) and on Footer (for iOS), we also write a NavTabs component. Notice no slots, no QSideLink, "flat round dense" buttons, v-model on left/right drawers, QLayout* components:
```html
<!-- layout component -->

<q-layout ref="layout" view="hHr LpR lFf">
  <!-- Header -->
  <q-layout-header>
    <q-toolbar>
      <q-btn flat round dense icon="menu" @click="leftSide = !leftSide" />
      <q-toolbar-title>
        Layout Header
        <span slot="subtitle">Optional subtitle</span>
      </q-toolbar-title>
      <q-btn flat round dense icon="menu" @click="rightSide = !rightSide" />

    </q-toolbar>

    <!-- Navigation for Material theme -->
    <nav-tabs v-if="$q.theme === 'mat'" />
  </q-layout-header>

  <!-- Left Side Panel -->
  <q-layout-drawer v-model="leftSide" side="left">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
    </q-list>
  </q-layout-drawer>

  <!-- Right Side Panel -->
  <q-layout-drawer v-model="rightSide" side="right" :breakpoint="1100">
    Right Side of Layout
  </q-layout-drawer>

  <!-- sub-routes get injected here: -->
  <q-page-container>
    <router-view />
  </q-page-container>

  <!-- Footer -->
  <q-layout-footer>
    <!-- Navigation for iOS theme -->
    <nav-tabs v-if="$q.theme === 'ios'" />
    ...
  </q-layout-footer>
</q-layout>

<!-- nav-tabs component -->
<q-tabs>
  <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
  <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
  <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
  <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
</q-tabs>
```

### Form Components
In previous versions you would listen for `@change` event to detect changes. Now you can listen to `@input` for immediate changes or `@change` for **lazy update**. Vue `v-model.lazy` support is a pending change, so until then you can use the equivalent form (details below).

```html
<!-- QInput example -->

<!-- same as listening for @input -->
<q-input v-model="myModel" />

<!-- listening for lazy update -->
<q-input :value="myModel" @change="val => { myModel = val }" />
```

You'll notice all form components have been polished. Also, you'll be pleasantly surprised by new properties. To name just a few: "hide-underline", "inverted-light", "dark" or "warning" (for highlighting a warning state).

Prior to v0.15, form components had a default margin. This was removed to allow easier customization. You can now use the new [Spacing CSS classes](/components/spacing.html) to do it.

QCheckbox now supports an indeterminate state as well. You can specify a value for "true"/"false"/"indeterminate" states, so it no longer operates with Booleans (or Arrays) only.

QDatetime now doesn't require the "Set" button when using Popovers. Clicking on a date will simply select it and close the popover.

QChipsInput (& QChips) have new props that allow for better customization now.

### Using Promises
Modals, Popovers, Tooltips, Layout Drawer, Dialog, Notify (just to name a few) now use Promises instead of taking a callback parameter. This allows you to take advantage of async/await and simplifies your code.

```js
methods: {
  async showNotify () {
    await this.$q.dialog('Some dialog...')
    console.log('Dialog has been closed')
  }
}
```

### Vue refs no longer necessary for a lot of components
You were also used to using Vue refs for a few components (Layout left/right drawer, Modals, ...). This is no longer necessary. You can use a "v-model" instead to show (open) / hide (close) them. This wasn't quite possible pre v0.15 because you needed for them to close in order to, as an example, navigate away. Now it's no longer needed, so a Boolean scoped variable will suffice.

### Some components need .native modifier for events now
Some components, like QItem or QCard & co now need the `.native` modifier for binding to native DOM events like `click`. A general rule is: if `@click` is not mentioned in the component's docs Vue Events section, then you need to use [the native modifier](https://vuejs.org/v2/guide/components.html#Binding-Native-Events-to-Components).

```html
<!-- prior to v0.15 -->
<q-item @click="...">....</q-item>

<!-- v0.15+ way: -->
<q-item @click.native="...">...</q-item>
```

A few Quasar components were of functional type. These pass native events right through, so there's no need to add the native modifier. But during a thorough benchmarking session it turned out having these as regular components meant better performance due to a number of reasons. Switching these components from functional to regular adds this small breaking change where you need to use the native modifier.

### We were using different env for dev and production
You still can! Only now it's even better, due to `/quasar.conf.js` features. [More Info](/guide/app-quasar.conf.js.html#Example-setting-env-for-dev-build)

### New directive: v-close-overlay
All components using popups, like Modal, Dialog, Popover, Context Menu, now support a much simplified way of closing them. Instead of using a Vue reference, which is troublesome for some use cases, you can simply add `v-close-overlay` to the element/component that you wish to close the popup. This directive listens for the `@click` event, determines the first parent popup component and closes it.

```html
<q-btn label="I got a Popover">
  <q-popover>
    ...
    <q-icon v-close-overlay name="close" />
    ...
  </q-popover>
</q-btn>
```

### Handling Back Button
Unfortunately, the automatic handling of back button was a one of the features that was the hardest to comprehend. It required you to handle Vue references (which beginners on Vue were struggling with) and didn't fully allow you to connect components like Drawers & Modals to Vuex in an easy way. Now it only works on Mobile Apps (for example Android has a back button that is handled by Quasar). The removal of this feature for websites greatly simplify your code:

```html
<q-modal v-model="modal">...</q-modal>
<q-btn label="Open modal" @click="modal = true" />
```

### Buttons
While QBtn still allows you to specify icon and label as children nodes, it is now recommended that you use the "icon" and "label" props instead:

```html
<q-btn icon="map" label="See map" />

<!-- instead of old: -->
<q-btn>
  <q-icon class="on-left" name="map" />
  See map
</q-btn>
```

Be sure to check out the new button types and props too.

### Quasar CLI and Pre-0.15 Apps

The Quasar CLI v0.15+ is not compatible with pre-0.15 apps. You can install the latest CLI globally while still supporting `quasar` commands in legacy apps by adding `quasar-cli` as a development dependency. To support 0.14 and earlier you need quasar-cli v0.6.5.

```bash
$ yarn add --dev quasar-cli@0.6.5
# or:
$ npm install --save-dev quasar-cli@0.6.5
```

This will add the legacy `quasar` CLI tool to your projects `./node_modules/.bin/` directory.

Use the [npx](https://www.npmjs.com/package/npx) tool (automatically installed alongside npm) to run `quasar` from your local node modules. For example:

```bash
$ npx quasar dev
```


