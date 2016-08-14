title: Modal
---
Quasar Modals slide in off screen to display a temporary UI, often used for login or signup pages, message composition, and option selection.

<input type="hidden" data-fullpage-demo="global/modal">

## Basic Usage
``` js
import { Modal } from 'quasar'

// syntax
(Modal Object) Modal.create(VueModel Object)

// basic example:
var modal = Modal.create({
  template: 'This is a basic modal. <button class="secondary" @click="close()">Close Me</button>'
})

// do NOT forget to call:
modal.show()
```

Since Modal requires a VueModel object, you can also import a `*.vue` file and use it:
``` js
import { Modal } from 'quasar'
import LoginScreen from './login.vue'

Modal.create(LoginScreen).show()
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
import { Modal } from 'quasar'

let modal = Modal.create(...)

modal.set('selfDestroy', false)
modal.show()
```

> **IMPORTANT**
> You can also close your Modal from within the Modal's template. The VueModel of any Modal is automatically injected with `close()` method which you can use in your modal template.

## Triggering Events
``` js
import { Modal } from 'quasar'

Modal.create({
  template: '...'
})
.onShow(function() {
  console.log('onShow triggered')
})
.onClose(function() {
  console.log('onClose triggered')
})
.show()
```

## Styling Modals
``` js
import { Modal } from 'quasar'

Modal.create({
  template: '...'
})
.css({
  padding: '50px',
  minWidth: '50vw'
})
.show()
```

## Layout Modals
``` js
import { Modal } from 'quasar'

Modal.create({
  template: '...' // see below for template
}).css({
  minWidth: '80vw',
  minHeight: '80vh'
}).show()
```

``` html
<!-- template for Screen Modal above -->
<quasar-layout>

  <div slot="header" class="toolbar">
    <button @click="close()">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1">
      Header
    </quasar-toolbar-title>
    <button @click="openModal()"><i>open_in_new</i></button>
  </div>

  <div slot="footer" class="toolbar">
    <quasar-toolbar-title :padding="1">
      Footer
    </quasar-toolbar-title>
  </div>

  <div class="layout-view">
    <div class="layout-padding">
      <h1>Modal</h1>
      <p>
        <button class="primary" @click="openModal()">Open Another Modal</button>
      </p>
      <br>
      <p class="caption" v-for="n in 15">This is a Modal presenting a Screen.</p>
    </div>
  </div>

</quasar-layout>
```

## Always Minimized Modal
``` js
import { Modal } from 'quasar'

Modal.create({
  template: '...'
}).set({
  minimized: true
}).show()
```

## Always Maximized Modal
``` js
import { Modal } from 'quasar'

Modal.create({
  template: '...'
}).set({
  maximized: true
}).show()
```
