title: Tooltip
---
QTooltip should be used when you want to offer the user more information about a certain area in your App. When hovering the mouse over the target element (or quickly tapping on mobile platforms), the Tooltip will appear.
<input type="hidden" data-fullpage-demo="popups/tooltip">

## Basic Usage
In the example below we use a QBtn (as a target) and when hovering over it, Quasar will display some text.

You can replace QBtn and the QPopover content with any DOM elements or components you like.

``` html
<!--
  The target button (can be anything else)
  must be direct parent of QTooltip on the
  DOM hierarchy.
-->
<q-btn>
  Email

  <!-- Direct child of target -->
  <q-tooltip>
    <!--
      The DOM element(s) that make up the tooltip,
      in this case a simple text:
    -->
    Some text as content of Tooltip
  </q-tooltip>
</q-btn>
```

The idea is to place QTooltip inside your DOM element / component (as **direct child in DOM hierarchy**), when you want it to be the trigger for the QTooltip. Don't worry about QTooltip content inheriting CSS from the container. This won't occur, since QTooltip will be injected as a direct child of `<body>`.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `anchor` | Object | String of form `bottom left` (vertical horizontal). |
| `self` | Object | String of form `top left` (vertical horizontal). |
| `offset` | Array | Array with two numbers. Offset on horizontal and vertical (in pixels). |
| `max-height` | String | Optional maximum height of Popover content. Example: `500px` |
| `disable` | Boolean | When set to `true`, Popover won't be triggered. |
| `delay` | Number | Set the delay, when tooltip should appear. |

## Vue Methods

| Vue Method | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open Popover. |
| `close()` | Close Popover. |

## Handling Positioning
The position of QTooltip can be customized. It keeps account of the `anchor` and `self` optional Vue properties. Check out the demo and play with them.

The final position of QTooltip popup is calculated so that it will be displayed on the available screen real estate, switching to the right-side and/or top-side when necessary.
