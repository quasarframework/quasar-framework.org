title: Dialog
---
Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).

From a UI perspective, you can think of Dialogs as a type of “floating” modal, which covers only a portion of the screen. This means Dialogs should only be used for quick actions, like password verification, small App notifications or quick options. More in depth user flows should be reserved for ​Modals​.

<input type="hidden" data-fullpage-demo="global/dialog">

## Basic Usage
``` js
import { Dialog } from 'quasar'

Dialog.create(configObj) (Object with `close` method)
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
> <br>When the user hits the browser/phone/tablet back button, the Dialog will be closed automatically..
> <br>Also, when on a browser, hitting the &lt;ESCAPE&gt; key also closes the Dialog.

## Dialog Config Object
In order to create a Dialog, you'll need an object as a parameter to configure it (*configObj* above). Below are the properties of this object (all properties are optional):

| Property Name | Type | Description |
| --- | --- | --- |
| `title` | String | Title of the Dialog. |
| `message` | String | Additional message below the title. |
| `form` | Object | Configure what types of form components to show. |
| `buttons` | Array of Objects | Bottom buttons for the Dialog. Regardless of the `handler` that you specify, each button closes the Dialog. You can also specify a String instead of an Object as part of your Array for buttons that only closes the Dialog. |
| `stackButtons` | Boolean | If you want your buttons placed one below the previous one instead of in the same row. |
| `nobuttons` | Boolean | When you don't want any buttons on your Dialog. By default, if no buttons are specified, an "OK" button is added. This property avoids this default addition. |
| `progress` | Object | When you want to make your Dialog display a progress bar. Check [Progress Dialog](#Progress-Dialog) below. |
| `onDismiss` | Function | Function to be called when the Dialog gets closed (or dismissed). |
| `noBackdropDismiss` | Boolean | If set true, the Dialog cannot be dismissed by clicking/tapping on backdrop. |
| `noEscDismiss` | Boolean | If set true, the Dialog cannot be dismissed by hitting Escape key. |

## Progress Dialog
There are two types of progress bars you can display in a Dialog: determinate (when you can quantify the progress) or indeterminate (when you don't know the moment the progress will be done).

### Determinate Mode
``` js
import { Dialog, Toast } from 'quasar'

// "progress" property from "configObj"
let progress = {
  model: 5
}

const dialog = Dialog.create({
  title: 'Progress',
  message: 'Computing...',
  progress,
  buttons: [
    {
      label: 'Cancel',
      handler () {
        clearInterval(timeout)
        Toast.create('Canceled on progress ' + progress.model)
      }
    }
  ]
})

const timeout = setInterval(() => {
  progress.model += Math.floor(Math.random() * 5) + 5
  if (progress.model >= 96) {
    clearInterval(timeout)
    dialog.close()
  }
}, 300)
```

### Indeterminate Mode
``` js
import { Dialog, Toast } from 'quasar'

const dialog = Dialog.create({
  title: 'Progress',
  message: 'Computing...',
  progress: {
    indeterminate: true
  },
  buttons: [
    {
      label: 'Cancel',
      handler (data) {
        clearTimeout(timeout)
        Toast.create('Canceled...')
      }
    }
  ]
})

const timeout = setTimeout(() => {
  clearInterval(timeout)
  dialog.close()
}, 3000)
```

## Dialog with Form Components
You can combine multiple form components (textfields, chips, radios, checkboxes, ...), to configure your Dialog through the `form` Object property.

Each property of `form` is an Object itself. The key will be used later, when the user closes the Dialog. For example:
``` js
{form: {name: {...}}}
// will pass a "name" property later:
handler (data) {
  // data.name --> model of your form component
}
```

Each Form Component has a certain syntax that you must follow as described below. At the end, you'll learn how to separate these into sections by using a "heading".

> The default value for the following Form Components is taken from the `model` property.

### Textfields
Supported types: 'text', 'textarea', 'email', 'tel', 'file', 'number', 'password', 'url', 'chips':

``` js
import { Dialog, Toast } from 'quasar'

Dialog.create({
  title: 'Prompt',
  form: {
    name: {
      type: 'text',
      label: 'Textbox',
      model: ''
    },
    pass: {
      type: 'password',
      label: 'Password',
      model: ''
    },
    age: {
      type: 'number',
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
import { Dialog, Toast } from 'quasar'

Dialog.create({
  title: 'Radios',
  message: 'Message can be used for all types of Dialogs.',
  form: {
    option: {
      type: 'radio',
      model: 'opt1',
      items: [
        {label: 'Option 1', value: 'opt1', color: 'secondary'},
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
import { Dialog, Toast } from 'quasar'

Dialog.create({
  title: 'Checkbox & Toggle',
  message: 'Message can be used for all types of Dialogs.',
  form: {
    header1: {
      type: 'heading',
      label: 'Checkboxes'
    },
    group1: {
      type: 'checkbox',
      model: ['opt2', 'opt3'],
      items: [
        {label: 'Option 1', value: 'opt1'},
        {label: 'Option 2', value: 'opt2', color: 'secondary'},
        {label: 'Option 3', value: 'opt3', color: 'amber'}
      ]
    },
    header2: {
      type: 'heading',
      label: 'Toggles'
    },
    group2: {
      type: 'toggle',
      model: [],
      items: [
        {label: 'Option 1', value: 'opt1'},
        {label: 'Option 2', value: 'opt2', color: 'secondary'},
        {label: 'Option 3', value: 'opt3', color: 'amber'}
      ]
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

### Ranges

``` js
import { Dialog, Toast } from 'quasar'

Dialog.create({
  title: 'Ranges',
  form: {
    range: {
      type: 'range',
      label: 'Range',
      min: 10,
      max: 20,
      withLabel: true,
      model: 12,
      color: 'secondary'
    },
    doubleRange: {
      type: 'double-range',
      label: 'Double Range',
      model: {
        min: 7,
        max: 12
      },
      min: 5,
      max: 15,
      withLabel: true
    },
    step: {
      type: 'range',
      label: 'With step & snap',
      model: -6,
      min: -10,
      max: 10,
      step: 4,
      snap: true,
      markers: true,
      withLabel: true
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

### Rating
``` js
import { Dialog, Toast } from 'quasar'

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
Since you can combine different components within the Dialog, sometimes you may need to separate them into sections. For this purpose Quasar offers the "heading" type:
``` js
import { Dialog, Toast } from 'quasar'

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

### Alert
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Alert',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
})
```

### Confirm
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
      color: 'negative',
      outline: true,
      style: 'text-decoration: underline'
    },
    {
      label: 'Agree',
      color: 'positive'
    }
  ]
})
```

### Stacked Buttons
If you have many buttons or buttons with lots of text, you can set the `stackButtons` property to `true` when creating your Dialog. This will display your in separate rows:

``` js
import { Dialog } from 'quasar'

Dialog.create({
  // ...
  stackButtons: true,
  buttons: [......]
})
```

### Prevent Closing the Dialog
You can prevent a button from closing the Dialog. This is useful, when you need to do some validations on form fields.

Add `preventClose: true` to the button definition. This will make the `handler()` method receive a second parameter, which when called, closes the Dialog. Not calling it obviously keeps the Dialog opened.

``` js
import { Dialog, Toast } from 'quasar'

Dialog.create({
  title: 'Prevent Close',
  message: 'Having "Prevent" checkbox ticked and then hitting "Try to Close" button will prevent the dialog from closing.',
  form: {
    prevent: {
      type: 'checkbox',
      model: ['prevent'],
      items: [
        {label: 'Prevent dialog close', value: 'prevent'}
      ]
    }
  },
  buttons: [
    {
      label: 'Try to Close',
      preventClose: true,
      handler (data, close) {
        if (!data.prevent.length) {
          close(() => {
            Toast.create(`Finally. It's closed now.`)
          })
          return
        }
        Toast.create('Untick "Prevent" checkbox to be able to close the Dialog.')
      }
    }
  ]
})
```

### Complex Dialog with Form Components
``` js
import { Dialog, Toast } from 'quasar'

Dialog.create({
  title: 'Prompt',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
  form: {
    name: {
      type: 'text',
      label: 'Textbox',
      model: ''
    },
    age: {
      type: 'number',
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
      model: ['opt2'],
      items: [
        {label: 'Option 1', value: 'opt1'},
        {label: 'Option 2', value: 'opt2'},
        {label: 'Option 3', value: 'opt3'}
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
