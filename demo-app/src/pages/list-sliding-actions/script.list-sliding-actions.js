'use strict';

var html = require('raw!./view.list-sliding-actions.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Lists with Sliding Actions';
  }
};
