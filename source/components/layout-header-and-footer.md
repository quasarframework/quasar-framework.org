title: Layout Header & Footer
---
[QLayout](/components/layout.html) allows you to configure your views as a 3x3 matrix, containing an optional Header and/or Footer. If you haven't already, please read QLayout documentation page first.
<input type="hidden" data-fullpage-demo="layout-demo/play-with-layout" data-source="../../layouts/layout-demo.vue">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QLayoutHeader',
    'QLayoutFooter'
  ]
}
```

## Basic Usage
```html
<q-layout>
  ...
  <q-layout-header v-model="header">
    <!-- header content -->
  </q-layout-header>
  ...
  <q-layout-footer v-model="footer">
    <!-- footer content -->
  </q-layout-footer>
  ...
</q-layout>
```

## QLayoutHeader/QLayoutFooter Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `reveal` | Boolean | Scrolling hides header/footer. |
| `reveal-offset` | Number | (Default: 250) Scrolling distance in pixels that triggers the hide. |

### Reveal Property
You'll notice in playing with the QLayout view configuration that if you set the header to "hhh" (all small letters), the header will be set to a static position at the top of the page. This in turn means, the header will move off the screen as the user scrolls down the page. If the user then needs to use the navigation in the header, he/she must scroll completely up to top of the page to get to it and this is bad UX.

One way to help the user is to add a [back-to-top button](/components/back-to-top.html) on the page.

Another way is to use the `reveal` prop.

The `reveal` prop overrides "H" in QLayout `view` prop, by fixing the header to the top of the screen. As the user scrolls down more than `reveal-offset` pixels, the header rolls up it's own height above the top of the screen. As soon as the user scrolls back up (just 1 pixel), the header comes into view again immediately.

Same goes for QLayoutFooter.

## Hiding Header/Footer Completely
QLayoutHeader and QLayoutFooter support a Boolean v-model which determines if they take up space on screen or not. This does not interferes with the `reveal` property, which works only if the v-model is set to true.

```html
<template>
  ...
  <q-layout-header v-model="state">
    ...
  </q-layout-header>
  ...
</template>

<script>
export default {
  data () {
    return {
      state: true
    }
  },
  methods: {
    toggleHeader () {
      this.state = !this.state
    }
  }
}
</script>
```

## QLayoutHeader/QLayoutFooter Vue Events
| Vue Event | Description |
| --- | --- |
| `@reveal(state)` | Emitted when reveal state changes. |

## Handling Quasar Themes
You can make some tweaks to distinguish between Material and iOS themes. You'll notice in the demo that header and footer has different looks based on Quasar theme. Here's an example how to do it below. Notice that in this example we also place navigational tabs in header (for Material) or footer (for iOS):

```html
<!-- layout.vue -->
<q-layout-header reveal>
  <q-toolbar :inverted="$q.theme === 'ios'">
    ....
  </q-toolbar>

  <nav-tabs v-if="$q.theme === 'mat'" />
</q-layout-header>

<q-layout-footer reveal v-if="$q.theme === 'ios'">
  <nav-tabs />
</q-layout-footer>

<!-- nav-tabs.vue -->
<q-tabs :inverted="$q.theme === 'ios'">
  <q-route-tab......
</q-tabs>
```
