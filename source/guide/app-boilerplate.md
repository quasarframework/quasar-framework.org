title: App Folder Boilerplate
---
The Quasar CLI helps you start an App folder with all the necessary boilerplate that you will need to get started building your application. To begin, there is a simple command:
```
$ quasar init <starter_kit> <folder name>
```

To list all available starter kit names, type:
```
$ quasar list
```

> The created boilerplates are a fork of the [official Webpack + VueJs](https://github.com/vuejs-templates/webpack) repo. So, if you've worked with Vue's CLI, Quasar's CLI should seem quite familiar to you.

If you want to tweak things specific for your App, you first need to understand the underlying tools being used in the generated boilerplate.

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
* All static assets are compiled with version hashes for efficient long-term caching, and a production index.html is auto-generated with proper URLs to these generated assets.
