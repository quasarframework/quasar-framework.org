title: Global Event Bus
---
Events are important for the inner workings of your App.
Sometimes you need an event bus or a publish/subscribe channel. Vue already has an event bus for each component. For convenience, you can use the root Vue component for this through `this.$root` to register and listen for events.

> **IMPORTANT!**
> Not to be confused with events supported by Quasar Components. Those are Vue events emitted by the respective components and don't interfere with the global event bus.

Please check the Vue [Instance Methods / Events](https://vuejs.org/v2/api/#Instance-Methods-Events) page for the API. Then let's see how, for example, to register an event on the root Vue component of your app:

```js
// callback
function cb (msg) {
  console.log(msg)
}

// listen for an event
this.$root.$on('event_name', cb)

// listen once (only) for an event
this.$root.$once('event_name', cb)

// Make sure you stop listening for an event
// when your respective component gets destroyed
this.$root.$off('event_name', cb)


// Emitting an event:
this.$root.$emit('event_name', 'some message')
```
