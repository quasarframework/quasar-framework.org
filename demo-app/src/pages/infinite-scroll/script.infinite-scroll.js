'use strict';

var html = require('raw!./view.infinite-scroll.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Infinite Scroll';

  done({
    template: html,
    data: {
      items: [{}, {}, {}, {}, {}]
    },
    methods: {
      refresher: function(index, done) {
        setTimeout(function() {
          var items = [];

          for (var i = 0; i < 7; i++) {
            items.push({});
          }

          this.items = this.items.concat(items);
          done();
        }.bind(this), 1500);
      }
    }
  });
};
