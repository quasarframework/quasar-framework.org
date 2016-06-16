'use strict';

var html = require('raw!./view.card-map.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards with Map';

  done({
    template: html
  });
};
