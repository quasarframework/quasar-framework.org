title: App Folder Boilerplate
---
Quasar CLI helps you start an App folder with all the boilerplate necessary.
```
$ quasar init <folder name>
```

> The boilerplate created is a fork of the official Webpack + VueJs [one](https://github.com/vuejs-templates/webpack). So if you've worked with that one you will be totally familiar with Quasar's.

If you want to tweak things specific for your App, you first need to understand the created boilerplate's underlying tools being used.

The boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with **Webpack** and **vue-loader**. Make sure to also read [vue-loader's documentation](http://vue-loader.vuejs.org/index.html) for common workflow recipes.

## What's Included

While developing with Dev Server (`$ quasar dev`):
* Webbpack + vue-loader for single file Vue components
* State preserving hot-reload
* State preserving compilation error overlay
* Lint-on-save with ESLint
* Source maps

Developing for production (`$quasar build`):
* Javascript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2)
* HTML minified with [html-minifier](https://github.com/kangax/html-minifier)
* CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
* All static assets compiled with version hashes for efficient long-term caching, and a production index.html is auto-generated with proper URLs to these generated assets

Unit testing (`$ quasar test -u`):
* Supports ES2015 in test files
* Supports all webpack loaders
* Easy mock injection

End-to-end testing with [Nightwatch](http://nightwatchjs.org/) (`$ quasar test -e`):
* Run tests in multiple browsers in parallel
* Works with one command out of the box:
  * Selenium and chromedriver dependencies automatically handled
  * Automatically spawns the Selenium driver
