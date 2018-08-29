title: Layout Drawer
---
[QLayout](/components/layout.html) allows you to configure your views as a 3x3 matrix, containing an optional Header and/or Footer. If you haven't already, please read QLayout documentation page first.
<input type="hidden" data-fullpage-demo="layout-demo/play-with-layout" data-source="../../layouts/layout-demo.vue">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QLayoutDrawer'
  ]
}
```

## Basic Usage
```html
<q-layout>
  ...
  <q-layout-drawer side="left">
    <!-- drawer content -->
  </q-layout-drawer>
  ...
</q-layout>
```

## QLayoutDrawer Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `side` | String | One of 'left' or 'right', depending on the Drawer position on Layout. |
| `overlay` | Boolean | Overlay mode |
| `breakpoint` | Number | Breakpoint (in pixels, defining window width) at which point the Drawer will be placed directly over the layout and won't act as a mobile drawer anymore. Default is 992 (up to "sm", including). |
| `behavior` | String | One of 'default', 'desktop', 'mobile'. The last two override the breakpoint and makes Drawer act only as on desktop or only as on mobile modes, regardless of window width. |
| `no-hide-on-route-change` | Boolean | (Quasar v0.15.7+) Disable hiding of Drawer during route changes. |
| `no-swipe-open` | Boolean | Disable ability to open Drawer by touch actions. |
| `no-swipe-close` | Boolean | Disable ability to close Drawer by touch actions. Useful if you have components in your Drawer which require touch actions. The backdrop will still work with touch actions. |
| `content-style` | Object | CSS Style in Object format for the Drawer container element. |
| `content-class` | String/Object/Array | CSS classes for the Drawer container element. |
| `mini` | Boolean | (v0.15.11+) If drawer is in mini mode or not. |
| `mini-width` | Number | (v0.17+) CSS unit for drawer width when in mini mode. Default: 60 |
| `width` | Number | The width in pixels of the drawer (when not in mini mode). Default: 300 |
| `show-if-above` | Boolean | The initial state of the drawer when it gets rendered for first time, overriding the model (which might have been previously set to "false" by a user toggle). |

## QLayoutDrawer Vue Methods

| Vue Property | Description |
| --- | --- |
| `@on-layout(Boolean)` | String | (v0.17.9+) Emitted when Drawer toggles using space on Layout. |

## Styling Examples

```html
<q-layout-drawer
  content-class="bg-grey-3"
  :content-style="{padding: '20px'}"
  side="left"
>
  ...
</q-layout-drawer>
```

The Vue Object notation for `content-style` is mandatory.

```html
<q-layout-drawer
  :content-class="['bg-grey-3', 'q-pa-sm']"
  side="left"
>
  ...
</q-layout-drawer>
```

## The Breakpoint

If you've played with the layout in desktop mode, you might notice how the left and right sides / drawers magically hide, as you decrease the screen width. This is part of the smart responsiveness designed into Quasar's layout component.

If you'd like to control how the left and right side / drawers work, you have a prop called `breakpoint` on each QLayoutDrawer. This value represents the minimum size of the screen in pixels, before the Drawer is forced to float above the Layout. This is a fantastic and important function in maximizing screen real estate for smaller devices.

**Tip**
Also take a look at the `behavior` property if you want the Drawer to act only as on a narrow screen or only as on a wide screen, effectively disable the breakpoint.

## Using v-model
There's the possibility to use `v-model` to control the state of Drawer (opened/showing and closed/hidden).

```html
<template>
  ...
  <q-layout-drawer v-model="drawer">
    ...
  </q-layout-drawer>
  ...
  <q-btn
    @click="drawer = !drawer"
    flat
    round
    dense
    icon="menu"
  />
  ...
</template>

<script>
export default {
  data () {
    return {
      // "false" means hidden
      // "true" means visible
      drawer: true
    }
  }
}
</script>
```

Please note that the model can instantly get changed upon Drawer being rendered if the breakpoint requires it.

## Mini mode
*Requires Quasar v0.15.11+*

Drawer can operate in two modes: 'normal' and 'mini', and you can switch between them by using the Boolean `mini` property on QLayoutDrawer. **Please note that "mini" mode does not apply when in "mobile" behavior.**

### CSS classes
There are some CSS classes that will help you customize the drawer when dealing with "mini" mode. These are very useful especially when using the "click" trigger:

| CSS Class | Description |
| --- | --- |
| `q-mini-drawer-hide` | Hide when drawer is in "mini" mode. |
| `q-mini-drawer-only` | Show only when drawer is in "mini" mode. |

You can also write your own CSS classes based on the fact that QLayoutDrawer has `q-layout-drawer-normal` CSS class when in "normal" mode and `q-layout-drawer-mini` when in "mini" mode. Also, when drawer is in "mobile" behavior, it gets `q-layout-drawer-mobile` CSS class.

### Slots
By default, when in "mini" mode, Quasar CSS hides a few DOM elements to provide a neat narrow drawer. But there may certainly be use-cases where you need a deep tweak. You can use the "mini" Vue slot of QLayoutDrawer just for that. The content of this slot will replace your drawer's default content when in "mini" mode.

```html
<template>
  ...
  <q-layout-drawer
    :mini="miniState"
  >
    <!-- drawer content when not "mini" -->

    <div slot="mini">
      <!-- drawer content when in "mini" mode -->
    </div>
  </q-layout-drawer>
  ...
</template>

<script>
export default {
  data () {
    return {
      miniState: false
    }
  }
}
</script>
```

### Example with mouseover/mouseout trigger
```html
<template>
  ...
  <q-layout-drawer
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
  >
    <!-- drawer content -->
  </q-layout-drawer>
  ...
</template>

<script>
export default {
  data () {
    return {
      miniState: false
    }
  }
}
</script>
```

### Example with click trigger
When in "mini" mode, if user clicks on Drawer then we switch to normal mode.

```html
<template>
  ...
  <q-layout-drawer
    :mini="miniState"
    @click.capture="drawerClick"
  >
    <!-- drawer content -->
    <!--
      we also need a way for user to be able to switch
      back to "mini" mode, so here's an example with a button
      which gets hidden when on "mini" mode:
    -->
    <q-btn
      class="q-mini-drawer-hide"
      label="Go to mini state"
      @click="miniState = true"
    />
  </q-layout-drawer>
  ...
</template>

<script>
export default {
  data () {
    return {
      miniState: false
    }
  },
  methods: {
    drawerClick (e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation()
      }
    }
  }
}
</script>
```
