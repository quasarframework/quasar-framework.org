title: Quasar Vue Directives
---
Quasar provides some useful ready to use Vue directives. If you don't know what a directive is, read [here](http://vuejs.org/guide/custom-directive.html).

This is not a complete list. The missing ones are specific to some Quasar Components and are described on their documentation pages.

### Directive "v-page-link"
Add click event for the respective DOM element so that when clicked it will make the App navigate to a certain Page.

Takes one mandatory parameter which must be either a String (page name) or a Function. Look at examples below.

#### Example 1. String Parameter.
``` html
<button v-page-link="bookstore">Go to Bookstore</button>
<!-- When clicked, button will make App navigate to #/bookstore -->
```

#### Example 2. Function Parameter.
``` html
<!-- Template for VueModel below -->
<button v-page-link="navigateToBookstore">Go to Bookstore</button>
```
``` js
module.exports = {
  ...,
  methods: {
    ...,
    navigateToBookstore: function(navigateTo) {
      // do something here before navigating
      // and finally:
      navigateTo('#/bookstore');
    }
  }
  ...
};
```

### Directive "v-exit-app"
Adds click event to close the App when running under Cordova wrapper, otherwise it just hides the respective element.
``` html
<button v-exit-app><i>close<i></button>
```

### Directive "v-scroll"
This one takes one parameter (a Function) and fires when user scrolls the Page containing that DOM node.

``` html
<!-- Template for VueModel below -->
......
<div v-scroll="scrolled">...</div>
......
```
``` js
// VueModel for template above
module.exports = {
  ...,
  methods: {
    ...,
    scrolled: function(position) {
      // when this method is invoked then it means user
      // has scrolled the Page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    }
  }
};
```

> **IMPORTANT**
> Please note that by default the method called is not debounced. For that you have to do it yourself, by wrapping your method with `quasar.debounce` like in example below.
> Read more about `debouncing` [here](/api/js-helpers-and-utils.html#Debounce-Function).

``` js
module.exports = {
  ...,
  methods: {
    ...,
    scrolled: quasar.debounce(function(position) {
      // when this method is invoked then it means user
      // has scrolled the Page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    }, 200); // debounce for 200ms
  }
};
```

> **NOTE**
> There is one more scrolling-related directive available called "Scroll Fire" described on its own documentation page. Read more [here](/api/js-scroll-fire-directive.html).

### Directive "v-active-page"
Takes one parameter (page name). Adds or Removes the `active` class on the respective DOM node when user navigates to or away from the indicated page.

``` html
<!-- When on (and only on) #/login, the button below has class `active` -->
<button v-active-page="login" class="primary">Login</button>
```

### Directive "v-hover"
Takes one parameter (a Function) and manages the focus on the respective element.
``` html
<!-- template for VueModel below -->
<div v-hover="hoverAction">...</div>
```
``` js
// in the VueModel of the template above:
module.exports = {
  .....
  methods: {
    ...,
    hoverAction: function(state) {
      if (state) {
        // on hover
      }
      else {
        // on blur / lose of focus
      }
    },
    ...
  },
  ...
};
```

### Directive "v-layout-page-sticky"
Useful to make a DOM element fixed on screen (when using a Layout for your Page), like for example a FAB (Floating Action Button). User can scroll but your element will be fixed positioned between Header and Footer screen bars.

When using it, also add CSS code to absolute-position the element. In the example below, the helper class `absolute-bottom-right` class is used.

``` html
<fab
  v-layout-page-sticky <<<<<<<<<<
  class="absolute-bottom-right" <<<<<<<<<
  :click="alert"
  type="primary"
  active-icon="alarm"
  direction="up"
>
  <small-fab label="first" class="primary">mail</small-fab>
  <small-fab label="second">alarm</small-fab>
</fab>
```

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

### Directive "v-touch"
This one is explained in detail on [Touch Events](/api/js-touch-events.html#Vue-‘v-touch’-directive) page.
