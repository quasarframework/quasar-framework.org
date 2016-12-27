title: Quasar Dialog
---
Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).

From a UI perspective, you can think of Alerts as a type of “floating” modal, that covers only a portion of the screen. This means Alerts should only be used for quick actions like password verification, small App notifications, or quick options. More in depth user flows should be reserved for full screen ​Modals​.

<input type="hidden" data-fullpage-demo="global/dialog">

## Basic Usage
``` js
import { Dialog } from 'quasar'

(Object with `close` method) Dialog.create(configObj)
```

A real life example:
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Warning',
  message: 'You are about to run out of disk space.',
  buttons: [
    'Cancel',
    {
      label: 'Empty Trash Bin',
      handler () {
        // empty the trash bin, yo
      }
    }
  ]
})
```

> **IMPORTANT**
> <br>When user hits the browser/phone/tablet back button, the Dialog will get closed automatically..
> <br>Also, when on a browser, hitting the &lt;ESCAPE&gt; key also closes the Dialog.

## Configuring Dialog
Creating a Dialog uses an Object as parameter to configure it (*configObj* above). Properties of this Object (all are optional):

| Property Name | Type | Description |
| --- | --- | --- |
| `title` | String | Title of the Dialog. |
| `message` | String | Additional message below the title. |
| `buttons` | Array of Objects | Bottom buttons for the Dialog. Regardless of the `handler` that you specify, each button closes the Dialog. You can also specify a String instead of an Object as part of your Array for buttons that only closes the Dialog. |
| `stackButtons` | Boolean | If you want your buttons placed one below the previous one instead of on the same row. |
| `nobuttons` | Boolean | When you don't want any buttons on your Dialog. By default, if no buttons are specified, an "OK" button is added. This property avoids this default addition. |
| `progress` | Object | When you want to make your Dialog display a progress bar. Check [Progress Dialog](#Progress-Dialog) below. |
| `form` | Object | Configure what types of form components to show. |
| `onDismiss` | Function | Function to be called when Dialog gets closed (or dismissed). |
| `noBackdropDismiss` | Boolean | Can Dialog be dismissed by clicking/tapping on backdrop? |
| `noEscDismiss` | Boolean | Can Dialog be dismissed by hitting Escape key? |

## Progress Dialog
There are two types of progress you can display: determinate (when you can quantify the progress) or indeterminate (when you don't know the moment you're done).

### Determinate Mode
``` js
import { Dialog } from 'quasar'

// "progress" property from "configObj"
let progress = {
  model: 25
}

const dialog = Dialog.create({
  title: 'Progress',
  message: 'Computing...',
  progress,
  buttons: ['Cancel'],
  onDismiss () {
    clearInterval(timeout)
    Toast.create('Canceled on progress ' + progress.model)
  },
  noBackdropDismiss: true,
  noEscDismiss: true
})

const timeout = setInterval(() => {
  progress.model += Math.floor(Math.random() * 5) + 1
  if (progress.model >= 42) {
    clearInterval(timeout)
    dialog.close()
  }
}, 500)
```

### Indeterminate Mode
``` js
import { Dialog } from 'quasar'

const dialog = Dialog.create({
  title: 'Progress',
  message: 'Computing...',
  progress: { // <<<<<<<
    indeterminate: true
  },
  buttons: ['Cancel'],
  onDismiss () {
    clearTimeout(timeout)
    Toast.create('Canceled...')
  },
  noBackdropDismiss: true,
  noEscDismiss: true
})

const timeout = setTimeout(() => {
  clearInterval(timeout)
  dialog.close()
}, 3000)
```

## Dialog with Form Components
You can combine multiple form components (textfields, chips, radios, checkboxes, ...) together to configure your Dialog through the `form` Object property.

Each property of `form` is an Object itself. The key will be used later when user closes the Dialog. For example:
``` js
{form: {name: {...}}}
// will pass a "name" property later:
handler (data) {
  // data.name --> model of your form component
}
```

Each Form Component has a certain syntax that you must follow as described below. At the end you'll learn how to separate these into sections by using a "heading".

> Default value for following Form Components is taken from the `model` property.

### Textfields
You can configure input textboxes, textareas, numeric input textboxes and chips:

``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Prompt',
  form: {
    name: {
      type: 'textbox',
      label: 'Textbox',
      model: ''
    },
    pass: {
      type: 'password',
      label: 'Password',
      model: ''
    },
    age: {
      type: 'numeric',
      label: 'Numeric',
      model: 10,
      min: 1,
      max: 100
    },
    tags: {
      type: 'chips',
      label: 'Chips',
      model: ['Joe', 'John']
    },
    comments: {
      type: 'textarea',
      label: 'Textarea',
      model: ''
    }
  },
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        Toast.create('Returned ' + JSON.stringify(data))
        // data.name is 'Quasar'
        // data.pass is 'rulz!'
        // data.age is 1
        // data.tags is ['Joe', 'John'],
        // data.comments is 'Some comments...'
      }
    }
  ]
})
```

### Radios
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Radios',
  message: 'Message can be used for all types of Dialogs.',
  form: {
    option: {
      type: 'radio',
      model: 'opt1',
      items: [
        {label: 'Option 1', value: 'opt1'},
        {label: 'Option 2', value: 'opt2'},
        {label: 'Option 3', value: 'opt3'}
      ]
    }
  },
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        Toast.create('Returned ' + JSON.stringify(data))
        // data.option is 'opt1'
      }
    }
  ]
})
```

### Checkboxes & Toggles
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Checkbox & Toggle',
  message: 'Message can be used for all types of Dialogs.',
  form: {
    group1: {
      type: 'checkbox',
      items: [
        {label: 'Option 1', value: 'opt1', model: true},
        {label: 'Option 2', value: 'opt2', model: false},
        {label: 'Option 3', value: 'opt3', model: false}
      ]
    },
    group2: {
      type: 'toggle',
      items: [
        {label: 'Option 1', value: 'opt1', model: true},
        {label: 'Option 2', value: 'opt2', model: false},
        {label: 'Option 3', value: 'opt3', model: true}
      ]
    }
  },
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        Toast.create('Returned ' + JSON.stringify(data))
        // data.group1 is ['opt1']
        // data.group2 is ['opt1', 'opt3']
      }
    }
  ]
})
```

### Rating
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Rating',
  form: {
    rating: {
      type: 'rating',
      label: 'How many stars?',
      model: 0,
      max: 5
    },
    rating2: {
      type: 'rating',
      label: 'How many pencils?',
      model: 3,
      max: 6,
      icon: 'create'
    }
  },
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        Toast.create('Returned ' + JSON.stringify(data))
        // data.rating is 0
        // data.rating2 is 3
      }
    }
  ]
})
```

### Headings
Since you can combine components however you want, sometimes you may need to separate into sections so Quasar comes to our help with a "heading" type:
``` js
import { Dialog } from 'quasar'

Dialog.create({
  ...,
  form: {
    header1: {
      type: 'heading',
      label: 'Checkboxes'
    },
    group1: {
      type: 'checkbox',
      items: [...]
    },
    ...,
    header2: {
      type: 'heading',
      label: 'Toggles'
    },
    group2: {
      type: 'toggle',
      items: [...]
    },
    ...
  },
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        Toast.create('Returned ' + JSON.stringify(data))
      }
    }
  ]
})
```

See demo with "Multiple Selections".

## More Examples

### Alert Example
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Alert',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
})
```

### Confirm Example
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Confirm',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
  buttons: [
    {
      label: 'Disagree',
      handler () {
        console.log('Disagreed...')
      }
    },
    {
      label: 'Agree',
      handler () {
        console.log('Agreed!')
      }
    }
  ]
})
```

### Styling Buttons
``` js
Dialog.create({
  title: 'Confirm',
  message: 'Custom button classes.',
  buttons: [
    {
      label: 'Disagree',
      classes: 'negative clear',
      style: 'text-decoration: underline'
    },
    {
      label: 'Agree',
      classes: 'positive'
    }
  ]
})
```

### Stacked Buttons
If you have many buttons or buttons with lots of text, you can use set `stackButtons` property to `true` when creating your Dialog. This will make your buttons be displayed on separate rows:

``` js
import { Dialog } from 'quasar'

Dialog.create({
  // ...
  stackButtons: true,
  buttons: [......]
})
```

### Complex Dialog with Form Components
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Prompt',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
  form: {
    name: {
      type: 'textbox',
      label: 'Textbox',
      model: ''
    },
    age: {
      type: 'numeric',
      label: 'Numeric',
      model: 10,
      min: 5,
      max: 90
    },
    rating: {
      type: 'rating',
      label: 'How many stars?',
      model: 0,
      max: 5
    },
    tags: {
      type: 'chips',
      label: 'Chips',
      model: ['Joe', 'John']
    },
    group1: {
      type: 'checkbox',
      items: [
        {label: 'Option 1', value: 'opt1', model: true},
        {label: 'Option 2', value: 'opt2', model: false},
        {label: 'Option 3', value: 'opt3', model: false}
      ]
    },
    comments: {
      type: 'textarea',
      label: 'Textarea',
      model: ''
    }
  },
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        Toast.create('Returned ' + JSON.stringify(data))
      }
    }
  ]
})
```
