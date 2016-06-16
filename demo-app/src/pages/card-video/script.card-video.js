'use strict';

var html = require('raw!./view.card-video.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards with Video';

  done({
    template: html
  });
};
