title: Events
---
Events are important for the inner workings of your App.
Sometimes you need an event bus or a publish/subscribe channel. Quasar provides this out of the box:

``` js
import { Events } from 'quasar'
```

## Methods

> **NOTE**
> Event name must *NOT* contain space characters, otherwise the string will be considered as containing multiple events names.

### Registering an Event/Callback
`Events.on(String eventNames, Function callback [, Object context])`

Example:
``` js
import { Events } from 'quasar'

let context = {...} // will be used as *this* within callback
Events.on('event-name', function(param1, param2, ...paramN) { ... }, context)

// The params that are used when triggering the event are passed on
// to each callback.

// We can register multiple events at once:
Events.on('event1 event2 eventN', callback)
```

### Removing an Event/Callback
`Events.off(String eventNames [, Function callback])`

``` js
import { Events } from 'quasar'

// Unregistering an event:
Events.off('event-name')
// 'event-name' does no longer has any callbacks

// Unregistering a specific callback for an event:
let callback = function(...) {...}
Events.on('event-name', callback)
Events.off('event-name', callback)
// 'event-name' still exists (if other callbacks are registered to this event),
// but does not contain the above callback anymore

// We can remove callback from multiple events at once:
Events.off('event1 event2 eventN', callback)

// or we can remove all callbacks from multiple events at once:
Events.off('event1 event2 eventN')

// or we can remove all callbacks and all events at once:
Events.off()
```

### Registering a Callback to Be Run Only Once
`Events.once(String eventNames, Function callback [, Object context])`

Sometimes you need to trigger a callback only once. Example:
``` js
import { Events } from 'quasar'

let callback = function(...) {...}
Events.once('event-name', callback)
// callback will be triggered only once

// We can also register callback to be triggered once
// for multiple events at once:
Events.once('event1 event2', callback)
// callback will be triggered only once for 'event1'
// AND only once more for 'event2'
// ... so triggering 'event1' and 'event2' multiple times
// will run callback a total of 2 times
```

### Triggering an Event
`Events.trigger(String eventNames [, Anything *args])`

Example:
``` js
import { Events } from 'quasar'

Events.trigger('event-name')
// All callbacks associated with 'event-name' will be triggered
// in the order that they were registered.

// Trigger with parameters (as many as you want):
Events.trigger('event-name', 10, 'wow', {obj: true})
// These parameters will be used when calling all registered
// callbacks for 'event-name' --> callback(10, 'wow', {obj: true});

// We can also trigger multiple events at once:
Events.trigger('event1 event2 event3')
Events.trigger('event1 event2 event3', 10, 'wow', {obj: true})

// We can also trigger ALL registered events at once:
Events.trigger()
```

### Checking for Subscribers
`Boolean Events.hasSubscriber(String eventNames [, Function callback])`
or
`Boolean Events.hasSubscriber(Function callback)`

Example:
``` js
import { Events } from 'quasar'

// Check if 'event-name' has any callbacks associated
let exists = Events.hasSubscriber('event-name')

// Check if a callback is registered for an event:
function myFunction() {...};
let exists = Events.hasSubscriber('event-name', myFunction)

// Check if a callback is registered for any of the specified events
let exists = Events.hasSubscriber('event1 event2', myFunction)

// Check if a callback is registered for any events
let exists = Events.hasSubscriber(myFunction)

// Check if an emitter has any events/callbacks at all:
let exists = Events.hasSubscriber()
```

### Getting List of Events
`Array Events.getEventsList()`

Example:
``` js
import { Events } from 'quasar'

let eventsList = Events.getList()
```


## Events List
``` js
import { Events } from 'quasar'

Events.on('event-name', callback)
```

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

Read more about it [here](/api/js-app-visibility.html).

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
