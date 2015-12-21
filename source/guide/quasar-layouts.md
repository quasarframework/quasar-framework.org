title: Quasar App Layouts
---

Layouts are the elements that wrap page content, like navigational bar or sidebar. Multiple pages can share the same Layout, which is one of the main reason for their existence.

Because it's easier and it ensures you're using the Quasar standard, use [Quasar CLI](/guide/cli-commands.html#Layouts) to build a Layout.

Don't forget to read more about the [Build System](/guide/quasar-build-system.html) to understand how layouts are precompiled and bundled, what files are considered an entry-point and many more.

Now let's dissect how Layouts work.

## Structure
Each layout has its own folder (`/src/layouts/<layout-name>`) and has the following structure:

| Asset | Description |
| --- | --- |
| /assets | Folder to place images, fonts, ... specific to the layout only |
| layout.**&lt;layout-name&gt;**.js | Starting point of the Layout logic |
| layout.**&lt;layout-name&gt;**.yml | YAML file with layout configuration (called *Manifest*) |
| layout.**&lt;layout-name&gt;**.html | Template for your Layout |
| layout.**&lt;layout-name&gt;**.styl | *(optional)* Starting point of the Layout CSS |

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
   * 'this' contains Layout manifest;
   * for example if you have specific
   * CSS for the layout, then:
   * 'this.css' will contain the URL
   */

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

## CSS
Each layout can use its own CSS. When switching to another layout, the specific CSS is removed.

Notice that all CSS files have the *.styl* extension. This is because you can use Stylus (with NIB extension). Read more about the [Build System](/guide/quasar-build-system.html) to understand.

## Assets
Place all your page assets (like images) inside the `/layouts/*layout-name*/assets/` folder.
Images get optimized by default on a production build.

## Layout Events
See [Quasar Events List](/guide/quasar-events-list.html#Layout_Events).

## Layout Manifest
Provide layout specific configuration (in YAML format), called *Manifest* in `/layouts/*layout-name*/layout.*layout-name*.yml`.

### CSS Property
This property gets computed by default if the `.styl` file exists in the layout folder (**so it is optional!**), but it can be overridden to point to other files. The path must start with the folder where app root *index.html* file exists.
``` yaml
css: 'path/to/css'
```
