'use strict';

var cheerio = require('cheerio');

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('site_navigation_sidebar_link', function(string) {
  var replaced = string.replace(/_/g, ' ');
  var capitalized = replaced.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  return capitalized;
});

hexo.extend.helper.register('edit_page_link', function(path) {
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
