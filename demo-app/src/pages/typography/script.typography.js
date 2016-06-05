'use strict';

var html = require('raw!./view.typography.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Typography';
  }
};
