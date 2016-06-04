$(function() {
  var
    variables = [],
    input = $('#search-variable'),
    table = $('#search-results')
    ;

  $.getJSON('/stylus-variables.json', function(data) {
    Object.keys(data).forEach(function(property) {
      variables.push([
        property,
        data[property].mat || '<em>Not Applicable</em>',
        data[property].ios || '<em>Not Applicable</em>'
      ]);
    });

    input
      .removeAttr('disabled')
      .attr('placeholder', 'Filter Stylus variable names')
      .on('input', debounce(function() {
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

  function fillTable(rows) {
    table.html(rows.map(function(row) {
      return '<tr>' +
        '<td>' + row[0] + '</td>' +
        '<td>' + row[1] + '</td>' +
        '<td>' + row[2] + '</td>';
    }).join(''));
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
});
