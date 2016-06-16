'use strict';

var html = require('raw!./view.pagination.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Pagination';

  done({
    template: html,
    data: {
      page: 1
    }
  });
};
