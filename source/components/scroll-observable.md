title: Scroll Observable
---
QScrollObservable is a Quasar component that emits a `scroll` event whenever the user scrolls the page or overflowed container with `.scroll` CSS class applied to it.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QScrollObservable']
}
```

## Basic Usage
```html
<template>
  ...
  <q-scroll-observable @scroll="userHasScrolled" />
  ...
</template>

<script>
export default {
  ...,
  methods: {
    ...,
    userHasScrolled (scroll) {
      console.log(scroll)
      // {
      //   position: 56, // pixels from top
      //   direction: 'down', // 'down' or 'up'
      //   directionChanged: false, // has direction changed since this handler was called?
      //   inflexionPosition: 56 // last scroll position where user changed scroll direction
      // }
    }
  }
}
</script>
```

## Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `debounce` | Number | (v0.17+) Emitting the event with a custom debounce. "0" means no debounce. |

## Determining Scrolling Container
All components or directives in Quasar have a simple algorithm to determine the container that supports the scroll: it searches for a parent DOM element which has the `scroll` Quasar CSS Helper class attached to it. If none is found, then it considers that the scrolling takes place on the document itself.

Components like [QScrollArea](/components/scroll-area.html), for example, respect this design and have the `scroll` class embedded into it, so that QScrollObservable (or any other scrolling component or directive) can succesfully detect it and attach the necessary event handlers to it.

Please note that simply attaching `scroll` CSS class to a DOM element or on a Vue component will have no effect if the respective element is not overflowed (example, with: CSS `overflow: hidden` and a height smaller than its inner content height).

Example of good container:
```html
<!--
  Quasar CSS helper 'overflow-hidden' is
  equivalent to style="overflow: hidden"
-->
<div class="scroll overflow-hidden" style="height: 100px">
  ...content expanding over the 100px height from container...
  <q-scroll-observable @scroll="scrollHandler" />

  <!-- example with `v-scroll` directive -->
  <div v-scroll="scrollHandler">...</div>
</div>
```

One more example with QScrollArea:
```html
<q-scroll-area style="width: 400px; height: 500px;" class="bg-yellow">
  ...content expanding over the 500px height from container...
  <q-scroll-observable @scroll="scrollHandler" />
</q-scroll-area>
```

## Layout Scrolling
When scrolling on a Layout with a Page, rather than injecting a QScrollObservable (and by so doing registering additional scroll events) you can take advantage of [QLayout](/components/layout.html)´s `@scroll` event directly on your component defining the Layout.

```html
<q-layout @scroll="scrollHandler">...</q-layout>
```
