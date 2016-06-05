'use strict';

var html = require('raw!./view.action-sheet.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Action Sheet';
  },
  methods: {
    showActionSheet: function() {
      quasar.action.sheet({
        title: 'Article Actions',
        buttons: [
          {
            label: 'Delete',
            icon: 'delete',
            handler: function() {
              quasar.notify.positive('Deleted Article');
            }
          },
          {
            label: 'Share',
            icon: 'share',
            handler: function() {
              quasar.notify.positive('Shared!');
            }
          },
          {
            label: 'Play',
            icon: 'gamepad',
            handler: function() {
              quasar.notify.positive('Launched Game');
            }
          },
          {
            label: 'Favorite',
            icon: 'favorite',
            handler: function() {
              quasar.notify.positive('Added to favorites');
            }
          },
          {
            label: 'Cancel',
            icon: 'cancel',
            classes: 'text-primary',
            handler: function() {
              // quasar.notify('Cancelled...');
            }
          }
        ]
      });
    }
  }
};
