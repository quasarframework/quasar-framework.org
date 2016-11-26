title: Other Quasar Vue Directives
---
Quasar provides some useful ready to use Vue directives. If you don't know what a directive is, read [here](http://vuejs.org/guide/custom-directive.html).

This is not a complete list. The missing ones are specific to some Quasar Components and are described on their documentation pages. For example, see [Handling Back Button](/guide/handling-back-button.html) or [Touch Directives](/api/js-touch-directives.html).

### Directive "v-scroll"
This one takes one parameter (a Function) and fires when user scrolls the page containing that DOM node.

``` html
<!-- Template for VueModel below -->
......
<div v-scroll="scrolled">...</div>
......
```
``` js
// VueModel for template above
{
  ...,
  methods: {
    ...,
    scrolled (position) {
      // when this method is invoked then it means user
      // has scrolled the page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    }
  }
}
```

> **IMPORTANT**
> Please note that by default the method called is not debounced. For that you have to do it yourself, by wrapping your method with `Utils.debounce` like in example below.
> Read more about `debouncing` [here](/api/js-utils.html#Debounce-Function).

``` js
import { Utils } from 'quasar'

export default {
  ...,
  methods: {
    ...,
    scrolled: Utils.debounce(position => {
      // when this method is invoked then it means user
      // has scrolled the Page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    }, 200) // debounce for 200ms
  }
}
```

> **NOTE**
> There is one more scrolling-related directive available called "Scroll Fire" described on its own documentation page. Read more [here](/components/scroll-fire.html).

### Directive "v-link"
Vue 2 has dropped `v-link` directive, but Quasar offers one with limited functionality.
Use this directive instead of `<router-link>` for cases like the following one **when you don't want your Vue component wrapped by another DOM element** (like an `<a>` tag):

``` html
<some-component v-link=" '/home' ">...</some-component>
// renders `some-component`'s template

// instead of:
<router-link to="/home">
  <some-component>...</some-component>
</router-link>
// which renders:
// <a> ...some component template...</a>
```

Basically, just specify the route as parameter. It adds an `onclick` event on the respective DOM which tells Vue Router to push to that route.

The default behavior is for the router to push a new entry in history. If however you want current route to be replaced (instead of pushed to `window.history`) then add `.replace` modifier:

``` html
<div v-link.replace=" '/home' ">...</div>
```

If you want for some reason to delay the route change (like on Drawer elements which close it), use `delay` modifier. Route will change with a delay of 100ms.
``` html
<div v-link.delay=" '/home' ">...</div>
```
