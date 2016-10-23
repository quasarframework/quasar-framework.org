title: Double Range
---
Quasar Double Range is a great way to make the user specify an interval, with optional steps between valid values. Some example: select a price range.

Also check its "sibling", the simple [Range](/components/range.html) component.

<input type="hidden" data-fullpage-demo="form/range/double">

## Basic Usage

Notice we are using two models, one for the beginning of the interval and one for the end of it.
``` html
<quasar-double-range
  v-model="model"
  :min="1"
  :max="7"
></quasar-double-range>

<!--
  "model" is an Object of this form:
  {min: 0, max: 100}
-->
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `min` | Number | Minimum value for beginning of interval |
| `max` | Number | Maximum value for end of interval |
| `label` | Boolean | Popup a label when user clicks/taps on the Range |
| `step` | Number | Specify step amount between valid values |
| `snap` | Boolean | Range handler will snap on values, rather than walking freely; good to use along `step`; also displays step markers on the Range |
| `markers` | Boolean | Display markers on background, one for each possible value for the model. |
| `disable` | Boolean | When `true` user cannot change interval. |

> **IMPORTANT**
> Make sure you choose the `min`, `max` and `step` value correctly. `step` must be a divisor of `max - min`, of `modelMin - min` and of `modelMax - min` otherwise it might mess things up. This is because all valid steps must be able to hold an equal position within the `min`-`max` interval.

Example with `step`, `label` and `snap`:
``` html
<quasar-double-range
  v-model="model"
  :min="min"
  :max="max"
  :step="step"
  label
  snap
></quasar-double-range>

<!--
  "model" is an Object of this form:
  {min: 0, max: 100}
-->
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-double-range
  class="orange"
  v-model="model"
></quasar-double-range>
```

## Inside of a List Usage

``` html
<div class="list">
  <div class="item two-lines">
    <i class="item-primary">local_atm</i>
    <div class="item-content">
      <quasar-double-range
        v-model="model"
        :min="0" :max="50" label
      ></quasar-double-range>
    </div>
  </div>
</div>
```
