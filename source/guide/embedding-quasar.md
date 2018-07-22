title: UMD Starter Kit - CDN install
---
If you want to embed Quasar into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version. The UMD starter kit will ask you some questions and will generate a simple HTML file that will show you how to use CDN to add Quasar:

```bash
$ vue init quasarframework/quasar-starter-kit-umd <folder_name>
```

And you're done. Inspect `index.html` file that was created in the new folder and learn how you can embed Quasar. Notice the `<style>` and `<script>` tags and their order.

Notice that as opposed to the Main Starter Kit, you don't need to import anything. All components, directives and Quasar plugins are ready to be used out of the box.

However, the disadvantage is that you won't benefit from the top notch development experience provided by Quasar CLI -- which allows you to simultaneously develop and build SPA, PWA, Mobile and Electron Apps.

### JsFiddle / Codepen
You can fork and use these links for reporting issues on Github too:

| | Material Theme | iOS Theme |
| --- | --- | --- |
| jsFiddle | https://jsfiddle.net/rstoenescu/waugrryy/ | https://jsfiddle.net/rstoenescu/7gu065yg/ |
| Codepen | https://codepen.io/rstoenescu/pen/KQRZJg | https://codepen.io/rstoenescu/pen/paVpBN |

These links (obviously) use the Quasar UMD version.

## Quasar Global Object
When you embed Quasar UMD into a webpage you'll get a `Quasar` global Object injected:

```js
Quasar = {
  version,
  theme: 'mat', // or 'ios', based on the theme you are using from CDN
                // -- must match both .js and .css CDN links to point to same theme
  plugins,
  utils,

  // if you want to extend Quasar's components or directives
  components,
  directives,

  // if you want to change current icon set or Quasar I18n language
  // (must include CDN links so they are available first!)
  i18n,
  icons
}
```

## Init Configuration
*Requires Quasar v0.17+*
There are some configuration options for Quasar & Quasar plugins. For the Quasar UMD version you can define the following before including the Quasar script tag:

```js
<script>
  // optional
  window.quasarConfig = {
    brand: { // this will NOT work on IE 11
      primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... } // settings for LoadingBar Quasar plugin
  }
</script>
```

## Usage
So, after you figured out the CDN links that you need to embed into your webpages (hopefully you've inspected the project folder created by UMD Starter Kit), now it's time to use Quasar.

> You'll notice that all the Quasar Components, Quasar Directives and Quasar Plugins have an installation section at the top of their pages. When using UMD, you can skip this section, as it is intended only for when your project is generated from the [Main Starter Kit](/app-installation.html).

By using the UMD version, you'll have all of the components, directives and Quasar plugins already installed for you. You just need to start using them.

**Do not use self-closing tags with the UMD version:**
You will notice that you won't be able to use the self-closing tag form of any of the components. You must close all components tags.

```html
<!-- In docs, but for Main Starter Kit usage -->
<q-btn label="My Button" />
<!-- ^^^ can't use it like this on UMD -->

<!-- Instead, include a self-closing tag too: -->
<q-btn label="My Button"></q-btn>
```

### Quasar Components
An example. No need to install any component in UMD version.

```html
<q-btn label="My Button"></q-btn>
```

### Quasar Directives
An example. No need to install any directives in UMD version.
```html
<div v-ripple>...</div>
```

### Quasar Plugins
An example. No need to install any plugins in UMD version.

```js
Quasar.plugins.actionSheet.create({...})
```

### Quasar Utils
An example.

```js
Quasar.utils.event.getEventKey(evt)
```

### Changing Quasar Icon Set
Assuming you have already included the CDN link to your favorite Quasar Icon Set (unless you're using Material Icons which is used by default), you can then tell Quasar to use it:

```js
Quasar.icons.set(Quasar.icons.fontawesome)
```

### Changing Quasar I18n Language
Assuming you have already included the CDN link to your desired Quasar I18n Language (unless you want "en-us" language pack which is used by default), you can then tell Quasar to use it:

```js
// example setting German language,
// using ISO 2 letter code:
Quasar.i18n.set(Quasar.i18n.de)

// example setting Portuguese (Brazil) language:
Quasar.i18n.set(Quasar.i18n.ptBr)
```

The list of available languages can be found on [Github](https://github.com/quasarframework/quasar/tree/dev/i18n). **If your desired language pack is not available yet, you can help by providing a PR. We welcome any languages!**
