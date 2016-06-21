'use strict';

var html = require('raw!./view.dropdown.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Dropdown';

  done({
    template: html
  });
};
