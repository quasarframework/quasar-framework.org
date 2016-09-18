title: Search bar
---

<input type="hidden" data-fullpage-demo="form/search">

Quasar Search bars lazy evaluate the input with a debounce of 300ms by default.

## Basic Usage

``` html
<quasar-search :model.sync="searchModel"></quasar-search>

<!-- Disabled state -->
<quasar-search
  disable
  :model.sync="searchModel"
></quasar-search>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `model` | Number | Model for Search Component. |
| `debounce` | Number | Number of ms to debounce input. Default to 300. |
| `icon` | String | Icon to use. |
| `placeholder` | String | Placeholder to use. |
| `disable` | Boolean | When set to `true` user can not change model value. |

Example:
``` html
<quasar-search
  :model.sync="searchModel"
  :debounce="600"
  placeholder="Hotels"
  icon="local_hotel"
></quasar-search>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-search
  class="orange"
  :model.sync="searchModel"
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
      :model.sync="searchModel"
    ></quasar-search>
  </div>
  ...
</quasar-layout>
```
