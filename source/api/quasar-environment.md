title: Quasar Environment
type: api
order: 2
---

Helpers are built-in to detect the environment in which the code is running:

| Property | Type | Meaning |
 ----------------- | ---------------------------- |
| quasar.runs.on.mobile | boolean | Is the code running on a mobile device? |
| quasar.runs.on.cordova | boolean | Is the code running inside Cordova? |
| quasar.runs.with.touch | boolean | Is the code running on a touch capable screen? |

> **Note:** Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova app.
