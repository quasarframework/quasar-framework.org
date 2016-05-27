(function() {

  var
    each = [].forEach,
    main = document.getElementById('main'),
    doc = document.documentElement,
    body = document.body,
    header = document.getElementById('header'),
    menu = document.querySelector('.sidebar'),
    content = document.querySelector('.content'),
    scrollSpeed = 400,
    menuButton = header.querySelector('.menu-button'),
    sidebarBackdrop = document.querySelector('.sidebar-backdrop')
    ;

  function toggleSidebar() {
    menu.classList.toggle('open');
    sidebarBackdrop.classList.toggle('active');
  }

  if (menu) {
    menuButton.addEventListener('click', toggleSidebar);
    sidebarBackdrop.addEventListener('click', toggleSidebar);

    // build sidebar
    var currentPageAnchor = menu.querySelector('.sidebar-link.current');

    if (currentPageAnchor) {
      var allLinks = [];
      var sectionContainer;

      sectionContainer = document.createElement('ul');
      sectionContainer.className = 'menu-sub';
      currentPageAnchor.parentNode.appendChild(sectionContainer);

      var h2s = content.querySelectorAll('h2');

      if (h2s.length) {
        each.call(h2s, function(h) {
          sectionContainer.appendChild(makeLink(h));
          var h3s = collectH3s(h);

          allLinks.push(h);
          allLinks.push.apply(allLinks, h3s);
          if (h3s.length) {
            sectionContainer.appendChild(makeSubLinks(h3s));
          }
        });
      }
      else {
        h2s = content.querySelectorAll('h3');
        each.call(h2s, function(h) {
          sectionContainer.appendChild(makeLink(h));
          allLinks.push(h);
        });
      }

      var animating = false;

      sectionContainer.addEventListener('click', function(e) {
        e.preventDefault();
        if (e.target.classList.contains('section-link')) {
          menu.classList.remove('open');
          setActive(e.target);
          animating = true;
        }
      }, true);

      // make links clickable
      allLinks.forEach(makeLinkClickable);

      // init smooth scroll
      smoothScroll.init({
        speed: scrollSpeed,
        offset: window.innerWidth > 720 ? 100 : 15,
        callback: function() {
          setTimeout(function() {
            animating = false;
          }, 100);
        }
      });
    }
  }

  function updateSidebar() {
    var top = doc && doc.scrollTop || body.scrollTop;
    var headerHeight = header.offsetHeight;

    main.className = top > headerHeight ? 'fix-sidebar' : '';

    if (animating || !allLinks) {
      return;
    }

    var last;

    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i];

      if (link.offsetTop >= top + headerHeight + 100) {
        if (!last) {
          last = link;
        }
        break;
      }
      else {
        last = link;
      }
    }
    if (last) {
      setActive(last.id);
    }
  }

  function makeLink(h) {
    var link = document.createElement('li');
    var text = h.textContent.replace(/\(.*\)$/, '');

    // make sure the ids are link-able...
    h.id = h.id
      .replace(/\(.*\)$/, '')
      .replace(/\$/, '');

    link.innerHTML =
      '<a class="section-link" data-scroll href="#' + h.id + '">' +
      text +
      '</a>';

    return link;
  }

  function collectH3s(h) {
    var h3s = [];
    var next = h.nextSibling;

    while (next && next.tagName !== 'H2') {
      if (next.tagName === 'H3') {
        h3s.push(next);
      }
      next = next.nextSibling;
    }
    return h3s;
  }

  function makeSubLinks(h3s, small) {
    var container = document.createElement('ul');

    if (small) {
      container.className = 'menu-sub';
    }
    h3s.forEach(function(h) {
      container.appendChild(makeLink(h));
    });
    return container;
  }

  function setActive(id) {
    var previousActive = menu.querySelector('.section-link.active');
    var currentActive = typeof id === 'string' ?
    menu.querySelector('.section-link[href="#' + id + '"]') : id;

    if (currentActive !== previousActive) {
      if (previousActive) {
        previousActive.classList.remove('active');
      }
      currentActive.classList.add('active');

      if (window.themePreview) {
        var
          demoTarget = $(currentActive).attr('href').substring(1),
          link = $('.content a[data-scroll][href="#' + demoTarget + '"]').next()
          ;

        window.themePreview.selectPage(link ? link.data('demo') : '');
      }
    }
  }

  function makeLinkClickable(link) {
    var wrapper = document.createElement('a');

    wrapper.href = '#' + link.id;
    wrapper.setAttribute('data-scroll', '');
    link.parentNode.insertBefore(wrapper, link);
    wrapper.appendChild(link);
  }


  function easeInCubic(t, b, c, d) {
    return b + c * (t /= d) * t * t;
  }

  var requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60); };
  })();

  // listen for scroll event to do positioning & highlights
  window.addEventListener('scroll', updateSidebar);
  window.addEventListener('resize', updateSidebar);
}());
