'use strict';

var html = require('raw!./view.card-coloring.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Coloring Cards';
  }
};
