title: Utils
---
## Open External URL
``` js
import { Utils } from 'quasar'

Utils.openURL('http://...')
```

It will take care of the quirks involved when running under Cordova or on a browser, including notifying the user he/she has to acknowledge opening popups.

## Debounce Function
If your App uses JavaScript to accomplish taxing tasks, a debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance. Debouncing a function limits the rate at which the function can fire.

A quick example: you have a resize listener on the window which does some element dimension calculations and (possibly) repositions a few elements. That isn't a heavy task in itself but being repeatedly fired after numerous resizes will really slow your App down. So why not limit the rate at which the function can fire?

``` js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
import { Utils } from 'quasar'

(Debounced Function) Utils.debounce(Function fn, Number milliseconds_to_wait, Boolean immediate)

// Example:
window.addEventListener(
  'resize',
  Utils.debounce(function() {
    .... things to do ...
  }, 300 /*ms to wait*/)
)
```

## Key Codes
Sometimes you need to attach an event related to user pressing a key. These keys have ASCII codes that you can access from Quasar:

``` js
import { Keycodes } from 'quasar'

// Keycodes.enter
// Keycodes.g
// Keycodes.backspace
// ....
```

You can extend the `on` Vue directive like this:

``` js
import Vue from 'vue'
import { Utils } from 'quasar'

Vue.directive('on').keyCodes.f1 = Utils.keycodes.f1
```

Now you can use it like so in a component template:
``` html
<input @keyup.f1="submit">
```

For a complete list of keys just console.log() `Utils.keycodes`.

## (Deep) Copy Objects
A basic respawn of `jQuery.extend()`. Takes same parameters:
``` js
import { Utils } from 'quasar'

let newObject = Utils.extend([Boolean deepCopy], targetObj, obj, ...)
```
Watch out for methods within objects.

## DOM methods
``` js
import { Utils } from 'quasar'

// Offset on screen
console.log(Utils.dom.offset(DomElement))
// { top: 10, left: 100 }

// Get COMPUTED style (when DomElement is visible!)
// Computed means a DomElement might not have "height" CSS property set,
// but that does not mean it doesn't have a height when it's displayed.
// The follosing method accesses the computed CSS provided by the browser:
console.log(Utils.dom.style(DomElement, 'height'))
// '10px' <<< notice it returns a String ending in 'px'

// Some aliases of the previous method for "width" and "height" which
// returns Numbers instead of Strings:
console.log(
  Utils.dom.height(DomElement),
  Utils.dom.width(DomElement)
)
// 10 100

// Apply a list of CSS properties to a DomNode
Utils.dom.css({
  height: '10px',
  display: 'flex'
})

// Get Window height and width
console.log(
  Utils.dom.viewport().height,
  Utils.dom.viewport().width
)
// 800 600

// Execute a Function when DOM is ready:
Utils.dom.ready(function () {
  // ....
})
```
