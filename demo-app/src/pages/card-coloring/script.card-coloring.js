'use strict';

var html = require('raw!./view.card-coloring.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Coloring Cards';

  done({
    template: html
  });
};
