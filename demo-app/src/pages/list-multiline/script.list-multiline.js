'use strict';

var html = require('raw!./view.list-multiline.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Multiline Lists';
  }
};
