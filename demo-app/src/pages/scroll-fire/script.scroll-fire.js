'use strict';

var
  html = require('raw!./view.scroll-fire.html'),
  loremipsum = require('raw!./html/loremipsum.html')
  ;

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Scroll Fire';

  done({
    template: html,
    data: {
      loremipsum: loremipsum
    },
    methods: {
      bounceImage: function(element) {
        element.velocity('callout.tada', {
          display: null,
          stagger: 200
        });
      }
    }
  });
};
