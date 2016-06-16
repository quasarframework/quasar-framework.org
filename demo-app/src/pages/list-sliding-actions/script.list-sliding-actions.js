'use strict';

var html = require('raw!./view.list-sliding-actions.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Lists with Sliding Actions';

  done({
    template: html
  });
};
