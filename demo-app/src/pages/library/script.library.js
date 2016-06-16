'use strict';

var
  templates = {
    library: require('raw!./html/library.html'),
    book: require('raw!./html/book.html'),
    page: require('raw!./html/page.html')
  };

module.exports = function(loadPage) {
  var
    apiURL,
    template,
    title,
    backButton,
    pageName = this.name,
    params = this.params,
    urlPrefix = '/demo-app/pages/' + pageName + '/assets/'
    ;

  if (this.params.page) {
    apiURL = 'books/' + this.params.book + '-pages.json';
    template = templates.page;
    title = 'Book Pages';
    backButton = '#/' + this.name + '/' + this.params.book;
  }
  else if (this.params.book) {
    apiURL = 'books/' + this.params.book + '-description.json';
    template = templates.book;
    title = 'Book';
    backButton = '#/' + this.name;
  }
  else {
    apiURL = 'library.json';
    template = templates.library;
    title = 'Library Books';
    backButton = '';
  }

  var layoutVM = quasar.current.layout.vm;

  layoutVM.$data.title = title;
  layoutVM.$data.backButton = backButton;
  layoutVM.$data.route = quasar.get.current.route();

  quasar.make.a.get.request({
    url: urlPrefix + apiURL
  }).done(function(data) {
    var pageComponent = {
      template: template,
      data: data,
      methods: {
        navigateTo: function(asset, name, page) {
          var url;

          switch (asset) {
          case 'book':
            url = '/' + name;
            break;
          case 'page':
            url = '/' + name + '/' + (page || 1);
            break;
          case 'library':
          default:
            url = '';
          }

          quasar.navigate.to.route('#/' + pageName + url);
        },
        openWindow: function() {
          quasar.open.url(window.location.href);
        }
      }
    };

    // Inject page number if on :book/:page route
    if (params.page) {
      $.extend(true, pageComponent, {
        data: {
          // sanitized page number
          pageNumber: Math.max(
            Math.min(
              parseInt(params.page, 10) || 1,
              data.book.pages
            ),
            1
          )
        },
        watch: {
          pageNumber: function(page) {
            this.navigateTo('page', this.book.name, page);
          }
        }
      });
    }

    loadPage(pageComponent);
  }).fail(function() {
    loadPage({
      template: 'Failed to load data. Please retry later.'
    });
  });
};

//quasar.current.layout.vm.$data.title = 'Complex Lists';
