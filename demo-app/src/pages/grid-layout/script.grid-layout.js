'use strict';

var html = require('raw!./view.grid-layout.html');

module.exports = {
  template: html,
  data: {
    border: false
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'CSS Grid';
  }
};
