'use strict';

var html = require('raw!./view.list-complex-usage.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Complex Lists';

  done({
    template: html
  });
};
