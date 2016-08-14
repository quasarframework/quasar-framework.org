title: Dropdown
---
When you want a menu/popup to be displayed when user clicks/taps on a DOM element.

<input type="hidden" data-fullpage-demo="web-components/dropdown">

## Basic Usage
In the example below we use a Button (as a target) and when clicking/tapping on it Quasar will display a List.
You can replace the Button and the List with any DOM elements or Quasar Web Components you like.
``` html
<quasar-dropdown>
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
    ...
  </div>
</quasar-dropdown>
```

The position of the popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.
