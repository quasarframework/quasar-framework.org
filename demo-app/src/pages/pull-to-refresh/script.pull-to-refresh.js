'use strict';

var html = require('raw!./view.pull-to-refresh.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Pull Down to Refresh';

  done({
    template: html,
    data: {
      items: [{}, {}, {}, {}, {}, {}]
    },
    methods: {
      refresher: function(done) {
        setTimeout(function() {
          done();
          this.items.unshift({});
        }.bind(this), 3000);
      }
    }
  });
};
