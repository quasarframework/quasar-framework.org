'use strict';

var
  pathFn = require('path'),
  _ = require('lodash');

hexo.extend.helper.register('doc_sidebar', function(className) {
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var result = '';
  var self = this;
  var prefix = 'sidebar.' + type + '.';

  _.each(sidebar, function(menu, title) {
    result += '<strong class="' + className + '-title">' + self.link_text(title) + '</strong>';

    _.each(menu, function(link, text) {
      var itemClass = className + '-link';

      if (link === path) {
        itemClass += ' current';
      }

      result += '<a href="' + link + '" class="' + itemClass + '">' + self.link_text(text) + '</a>';
    });
  });

  return result;
});
