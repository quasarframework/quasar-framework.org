title: Quasar CSS Helper Classes
---

## Container
A very important component for your Pages is the responsive `container` class which handles margins and padding relative to the screen width automatically so your content can make the best use of the real estate available.

Example:
``` html
<quasar-page>
  <div class="container"> ...... </div>
</quasar-page>
```

## Visibility
There are CSS classes which you can use to hide or display content based on the screen size.

Display only on:
* class="`only mobile`"
* class="`only tablet`"
* class="`only small monitor`"
* class="`only large monitor`"

Hide on:
* class="`hide mobile`"
* class="`hide tablet`"
* class="`hide small monitor`"
* class="`hide large monitor`"

### Other Classes
Also there's the `hidden` class which removes the element from the view. The `invisible` class just hides while the element will still occupy its space within the view.

The `transparent` class will add a default opacity to the element.

## Positioning
There are default classes for fixed and absolute positioning with regards to screen margins. Use `fixed-X` or `absolute-X` Quasar classes, where *X* can be `top`, `right`, `bottom` or `left`.

Example:
``` html
<div class="fixed-top"></div>
```

Also, you can float items around:
``` html
<div class="float-left"></div>
<div class="float-right"></div>
```

## Text Alignment
Use `text-center`, `text-right`, `text-left` or `text-justify` Quasar CSS classes to align text positioning.

## Shadows
You can use some default shadow classes which add depth to your elements:
* class="`z-none`"
* class="`z-2`"
* class="`z-3`"
* class="`z-4`"
* class="`z-6`"
* class="`z-8`"
* class="`z-16`"

There's also the option to have a transition animation:
``` html
<div class="z-transition z-2"></div>
```

## Scroll
There's the `scroll` class that helps some browsers (like on iOS platform) to best handle scrolling by touch on an element's that is overflowed (it adds the `overflow: auto` CSS property automatically).

On the other hand, if you don't want an element to be scrollable, add `no-scroll` CSS class.

## Window Height
Whenever you need an item to have the height equivalent to the screen height, use `window-height` Quasar CSS class.

## User Selection
There's a way to avoid the user to be able to select a text (with mouse or through touch). Just add `non-selectable` class.
