'use strict';

var html = require('raw!./view.textarea.html');

module.exports = {
  template: html,
  data: {
    message: ''
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Textarea';
  }
};
