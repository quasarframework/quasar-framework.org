'use strict';

var html = require('raw!./view.textarea.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Textarea';

  done({
    template: html,
    data: {
      message: ''
    }
  });
};
