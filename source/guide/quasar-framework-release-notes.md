title: Quasar Framework Release Notes
---
NPM package holding Quasar Framework is `quasar-framework`.

#### v0.1.3 / 2016-06-14

  A revisit of the [Quasar Pages](/guide/quasar-pages.html) would be good.

  * Parameterized Page Routes
    Learn how to register a Page with multiple routes, like `#/library/:book/:page'. Read more [here](/guide/parameterized-page-routes.html) how to handle this scenario.
  * New properties available for `this` when exporting a function from Page script file (instead of an Object):
    * this.route (eg. `:book/:chapter` or default route '$')
    * this.hash (eg. `#/book`)
    * this.parameterized (Boolean; tells whether the page was accessed through a parameterized route and/or with a Query String)
  * Added `within-iframe-only` CSS visibility class. When entire website/app is within an IFRAME tag, the `<body>` tag will now have `within-iframe` class.
  * fix: Avoid infinite loop on non numeric input values on Pagination Web Component

#### v0.1.2 / 2016-06-13

  * Updated some dependencies: jQuery to v3, Roboto font face to v0.5.0
  * fix: Trigger Parallax events in the right order
  * fix: Grid column selection; avoid VueJS glitch
  * feat: Dialog with Toggles
  * style: Improve design for Tree web component

#### v0.1.0 / 2016-06-06

  * First public-ready release.
