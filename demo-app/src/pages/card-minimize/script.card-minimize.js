'use strict';

var html = require('raw!./view.card-minimize.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Cards Minimization';

  done({
    template: html,
    methods: {
      dismissMe: function() {
        quasar.notify('Card dismissed.');
      }
    }
  });
};
