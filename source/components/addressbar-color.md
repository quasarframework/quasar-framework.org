title: Mobile Addressbar Coloring
---
Newer mobile browsers have the ability to specify a color for the addressbar, like in the example below.

> **Note 1.** There isn't yet a Web standard for this so it won't work for all mobile browsers.
> **Note 2.** This applies when building a website only. For coloring top bar on a mobile app (built with Cordova wrapper), please refer to [Cordova plugins](https://cordova.apache.org/plugins/).

![Mobile Addressbar Coloring](/images/mobile-address-bar-colors.jpg "Mobile Addressbar Coloring")

## Basic Usage

It's best to set this in your `src/main.js`, but it can go anywhere:
```js
import { AddressbarColor } from 'quasar'
AddressbarColor.set('#a2e3fa')
```

What this does it that it inject some `<meta>` tags into your `index.html` at runtime. This means, as an example, that you can dynamically change this color during runtime multiple times, based on the page the user is on (by calling `set` method on `created()` lifecycle hook on the respective pages).
