$(function() {
  'use strict';

  function titleCase(string) {
    return string.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function parseResponse(xmlResponse) {
    // get the contents from search data
    var datas = $('entry', xmlResponse).map(function() {
      return {
        title: $('title', this).text(),
        content: $('content', this).text(),
        url: $('url', this).text()
      };
    }).get();

    var $input = document.getElementById('local-search-input');
    var $resultContent = document.getElementById('local-search-result');

    $('input#local-search-input').keyup(function(e) {
      if (e.keyCode == 27) {
        $(this).val('');
        $resultContent.innerHTML = '';
      }
    });

    $input.addEventListener('input', function() {
      var str = '<ul>';
      var keywords = this.value.trim();

      $resultContent.innerHTML = '';
      if (keywords.length <= 0) {
        return;
      }
      keywords = keywords.toLowerCase().split(/[\s\-]+/);

      // perform local searching
      datas.forEach(function(data) {
        var isMatch = true;
        var contentIndex = [];
        var dataTitle = data.title.trim().toLowerCase();
        var dataContent = data.content.trim().replace(/<[^>]+>/g,'').toLowerCase();
        var dataUrl = data.url;
        var indexTitle = -1;
        var indexContent = -1;
        var firstOccur = -1;

        // only match artiles with not empty titles and contents
        if(dataTitle != '' && dataContent != '') {
          keywords.forEach(function(keyword, i) {
            indexTitle = dataTitle.indexOf(keyword);
            indexContent = dataContent.indexOf(keyword);

            if (indexTitle < 0 && indexContent < 0) {
              isMatch = false;
            }
            else {
              if (indexContent < 0) {
                indexContent = 0;
              }
              if (i == 0) {
                firstOccur = indexContent;
              }
              // contentIndex.push({indexContent:indexContent, keyword_len:keyword_len});
            }
          });
        }

        // show search results
        if (isMatch) {
          var content = data.content.trim().replace(/<[^>]+>/g,'');

          if (!content.length) {
            return;
          }

          str += '<li><a href="' + dataUrl + '" class="search-result-title">' + titleCase(dataTitle) + '</a>';

          if (firstOccur >= 0) {
            // cut out 100 characters
            var start = firstOccur - 100;
            var end = firstOccur + 100;

            if (start < 0) {
              start = 0;
            }

            if (start == 0) {
              end = 200;
            }

            if (end > content.length) {
              end = content.length;
            }

            var matchContent = content.substring(start, end);

            // highlight all keywords
            keywords.forEach(function(keyword) {
              var regS = new RegExp(keyword, 'gi');

              matchContent = matchContent.replace(regS, '<code>' + keyword + '</code>');
            });

            str += '<a class="search-result" href="' + dataUrl + '"><p>' + matchContent + '...</p></a>';
          }
          str += '</li>';
        }
      });
      str += '</ul>';
      $resultContent.innerHTML = str;
    });
  }

  $.ajax({
    url: '/search.xml',
    dataType: 'xml',
    success: parseResponse
  });
});
