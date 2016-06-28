'use strict';

var html = require('raw!./view.label.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Labels';

  done({
    template: html
  });
};
