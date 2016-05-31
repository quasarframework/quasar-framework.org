title: Quasar Modal
---
Quasar Modals slide in off screen to display a temporary UI, often used for login or signup pages, message composition, and option selection.

<input type="hidden" data-fullpage-demo="modal">

## Basic Usage
``` js
// syntax
(Modal Object) new quasar.Modal(VueModel Object);

// basic example:
var modal = new quasar.Modal({
  template: 'This is a basic modal. <button class="secondary" @click="close()">Close Me</button>'
});

modal.show();
```

The *Modal Object* returned has the following methods:

| Modal Object Method | Parameters | Description |
| --- | --- | --- |
| `show` | Function onShow | Shows Modal and optionally executes the parameter Function |
| `close` | Function onClose | Closes Modal and optionally executes the parameter Function |
| `onShow` | Function | Triggers the Function when Modal is shown. Multiple calls allowed in which case a stack is built and executed in the order Functions were pushed. |
| `onClose` | Function | Triggers the Function when Modal is closed. Multiple calls allowed in which case a stack is built and executed in the order Functions were pushed. |
| `css` | Object | Object containing CSS properties as keys and their CSS values. CSS is applied to your Modal. |
| `set` | Object | Object containing Modal properties and their values. See explanations below at [Modal Object Properties](#Modal-Object-Properties). |
| `destroy` | *none* | Destroys your Modal and frees up the memory. Is called automatically `selfDestroy` property is set to `true`. |

### Modal Object Properties

On the Modal Object you can use the `set()` method to change any of these properties:

| Property | Type | Description |
| --- | --- | --- |
| `minimized` | Boolean | Modal is always minimized |
| `maximized` | Boolean | Modal is always maximized |
| `transitionIn` | Object | VelocityJS effect when Modal is displayed. Example: `{translateX: [0, '101%']}` |
| `transitionOut` | Object | VelocityJS effect when Modal is displayed. Example: `{translateX: ['101%', 0]}` |
| `selfDestroy` | Boolean | Modal gets destroyed when closed and memory is freed up. Default value is `true`. |

Example:
``` js
var modal = new quasar.Modal(...);

modal.set('selfDestroy', false);
```

> **IMPORTANT**
> You can also close your Modal from within the Modal's template. The VueModel of any Modal is automatically injected with `close()` method which you can use in your modal template.

## Triggering Events
``` js
new quasar.Modal({
  template: '...'
})
.onShow(function() {
  quasar.notify('onShow triggered');
})
.onClose(function() {
  quasar.notify('onClose triggered');
})
.show();
```

## Styling Modals
``` js
new quasar.Modal({
  template: '...'
})
.css({
  padding: '50px',
  minWidth: '50vw'
})
.show();
```

## Screen Modals
``` js
new quasar.Modal({
  template: '...' // see below for template
}).css({
  minWidth: '80vw',
  minHeight: '80vh'
}).show();
```

``` html
<!-- template for Screen Modal above -->
<screen>
  <div slot="header" class="row items-center">
    <button @click="close()"><i>keyboard_arrow_left</i></button>
    <p>Header</p>
  </div>
  <div slot="footer" class="row items-center">
    <p>Footer</p>
  </div>

  <div style="padding: 20px">
    <h1>Screen Modal Content</h1>
  </div>
</screen>
```

## Always Minimized Modal
``` js
new quasar.Modal({
  template: '...'
}).set({
  minimized: true
}).show();
```

## Always Maximized Modal
``` js
new quasar.Modal({
  template: '...'
}).set({
  maximized: true
}).show();
```
