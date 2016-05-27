(function() {

  var each = [].forEach;

  hexo.extend.helper.register('body_class', function(page) {
    if (page.path === 'index.html') {
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

    each.call(categories, function(category) {
      if (foundPosition) {
        return;
      }
      category.forEach(function(html, name) {
        if (foundPosition) {
          return;
        }
        tmpPath = self.page_path_from_menu(type, html, name);
        if (tmpPath == page.path) {
          foundPosition = true;
          return;
        }
        previous = {
          path: tmpPath,
          title: name
        };
      });
    });

    if (previous) {
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

    each.call(categories, function(category) {
      if (foundPosition) {
        return;
      }
      category.forEach(function(html, name) {
        if (foundPosition) {
          return;
        }
        tmpPath = self.page_path_from_menu(type, html, name);
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

    if (next) {
      return next;
    }
  });

}());
