(function () {
  /* eslint-disable one-var */
  var
    h1s = document.querySelectorAll('#qwb-page .qwb-content h1'),
    h2s = document.querySelectorAll('#qwb-page .qwb-content h2'),
    h3s = document.querySelectorAll('#qwb-page .qwb-content h3')
    ;

  function getHeaderRef (header) {

  }

  function makeHeaderClickable (header) {
    var
      wrapper = document.createElement('a')
      ;

    if (!header.id) {
      header.id = header.innerText.replace(' ', '-');
    }

    wrapper.href = '#' + header.id;
    wrapper.setAttribute('data-scroll', '');
    header.parentNode.insertBefore(wrapper, header);
    wrapper.appendChild(header);
  }

  h1s.forEach(makeHeaderClickable);
  h2s.forEach(makeHeaderClickable);
  h3s.forEach(makeHeaderClickable);
}());
