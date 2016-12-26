title: Search bar
---

<input type="hidden" data-fullpage-demo="form/search">

Quasar Search bars lazy evaluate the input with a debounce of 300ms by default.

## Basic Usage

``` html
<q-search v-model="searchModel"></q-search>

<!-- Disabled state -->
<q-search
  disable
  v-model="searchModel"
></q-search>
```

### Error State
Add `has-error` CSS class:
``` html
<q-search
  class="has-error"
  v-model="searchModel"
></q-search>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `debounce` | Number | Number of ms to debounce input. Default to 300. |
| `icon` | String | Icon to use. |
| `placeholder` | String | Placeholder to use. |
| `readonly` | Boolean | When set to `true` user can not change model value. |
| `disable` | Boolean | When set to `true` user can not change model value. |

Example:
``` html
<q-search
  v-model="searchModel"
  :debounce="600"
  placeholder="Hotels"
  icon="local_hotel"
></q-search>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Resets the model to an empty string. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-search
  class="orange"
  v-model="searchModel"
></q-search>
```

## Usage with Layout
If you want to place on Layout header or footer:
``` html
<q-layout>
  ...
  <div slot="header" class="toolbar orange">
    <q-search
      class="orange"
      v-model="searchModel"
    ></q-search>
  </div>
  ...
</q-layout>
```
