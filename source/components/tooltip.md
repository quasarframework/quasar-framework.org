title: Tooltip
---
QTooltip should be used when you want to offer the user more information about a certain area in your App. When hovering the mouse over the target element (or quickly tapping on mobile platforms), the Tooltip will appear.
<input type="hidden" data-fullpage-demo="popups/tooltip">
## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QTooltip']
}
```
## Basic Usage
In the example below we use a QBtn (as a target) and when hovering over it, Quasar will display some text.

You can replace QBtn and the QPopover content with any DOM elements or components you like.

``` html
<!--
  The target button (can be anything else)
  must be direct parent of QTooltip on the
  DOM hierarchy.
-->
<q-btn label="Email">
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

With that in mind, if you want to have a tooltip for say, a rating component, it is best to wrap the component in a ´div´ and add the tool tip as a child of the ´div . Note: this isn't necessary for buttons, as ´QBtn´ is built to support Tooltips. 

``` html 
<template>
  <div class="q-ma-xl">
     <div class="inline-block">
        <q-tooltip class="tooltip-style" anchor="top middle" self="bottom middle" :offset="[15,15]">Rate to the best of your ability!</q-tooltip> 
        <q-rating
          v-model="ratingModel"
          :max="5"
          >     
          </q-rating>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratingModel: 4
    }
  }
}
</script>
```
You can also use `v-model`and Vue's event system to toggle, show or hide the Tooltip on certain events.

## Toggle through v-model
``` html 
<template>
  <div>
    <q-btn color="primary" @click="showing = true" label="Show" />
    <q-btn color="primary" @close="showing = false" label="Hide" />

    <div>
      ...
      <q-tooltip v-model="showing">...</q-tooltip>
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
| `anchor` | Object | String of form `bottom left` (vertical horizontal). |
| `self` | Object | String of form `top left` (vertical horizontal). |
| `offset` | Array of 2 Numbers | Offset on horizontal and vertical (in pixels). Example: `[18, 18]`. |
| `max-height` | String | Optional maximum height of Tooltip content. Example: `500px` |
| `delay` | Number | Set the delay, when tooltip should appear. |
| `disable` | Boolean | When set to `true`, Tooltip won't be triggered. |

## Vue Methods

| Vue Method | Description |
| --- | --- |
| `show()` | Open Tooltip. |
| `hide()` | Close Tooltip. |
| `toggle()` | Toggle open/close state. |

## Handling Positioning
The position of QTooltip can be customized. It keeps account of the `anchor` and `self` optional Vue properties. Check out the demo and play with them.

The final position of QTooltip popup is calculated so that it will be displayed on the available screen real estate, switching to the right-side and/or top-side when necessary.
