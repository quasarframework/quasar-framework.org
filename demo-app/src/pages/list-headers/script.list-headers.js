'use strict';

var html = require('raw!./view.list-headers.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'List Headers';
  }
};
