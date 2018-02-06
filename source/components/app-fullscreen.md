title: Fullscreen
---
There are times when you want your website or App to run in fullscreen.
Quasar makes it easy by wrapping the Web [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

Please note that the behavior is different depending on the platform the code is running on, due to the fact that there isn't a fixed Web standard for Web Fullscreen API yet.
<input type="hidden" data-external-demo="web-api-wrappers/app-fullscreen">

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
import { AppFullscreen } from 'quasar'

// determine if platform has Fullscreen capability:
(Boolean) AppFullscreen.isCapable

// Determining if website is in fullscreen mode:
(Boolean) AppFullscreen.isActive

// Requesting fullscreen mode:
AppFullscreen.request()

// Exiting fullscreen mode:
AppFullscreen.exit()

// Toggle fullscreen mode:
AppFullscreen.toggle()
```

``` js
// inside of a Vue file

// determine if platform has Fullscreen capability:
(Boolean) this.$q.fullscreen.isCapable

// Determining if website is in fullscreen mode:
(Boolean) this.$q.fullscreen.isActive

// Requesting fullscreen mode:
this.$q.fullscreen.request()

// Exiting fullscreen mode:
this.$q.fullscreen.exit()

// Toggle fullscreen mode:
this.$q.fullscreen.toggle()
```

## Example
Watching for fullscreen changes:

```html
// vue file
<template>...</template>

<script>
export default {
  watch: {
    '$q.fullscreen.isActive' (val) {
      console.log(val ? 'In fullscreen now' : 'Exited fullscreen')
    }
  }
}
</script>
```
