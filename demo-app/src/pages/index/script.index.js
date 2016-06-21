'use strict';

var html = require('raw!./view.index.html');

function getPages() {
  var pages = $.extend(true, {}, quasar.data.manifest.pages);

  delete pages.index;
  return pages;
}

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Framework';

  done({
    template: html,
    data: {
      pages: getPages()
    },
    methods: {
      navigateTo: function(pageName) {
        quasar.navigate.to.route('#/' + pageName);
      }
    }
  });
};
