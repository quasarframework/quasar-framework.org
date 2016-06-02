'use strict';

var html = require('raw!./view.list-form.html');

module.exports = {
  template: html,
  data: {
    radioModel: 'opt1',
    checkboxModel: false,
    toggleModel: false,
    rangeModel: 4
  }
};
