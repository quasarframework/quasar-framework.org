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
          var indexTitle = -1;
          var indexContent = -1;
          var firstOccur = -1;
          var matchedKeywords = [];
          var lowerDataTitle = dataTitle.toLowerCase();
          var lowerDataContent = dataContent.toLowerCase();

          lowerKeywords.forEach(function (lowerKeyword, i) {
            indexTitle = lowerDataTitle.indexOf(lowerKeyword);
            indexContent = lowerDataContent.indexOf(lowerKeyword);

            if (indexTitle >= 0 || indexContent >= 0) {
              matchedKeywords.push(keywords[i]);

              if (indexContent < 0) {
                indexContent = 0;
              }

              if (i == 0) {
                firstOccur = indexContent;
              }
            }
          });

          // Store matched entry in response array
          if (
            matchedKeywords.length > 0 &&
            dataContent.length > 0
          ) {
            response.push({
              url: dataUrl,
              title: dataTitle,
              content: dataContent,
              firstOccur: firstOccur,
              keywords: matchedKeywords
            });
          }
        }
      });

      // Sort for relevance
      response.sort(function(a, b) {
        if (a.keywords.length > b.keywords.length)
          return -1;
        if (b.keywords.length > a.keywords.length)
          return 1;

        return a.firstOccur > b.firstOccur ? -1 : 1;
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
