'use strict';

var html = require('raw!./view.buttons.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Buttons';

  done({
    template: html
  });
};
