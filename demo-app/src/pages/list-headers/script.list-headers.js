'use strict';

var html = require('raw!./view.list-headers.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'List Headers';

  done({
    template: html
  });
};
