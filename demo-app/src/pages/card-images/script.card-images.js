'use strict';

var html = require('raw!./view.card-images.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Cards with Images';
  }
};
