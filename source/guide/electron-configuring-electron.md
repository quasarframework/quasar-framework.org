title: Configuring Electron
---
We'll be using Quasar CLI to develop and build an Electron App. The difference between building a SPA, PWA, Mobile App or an Electron App is simply determined by the "mode" parameter in "quasar dev" and "quasar build" commands.

But first, let's learn how we can configure the Electron build.

## Quasar.conf.js
You may notice that `/quasar.conf.js` contains a property called `electron`.
```js
electron: {
  // optional; webpack config Object for
  // the Main Process ONLY (/src-electron/main-process/)
  extendWebpack (cfg) {
    // directly change props of cfg;
    // no need to return anything
  },

  // electron-packager options
  packager: {
    //...
  },

  // optional; Electron Main Process dependencies
  dependencies: {
    // specify Electron Main Process dependencies
  }
}
```

The "packager" prop refers to [electron-packager options](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options). The `dir` and `out` properties are overwritten by Quasar CLI to ensure the best results.

When Electron App is built, all packages listed in project's package.json are included to be used by Electron Main Process. This might include unnecessary packages, which are only used by a renderer. To include Electron Main Process dependencies only, specify them in ["dependencies"](https://docs.npmjs.com/files/package.json#dependencies) prop.
