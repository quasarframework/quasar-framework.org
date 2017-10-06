title: Global Event Bus
---
Events are important for the inner workings of your App.
Sometimes you need an event bus or a publish/subscribe channel. Quasar provides this out of the box:

``` js
// outside of a Vue component:
import { Events } from 'quasar'
Events.$on('app:visibility', state => {
  console.log('App became', state)
})

// inside a Vue component:
this.$q.events.$on('app:visibility', state => {
  console.log('App became', state)
})
// in this case, make sure you unregister your handler
// when the Vue component gets destroyed
```

Full example inside a Vue component:
```js
// on a Vue component:
export default {
  ...,
  created () {
    this.handler = state => {
      console.log('App became', state)
    }
    this.$q.events.$on('app:visibility', this.handler)
  },
  beforeDestroy () {
    this.$q.events.$off('app:visibility', this.handler)
  }
}
```

Essentially, Events is just a Vue event bus that you can use throughout your App. If you know how to use Vue events, then you're all set to go.

> **IMPORTANT!**
> Not to be confused with events supported by Quasar Components. Those are Vue events emitted by the respective components and don't interfere with this global event bus.

## Methods

### Registering for an Event
`Events.$on(String eventName, Function callback)`

Example:
``` js
import { Events } from 'quasar'

Events.$on('some-event', (param1, param2) => {
  //...
})
```

### Removing Callback for an Event
`Events.$off(String eventName [, Function callback])`

``` js
import { Events } from 'quasar'

// Unregistering an event:
Events.$off('event-name')
// 'event-name' does no longer has any callbacks

// Unregistering a specific callback for an event:
let callback = function(...) {...}
Events.$on('event-name', callback)
Events.$off('event-name', callback)
// 'event-name' still exists (if other callbacks are registered to this event),
// but does not contain the above callback anymore
```

### Registering a Callback to Be Run Only Once
`Events.$once(String eventName, Function callback)`

Sometimes you need to trigger a callback only once. Example:
``` js
import { Events } from 'quasar'

let callback = function(...) {...}
Events.$once('event-name', callback)
// callback will be triggered only once
```

### Triggering an Event
`Events.$emit(String eventName [, Anything *arg])`

Example:
``` js
import { Events } from 'quasar'

Events.$emit('event-name')
// All callbacks associated with 'event-name' will be triggered
// in the order that they were registered.

// Trigger with parameters (as many as you want):
Events.$emit('event-name', {
  status: 10,
  message: 'wow',
  obj: true}
)
// The parameters will be used when calling all registered
// callbacks for 'event-name' --> callback({status: 10, message: 'wow',...});
```

## Quasar Events List
There are some events emitted by Quasar already that you can hook into.

### Global Events

| Event Name | Description |
| --- | --- |
| app:error | Triggered for any Javascript error. See parameters below. |

#### Parameter supplied by `app:error`
`app:error` event is triggerd with one parameter, an Object containing the following properties:

| Property Name | Type | Description |
| --- | --- | --- |
| message | String | Error message |
| source | String | URL of the script where the error was raised |
| lineno | Number | Line number where error was raised |
| colno | Number | Column number for the line where the error occurred |
| error | Object | Error Object containing amongst other things the stack trace |

### App Visibility

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:visibility | (String) state | App got focus if `state` is `visible` or lost focus if `state` is `hidden` |

Read more about it [here](/components/app-visibility.html).

### Toast

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:notify | (String) html | Is triggered whenever a Toast is displayed. |

Read more about it [here](/components/toast.html).

### Loading

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:loading | (Boolean) status | Triggered when Loading component is displayed (with `true` as param) or hidden (with `false` as param). |

Read more about it [here](/components/loading.html).
