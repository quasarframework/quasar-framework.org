'use strict';

var html = require('raw!./view.selectbox.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Selectbox';

  done({
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
    }
  });
};
