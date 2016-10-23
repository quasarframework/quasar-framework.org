title: Search bar
---

<input type="hidden" data-fullpage-demo="form/search">

Quasar Search bars lazy evaluate the input with a debounce of 300ms by default.

## Basic Usage

``` html
<quasar-search v-model="searchModel"></quasar-search>

<!-- Disabled state -->
<quasar-search
  disable
  v-model="searchModel"
></quasar-search>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `debounce` | Number | Number of ms to debounce input. Default to 300. |
| `icon` | String | Icon to use. |
| `placeholder` | String | Placeholder to use. |
| `disable` | Boolean | When set to `true` user can not change model value. |

Example:
``` html
<quasar-search
  v-model="searchModel"
  :debounce="600"
  placeholder="Hotels"
  icon="local_hotel"
></quasar-search>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Resets the model to an empty string. |

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-search
  class="orange"
  v-model="searchModel"
></quasar-search>
```

## Usage with Layout
If you want to place on Layout header or footer:
``` html
<quasar-layout>
  ...
  <div slot="header" class="toolbar orange">
    <quasar-search
      class="orange"
      v-model="searchModel"
    ></quasar-search>
  </div>
  ...
</quasar-layout>
```
