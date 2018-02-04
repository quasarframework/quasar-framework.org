title: Window Resize Observable
---
QWindowResizeObservable is a Quasar component that emits a `resize` event whenever the document viewport (window) changes its size, with no polling involved.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QWindowResizeObservable'
  ]
}
```
## Basic Usage
```html
<template>
  ...
    <!--can be placed anywhere within your template -->
    <q-window-resize-observable @resize="onResize" />
  ...
</template>

<script>
export default {
  ...,
  methods: {
    ...,
    onResize (size) {
      console.log(size)
      // {
      //   width: 1200 // width of viewport (in px)
      //   height: 920 // height of viewport (in px)
      // }
    }
  }
}
</script>
```

Please note that QWindowResizeObservable will issue an event as soon as it gets rendered and attached to DOM, so you can have the initial size of the window.
