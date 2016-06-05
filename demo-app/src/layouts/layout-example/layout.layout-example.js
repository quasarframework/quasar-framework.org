
var html = require('raw!./layout.layout-example.html');

module.exports = {
  template: html,
  data: {
    pages: [
      'layout-overview',
      'layout-navigation',
      'layout-drawer',
      'layout-marginals'
    ]
  },
  methods: {
    openSource: function() {
      quasar.open.url('https://github.com/rstoenescu/quasar-site/tree/master/demo-app/src/layouts/layout-example');
    }
  }
};
