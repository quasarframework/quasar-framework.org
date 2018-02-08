title: Browser Support
---

The Supported Browsers are:

- Chrome
- Firefox
- IE11+
- Edge
- Safari 9.1+
- Opera
- Android Browser 4.4+

# IE11/Edge Support

Adding support for IE11/Edge requires you to check `src/main.js` in your project folder for the code below (should be near the beginning of file):
``` js
// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)
```

Due to the fact that it adds about ~10KB (mainly due to Promise polyfill) to the bundle size (we care about bundle size!) and there are cases where you don't need it (like Cordova apps for iOS or Android), this is totally optional. Uncomment those two lines and that's everything you need to do.

# Vuex and Promise polyfill

If you are using Vuex in your project and you need to support browsers that require a Promise polyfill, you should additionally add the following line to `src/main.js` before importing your Vuex store:

``` js
import 'es6-promise/auto'
```
