title: Platform Detection
---

Helpers are built-in to detect the Platform (and its capabilities) in which the code is running:
<input type="hidden" data-fullpage-demo="misc/platform-detection">

``` js
// For usage inside a Vue component JS:
this.$q.platform.is.mobile

// or usage inside a Vue component template:
$q.platform.is.cordova

// Only for usage outside a Vue component you need to import it:
import { Platform } from 'quasar'
```

| Property | Type | Meaning |
| --- | --- | --- |
| Platform.is.mobile | boolean | Is the code running on a mobile device? |
| Platform.is.cordova | boolean | Is the code running within Cordova? |
| Platform.is.desktop | boolean | Is the code running on a desktop browser? |
| Platform.is.chromeExt | boolean | Is the code running is a Chrome extension environment? |
| Platform.has.touch | boolean | Is the code running on a touch capable screen? |
| Platform.within.iframe | boolean | Is the App running within an IFRAME? |

> **NOTE**
> Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.

Other **Platform.is** specific properties:
`android`, `blackberry`, `cros`, `ios`, `ipad`, `iphone`, `ipod`, `kindle`, `linux`, `mac`, `playbook`, `silk`, `chrome`, `opera`, `safari`, `win` (Windows), `winphone` (Windows Phone) and more...

Example when running Chrome on a Linux desktop machine:
``` js
// Describing Platform.is
{
  chrome: true,
  desktop: true,
  linux: true,
  name: "chrome",
  platform: "linux",
  version: "47.0.2526.80",
  versionNumber: 47,
  webkit: true
}
```

## Usage
Let's say we want to render different components or DOM elements, based on the platform that the code is running under. We want to show something on desktop and something else on mobile. We would proceed like this:

```html
<div v-if="$q.platform.is.desktop">
  I'm only rendered on desktop!
</div>

<div v-if="$q.platform.is.mobile">
  I'm only rendered on mobile!
</div>
```

> **NOTE**
> Based on your needs, you might want to also check [Design Helpers &gt; Visibility](/components/visibility.html#Platform-Related) page to see how you can achieve the same effect using CSS alone. This latter method will render your DOM elements or components regardless of platform though, so choose wisely on how you want to handle the performance of your app.
