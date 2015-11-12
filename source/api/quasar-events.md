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
There is a global events emitter already available for you to use: `quasar.global.events`. For this emitter it is highly recommended to only register callbacks for existing events and not create new events.

## Emitter Methods

### Registering an Event
`emitter.on(String eventName, Function callback[, Object context])`

Example:
``` js
var context = {...}; // will be used as *this* within callback
emitter.on('event-name', function(param1, param2, ...paramN) { ... }, context);

// Callback parameters (param1, ...paramN) are determined when triggering the event
```

### Removing an Event
`emitter.off(String eventName[, Function callback])`

Example of unregistering an event:
``` js
emitter.off('event-name');
// 'event-name' does no longer has any callbacks
```

Example of unregistering a specific callback for an event:
``` js
var callback = function(...) {...};
emitter.on('event-name', callback);
emitter.off('event-name', callback);
// 'event-name' still exists, but does not contain the above callback anymore
```

### Registering an Event Only Once
`emitter.once(String eventName, Function callback[, Object context])`

Sometimes you need to trigger a callback only once.
Example:
``` js
var callback = function(...) {...};
emitter.once('event-name', callback);
// callback will be triggered only once
```

### Triggering an Event
`emitter.trigger(String eventName)`

Example:
``` js
emitter.trigger('event-name');
// All callbacks associated with 'event-name' will be triggered
// in the order that they were registered.
```

### Checking if Event is Registered
`Boolean emitter.hasEvent(String eventName[, Function callback])`

Example:
``` js
// Check if 'event-name' has any callbacks associated
var exists = emitter.hasEvent('event-name');

// Check if a callback is registered with 'event-name':
function myFunction() {...};
var exists = emitter.hasEvent('event-name', myFunction);
```

### Getting List of Events
`Array emitter.getEventsList()`

Example:
``` js
var eventsList = emitter.getEventsList();
```
