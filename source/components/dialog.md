title: Dialog
---
Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).

From a UI perspective, you can think of Dialogs as a type of “floating” modal, which covers only a portion of the screen. This means Dialogs should only be used for quick actions, like password verification, small App notifications or quick options. More in depth user flows should be reserved for ​Modals​.
<input type="hidden" data-fullpage-demo="popups/dialog">

> Dialogs can be used either as a component in your Vue file templates (for complex use-cases, like specific form components with validation etc), or as a globally available method (for some basic use cases, equivalent to native JS alert(), prompt(), ...).

## Basic Usage as a Method
First, we install it:

Edit `/quasar.conf.js`:
```js
framework: {
  plugins: ['Dialog']
}
```

Now let's see how we can use it:
``` js
// outside of a Vue file
import { Dialog } from 'quasar'
(Promise) Dialog.create(configObj)

// inside of a Vue file
(Promise) this.$q.dialog(configObj)
```

Basic syntax for the config object:
``` js
this.$q.dialog({
  title: 'Warning',
  message: 'You are about to run out of disk space.',

  // optional
  color: 'primary',

  // optional; we want an "OK" button
  ok: true, // takes i18n value, or String for "OK" button label

  // optional; we want a "Cancel" button
  cancel: true, // takes i18n value, or String for "Cancel" button label

  // optional; prevent user dismissal when not clicking on a Dialog button
  preventClose: true,

  noBackdropDismiss: false, // gets set to "true" automatically if preventClose is "true"
  noEscDismiss: false, // gets set to "true" automatically if preventClose is "true"

  // optional; do not refocus (on dialog close) the element that had focus before opening (default is to refocus)
  noRefocus: true,

  // optional; stacks button vertically instead of horizontally (default)
  stackButtons: true,

  // optional; a position of the Dialog (top, bottom, left, right)
  position: 'top',

  // optional; show an input box (make Dialog similar to a JS prompt)
  prompt: {
    model: '',
    type: 'text' // optional
  },

  // optional; show a radio, checkbox or toggle
  options: {
    type: 'radio', // or 'checkbox' / 'toggle'
    model: 'opt2', // Array when checkbox/toggle! (like '[]')
    items: [
      {label: 'Option 1', value: 'opt1', color: 'secondary'},
      {label: 'Option 2', value: 'opt2'},
      {label: 'Option 3', value: 'opt3'}
    ]
  },

  noRefocus: true // (v0.15.11+) Do not refocus previously focused DOM element after closing the Dialog |
})
```

> **IMPORTANT**
> When user hits the phone/tablet back button (only for Cordova apps), the Action Sheet will get closed automatically.
> Also, when on a desktop browser, hitting the &lt;ESCAPE&gt; key also closes the Action Sheet.

### Handling Outcome
The returning object when creating an ActionSheet is a Promise, so you can leverage the Promise API to handle the outcome:

```js
this.$q.dialog({...})
  .then(() => {
    // Picked "OK"
  })
  .catch(() => {
    // Picked "Cancel" or dismissed
  })

// OR with async/await:
async showActionSheet () {
  try {
    await this.$q.dialog({...})
    // user picked "OK"
  }
  catch () {
    // Picked "Cancel" or dismissed
  }
}
```

### Examples

#### Alert
``` js
this.$q.dialog({
  title: 'Alert',
  message: 'Modern HTML5 front-end framework on steroids.'
})
```

#### Confirm
``` js
this.$q.dialog({
  title: 'Confirm',
  message: 'Modern HTML5 front-end framework on steroids.',
  ok: 'Agree',
  cancel: 'Disagree'
}).then(() => {
  this.$q.notify('Agreed!')
}).catch(() => {
  this.$q.notify('Disagreed...')
})
```

#### Prompt
``` js
this.$q.dialog({
  title: 'Prompt',
  message: 'Modern front-end framework on steroids.',
  prompt: {
    model: '',
    type: 'text' // optional
  },
  cancel: true,
  color: 'secondary'
}).then(data => {
  this.$q.notify(`You typed: "${data}"`)
}).catch(() => {
  this.$q.notify('Ok, no mood for talking, right?')
})
```

#### Single Choice Selection
``` js
this.$q.dialog({
  title: 'Options',
  message: 'Modern front-end framework on steroids.',
  options: {
    type: 'radio',
    model: 'opt2',
    items: [
      {label: 'Option 1', value: 'opt1', color: 'secondary'},
      {label: 'Option 2', value: 'opt2'},
      {label: 'Option 3', value: 'opt3'}
    ]
  },
  cancel: true,
  preventClose: true,
  color: 'secondary'
}).then(data => {
  this.$q.notify(`You selected: ${data}`)
})
```

#### Multiple Choice Selection
``` js
this.$q.dialog({
  title: 'Options',
  message: 'Modern front-end framework on steroids.',
  options: {
    type: 'checkbox',
    model: [],
    items: [
      {label: 'Option 1', value: 'opt1', color: 'secondary'},
      {label: 'Option 2', value: 'opt2'},
      {label: 'Option 3', value: 'opt3'}
    ]
  },
  cancel: true,
  preventClose: true,
  color: 'secondary'
}).then(data => {
  this.$q.notify(`You selected: ${JSON.stringify(data)}`)
})
```

#### Stacked Buttons
``` js
this.$q.dialog({
  title: 'Stacked buttons',
  message: 'Go to a movie.',
  ok: 'Yes, please!',
  cancel: 'Uhm, nope',
  stackButtons: true
}).then(() => {
  this.$q.notify('Agreed!')
}).catch(() => {
  this.$q.notify('Disagreed...')
})
```

#### Custom Buttons
``` js
this.$q.dialog({
  title: 'Custom buttons',
  message: 'Go to a movie.',
  ok: {
    push: true,
    label: 'Yes, please!'
  },
  cancel: {
    push: true,
    color: 'negative',
    label: 'Uhm, nope'
  }
}).then(() => {
  this.$q.notify('Agreed!')
}).catch(() => {
  this.$q.notify('Disagreed...')
})
```

#### Prevent accidental close
``` js
this.$q.dialog({
  title: 'Prevent close',
  message: 'This dialog cannot be dismissed by clicking/tapping on the background overlay.',
  ok: true,
  cancel: true,
  preventClose: true
}).then(() => {
  this.$q.notify('You said OK!')
}).catch(() => {
  this.$q.notify(`You didn't agree`)
})
```

## Basic Usage As a Component
First, we install it:

Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QDialog']
}
```

Now let's see how we can use it:
```html
<template>
  <q-dialog
    v-model="customDialogModel"
    stack-buttons
    prevent-close
    @ok="onOk"
    @cancel="onCancel"
    @show="onShow"
    @hide="onHide"
  >
    <!-- This or use "title" prop on <q-dialog> -->
    <span slot="title">Favorite Superhero</span>

    <!-- This or use "message" prop on <q-dialog> -->
    <span slot="message">What is your superhero of choice?</span>

    <div slot="body">
      <q-field
        icon="account_circle"
        helper="We need your name so we can send you to the movies."
        label="Your name"
        :label-width="3"
      >
        <q-input v-model="name" />
      </q-field>
    </div>

    <template slot="buttons" slot-scope="props">
      <q-btn color="primary" label="Choose Superman" @click="choose(props.ok, 'Superman')" />
      <q-btn color="black" label="Choose Batman" @click="choose(props.ok, 'Batman')" />
      <q-btn color="negative" label="Choose Spiderman" @click="choose(props.ok, 'Spiderman')" />
      <q-btn flat label="No thanks" @click="props.cancel" />
    </template>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      // model for Dialog example
      customDialogModel: false,

      name: ''
    }
  },
  methods: {
    // when props.ok() gets called
    onOk (data) { },

    // when props.cancel() gets called
    onCancel () { },

    // when we show it to the user
    onShow () { },

    // when it gets hidden
    onHide () { },

    // custom handler
    async choose (okFn, hero) {
      if (this.name.length === 0) {
        this.$q.dialog({
          title: 'Please specify your name!',
          message: `Can't buy tickets without knowing your name.`
        })
      }
      else {
        await okFn()
        this.$q.notify(`Ok ${this.name}, going with ${hero}`)
      }
    }
  }
}
</script>
```

### QDialog Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `title` | String | Title of Dialog. |
| `message` | String | Message of Dialog. |
| `prompt` | Object | Check below table for details. |
| `options` | Object | Check below table for details. |
| `ok` | Boolean/String/Object | Do we have an OK button? Optionally specify which label to use for it OR the button props in an Object. |
| `cancel` | Boolean/String/Object | Do we have a Cancel button? Optionally specify which label to use for it OR the button props in an Object. |
| `stack-buttons` | Boolean | Stack buttons vertically instead of default horizontally. |
| `prevent-close` | Boolean | Dialog can be dismissed only by clicking/tapping on OK/Cancel buttons. |
| `no-esc-dismiss` | Boolean | "ESC" key won't dismiss the Dialog. Overriden to "true" if "prevent-close" is "true". |
| `no-refocus` | Boolean | Do not refocus (on dialog close) the element that had focus before opening (by default it tries to refocus) |
| `no-backdrop-dismiss` | Boolean | Click/Tap on backdrop won't dismiss Dialog. Overriden to "true" if "prevent-close" is "true". |
| `position` | String | Position of Dialog (top, bottom, left, right). |
| `color` | String | A color from [Quasar Color Palette](/components/color-palette.html). |
| `no-refocus` | Boolean | (v0.15.11+) Do not refocus previously focused DOM element after closing the Dialog. |

Prompt Object:
```js
{
  model: '..' // String,
  type: 'text' // optional
}
```

Options Object:
```js
{
  type: 'radio', // or 'checkbox', 'toggle'
  model: 'opt2', // Array when checkbox / toggle (like '[]')
  items: [
    {label: 'Option 1', value: 'opt1', color: 'secondary'},
    {label: 'Option 2', value: 'opt2'},
    {label: 'Option 3', value: 'opt3'}
  ]
}
```

### QDialog Vue Events
| Vue Property | Description |
| --- | --- |
| `@ok` | When "props.ok()" got called. |
| `@cancel` | When "props.cancel()" got called. |
| `@show` | Dialog has just been showed to the user. |
| `@hide` | Dialog has been hidden (regardless of outcome). |
| `@escape-key` | Dialog dismissed with ESCAPE key. |
