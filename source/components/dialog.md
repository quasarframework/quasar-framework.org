title: Quasar Dialog
---
Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).

From a UI perspective, you can think of Alerts as a type of “floating” modal, that covers only a portion of the screen. This means Alerts should only be used for quick actions like password verification, small App notifications, or quick options. More in depth user flows should be reserved for full screen ​Modals​.

<input type="hidden" data-fullpage-demo="global/dialog">

## Basic Usage
``` js
import { Dialog } from 'quasar'

(Modal Object) Dialog(configObj).show()
```

You can access the Dialog's VueModel through the returned *Modal Object*. Read about its properties on [Quasar Modal](/components/modal.html#Basic-Usage) documentation page.

> **IMPORTANT**
> <br>When user hits the browser/phone/tablet back button, the Dialog will get closed automatically..
> <br>Also, when on a browser, hitting the &lt;ESCAPE&gt; key also closes the Dialog.

## Components
The following components are properties of the *objectWithComponents* parameter from above and can be used for all Dialog types available.

| Property Name | Type | Description |
| --- | --- | --- |
| `title` | String | Title of the Dialog. |
| `message` | String | Additional message below the title. |
| `buttons` | Array of Objects | Bottom buttons for the Dialog. Regardless of the `handler` that you specify, each button closes the Dialog. You can also specify a String instead of an Object as part of your Array for buttons that only close the Dialog. See [Confirm](#Confirm) example. |
| `stackButtons` | Boolean | If you want your buttons placed one below the previous one instead of on the same row. |

The following properties set the type of the Dialog and you can only use one for each Dialog:

| Property Name | Type | Description |
| --- | --- | --- |
| `inputs` | Object | Set as Prompt type, requesting user to fill in input textboxes. See [Prompt](#Prompt) example. |
| `progress` | Object | See [Progress](#Progress) example. |
| `radios` | Object | See ["Pick one option"](#Pick-One-Option-Radios) example. |
| `checkboxes` | Object | See ["Pick multiple options" with Checkboxes](#Pick-Multiple-Options-Checkboxes) example. |
| `toggles` | Object | See ["Pick multiple options" with Toggles](#Pick-Multiple-Options-2-Toggles) example. |

## Types

The type is determined by the object properties you instantiate a `Dialog.create()` with.

> **NOTE**
> `Dialog.create()` returns a Modal (which you can configure if you wish), so don't forget to call `.show()`

### Alert
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Alert',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
}).show()
```

### Prompt
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Prompt',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
  inputs: [ // <<<<--------
    {
      name: 'input1',
      label: 'Placeholder 1'
    },
    {
      name: 'input2',
      label: 'Placeholder 2'
    }
  ],
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        console.log('Returned ' + JSON.stringify(data))
      }
    }
  ]
}).show()
```

Also set `stackButtons` to `true` if you want your buttons one below the previous one. Useful when the label is verbose.

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
}).show()
```

### Progress
There are two types of progress you can display: determinate (when you can quantify the progress) or indeterminate (when you don't know the moment you're done).

``` js
// determinate mode
import { Dialog } from 'quasar'

var progress = {
  model: 25
}

var dialog = Dialog.create({
  title: 'Progress',
  message: 'Computing...',
  progress: progress, // <<<----
  buttons: [
    {
      label: 'Cancel',
      handler (data) {
        clearInterval(timeout)
        console.log('Canceled on progress ' + data)
      }
    }
  ]
}).show()

var timeout = setInterval(() => {
  progress.model++
  if (progress.model === 50) {
    clearInterval(timeout)
    dialog.close()
  }
}, 1000)
```

``` js
// indeterminate mode
import { Dialog } from 'quasar'

var dialog = Dialog.create({
  title: 'Progress',
  message: 'Computing...',
  progress: {  // <<<---------
    indeterminate: true
  },
  buttons: [
    {
      label: 'Cancel',
      handler (data) {
        clearTimeout(timeout)
        console.log('Canceled...')
      }
    }
  ]
}).show()

var timeout = setTimeout(() => {
  clearInterval(timeout)
  dialog.close()
}, 3000)
```

### Pick One Option (Radios)
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Radios',
  message: 'Message can be used for all types of Dialogs.',
  radios: [ // <<<----
    {
      label: 'Option 1',
      value: 'opt1'
    },
    {
      label: 'Option 2',
      value: 'opt2',
      selected: true
    },
    {
      label: 'Option 3',
      value: 'opt3'
    },
    {
      label: 'Option 4',
      value: 'opt4'
    },
    {
      label: 'Option 5',
      value: 'opt5'
    }
  ],
  buttons: [
    'Cancel',
    {
      label: 'Ok',
      handler (data) {
        console.log('Returned ' + JSON.stringify(data))
      }
    }
  ]
}).show()
```

### Pick Multiple Options (Checkboxes)
``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Checkboxes',
  checkboxes: [ // <<<----
    {
      label: 'Option 1',
      value: 'opt1',
      checked: true
    },
    {
      label: 'Option 2',
      value: 'opt2'
    },
    ...
  ],
  buttons: [
    {
      label: 'Cancel',
      handler: $.noop
    },
    {
      label: 'Ok',
      handler (data) {
        console.log('Returned ' + JSON.stringify(data))
      }
    }
  ]
}).show()
```

### Pick Multiple Options #2 (Toggles)
Same as previous but using Toggles instead of Checkboxes.

``` js
import { Dialog } from 'quasar'

Dialog.create({
  title: 'Toggles',
  toggles: [ // <<<----
    {
      label: 'Option 1',
      value: 'opt1',
      checked: true
    },
    {
      label: 'Option 2',
      value: 'opt2'
    },
    ...
  ],
  buttons: [
    {
      label: 'Cancel',
      handler () {}
    },
    {
      label: 'Ok',
      handler (data) {
        console.log('Returned ' + JSON.stringify(data))
      }
    }
  ]
}).show()
```

### Stacked Buttons
If you have many buttons or buttons with lots of text, you can use set `stackButtons` property to `true` when creating your Dialog. This will make your buttons be displayed on separate rows:

``` js
import { Dialog } from 'quasar'

Dialog.create({
  // ...
  stackButtons: true,
  buttons: [......]
}).show()
```
