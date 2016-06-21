
var html = require('raw!./layout.grid-layout.html');

module.exports = function(done) {
  done({
    template: html,
    data: {
      grid: {
        sortable: true,
        selection: 'none'
      }
    },
    methods: {
      goToIndex: function() {
        quasar.navigate.to.route('#/');
      }
    }
  });
};
