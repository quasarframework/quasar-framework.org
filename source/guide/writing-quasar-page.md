title: Writing a Quasar App Page
---
Make sure you read and understand the [folder structure of a Quasar App](/guide/quasar-app-structure.html) first. Read the [Pages](/guide/quasar-app-structure.html#Pages) section closely.

Then use the [Quasar CLI](/guide/cli-commands.html#Pages) to build a page.

Also don't forget to read more about the [Build Process](/guide/quasar-build-process.html) to understand how pages are precompiled and bundled, what files are considered an entry-point and many more.

Let's dissect how pages work.

## Javascript
The starting point of a Quasar Page is *js/script.page-name.js* file. Think of it as the Controller part of a page.
``` js
/*
 * Use for Async operations (like Ajax requests) before displaying page
 */
module.exports.prepare = function() {
  /*
   * Properties available:
   */
  this.params // [Object] Route parameters -- see API > Router
  this.query // [Object] Route query string -- see API > Router
  this.name // [String] Page name (eg. 'index')
  this.manifest // [Object] Page manifest (config.page-name.yml)
  this.route // [String] Route name (eg. '$' or ':chapter/:page')

  /* When async operations are done, call this: */
  this.done(/* [Anything] */data);
};

 /*
  * Compute Vue scope
  */
 module.exports.scope = function() {
   /*
    * Common properties available:
    */
   this.params // [Object] Route parameters -- see API > Router
   this.query // [Object] Route query string -- see API > Router
   this.name // [String] Page name (eg. 'index')
   this.manifest // [Object] Page manifest (config.page-name.yml)
   this.route // [String] Route name (eg. '$' or ':chapter/:page')

   /*
    * Specific properties available:
    */
   this.data // [Anything] Result from calling this.done() from prepare() from above

   /* Return what is going to become the Vue scope of the page */
   return {...};
 };

 /*
  * Finally everything is set to start page operations
  */
module.exports.start = function() {
  /*
   * Properties available:
   */
  this.params // [Object] Route parameters -- see API > Router
  this.query // [Object] Route query string -- see API > Router
  this.name // [String] Page name (eg. 'index')
  this.manifest // [Object] Page manifest (config.page-name.yml)
  this.route // [String] Route name (eg. '$' or ':chapter/:page')

  /*
   * Specific properties available:
   */
  this.data // [Anything] Result from calling this.done() from prepare() from above
  this.scope // [Object] Result from calling scope() from above
  this.vm // [Object, Vue instance] Vue-Model of page

  ...
};
```

> Include other JS files for modularity by *require()*-ing them. Take full advantage of Webpack.
> Read more about the [Build Process](/guide/quasar-build-process.html) to understand.

## Page Manifest
Provide page specific configuration (in YAML format), called *Manifest* in `/pages/*page-name*/config.*page-name*.yml`.

### HTML & CSS Properties
These get computed by default if CSS and HTML main page files exists, but they can be overridden to point to other files. The path must start with the folder where app root *index.html* file exists.
``` yaml
css: 'path/to/css'
html: 'path/to/html'
```

### Page Routes Properties
One more important property is `hashes`, which is an array of hashes for the respective page. Example:
``` yaml
# config.book.yml

hashes:
  - '$' # registers #/book route (because 'book' is the name of the page)
  - ':chapter/:page' # adds this.params.chapter & this.params.page from page methods
```
So now if we navigate to route *#/book/thinking/20*, we'll trigger *book* page:
``` js
// js/script.book.js

module.exports.start = function() {
  this.params.chapter // is (String) 'thinking'
  this.params.page // is (String) '20'
};
```

### Your Own Properties
Any other property that you write in the page manifest will be accessible under `this.manifest` property in page methods.
``` yaml
# config.book.yml

myprop: 'my-value'
```
``` js
// js/script.book.js

module.exports.start = function() {
  this.manifest.myprop // is 'my-value'
};
```

## Page Events
There are global events registered for each step of the way when a user navigates to a page. See [Quasar Events Global Emitter](/api/quasar-events.html#Global_Events_Emitter) if you haven't already.

| Event Name | Description |
| --- | --- |
| app:page:requiring | Triggered right before requiring page Javascript |
| app:page:preparing | Triggered before calling page - prepare() |
| app:page:scoping | Triggered before calling page - scope() |
| app:page:starting | Triggered before calling page - start() |
| app:page:ready | Triggered when page has fully loaded |

All these events are triggered regardless of the fact that the page script has the respective methods or not.

Usage example:
``` js
quasar.global.events.on('app:page:ready', function(props) {
  // props.params, props.query, props.name, props.manifest, props.route, ... available
});
```

## HTML
The Quasar App Pages' HTML is a Vue instance. Read more about the [Build Process](/guide/quasar-build-process.html#HTML_Files) to understand.


## CSS
Notice that all CSS files have the *.styl* extension. This is because you can use  Stylus (with NIB). Read more about the [Build Process](/guide/quasar-build-process.html) to understand.

## Assets
Place all your page assets (images, fonts, ...) inside the `/pages/*page-name*/assets/` folder.
