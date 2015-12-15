title: Quasar Environment
---

Helpers are built-in to detect the environment in which the code is running:

| Property | Type | Meaning |
| --- | --- | --- |
| quasar.runs.on.mobile | boolean | Is the code running on a mobile device? |
| quasar.runs.on.cordova | boolean | Is the code running within Cordova? |
| quasar.runs.on.desktop | boolean | Is the code running on a desktop browser? |
| quasar.runs.with.touch | boolean | Is the code running on a touch capable screen? |

Platform specific:
* android
* lackberry
* cros
* ios
* ipad
* iphone
* ipod
* kindle
* linux
* mac
* playbook
* silk
* chrome
* opera
* safari
* win (Windows)
* winphone (Windows Phone)
* & more...

Example when running Chrome on a Linux desktop machine:
``` js
quasar.runs.on = {
  chrome: true,
  desktop: true,
  linux: true,
  name: "chrome",
  platform: "linux",
  version: "47.0.2526.80",
  versionNumber: 47,
  webkit: true
};
```

> **NOTE**
> Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.
