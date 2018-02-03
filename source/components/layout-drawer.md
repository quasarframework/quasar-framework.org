title: Layout Drawer
---
[QLayout](/components/layout.html) allows you to configure your views as a 3x3 matrix, containing an optional Header and/or Footer. If you haven't already, please read QLayout documentation page first.

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
| `no-swipe-open` | Boolean | Disable ability to open Drawer by touch actions. |
| `no-swipe-close` | Boolean | Disable ability to close Drawer by touch actions. Useful if you have components in your Drawer which require touch actions. The backdrop will still work with touch actions. |
| `contentStyle` | Object | CSS Style in Object format for the Drawer container element. |
| `contentClass` | String/Object/Array | CSS classes for the Drawer container element. |

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
      sides: {
        // "false" means hidden
        // "true" means visible
        drawer: true
      }
    }
  }
}
</script>
```

Please note that the model can instantly get changed upon Drawer being rendered if the breakpoint requires it.
