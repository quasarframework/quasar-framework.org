'use strict';

var cheerio = require('cheerio');

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('link_text', function(string) {
  var capitalized = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  var replaced = capitalized.replace(/_/g, ' ');

  return replaced;
});

hexo.extend.helper.register('canonical_url', function(lang) {
  var path = this.page.canonical_path;

  if (lang && lang !== 'en') {
    path = lang + '/' + path;
  }
  return this.config.url + '/' + path;
});

hexo.extend.helper.register('raw_link', function(path) {
  return 'https://github.com/rstoenescu/quasar-site/edit/master/source/' + path;
});

hexo.extend.helper.register('page_anchor', function(str) {
  var $ = cheerio.load(str, {decodeEntities: false});
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) {
    return str;
  }

  headings.each(function() {
    var id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append('<a class="article-anchor" href="#' + id + '" aria-hidden="true"></a>');
  });

  return $.html();
});

hexo.extend.helper.register('canonical_path_for_nav', function() {
  var path = this.page.canonical_path;

  if (startsWith(path, 'docs/') || startsWith(path, 'api/')) {
    return path;
  }
  else {
    return '';
  }
});
