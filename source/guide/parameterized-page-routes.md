title: Parameterized Page Routes
---
We will be talking here about Routes and for the sake of completeness, we will mention Query Strings (eg. `#/library?some=query`) too. As a starter, take a look at [API &gt; Router](/api/js-router.html) although you won't need to use that API directly.

Every Page has by default a single route generated. If your Page name is `library` then the default associated route is `#/library`. But you can create parameterized routes for it, like `#/library/:book/:page`.

We will be calling a Page as being *parameterized* if it handles the Query String or has parameterized routes. Please note that accessing parameterized Pages through the non-default route and/or with a Query String do not maintain their scroll position or VueModel when user navigates away.

<input type="hidden" data-fullpage-demo="library">

> **NOTE**
> Non-default routes for `index` will be automatically disabled. This is because the default route for `index` page is `#/` so a parameterized route would possibly overwrite routes for other pages.

## Example of Basic Usage

Let's create a parameterized Page called *library* (`quasar page library`) which handles multiple routes: `#/library`, `#/library/:book` and `#/library/:book/:page` as an example. Click on *View Source* for a complete example like the demo on this page.

### Specifying Parameterized Routes
In your Page manifest file (*config.page-name.yml*) add `routes` property:

``` yml
routes:
  - '$'
  - ':book'
  - ':book/:chapter'
```

First route (`$`) is an alias for the default route, in this case `#/library`. When specifying routes this can be skipped but it's not recommended to have a Page without its default route as this will break the [Automatic Navigation Tabs](/components/layout-automatic-navigation-tabs.html) button for this Page (which tries to load Pages by their default routes).

### Handling Parameterized Routes
Now that we've created the routes, let's learn how to handle them. For this particular example, in your Page's folder create a subfolder called *html* and write some template files like *library.html*, *library-book.html* and *library-book-page.html*. We are choosing a template file for each route just as an example, but this is not required. Be creative on how to manage your Page.

Let's write code in your *script.library.js* file:
``` js
'use strict';

// raw require your templates
var
  defaultTemplate = require('raw!./html/library.html'),
  bookTemplate = require('raw!./html/library-book.html'),
  bookPageTemplate = require('raw!./html/library-book-page.html')
  ;

/*
 * Export the Page Component using a Function.
 * This allows us to access the Page's property through `this`
 * and also make some pre-requisite Ajax calls.
 */
module.exports = function(loadPage) {
  // If User loaded the default route
  if (Object.keys(this.params).length === 0) {
    /*
     * We can also use "!this.parameterized" instead of
     * "Object.keys(this.params).length === 0" but this
     * also includes if Page is accessed with a Query String
     */
    done({
      template: defaultTemplate,
      ...
    });
    return; // <<< EARLY EXIT
  }

  // Else user loaded parameterized route
  var template, apiURL;

  // if we have a page specified
  if (this.parameters.page) {
    template = bookPageTemplate;
    apiURL = '/api/book/' + this.parameters.book + '/' + this.parameters.page;
  }
  // if we only have a book specified
  else {
    template = bookTemplate;
    apiURL = '/api/book/' + this.parameters.book;
  }

  // Retrieved necessary data from a URL
  make.a.get.request({
    url: apiURL
  }).done(function(data) {
    // Finally specify Page Component and load it
    loadPage({
      template: template,
      data: {
        book: data
      }
    });
  }).fail(function() {
    // Uh, oh, we failed retrieving data :(
    loadPage({
      template: 'Ajax request failed!'
    });
  });
};
```

> **IMPORTANT**
> Make sure you sanitize `this.params` and `this.query` before you use them to avoid XSS attacks!

### Handling Query String
Now let's add a Query String Parameter. Say we want to supply books in multiple languages. English, Spanish and French.
Page URLs will end with `?language=en-us`, `?language=spa` or `?language=fr`. If Query String does not contain *language* property, then default to English:

``` js
[...]

module.exports = function(loadPage) {
  var language = this.query.language || 'en-us';

  // do something with language...
};
```
