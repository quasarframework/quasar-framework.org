title: Ajax Bar
---
Ajax Bar is a component which displays a loading bar (like Youtube) whenever an Ajax call (regardless of Ajax library used) is in progress. It can be manually triggered as well.

> **For a more convenient usage**, you may want to check [LoadingBar](/components/loading-bar.html) Quasar plugin. This page describes how the QAjaxBar component works should you want to directly use it yourself. Otherwise, if you want Quasar to take care of setting everything up, head to the LoadingBar page.

<input type="hidden" data-fullpage-demo="progress/ajax-bar">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QAjaxBar']
}
```

## Basic Usage
As long as this component is rendered by Vue it will capture all Ajax calls.
``` html
<q-ajax-bar />
```

The best way to use it is to place it in your App's root component (`App.vue` if you are using the default Quasar template):
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
| `size` | String | '4px' | Thickness of the loading bar. |
| `color` | String | 'red' | One from [Quasar Color Palette](/components/color-palette.html). |
| `reverse` | Boolean | `false` | Reverse direction of loading bar. |
| `skip-hijack` | Boolean | `false` | Avoid taking into account Ajax calls. |

## Vue Methods
Use this only if you want to also trigger it manually. Ajax calls trigger these methods automatically.

| Vue Method | Description |
| --- | --- |
| `start()` | Trigger loading bar. |
| `stop()` | Notify when event has finished. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@start` | Triggered when loading bar has been triggered for being displayed. |
| `@stop` | Triggered when loading bar has finished its work and becomes hidden. |

> If multiple events are captured by Ajax Bar simultaneously, `@start` and `@stop` will still be triggered only once: when loading bar starts showing up and when it becomes hidden.

## How start/stop works
Each Ajax call makes a `start()` call when it is triggered. When it ends, it calls `stop()`. So yes, if you also manually trigger Ajax Bar you must call `start()` each time a new event is starting and `stop()` each time an event finished. Ajax Bar knows to handle multiple events simultaneously.
