title: Element Resize Observable
---
QResizeObservable is a Quasar component that emits a `resize` event whenever the wrapping DOM element / component (defined as direct parent of QResizeObservable) changes its size. Note that no polling is involved, but overusing it is costly too.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QResizeObservable'
  ]
}
```

## Basic Usage
```html
<template>
  <!--
    we listen for size changes on this next
    <div>, so we place the observer as direct child:
  -->
  <div>
    <q-resize-observable @resize="onResize" />
  </div>
</template>

<script>
export default {
  ...,
  methods: {
    ...,
    onResize (size) {
      console.log(size)
      // {
      //   width: 20 // width of container (in px)
      //   height: 50 // height of container (in px)
      // }
    }
  }
}
</script>
```

Please note that QResizeObservable will issue an event as soon as it gets rendered and attached to DOM, so you can have the initial size of the container.

### Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| debounce | Number | (Default: 100) Debounce time in milliseconds |
