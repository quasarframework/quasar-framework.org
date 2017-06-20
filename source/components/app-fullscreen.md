title: Fullscreen
---
There are times when you want your website or App to run in fullscreen.
Quasar makes it easy by wrapping the Web [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

Please note that the behavior is different depending on the platform the code is running on, due to the fact that there isn't a fixed Web standard for Web Fullscreen API yet.
<input type="hidden" data-external-demo="web-api-wrappers/app-fullscreen">

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
