'use strict';

var html = require('raw!./view.badge.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Badges';
  }
};
