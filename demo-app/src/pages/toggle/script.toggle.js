'use strict';

var html = require('raw!./view.toggle.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Toggle';

  done({
    template: html,
    data: {
      checked: false
    }
  });
};
