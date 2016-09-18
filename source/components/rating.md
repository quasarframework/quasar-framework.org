title: Rating
---
Quasar Rating is a Web Component which allows users to rate items, usually knows as "Star Rating".

<input type="hidden" data-fullpage-demo="form/rating">

## Basic Usage

``` html
<quasar-rating :model.sync="ratingModel" :max-grade="3"></quasar-rating>

<!-- Disabled State -->
<quasar-rating
  disable
  :model.sync="ratingModel"
  :max-grade="3"
></quasar-rating>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `model` | Number | Model for Rating Component. |
| `max-grade` | Number | Number of icons to display. |
| `icon` | String | Icon to use as grade. Default value: `grade`. |
| `disable` | Boolean | When set to `true` user can not change model value. |

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-rating
  class="orange"
  :model.sync="ratingModel"
  :max-grade="5"
></quasar-rating>
```
