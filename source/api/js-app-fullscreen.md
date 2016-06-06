title: Quasar Fullscreen
---
There are times when you want your website to run in fullscreen.
Quasar makes it easy by wrapping the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

<input type="hidden" data-external-demo="app-fullscreen">

``` js
// Determining if website is in fullscreen mode:
(Boolean) quasar.is.fullscreen();

// Requesting fullscreen mode:
quasar.request.fullscreen();

// Exiting fullscreen mode:
quasar.exit.fullscreen();

// Toggle fullscreen mode:
quasar.toggle.fullscreen();
```

> **NOTE**
> The API will not work when App is wrapped with Cordova.
