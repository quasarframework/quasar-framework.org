title: Icons
---

The Quasar Icon component allows you to easily insert icons within other components or any other area of your pages, as you'd like.
Quasar currently supports: [Material Icons](https://material.io/icons/) , [Font Awesome](http://fontawesome.io/icons/), [Ionicons](http://ionicons.com/), [MDI](https://materialdesignicons.com/) and [IcoMoon](https://icomoon.io/).

Except for IcoMoon (which has a license), you can either choose to use only one of them or use multiple. Quasar just needs to know which icon set to use for its components.

We'll see how we can install an icon set in the following section.
Please [submit a request](https://github.com/quasarframework/quasar/issues/new) if your favorite font icon is not listed here.

## Installing

If you are building a website only, then using a CDN (Content Delivery Network) approach can be an option you can follow. However, when building a mobile or Electron app, you most likely do not want to depend on an Internet connection, so it's best that you follow the next steps.

> **IMPORTANT**
> Due to the license of IcoMoon and its custom build option, this icon font is not provided by out of the box. You will need to use [their website](https://icomoon.io/app/#/select) to create your custom icon font files and then copy them to your app's folder and import them in an app plugin (`$ quasar new plugin icomoon`).

### Adding an Icon Set
First step is to make an icon set available in your website/app. For this, edit `/quasar.conf.js`:

```js
extras: [
  'material-icons'
]
```

> Icon sets are available through [quasar-extras](https://github.com/quasarframework/quasar-extras) package. You don't need to import it in your app, just configure `/quasar.conf.js` as indicated.

Adding more than one set (showing all options):
```js
extras: [
  'material-icons',
  'mdi',
  'ionicons',
  'fontawesome'
]
```

### Quasar Using an Icon Set
Unless configured otherwise, Quasar uses Material Icons as its icon set for its components. You can however tell Quasar to use some other icon set, but be sure to include that set in your website/app (see step above: [Adding an Icon Set](#Adding-an-icon-set)).

So let's say we included Ionicons and we want Quasar to use it for its components. We edit `/quasar.conf.js` again:

```js
framework: {
  iconSet: 'ionicons'
}
```

### Full Example
Here is an example of including Ionicons & Fontawesome and telling Quasar to use Fontawesome for its components.

```js
extras: [
  'ionicons',
  'fontawesome'
],
framework: {
  iconSet: 'fontawesome'
}
```

This will enable you to use both Ionicons & Fontawesome in your app, and all Quasar components will display Fontawesome icons.

### Including from CDN
If you want to make use of CDNs (Content Delivery Network), all you need is to include style tags in your `index.template.html` which point to the CDN URL.

In case you follow this path, do not also add the icon sets that you want in `/quasar.conf.js > extras`. Simply edit `index.template.html` as follows.

The example link tag below would include Font Awesome v4.7.0 icons. Do a Google search for CDNs to make sure you include the latest version. Following are just examples.

```html
<!-- in `/src/index.template.html` -->

<head>
  ...

  <!-- CDN example for Material Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  >

  <!-- CDN example for Fontawesome 5.0.13 -->
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
    integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
    crossorigin="anonymous"
  >

  <!-- CDN example for Ionicons -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/ionicons@4.1.1/dist/css/ionicons.min.css"
  >
</head>
```

### Using Fontawesome-Pro
If you have a Fontawesome 5 Pro license and want to use it instead Fontawesome Free version. Following this instructions.

1. Open [Linked Accounts section](https://fontawesome.com/account/linked-accounts) in Fontawesome's user account page to grab npm TOKENID (login if necessary).
2. Create or append TOKENID into file .npmrc (file path same as package.json):
  ```
  @fortawesome:registry=https://npm.fontawesome.com/TOKENID
  ```
3. Install Fontawesome webfonts:
  ```bash
  $ yarn add @fortawesome/fontawesome-pro-webfonts
  # or:
  $ npm install @fortawesome/fontawesome-pro-webfonts
  ```
4. Create new App plugin:
  ```bash
  $ quasar new plugin fontawesome-pro
  ```
5. Edit `/quasar.conf.js`:
  ```js
  plugins: [
    ...
    'fontawesome-pro' // Add app plugin
  ],
  extras: [
    // 'fontawesome' // Disable free version!
  ],
  framework: {
    // if you want Quasar to use Fontawesome for its icons
    iconSet: 'fontawesome-pro' // requires Quasar v0.15.6+
  }
  ```
6. Edit `/src/plugins/fontawesome-pro.js`:
```js
import '@fortawesome/fontawesome-pro-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-pro-webfonts/css/fa-solid.css'
import '@fortawesome/fontawesome-pro-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-pro-webfonts/css/fa-light.css'
// do you want these too?
// import '@fortawesome/fontawesome-pro-webfonts/css/fa-brands.css'

export default () => {
  // Leave blank or make something cool.
}
```

## Basic Usage
Let's take a look at how we can use QIcon component. Do not forget to check above how to [Install Icon Sets](#Installing), otherwise they won't show up!

```html
<!-- Material icons have no prefix -->
<q-icon name="thumb_up" />

<!-- Ionicons have "ion-", "ion-logo", "ion-md-" or "ion-ios-" as prefix -->
<q-icon name="ion-heart" />

<!-- Fontawesome icons have "fa[s|r|l|b] fa-" prefix -->
<q-icon name="fas fa-id-card" />

<!-- MDI icons have "mdi-" prefix -->
<q-icon name="mdi-account-card-details" />

<!-- IcoMoon icons have "icon-" prefix -->
<q-icon name="icon-chrome" />

<!--
  or if you prefer the non self-closing tag version
  which allows to add a QPopover or QTooltip:
-->
<q-icon name="thumb_up">
  <q-tooltip>Some tooltip</q-tooltip>
</q-icon>
```

For "icon" properties on different Quasar components you won't have the means to specify an icon for each platform, but you can achieve the same effect with:

```html
<q-item-side
  :icon="$q.theme === 'mat' ? 'settings' : 'ion-ios-gear-outline'"
/>
```

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | String | The name of the icon to be used (for both Quasar themes). |
| `color` | String | One color from the Quasar Color Palette. |
| `size` | String | Example: '12px', '3.2rem', '14pt'. |


### Size & Colors
All icons are **font icons**. This means that you can change size by manipulating `font-size` CSS property. And also, they inherit the current CSS `color` used.

```html
<q-icon name="mail" style="font-size: 25px" />

<div style="color: #a2e2e3">
  ...
  <!-- inheriting color #a2e2e3: -->
  <q-icon name="alarm" />
</div>
```

Colors from the [Quasar Color Palette](/components/color-palette.html) can be specified in two ways:
```html
<q-icon name="mail" class="text-red" />
<!-- or by using `color` prop: -->
<q-icon name="alarm" color="red" />
<q-icon name="alarm" color="green-2" />
```

There's also a "size" property:
```html
<q-icon name="wifi" size="2rem" />
<q-icon name="delete" size="24px" />
```

### Cheatsheet

| Name | Prefix | Examples | Notes |
| --- | --- | --- | --- |
| material-icons | *None* | thumb_up | Notice the underline character instead of dash or space |
| ionicons | ion-, ion-md-, ion-ios-, ion-logo- | ion-heart, ion-logo-npm, ion-md-airplane | Use QIcon instead of `<ion-icon>` component; Logo icons require 'ion-logo-' prefix |
| fontawesome | fa[s,r,l,b] fa- | "fas fa-ambulance" | QIcon "name" property is same as "class" attribute value in Fontawesome docs examples (where they show `<i>` tags) |
| mdi | mdi- | mdi-alert-circle-outline | Notice the use of dash characters |

### More Examples

With HTML native `style` attribute:

```html
<q-icon name="thumb_up" style="font-size: 5rem;" />
```

With HTML native `class` attribute:

```html
<q-icon name="thumb_up" class="big-icon" />
```

**Note**
To create the necessary CSS class, you would need to define the class within your component's style section as below. Watch for CSS class clashes though.

```stylus
<style lang="stylus">
.big-icon
  font-size: 5rem
</style>
```

Adding a `click` event handle. Remember we want to capture a native DOM event and this is a Vue component, so we use the ['.native' modifier](https://vuejs.org/v2/guide/components.html#Binding-Native-Events-to-Components):
```html
<q-icon
  name="map"
  @click.native="handle"
/>
```
