'use strict';

var html = require('raw!./view.collapsible.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Collapsible';
  }
};
