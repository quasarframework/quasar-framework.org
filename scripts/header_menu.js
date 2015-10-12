'use strict';

var _ = require('lodash');

hexo.extend.helper.register('header_menu', function(className) {
  var menu = this.site.data.menu;
  var result = '';
  var self = this;

  _.each(menu, function(path, title) {
    result += '<li class="' + className + '-item">';
    result += '<a href="' + path + '" class="' + className + '-link">' + self.link_text(title) + '</a>';
    result += '</li>';
  });

  return result;
});
