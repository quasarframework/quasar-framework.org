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
  this.route // [String] Route name (eg. '#/login' or '#/book/:chapter/:page')

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

3. Make sure you use `require('raw!.....')` syntax for the template so that it will get bundled automatically into your JS file with the help of the Build System. This saves one precious HTTP request. **Do not require the template within the exporting function (if you use one) because Webpack won't know it needs to be handled at compile time**. So require it outside to avoid issues.

  ``` js
  // do
  var html = require('raw!./some.html'); // <<<
  module.exports = function(done) {
    done({
      template: html // <<<
    });
  };

  // don't!
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
    beforeCompile: {
      // Before template compiling
      // ...
    },
    ready: {
      // Template has been rendered into view
      // ...
    }
  };
  ```

5. Make sure you sanitize intervals, timeouts, requestAnimationFrames or anything else at `beforeDestroy` point, otherwise you may end up with bugs when user switches to another Page or Layout.

### Global Page Variables

Global variables are available for you to use to access pages:

| Global Variable | Description |
| --- | --- |
| `quasar.current.page` | Access current page's properties, like `name`, `hash`, `manifest`, `pageContainer` (jQuery Node), `scrollContainer` (jQuery Node), `vm` (current page's VueModel Object - good place to change VM's reactive data) |
| `quasar.page[*page-name*]` | Same properties as `quasar.current.page` that refer to all pages available on your App |

## Page Manifest
Provide page specific configuration (in YAML format), called *Manifest* in `/pages/*page-name*/config.*page-name*.yml`.

Example:

``` yaml
label: 'Control Panel'
icon: 'dashboard'
layout: 'main'
navigation:
  group: 'typography'
  hide: 'icon'
```

Let's look at all properties:

| Property | Description |
| --- | --- |
| `label` | Text to display on navigation links (sidebar or layout tabs). |
| `icon` | Icon to display on navigation links (sidebar or layout tabs); see [Icons](/api/css-icons.html) |
| `layout` | Optional. Specify which layout does the page belongs to, if any. |
| `navigation` | Help layout tabs determine when and how to display a link for this page. See sub-properties below. |
| `css` | This property gets computed by default if the `.styl` file exists in the page folder (**so it is optional!**), but it can be overridden to point to other CSS files. The path must start with the folder where app root *index.html* file exists. |

Sub-properties for `navigation` object:

| Property | Description |
| --- | --- |
| `group` | Which group does the page belongs to. Only one group can be displayed at one time in the navigation tabs. So you can have multiple pages but in the navigation tabs display them by groups. The group displayed when visiting a page is that page's group only.  |
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
