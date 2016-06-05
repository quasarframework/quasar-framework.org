'use strict';

var html = require('raw!./view.toggle.html');

module.exports = {
  template: html,
  data: {
    checked: false
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Toggle';
  }
};
