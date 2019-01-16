title: Directive "v-scroll"
---
This is a Vue directive which takes one parameter (a Function) and fires when user scrolls the page containing that DOM node.

One alternative to using this directive is to place a [QScrollObservable](/components/scroll-observable.html) component on your page.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: ['Scroll']
}
```

## Basic Usage
``` html
<!-- Template for VueModel below -->
...
<div v-scroll="scrolled">...</div>
...
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
> Please note that by default the method called is not debounced. For that you have to do it yourself, by wrapping your method with Quasar's debouncer (as an example) like in example below.
> <br>As per the example below, you need to use `function (position) {}` or `position => {}.bind(this)` to be able to access the Vue component inside the debounce function.
> <br>Read more about `debouncing` [here](/components/other-utils.html#Debounce-Function).

``` js
import { debounce } from 'quasar'

export default {
  ...,
  methods: {
    ...,
    scrolled: debounce(function (position) {
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

## Determining Scrolling Container
Please read [here](/components/scroll-observable.html#Determining-Scrolling-Container) about how Quasar determines the container to attach scrolling events to.
