
var html = require('raw!./layout.default.html');

module.exports = {
  template: html,
  data: {
    title: 'Quasar Framework',
    indexButton: false
  },
  methods: {
    goToIndex: function() {
      quasar.navigate.to.route('#/');
    },
    toggleTheme: function() {
      quasar.swap.theme();
    }
  },
  compiled: function() {
    this.onPageReady = function(page) {
      this.indexButton = page.name !== 'index';
    }.bind(this);

    quasar.events.on('app:page:ready', this.onPageReady);
  },
  destroy: function() {
    quasar.events.off('app:page:ready', this.onPageReady);
  }
};
