title: Layout
---
Layouts are the elements that wrap page content, like navigational bar or drawer. Multiple pages can share the same Layout, which is one of the main reason for their existence.

Quasar Layouts are not mandatory, but help you better structure the layout of your website/app and they have a lot of features that you can benefit out of the box.

<input type="hidden" data-fullpage-demo="layout">

## Basic Usage
An example of Layout, containing all possible elements: [QToolbar](/components/toolbar.html) (used on header and footer), navigational [QTabs](/components/tabs.html), a drawer on the left side (which is shown alongside page content on wide screens) and a drawer on the right side:

``` html
<q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
  <!-- Header -->
  <q-toolbar slot="header">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Layout Header
      <span slot="subtitle">Optional subtitle</span>
    </q-toolbar-title>
    <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="menu" />
    </q-btn>
  </q-toolbar>

  <!-- Navigation -->
  <q-tabs slot="navigation">
    <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
    <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
    <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
    <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
  </q-tabs>

  <!-- Left Side Panel -->
  <div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item>
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
      <q-item>
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item>
        <q-item-side icon="chat" />
        <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
      </q-item>
      <q-item>
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
  </div>

  <!-- Right Side Panel -->
  <div slot="right">
    Right Side of Layout
  </div>

  <!-- sub-routes get injected here: -->
  <router-view />

  <!-- Footer -->
  <q-toolbar slot="footer">
    <q-toolbar-title>
      Layout Footer
    </q-toolbar-title>
  </q-toolbar>
</q-layout>
```

You can also use [QScrollArea](/components/scroll-area.html) for the left or right side of layout if you want to control the scrollbar:
```html
<q-scroll-area
  slot="left"
  style="width: 100%; height: 100%;"
>
  <q-side-link item to="/test-layout/toolbar">Toolbar</q-side-link>
  <q-side-link item to="/test-layout/tabs">Tabs</q-side-link>
  <q-side-link item to="/test-layout/drawer">Drawer</q-side-link>
</q-scroll-area>
```

## Understanding QLayout

1. If your layout uses Vue Router sub-routes (recommended), then it makes sense to use Vue's `<router-view>` component, which is just a placeholder where sub-routes are injected.

2. QLayout uses the following Vue slots: `header`, `footer`, `navigation`, `left` and `right`. You can specify your content for these slots with the `slot` HTML attribute: `slot="footer"`.
  ``` html
  <q-layout>
    ...
    <div slot="footer">
      ...Your Content...
    </div>
    ...
  </q-layout>
  ```

  Note that you can use define multiple headers, footers and navigation elements. Specify `slot="header"` or `slot="footer"` on multiple elements if you need. The order in which you specify these DOM elements / components matters.

  The `navigation` slot will be placed after header and before page view (but part of header) on Material Design theme, and after page view and before footer (but part of footer) on iOS theme.

3. A great place to use [Toolbars](/components/toolbar.html) is for header and footer slots.
  ```html
  <q-toolbar slot="header" color="green">
    ... toolbar content ...
  </q-toolbar>
  ```

4. Best way to use the navigation slot (placed right below header on Material theme and right above footer on iOS theme) is to place some [QTabs](/components/tabs.html) configured to use routes. Those routes can be sub-routes of the route being used for the layout.

5. Read about the smart [Fixed Positioning on Layout](/components/fixed-positioning-on-layout.html) and learn how you can use it for also placing a [Floating Action Button](/components/floating-action-button.html) on your Layout.

6. Example of placing a [Search](/components/search.html) bar on header:
  ```html
  <q-layout>
    ...
    <!-- We place it on header, so slot="header" -->
    <q-toolbar slot="header" color="primary">
      <q-search inverted v-model="search" color="none" />
    </q-toolbar>
    ...
  </q-layout>
  ```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `view` | String | Configuration String which defines how different parts of layout get displayed on screen. |
| `reveal` | Boolean | Makes header slide up out of view when scrolling page down and reappearing when scrolling up a bit. |
| `left-breakpoint` | Number | Breakpoint (in pixels, defining window width) at which point the left side will be placed directly on layout and won't act as a drawer anymore. Default is 996. |
| `right-breakpoint` | Number | Breakpoint (in pixels, defining window width) at which point the right side will be placed directly on layout and won't act as a drawer anymore. Default is 996. |
| `header-style` | Object | Style applied to header. |
| `header-class` | Object | CSS classes applied to header. |
| `left-style` | Object | Style applied to layout left side / drawer. |
| `left-class` | Object | CSS classes applied to layout left side / drawer. |
| `right-style` | Object | Style applied to layout right side / drawer. |
| `right-class` | Object | CSS classes applied to layout right side / drawer. |
| `page-style` | Object | Style applied to content/page (between header and footer). |
| `page-class` | Object | CSS classes applied to content/page (between header and footer). |
| `footer-style` | Object | Style applied to footer. |
| `footer-class` | Object | CSS classes applied to footer. |

### Styling
Use `*-style` and `*-class` properties (notice they need Objects) to style containers of the layout parts. For example, you can set background on left side / drawer like this:

```html
<q-layout
  :left-class="{'bg-primary': true}"
  ...
</q-layout>
```

The Vue Object notation for style and class attributes is mandatory.

### Configuring "view" prop
Imagine your Layout as a 3x3 matrix. First row would be header and last row would be footer, while first column would be "left" and last column would be "right". Center piece would be page.

QLayout `view` property is a String. It must contain 11 characters: 3 defining header, space, 3 defining middle row, space, and 3 defining footer. Take a look at the picture below to understand how you can configure it.

It matters if you use lowercase or uppercase. For example, using at least one "L" (uppercase character instead of lowercase) will make your layout left side (drawer) be fixed position. Same applies for "H" (header), "F" (footer) and finally "R" (right side / drawer).

![Layout "view" prop](/images/layout-view-prop.svg "Layout 'view' prop")

For example, if you want your layout right side / drawer to be placed on the right of header, page and footer, you'd use `hhr lpr ffr`. If you'd like to also make it fixed, just transform one `r` character to uppercase, like this: `hhR lpr ffr`, or `hhr lpR ffr` or `hhr lpr ffR`.

There's nothing stopping you from going wild with a setup like this: `Lhh lpR ffr`.

> **NOTES**
> <br>It is important that you specify all parts of a layout, even if you don't use some. For example, even if you don't use footer or right side drawer, specify them in your `view` prop.
> <br>If you also specify the `reveal` property, your header will be fixed, regardless of wether you've used an uppercase "h" in your `view` setup or not.

## Vue Methods

| Method | Description |
| --- | --- |
| `toggleLeft` | Toggle left side state (show / hide). |
| `showLeft` | Show left side. |
| `hideLeft` | Hide left side. |
| `toggleRight` | Toggle right side state (show / hide). |
| `showRight` | Show right side. |
| `hideRight` | Hide right side. |
| `hideCurrentSide` | Hide currently opened layout side (right or left). |

Example of placing a button on a toolbar in header which will toggle left side / drawer:

```html
<!--
  Notice we're using a Vue Reference
  ("ref") on QLayout
-->
<q-layout ref="layout">
  <q-toolbar slot="header" color="primary">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    ...
  </q-toolbar>
  ...
</q-layout>
```

There's also the possibility to use `v-model` to control left/right sides toggle:
```html
<template>
  <q-layout v-model="sides">
    <q-toolbar slot="header" color="primary">
      <q-btn flat @click="sides.left = !sides.left">
        <q-icon name="menu" />
      </q-btn>
      ...
    </q-toolbar>
    ...
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      sides: {
        // "false" means hidden
        // "true" means visible
        left: false,
        right: true
      }
    }
  }
}
</script>
```

## Vue Events

| Event Name | Description |
| --- | --- |
| `@resize` | Event emitted on window resize. |
| `@scroll` | Event emitted on page scroll. |
| `@left-breakpoint` | Event emitted when window width toggles above/below left side breakpoint (see `left-breakpoint` prop) |
| `@right-breakpoint` | Event emitted when window width toggles above/below right side breakpoint (see `right-breakpoint` prop) |
