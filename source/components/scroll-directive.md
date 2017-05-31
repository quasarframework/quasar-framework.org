title: Directive "v-scroll"
---
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
