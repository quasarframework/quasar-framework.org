title: Numeric
---
<input type="hidden" data-fullpage-demo="form/numeric">

## Basic Usage

``` html
<quasar-numeric
  v-model="number"
  :min="1"
  :max="17"
></quasar-numeric>

<!-- Disabled state -->
<quasar-numeric
  disable
  v-model="number"
  :min="1"
  :max="17"
></quasar-numeric>
```

## Vue Properties

| Vue Property | Default Value | Description |
| --- | --- | --- |
| `step` | 1 | Value of increment / decrement |
| `min` | *none* | Minimum value of the model |
| `max` | *none* | Maximum value of the model |
| `disable` | `false` | Disable input from user. |

## Inside of a List Usage

``` html
<div class="list">
  <div class="item two-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <span class="item-label">Number: </span>
      <quasar-numeric v-model="number"></quasar-numeric>
    </div>
  </div>
</div>
```
