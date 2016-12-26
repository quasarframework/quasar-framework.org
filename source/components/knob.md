title: Knob
---
Quasar Knob is another way of making the user select a Number value from a predefined range. With optional steps included. See demo.

<input type="hidden" data-fullpage-demo="form/knob">

## Basic Usage

``` html
<q-knob
  v-model="model"
  :min="min"
  :max="max"
></q-knob>

<!-- With custom placeholder -->
<q-knob
  v-model="model"
  :min="min"
  :max="max"
  :placeholder="'$ ' + model"
></q-knob>

<!-- Disabled state -->
<q-knob
  disable
  v-model="model"
  :min="min"
  :max="max"
></q-knob>
```

## Vue Properties

| Vue Property | Description |
| --- | --- |
| `step` | Number representing difference between two values that the model can take. Default: `1`. |
| `min` | Minimum value that the model can take. |
| `max` | Maximum value that the model can take. |
| `size` | CSS String determining the width and height of the Knob. Examples: "120px", "12rem". |
| `placeholder` | Placeholder to use. |
| `color` | Primary CSS color of the Knob. Example: "blue", "#ccc". |
| `trackColor` | Track CSS color of the Knob. Example: "#e4e4e4", "rgb(224, 200, 200)". |
| `lineWidth` | Line width of Knob. |
| `disable` | When set to `true` the model cannot be altered. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |
