'use strict';

var html = require('raw!./view.card-basic.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Basic Cards';

  done({
    template: html
  });
};
