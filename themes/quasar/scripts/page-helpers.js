(function() {

  hexo.extend.helper.register('body_class', function(page) {
    if (page.path === 'index.html' || page.support_index) {
      return 'index';
    }
    else if (page.layout === 'post') {
      return 'blog post';
    }
    else if (page.blog_index) {
      return 'blog';
    }
    else if (page.search_index) {
      return 'search';
    }
    return '';
  });

  hexo.extend.helper.register('page_type', function(page) {
    return page.path.substring(0, page.path.indexOf('/'));
  });

  hexo.extend.helper.register('page_path_from_menu', function(type, html, name) {
    var pageName = html.replace('$', name.replace(/ /g, '-').toLowerCase());

    return type + '/' + pageName + '.html';
  });

  hexo.extend.helper.register('previous_page', function(page) {
    var self = this;
    var previous, foundPosition, tmpPath;
    var type = this.page_type(page);

    var categories = this.site.data.pageMenu[type];

    if (!categories) {
      return;
    }

    Object.keys(categories).forEach(function(categoryName) {
      if (foundPosition) {
        return;
      }
      Object.keys(categories[categoryName]).forEach(function(name) {
        if (foundPosition) {
          return;
        }
        tmpPath = self.page_path_from_menu(type, categories[categoryName][name], name);
        if (tmpPath === page.path) {
          foundPosition = true;
          return;
        }
        previous = {
          path: tmpPath,
          title: name
        };
      });
    });

    if (foundPosition && previous) {
      return previous;
    }
  });

  hexo.extend.helper.register('next_page', function(page) {
    var self = this;
    var next, foundPosition, nextPosition, tmpPath;
    var type = this.page_type(page);
    var categories = this.site.data.pageMenu[type];

    if (!categories) {
      return;
    }

    Object.keys(categories).forEach(function(categoryName) {
      if (foundPosition) {
        return;
      }
      Object.keys(categories[categoryName]).forEach(function(name) {
        if (foundPosition) {
          return;
        }
        tmpPath = self.page_path_from_menu(type, categories[categoryName][name], name);
        if (nextPosition) {
          foundPosition = true;
          next = {
            path: tmpPath,
            title: name
          };
          return;
        }
        if (tmpPath == page.path) {
          nextPosition = true;
          return;
        }
      });
    });

    if (foundPosition && next) {
      return next;
    }
  });

  hexo.extend.helper.register('latest_quasar_version', function() {
    return '0.14.0';
  });

}());
