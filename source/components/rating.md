title: Quasar Rating
---
Quasar Rating is a Web Component which allows users to rate items, usually knows as "Star Rating".

<input type="hidden" data-fullpage-demo="rating">

## Basic Usage

``` html
<!-- VueModel contains data property "ratingModel" -->
<rating :model.sync="ratingModel" :max-grade="3"></rating>
```


## Vue Properties

| Param Attributes | Type | Description |
| --- | --- | --- |
| `model` | Number | Model for Rating Component. |
| `max-grade` | Number | Number of icons to display. |
| `icon` | String | Icon to use as grade. Default value: `grade`. |

Example:
``` html
<!-- VueModel contains data property "ratingModel" -->
<rating :model.sync="ratingModel" :max-grade="5" icon="pets"></rating>
<rating :model.sync="ratingModel" :max-grade="9" icon="thumb_up"></rating>
<rating :model.sync="ratingModel" :max-grade="6" icon="home"></rating>
```
