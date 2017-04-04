(function() {
  var variables = [];
  var input = document.getElementById('search-variable');
  var table = document.getElementById('search-results');

  function fillTable(rows) {
    table.innerHTML = rows.map(function(row) {
      return '<tr><td>' + row[0] + '</td><td>' + row[1] + '</td><td>' + row[2] + '</td></tr>';
    }).join('');
  }

  function debounce(func, wait) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      }
      else {
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }

      return result;
    };
  }

  axios
    .get('/stylus-variables.json')
    .then(function (response) {
      Object.keys(response.data).forEach(function (property) {
        variables.push([
          property,
          data[property].mat || '<em>Not Applicable</em>',
          data[property].ios || '<em>Not Applicable</em>'
        ]);
      });

      input
        .removeAttribute('disabled')
        .setAttribute('placeholder', 'Filter Stylus variable names')
        .addEventListener('input', debounce(function() {
          var token = $(this).val().trim();

          if (token.length === 0) {
            fillTable(variables);
            return;
          }

          fillTable(variables.filter(function(item) {
            return item[0].indexOf(token) > -1;
          }));
        }, 500));

      fillTable(variables);
    });
}());
