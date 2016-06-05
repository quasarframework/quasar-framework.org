'use strict';

var html = require('raw!./view.number.html');

module.exports = {
  template: html,
  data: {
    number: 3
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Number';
  }
};
