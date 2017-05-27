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
| `readonly` | Sort of a "display" only mode. Model cannot be altered. |
| `disable` | When set to `true` the model cannot be altered. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@click` | Triggered when mouse is clicked, held and moved to change the model value. |

## More Examples
Multi-colored with a Euro icon.

``` html
 <q-knob
  v-model="model"
  size="120px"
  style="font-size: 1.5rem"
  color="secondary"
  track-color="yellow-3"
  line-width="5px"
  :min="min"
  :max="max"
  :step="5"
>
  <q-icon class="on-left" name="euro_symbol" /> {{model}}
</q-knob>
```

Read-only state (different than disabled, as the mouse pointer doesn't change).

``` html
<q-knob
  v-model="model"
  :min="min"
  :max="max"
  color="primary"
  readonly
>
  <q-icon class="on-left" name="volume_up" /> {{model}}
</q-knob>
```