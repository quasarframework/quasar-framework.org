title: Handling Touch Events
---

Quasar makes good use of <a href="http://hammerjs.github.io/" target="_blank">HammerJS</a> and has specific API to nicely wrap touch events.

## Vue 'v-touch' directive
Quasar has its own Vue directive written for handling touch events:

``` html
<div v-touch:event="method_name">...</div>
<!-- ..where "event" is the name of the Touch action -->

<div v-touch:pan="panning">...</div>
```

Here's the list of touch events supported by HammerJS: `pan`, `pinch`, `press`, `rotate`, `swipe`, `tap`. Basically, any touch action that HammerJS has, so visit their website to get updates.

> Just make sure that the method you supply to the directive is registered in your Vue, be that the Quasar Page Vue instance, the Quasar Layout Vue instance or any other Vue instance containing the respective node.

Example of declaring the method used for the touch action:
``` js
new Vue({ // or in Page/Layout definition 'module.exports = {...}'

  template: '<div v-touch:pan="panning">Touch Enabled Node</div>',
  methods: {
    panning: function(hammer) {
      // 'hammer' variable has the Hammer object
      // which describes the Touch Event

      // hammer.deltaX, hammer.deltaY, ...
    }
  }

});
```

### Custom Touch Events
There's a way to write your own custom Touch Events. Here's an example:

``` js
quasar.register.custom.touch.event({
  event: 'doubletap',
  type: 'tap',
  taps: 2
});
```
``` html
<div v-touch:doubletap="doubleTapped">...</div>
```

## Through jQuery

There are two methods you can use to manage Hammer:
``` js
var node = $(...);

// Initialize Hammer on DOM node
node.hammer(hammerOptions);

// Get Hammer instance from node
var hammer = node.getHammer();
hammer.on('pan', function() {...});
```

Don't worry, jQuery events are still emitted when using Hammer this way.
