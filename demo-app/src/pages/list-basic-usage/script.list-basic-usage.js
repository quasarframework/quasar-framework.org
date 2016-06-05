'use strict';

var html = require('raw!./view.list-basic-usage.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Basic Lists';
  }
};
