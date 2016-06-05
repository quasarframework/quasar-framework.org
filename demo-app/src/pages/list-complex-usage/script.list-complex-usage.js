'use strict';

var html = require('raw!./view.list-complex-usage.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Complex Lists';
  }
};
