'use strict';

var html = require('raw!./view.rating.html');

module.exports = {
  template: html,
  data: {
    ratingModel: 1
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Rating';
  }
};
