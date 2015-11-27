title: Quasar Environment
---

Helpers are built-in to detect the environment in which the code is running:

| Property | Type | Meaning |
| --- | --- | --- |
| quasar.runs.on.mobile | boolean | Is the code running on a mobile device? (Cordova or browser) |
| quasar.runs.on.cordova | boolean | Is the code running inside Cordova? |
| quasar.runs.on.desktop | boolean | Is the code running on a desktop browser? |
| quasar.runs.on.browser | boolean | Is the code running on a browser? (desktop or mobile) |
| quasar.runs.with.touch | boolean | Is the code running on a touch capable screen? |

> **NOTE**
> Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.
