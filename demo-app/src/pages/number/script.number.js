'use strict';

var html = require('raw!./view.number.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Number';

  done({
    template: html,
    data: {
      number: 3
    }
  });
};
