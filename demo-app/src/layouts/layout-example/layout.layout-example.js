
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
  }
};
