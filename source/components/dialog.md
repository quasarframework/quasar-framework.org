title: Quasar Dialog
---
Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).

From a UI perspective, you can think of Alerts as a type of “floating” modal, that covers only a portion of the screen. This means Alerts should only be used for quick actions like password verification, small App notifications, or quick options. More in depth user flows should be reserved for full screen ​Modals​.

<input type="hidden" data-fullpage-demo="dialog">

## Basic Usage
``` js
(Modal Object) quasar.dialog(objectWithComponents);
```

You can access the Dialog's VueModel through the returned *Modal Object*. Read about its properties on [Quasar Modal](/components/modal.html#Basic-Usage) documentation page.

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
| `ranges` | Object | See ["Pick Range"](#Pick-Range) example. |

## Types

The type is determined by the properties you instantiate a `quasar.dialog()` with.

### Alert
``` js
quasar.dialog({
  title: 'Alert',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
});
```

### Prompt
``` js
quasar.dialog({
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
      handler: function(data) {
        quasar.notify('Returned ' + JSON.stringify(data));
      }
    }
  ]
});
```

Also set `stackButtons` to `true` if you want your buttons one below the previous one. Useful when the label is verbose.

### Confirm
``` js
quasar.dialog({
  title: 'Confirm',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
  buttons: [
    {
      label: 'Disagree',
      handler: function() {
        quasar.notify('Disagreed...');
      }
    },
    {
      label: 'Agree',
      handler: function() {
        quasar.notify('Agreed!');
      }
    }
  ]
});
```

### Progress
There are two types of progress you can display: determinate (when you can quantify the progress) or indeterminate (when you don't know the moment you're done).

``` js
// determinate mode

var progress = {
  model: 25
};

var dialog = quasar.dialog({
  title: 'Progress',
  message: 'Computing...',
  progress: progress, // <<<----
  buttons: [
    {
      label: 'Cancel',
      handler: function(data) {
        clearInterval(timeout);
        quasar.notify('Canceled on progress ' + data);
      }
    }
  ]
});

var timeout = setInterval(function() {
  progress.model++;
  if (progress.model === 50) {
    clearInterval(timeout);
    dialog.close();
  }
}, 1000);
```

``` js
// indeterminate mode

var dialog = quasar.dialog({
  title: 'Progress',
  message: 'Computing...',
  progress: {  // <<<---------
    indeterminate: true
  },
  buttons: [
    {
      label: 'Cancel',
      handler: function(data) {
        clearTimeout(timeout);
        quasar.notify('Canceled...');
      }
    }
  ]
});

var timeout = setTimeout(function() {
  clearInterval(timeout);
  dialog.close();
}, 3000);
```

### Pick One Option (Radios)
``` js
quasar.dialog({
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
      handler: function(data) {
        quasar.notify('Returned ' + JSON.stringify(data));
      }
    }
  ]
});
```

### Pick Multiple Options (Checkboxes)
``` js
quasar.dialog({
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
      handler: function(data) {
        quasar.notify('Returned ' + JSON.stringify(data));
      }
    }
  ]
});
```

### Pick Multiple Options #2 (Toggles)
Same as previous but using Toggles instead of Checkboxes.

``` js
quasar.dialog({
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
      handler: $.noop
    },
    {
      label: 'Ok',
      handler: function(data) {
        quasar.notify('Returned ' + JSON.stringify(data));
      }
    }
  ]
});
```

### Pick Range
``` js
quasar.dialog({
  title: 'Ranges',
  ranges: [ // <<<----
    {
      label: 'Volume',
      min: 1,
      max: 5,
      iconMin: 'volume_down',
      iconMax: 'volume_up'
    },
    {
      label: 'Brightness',
      min: 1,
      max: 5,
      value: 2
    },
    {
      label: 'Speed',
      min: 1,
      max: 10,
      value: 6
    },
    {
      label: 'Noise Level',
      min: 4,
      max: 15
    }
  ],
  buttons: [
    'Cancel',
    {
      label: 'Change',
      handler: function(data) {
        quasar.notify('Returned ' + JSON.stringify(data));
      }
    }
  ]
});
```
