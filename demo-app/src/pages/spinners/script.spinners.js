'use strict';

var html = require('raw!./view.spinners.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Spinners';

  done({
    template: html,
    data: {
      size: 36,
      color: '#000000',
      spinners: [
        'audio', 'ball', 'bars', 'circles', 'dots',
        'grid', 'hearts', 'ios', 'oval', 'puff',
        'rings', 'tail'
      ],
      colorOptions: [
        {
          label: 'Black',
          value: '#000000'
        },
        {
          label: 'Red',
          value: '#ff0000'
        },
        {
          label: 'Green',
          value: '#00ff00'
        },
        {
          label: 'Blue',
          value: '#0000ff'
        }
      ]
    }
  });
};
