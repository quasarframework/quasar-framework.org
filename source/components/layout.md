title: Layout
---
Layouts are the elements that wrap page content, like a navigational bar or drawer. Multiple pages can share the same Layout, so the code is reusable, which is one of their key points.
<input type="hidden" data-fullpage-demo="layout-demo/play-with-layout">

**Quasar Layouts are NOT mandatory**, but they do help you better structure your website/app. They have a number of features which offer you major benefits in simplifying your app's layout design, right out of the box.

## Installation
Edit `/quasar.conf.js` to embed the components (only add what you need from below):
```js
framework: {
  components: [
    'QLayout',
    'QPageContainer',
    'QPage',
    'QLayoutHeader',
    'QLayoutFooter',
    'QLayoutDrawer',
    'QPageSticky'
  ]
}
```

## Basic Usage
Below is a scaffolding of a Layout so you can understand the structure. We'll discuss about properties later
```html
<!-- main wrapping component -->
<q-layout>

  <!-- optional -->
  <q-layout-header>
    <!-- content; any -->
  </q-layout-header>

  <!-- optional -->
  <q-layout-drawer side="left">
    <!-- content; any -->
  </q-layout-drawer>

  <!-- optional -->
  <q-layout-drawer side="right">
    <!-- content; any -->
  </q-layout-drawer>

  <!-- REQUIRED -->
  <q-page-container>

    <!--
      Here it's where Vue Router injects children
      Page components.

      <router-view/> tag below can be replaced by an
      actual page content should you wish to do so.
    -->
    <router-view />
    <!--
      First child of QPageContainer must be a QPage,
      so make sure that your layout route children components
      encapsulate a QPage.
    -->

  </q-page-container>

  <!-- optional -->
  <q-layout-footer>
    <!-- content; any -->
  </q-layout-footer>
</q-layout>
```

Below is another example of a Layout, which contains some useful elements:
- a [QToolbar](/components/toolbar.html) (used for both header and footer, you can specify as many as you want)
- a navigation with [QTabs](/components/tabs.html)
- a left side drawer panel (which is shown alongside page content on wide screens)
- and a right side drawer panel

``` html
<q-layout view="hHr LpR lFf">
  <!-- Header -->
  <q-layout-header>
    <!-- First row of header is a QToolbar -->
    <q-toolbar>
      <!-- showLeft is a model attached to left side drawer below -->
      <q-btn
        flat round dense
        @click="showLeft = !showLeft"
        icon="menu"
      />

      <q-toolbar-title>
        Layout Header
        <span slot="subtitle">Optional subtitle</span>
      </q-toolbar-title>

      <!-- showRight is a model attached to right side drawer below -->
      <q-btn
        flat round dense
        @click="showRight = !showRight"
        icon="menu"
      />
    </q-toolbar>

    <!-- Second row of header is a QTabs -->
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
    </q-tabs>
  </q-layout-header>

  <!-- Left Side Drawer -->
  <q-layout-drawer side="left" v-model="showLeft">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
      <q-item to="/forum">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item to="/chat">
        <q-item-side icon="chat" />
        <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
      </q-item>
      <q-item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
  </q-layout-drawer>

  <!-- Right Side Panel -->
  <q-layout-drawer side="right" v-model="showRight">
    Right Side of Layout
  </q-layout-drawer>

  <!-- sub-routes get injected here: -->
  <q-page-container>
    <router-view />
  </q-page-container>

  <!-- Footer -->
  <q-layout-footer>
    <q-toolbar-title>
      Layout Footer
    </q-toolbar-title>
  </q-layout-footer>
</q-layout>
```

You can also use [QScrollArea](/components/scroll-area.html) for the left or right sides of the layout, if you want to control the scrollbar (but it's not mandatory):
```html
<!-- notice style tag -->
<q-layout-drawer side="left">
  <q-scroll-area class="fit">
    <q-item to="/test-layout/toolbar">Toolbar</q-item>
    <q-item to="/test-layout/tabs">Tabs</q-item>
    <q-item to="/test-layout/drawer">Drawer</q-item>
  </q-scroll-area>
</q-layout-drawer>
```

## Tips to Understanding QLayout

### Routing
If your layout uses Vue Router sub-routes (recommended), then it makes sense to use Vue's `<router-view />` component, which is just a placeholder where sub-routes are injected.

### Toolbar Placement
A great place to use the [Toolbars](/components/toolbar.html) component is within the QLayoutHeader and QLayoutFooter.
  ```html
  <q-layout-header>
    <q-toolbar color="green">
      ... toolbar content ...
    </q-toolbar>
  </q-layout-header>
  ```
### Search example
Below is an example of placing a [Search](/components/search.html) bar in the header:
```html
<q-layout>
  ...
  <!-- We place it on header -->
  <q-layout-header>
    <q-toolbar color="primary">
      <q-search inverted v-model="search" color="none" />
    </q-toolbar>
  </q-layout-header>
  ...
</q-layout>
```

### Fixed Positioning & FABs
Also, read about the smart [Page Sticky](/components/page-sticky.html) which helps you fix position DOM elements or components on a Layout page and learn how you can use it to also place a [Floating Action Button](/components/floating-action-button.html).

## QLayout Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `view` | String | Configuration string which defines how different parts of the layout get displayed on screen. |

### Configuring the "view" prop
Quasar introduces a unique and excellent layout concept, which allows you to easily structure layouts to work in certain ways, by simply changing a short string notation.

To explain how this works, imagine your Layout is a 3x3 matrix of containers. The first row of containers would be the header and the last row would be the footer. The first column of containers would be the "left" and last column would be the "right". The center of the matrix, below the header and above the footer, would be the page or main content container.

Now think about this. This matrix of containers or "QLayout View" can be represented by a string. This string contains only 11 characters:

- 3 defining the header row
- then a space
- 3 defining the middle row
- a space
- then 3 defining the footer

The picture below offers a visual representation of the QLayout View, to help you understand how to configure its 3x3 matrix.

![Layout "view" prop](/images/layout-view-prop.svg "Layout 'view' prop")

The letters shown above are also case sensitive. For example, using at least one "L" (uppercase character instead of lowercase) will make your layout left side (drawer) be in a fixed position. Same applies for "H" (header), "F" (footer) and finally "R" (right side / drawer).

For example, if you want your layout's right side / drawer to be placed on the right of the header, page and footer, you'd use `hhr lpr ffr`. If you'd like to also make it fixed, just transform one `r` character to uppercase, like this: `hhR lpr ffr`, or `hhr lpR ffr` or `hhr lpr ffR`.

These settings are completely up to you to use as you'd like. You could even go wild with a setup like this: `Lhh lpR ffr`. Try it out! Make sure you also go to the desktop view, to see it work properly.

> **NOTE**
>It is important that you specify all sections of a layout, even if you don't use them. For example, even if you don't use footer or right side drawer, specify them within your layout's `view` prop.

## QLayout Vue Events

| Event Name | Description |
| --- | --- |
| `@resize` | Event emitted on window resize. |
| `@scroll` | Event emitted on page scroll. |
| `@scrollHeight` | Event emitted on page scroll height change. |

# Caveats

## Using *margin* will break the layout

QLayout depends on taking the whole screen. So you **cannot** use *margins* as a style neither on QLayout itself nor on 
any of the slots (e.g. *header*, *footer* , ...). Instead, use *padding*.

```
   <!-- Use padding instead of margin! -->
   <q-layout :header-style="{'padding-top': '50px'}>
      <div slot="header"></div>
   </q-layout>
```
