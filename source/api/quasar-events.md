title: Quasar Events
---
Events are important for the inner workings of your App and also for writing Quasar Plugins.
Sometimes you need an event bus or a publish/subscribe channel. An emitter solves this need.

## Creating an Emitter
We call an emitter an object who is capable of registering and triggering events.

There are two ways to create one:
``` js
// create a new Object
var emitter = quasar.create.events.emitter();

// make existing Object an emitter
var object = {...};
quasar.make.events.emitter(object);
```

### Check if Object is Emitter
You can also check if an object is an emitter:
``` js
var someObject = {...};
var isEmitter = quasar.is.events.emitter(someObject);
```

### Global Events Emitter
There is a global events emitter already available for you to use: `quasar.global.events`. Make sure you *DON'T* name your own events to match the ones that Quasar uses by default (see list [here](/guide/writing-quasar-page.html#Page_Events)). It is recommended that you create your own global emitters to avoid event naming problems.

## Emitter Methods

> **NOTE**
> Event name must *NOT* contain space characters, otherwise the string will be considered as containing multiple events names.

### Registering an Event/Callback
`emitter.on(String eventNames, Function callback [, Object context])`

Example:
``` js
var context = {...}; // will be used as *this* within callback
emitter.on('event-name', function(param1, param2, ...paramN) { ... }, context);

// The params that are used when triggering the event are passed on
// to each callback.

// We can register multiple events at once:
emitter.on('event1 event2 eventN', callback);
```

### Removing an Event/Callback
`emitter.off(String eventNames [, Function callback])`

``` js
// Unregistering an event:
emitter.off('event-name');
// 'event-name' does no longer has any callbacks

// Unregistering a specific callback for an event:
var callback = function(...) {...};
emitter.on('event-name', callback);
emitter.off('event-name', callback);
// 'event-name' still exists (if other callbacks are registered to this event),
// but does not contain the above callback anymore

// We can remove callback from multiple events at once:
emitter.off('event1 event2 eventN', callback);

// or we can remove all callbacks from multiple events at once:
emitter.off('event1 event2 eventN');

// or we can remove all callbacks and all events at once:
emitter.off();
```

### Registering a Callback to Be Run Only Once
`emitter.once(String eventNames, Function callback [, Object context])`

Sometimes you need to trigger a callback only once. Example:
``` js
var callback = function(...) {...};
emitter.once('event-name', callback);
// callback will be triggered only once

// We can also register callback to be triggered once
// for multiple events at once:
emitter.once('event1 event2', callback);
// callback will be triggered only once for 'event1'
// AND only once more for 'event2'
// ... so triggering 'event1' and 'event2' multiple times
// will run callback a total of 2 times
```

### Triggering an Event
`emitter.trigger(String eventNames [, Anything *args])`

Example:
``` js
emitter.trigger('event-name');
// All callbacks associated with 'event-name' will be triggered
// in the order that they were registered.

// Trigger with parameters (as many as you want):
emitter.trigger('event-name', 10, 'wow', {obj: true});
// These parameters will be used when calling all registered
// callbacks for 'event-name' --> callback(10, 'wow', {obj: true});

// We can also trigger multiple events at once:
emitter.trigger('event1 event2 event3');
emitter.trigger('event1 event2 event3', 10, 'wow', {obj: true});

// We can also trigger ALL registered events at once:
emitter.trigger();
```

### Checking for Subscribers
`Boolean emitter.hasSubscriber(String eventNames [, Function callback])`
or
`Boolean emitter.hasSubscriber(Function callback)`

Example:
``` js
// Check if 'event-name' has any callbacks associated
var exists = emitter.hasSubscriber('event-name');

// Check if a callback is registered for an event:
function myFunction() {...};
var exists = emitter.hasSubscriber('event-name', myFunction);

// Check if a callback is registered for any of the specified events
var exists = emitter.hasSubscriber('event1 event2', myFunction);

// Check if a callback is registered for any events
var exists = emitter.hasSubscriber(myFunction);

// Check if an emitter has any events/callbacks at all:
var exists = emitter.hasSubscriber();
```

### Getting List of Events
`Array emitter.getEventsList()`

Example:
``` js
var eventsList = emitter.getEventsList();
```
