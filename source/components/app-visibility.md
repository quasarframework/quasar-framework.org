title: App Visibility
---
Quasar makes use of the Web [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) which lets you know when a website/app is visible or in focus.

<input type="hidden" data-fullpage-demo="other/app-visibility">

``` js
import { AppVisibility } from 'quasar'

(Boolean) AppVisibility.isVisible()
```

There is also an event triggered when focus changes (read about Quasar Global Event Bus [here](/components/global-event-bus.html)):

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:visibility | (String) state | App got focus if `state` is `visible` or lost focus if `state` is `hidden` |
