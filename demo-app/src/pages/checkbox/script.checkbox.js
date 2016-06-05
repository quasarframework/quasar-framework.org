'use strict';

var html = require('raw!./view.checkbox.html');

module.exports = {
  template: html,
  data: {
    checked: false
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Checkbox';
  }
};
