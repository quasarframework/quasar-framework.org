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

Please note that this is a Quasar starter kit and not a wrapper, it creates a new Quasar-app folder for you. In case you want to use your previously written Quasar-app code, you will have to manually migrate your code from the `src` folder. Also note, after doing so you will not be able to wrap your app with Cordova or Electron anymore.

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

## What is a Progressive Web App?

A Progressive Web App, from the [developers documentation on Google](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#what_is_a_progressive_web_app), can be defined as:

- **Progressive** - Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet.
- **Responsive** - Fits any form factor: desktop, mobile, tablet, or whatever is next.
- **Connectivity independent** - Enhanced with service workers to work offline or on low-quality networks.
- **App-like** - Feels like an app, because the app shell model separates the application functionality from application content .
- **Fresh** - Always up-to-date thanks to the service worker update process.
- **Safe** - Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.
- **Discoverable** - Is identifiable as an "application" thanks to W3C manifest and service worker registration scope, allowing search engines to find it.
- **Re-engageable** - Makes re-engagement easy through features like push notifications.
- **Installable** - Allows users to add apps they find most useful to their home screen without the hassle of an app store.
- **Linkable** - Easily share the application via URL, does not require complex installation.

Down below are some of the few key concepts you need to understand when working with the PWA starter kit:

## What is the app shell?

The app's shell is the minimal HTML, CSS, and JavaScript that is required to power the user interface of a progressive web app and is one of the components that ensures reliably good performance. Its first load should be extremely quick and immediately cached. "Cached" means that the shell files are loaded once over the network and then saved to the local device. Every subsequent time that the user opens the app, the shell files are loaded from the local device's cache, which results in blazing-fast startup times.

App shell architecture separates the core application infrastructure and UI from the data. All of the UI and infrastructure is cached locally using a service worker so that on subsequent loads, the Progressive Web App only needs to retrieve the necessary data, instead of having to load everything.

## What is a service worker

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync. In the future, service workers will support other things like periodic sync or geofencing. The core feature discussed in this tutorial is the ability to intercept and handle network requests, including programmatically managing a cache of responses.

The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over the experience.

More on service workers can be read [here](https://developers.google.com/web/fundamentals/primers/service-workers/) at the developers documentation on Google.

## The app manifest

The web app manifest is a simple JSON file that gives you, the developer, the ability to control how your app appears to the user in the areas that they would expect to see apps (for example the mobile home screen), direct what the user can launch and more importantly how they can launch it.

Using the web app manifest, your web app can:

- Have a rich presence on the user's Android home screen
- Be launched in full-screen mode on Android with no URL bar
- Control the screen orientation for optimal viewing
- Define a "splash screen" launch experience and theme color for the site
- Track whether you're launched from the home screen or URL bar

You can find the app manifest in the PWA starter kit at `/src/statics/manifest.json`. Please personalise this file to your app.
