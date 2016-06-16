'use strict';

var html = require('raw!./view.list-basic-usage.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Basic Lists';

  done({
    template: html
  });
};
