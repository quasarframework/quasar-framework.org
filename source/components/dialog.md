title: Quasar Dialog
---
Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).

From a UI perspective, you can think of Alerts as a type of “floating” modal, that covers only a portion of the screen. This means Alerts should only be used for quick actions like password verification, small App notifications, or quick options. More in depth user flows should be reserved for full screen ​Modals​.

<input type="hidden" data-fullpage-demo="dialog">

Multiple types of Quasar Dialogs are available:

## Alert
``` js
quasar.dialog({
  title: 'Alert',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
});
```

## Prompt
``` js
quasar.dialog({
  title: 'Prompt',
  message: 'Modern HTML5 Single Page Application front-end framework on steroids.',
  inputs: [
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

## Confirm
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

## Pick One Option (Radios)
``` js
quasar.dialog({
  title: 'Radios',
  message: 'Message can be used for all types of Dialogs.',
  radios: [
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

## Pick Multiple Options (Checkboxes)
``` js
quasar.dialog({
  title: 'Checkboxes',
  checkboxes: [
    {
      label: 'Option 1',
      value: 'opt1',
      checked: true
    },
    {
      label: 'Option 2',
      value: 'opt2'
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

## Pick Range
``` js
quasar.dialog({
  title: 'Ranges',
  ranges: [
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
