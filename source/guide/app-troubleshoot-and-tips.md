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
