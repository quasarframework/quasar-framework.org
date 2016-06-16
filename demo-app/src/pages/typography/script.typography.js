'use strict';

var html = require('raw!./view.typography.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Typography';

  done({
    template: html
  });
};
