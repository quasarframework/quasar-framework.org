'use strict';

var html = require('raw!./view.radio.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Radio';

  done({
    template: html,
    data: {
      option: 'opt1'
    }
  });
};
