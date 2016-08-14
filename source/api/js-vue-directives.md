title: Vue Directives
---
Quasar provides some useful ready to use Vue directives. If you don't know what a directive is, read [here](http://vuejs.org/guide/custom-directive.html).

This is not a complete list. The missing ones are specific to some Quasar Components and are described on their documentation pages.

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

### Directive "v-attr"
This directive sets HTML attributes (with no value) on the respective DOM node.

> **NOTE**
> Do not mistake this directive with the one that Vue had on its early releases up to v0.11.

``` html
<div v-attr="attributes">...</div>
```

In the example above `attributes` is a variable from VM data. It can be a String or an Array of Strings. Some examples of its effects:

``` js
// `attributes` has value 'close-me' then DIV below
// has empty HTML attribute 'close-me' added.
<div close-me>...</div>

// Changing `attributes` to value "active" makes
// the DIV's DOM node look like this:
<div active>...</div>

// If `attributes` is an Array of String, like
// ['close-me', 'active'] then DIV's DOM node looks like this:
<div active close-me>...</div>
```
