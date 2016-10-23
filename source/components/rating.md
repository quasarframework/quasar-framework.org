title: Rating
---
Quasar Rating is a Web Component which allows users to rate items, usually knows as "Star Rating".

<input type="hidden" data-fullpage-demo="form/rating">

## Basic Usage

``` html
<quasar-rating v-model="ratingModel" :max-grade="3"></quasar-rating>

<!-- Disabled State -->
<quasar-rating
  disable
  v-model="ratingModel"
  :max-grade="3"
></quasar-rating>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `max-grade` | Number | Number of icons to display. |
| `icon` | String | Icon to use as grade. Default value: `grade`. |
| `disable` | Boolean | When set to `true` user can not change model value. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `set(value)` | Parses and sets that value. |

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-rating
  class="orange"
  v-model="ratingModel"
  :max-grade="5"
></quasar-rating>
```
