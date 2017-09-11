title: Progressive Web Apps
---
If you'd like to build a [PWA](https://developers.google.com/web/progressive-web-apps/), then use Quasar CLI to generate the boilerplate from the [Quasar PWA Starter Kit](https://github.com/quasarframework/quasar-template-pwa):

``` bash
# create starter boilerplate folder;
# "pwa" is the name of the starter kit
$ quasar init pwa <folder_name>

$ cd <folder_name>

# npm install deps
$ npm install
```

> **Important!**
> Do not use Quasar wrappers (Cordova/Electron) on top of this template.

Please note that this is a PWA starter kit, and not a wrapper. This means that you will have to use this boilerplate from the beginning and cannot use src code of a quasar app you already built in the past. In case you want to use previously written Quasar-app code, you will have to manually migrate your source code and you will not be able to wrap your app with Cordova or Electron anymore.

## What's Included

* Service Worker precaching of application shell + static assets (prod)
* Script (async chunk) preloading using `<link rel="preload">`
* Web Application Manifest + favicons
* Mobile-friendly meta-viewport
* Lighthouse score of 90+/100

- `$ quasar dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `$ quasar build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
  - Generates a Service Worker for offline caching your static assets using [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)
  
Please note that the lighthouse audit score of your PWA should be performed on the built version of your app, not on the dev server. This means that you should `quasar build` and `quasar serve` on the root folder of your app, then open the served url inside Google Chrome and perform the lighthouse audit.

Lighthouse audits can be done from the 'audit' tab in your chrome dev tools. In case there is no 'audit' tab you can install lighthouse as a chrome extention.
