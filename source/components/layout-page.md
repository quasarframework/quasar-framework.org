title: Layout Page
---
[QLayout](/components/layout.html) must contain page content. If you haven't already, please read QLayout documentation page first.

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
<q-page>
  <!-- page content -->
</q-page>
```
