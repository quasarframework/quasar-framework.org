title: Quasar App Pages
---

An App's central working point is the Pages it is composed of. It enables navigation between different corners of your App.

Because it's easier and it ensures you're using the Quasar standard, use [Quasar CLI](/guide/cli-commands.html#Pages) to create a Page (also use CLI to change its name too because it's easier due to the conventions required).

Don't forget to read more about the [Build System](/guide/quasar-build-system.html) to understand how pages are precompiled and bundled, what files are considered an entry-point and many more.

## Structure
Each page has its own folder (`/src/pages/<page-name>`) and has the structure below:

| Asset | Description |
| --- | --- |
| /assets | Folder to place images, fonts, ... specific to the page only |
| /script.**&lt;page-name&gt;**.js | JS entry point for the page |
| /config.**&lt;page-name&gt;**.yml | YAML file with page configuration (called *Manifest*) |
| /view.**&lt;page-name&gt;**.html | *(optional)* HTML template for the page |
| /style.**&lt;page-name&gt;**.styl | *(optional)* CSS entry point for the page |

> **NOTE**
> If you do not use the optional files or folder, delete them to get a boost in build times. This folder structure is created by [Quasar CLI](/guide/cli-commands.html#Create-Page) so you don't have to manually do it.

## Page Controller (Javascript)
The starting point of a Quasar Page is *script.page-name.js* file. Think of it as the Controller part of a Page.

It has a basic CommonJS structure that exports a Vue instantiation object or a function for doing asynchronous operations before calling a callback with a Vue instantiation object.

``` js
// Option 1. Supply Vue instantiation object

var html = require('raw!./view.page-name.html');

module.exports = { // Vue instance
  template: html,
  ...
};
```

``` js
// Option 2. Do some asynch ops first

var html = require('raw!./view.page-name.html');

module.exports = function(done) {
  /*
   * Properties available:
   */
  this.params // [Object] Route parameters -- see API > Router
  this.query // [Object] Route query string -- see API > Router
  this.name // [String] Page name (eg. 'index')
  this.manifest // [Object] Page manifest (config.page-name.yml)
  this.route // [String] Route name (eg. '$' or ':chapter/:page')
  this.hash // [String] Hash (eg. "#/book")
  this.parameterized // [Boolean] Page has Query String or
                    // is on a parameterized (non-default) route

  // There are also some globals you can use:
  quasar.current.page
  quasar.current.layout

  // ...
  // asynchronous operations
  // ...

  done({ // Vue instance
    template: html,
    ...
  });
};
```

### Tips

1. When exporting a function, make sure the callback is called, otherwise the Page will never finish loading.

2. Include other JS files for modularity by *require()*-ing them. Take full advantage of Webpack.
Read more about the [Build System](/guide/quasar-build-system.html) and [Require API](/api/js-require-script-or-css.html#Require-a-Script-file) to understand.

3. Make sure you use `require('raw!.....')` syntax for the template so that it will get bundled automatically into your JS file with the help of the Build System. This saves one precious HTTP request. **Do not require the template within a function (if you use one) because Webpack won't know it needs to be handled at compile time**. So require it outside of any function to avoid issues.

  ``` js
  // do
  var html = require('raw!./some.html'); // <<<
  module.exports = function(done) {
    done({
      template: html // <<<
    });
  };

  // DON'T!!!
  module.exports = function(done) {
    done({
      template: require('raw!./some.html') // <<<
    });
  };
  ```

4. Make good use of the Vue component lifecycle methods (`created`, `beforeCompile`, `compiled`, `ready`, `beforeDestroy`, `destroyed`) and different props:

  ![Vue Lifecycle Diagram](/images/vue-lifecycle.png "Vue Lifecycle Diagram")

  ``` js
  // Example making use of Vue component lifecycle methods

  var html = require('raw!./view.page-name.html');

  module.exports = { // Vue instance
    template: html,
    beforeCompile: function() {
      // Before template compiling
      // ...
    },
    ready: function() {
      // Template has been rendered into view
      // ...
    }
  };
  ```

5. Make sure you sanitize intervals, timeouts, requestAnimationFrames or anything else at `beforeDestroy` or `destroy` point, otherwise you may end up with bugs when user switches to another Page or Layout.

  ``` js
  // Sanitization example within Page

  var html = require('raw!./view.page-name.html');

  module.exports = {
    template: html,
    ready: function() {
      this.timeout = setInterval(function() {
        // do something;
      });
    },
    destroy: function() {
      clearInterval(this.timeout);
    }
  };
  ```

  > **IMPORTANT**
  > Sanitization is essential otherwise unforeseen effects may occur leading to hard to track bugs.

6. Example for when you want a certain Page (with Layout specified) functionality to be available only while that Page is currently being displayed. Note that it makes sense to do this effort only if Page has a Layout, otherwise a sanitization described above will suffice.

  ``` js
  var html = require('raw!./view.page-name.html');

  module.exports = {
    template: html,
    ready: function() {
      // First let's register this Page's name
      // ... or you can hard-code it and skip this
      this.pageName = quasar.current.page.name;

      // Remember reference to the function
      // so we can unregister it later on "destroy"
      this.onPageActive = function(page) {
        // if Page to be displayed is this one:
        if (page.name === this.pageName) {
          this.timeout = setInterval(function() {
            // do something;
          });
        }
        // User navigated to another Page
        // So we do the cleanup:
        else if (this.timeout) {
          clearInterval(this.timeout);
        }
      }.bind(this);

      // Whenever this Page is being displayed:
      quasar.events.on('app:page:ready', this.onPageActive);
    },
    destroy: function() {
      // Unregister the event
      quasar.events.off('app:page:ready', this.onPageActive);

      // Do required cleanup
      if (this.timeout) {
        clearInterval(this.timeout);
      }
    }
  };
  ```

7. Read about how to communicate between Layouts and Pages [here](/guide/vue-model-communication.html). It's important to know how to share VueModel data between the two.

8. Page component (with a Layout specified) once loaded it will live in memory and DOM as long as the user does not navigates away to a Page with other or no Layout. This means amongst other things that it will maintain its VueModel state and scrolling position.

9. You can use parameterized routes for your Page (eg. `#/library/:book/:chapter`). Read [Parameterized Page Routes](/guide/parameterized-page-routes.html) to see how it's done.

### Global Page Variables

Global variables are available for you to use to access pages:

| Global Variable | Description |
| --- | --- |
| `quasar.current.page` | Access current page's properties, like `name`, `hash`, `manifest`, `pageContainer` (jQuery Node), `scrollContainer` (jQuery Node), `vm` (current page's VueModel Object - good place to change VM's reactive data). |
| `quasar.data.manifest.pages` | Manifest of all pages registered in your App |

## Page Manifest
Provide page specific configuration (in YAML format), called *Manifest* in `/pages/*page-name*/config.*page-name*.yml`.

Example:

``` yaml
label: 'Control Panel'
icon: 'dashboard'
layout: 'main'
routes:
  - '$'
  - ':book/:chapter'
navigation:
  group: 'typography'
  order: 3
  hide: 'icon'
```

Let's look at all properties:

| Property | Optional | Description |
| --- | --- | --- |
| `label` | | Text to display on navigation links (drawer or layout navigational tabs). |
| `icon` | | Icon to display on navigation links (drawer or layout navigational tabs); see [Icons](/api/css-icons.html) |
| `layout` | Yes | Specify which layout does the page belongs to, if any. |
| `navigation` | Yes | Help layout tabs determine when and how to display a link for this page. See sub-properties below. |
| `css` | Yes | This property gets computed by default if the `.styl` file exists in the page folder (**so it is optional!**), but it can be overridden to point to other CSS files. The path must start with the folder where app root *index.html* file exists. |
| `routes` | Yes | Array of routes to be registered for the Page. Eg. for Page 'library', `$` means (default) route `#/library`, and `:book/:chapter` means `#/library/:book/:chapter`. Not specifying `routes` property is the same as `routes: ['$']`. |

Sub-properties for `navigation` object:

| Property | Description |
| --- | --- |
| `group` | Which group does the page belongs to. Only one group can be displayed at one time in the [Automatic Navigation Tabs](/components/layout-automatic-navigation-tabs.html). So you can have multiple pages but in the navigation tabs display them by groups. The group displayed when visiting a page is that page's group only.  |
| `order` | You can also change the order in which the groups' links are displayed. |
| `hide` | Possible values: `icon` or `label`. Hide one of the two when displaying link in navigation tabs. |

You can also specify your own properties. Any other property that you write in the page manifest will be accessible under `this.manifest` property in page methods, and under the global `quasar.data.manifest` object.

``` yaml
# config.book.yml

myprop: 'my-value'
```
``` js
// js/script.book.js

module.exports = function(done) {
  this.manifest.myprop // is 'my-value'

  done(...);
};
```

## Page Template
The Quasar App Page HTML represents a Vue instance template. Read more about the [Build System](/guide/quasar-build-system.html#HTML-Files) to understand.

Example:

``` html
<h1>Pagination</h1>
<p>Page: {{page}}</p>
<pagination :model.sync="page" :max="17"></pagination>
```

## Page CSS
Each page can use its own CSS. Notice that all CSS files have the *.styl* extension. This is because you can use Stylus (with NIB extension). Read more about the [Build System](/guide/quasar-build-system.html) to understand.

To better isolate scope of each Page CSS, the `style.*page-name*.styl` files have by default the following structure:

``` css
.page-X // where X is the name of the page
  //
```

Place all your Stylus code under `.page-*X*`.

## Page Assets
Place all your page assets (like images, fonts, ...) inside the `/pages/*page-name*/assets/` folder.
Images get optimized by default on a production build.

## Page Events
Loading a Page is a complex procedure involving requiring its script file, preparing script file (including resolving dependencies) and rendering it. You can hook into these procedures by making good use of the Events API. See [Quasar Events List](/api/js-events-list.html#Page-Events) and [Event API](/api/js-events.html).
