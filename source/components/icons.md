title: Icons
---

The Quasar Icon component allows you to easily insert icons within other components or any other area of your pages, as you'd like.
Quasar currently supports: [Material Icons](https://material.io/icons/) out of the box, but you can add [Material Design Icons (mdi)](https://materialdesignicons.com/), [Font Awesome](http://fontawesome.io/icons/), [Ionicons](http://ionicons.com/) and [IcoMoon](https://icomoon.io/). Learn how to include the last three (which are optional) by reading on.

Importing the required font icons is required in order to make them work. Read [Importing Icons](#Importing-Icons) section for more details.

Please [submit a request](https://github.com/quasarframework/quasar/issues/new) if your favorite font icon is not listed here.

## Basic Usage
Let's take a look at how we can use QIcon component. (Do not forget to check down below how to [import the icons](#Importing-Icons), otherwise they won't show up!)

```html
<!-- Material icons have no prefix -->
<q-icon name="thumb_up" />

<!-- Material Design Icons (mdi) have "mdi-" prefix -->
<q-icon name="mdi-bell" />

<!-- Ionicons have "ion-" prefix -->
<q-icon name="ion-heart" />

<!-- Fontawesome icons have "fa-" prefix -->
<q-icon name="fa-id-card" />

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

There are cases where you want to differentiate icons displayed based on the Quasar theme you are using, so you can use `mat` and `ios` props. This is practical for cross-platform application development where you use different themes for each platform.
```html
<q-icon mat="settings" ios="ion-ios-gear-outline" />
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
| `ios` | String | The name of the icon to be used for Quasar iOS theme only. |
| `mat` | String | The name of the icon to be used for Quasar Material theme only. |
| `color` | String | One color from the Quasar Color Palette. |
| `size` | String | Example: '12px', '3.2rem', '14pt'. |

> **Note**
> If you add the `name` prop, it overrides the `ios` and `mat` props.

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

## Importing Icons
The only required icon font is "Material Icons" one. The other (Material Design Icons (mdi), Fontawesome or Ionicons) are optional. In order for you to be able to use them, you have two options: either use [quasar-extras](https://github.com/quasarframework/quasar-extras) npm package, or add the appropriate CDN (Content Delivery Network) links in `<head>` of your index.html.

If you are building a website only, then CDN approach can be an option you can follow. However, when building a mobile or Electron app, you will most likely do not want to depend on an Internet connection, so it's best that you import directly from `quasar-extras`.

> **IMPORTANT**
> Due to the license of IcoMoon and its custom build option, this icon font is not provided by `quasar-extras`. You will need to use [their website](https://icomoon.io/app/#/select) to create your custom icon font files and then copy them to your app's folder and import them (`src/main.js` would probably be a good place).

### Importing from "quasar-extras"

```js
/*
  File: main.js
  Remember only material-icons is required,
  unless you use CDN to link to it.
 */
import 'quasar-extras/material-icons'
import 'quasar-extras/material-design-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
```

### Including from CDN
If you want to make use of CDNs (Content Delivery Network), all you need is to include style tags in your `index.html` which point to the CDN URL.

The example link tag below would include Font Awesome v4.7.0 icons. Do a Google search for CDNs to make sure you include the latest version. Following are just examples.

```html
<!-- in `index.html` -->

<head>
  ...

  <!-- CDN example for Material Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  >

  <!-- CDN example for Material Design Icons (mdi) -->
  <link
    rel="stylesheet"
    href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css"
  >

  <!-- CDN example for Fontawesome -->
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  >

  <!-- CDN example for Ioniocns -->
  <link
    rel="stylesheet"
    href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  >
</head>
```

## More Examples

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
