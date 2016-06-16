
var html = require('raw!./layout.library-layout.html');

module.exports = {
  template: html,
  data: {
    title: '',
    backButton: '',
    route: ''
  },
  methods: {
    goBack: function() {
      if (!this.backButton) {
        return;
      }

      quasar.navigate.to.route(this.backButton);
    }
  }
};
