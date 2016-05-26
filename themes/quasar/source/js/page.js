$(function() {

  var
    each = [].forEach,
    main = document.getElementById('main'),
    doc = document.documentElement,
    body = document.body,
    header = document.getElementById('header'),
    menu = document.querySelector('.sidebar'),
    content = document.querySelector('.content'),
    toTop = document.getElementById('toTop'),
    scrollSpeed = 400
    ;

  var mobileBar = document.getElementById('mobile-bar');
  var menuButton = mobileBar.querySelector('.menu-button');

  menuButton.addEventListener('click', function() {
    menu.classList.toggle('open');
  });

  body.addEventListener('click', function(e) {
    if (e.target !== menuButton && !menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

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

  function updateSidebar(top) {
    var headerHeight = header.offsetHeight;

    main.className = top > headerHeight ? 'fix-sidebar' : '';

    if (animating || !allLinks) {
      return;
    }

    var last;

    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i];

      if (link.offsetTop >= top + headerHeight + 20) {
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

        window.themePreview.selectPage(link ? link.data('demo-page') : '');
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

  function scrollToTop(duration) {
    // because it's so fucking difficult to detect the scrolling element, just move them all
    function move(amount) {
      document.documentElement.scrollTop = amount;
      document.body.parentNode.scrollTop = amount;
      document.body.scrollTop = amount;
    }
    function position() {
      return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
    }

    var start = position(),
      change = 0 - start,
      currentTime = 0,
      increment = 20,
      duration = typeof duration === 'undefined' ? 500 : duration
      ;

    var animateScroll = function() {
      // increment the time
      currentTime += increment;
      // find the value with the quadratic in-out easing function
      var val = easeInCubic(currentTime, start, change, duration);

      // move the document.body
      move(val);
      // do the animation unless its over
      if (currentTime < duration) {
        requestAnimFrame(animateScroll);
      }
    };

    animateScroll();
  }

  toTop.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(1000);
  });

  function updateToTop(top) {
    toTop.classList[top > 1500 ? 'add' : 'remove']('visible');
  }


  function redraw() {
    var top = doc && doc.scrollTop || body.scrollTop;

    updateSidebar(top);
    updateToTop(top);
  }

  // listen for scroll event to do positioning & highlights
  window.addEventListener('scroll', redraw);
  window.addEventListener('resize', redraw);
});

$(function() {
  var
    previewNode = $('#preview'),
    themePicker = $('#preview-chooser a'),
    themeNodes = $('#preview .theme'),
    iframes = $('#preview iframe'),
    contentNode = $('#main > .content'),
    selectedTheme = $.cookie('theme') || 'android',
    demoPoints = $('#main .content input[data-demo-page]'),
    viewSourceButtons = $('.button.view-source'),
    currentPage,
    // eslint-disable-next-line
    isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))
    ;

  if (isMobile || themePicker.length === 0 || demoPoints.length === 0) {
    return;
  }

  themePicker.click(function() {
    window.themePreview.selectTheme($(this).data('theme'));
  });

  $('#btn-close-desktop-view').click(function() {
    window.themePreview.selectTheme('desktop');
  });

  window.themePreview = {
    show: function(page) {
      previewNode.css('display', 'block');
      contentNode.addClass('with-previewer');
      currentPage = page;
      this.selectTheme(selectedTheme);
    },
    hide: function() {
      previewNode.css('display', 'none');
      contentNode.removeClass('with-previewer');
    },
    selectPage: function(page) {
      currentPage = page;

      iframes.each(function() {
        var
          $this = $(this),
          theme = $(this).attr('id').split('-')[0]
          ;

        if (selectedTheme !== theme) {
          return;
        }

        if (page) {
          $this.attr('src', '/preview/' + theme + '.html#/' + page);
          viewSourceButtons
            .css('display', 'inline-block')
            .attr('href', 'https://github.com/rstoenescu/quasar-site/tree/master/preview/pages/' + page);
        }
        else {
          $this.attr('src', '');
          viewSourceButtons.css('display', 'none');
        }
      });
    },
    selectTheme: function(theme) {
      themePicker.removeClass('active');

      if (theme === 'desktop' && selectedTheme === 'desktop') {
        theme = 'android';
        $('body').css('overflow', '');
      }

      $('#preview #preview-chooser a[data-theme="' + theme + '"]').addClass('active');

      themeNodes.css('display', 'none');
      $('#' + theme + '-preview').css('display', 'block');

      if (theme !== 'desktop') {
        $.cookie('theme', theme);
      }
      else if (selectedTheme !== 'desktop') {
        $('body').css('overflow', 'hidden');
      }

      selectedTheme = theme;
      this.selectPage(currentPage);
    }
  };

  window.themePreview.show();
});
