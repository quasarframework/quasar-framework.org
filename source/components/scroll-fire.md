title: Scroll Fire
---
"Scroll Fire" is a feature that enables a method to be called (once and only once) when user scrolls current page and the DOM element (or component) that it is applied to comes into the viewport.
<input type="hidden" data-fullpage-demo="scrolling/scroll-fire">

For ease of use, its implementation is through a Vue Directive called `v-scroll-fire`.

> **NOTE**
> There is also a `v-scroll` directive which fires whenever user scrolls the page, available to read [here](/components/scroll-directive.html)..

``` html
<!-- Template for VueModel below -->
....
<div v-scroll-fire="bounceImage">...</div>
```
``` js
// VueModel for template above
{
  ...,
  methods: {
    bounceImage (element) {
      // in this example, when the `<div>` comes into view,
      // we bounce it for 2 seconds

      // we add helper `nimate-bounce` Quasar CSS class
      element.classList.add('animate-bounce')
      setTimeout(() => {
        // we make sure the node is still in DOM
        // (user hasn't navigated away from the Vue component
        // rendering our `<div>`)
        // so we don't generate an error
        if (document.body.contains(element)) {
          // then remove the helper class to
          // stop bouncing
          element.classList.remove('animate-bounce')
        }
      }, 2000)
    }
  }
}
```

> **IMPORTANT**
> For performance purposes, the scroll listener function injected is by default debounced by 50ms. Read more about `debouncing` [here](/components/other-utils.html#Debounce-Function).

## Determining Scrolling Container
Please read [here](/components/scroll-observable.html#Determining-Scrolling-Container) about how Quasar determines the container to attach scrolling events to.
