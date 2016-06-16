'use strict';

var html = require('raw!./view.card-list.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards with List';

  done({
    template: html
  });
};
