'use strict';

var html = require('raw!./view.checkbox.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Checkbox';

  done({
    template: html,
    data: {
      checked: false
    }
  });
};
