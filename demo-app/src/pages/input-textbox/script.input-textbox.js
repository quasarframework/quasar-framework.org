'use strict';

var html = require('raw!./view.input-textbox.html');

module.exports = {
  template: html,
  data: {
    username: '',
    password: ''
  }
};
