'use strict';

var html = require('raw!./view.colors.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Color Palette';

  done({
    template: html,
    data: {
      mainColors: ['primary', 'secondary', 'tertiary', 'neutral', 'positive', 'negative', 'info', 'warning', 'light', 'dark', 'faded'],
      colors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
    }
  });
};
