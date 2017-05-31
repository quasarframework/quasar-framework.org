title: Platform Detection
---

Helpers are built-in to detect the Platform (and its capabilities) in which the code is running:

<input type="hidden" data-fullpage-demo="other/platform-detection">

``` js
// Usage outside a Vue component
import { Platform } from 'quasar'

// or usage inside a Vue component JS:
this.$q.platform.is.mobile

// or usage inside a Vue component template:
$q.platform.is.cordova
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

> **NOTE**
> When trying to show DOM elements only on a platform you can skip using Javascript and make use of Quasar CSS classes (which is more efficient). Read about this here: [Design Helpers &gt; Visibility](/components/visibility.html#Platform-Related).
