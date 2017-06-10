title: Tooltip
---
Quasar Tooltips should be used when you want to offer the user more information about a certain item in your App. When mouse hovering (or tapping on mobile platforms) the target element the Tooltip appears.

<input type="hidden" data-fullpage-demo="web-components/tooltip">

## Basic Usage
In the example below we use a Button (as a target) and when hovering it Quasar will display a List.
You can replace the Button and the List with any DOM elements or components you like.
``` html
<button ref="target" class="primary">
  <i>mail</i>

  <q-tooltip>
    <div class="list item-delimiter highlight">
      <div
        class="item item-link"
        @click="doSomething(), $refs.popover.close()"
      >
        ...
      </div>
    </div>
  </q-tooltip>
</button>
```

The idea is to place `<q-tooltip>` inside your DOM element / component that you want to be the trigger. Don't worry about Tooltip content inheriting CSS from the container as the Tooltip will be injected as a direct child of `<body>`.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `anchor` | Object | String of form `bottom left` (vertical horizontal). |
| `self` | Object | String of form `top left` (vertical horizontal). |
| `offset` | Array | Array with two numbers. Offset on horizontal and vertical (in pixels). |
| `max-height` | String | Optional maximum height of Popover content. Example: `500px` |
| `disable` | Boolean | When set to `true`, Popover won't be triggered. |

## Vue Methods

| Vue Method | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open Popover. |
| `close()` | Close Popover. |

## Handling Positioning
Position of the Tooltip can be customized. It keeps account of the `anchor` and `self` optional Vue properties. See demo and play with them.

The final position of the Tooltip popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.
