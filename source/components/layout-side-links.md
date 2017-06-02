title: Layout Side Links
---
QLayout's two areas on left and right of window (possibly acting like a Drawer if configured so) tamper with window history in order for the "back" button to close them instead of navigating one page back.  When clicking on a route link, one would need to figure out if QLayout sides are opened and close them, before finally navigating the respective route. This can become a burden in complex templates, so this is where **QSideLink component** comes into play. It does the heavy-lifting and figures out all necessary details and navigates to a route safely without breaking window history.

QSideLink is basically a wrapper over Vue's `<router-link>` component (read about it [here](http://router.vuejs.org/en/api/router-link.html)), so it inherits all its properties. Furthermore, when on target route, it adds `router-link-active` CSS class to the element.

> If you are upgrading from older Quasar versions then you should know that this component replaces QDrawerLink.

## Basic Usage
> It's important to note that you need to use QSideLink only within "left" or "right" QLayout slots, otherwise it makes no sense, as this component handles navigation from left and right sides of a QLayout only.

```html
<!--
  The example below creates a <div> containing the
  text "Go To Route" which when clicked/tapped it
  makes your website/app navigate to the route
  "/some/route"
-->
<q-side-link to="/some/route">Go to Route</q-side-link>
```

```html
<!--
  The example below creates a <div> with List Item
  classes so it acts as a menu item on a QLayout left/right side.
-->
<q-side-link
  class="item link"
  to="/some/other/route"
  exact
>
  Go to some other Route
</q-side-link>
```

## Vue Properties
As QSideLink is a wrapper over Vue's RouterLink, it inherits its properties and behavior. For a much more detailed use of these properties, please refer to [RouterLink's documentation](http://router.vuejs.org/en/api/router-link.html).

| Property | Type | Description |
| --- | --- | --- | --- |
| `to` | String / Object | Route to navigate to |
| `exact` | Boolean | Match the exact route specified (and not also its children) when adding `router-link-active` CSS class. |
| `append` | Boolean | Append route definition to current route when navigating. |
| `replace` | Boolean | Replaces current route with the new one instead of adding it to the window history queue. |

## Creating QLayout Side Menus

```html
<!-- Example using a QLayout as required -->
<q-layout ref="layout" view="hHr LpR Fff">
  <!-- Layout header -->
  <q-toolbar slot="header">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <div class="q-toolbar-title">
      Quasar Layout
    </div>
  </q-toolbar>

  <!--
    Defining left side of QLayout.
    Notice slot="left"
  -->
  <div slot="left">
    <q-side-link class="item link" to="/test-layout/about">About</q-side-link>
    <q-side-link class="item link" to="/test-layout/toolbar">Toolbar</q-side-link>
    <q-side-link class="item link" to="/test-layout/tabs">Tabs</q-side-link>
    <q-side-link class="item link" to="/test-layout/drawer">Drawer</q-side-link>
  </div>

  <!-- Page insertion point -->
  <router-view></router-view>
</q-layout>
```

An even more compelling example with a complex menu on multiple levels.
```html
<q-layout ref="layout" view="hHr LpR Fff">
  <div slot="left">
    <q-side-link class="item link" icon="content_paste" to="/app" exact>
      Dashboard
    </q-side-link>

    <q-side-link class="item link" icon="assignment" to="/app/registrations">
      Registrations
    </q-side-link>

    <!--
      Notice "indent" Boolean property on QCollapsible
      which will make the sub-menu be indented.
      Also, notice the "label" property which defines the
      name of the menu item which opens up the sub-menu.
    -->
    <q-collapsible indent icon="event" label="Event" opened>
      <q-side-link class="item link" to="/app/event">
        Competitions
      </q-side-link>
      <q-collapsible menu label="Competitions" opened>
        <div class="scroll" style="max-height: 400px">
          <q-side-link
            v-for="competition in competitions"
            :key="competition"
            :to="`/app/competitions/${competition.id}`"
            class="item link"
            exact
          >
            {{ competition.name }}
          </q-side-link>
        </div>
      </q-collapsible>

      <q-side-link class="item link" to="/app/other-info">
        Other Information
      </q-side-link>
    </q-collapsible>
  </div>
</q-layout>
```
