(function () {
  /* HACK for WebKit/IE/Edge */
  NodeList.prototype.forEach = Array.prototype.forEach;

  /* eslint-disable one-var */
  var
    sidebarId = 'qwb-sidebar',
    sidebarToggle = document.getElementById(sidebarId + '-toggle'),
    sidebar = document.getElementById(sidebarId)
    ;

  if (!sidebar)
    return; // <-- we're not in a page with sidebar

  var
    accordion = sidebar.querySelector('.qwb-accordion'),
    accordionToggles = accordion.querySelectorAll('.qwb-toggle'),
    currentPageLink = sidebar.querySelector('a.current'),
    sessionAccordionId = sidebarId + '-accordion',
    sessionAccordionScrollId = sessionAccordionId + '-scroll',
    sessionAccordionToggleBaseId = sessionAccordionId + '-toggle-'
    ;

  // store state of sidebar's accordion to session storage
  function storeAccordionState () {
    // vertical scroll
    var scrollY = accordion.scrollTop;
    sessionStorage.setItem(sessionAccordionScrollId, scrollY);
    // status of accordion's toggles (on/off)
    accordionToggles.forEach(function (toggle, idx) {
      var toggleStatus = toggle.classList.contains('on');
      sessionStorage.setItem(sessionAccordionToggleBaseId + idx, toggleStatus);
    });
  }

  // build current page sub-links
  if (currentPageLink) {
    var
      h2s = document.querySelectorAll('#qwb-page > a > h2')
      submenu = document.createElement('ul')
      ;

    h2s.forEach(function (h2) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.innerText = h2.innerText;
      link.href = '#' + h2.id;
      link.setAttribute('data-scroll', '');
      item.appendChild(link);
      submenu.appendChild(item);
    });

    currentPageLink.parentNode.insertBefore(submenu, currentPageLink.nextSibling);
  }

  // bind accordion state
  accordionToggles.forEach(function (toggle, idx) {
    var toggleStatus = sessionStorage.getItem(sessionAccordionToggleBaseId + idx) === 'true';
    toggleStatus ? toggle.classList.add('on') : toggle.classList.remove('on');
  });
  var scrollY = Number(sessionStorage.getItem(sessionAccordionScrollId)) || 0;
  accordion.scrollTop = scrollY;

  // listen for events to do positioning
  accordion.addEventListener('scroll', storeAccordionState);
  accordion.addEventListener('click', storeAccordionState);
  accordion.addEventListener('resize', storeAccordionState);
}());
