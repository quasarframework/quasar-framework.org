'use strict';

var html = require('raw!./view.tooltips.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Tooltips';
  }
};
