title: Search bar
---

<input type="hidden" data-fullpage-demo="form/search">

Quasar Search bars lazy evaluate the input with a debounce of 300ms by default.

## Basic Usage

``` html
<!-- VueModel contains data property "ratingModel" -->
<quasar-search :model.sync="searchModel"></quasar-search>
```

## Attributes

| Param Attributes | Type | Description |
| --- | --- | --- |
| `model` | Number | Model for Search Component. |
| `debounce` | Number | Number of ms to debounce input. Default to 300. |

Example:
``` html
<!-- VueModel contains data property "searchModel" and "debounce" -->
<quasar-search
  :model.sync="searchModel"
  :debounce="600"
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
    <quasar-search class="orange" :model.sync="searchModel"></quasar-search>
  </div>
  ...
</quasar-layout>
```
