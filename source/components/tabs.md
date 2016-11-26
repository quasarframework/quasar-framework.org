title: Tabs
---
Quasar Tabs are a way of displaying more information using less window real-estate. This Component can especially be used in Layouts.

<input type="hidden" data-fullpage-demo="layout/tabs">

On desktop, Tabs will use clickable arrows to indicate to the user that they can scroll to see them all, if they don't all fit on the screen. Tabs are responsive and on small screens (like on a phone) if they can all fit on the screen they will share all screen width, otherwise user can swipe through the Tabs.

## Basic Usage
A basic example of Tabs (they are more complex as you will see in next sections where you'll learn to use Vue Routes or `v-model` with it):

``` html
<!-- Tabs -->
<q-tabs
  :refs="$refs"
  default-tab="tab-4"
>
  <q-tab name="tab-1" icon="message">
    Tab 1
  </q-tab>
  <q-tab name="tab-2" disable icon="fingerprint">
    Tab 2
  </q-tab>
  <q-tab name="tab-3" icon="alarm">
    Tab 3
  </q-tab>
  <q-tab name="tab-4" icon="accessibility">
    Tab 4
  </q-tab>
  <q-tab name="tab-5" hidden icon="accessibility">
    Tab 5
  </q-tab>
</q-tabs>

<!-- Targets -->
<div ref="tab-1">...</div>
<div ref="tab-2">...</div>
<div ref="tab-3">...</div>
<div ref="tab-4">...</div>
<div ref="tab-5">...</div>
```

The `name` attribute on `<q-tab>`s links this Tab to the DOM element using a Vue reference with same name.

As you can see, we have a container (`<q-tabs>`) and Tabs themselves (`<q-tab>`). Let's dissect each:

## Tabs Container Component
Use `<q-tabs>` component to wrap your Tabs.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `refs` | Object | (**Required**) Tell component which Vue $refs object to use for its targets. |
| `default-tab` | String | Default Tab to be selected. Do not use it along with `v-model`. |

> Supports `v-model` which holds the active Tab's name. When using `v-model` it's pointless to also use `default-tab` property, since you can initialize the model with a name.

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `setActiveTab(name)` | Set active Tab using its name. |

### Vue Events
| Event | Description |
| --- | --- |
| `@change` | Triggered whenever selected Tab changes. |

## Tab Component

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | String | Configure a name for tab. This name is used to find $refs as target too. |
| `label` | String | Label to use. |
| `icon` | String | Icon to use. |
| `disable` | Boolean | If disabled user won't be able to select it. |
| `hidden` | Boolean | Hide it.. or not. |
| `hide` | String | Possible values: `icon` or `label`. On narrow screens one of the two will be hidden. |

> Supports `v-model` which holds the active Tab's name. When using `v-model` it's pointless to also use `default-tab` property, since you can initialize the model with a name.

If using routes for each Tab:

| Vue Property | Type | Description |
| --- | --- | --- |
| `route` | String | Configure Vue Route "to" property. |
| `label` | String | Label to display. |
| `icon` | String | Icon to display. |
| `replace` | Boolean | Configure Vue Router to replace current route rather than push a new one. |
| `exact` | Boolean | Exact match of the route, just as described for `<router-link>`. |
| `append` | Boolean | Append route to current one, just as described for `<router-link>`. |
| `disable` | Boolean | If disabled user won't be able to select it. |
| `hidden` | Boolean | Hide it.. or not. |
| `hide` | String | Possible values: `icon` or `label`. On narrow screens one of the two will be hidden. |

> Either use a `route` or a `name`, but not both.

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `activate()` | Make this Tab the selected one. |
| `deactivate()` | Unselect this Tab as the active one. |
| `setTargetVisibility(Bool)` | Sets the target as visible (true) or hides it (false). |

### Vue Events
| Event | Description |
| --- | --- |
| `@selected` | Triggered whenever Tab is selected. |

## Usage with Vue Router
``` html
<!-- Tabs -->
<q-tabs>
  <q-tab
    icon="mail"
    route="/mails"
    exact
  >
    Mails
  </q-tab>

  <q-tab
    icon="alarm"
    route="/alarms"
    exact
  >
    Alarms
  </q-tab>
</q-tabs>
```

Your Tabs will be auto-selected when user navigates to the specified routes.

## Usage with "v-model"
Best way to programmatically switch between Tabs is by using a `v-model`:

``` html
<q-tabs
  :refs="$refs"
  v-model="xTabsModel"
>
  <q-tab
    name="xtab-1"
    icon="message"
  >Tab 1</q-tab>

  <q-tab
    name="xtab-2"
    icon="alarm"
  >Tab 2</q-tab>

  <q-tab
    name="xtab-3"
    icon="accessibility"
  >Tab 3</q-tab>
</q-tabs>

<q-select
  type="radio"
  v-model="xTabsModel" :options="xTabsOptions"
></q-select>

<div ref="xtab-1">...</div>
<div ref="xtab-2">...</div>
<div ref="xtab-3">...</div>
```

``` js
// Data for template above
data () {
  return {
    xTabsModel: 'xtab-2',
    xTabsOptions: [
      {label: 'Tab 1', value: 'xtab-1'},
      {label: 'Tab 2', value: 'xtab-2'},
      {label: 'Tab 3', value: 'xtab-3'}
    ]
  }
}
```

## Usage on a Layout
``` html
<q-layout>
  ...
  <q-tabs slot="navigation">
    <q-tab
      icon="mail"
      route="/mails"
      exact
    >
      Mails
    </q-tab>

    <q-tab
      icon="alarm"
      route="/alarms"
      exact
    >
      Alarms
    </q-tab>
  </q-tabs>
  ...
</q-layout>
```

Notice the `slot="navigation"` attribute. This makes Quasar know where to place your Tabs depending on the theme. On Material Design theme it will place them between Layout header and page view, and on iOS theme between page view and Layout footer.

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-tabs class="orange">...</q-tabs>
```

You can also invert the colors (see demo for example) by adding the color and `inverted` as CSS classes:

``` html
<q-tabs class="inverted orange">...</q-tabs>
```
