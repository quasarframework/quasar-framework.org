title: Layout
---
Layouts are the elements that wrap page content, like a navigational bar or drawer. Multiple pages can share the same Layout, so the code is reusable, which is one of the main advantages of using them.

Quasar Layouts are not mandatory, but they do help you better structure your website/app. They have a number of features, which offer you major benefits in simplifying your app's layout design, right out of the box.

<input type="hidden" data-fullpage-demo="layout">

## Basic Usage
Below is an example of a Layout, which contains all possible elements:
- a [QToolbar](/components/toolbar.html) (used for both header and footer) 
- a navigation with [QTabs](/components/tabs.html) 
- a left side drawer (which is shown alongside page content on wide screens) 
- and a right side drawer

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
    <q-list no-border link inset-delimiter>
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

You can also use [QScrollArea](/components/scroll-area.html) for the left or right sides of the layout, if you want to control the scrollbar:
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

## Tips to Understanding QLayout
#### Routing
If your layout uses Vue Router sub-routes (recommended), then it makes sense to use Vue's `<router-view>` component, which is just a placeholder where sub-routes are injected.

#### Available Slots
QLayout uses the following Vue slots: `header`, `footer`, `navigation`, `left` and `right`. You can specify your content for these slots with the `slot` HTML attribute: `slot="footer"`.
  ``` html
  <q-layout>
    ...
    <div slot="footer">
      ...Your Content...
    </div>
    ...
  </q-layout>
  ```

You can also use multiple headers, footers and navigation elements. Specify `slot="header"` or `slot="footer"` on multiple elements, when the need arises. Please note though, the order in which you specify these DOM elements / components does matter.

#### The Navigation Slot and Positioning
The best way to use the navigation slot is to place some [QTabs](/components/tabs.html), configured to use routes, within it. Those routes can be sub-routes of the route being used for the layout.

>**Note**
>Depending on the theme used, the `navigation` slot will be placed in different places. With the Material Design theme, the `navigation` slot will be after header and before the page view (but part of header). With the iOS theme, the `navigation` slot will be added after page view and before the footer (but part of footer).

#### Toolbar Placement
A great place to use the [Toolbars](/components/toolbar.html) component is within the header and footer slots.
  ```html
  <q-toolbar slot="header" color="green">
    ... toolbar content ...
  </q-toolbar>
  ```
#### Search example
Below is an example of placing a [Search](/components/search.html) bar in the header:
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

Also, read about the smart [Fixed Positioning on Layout](/components/fixed-positioning-on-layout.html) and learn how you can use it to also place a [Floating Action Button](/components/floating-action-button.html) on your Layout.

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `view` | String | Configuration string which defines how different parts of  the layout get displayed on screen. |
| `reveal` | Boolean | Makes the header slide up out of view when scrolling page down and reappear, when scrolling up a bit. |
| `left-breakpoint` | Number | Breakpoint (in pixels, defining window width) at which point the left side will be placed directly over the layout and won't act as a drawer anymore. Default is 996. |
| `right-breakpoint` | Number | Breakpoint (in pixels, defining window width) at which point the right side will be placed directly over the layout and won't act as a drawer anymore. Default is 996. |
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
Use `*-style` and `*-class` properties (notice they need Objects) to style  the containers of the layout. For example, you can set background on left side / drawer like this:

```html
<q-layout
  :left-class="{'bg-primary': true}"
  ...
</q-layout>
```

The Vue Object notation for style and class attributes is mandatory.

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

### The "reveal" prop
You'll notice in playing with the view configuration, if you set the header to "hhh" (all small letters), the header will be set to a static position at the top of the page. This in turn means, the header will move off the screen as the user scrolls down the page. If the user then needs to use the navigation in the header, she must scroll completely up the page to get to it and this is bad UX. 

One way to help the user, is to add a [back-to-top button](components/back-to-top.html) on the page. 

Another way is to use the `reveal` prop. 

The `reveal` prop overrides "H", by fixing the header to the top of the screen. As the user scrolls down more than 100 pixels, the header rolls up it's own height above the top of the screen. As soon as the user scrolls back up (just 1 pixel), the header comes into view again immediately. 


## The Breakpoints

If you've played with the layout in desktop mode, you might notice how the left and right sides/ drawers magically hide, as you decrease the screen width. This is part of the smart responsiveness designed into Quasar's layout component. 

If you'd like to control how the left and right side /drawers work, you have two props called `left-breakpoint` and `right-breakpoint`. These values are the minimum size of the screen in pixels, before the left and right drawers are forced to float above the layout. This is a fantastic and important function in maximizing screen real estate, for smaller devices.

**Tip**
If you want to also be able to toggle the left drawer with larger screen sizes, use a large value for `left-breakpoint`, so that basically the left drawer is always stay a drawer on larger screens.

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

Example of placing a button on a toolbar in the header, which will toggle the left side / drawer:

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

There's also the possibility to use `v-model` to control the left/right sides toggling:
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
