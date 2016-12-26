title: Rating
---
Quasar Rating is a Web Component which allows users to rate items, usually knows as "Star Rating".

<input type="hidden" data-fullpage-demo="form/rating">

## Basic Usage

``` html
<q-rating v-model="ratingModel" :max="3"></q-rating>

<!-- Disabled State -->
<q-rating
  disable
  v-model="ratingModel"
  :max="3"
></q-rating>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `max` | Number | Number of icons to display. |
| `icon` | String | Icon to use as grade. Default value: `grade`. |
| `disable` | Boolean | When set to `true` user can not change model value. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `set(value)` | Parses and sets that value. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-rating
  class="orange"
  v-model="ratingModel"
  :max="5"
></q-rating>
```
