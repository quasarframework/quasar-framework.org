'use strict';

var html = require('raw!./view.rating.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Rating';

  done({
    template: html,
    data: {
      ratingModel: 1
    }
  });
};
