'use strict';

var html = require('raw!./view.action-sheet.html');

function showActionSheetWithIcons(gallery) {
  quasar.action.sheet({
    title: 'Article Actions',
    gallery: gallery,
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
};

function showActionSheetWithAvatar(gallery) {
  quasar.action.sheet({
    title: 'Share to',
    gallery: gallery,
    buttons: [
      {
        label: 'Joe',
        avatar: 'assets/linux-avatar.png',
        handler: function() {
          quasar.notify.positive('Shared to Joe!');
        }
      },
      {
        label: 'John',
        avatar: 'assets/boy-avatar.png',
        handler: function() {
          quasar.notify.positive('Shared to John!');
        }
      },
      {
        label: 'Jim',
        avatar: 'assets/linux-avatar.png',
        handler: function() {
          quasar.notify.positive('Shared to Jim!');
        }
      },
      {
        label: 'Jack',
        avatar: 'assets/guy-avatar.png',
        handler: function() {
          quasar.notify.positive('Shared to Jack!');
        }
      },
      {
        label: 'Cancel',
        icon: 'cancel',
        classes: 'text-primary',
        handler: function() {
          console.log('Cancelled...');
        }
      }
    ]
  });
};

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Action Sheet';

  done({
    template: html,
    data: {
      types: [
        {
          label: 'List with Icons',
          handler: function() {
            showActionSheetWithIcons();
          }
        },
        {
          label: 'Gallery with Icons',
          handler: function() {
            showActionSheetWithIcons(true);
          }
        },
        {
          label: 'List with Avatars',
          handler: function() {
            showActionSheetWithAvatar();
          }
        },
        {
          label: 'Gallery with Avatars',
          handler: function() {
            showActionSheetWithAvatar(true);
          }
        },
      ]
    }
  });
};
