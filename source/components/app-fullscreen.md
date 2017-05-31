title: Fullscreen
---
There are times when you want your website or App to run in fullscreen.
Quasar makes it easy by wrapping the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

<input type="hidden" data-external-demo="other/app-fullscreen">

``` js
import { AppFullscreen } from 'quasar'

// Determining if website is in fullscreen mode:
(Boolean) AppFullscreen.isActive()

// Requesting fullscreen mode:
AppFullscreen.request()

// Exiting fullscreen mode:
AppFullscreen.exit()

// Toggle fullscreen mode:
AppFullscreen.toggle()
```
