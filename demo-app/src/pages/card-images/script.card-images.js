'use strict';

var html = require('raw!./view.card-images.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards with Images';

  done({
    template: html
  });
};
