title: Icons
---

The Quasar Icon component allows you to easily insert icons within other components or any other area of your pages, as you'd like.
Quasar currently supports: [Material Icons](https://material.io/icons/) out of the box, but you can add [Font Awesome](http://fontawesome.io/icons/) and [Ionicons](http://ionicons.com/). Learn how to include the last two by reading on.

<input type="hidden" data-fullpage-demo="components/button">

## Basic Usage

```html
<q-icon name="thumb_up" />

<!--
  or if you prefer the non self-closing version
  which allows to add a QPopover or QTooltip:
-->
<q-icon name="thumb_up">
  <q-tooltip>Some tooltip</q-tooltip>
</q-icon>
```

There are cases where you want to differentiate icons displayed based on the Quasar theme you are using, so you can use `mat` and `ios` props. This is practical for cross-platform application development.
```html
<q-icon mat="map" ios="place" />
```

### Size & Colors
All icons are font icons. This means that you can change size by manipulating `font-size` CSS property. And also, they inherit the current CSS `color` used.

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

## Including Fontawesome or Ionicons
Using Fontawesome or Ionicons (after including them in the build -- read below the example) simply requires you to use prefixes (`fa-` and `ion-`):
```html
<!-- Fontawesome -->
<q-icon name="fa-cloud" />

<!-- Ionicon -->
<q-icon name="fa-cloud" />
```

Material Icons are included by default. If you want to use [Font Awesome](http://fontawesome.io/icons/) or [Ionicons](http://ionicons.com/) you need to include them in the bundle. And there's two ways of doing that, based on what you are building with Quasar: only a website or a website/mobile app/electron app.

### Including from CDN
If you want to make use of CDNs (Content Delivery Network), all you need is to include style tags in your `index.html` which point to the CDN URL.

The example link tag below would include Font Awesome v4.7.0 icons. Do a Google search for CDNs to make sure you include the latest version.

```html
<!-- in `index.html` -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

> **NOTE**
> Including from CDN is highly not recommended when also building a mobile app or an Electron app, as your apps will depend on a network connection to fetch the font icons from Internet. This is why next section will teach you how to include them in your bundle.

### Directly Including in the Bundle
When building a mobile app or an Electron app, it's highly recommended that font icons be included in the bundle too, to avoid the need of an Internet connection to work.

In order to do this, you need to install some NPM packages (`font-awesome` and/or `ionicons`).

//
//
//
//
// TODO: write tutorial
//
//
//
//

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | String | The name of the icon to be used (for both Quasar themes). |
| `ios` | String | The name of the icon to be used for Quasar iOS theme only. |
| `mat` | String | The name of the icon to be used for Quasar Material theme only. |
| `color` | String | One color from the Quasar Color Palette. |


> **Note**
> If you add the `name` prop, it overrides the `ios` and `mat` props.

## More Examples

With `style` attribute:

```html
<q-icon name="thumb_up" style="font-size: 5rem;" />
```

With `class` attribute:

```html
<q-icon name="thumb_up" class="big-btn" />
```

**Note**
To create the necessary CSS class, you would need to define the class within your component's style section as below. Watch for CSS class clashes though.

```stylus
<style lang="stylus">
.big-btn
  font-size: 5rem
</style>
```
