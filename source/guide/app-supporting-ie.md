title: Supporting IE
---
If you are building a website, you might want to support IE 11+. This support is not added by default to your website. Quasar CLI provides it on demand only.

## Installation of IE Support
In order to support IE, you'll need to edit `/quasar.conf.js`:
```js
module.exports = function (ctx) {
  return {
    supportIE: true,
    ....
  }
}
```

That's it. This will inject the Promise polyfill, along with some other smaller pollyfills, adding an extra ~6k worth of code (minified) to your bundle.

> **NOTE**
> Quasar CLI is smart enough to include the IE pollyfills only if it is really needed. An Electron app for example doesn't need it and as a result, even if you leave `supportIE` set to "true" in quasar.conf.js it won't be bundled.

> **WARNING**
> Running dev server on a Windows 7 machine and consuming the output in IE11 will result in an error (ansi-strip package related used by webpack-dev-server).
> This is only an issue during development, and if you run the dev server on a Linux, MAC, or Windows 10 machine you can consume it safely in IE11.
