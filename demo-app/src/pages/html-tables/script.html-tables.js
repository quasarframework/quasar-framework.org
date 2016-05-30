'use strict';

var html = require('raw!./view.html-tables.html');

module.exports = {
  template: html,
  data: {
    styles: [
      '',
      'inner-delimiter',
      'bordered',
      'striped',
      'highlight',
      'centered',
      'compact'
    ]
  }
};
