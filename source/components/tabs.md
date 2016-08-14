title: Tabs
---
Quasar Tabs are a way of displaying more information using less window real-estate. This Component can especially be used in Layouts.

<input type="hidden" data-fullpage-demo="layout/tabs">

On desktop, Tabs will use clickable arrows to indicate to the user that they can scroll to see them all, if they don't all fit on the screen. Tabs are responsive and on small screens (like on a phone) if they can all fit on the screen they will share all screen width, otherwise user can swipe through the Tabs.

## Basic Usage
Example of a `*.vue` file using Tabs.

``` html
<!-- Tabs -->
<quasar-tabs>
  <quasar-tab icon="mail" target="#tab-1">
    Tab 1
  </quasar-tab>

  <quasar-tab icon="alarm" target="#tab-2">
    Tab 2
  </quasar-tab>
</quasar-tabs>

<!-- Targets -->
<div id="tab-1">
  ...tab content...
</div>
<div id="tab-2">
  ...tab content...
</div>
```

## Attributes
| Attribute | Type | Description |
| --- | --- | --- |
| `hidden` | Boolean | Show or hide it |
| `disabled` | Boolean | Make it disabled or not |
| `icon` | String | Icon to use for it |
| `target` | String | DOM element selector for target. It makes it be displayed when Tab is active and hides target when other Tab is selected instead. |
| `hide` | String | Possible values: `icon` (hides icon) or `label` (hides label and only displays icon) |
| `active` | Boolean | Just one Tab can be active. Use this attribute to auto-select a Tab by default. |

## Usage with Vue Router
``` html
<!-- Tabs -->
<quasar-tabs>
  <quasar-tab icon="mail" v-link="{path: '/mails', exact: true}">
    Mails
  </quasar-tab>

  <quasar-tab icon="alarm" v-link="{path: '/alarms', exact: true}">
    Alarms
  </quasar-tab>
</quasar-tabs>
```

Your Tabs will be auto-selected when user navigates to the specified routes (through `v-link` Vue directive).

## Usage on a Layout
``` html
<quasar-layout>
  ...
  <quasar-tabs slot="navigation">
    <quasar-tab icon="mail" v-link="{path: '/mails', exact: true}">
      Mails
    </quasar-tab>

    <quasar-tab icon="alarm" v-link="{path: '/alarms', exact: true}">
      Alarms
    </quasar-tab>
  </quasar-tabs>
  ...
</quasar-layout>
```

Notice the `slot="navigation"` attribute. This makes Quasar know where to place your Tabs depending on the theme. On Material Design theme it will place them between Layout header and page view, and on iOS theme between page view and Layout footer.

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-tabs class="orange">...</quasar-tabs>
```

You can also invert the colors (see demo for example) by adding the color and `inverted` as CSS classes:

``` html
<quasar-tabs class="inverted orange">...</quasar-tabs>
```
