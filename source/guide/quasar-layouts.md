title: Quasar App Layouts
---

Layouts are the elements that wrap page content, like navigational bar or sidebar. Multiple pages can share the same Layout, which is one of the main reason for their existence.

Because it's easier and it ensures you're using the Quasar standard, use [Quasar CLI](/guide/cli-commands.html#Layouts) to build a Layout.

Don't forget to read more about the [Build System](/guide/quasar-build-system.html) to understand how layouts are precompiled and bundled, what files are considered an entry-point and many more.

## Structure
Each layout has its own folder (`/src/layouts/<layout-name>`) and has the following structure:

| Asset | Description |
| --- | --- |
| /assets | Folder to place images, fonts, ... specific to the layout only |
| layout.**&lt;layout-name&gt;**.js | Starting point of the Layout logic |
| layout.**&lt;layout-name&gt;**.yml | YAML file with layout configuration (called *Manifest*) |
| layout.**&lt;layout-name&gt;**.html | Template for your Layout |
| layout.**&lt;layout-name&gt;**.styl | *(optional)* Starting point of the Layout CSS |

## Layout Controller (Javascript)
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
// Option 2. Do some asynchronous operations first

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

  var html = require('raw!./layout.main.html');

  module.exports = {
    template: html,
    beforeCompile: ...,
    compiled: ...,
    destroyed: ...,
    ...
  };
  ```

5. Make sure you sanitize intervals, timeouts, requestAnimationFrames or anything else at `beforeDestroy` point, otherwise you may end up with bugs when user switches to another Layout.

### Global Layout Variables

Global variables are available for you to use to access layouts:

| Global Variable | Description |
| --- | --- |
| `quasar.current.layout` | Access current layout's properties: `name` and `vm` (current page's VueModel Object - good place to change VM's reactive data) |
| `quasar.layout[*layout-name*]` | Same properties as `quasar.current.layout` that refer to all layouts available on your App |

## Layout Template
The Quasar App Layout HTML represents a Vue instance template. Read more about the [Build System](/guide/quasar-build-system.html#HTML-Files) to understand.

There are several Web Components that you can use. Some of them are mandatory. A quick example:

``` html
<!-- layout.example.html -->

<screen>

  <screen-tabs slot="navigation"></screen-tabs>

  <div slot="header" class="row items-center">
    <button class="left-drawer-toggle"><i>menu</i></button>
    <p>Title</p>
    <div class="group">
      <button class="small" v-exit-app><i>power_settings_new</i></button>
      <button class="small right-drawer-toggle"><i>menu</i></button>
    </div>
  </div>

  <div slot="footer" class="row items-center">
    <p>Footer Title</p>
  </div>

  <drawer>
    <div class="list platform-delimiter">
      <div class="list-header">
        Menu
      </div>
      <drawer-link v-for="page in pages" :page="page"></drawer-link>
    </div>
  </drawer>

  <page class="smart-container"></page>

  <drawer right-side swipe-only>
    <div class="list platform-delimiter">
      <div class="list-header">
        Right Side
      </div>
      <drawer-link page="index"></drawer-link>
      <drawer-link page="typography"></drawer-link>
    </div>
  </drawer>

</screen>
```

Read more about the Components and how to use them in the [Web Components - Layout](/components/web-components-layout.html) section.

## Layout CSS
Each Layout can use its own CSS. Notice that all CSS files have the *.styl* extension. This is because you can use Stylus (with NIB extension). Read more about the [Build System](/guide/quasar-build-system.html) to understand.

To better isolate scope of each Layout CSS, the `layout.*layout-name*.styl` files have by default the following structure:

``` css
.layout-X // where X is the name of the layout
  //
```

Place all your Stylus code under `.layout-*X*`.

## Layout Assets
Place all your page assets (like images) inside the `/layouts/*layout-name*/assets/` folder.
Images get optimized by default on a production build.

## Layout Events
Loading a Layout is a complex procedure involving requiring its script file, preparing script file (including resolving dependencies) and rendering it. You can hook into these procedures by making good use of the Events API. See [Quasar Events List](/api/js-events-list.html#Layout-Events) and [Event API](/api/js-events.html).

## Layout Manifest
Provide layout specific configuration (in YAML format), called *Manifest* in `/layouts/*layout-name*/layout.*layout-name*.yml`.

Example of Layout Manifest property: `css`. This property gets computed by default if the `.styl` file exists in the layout folder (**so it is optional!**), but it can be overridden to point to other files. The path must start with the folder where app root *index.html* file exists.
``` yaml
css: 'path/to/css'
```
