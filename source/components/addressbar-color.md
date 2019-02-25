title: Mobile Addressbar Coloring
---
Newer mobile browsers have the ability to specify a color for the addressbar, like in the example below.

> **Note 1.** There isn't yet a Web standard for this so it won't work for all mobile browsers.
> **Note 2.** This applies when building a website only. For coloring top bar on a mobile app (built with Cordova mode), please refer to [cordova-plugin-statusbar](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-statusbar/).

![Mobile Addressbar Coloring](/images/mobile-address-bar-colors.jpg "Mobile Addressbar Coloring")

## Basic Usage

First, we need to indicate that we want the AddressbarColor Quasar plugin embedded into our website/app:

```js
// file: /quasar.conf.js
framework: {
  plugins: ['AddressbarColor']
}
```

Then we create an app plugin to initialize its usage: `quasar new plugin addressbar-color`. A file is created (`/src/plugins/addressbar-color.js`). We edit it:

```js
import { AddressbarColor } from 'quasar'

export default () => {
  AddressbarColor.set('#a2e3fa')
}
```

What this does is that it injects some `<meta>` tags into your `index.html` at runtime. This means, as an example, that you can dynamically change this color during runtime multiple times, based on the page the user is on (by calling `set` method on `created()` lifecycle hook on the respective pages):

```js
// a .vue file representing a page
export default {
  // ...,
  created () {
    this.$q.addressbarColor.set('#a2e3fa')
  }
}
```

Calling `set()` with no parameters will use the primary color.
