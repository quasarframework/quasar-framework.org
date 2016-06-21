title: Quasar Framework Release Notes
---
NPM package holding Quasar Framework is `quasar-framework`.

#### v0.3.0 / 2016-06-21

No breaking changes.
New features:
  * Pull down to refresh
  * Infinite scroll
  * Chat CSS
  * Dropdown
  * Context Dropdown
  * `highlight-and-fade` CSS class

Others changes:
  * App Notifies are now displayed at the top edge of the screen for iOS theme
  * fix: quasar.current.page containers properties (height: 100%)
  * Increased default global progress delay from 300 to 500ms
  * fix: Default spinner for iOS is now different than Material
  * Touch directive (`v-touch`) is now available for desktop too where touch actions can be simulated by dragging the mouse on the DOM elements.

#### v0.2.0 / 2016-06-16

   No breaking changes but lots of additions.
   A revisit of the [Quasar Pages](/guide/quasar-pages.html) would be good.

  * Parameterized Page Routes
    Learn how to register a Page with multiple routes, like `#/library/:book/:page'. Read more [here](/guide/parameterized-page-routes.html) how to handle this scenario.
  * New properties available for `this` when exporting a function from Page script file (instead of an Object):
    * this.route (eg. `:book/:chapter` or default route '$')
    * this.hash (eg. `#/book`)
    * this.parameterized (Boolean; tells whether the page was accessed through a parameterized route and/or with a Query String)
  * Added `within-iframe-only` CSS visibility class. When entire website/app is within an IFRAME tag, the `<body>` tag will now have `within-iframe` class.
  * fix: Avoid infinite loop on non numeric input values on Pagination Web Component
  * `app:error` event, which is triggered when **any** Javascript error occurs. Read more [here](/api/js-events-list.html#Parameter-supplied-by-app-error).
  * Global Progress feature; overlay with spinner API. Quasar also uses it now when loading a Page. Read more [here](/api/js-global-progress.html).
  * `dimmed` and `light-dimmed` CSS classes. Read more [here](/api/css-visibility.html).

#### v0.1.2 / 2016-06-13

  * Updated some dependencies: jQuery to v3, Roboto font face to v0.5.0
  * fix: Trigger Parallax events in the right order
  * fix: Grid column selection; avoid VueJS glitch
  * feat: Dialog with Toggles
  * style: Improve design for Tree web component

#### v0.1.0 / 2016-06-06

  * First public-ready release.
