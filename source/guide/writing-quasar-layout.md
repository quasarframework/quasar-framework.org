title: Writing a Quasar App Layout
---

Make sure you read and understand the [folder structure of a Quasar App](/guide/quasar-app-structure.html) first.
Read the [Layouts](/guide/quasar-app-structure.html#Layouts) section closely. Then use the [Quasar CLI](/guide/cli-commands.html#Layouts) to build a Layout.

Now let's dissect how Layouts work.

## Javascript
The starting point of a Quasar Layout is *layout.layout-name.js* file. Think of it as the Controller of a Layout.

It has a basic CommonJS structure that exports a Vue instantiation object or a function for doing asynchronous operations before calling a callback with a Vue instantiation object.

``` js
// Option 1. Supply Vue instantiation object

var html = require('raw!./layout.layout-name.html');

module.exports = { // Vue instance
  template: html,
  ...
};
```

``` js
// Option 2. Do some asynch ops first

var html = require('raw!./layout.layout-name.html');

module.exports = function(done) {
  /*
   * Properties available regarding the page
   * that gets loaded along this Layout
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

5. Make sure you sanitize intervals, timeouts, requestAnimationFrames or anything else at `beforeDestroy` point, otherwise you may end up with bugs when user switches to another Layout.

## HTML
The Quasar App Layout HTML representa a Vue instance template. Read more about the [Build System](/guide/quasar-build-system.html#HTML_Files) to understand.

There are several Web Components that you can use. Some of them are mandatory. A quick example:

``` html
<!-- layout.example.html -->

<quasar-layout shrink-header scroll-shadow> <!-- mandatory -->

  <quasar-header>
    <quasar-row>
      <quasar-button><quasar-icon menu></quasar-icon></quasar-button>
      <quasar-title>Text {{text}}</quasar-title>
      <quasar-button><quasar-icon alarm></quasar-icon></quasar-button>
      <quasar-button><quasar-icon more_vert></quasar-icon></quasar-button>
    </quasar-row>
    <quasar-navigation>
      <quasar-tab><quasar-icon tab></quasar-icon>Tab 1</quasar-tab>
      <quasar-tab><quasar-icon alarm></quasar-icon>Tab 2</quasar-tab>
      <quasar-tab><quasar-icon tab></quasar-icon>Tab 3</quasar-tab>
    </quasar-navigation>
  </quasar-header>

  <quasar-page></quasar-page> <!-- mandatory -->

  <quasar-footer>
    <quasar-row>
      <quasar-title>Quasar Rocks!</quasar-title>
    </quasar-row>
  </quasar-footer>

</quasar-layout>
```

Read more about the Components and how to use them in the [Web Components - Layout](/api/web-components-layout.html) section.

## Layout Events
See [Quasar Events List](/guide/quasar-events-list.html#Layout_Events).
