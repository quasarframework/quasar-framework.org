title: Quasar App Layouts
---

Layouts are the elements that wrap page content, like navigational bar or drawers. Multiple pages can share the same Layout, which is one of the main reason for their existence.

Because it's easier and it ensures you're using the Quasar standard, use [Quasar CLI](/guide/cli-commands.html#Layouts) to build a Layout.

Don't forget to read more about the [Build System](/guide/quasar-build-system.html) to understand how layouts are precompiled and bundled, what files are considered an entry-point and many more.

## Structure
Each layout has its own folder (`/src/layouts/<layout-name>`) and has the following structure:

| Asset | Optional | Description |
| --- | --- |
| /assets | Yes | Folder to place images, fonts, ... specific to the layout only |
| layout.**&lt;layout-name&gt;**.js | | Starting point of the Layout logic |
| layout.**&lt;layout-name&gt;**.yml | | YAML file with layout configuration (called *Manifest*) |
| layout.**&lt;layout-name&gt;**.html | | Template for your Layout |
| layout.**&lt;layout-name&gt;**.styl | Yes | Starting point of the Layout CSS |

> **NOTE**
> If you do not use the optional files or folder, delete them to get a boost in build times. This folder structure is created by [Quasar CLI](/guide/cli-commands.html#Create-Layout) so you don't have to manually do it.

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
   * Properties available:
   */
  this.name // [String] Layout name (eg. 'main')
  /*
   * 'this' also contains Layout manifest;
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

### Layout Resources Cleanup
Make sure you sanitize intervals, timeouts, requestAnimationFrames or anything else at `beforeDestroy` or `destroy` point, otherwise you may end up with bugs when user switches to another Layout.

``` js
// Sanitization example within Layout

var html = require('raw!./view.layout-name.html');

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
> Layout resources cleanup is essential otherwise unforeseen effects may occur leading to hard to track bugs.

### Communicating with Page
Read about how to communicate between Page and Layouts  [here](/guide/vue-model-communication.html). It's important to know how to share VueModel data between the two.

### Global Layout Variable
There is a global variable available for you to use called `quasar.current.layout` which holds properties like `name` and `vm` (current layout's VueModel Object - good place to change VM's reactive data).

## Layout Template
The Quasar App Layout HTML represents a Vue instance template. Read more about the [Build System](/guide/quasar-build-system.html#HTML-Files) to understand.

> **IMPORTANT**
> There are several Web Components that you can use. Some of them are mandatory. Read more about them and how to use them starting with [Components &gt; Layout Overview](/components/layout-overview.html) documentation page.

### $quasar variable
From within the template you can directly access `quasar` global. Example below:

``` html
<button @click="$quasar.navigate.to.route('#/book')">
  Go to library
</button>
```

So rather than injecting a method in your VueModel which handles the `quasar` global and then attaching the method to the button from your template, you can specify the `quasar` handling within your templates.

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
