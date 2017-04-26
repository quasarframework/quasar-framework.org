(function() {
  window.searchTree = null;

  window.search = function (keywords) {
    var response = [];
    var lowerKeywords = keywords.map(function (k) { return k.toLowerCase(); });

    if (window.searchTree) {
      // Perform local searching
      window.searchTree.forEach(function (data) {
        var dataTitle = data.title.trim();
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

  // Retrieve local content.
  // Convert data from XML to JS and store it in 'window.searchTree'.

  axios
    .get('/search.xml')
    .then(function (response) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(response.data, "text/xml");
      var xmlEntries = Array.from(xmlDoc.getElementsByTagName("entry"));

      window.searchTree = xmlEntries.map(function (xmlEntry) {
        var jsonEntry = {}

        Array.from(xmlEntry.children).forEach(function (node) {
          jsonEntry[node.nodeName] = node.textContent;
        });

        return jsonEntry;
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}());
