title: Quasar Framework Release Notes
---
NPM package holding Quasar Framework is `quasar-framework`.

## v0.4.1 / 2016-07-05

No breaking changes.
Fixed some bugs for iOS platform including [blank screen  one](https://github.com/rstoenescu/quasar-framework/issues/10).

## v0.4.0 / 2016-06-28
Breaking change:
  * [Label](/components/label.html) replaces Badge.
  * Simplified [image (avatar and thumbnail) HTML syntax for Lists](/components/list.html#List-with-Images).
    * Images are no longer required to be wrapped inside `<div class="item-avatar">` or `<div class="item-thumbnail">`. Simply add `avatar` or `thumbnail` CSS classes to the images and DO not wrap them anymore.

New features:
  * [Timeline CSS](/components/timeline.html)
  * [Progress Dialog](/components/dialog.html#Progress)
  * Dialog [stacked buttons](/components/dialog.html#Components) option
  * New [spinners](/components/spinners.html): `facebook`, `gears`, `hourglass`, `infinity`, `pie`, `radio`
  * [Action Sheet with gallery mode](/components/action-sheet.html#Basic-Usage) instead of using Lists
  * Slightly differentiate [Chat CSS](/components/chat.html) for iOS theme
  * [Vuex](/guide/vue-model-communication.html#Best-Solution-Vuex) now supplied by default
  * [$quasar variable](/guide/quasar-pages.html#quasar-variable) available within Vue templates

New [Positioning CSS classes](/api/css-positioning.html):
  * `relative-position`
  * `vertical-top`, `vertical-middle`, `vertical-bottom`
  * `on-left`, `on-right`

New [Visibility CSS classes](/api/css-visibility.html):
  * `orientation-landscape` and `orientation-portrait`
  * Hide elements for a specific platform, like: `desktop-hide`, `cordova-hide`

New [Typography CSS classes](/api/css-typography.html#CSS-Helper-Classes):
  * `text-italic`, `text-bold`
  * [**avatar** image CSS class](/components/image-gallery.html#Avatar-Images)

## v0.3.0 / 2016-06-21

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

## v0.2.0 / 2016-06-16

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

## v0.1.2 / 2016-06-13

  * Updated some dependencies: jQuery to v3, Roboto font face to v0.5.0
  * fix: Trigger Parallax events in the right order
  * fix: Grid column selection; avoid VueJS glitch
  * feat: Dialog with Toggles
  * style: Improve design for Tree web component

## v0.1.0 / 2016-06-06

  * First public-ready release.
