'use strict';

var html = require('raw!./view.input-textbox.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Input Textbox';

  done({
    template: html,
    data: {
      username: '',
      password: ''
    }
  });
};
