title: Popover
---
Quasar Popovers should be used when you want a menu/popup to be displayed when user clicks/taps on a DOM element.

<input type="hidden" data-fullpage-demo="web-components/popover">

## Basic Usage
In the example below we use a Button (as a target) and when clicking/tapping on it Quasar will display a List.
You can replace the Button and the List with any DOM elements or components you like.
``` html
<button ref="target" class="primary">
  <i>mail</i>

  <q-popover ref="popover">
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
  </q-popover>
</button>
```

The idea is to place `<q-popover>` inside your DOM element / component that you want to be the trigger. Don't worry about Popover content inheriting CSS from the container as the Popover will be injected as a direct child of `<body>`.

> **IMPORTANT**
> When on a browser, hitting the &lt;ESCAPE&gt; key also closes the Popover.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `anchor` | Object | String of form `bottom left` (vertical horizontal) |
| `self` | Object | String of form `top left` (vertical horizontal) |
| `max-height` | String | Optional maximum height of Popover content. Example: `500px` |
| `touch-position` | Boolean | Open Popover from the position where user clicked/tapped on anchor. |
| `fit` | Boolean | Popover has `min-width` set as same as the `width` of the container. |
| `disable` | Boolean | When set to `true`, Popover won't be triggered. |

## Vue Methods

| Vue Method | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open Popover. |
| `close()` | Close Popover. |

## Handling Popover Dismissal
Use a Vue reference on `<q-popover>` to call `close()` method if you want an element to be able to close the Popover, like on the example above.

## Handling Positioning
Position of the Popover can be customized. It keeps account of the `anchor` and `self` optional Vue properties. See demo and play with them.

The final position of the Popover popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

If you would like the Popover to appear from the touch/click point triggering the Popover open, then use the Boolean `touch-position` Vue property:
``` html
<q-popover touch-position>
  ...
</q-popover>
```
The demo has `touch-position` specified for the big image on the center of the page.
