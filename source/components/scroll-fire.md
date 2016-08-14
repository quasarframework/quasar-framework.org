title: Scroll Fire
---
"Scroll Fire" is a feature that enables a method to be called (once and only once) when user scrolls current page to a specific scroll position in pixels.
<input type="hidden" data-fullpage-demo="web-components/scroll-fire">

For ease of use, its implementation is through a Vue Directive called `v-scroll-fire`.

> **NOTE**
> There is also a `v-scroll` directive which fires whenever user scrolls the page, available to read [here](/api/js-vue-directives.html#Directive-“v-scroll”).

``` html
<!-- Template for VueModel below -->
....
<div v-scroll-fire="bounceImage">...</div>
....
```
``` js
// VueModel for template above
{
  ...,
  methods: {
    bounceImage (element) {
      Velocity(element, 'callout.tada', {
        display: null
      })
    }
  }
}
```

> **IMPORTANT**
> For performance purposes, the scroll listener function injected is by default debounced by 50ms. Read more about `debouncing` [here](/api/js-utils.html#Debounce-Function).
