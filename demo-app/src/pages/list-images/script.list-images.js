'use strict';

var html = require('raw!./view.list-images.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Lists with Images';
  }
};
