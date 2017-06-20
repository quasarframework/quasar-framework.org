title: Material Ripples
---
Material Ripple effect can easily be added to any DOM element (or component) through the `v-ripple` Quasar directive. Following these steps:

1. Make sure your DOM element or component has CSS `position: relative` or Quasar CSS helper class `relative-position` attached to it.

2. Add `v-ripple` directive to it.

The color of the ripples are determined by the text color (CSS 'color' prop) of the DOM element.

<input type="hidden" data-fullpage-demo="style-and-identity/material-ripples">

## Basic Usage

```html
<div class="relative-position" v-ripple>
  ....
</div>
```

## Trigger only for one Quasar theme
For this you need to specify `mat` or `ios` directive modifiers like this:

```html
<!-- Only for Quasar Material theme -->
<div v-ripple.mat class="relative-position">...</div>

<!-- Only for Quasar iOS theme -->
<div v-ripple.ios class="relative-position">...</div>
```

## Dynamic Disable
If for some reason you have a scenario where the ripples need to be disabled, then you can assign a Boolean as value for the directive.

```html
<template>
  <div
    v-ripple="rippleEnabled"
    class="relative-position"
  >
    <q-checkbox
      v-model="rippleEnabled"
      label="Enable Ripples"
    />
    .....
  </div>
</template>

<script>
export default {
  data () {
    return {
      rippleEnabled: true
    }
  }
}
</script>
```

When your Vue scope variable `rippleEnabled` becomes Boolean `false` then the ripple will be disabled.
You can also combine this with the `mat` and `ios` modifiers.
