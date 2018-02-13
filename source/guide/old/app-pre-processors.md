title: App Pre-Processors
---
The boilerplate created with Quasar CLI has pre-configured CSS extraction for most popular CSS pre-processors including LESS, SASS, Stylus, and PostCSS. To use a pre-processor, all you need to do is installing the appropriate webpack loader for it. For example, to use SASS:

``` bash
$ npm install sass-loader node-sass --save-dev
```
Note you also need to install node-sass because sass-loader depends on it as a peer dependency.

## Installing CSS related loaders
By default, if you will use LESS, SASS/SCSS you only need to install the loader. If however you want another CSS preprocessor, install the loader then edit `build/css-utils.js` by adding an entry to `styleLoaders` besides the standard following ones:
``` js
{
  css: generateLoaders(['css']),
  less: generateLoaders(['css', 'less']),
  sass: generateLoaders(['css', 'sass?indentedSyntax']),
  scss: generateLoaders(['css', 'sass']),
  styl: generateLoaders(['css', 'stylus']),
  stylus: generateLoaders(['css', 'stylus'])
}
```

## Installing non-CSS related loaders:

After installing your loaders, make sure you edit `build/webpack.base.config.js` and add entries to `module/rules` for each new loader. Example of a loader:

``` js
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: projectRoot,
  exclude: /node_modules/
},
```

## Using Pre-Processors inside Components

Once installed, you can use the pre-processors inside your `*.vue` components using the lang attribute on `<style>` tags:

``` html
<style lang="scss">
/* write SASS! */
</style>
```

### A note on SASS syntax

* lang="scss" corresponds to the CSS-superset syntax (with curly braces and semicolons).
* lang="sass" corresponds to the indentation-based syntax.

## PostCSS

Styles in `*.vue` files (and all other style files) are piped through PostCSS by default, so you don't need to use a specific loader for it.

By default, PostCSS is configured to use Autoprefixer.

## A note on Coffeescript
If you are using Coffeescript then you need to EITHER disable ESLint OR tell ESLint which Vue components are using Coffeescript. 

### To disable ESLint

Open up `/build/webpack.base.conf.js` and remove the following section from `module/rules`:

``` js
{ // eslint
  enforce: 'pre',
  test: /\.(vue|js)$/,
  loader: 'eslint-loader',
  include: projectRoot,
  exclude: /node_modules/
}
```

### To tell ESLint which Vue components are using Coffeescript

Note that `vue-loader` uses `lang="coffee"` to identify components which are using Coffeescript, but `lang="coffee"` is not recognizable for ESLint. Fortunately, ESLint (following traditional HTML) uses `type="xxx"` to identify the type of scripts. As long as a `<script>` tag has any `type` other than `javascript`, ESLint would mark the script as non-javascript, and skips linting it. Coffeescript's convention is to use `type="text/coffeescript"` to identify itself. Therefore, in your Vue components which are using Coffeescript, using both `lang` and `type` to avoid ESLint:

```html
<template>
  ...
</template>
<script lang="coffee" type="text/coffeescript">
  ...
</script>
```

## Standalone CSS Files

To ensure consistent extraction and processing it is recommended that you import global, standalone style files from your root component, for example:

``` html
<style src="./styles/global.less" lang="less"></style>
```

Note you should probably only do this for the styles written by yourself for your application. For existing libraries e.g. Bootstrap or Semantic UI, you can place them inside `src/statics/` and reference them directly in index.html. This avoids extra build time and also is better for browser caching. (See [Handling Static Assets](/guide/app-handling-static-assets.html)).
