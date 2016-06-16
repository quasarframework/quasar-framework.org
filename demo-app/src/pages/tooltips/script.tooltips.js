'use strict';

var html = require('raw!./view.tooltips.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Tooltips';

  done({
    template: html
  });
};
