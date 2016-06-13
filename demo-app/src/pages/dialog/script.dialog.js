'use strict';

var html = require('raw!./view.dialog.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Dialogs';
  },
  data: {
    types: [
      {
        label: 'Alert',
        icon: 'warning',
        handler: function() {
          quasar.dialog({
            title: 'Alert',
            message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
          });
        }
      },
      {
        label: 'Prompt',
        icon: 'help',
        handler: function() {
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
        }
      },
      {
        label: 'Confirm',
        icon: 'done_all',
        handler: function() {
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
        }
      },
      {
        label: 'Pick One Option',
        icon: 'warning',
        handler: function() {
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
        }
      },
      {
        label: 'Pick Multiple Options',
        icon: 'playlist_add_check',
        handler: function() {
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
        }
      },
      {
        label: 'Pick Multiple Options #2',
        icon: 'playlist_add_check',
        handler: function() {
          quasar.dialog({
            title: 'Toggles',
            toggles: [
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
        }
      },
      {
        label: 'Pick Range',
        icon: 'warning',
        handler: function() {
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
        }
      }
    ]
  }};
