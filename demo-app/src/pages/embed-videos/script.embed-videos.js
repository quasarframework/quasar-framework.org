'use strict';

var html = require('raw!./view.embed-videos.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Videos Embedding';

  done({
    template: html
  });
};
