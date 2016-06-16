'use strict';

var html = require('raw!./view.breadcrumb.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Breadcrumbs';

  done({
    template: html
  });
};
