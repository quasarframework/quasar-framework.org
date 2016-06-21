'use strict';

var html = require('raw!./view.chat.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Chat';

  done({
    template: html
  });
};
