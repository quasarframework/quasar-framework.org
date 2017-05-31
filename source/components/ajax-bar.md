title: Ajax Bar
---
Ajax Bar is a component which displays a loading bar (like Youtube) whenever an Ajax call (regardless of Ajax library used) is in progress. It can be manually triggered as well.
<input type="hidden" data-fullpage-demo="web-components/ajax-bar">

## Basic Usage
As long as this component is rendered by Vue it will capture all Ajax calls.
``` html
<q-ajax-bar />
```

Best way is to place it in your App root component (`App.vue` if you are using the default Quasar template):
``` html
<template>
  <div id="q-app">
    <router-view></router-view>
    <q-ajax-bar />
  </div>
</template>
```

> **IMPORTANT**
> Do not simultaneously use more than one Ajax Bar component in your App.

## Vue Properties
| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| `position` | String | 'top' | Where to place the loading bar: 'top', 'bottom', 'left' or 'right'. |
| `size` | String | '4px' | Thickness of loading bar. |
| `color` | String | '#e21b0c' | CSS color of loading bar. |
| `speed` | Number | 250 | How fast should loading bar update its value (in milliseconds). |
| `delay` | Number | 1000 | How much should loading bar wait before showing loading bar after it's triggered (in milliseconds). |
| `reverse` | Boolean | `false` | Reverse direction of loading bar. |

## Vue Methods
Only if you want to also trigger it manually. Ajax calls trigger these methods automatically.

| Vue Method | Description |
| --- | --- |
| `start()` | Trigger loading bar. |
| `stop()` | Notify one event has finished. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@start` | Triggered when loading bar has been triggered to be displayed. |
| `@stop` | Triggered when loading bar finished its work and goes hidden. |

> If multiple events are captured by Ajax Bar simultaneously, `@start` and `@stop` will still be triggered only once: when loading bar starts showing up and when it goes hidden.

## How start/stop works
Each Ajax call makes a `start()` call when it is triggered. When it ends, it calls `stop()`. So yes, if you also manually trigger Ajax Bar you must call `start()` each time a new event is starting and `stop()` each time an event finished. Ajax Bar knows to handle multiple events simultaneously.
