title: Range
---
Quasar Range is a great way to make the user specify a Number value between an interval, with optional steps between valid values.

<input type="hidden" data-fullpage-demo="form/range">

## Standalone Usage

``` html
<quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>
```

## Inside of a List Usage

``` html
<div class="list bordered inner-delimiter">
  <div class="item">
    <i class="item-right-margin">volume_down</i>
    <quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>
    <i class="item-left-margin">volume_up</i>
  </div>
</div>
```

## Vue Properties
Vue DOM attribute properties you can use:

| Attribute | Type | Description |
| --- | --- | --- |
| `model` | Number | Model for the Web Component |
| `min` | Number | Minimum value of the model |
| `max` | Number | Maximum value of the model |
| `label` | Boolean | Popup a label when user clicks/taps on the Range |
| `step` | Number | Specify step amount between valid values |
| `snap` | Boolean | Range handler will snap on values, rather than walking freely; good to use along `step`; also displays step markers on the Range |

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

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-range class="orange" :model.sync="model">...</quasar-range>
```
