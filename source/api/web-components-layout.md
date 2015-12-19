title: Quasar Layout Web Components
---

Layout example with all components available to get a feel of how to use them:

``` html
<!-- layout.example.html -->

<quasar-layout shrink-header scroll-shadow> <!-- mandatory -->

  <quasar-header>
    <quasar-row>
      <quasar-button><quasar-icon menu></quasar-icon></quasar-button>
      <quasar-title>Text {{text}}</quasar-title>
      <quasar-button><quasar-icon alarm></quasar-icon></quasar-button>
      <quasar-button><quasar-icon more_vert></quasar-icon></quasar-button>
    </quasar-row>
    <quasar-navigation>
      <quasar-tab><quasar-icon tab></quasar-icon>Tab 1</quasar-tab>
      <quasar-tab><quasar-icon alarm></quasar-icon>Tab 2</quasar-tab>
      <quasar-tab><quasar-icon tab></quasar-icon>Tab 3</quasar-tab>
    </quasar-navigation>
  </quasar-header>

  <quasar-page></quasar-page> <!-- mandatory -->

  <quasar-footer>
    <quasar-row>
      <quasar-title>Quasar Rocks!</quasar-title>
    </quasar-row>
  </quasar-footer>

</quasar-layout>
```

Let's take each Web Component one by one. Make sure you close the opening tag.

### quasar-layout
Wraps the layout and is a mandatory tag for a Quasar Layout. There are a few behaviors that can be used (see them below). Use empty attributes on the quasar-layout tag.

1. `scroll-shadow` - When user scrolls the page a shadow appears on the top navigation bar.
2. `keep-marginals` - Keep top navigation bar and footer visible at all times regardless of page scroll position.
3. `shrink-header` - When user scrolls the page only the top row remains visible and all subsequent rows get hidden.
4. `retract-header` - When user scrolls the page down the top navigation bar gets hidden. When scrolling up it slowly gets visible again regardless of page scroll position.

Example:
``` html
<quasar-layout retract-header scroll-shadow>
  ...
</quasar-layout>
```

### quasar-page
Wraps the page content and is a mandatory tag for a Quasar Layout.

### quasar-header
Wraps the top navigation bar.

### quasar-row
Wraps a header or footer row.

### quasar-title
Wraps the main row item that grows horizontally to the available real estate.

### quasar-footer
Wraps the footer. Use rows as for the header.

### quasar-navigation
Wraps the navigational tabs. Do not wrap in a `quasar-row`.

### quasar-tab
Wraps a tab for the navigational row. It automatically switches between two states, depending on the screen real estate available (screen width):

1. **Scrollable** - left and right arrow buttons appear when necessary to scroll between tabs; user can also use touch gestures to scroll left-right.
2. **Non-scrollable** - each tab occupies the same amount of space horizontally.
