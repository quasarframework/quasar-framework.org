'use strict';

var html = require('raw!./view.list-multiline.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Multiline Lists';

  done({
    template: html
  });
};
