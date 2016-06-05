'use strict';

var html = require('raw!./view.breadcrumb.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Breadcrumbs';
  }
};
