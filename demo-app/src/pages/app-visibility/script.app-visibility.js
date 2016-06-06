'use strict';

var html = require('raw!./view.app-visibility.html');

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

module.exports = {
  template: html,
  methods: {
    writeVisibilityState: function(state) {
      var date = new Date();

      $(this.$els.visibility).prepend(
        pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds()) + '.' + date.getMilliseconds() +
        ' App became ' + state + '.<br>'
      );
    }
  },
  ready: function() {
    quasar.current.layout.vm.$data.title = 'App Visibility';
    quasar.events.on('app:visibility', this.writeVisibilityState);
  },
  destroyed: function() {
    quasar.events.off('app:visibility', this.writeVisibilityState);
  }
};
