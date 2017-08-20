(function () {
  /* HACK for WebKit/IE/Edge */
  NodeList.prototype.forEach = Array.prototype.forEach;

  /* eslint-disable one-var */
  var
    previewNode = document.querySelector('#qwb-device-preview'),
    themePickers = document.querySelectorAll('#qwb-device-preview-chooser a'),
    themeNodes = document.querySelectorAll('#qwb-device-preview .theme'),
    iframes = document.querySelectorAll('#qwb-device-preview iframe'),
    contentNode = document.querySelector('#qwb-page'),
    selectedTheme = localStorage.getItem('theme') || 'android',
    demoPoints = document.querySelectorAll('#qwb-page input[data-demo]'),
    fullPageDemo = document.querySelector('#qwb-page input[data-fullpage-demo]'),
    externalPoints = document.querySelectorAll('#qwb-page input[data-external-demo]'),
    viewSourceButtons = document.querySelectorAll('#qwb-device-preview .view-source'),
    desktopLauncher = document.querySelector('#qwb-device-preview .desktop-launcher'),
    currentPage,
    mobileThemes = ['android', 'apple']

  function getSourceURL (page) {
    return 'https://github.com/quasarframework/quasar-play/tree/master/src/components/showcase/' +
      (page.indexOf('layout') !== 0 ? page + '.vue' : 'layout/layout.vue')
  }

  function getDemoURL (theme, page) {
    if (page.indexOf('http') === 0) {
      return page
    }
    return '/quasar-play/' + theme + '/index.html#/showcase/' + page
  }

  function getExternalLinks (page, alwaysVisible) {
    var node = document.createElement('div')
    node.innerHTML = '<div class="demo-links ' + (alwaysVisible ? 'demo-always-visible' : '') + '">Demo: ' +
      mobileThemes.map(function (theme) {
        return '<a class="spawn-demo" ' +
          'href="' + getDemoURL(theme, page) + '" target="_blank"><i class="fa fa-' + theme + '"></i></a>'
      }).join(' ') +
      ' <a class="spawn-demo" target="_blank" href="' + getSourceURL(page) + '">' +
      'Source <i class="fa fa-file-code-o"></i></a></div>'
    return node
  }

  externalPoints.forEach(function (point) {
    var page = point.getAttribute('data-external-demo')
    point.parentNode.insertBefore(getExternalLinks(page, true), point.nextSibling)
  })

  /* eslint-disable no-extra-parens */
  if (
    !themePickers.length ||
    (!demoPoints.length && !fullPageDemo)
  ) {
    return
  }

  if (window.isMobile) {
    demoPoints.forEach(function (point) {
      var page = point.getAttribute('data-demo')

      point.parentNode.insertBefore(getExternalLinks(page, true), point.nextSibling)
      point.parentNode.removeChild(point)
    })

    if (fullPageDemo) {
      fullPageDemo.parentNode.insertBefore(
        getExternalLinks(fullPageDemo.getAttribute('data-fullpage-demo'), true),
        fullPageDemo.nextSibling
      )
      fullPageDemo.parentNode.removeChild(fullPageDemo)
    }

    return // <<<<--- EARLY EXIT
  }

  if (!fullPageDemo) {
    document.querySelector('#qwb-footer').style.marginBottom = '100vh'
  }

  themePickers.forEach(function (picker) {
    picker.addEventListener('click', function () {
      window.themePreview.selectTheme(this.getAttribute('data-theme'))
    })
  })

  window.themePreview = {
    show: function (page) {
      previewNode.classList.remove('active')
      contentNode.classList.add('with-previewer') // TODO
      currentPage = page
      this.selectTheme(selectedTheme)
    },
    hide: function () {
      previewNode.style.display = 'none'
      contentNode.classList.remove('with-previewer') // TODO
    },
    selectPage: function (page) {
      currentPage = page

      iframes.forEach(function (iframe) {
        var theme = iframe.getAttribute('id').split('-')[0]

        if (selectedTheme !== theme) {
          return
        }

        if (page) {
          iframe.setAttribute('src', getDemoURL(theme, page))
          var action = page.indexOf('http') === 0 ? 'remove' : 'add'

          viewSourceButtons.forEach(function (node) {
            node.classList[action]('active')
            node.setAttribute('href', getSourceURL(page))
          })
          desktopLauncher.classList[action]('active')
          desktopLauncher.setAttribute('href', getDemoURL(theme, page))
        }
        else {
          iframe.setAttribute('src', '')
          Array.prototype.slice.call(viewSourceButtons).concat([desktopLauncher]).forEach(function (node) {
            node.classList.remove('active')
          })
        }
      })
    },
    selectTheme: function (theme) {
      if (theme) {
        themePickers.forEach(function (picker) {
          picker.classList.remove('inverted')
        })
        themeNodes.forEach(function (node) {
          node.classList.remove('active')
        })
        
        document.querySelector('#qwb-device-preview #qwb-device-preview-chooser a[data-theme="' + theme + '"]')
          .classList.add('inverted')
        document.querySelectorAll('#qwb-' + theme + '-preview').forEach(function (node) {
          node.classList.add('active')
        })

        localStorage.setItem('theme', theme)
        selectedTheme = theme
      }

      this.selectPage(currentPage)
    }
  }

  if (fullPageDemo) {
    window.themePreview.fullPageDemo = true
    window.themePreview.show(fullPageDemo.getAttribute('data-fullpage-demo'))
  }
  else {
    window.themePreview.show()
  }
}())
