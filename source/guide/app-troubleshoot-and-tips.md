title: Troubleshoot
---

### Building App takes too long

At some point you might notice that the build takes an unusual long time to finish (if it even finishes). Due to how Webpack and its loaders work, this is a clear indication that **your HTML Vue templates have a syntax error somewhere**. Example: `<span<>`, where an extra character breaks HTML: `<`.

### Disabling Linters

It's highly **NOT recommended**, but here is how to do it: edit `/build/webpack.base.conf.js` and removing the lines below from `module/rules`:

``` js
{ // eslint
  enforce: 'pre',
  test: /\.(vue|js)$/,
  loader: 'eslint-loader',
  include: projectRoot,
  exclude: /node_modules/
}
```

### Remote Debugging Mobile Apps

Check the guide [here](/guide/cordova-wrapper.html#Remote-Debugging)

### White Screen on Electron

When using the development build it's easy to see what it is broken as you can use Chrome Development Tools. But when building for production, you have to deal with this differently. Check the guide [here](/guide/electron-wrapper.html#Debugging)

### Win10: Unexpected token import

When on **Windows 10 (the 64bits version)** you may get this error. This is due to NPM. You can fix it by installing and running `npm-windows-upgrade`:

``` bash
npm install -g npm-windows-upgrade
npm-windows-upgrade
```

### Disabling iOS rubber band effect

When building an iOS app with Cordova and you want to disable the rubber band effect (https://www.youtube.com/watch?v=UjuNGpU29Mk), add this to your `config.xml` from the `cordova` wrapper folder inside your project:

``` xml
<Preference name = "DisallowOverscroll" value = "true" />
```

### Configuring Momentjs Localization

In `src/main.js` file, add this:

``` js
import moment from 'moment'

// 'de' for German localization, as an example
moment.locale('de')
```

### Adding support for IE11
Webpack2 requires Promise polyfill which does not come out of the box with IE11+. As a result, npm install `es6-promise` and then at the top of your `src/main.js` add the following code:

``` js
require('es6-promise').polyfill()
```

Due to the fact that it adds about 6KB to the bundle size (and we care about bundle size!), this is not added for you by default in the boilerplating.
