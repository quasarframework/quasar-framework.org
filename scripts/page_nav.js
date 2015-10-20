'use strict';

var pathFn = require('path');

hexo.extend.helper.register('page_nav', function() {
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var list = {};

  for (var i in sidebar) {
    if (!sidebar.hasOwnProperty(i)) {
      continue;
    }
    for (var j in sidebar[i]) {
      if (!sidebar[i].hasOwnProperty(j)) {
        continue;
      }
      list[sidebar[i][j]] = j;
    }
  }

  var keys = Object.keys(list);
  var index = keys.indexOf(path);
  var result = '';

  if (index > 0) {
    result += '<a href="' + keys[index - 1] + '" class="article-footer-prev" title="Previous: ' +
      this.site_navigation_sidebar_link(list[keys[index - 1]]) + '">' +
      '<i class="fa fa-chevron-left"></i><span>Previous</span></a>';
  }

  if (index < keys.length - 1) {
    result += '<a href="' + keys[index + 1] + '" class="article-footer-next" title="Next: ' +
      this.site_navigation_sidebar_link(list[keys[index + 1]]) + '">' +
      '<span>Next</span><i class="fa fa-chevron-right"></i></a>';
  }

  return result;
});
