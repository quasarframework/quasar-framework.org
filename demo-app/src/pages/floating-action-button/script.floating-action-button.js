'use strict';

var html = require('raw!./view.floating-action-button.html');

module.exports = {
  template: html,
  methods: {
    alert: function() {
      quasar.dialog({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      });
    }
  }
};
