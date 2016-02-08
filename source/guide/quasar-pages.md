title: Quasar App Pages
---

An App's central working point is the Pages it is composed of. It enables navigation between different corners of your App.

Because it's easier and it ensures you're using the Quasar standard, use [Quasar CLI](/guide/cli-commands.html#Pages) to build a Page.

Don't forget to read more about the [Build System](/guide/quasar-build-system.html) to understand how pages are precompiled and bundled, what files are considered an entry-point and many more.

Let's dissect how Pages work.

## Structure
Each page has its own folder (`/src/pages/<page-name>`) and has the structure below:

| Asset | Description |
| --- | --- |
| /assets | Folder to place images, fonts, ... specific to the page only |
| /script.**&lt;page-name&gt;**.js | JS entry point for the page |
| /config.**&lt;page-name&gt;**.yml | YAML file with page configuration (called *Manifest*) |
| /view.**&lt;page-name&gt;**.html | *(optional)* HTML template for the page |
| /style.**&lt;page-name&gt;**.styl | *(optional)* CSS entry point for the page |

## Javascript
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

1. When exporting a function, make sure the callback is called, otherwise the Page will never load.

2. Include other JS files for modularity by *require()*-ing them. Take full advantage of Webpack.
Read more about the [Build System](/guide/quasar-build-system.html) to understand.

3. Make sure you use `require('raw!.....')` syntax for the template so that it will get bundled automatically into your JS file with the help of the Build System. This saves one precious HTTP request. **Do not require the template within the exporting function (if you use one) because Webpack won't know it needs to be handled at compile time**. So require it outside to avoid issues.

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

5. Make sure you sanitize intervals, timeouts, requestAnimationFrames or anything else at `beforeDestroy` point, otherwise you may end up with bugs when user switches to another Page.

## Page Manifest
Provide page specific configuration (in YAML format), called *Manifest* in `/pages/*page-name*/config.*page-name*.yml`.

### CSS Property
This property gets computed by default if the `.styl` file exists in the page folder (**so it is optional!**), but it can be overridden to point to other files. The path must start with the folder where app root *index.html* file exists.
``` yaml
css: 'path/to/css'
```

### Page Routes Property
One more important property is `hashes`, which is an array of hashes for the respective page. Example:
``` yaml
# config.book.yml

hashes:
  - '$' # registers #/book route (because 'book' is the name of the page)
  - ':chapter/:page' # adds this.params.chapter & this.params.page to page's main script when using a function
```
So now if we navigate to route *#/book/thinking/20*, we'll trigger *book* page:
``` js
// js/script.book.js

module.exports = function(done) {
  this.params.chapter // is (String) 'thinking'
  this.params.page // is (String) '20'

  done(...);
};
```

### Your Own Properties
Any other property that you write in the page manifest will be accessible under `this.manifest` property in page methods, and under the global `quasar.data.manifest` object.

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

## Page Events
See [Quasar Events List](/guide/quasar-events-list.html#Page_Events).

## HTML
The Quasar App Page HTML represents a Vue instance template. Read more about the [Build System](/guide/quasar-build-system.html#HTML_Files) to understand.


## CSS
Each page can use its own CSS. When switching to another page, the specific CSS is removed.

Notice that all CSS files have the *.styl* extension. This is because you can use Stylus (with NIB extension). Read more about the [Build System](/guide/quasar-build-system.html) to understand.

## Assets
Place all your page assets (like images, fonts, ...) inside the `/pages/*page-name*/assets/` folder.
Images get optimized by default on a production build.
