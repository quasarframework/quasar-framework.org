'use strict';

var html = require('raw!./view.card-fab.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards with FAB';

  done({
    template: html
  });
};
