'use strict';

var html = require('raw!./view.transitions.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Vue Transitions';

  done({
    template: html,
    data: {
      visible: true
    },
    methods: {
      toggleVisibility: function() {
        this.visible = !this.visible;
      }
    }
  });
};
