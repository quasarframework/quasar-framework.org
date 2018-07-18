title: Layout Page
---
[QLayout](/components/layout.html) must contain page content. If you haven't already, please read QLayout documentation page first.

Using QPageContainer with QPage will make sure your page is rendered with the correct height set for you. QPageContainer makes sure that it has `top-padding` for exactly the height of your header. QPage will receive a `min-height` just as high as the window. See the [Vue properties](#QPage-Vue-Properties) below for fine-tuning.

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
| --- | --- | --- |
| `padding` | Boolean | Adds a default dynamic padding to the page. |
| `styleFn` | function | Accepts a function which should return an object of styles you want to set to QPage, similar to the [CSS DOM helper](https://quasar-framework.org/components/dom-utils.html#Apply-CSS-Properties-in-Batch). You can use the parameter `offset` which will be the height in pixels of your header and footer. |

### Example usage of styleFn

When this property is not set it will generate QPage with the following style:
```html
<main
  class="q-page"
  style="min-height: calc(100vh - 50px)"
>
```
What is happening here is that if you have a header and/or footer your QPage will result with a `min-height` of `100vh` but minus the amount of pixels of your header and footer combined.

In order to allow you to add custom styles to QPage but still give you the oppertunity to access to the `offset` height in pixels you can set the Vue property `styleFn`.

In the following example we will set a `height` property instead of the `min-height` but still use the same `calc(100vh - 50px)` property:
```html
<!-- in the component we pass a function to styleFn -->
<q-page :styleFn="QPageStyles">
  <!-- page content -->
</q-page>
```
```js
// here we define our function using the offset parameter
methods: {
  QPageStyles(offset) {
    return {
      height: `calc(100vh - ${offset}px)`
    }
  }
}
```
Which will result in:
```html
<main
  class="q-page"
  style="height: calc(100vh - 50px)"
>
```
You can see it automatically inserted the height of your header + footer, in this case 50px. Please also note that when you provide the `styleFn` property to QPage it will not set `min-height`.
