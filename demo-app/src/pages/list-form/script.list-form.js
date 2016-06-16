'use strict';

var html = require('raw!./view.list-form.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'List with Form Components';

  done({
    template: html,
    data: {
      radioModel: 'opt1',
      checkboxModel: false,
      toggleModel: false,
      rangeModel: 4
    }
  });
};
