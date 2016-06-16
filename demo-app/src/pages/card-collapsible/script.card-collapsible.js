'use strict';

var html = require('raw!./view.card-collapsible.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards with Collapsible';

  done({
    template: html
  });
};
