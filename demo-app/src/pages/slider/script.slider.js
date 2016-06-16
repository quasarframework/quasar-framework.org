'use strict';

var
  html = require('raw!./view.slider.html'),
  modalTemplate = require('raw!./html/page-slider-modal.html')
  ;

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Slider';

  done({
    template: html,
    methods: {
      launchModal: function() {
        new quasar.Modal({
          template: modalTemplate
        }).set({
          maximized: true
        }).show();
      }
    }
  });
};
