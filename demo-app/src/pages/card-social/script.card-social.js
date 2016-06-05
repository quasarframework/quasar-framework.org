'use strict';

var html = require('raw!./view.card-social.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Social Cards';
  }
};
