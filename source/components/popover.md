title: Popover
---
QPopover should be used when you want a menu (or any content) to be displayed on a popup as a result of user clicking/tapping on a DOM element / component.
<input type="hidden" data-fullpage-demo="popups/popover">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QPopover'],

  // optional if you want to use
  // directive `v-close-overlay`
  directives: ['CloseOverlay']
}
```

## Basic Usage
In the example below we use a Button (as a target) and when clicking/tapping on it Quasar will display a List.

You can replace the QBtn and the List with any DOM elements or components you like.

``` html
<!--
  The target button (can be anything else)
  must be direct parent of QPopover on the
  DOM hierarchy.
-->
<q-btn label="Email">
  <!-- Direct child of target -->
  <q-popover>
    <!--
      The DOM element(s) that make up the popup,
      in this case a list:
    -->
    <q-list separator link>
      <!-- notice `v-close-overlay` which closes popover -->
      <q-item v-close-overlay @click.native="doSomething">
        ...
      </q-item>
    </q-list>
  </q-popover>
</q-btn>
```

The idea is to place QPopover inside your DOM element / component that you want to be the trigger as **direct child**. Don't worry about QPopover content inheriting CSS from the container as the QPopover will be injected as a direct child of `<body>`.

> **IMPORTANT**
> When on a browser, hitting the &lt;ESCAPE&gt; key also closes the QPopover.

## Toggle through v-model
``` html
<template>
  <div>
    <q-btn color="primary" @click="showing = true" label="Show" />
    <q-btn color="primary" @click="showing = false" label="Hide" />

    <div>
      ...
      <q-popover v-model="showing">...</q-popover>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showing: false
    }
  }
}
</script>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `anchor` | Object | String of form `bottom left` (vertical horizontal) |
| `anchor-click` | Boolean | Disable triggering the Popover by clicking/tapping on the parent element. |
| `no-focus` | Boolean | (v0.17+) By default, for accessibility purposes, Popover focuses its content when it will be displayed. For use-cases when you need to keep focus on your current element, set this to `true`. |
| `no-refocus` | Boolean | (v0.17+) By default, for accessibility purposes, Popover refocuses the previously active element. Set to `true` to disable this behaviour. |
| `self` | Object | String of form `top left` (vertical horizontal) |
| `max-height` | String | Optional maximum height of Popover content. Example: `500px` |
| `touch-position` | Boolean | Open Popover from the position where user clicked/tapped on anchor. |
| `fit` | Boolean | Popover has `min-width` set as same as the `width` of the container. |
| `disable` | Boolean | When set to `true`, Popover won't be triggered. |
| `offset` | Array of 2 Numbers | Offset on horizontal and vertical (in pixels). Example: `[18, 18]`. |
| `disable` | Boolean | Disable Popover |

## Vue Methods
| Method | Description |
| --- | --- |
| `show` | Open Popover. Takes one optional Function parameter to trigger after Popover is opened. |
| `hide` | Close Popover. Takes one optional Function parameter to trigger after Popover is closed. |
| `toggle` | Toggle open/close Popover state. Takes one optional Function parameter to trigger after Popover is toggled. |

## Vue Events

| Vue Method | Description |
| --- | --- |
| `@show` | Triggered after opening Popover. |
| `@hide` | Triggered after closing Popover. |

## Handling Popover Dismissal
By default, clicking/tapping outside the QPopover content will close it. But if you'd like elements from the QPopover content to close it, then use the `v-close-overlay` Quasar directive.

## Handling Positioning
Position of the QPopover can be customized. It keeps account of the optional `anchor` and `self` Vue properties. See the demo and play with them.

The final position of the QPopover popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

If you would like the QPopover to appear from the touch/click point triggering the QPopover open, then use the Boolean `touch-position` Vue property:
``` html
<q-popover touch-position>
  ...
</q-popover>
```
The demo has `touch-position` specified for the big image on the center of the page.
