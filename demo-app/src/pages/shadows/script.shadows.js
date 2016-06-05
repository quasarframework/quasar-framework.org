'use strict';

var html = require('raw!./view.shadows.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'CSS Shadows';
  }
};
