(function() {
  /* HACK for WebKit/IE/Edge */
  NodeList.prototype.forEach = Array.prototype.forEach;

  window.searchTree = null;

  window.search = function (keywords) {
    var response = [];
    var lowerKeywords = keywords.map(function (k) { return k.toLowerCase(); });

    if (window.searchTree) {

      // Perform local searching
      window.searchTree.forEach(function (data) {
        // Exit if raw data is not complete (missing title or content or url)
        if (!data.title || !data.content || !data.url)
          return;

        var dataTitle = dataTitle = data.title.trim();
        var dataContent = data.content.trim().replace(/<[^>]+>/g,'');
        var dataUrl = data.url;

        // Only match entries with not empty titles and contents
        if (dataTitle !== '' && dataContent !== '') {
          var matchKeywords = [];
          var matchContent = '';
          var matchScore = 0;
          var lowerDataTitle = dataTitle.toLowerCase();
          var lowerDataContent = dataContent.toLowerCase();
          var firstOccur = lowerDataContent.length;
          var occursInTitle = 0;
          var occursInContent = 0;

          // Calculate match keywords and occurrences
          lowerKeywords.forEach(function (lowerKeyword, i) {
            occursInTitle += lowerDataTitle.split(lowerKeyword).length - 1;
            occursInContent += lowerDataContent.split(lowerKeyword).length - 1;

            if (occursInTitle > 0 || occursInContent > 0) {
              matchKeywords.push(keywords[i]);

              var firstOccurInContent = lowerDataContent.indexOf(lowerKeyword);

              if (firstOccurInContent >= 0 && firstOccurInContent < firstOccur) {
                firstOccur = firstOccurInContent;
              }
            }
          });

          // Calculate relevance:
          // - Occurences in content is better than nothing
          // - Occurrences in title are more relevant than in content
          // - More keyword matches are more relevant than less
          matchScore = ((occursInTitle * 5) + occursInContent) * matchKeywords.length * 10;

          // Extract an excerpt of match content
          if (firstOccur < lowerDataContent.length) {
            matchContent = '[...]' + lowerDataContent.substr(Math.max(firstOccur - 30, 0), 150) + '[...]';

            // Highlight all keywords
            lowerKeywords.forEach(function(keyword) {
              var reg = new RegExp(keyword, 'gi')
              matchContent = matchContent.replace(reg, "<strong class=\"search-keyword\">" + keyword + "</strong>");
            });
          }

          // Store matched entry in response array
          if (matchScore > 0) {
            response.push({
              url: dataUrl,
              title: dataTitle,
              content: matchContent,
              keywords: matchKeywords,
              relevance: matchScore
            });
          }
        }
      });

      // Sort for relevance
      response.sort(function(a, b) {
        return a.relevance > b.relevance ? -1 : 1;
      });
    }

    return response;
  }

  // Retrieve local content and store data in 'window.searchTree'.

  axios
    .get('/search.json')
    .then(function (response) {
      window.searchTree = response.data;
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}());
