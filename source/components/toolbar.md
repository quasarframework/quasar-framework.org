title: Toolbar
---
A Quasar Layout can have headers and/or footers (also called "marginals") and this is a great place to use Toolbars, but note that you can also place Toolbars anywhere else you want. One QToolbar will represent a row in your marginals, usually used for navigation buttons and a title (but not limited to only this).
<input type="hidden" data-fullpage-demo="navigation/toolbar">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QToolbar',
    'QToolbarTitle'
  ]
}
```

## Basic Usage
``` html
<q-toolbar color="primary">
  <!--
    For Toolbar title, we use
    QToolbarTitle component
  -->
  <q-toolbar-title>
    Title
  </q-toolbar-title>

  <!--
    In a Toolbar, buttons are best
    configured as "flat, round, dense" and with an icon,
    but any button will do
  -->
  <q-btn flat round dense icon="mail" />
</q-toolbar>

<!-- A color "inverted" Toolbar -->
<q-toolbar color="primary" inverted>
  ...
</q-toolbar>

<!-- A color "inverted" Toolbar with custom text color -->
<q-toolbar color="amber" text-color="dark" inverted>
  ...
</q-toolbar>

<!-- A Toolbar with a title and subtitle -->
<q-toolbar color="primary" inverted>
  <q-toolbar-title>
    Title
    <span slot="subtitle">
      Subtitle
    </span>
  </q-toolbar-title>
</q-toolbar>

<!-- A Toolbar with light color and overriden text color -->
<q-toolbar color="amber" text-color="black">...</q-toolbar>

<!-- A Toolbar with transparent background and green text color -->
<q-toolbar color="transparent" text-color="green">...</q-toolbar>
```

Example on using a Toolbar on Layout header:

``` html
<q-layout>
  ...
  <q-layout-header>
    <q-toolbar color="secondary">
      <!--
        Toggles QLayout left side
        (Assuming the Drawer has a model bound to "leftSide")
      -->
      <q-btn
        flat round dense
        icon="menu"
        @click="leftSide = !leftSide"
      />

      <q-toolbar-title>
        Title
      </q-toolbar-title>

      <q-btn flat round dense icon="mail" />
      <q-btn flat round dense icon="alarm" />
    </q-toolbar>
  </q-layout-header>
  ...
</q-layout>
```

## QToolbar Vue Props

| Property | Type | Description |
| --- | --- | --- |
| `color` | String | A color from [Quasar Color Palette](/components/color-palette.html) |
| `text-color` | String | One from Quasar Palette to override color of text |
| `inverted` | Boolean | Invert color: background becomes "white" while text has `color` |
| `glossy` | Boolean | Apply a glossy effect |
| `shrink` | Boolean | Check [Shrink section](#Shrink) |

## QToolbarTitle
QToolbarTitle is a component used to wrap the "title" of your Toolbar. It spreads horizontally to the full real estate space it can get. If not enough space to cover the full extent of the content then ending ellipsis are used.

```html
<!-- A Toolbar with a title and subtitle -->
<q-toolbar color="primary" inverted>
  ...
  <q-toolbar-title>
    Title
    <span slot="subtitle">
      Subtitle
    </span>
  </q-toolbar-title>
</q-toolbar>
```

### Shrink
By default, QToolbarTitle is set to grow to the available space. However, you can change that with the `shrink` Boolean prop:
```
<q-toolbar-title shrink>
  Title
</q-toolbar-title>
```
