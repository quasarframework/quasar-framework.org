'use strict';

var html = require('raw!./view.badge.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Badges';

  done({
    template: html
  });
};
