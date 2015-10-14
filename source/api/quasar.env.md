title: Environment
---

The `quasar.env` object deals with detecting the capabilities of the environment. You can access the following properties:

| Property | Type | Meaning |
 ----------------- | ---------------------------- |
| quasar.env.mobile | boolean | Is the code running on a mobile device? |
| quasar.env.cordova | boolean | Is the code running inside Cordova? |
| quasar.env.touch | boolean | Is the code running on a touch capable screen? |

> **Note:** Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova app.
