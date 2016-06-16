'use strict';

var html = require('raw!./view.range.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Range';

  done({
    template: html,
    data: {
      number: 3
    }
  });
};
