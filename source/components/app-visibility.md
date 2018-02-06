title: App Visibility
---
Quasar makes use of the Web [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) which lets you know when a website/app is visible or in focus.

<input type="hidden" data-fullpage-demo="web-api-wrappers/app-visibility">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  plugins: ['AppVisibility']
}
```

## Basic Usage
``` js
// outside of a Vue file
import { AppVisibility } from 'quasar'

(Boolean) AppVisibility.appVisible

// inside of a Vue file
(Boolean) this.$q.appVisible
```

## Example
Watching for browser tab / app visibility changes:

```html
// vue file
<template>...</template>

<script>
export default {
  watch: {
    '$q.appVisible' (val) {
      console.log(val ? 'App has focus now' : 'App lost focus (was minimized')
    }
  }
}
</script>
```
