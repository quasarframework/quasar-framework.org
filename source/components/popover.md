title: Popover
---
Quasar Popovers should be used when you want a menu/popup to be displayed when user clicks/taps on a DOM element.

<input type="hidden" data-fullpage-demo="web-components/popover">

## Basic Usage
In the example below we use a Button (as a target) and when clicking/tapping on it Quasar will display a List.
You can replace the Button and the List with any DOM elements or Quasar Web Components you like.
``` html
<quasar-popover v-ref:popover>
  <!--
    slot="target" for DOM element that when clicked
    it will open the dropdown; in this case a button
  -->
  <button slot="target" class="primary">
    <i>mail</i>
  </button>

  <!--
    The DOM element(s) that make up the Dropdown menu,
    in this case a list
  -->
  <div class="list item-delimiter highlight">
    <div
      class="item item-link"
      @click="doSomething(), $refs.popover.close()"
    >
      ...
    </div>
  </div>
</quasar-popover>
```

## Handling Popover Dismissal
Use a Vue reference on `<quasar-popover>` to call `close()` method if you want an element to be able to close the Popover, like on the example above.

## Handling Positioning
The position of the Popover popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

By default, the Popover position will be placed on top of your target, but there is also the Boolean `touch-position` DOM attribute that you can use if you want the Popover to popup right from the position where user clicked/tapped on screen:
``` html
<quasar-popover touch-position>
  ...
</quasar-popover>
```
The demo has `touch-position` specified for the big image on the center of the page.
