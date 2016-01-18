title: Quasar Layout Web Components
---

Layout example with all components available to get a feel of how to use them:

``` html
<!-- layout.example.html -->

<quasar-layout shrink-header scroll-shadow> <!-- ! MANDATORY ! -->

  <quasar-header> <!-- optional -->
    <quasar-row>
      <quasar-button class="quasar-drawer-toggle"><quasar-icon>menu</quasar-icon></quasar-button>
      <quasar-title>Text {{text}}</quasar-title>
      <quasar-button><quasar-icon>alarm</quasar-icon></quasar-button>
      <quasar-button><quasar-icon>more_vert</quasar-icon></quasar-button>
    </quasar-row>
    <quasar-navigation>
      <quasar-tab page="index"><quasar-icon>tab</quasar-icon>Page 1</quasar-tab>
      <quasar-tab page="second"><quasar-icon>alarm</quasar-icon>Page 2</quasar-tab>
      <quasar-tab page="third" route="#/third/route"><quasar-icon>tab</quasar-icon>Page 3</quasar-tab>
    </quasar-navigation>
  </quasar-header>

  <quasar-page></quasar-page> <!-- ! MANDATORY ! -->

  <quasar-drawer> <!-- optional -->
    <quasar-drawer-header>
      <div>
        <img src="http://semantic-ui.com/images/avatar/large/elliot.jpg" width="100px" height="100px" style="border-radius: 50px; margin-bottom: 20px">
      </div>
      <div><strong>Razvan Stoenescu</strong></div>
      <div>Quasar Framework rulz!</div>
    </quasar-drawer-header>

    <quasar-drawer-item>
      <quasar-icon>alarm</quasar-icon>
      Message
    </quasar-drawer-item>

    <quasar-drawer-divider></quasar-drawer-divider>
    <quasar-drawer-title>Subheader</quasar-drawer-title>

    <quasar-drawer-item>
      <quasar-icon>alert</quasar-icon>
      Second Message
    </quasar-drawer-item>

    <quasar-drawer-footer> <!-- optional -->
      <quasar-drawer-item>
        <quasar-icon>alert</quasar-icon>
        Second Message
      </quasar-drawer-item>
    </quasar-drawer-footer>
  </quasar-drawer>

  <quasar-footer> <!-- optional -->
    <quasar-row>
      <quasar-title>Quasar Rocks!</quasar-title>
    </quasar-row>
  </quasar-footer>

</quasar-layout>
```

Let's take each Web Component one by one. Make sure you close the opening tag.

### Wrapper
`quasar-layout` wraps the layout and is a mandatory tag for a Quasar Layout. There are a few behaviors that can be used (see them below). Use empty attributes on the quasar-layout tag.

1. `scroll-shadow` - When user scrolls the page a shadow appears on the top navigation bar.
2. `shadow` - Add shadow on the top navigation bar at all times.
3. `keep-marginals` - Keep top navigation bar and footer visible at all times regardless of page scroll position.
4. `shrink-header` - When user scrolls the page only the top row remains visible and all subsequent rows get hidden.
5. `retract-header` - When user scrolls the page down the top navigation bar gets hidden. When scrolling up it slowly gets visible again regardless of page scroll position.
6. `keep-header` - Keep top bar visible at all times regardless of page scroll position
7. `keep-footer` - Keep footer bar visible at all times regardless of page scroll position

Example:
``` html
<quasar-layout retract-header scroll-shadow>
  ...
</quasar-layout>
```

There's a difference between `keep-marginals` and `keep-header`/`keep-footer`/`retract-header`/`shrink-header` when using a Drawer component. `keep-marginals` will keep header and footer on the right side of the Drawer, while the other options will place the Drawer below/above header/footer. Experiment before choosing a layout to see what fits your needs.

### Page Wrapper
`quasar-page` wraps the page content and is a mandatory tag for a Quasar Layout.

### Marginals Components
* `quasar-header` wraps the top bar.
* `quasar-footer` wraps the bottom bar.
* `quasar-row` wraps a header or footer row.
* `quasar-title` wraps the main row item that grows horizontally to the available real estate.

### Marginals Navigation
`quasar-navigation` wraps the navigational tabs. Do not wrap in a `quasar-row`.

`quasar-tab` wraps a tab for the navigational row. It automatically switches between two states, depending on the screen real estate available (screen width):

1. **Scrollable** - left and right arrow buttons appear when necessary to scroll between tabs; user can also use touch gestures to scroll left-right.
2. **Non-scrollable** - each tab occupies the same amount of space horizontally.

There are two HTML attributes that will interest you:
1. [String] `page` - Tells to what page the user will navigate when the tab is clicked/tapped.
2. [String/Function] `route` (optional) - If you need the user to navigate to a specific route. You will also need `page` attribute if you want the tab to be selected automatically when user navigates to the respective page.

Example:
``` html
<quasar-navigation>
  <quasar-tab page="index"><quasar-icon>tab</quasar-icon>Page 1</quasar-tab>
  <quasar-tab page="second"><quasar-icon>alarm</quasar-icon>Page 2</quasar-tab>

  <!-- Specify 'route' when you want the user to navigate to a route with parameters -->
  <quasar-tab page="third" route="#/third/route">Page 3</quasar-tab>
  <!-- For function which return a route String, -->
  <!-- use dynamic property binding (: - semicolon): -->
  <quasar-tab page="third" :route="getRoute">Page 3</quasar-tab>
  <!-- 'getRoute' must be a method defined in your Layout Vue instance -->

  <!--
    When 'page' (and possibly 'route') attributes are missing,
    then the auto-select and click/tap event will need to be
    explicitly added by you;
    Useful when you want the Tab to be used in other ways that
    the ones designed for by default (navigating to a page).
  -->
  <quasar-tab>Page 4</quasar-tab>
</quasar-navigation>
```

### Drawer - Sidebar Menu
`quasar-drawer` adds a Drawer component which can be brought up from left by touch events. On screens larger than phones the drawer is displayed at all times on the left. See the example from the top of the page to learn what tags to use within it.

`quasar-drawer-item` adds a menu item. Use `route` HTML attribute so that Quasar will make the respective item redirect to a certain route.

In order to clearly divide different sections, use `quasar-drawer-divider` and `quasar-drawer-title`.

You can also use `quasar-drawer-header` and `quasar-drawer-footer`.

Full example:
``` html
<quasar-drawer> <!-- optional -->
  <quasar-drawer-header>
    <div>
      <img src="http://semantic-ui.com/images/avatar/large/elliot.jpg" width="100px" height="100px" style="border-radius: 50px; margin-bottom: 20px">
    </div>
    <div><strong>Razvan Stoenescu</strong></div>
    <div>Quasar Framework rulz!</div>
  </quasar-drawer-header>

  <quasar-drawer-item route="#/page_one">
    <quasar-icon>alarm</quasar-icon>
    Message
  </quasar-drawer-item>

  <quasar-drawer-divider></quasar-drawer-divider>
  <quasar-drawer-title>Subheader</quasar-drawer-title>

  <quasar-drawer-item route="#/page_two">
    <quasar-icon>alert</quasar-icon>
    Second Message
  </quasar-drawer-item>

  <!-- The following will be visible on the bottom of the Drawer at all times -->
  <quasar-drawer-footer> <!-- optional -->
    <quasar-drawer-item>
      <quasar-icon>alert</quasar-icon>
      Second Message
    </quasar-drawer-item>
  </quasar-drawer-footer>
</quasar-drawer>
```

Add CSS class `quasar-drawer-toggle` to any element for which you want the user to be able to toggle the Drawer when clicked.
