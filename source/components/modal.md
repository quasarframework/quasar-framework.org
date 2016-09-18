title: Modal
---
Quasar Modals slide in off screen to display a temporary UI, often used for login or signup pages, message composition, and option selection.

<input type="hidden" data-fullpage-demo="global/modal">

> Check bottom of this page to learn about `<quasar-modal>` component for inlining a Modal into your Component's template.

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
| `close` | Function onClose | Closes Modal and optionally executes the parameter Function; if `selfDestroy` is set to true it will also destroy the VueModel |
| `onShow` | Function | Triggers the Function when Modal is shown. Multiple calls allowed in which case a stack is built and executed in the order Functions were pushed. |
| `onClose` | Function | Triggers the Function when Modal is closed. Multiple calls allowed in which case a stack is built and executed in the order Functions were pushed. |
| `css` | Object | Object containing CSS properties as keys and their CSS values. CSS is applied to your Modal. |
| `set` | Object | Object containing Modal properties and their values. See explanations below at [Modal Object Properties](#Modal-Object-Properties). |
| `destroy` | *none* | Destroys your Modal and frees up the memory. Is called automatically if `selfDestroy` property is set to `true`. |

> **IMPORTANT**
> <br>When user hits the browser/phone/tablet back button, the Modal will get closed automatically. This behavior is disabled when running your App within an iframe though.
> <br>Also, when on a browser, hitting the &lt;ESCAPE&gt; key also closes the Modal.

### Communicating with Modal VM
The Modal VueModel can be accessed as `vm` property of the returned *Modal Object*:

``` js
import { Modal } from 'quasar'

let modal = Modal.create({data: {progress: 1}})
modal.show()
// ...do something ...
modal.vm.progress = 10
```

It is recommended that you use Vuex to communicate between VueModels though.

### Closing Modal
Of course, you saw the returned *Modal Object* has a `close()` method.
But there is also a faster and more convenient way to close the Modal: through one injected method to any Modal's VueModel: `close()`. You can use it to close your Modal from within the Modal's template:

``` html
<!-- Modal template -->
<button @click="close()">Close Modal</button>
```

> **IMPORTANT**
> Creating a Modal with VM object containing method `close()` is forbidden as Quasar will overwrite it when injecting it.

Make you also understand the `selfDestroy` property. If set to `true`, whenever you close or destroy your Modal, its VueModel will also get destroyed. If you want to keep your Modal usable, set property to false:
``` js
import { Modal } from 'quasar'

let modal = Modal.create(...)

// we want to reuse the Modal after showing it,
// so we set "selfDestroy" to "false"
modal.set({selfDestroy: false})
modal.show()

// now we can close it and open it up again
// as many times as we want
modal.close()
modal.show()
modal.close()

// IMPORTANT!
// But make sure you destroy it after you
// don't need it anymore:
modal.destroy()
```

### Modal Object Properties

On the Modal Object you can use the `set()` method to change any of these properties:

| Property | Type | Description |
| --- | --- | --- |
| `minimized` | Boolean | Modal is always minimized |
| `maximized` | Boolean | Modal is always maximized |
| `transitionIn` | Object | VelocityJS effect when Modal is displayed. Example: `{translateX: [0, '101%']}` |
| `transitionOut` | Object | VelocityJS effect when Modal is displayed. Example: `{translateX: ['101%', 0]}` |
| `selfDestroy` | Boolean | Modal gets destroyed when closed and memory is freed up. Default value is `true`. |
| `onBackButton` | Function | Function to execute if user clicks on back browser/phone/tablet button. |
| `onEscapeKey` | Function | Function to execute if user is on desktop and hits &lt;ESCAPE&gt; key. |
| `closeWithBackdrop` | Boolean | Modal can be closed by clicking/tapping on the backdrop. |

Example:
``` js
import { Modal } from 'quasar'

let modal = Modal.create(...)

modal.set({minimized: true})
modal.show()
```

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

## Template Inline Modal
``` html
<quasar-modal
  v-ref:modal
  :set="{minimized: true}"
  :css="{minWidth: '30vw', minHeight: '30vh'}"
>
  <div style="padding: 50px">
    <h4>Template Inline Modal</h4>
    <p>Variable from parent Vue scope: {{ modalVariable }}</p>
    <br><br>
    <button class="primary" @click="$refs.modal.close()">Close</button>
  </div>
</quasar-modal>

<!--
  Also inject a way to show it to the user.
  In this case, a button. You can show/hide it from Vue methods too, obviously.
-->
<button
  class="primary"
  @click="$refs.modal.show()"
>
  Show Inline Modal
</button>
```
