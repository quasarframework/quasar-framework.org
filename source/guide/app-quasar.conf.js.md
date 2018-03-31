title: Configuring quasar.conf.js
---
Quasar Starter Kit makes use of some awesome tools under the cover, like [Webpack](https://webpack.js.org/). Fortunately, the complexity of configuring the underlying tools is managed by Quasar CLI which does the heavy lifting for you. As a result, you don't even need to know Webpack in order to use Quasar.

So what can you configure through `/quasar.conf.js`?
* Quasar components, directives and plugins that you'll be using in your website/app.
* Default Quasar I18n language pack
* Icon pack(s) that you wish to use
* Default icon set for Quasar components
* Development server port, HTTPS mode, hostname and so on
* [CSS animations](/components/transition.html) that you wish to use
* [App Plugins](/guide/app-plugins.html) list (that determines order of execution too) -- which are files in `/src/plugins` that tell how your app is initialized before mounting the root Vue component
* Global CSS/Stylus/... files to be included in the bundle
* What should be added or removed from "vendor" chunk
* PWA [manifest](/guide/pwa-configuring-pwa.html)
* [Electron Packager](/guide/electron-configuring-electron.html)
* IE11+ support
* Extend Webpack config Object

**You'll notice that changing any of these settings does not require you to manually reload the dev server. Quasar detects if the changes can be injected through Hot Module Reload and in case it can't, it will reload the dev server for you. You won't lose your development flow as you will just sit back while Quasar CLI quickly takes care of it.**

> `/quasar.conf.js` is run by the Quasar CLI build system, so this code runs under Node directly, not in the context of your app. So you can require modules like 'fs', 'path', 'webpack' and so on. Make sure the ES6 features that you want to write this file with are supported by the installed version of your Node (which should be >= 8.9.0).

## Structure
You'll notice that `/quasar.conf.js` exports a function that takes a `ctx` (context) parameter and returns an Object. This allows you to dynamically change your website/app config based on this context:

```js
module.exports = function (ctx) {
  console.log(ctx)

  // Example output on console:
  {
    dev: true,
    prod: false,
    theme: { mat: true },
    themeName: 'mat',
    mode: { spa: true },
    modeName: 'spa',
    target: {},
    targetName: undefined,
    arch: {},
    archName: undefined,
    debug: undefined
  }

  // context gets generated based on the parameters
  // with which you run "quasar dev" or "quasar build"
}
```

What this means is that, as an example, you can load a font when building with Quasar Material theme, and pick another one for Quasar iOS theme.
```js
module.exports = function (ctx) {
  extras: [
    ctx.theme.mat
      ? 'roboto-font' // we're building with Material theme
      : null // we're not building with Material theme, so it's iOS theme
  ]
}
```

Or you can use a global CSS file for SPA mode and another one for Cordova mode while avoiding loading any such file for the other modes.
```js
module.exports = function (ctx) {
  css: [
    ctx.mode.spa ? 'app-spa.styl' : null, // looks for /src/css/app-spa.styl
    ctx.mode.cordova ? 'app-cordova.styl' : null  // looks for /src/css/app-cordova.styl
  ]
}
```

Or you can configure the dev server to run on port 8000 for SPA mode, on port 9000 for PWA mode or on port 9090 for the other modes:
```js
module.exports = function (ctx) {
  devServer: {
    port: ctx.mode.spa
      ? 8000
      : (ctx.mode.pwa ? 9000 : 9090)
  }
}
```

The possibilities are endless.

## Options to Configure
Let's take each option one by one:

| Property | Type | Description |
| --- | --- | --- |
| css | Array | Global CSS/Stylus/... files from `/src/css/`, except for theme files, which are included by default. Example: _['app.styl']_ (referring /src/css/app.styl) |
| extras | Array | What to import from [quasar-extras](https://github.com/quasarframework/quasar-extras) package. Example: _['material-icons', 'roboto-font', 'ionicons']_ |
| supportIE | Boolean | Add support for IE11+. |
| framework | Object/String | What Quasar components/directives/plugins to import, what Quasar I18n language pack to use, what icon set to use for Quasar components. Example: _{ components: ['QBtn', 'QIcon'], directives: ['TouchSwipe'], plugins: ['Notify'], iconSet: 'fontawesome', i18n: 'de' }_. Note that for iconSet to work, you also need to tell Quasar to embed that icon pack through `extras` prop. |
| animations | Object/String | What [CSS animations](http://localhost:4000/components/transition.html) to import. Example: _['bounceInLeft', 'bounceOutRight']_ |
| devServer | Object | Dev server [options](https://webpack.js.org/configuration/dev-server/). Some properties are overwritten based on the Quasar mode you're using in order to ensure a correct config. |
| build | Object | Build configuration options. See [section](#Build-Property) below. |
| cordova | Object | Cordova specific [config](/guide/cordova-configuring-cordova.html). |
| pwa | Object | PWA specific [config](/guide/pwa-configuring-pwa.html). |
| electron | Object | Electron specific [config](/guide/electron-configuring-electron.html). |

### DevServer Property
Take a look at the [full list](https://webpack.js.org/configuration/dev-server/) of options. Some are overwritten by Quasar CLI based on "quasar dev" parameters and Quasar mode in order to ensure that everything is setup correctly.

Most used properties are:

| Property | Type | Description |
| --- | --- | --- |
| port | Number | Port of dev server |
| host | String | Local IP/Host to use for dev server |
| open | Boolean | Open up browser pointing to dev server address automatically. Applies to SPA and PWA modes. |

### Build Property
| Property | Type | Description |
| --- | --- | --- |
| extendWebpack(cfg) | Function | [Extend Webpack config](#Extending-Webpack-Config-Object) generated by Quasar CLI. |
| publicPath | String | Public path of your app. By default, it uses the root. Use it when your public path is something else, like "&lt;protocol&gt;://&lt;domain&gt;/some/nested/folder" -- in this case, it means the distributables are in "some/nested/folder" on your webserver. |
| vueRouterMode | String | Sets [Vue Router mode](https://router.vuejs.org/en/essentials/history-mode.html): 'hash' or 'history'. Pick wisely. History mode requires configuration on your deployment web server too. |
| useNotifier | Boolean | Use native OS notification to tell dev/build outcome or when your code has linting issues while developing. Useful if you're not keeping an eye on the terminal console. Some OSes might not support this though. |
| htmlFilename | String | Default is 'index.html'. |
| productName | String | Default value is taken from package.json > productName field. |
| distDir | String | Folder where Quasar CLI should generate the distributables. Relative path to project root directory. Default is 'dist/{ctx.modeName}-{ctx.themeName}'. Applies to all Modes except for Cordova (which is forced to `src-cordova/www`). |
| devtool | String | Source map [strategy](https://webpack.js.org/configuration/devtool/) to use. |
| env | Object | Add properties to `process.env` that you can use in your website/app JS code. Each property needs to be JSON encoded. Example: { SOMETHING: JSON.stringify('someValue') }. |
| gzip | Boolean | Gzip the distributables. Useful when the web server with which you are serving the content does not have gzip. |
| scopeHoisting | Boolean | Default: `true`. Use Webpack scope hoisting for slightly better runtime performance. |
| analyze | Boolean/Object | Show analysis of build bundle with webpack-bundle-analyzer. If using as Object, it represents the webpack-bundle-analyzer config Object. |
| vueCompiler | Boolean | (Quasar v0.15.7+) Include vue runtime + compiler version, instead of default Vue runtime-only |

The following properties of `build` are automatically configured by Quasar CLI depending on dev/build commands and Quasar mode. But if you like to override some (make sure you know what you are doing), you can do so:

| Property | Type | Description |
| --- | --- | --- |
| extractCSS | Boolean | Extract CSS from Vue files |
| sourceMap | Boolean | Use source maps |
| minify | Boolean | Minify code (html, js, css) |
| webpackManifest | Boolean | Improves caching strategy. Use a webpack manifest file to avoid cache bust on vendor chunk changing hash on each build. |

If, for example, you run "quasar build --debug", sourceMap and extractCSS will be set to "true" regardless of what you configure.

### Example setting env for dev/build
```js
build: {
  env: ctx.dev
    ? { // so on dev we'll have
      API: JSON.stringify('https://dev.api.com')
    }
    : { // and on build (production):
      API: JSON.stringify('https://prod.api.com')
    }
}
```
Then in your website/app you can access `process.env.API` and it's gonna point to one of those two links above, based on dev or production build type.

You can even go one step further. Supply it with values taken from the `quasar dev/build` env variables:
```
# we set an env variable in terminal
$ MY_API=api.com quasar build

# then we pick it up in /quasar.conf.js
build: {
  env: ctx.dev
    ? { // so on dev we'll have
      API: JSON.stringify('https://dev.'+ process.env.MY_API)
    }
    : { // and on build (production):
      API: JSON.stringify('https://prod.'+ process.env.MY_API)
    }
}
```

### Extending Webpack Config Object
This is achieved through `build > extendWebpack()` Function. Example adding a Webpack loader.

```js
// quasar.conf.js

build: {
  extendWebpack (cfg) {
    // we make in-place changes
    cfg.modules.rules.push({
      test: /\.json$/,
      loader: 'json-loader'
    })

    // no need to return anything
  }
}
```

#### Adding you own alias to Webpack

To add you own alias you can extend the webpack config and merge it with the existing alias.
Use the `path.resolve` helper to resolve the path to your intended alias.

```js
// quasar.conf.js

build: {
  extendWebpack (cfg) {
   cfg.resolve.alias = {
    ...cfg.resolve.alias, // This adds the existing alias

    // Add you own alias like this
    myalias: path.resolve(__dirname, './src/somefolder'),
  }
}
```
