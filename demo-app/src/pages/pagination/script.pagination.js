'use strict';

var html = require('raw!./view.pagination.html');

module.exports = {
  template: html,
  data: {
    page: 1
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Pagination';
  }
};
