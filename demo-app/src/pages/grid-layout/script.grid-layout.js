'use strict';

var html = require('raw!./view.grid-layout.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'CSS Grid';

  done({
    template: html,
    data: {
      border: false
    }
  });
};
