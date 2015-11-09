title: Quasar Require
---

This feature is used to dynamically include `.js` files or inject `.css` ones.

## Require a Script file
You can require a CommonJS compliant .js file directly from your application. Subsequent require() calls within the files are going to also be fetched. Besides being able to use synchronous require() calls within the browser, you can also require scripts from your node_modules/ folder.

Features that you can take advantage of:
* Synchronous `require()` in modules, but without making synchronous Ajax calls nor freezing the browser.
* `exports` and `module.exports` objects just work.
* Works with NPM; you can include files directly from your node_modules/ folder. Just make sure that the included libraries work well with the browser.
* `require()` paths are relative to the folder of each script in place. No need to write all paths using the same base.
* Debugging works really well as required files appear in the Scripts section, each separately, with their real name not a hash or VM string.
* Dependencies are loaded as well. Circular dependencies are not a problem as they are handled correctly.
* There's no need for a build step of your scripts.
* Required modules are cached. Subsequent calls are resolved instantly.

### Usage
In your modules you can use the `require()` function, `exports` and `module.exports` objects as you would in NodeJS.

There are multiple ways to include a script file through `quasar.require.script()`, depending on your style. The syntax is:

``` js
// Using Callback Fn
quasar.require.script(
  {String} path | {Function} fn,
  {Function} callback(err, exports)
);

// Using Promises
quasar.require.script({String} path | {Function} fn)
  .fail(function(err) {
    // we failed...
  })
  .done(function(exports) {
    // we succeeded!
  });
```

#### Specifying Path
``` js
// Requiring "module-file.js"
quasar.require.script("./module-file"), function (err, exports) {
    if (err) {
        // an error was encountered while loading the script file

        // HTTP code returned
        console.log(err.status);

        // Message returned
        console.log(err.statusText);

        return;
    }

    // use the exports object as needed
    exports.method();
});
```

#### Specifying Factory Function
``` js
<script>
// Requiring "./hello world.js"
quasar.require.script(function(require, module, exports) {
    var script = require("./hello-world");

    console.log(exports.hello('World!'));
}, function (err, exports) {
    if (err) {
        console.error(err.statusText);
        return;
    }

    console.log(exports.hello);
});
</script>
```

> **NOTE**
> The first parameter of the Factory function **must** be named exactly `require`, otherwise no file is going to get fetched.

### Managing Cache
By default, all modules that are loaded are cached. If at some point you want to clear out the cache, proceed as follows:
``` js
quasar.clear.require.cache();
```

### Limitations

* If you load from `node_modules/` folder, specify full path to the entry point file; Quasar will not read the module's `package.json` file, and so the "main" property is ignored. Modules inside packages must be requested by their full path, e.g. `var _ = require("underscore/underscore");`
* When using the Factory function, the first formal parameter must be exactly `require` and nothing else, otherwise no files are going to get fetched.
* No cross-domain paths can be used when within a browser. Cross-domain paths work only when app is packaged with Cordova.

## Injecting CSS

Injecting CSS means inserting a stylesheet DOM element which makes the browser request your `.css` file.

List of features:
* You have two methods of injecting CSS: globally and per-page. When using "per-page" option and navigating to another page, the injected CSS will be removed. Globally injected will not get removed when navigating away.
* CSS is cached, so subsequent calls to the same resource are resolved without fetching file again.
* Ability to remove global or per-page injected CSS at command.

### Usage
``` js
// Injecting globally
quasar.inject.global.css(URL);

// Injecting per-page
quasar.inject.page.css(URL);
```

Removing injected CSS:
``` js
// Removing globally injected CSS
quasar.clear.global.css();

// Removing page injected CSS
quasar.clear.page.css();
```
