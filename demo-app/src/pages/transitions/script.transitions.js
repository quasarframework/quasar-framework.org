'use strict';

var html = require('raw!./view.transitions.html');

module.exports = {
  template: html,
  data: {
    visible: true
  },
  methods: {
    toggleVisibility: function() {
      this.visible = !this.visible;
    }
  }
};
