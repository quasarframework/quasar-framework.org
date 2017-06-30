title: RTL Support (Experimental)
---

RTL (right to left) support is in its very early development stages, **so experimental, not fit for production yet**, with some bugs. Due to lack of time, we ask the community for help. Please contact us on forum/Gitter/email if you are interested in giving a helping hand.

## Enabling experimental RTL
To enable the currently **experimental RTL**, you need a small trivial change to `/src/main.js` regarding CSS imports/requires.

This is how default `src/main.js` top of file looks like:
```js
/*********************************************
 ** This is how src/main.js currently looks **
 ********************************************/

// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)
```

What you need to do is to comment out all these `require()` statements. Then, add this:
```js
require('quasar/dist/quasar.' + __THEME + '.rtl.css')

// If using IE11/Edge support, then also add this,
// otherwise ignore following line:
require('quasar/dist/quasar.ie.' + __THEME + '.rtl.css')
```

> **IMPORTANT**
> Do NOT simultaneously use default CSS requires/imports and the new lines.

Note that you currently can't use Quasar Stylus variables with the RTL functionality. This will be added as last step before RTL support will be production ready along with `rtl-css-loader` for Webpack.
