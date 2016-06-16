'use strict';

var
  html = require('raw!./view.parallax.html'),
  loremipsum = require('raw!./html/loremipsum.html')
  ;

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Parallax';

  done({
    template: html,
    data: {
      loremipsum: loremipsum
    }
  });
};
