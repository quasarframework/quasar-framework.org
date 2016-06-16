'use strict';

var html = require('raw!./view.list-images.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Lists with Images';

  done({
    template: html
  });
};
