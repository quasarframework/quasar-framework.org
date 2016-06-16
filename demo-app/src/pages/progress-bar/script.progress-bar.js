'use strict';

var html = require('raw!./view.progress-bar.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Progress Bars';

  done({
    template: html,
    data: {
      progress: 81
    },
    methods: {
      randomize: function() {
        this.progress = Math.round(Math.random() * 100);
      }
    }
  });
};
