'use strict';

var html = require('raw!./view.buttons.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Buttons';
  }
};
