title: Tabs
---
Quasar Tabs are a way of displaying more information using less window real estate.
One common use case for this component is in Layout's header/footer in a QToolbar. Please refer to [Layouts](/components/layout.html) and [Toolbar](/components/toolbar.html) for references.
<input type="hidden" data-fullpage-demo="navigation/tabs/basic-tabs">

## Basic Usage
Below is a basic example of the Tabs component using many of its features.

``` html
<q-tabs>
  <!-- Tabs - notice slot="title" -->
  <q-tab default count="5" slot="title" name="tab-1" icon="message" />
  <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
  <q-tab alert slot="title" name="tab-3" icon="account_box" />
  <q-tab slot="title" name="tab-4" icon="accessibility" />
  <q-tab slot="title" name="tab-5" icon="build" />

  <!-- Targets -->
  <q-tab-pane name="tab-1">Tab One</q-tab-pane>
  <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
  <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
  <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
  <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
</q-tabs>
```
The above example is using QTabPane component as the content container (or target container) for the tabs. There is also the ability to use Vue Router for each tab instead of targeting a QTabPane. Also, QTabPanes are optional and you can use `v-model` on QTabs. We'll cover those features later.

>The `name` prop on QTab and QTabPane links the tab to the targets (panes).

As you can see from the example, we have a main Tab container with (`<q-tabs>`) and singular Tabs themselves with (`<q-tab>`). Let's look at the Tabs container first:

## QTabs (Container Component)
Use the QTabs component to wrap your Tabs.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `align` | String | The type of the alignment for the tabs within the tabs container. The allowed values are `left` (default), `center`, `right` or `justify`. |
| `position` | String | The screen position of the tabs. The allowed values are `top` or `bottom`. |
| `color` | String | A Quasar standard CSS color. |
| `inverted` | Boolean | Set to true, to invert the tab color. |
| `two-lines` | Boolean | Set to true, should a tab's label wrap to a second line. |
| `no-pane-border` | Boolean | Avoid drawing a border around QTabPanes. |
| `glossy` | Boolean | Apply a glossy effect |

There is support for `v-model` (which is optional). In this case, you need a Vue variable in your scope which will contain the name of the current selected tab (through `name` prop on QTab). Changing the value will also make QTabs select the according QTab.

#### Basic usage with `v-model`:

```html
<template>
  <div>
    <q-tabs v-model="selectedTab">
      <q-tab slot="title" name="tab-1" icon="message" />
      <q-tab slot="title" name="tab-2" icon="fingerprint" />
      <q-tab slot="title" name="tab-3" icon="account_box" />

      ...optional `QTabPane`s...
    </q-tabs>

    <q-btn @click="selectThirdTab">Select Third Tab</q-btn>
</template>

<script>
import { QTabs, QBtn } from 'quasar'

export default {
  components: {
    QTabs,
    QBtn
  },
  data () {
    return {
      // initializing for second tab to be selected by default
      selectedTab: 'tab-2'
    }
  },
  methods: {
    selectThirdTab () {
      // we select third tab which has `name` set to 'tab-3'
      this.selectedTab = 'tab-3'
    }
  }
}
</script>
```

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `selectTab(name)` | Set the active Tab using its name. |

### Vue Events
| Event | Description |
| --- | --- |
| `@select` | Triggered when selected Tab changes. |

### Overflow Behavior

On a desktop, if the Tabs cannot be dispalayed completely, the user will be offered a scroll action in the form of an opaque gradient fill. When hovered over, it turns to an arrow button. The user can press continually on the button, and the unseen Tabs will scroll by.

If the user is on a device with a small screen (like a phone) and all Tabs can fit on the screen, they will be automatically justify aligned and share the complete screen width. If the Tabs do not fit, then the user will also see the arrow to indicate the user can swipe through the Tabs.

## QTab (Child Component)
QTab component is used to define a title for your Tab. Can be linked to a QTabPane through `name` prop.
If you want to use Vue Router with a Tab (clicking on a Tab triggers a route change in your app), then please refer to QRouteTab component in next section.

> **IMPORTANT**. Do not forget to specify `slot="title"` on QTab.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `default` | Boolean | Set to `true` on the tab which you want to be selected by default. |
| `label` | String | Label to use for the tab. |
| `icon` | String | Icon to use for the tab. |
| `disable` | Boolean | If disabled, the user won't be able to select the tab. |
| `hidden` | Boolean | If set to `true`, it hides the tab. |
| `hide` | String | Possible values: `icon` or `label`. On narrow screens one of the two will be hidden. |
| `name` | String | The id of the tab. Default is a uid added by Quasar. |
| `alert` | Boolean | When `true`, the tab has a red dot, which is meant to get the user's attention.  |
| `count` | Number, String | A number to indicate there is a list of unread or unseen items in the tab's content. |
| `color` | String | The color of the tab's icon or text, should it be different than the default. |

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `select()` | Make this Tab the selected one. |

### Vue Events
| Event | Description |
| --- | --- |
| `@select` | Triggered when QTab gets selected. |
| `@click` | Triggered when user clicks/taps on Tab. |

## Usage with "v-model"
Best way to programmatically switch between Tabs is by using a `v-model`. Here's another example, a little bit more complex which includes a QSelect to explain the effects of using a `v-model`.

``` html
<q-select
  type="radio"
  v-model="tabsModel"
  :options="tabsOptions"
></q-select>

<q-tabs v-model="tabsModel">
  <q-tab name="xtab-1" icon="message" slot="title" />
  <q-tab name="xtab-2" icon="account_box" slot="title" />
  <q-tab name="xtab-3" icon="mail" slot="title" />

  <q-tab-pane name="xtab-1">Tab One</q-tab-pane>
  <q-tab-pane name="xtab-2">Tab Two</q-tab-pane>
  <q-tab-pane name="xtab-3">Tab Three</q-tab-pane>

</q-tabs>
```

``` js
// Data for template above
data () {
  return {
    tabsModel: 'xtab-2',
    tabsOptions: [
      {label: 'Tab 1', value: 'xtab-1'},
      {label: 'Tab 2', value: 'xtab-2'},
      {label: 'Tab 3', value: 'xtab-3'}
    ]
  }
}
```
**Note**
When the tabs are initially rendered, the value stored in the v-model used by your component, as with `tabsModel` above, will also indicate to the user a selected tab. If you aren't using v-model, you can set the initially active tab with the `default` prop.

## QTabPane (Child Component)

The Tabs Pane component is useful, when the content of each tab is relatively small or simple. If you have complex content, you'll propably want to use the Tabs Router Component below.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | String | **Required** The name of the tab and also the target id. |

> In order to show the proper content for each tab in each pane, the names of the tabs and panes should match.

## QRouteTab (Child Component)

The Tabs Router component is just like the QTab component and shares the same properties, however it also has Vue Router properties bound to it. These allow the triggering of your specific routing.

### Additional Vue Router Properties.
| Vue Property | Type | Description |
| --- | --- | --- |
| `to` | String, Object | The literal path or vue-router object the tab should route to. |
| `exact` | Boolean | If true, the router will be forced into "exact match mode" |
| `append` | Boolean | If true, the to path will be appended to the current path.  |
| `replace` | Boolean | If true, there will be no history of the used route.  |

Please refer to [Vue-Router Link](http://router.vuejs.org/en/api/router-link.html) documentation to get a feeling how to use these props.

### Usage
``` html
<!-- Tabs -->
<q-tabs>
  <q-route-tab
    icon="mail"
    to="/mails"
    exact
    slot="title"    
  />
  <q-route-tab
    icon="alarm"
    to="/alarms"
    exact
    slot="title"
  />
</q-tabs>
```
Your Tabs will be auto-selected when user navigates to the specified routes.

> **DO NOT** use `v-model` or `selectTab()` method on QTabs if using QRouteTab.

## Tabs in a Layout

You will, in most cases, want to use tabs within a layout component. Below is an example of how this would be done.

``` html
<q-layout>
  ...
  <q-tabs slot="navigation">
    <q-route-tab
      icon="mail"
      to="/mails"
      exact
      slot="title"
    />

    <q-route-tab
      icon="alarm"
      to="/alarms"
      exact
      slot="title"
    />
  </q-tabs>
  ...
</q-layout>
```

Notice the `slot="navigation"` attribute. This allows Quasar to know where to place your Tabs depending on the theme. With the Material Design theme, the tabs will be placed between the Layout header and the page view. And, with the iOS theme, it will be placed between the page view and the Layout footer.

Please refer to the following documentation for more information: [Quasar Layout Component](/components/layout.html)

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` or variants (`teal-4`, `orange-10`) as CSS class:

``` html
<!-- Applied to all tabs: -->
<q-tabs color="orange">...</q-tabs>

<!--
  Applied only to a specific tab.
  In this case you can color Tabs differently:
-->
<q-tab slot="title" color="orange" />
```

You can also invert the colors (see demo for example) by adding the Boolean `inverted` prop (works only on QTabs and NOT on QTab or QRouteTab):

``` html
<!-- default color, on `inverted` color mode -->
<q-tabs color="orange" inverted>...</q-tabs>

<!-- `orange` color, on `inverted` color mode -->
<q-tabs color="orange" inverted>...</q-tabs>
```

## Alignment of Tabs in the Header
By default, on large width windows the Tabs are aligned to the left. If you wish to maintain a justify alignment (filling all available space on the width), then add `justify` to the align prop:

``` html
<q-tabs align="justify">...</q-tabs>
```

To align center or to the right, use `align="center"` or `align="right"`.
