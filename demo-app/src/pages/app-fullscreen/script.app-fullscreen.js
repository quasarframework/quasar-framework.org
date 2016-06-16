'use strict';

var html = require('raw!./view.app-fullscreen.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'App Fullscreen';

  done({
    template: html,
    methods: {
      toggleFullscreen: function() {
        quasar.toggle.fullscreen();
      }
    }
  });
};
