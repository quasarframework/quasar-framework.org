'use strict';

var html = require('raw!./view.selectbox.html');

module.exports = {
  template: html,
  data: {
    select: 'fb',
    multipleSelect: ['goog', 'twtr'],
    selectOptions: [
      {
        label: 'Google',
        value: 'goog'
      },
      {
        label: 'Facebook',
        value: 'fb'
      },
      {
        label: 'Twitter',
        value: 'twtr'
      },
      {
        label: 'Apple Inc.',
        value: 'appl'
      },
      {
        label: 'Oracle',
        value: 'ora'
      }
    ]
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'Selectbox';
  }
};
