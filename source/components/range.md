title: Range
---
Quasar Range is a great way to make the user specify a Number value between an interval, with optional steps between valid values.

Also check its "sibling", the [Double Range](/components/double-range.html) component.

<input type="hidden" data-fullpage-demo="form/range/basic">

## Basic Usage

``` html
<quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `model` | Number | Model for the Range Component |
| `min` | Number | Minimum value of the model |
| `max` | Number | Maximum value of the model |
| `label` | Boolean | Popup a label when user clicks/taps on the Range |
| `step` | Number | Specify step amount between valid values |
| `snap` | Boolean | Range handler will snap on values, rather than walking freely; good to use along `step`; also displays step markers on the Range |
| `markers` | Boolean | Display markers on background, one for each possible value for the model. |
| `disable` | Boolean | When `true` user cannot change model value. |

Example with `step`, `label` and `snap`:
``` html
<quasar-range
  :model.sync="number"
  :min="min"
  :max="max"
  :step="step"
  label
  snap
></quasar-range>
```

> **IMPORTANT**
> Make sure you choose the `min`, `max` and `step` value correctly. `step` must be a divisor of `max - min`, otherwise it might mess things up. This is because all valid steps must be able to hold an equal position within the `min`-`max` interval.

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-range class="orange" :model.sync="model"></quasar-range>
```

## Inside of a List Usage

``` html
<div class="list">
  <div class="item two-lines">
    <i class="item-primary">volume_up</i>
    <div class="item-content">
      <quasar-range
        :model.sync="standalone"
        :min="0"
        :max="50"
        label
      ></quasar-range>
    </div>
  </div>
</div>
```
