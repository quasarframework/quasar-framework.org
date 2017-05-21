title: Tabs
---
Quasar Tabs are a way of displaying more information using less window real estate. This component is best used in [Layouts](/components/layout.html).

<input type="hidden" data-fullpage-demo="layout/tabs">

## Basic Usage
Below is a basic example of the Tabs component using many of its features.

``` html
<!-- Tabs -->
<q-tabs>
  <q-tab selected count="5" slot="title" name="tab-1" icon="message" />
  <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
  <q-tab alert slot="title" name="tab-3" icon="account_box" />
  <q-tab slot="title"name="tab-4" icon="accessibility" />
  <q-tab slot="title" name="tab-5" icon="build" />

  <!-- Targets -->
  <q-tab-pane name="tab-1">Tab One</q-tab-pane>
  <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
  <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
  <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
  <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
</q-tabs>
```
The above example is using the `q-tab-pane` as the content container (or target container) for the tabs. There is also the ability to use vue-router and route in content for each tab. We'll cover that feature later.

>The `name` prop on `<q-tab>` links the tab to the targets. 

As you can see from the example, we have a main Tab container with (`<q-tabs>`) and singular Tabs themselves with (`<q-tab>`). Let's look at the Tabs container first:

## Tabs Container Component
Use the `<q-tabs>` component to wrap your Tabs.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | String | The value of the tab that is selected, which comes from the `name` prop of each tab. |
| `align` | String | The type of the alignment for the tabs within the tabs container. The allowed values are `left` (default), `center`, `right` or `justify`. |
| `position` | String | The screen position of the tabs. The allowed values are `top` or `bottom`. |
| `color` | String | A Quasar standard CSS color. |
| `inverted` | Boolean | Set to true, to invert the tab color. |
| `twoLines` | Boolean | Set to true, should a tab's label wrap to a second line. |

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `selectTab(name)` | Set the active Tab using its name. |

### Tab UX

On a desktop, if the Tabs cannot be dispalayed completely, the user will be offered a scroll action in the form of an opaque gradient fill. When hovered over, it turns to an arrow button. The user can press continually on the button, and the unseen Tabs will scroll by.

If the user is on a device with a small screen (like a phone) and all Tabs can fit on the screen, they will be automatically justified and share the complete screen width. If the Tabs do not fit, then the user will also see the arrow to indicate the user can swipe through the Tabs.

## Tab Component

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `selected` | Boolean | Set to true, to the tab as the active tab. |
| `label` | String | Label to use for the tab. |
| `icon` | String | Icon to use for the tab. |
| `disable` | Boolean | If disabled, the user won't be able to select the tab. |
| `hidden` | Boolean | If set to true, it hides the tab. |
| `hide` | String | Possible values: `icon` or `label`. On narrow screens one of the two will be hidden. |
| `name` | String | The id of the tab. Default is a uid added by Quasar. |
| `alert` | Boolean | When true, the tab has a red dot, which is meant to get the user's attention.  |
| `count` | Number, String | A number to indicate there is a list of unread or unseen items in the tab's content. |
| `color` | String | The color of the tab's icon or text, should it be different than the default. |


### Vue Methods
| Vue Method | Description |
| --- | --- |
| `select()` | Make this Tab the selected one. |

### Vue Events
| Event | Description |
| --- | --- |
| `@click` | Uses the select() function to select the tab. |



## Usage with "v-model"
Best way to programmatically switch between Tabs is by using a `v-model`:

``` html
<q-select
  type="radio"
  v-model="xTabsModel" :options="xTabsOptions"
></q-select>

<q-tabs
  v-model="xTabsModel"
>
  <q-tab
    name="xtab-1"
    icon="message"
    slot="title"
  />

  <q-tab
    name="xtab-2"
    icon="account_box"
    slot="title"
  />

  <q-tab
    name="xtab-3"
    icon="mail"
    slot="title"
  />

  <q-tab-pane name="xtab-1">Tab One</q-tab-pane>
  <q-tab-pane name="xtab-2">Tab Two</q-tab-pane>
  <q-tab-pane name="xtab-3">Tab Three</q-tab-pane>

</q-tabs>
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
**Note**
When the tabs are initially rendered, the value stored in the v-model used by your component, as with `xTabsModel` above, will also indicate to the user a selected tab. If you aren't using v-model, you can set the initially active tab with the `selected` prop.

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-tabs color="orange">...</q-tabs>
```

You can also invert the colors (see demo for example) by adding the color and `inverted` props:

``` html
<q-tabs color="orange" inverted>...</q-tabs>
```

## Always Justified Alignment
By default, on large width windows the Tabs are aligned to the left. If you wish to maintain a justified alignment (filling all available space on the width), then add `justified` to the align prop:

``` html
<q-tabs align="justified">...</q-tabs>
```

To align center or to the right, use `align="center"` or `align="right"`.

## Tabs Pane Component

The Tabs Pane component is useful, when the content of each tab is relatively small or simple. If you have complex content, you'll propably want to use the Tabs Router Component below. 

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | String | **Required** The name of the tab and also the target id. |

> In order to show the proper content for each tab in each pane, the names of the tabs and panes should match.

## Tabs Router Component

The Tabs Router component is just like the `<q-tab>` component and shares the same properties, however it also has Vue Router properties bound to it. These allow the triggering of your specific routing. 

### Additional Vue Router Properties.
| Vue Property | Type | Description |
| --- | --- | --- |
| `to` | String, Object | The literal path or vue-router object the tab should route to. |
| `exact` | Boolean | If true, the router will be forced into "exact match mode" |
| `append` | Boolean | If true, the to path will be appended to the current path.  |
| `replace` | Boolean | If true, there will be no history of the used route.  |

## Usage 
``` html
<!-- Tabs -->
<q-tabs>
  <q-tab
    icon="mail"
    to="/mails"
    exact
    slot="title"    
  />
  <q-tab
    icon="alarm"
    to="/alarms"
    exact
    slot="title"
  />
</q-tabs>
```
Your Tabs will be auto-selected when user navigates to the specified routes.

### Tabs in a Layout

You will, in most cases, want to use tabs within a layout component. Below is an example of how this would be done.

``` html
<q-layout>
  ...
  <q-tabs slot="navigation">
    <q-tab
      icon="mail"
      route="/mails"
      exact
      slot="title"
    />

    <q-tab
      icon="alarm"
      route="/alarms"
      exact
      slot="title"
    />
  </q-tabs>
  ...
</q-layout>
```

Notice the `slot="navigation"` attribute. This allows Quasar to know where to place your Tabs depending on the theme. With the Material Design theme, the tabs will be placed between the Layout header and the page view. And, with the iOS theme, it will be placed between the page view and the Layout footer.

Please refer to the following documentation for more information:

[Vue-Router](https://router.vuejs.org/en/)
[Quasar Layout Component](/components/layout-overview.html)