title: Popover
---
QPopover should be used when you want a menu (or any content) to be displayed on a popup as a result of user clicking/tapping on a DOM element / component.
<input type="hidden" data-fullpage-demo="popups/popover">

## Basic Usage
In the example below we use a Button (as a target) and when clicking/tapping on it Quasar will display a List.

You can replace the QBtn and the List with any DOM elements or components you like.

``` html
<!--
  The target button (can be anything else)
  must be direct parent of QPopover on the
  DOM hierarchy.
-->
<q-btn ref="target">
  Email

  <!-- Direct child of target -->
  <q-popover ref="popover">
    <!--
      The DOM element(s) that make up the popup,
      in this case a list:
    -->
    <q-list item-separator link>
      <q-item @click="doSomething(), $refs.popover.close()">
        ...
      </q-item>
    </q-list>
  </q-popover>
</q-btn>
```

The idea is to place QPopover inside your DOM element / component that you want to be the trigger as **direct child**. Don't worry about QPopover content inheriting CSS from the container as the QPopover will be injected as a direct child of `<body>`.

> **IMPORTANT**
> When on a browser, hitting the &lt;ESCAPE&gt; key also closes the QPopover.

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

If the popover includes buttons or other clickable items which cause navigation or other events to be raised within your app, it's vital to use the callback feature of these methods, and what's passed in must be a function. So, if you want to close a popover and then navigate to a new route, the code _must_ look something like this:
```
<q-popover ref="myRef"
  <q-btn @click="$refs.myRef.close(() => $router.push('/newroute'))" />
</q-popover>
```

| Method | Description |
| --- | --- |
| `open` | Open Popover. Takes one optional Function parameter to trigger after Popover is opened. |
| `close` | Close Popover. Takes one optional Function parameter to trigger after Popover is closed. |
| `toggle` | Toggle open/close Popover state. Takes one optional Function parameter to trigger after Popover is toggled. |

## Vue Events

| Vue Method | Description |
| --- | --- |
| `@open` | Triggered after opening Popover. |
| `@close` | Triggered after closing Popover. |

## Handling Popover Dismissal
By default, clicking/tapping outside the QPopover content will close it. But if you'd like elements from the QPopover content to close it, then use a Vue reference on QPopover to call `close()` method, like on the "Basic Usage" example above.

## Handling Positioning
Position of the QPopover can be customized. It keeps account of the `anchor` and `self` optional Vue properties. See demo and play with them.

The final position of the QPopover popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

If you would like the QPopover to appear from the touch/click point triggering the QPopover open, then use the Boolean `touch-position` Vue property:
``` html
<q-popover touch-position>
  ...
</q-popover>
```
The demo has `touch-position` specified for the big image on the center of the page.
