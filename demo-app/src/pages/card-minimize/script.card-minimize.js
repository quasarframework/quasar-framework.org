'use strict';

var html = require('raw!./view.card-minimize.html');

module.exports = {
  template: html,
  methods: {
    dismissMe: function() {
      quasar.notify('Card dismissed.');
    }
  }
};
