title: Toolbar
---
A Quasar Layout can have headers and/or footers (also called "marginals") and this is a great place to use Toolbars, but note that you can also place Toolbars anywhere else you want. One QToolbar will represent a row in your marginals, usually used for navigation buttons and a title (but not limited to only this).

<input type="hidden" data-fullpage-demo="layout/toolbar">

## Basic Usage
A Toolbar is defined by two Quasar components: **QToolbar** and optional **QToolbarTitle**.

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
    configured as "flat" and with an icon,
    but any button will do
  -->
  <q-btn flat>
    <q-icon name="mail" />
  </q-btn>

  <!--
    ...and also small flat round buttons
  -->
  <q-btn flat round small>
    <q-icon name="mail" />
  </q-btn>
</q-toolbar>

<!-- A color "inverted" Toolbar -->
<q-toolbar color="primary" inverted>
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
```

Example on using a Toolbar on Layout header:

``` html
<q-layout ref="layout">
  ...
  <q-toolbar slot="header" color="secondary">
    <!-- toggles QLayout left side -->
    <q-btn
      flat
      @click="$refs.layout.toggleLeft()"
    >
      <q-icon name="menu" />
    </q-btn>

    <q-toolbar-title>
      Title
    </q-toolbar-title>

    <q-btn flat>
      <q-icon name="mail" />
    </q-btn>
    <q-btn flat>
      <q-icon name="alarm" />
    </q-btn>
  </div>
  ...
</q-layout>
```

## QToolbar Vue Props

| Property | Type | Description |
| --- | --- | --- |
| `color` | String | A color from [Quasar Color Palette](/components/color-palette.html) |
| `inverted` | Boolean | Invert color: background becomes transparent while text has `color` |

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
