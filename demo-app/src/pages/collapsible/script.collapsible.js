'use strict';

var html = require('raw!./view.collapsible.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Collapsible';

  done({
    template: html
  });
};
