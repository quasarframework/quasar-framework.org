'use strict';

var html = require('raw!./view.range.html');

module.exports = {
  template: html,
  data: {
    number: 3
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Range';
  }
};
