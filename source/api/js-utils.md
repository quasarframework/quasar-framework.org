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

Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called."

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

## Throttle Function
Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 300 milliseconds."

``` js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
import { Utils } from 'quasar'

(Throttled Function) Utils.throttle(Function fn, Number limit_in_milliseconds)

// Example:
window.addEventListener(
  'resize',
  Utils.throttle(function() {
    .... things to do ...
  }, 300 /* execute at most once every 0.3s */)
)
```

## (Deep) Copy Objects
A basic respawn of `jQuery.extend()`. Takes same parameters:
``` js
import { Utils } from 'quasar'

let newObject = Utils.extend([Boolean deepCopy], targetObj, obj, ...)
```
Watch out for methods within objects.

## Generate UID
Generate unique identifiers:
``` js
import { Utils } from 'quasar'

let uid = Utils.uid()
```

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

// Determine if DomNode (target) is child of another DomNode (parent)
(Boolean) Utils.dom.childOf(target, parent)

// Get parent DomNode that handles page scrolling
// Usually this is element with classname ".layout-view" or "window"
(DOM Element) Utils.dom.getScrollTarget(DomElement)

// Get scroll position of a page. Use it in conjunction with `Utils.dom.getScrollTarget()`
(Number pixels) Utils.dom.getScrollPosition(scrollTargetDomElement)
```

## Handling "event" on a DOM event handler
It's cross-browser.

``` js
node.addEventListener('click', event => {
  // right clicked?
  (Boolean) Utils.event.rightClick(event)

  // position on viewport
  // works both for mouse and touch events!
  (Object {top, left}) Utils.event.position(event)

  // get target DOM Element on which mouse or touch
  // event has fired upon
  (DOM Element) Utils.event.targetElement(event)
})
```
