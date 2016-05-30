title: Quasar Scroll Fire
---
"Scroll Fire" is a feature that enables a method to be called (once and only once) when user scrolls current page to a specific scroll position in pixels.
<input type="hidden" data-fullpage-demo="scroll-fire">

For ease of use, its implementation is through a Vue Directive called `v-scroll-fire`.

> **NOTE**
> There is also a `v-scroll` directive which fires whenever user scrolls the Page, available to read [here](/api/js-vue-directives.html#Directive-“v-scroll”).

``` html
<!-- Template for VueModel below -->
....
<div v-scroll-fire="bounceImage">...</div>
....
```
``` js
// VueModel for template above
module.exports = {
  ...,
  methods: {
    bounceImage: function(element) {
      element.velocity('callout.tada', {
        display: null
      });
    }
  }
}
```

> **IMPORTANT**
> For performance purposes, the method being fired is debounced 50ms by default. Read more about `debouncing` [here](/api/js-helpers-and-utils.html#Debounce-Function).
