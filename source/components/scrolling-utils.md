title: Scrolling Utils
---

## Determine Scrolling Container
Might be worthwhile to read how this is done [here](/components/scroll-observable.html#Determining-Scrolling-Container)
```js
import { scroll } from 'quasar'
const { getScrollTarget } = scroll

// Get parent DomNode that handles page scrolling
// Usually this is element with classname ".layout-view" or "window"
(DOM Element) getScrollTarget(DomElement)
```

## Get/Set Scroll Position
```js
import { scroll } from 'quasar'
const { getScrollPosition, setScrollPosition } = scroll

// Get scroll position of a element or page. Use it in conjunction with `getScrollTarget()`
(Number pixels) getScrollPosition(scrollTargetDomElement)

// Setting scroll position of an element or page:
setScrollPosition (scrollTargetElement, offset[, duration])
// if "duration" is specified then it will animate the scrolling
```

### Scrolling to an element
A full example using the scroll utils to scroll to an element:

```js
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
// takes an element object
function scrollToElement (el) {
  let target = getScrollTarget(el)
  let offset = el.offsetTop
  let duration = 1000
  setScrollPosition(target, offset, duration)
}
```

## Determine Scroll Height
```js
import { scroll } from 'quasar'
const { getScrollHeight } = scroll

// get scrolling container inner height
(Number) getScrollHeight(scrollTargetDomElement)

console.log( getScrollHeight(el) )
// 824 (it's in pixels always)
```

## Determining Scrollbar Width
Computes the width of scrollbar in pixels.

``` js
import { scroll } from 'quasar'
const { getScrollbarWidth } = scroll

console.log(getScrollbarWidth()) // 16 (it's in pixels)
```
