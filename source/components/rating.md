title: Rating
---
Quasar Rating is a Component which allows users to rate items, usually known as "Star Rating".
<input type="hidden" data-fullpage-demo="forms/rating">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Basic Usage

``` html
<q-rating v-model="ratingModel" :max="3" />

<!-- Disabled State -->
<q-rating
  disable
  v-model="ratingModel"
  :max="3"
/>
```

## Vue Properties
Supports `v-model` which should be binded to a Number in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `max` | Number | Number of icons to display. |
| `icon` | String | Icon to use as grade. Default value: `grade`. |
| `color` | String | One of [Quasar Color Palette](/components/color-palette.html). |
| `size` | String | CSS size String. Examples: '12px', '2rem'. |
| `readonly` | Boolean | Display as readonly. |
| `disable` | Boolean | When set to `true` user can not change model value and Rating is faded. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `set(value)` | Parses and sets that value. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newVal)` | Triggered on model value change. |

## Coloring
Use one of the Quasar colors from the [Color Palette](/components/color-palette.html), like `primary`, `secondary`, `orange-7`, `teal-2` as CSS class:

``` html
<q-rating
  class="orange"
  v-model="ratingModel"
  :max="5"
/>
```
