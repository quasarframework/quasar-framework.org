'use strict';

var html = require('raw!./view.app-fullscreen.html');

module.exports = {
  template: html,
  ready: function() {
    quasar.current.layout.vm.$data.title = 'App Fullscreen';
  },
  methods: {
    toggleFullscreen: function() {
      quasar.toggle.fullscreen();
    }
  }
};
