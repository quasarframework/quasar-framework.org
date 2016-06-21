'use strict';

var html = require('raw!./view.context-dropdown.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Context Dropdown';

  done({
    template: html
  });
};
