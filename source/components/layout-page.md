title: Layout Page
---
[QLayout](/components/layout.html) must contain page content. If you haven't already, please read QLayout documentation page first.
<input type="hidden" data-fullpage-demo="layout-demo/play-with-layout" data-source="../../layouts/layout-demo.vue">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QPageContainer',
    'QPage'
  ]
}
```

## Basic Usage
A QPage must be encapsulated by QPageContainer, which in turn must be a child of QLayout.

```html
<q-layout>
  ...
  <q-page-container>
    <q-page>
      <!-- page content -->
    </q-page>
  </q-page-container>
</q-layout>
```

Usually, the QPageContainer is part of the Layout template (where it contains a `<router-view />` child only), and its content goes into separate vue files under `/src/pages`. If you haven't already, please read [Integrating Layout with Router](/components/integrating-layout-with-router.html).

```html
<!-- vue file for Layout: -->
<q-layout>
  ...
  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>

<!-- vue file for a Page: -->
<q-page padding>
  <!-- page content -->
</q-page>
```

## QPage Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `padding` | Boolean | Adds a default dynamic padding to the page. |
| `style-fn` | Function | Described below. |

### Style-fn
A QPage needs a QLayout, because QLayout controls all the offsets of a page, keeping account of the space that header/footer/drawer use, according to its `view` property configuration. By default, your QPage component will have a `min-height` CSS property set on it to ensure that the content fills the screen at all times, even when the content is just a few lines.

If you wish to tweak, or even remove this property, you can do so by using the `style-fn` property:

```html
<template>
  <q-page :style-fn="myTweak">...</q-page>
</template>

<script>
export default {
  // ...
  methods: {
    myTweak (offset) {
      // "offset" is a Number (pixels) that refers to the total
      // height of header + footer that occupies on screen,
      // based on the QLayout "view" prop configuration

      // this is actually what the default style-fn does in Quasar
      return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
    }
  }
}
</script>
```
