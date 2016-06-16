'use strict';

var html = require('raw!./view.shadows.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'CSS Shadows';

  done({
    template: html
  });
};
