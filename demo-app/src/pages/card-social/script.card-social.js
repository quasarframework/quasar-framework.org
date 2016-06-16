'use strict';

var html = require('raw!./view.card-social.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Social Cards';

  done({
    template: html
  });
};
