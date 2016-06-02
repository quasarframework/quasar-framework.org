title: Quasar Number
---
<input type="hidden" data-fullpage-demo="number">

## Basic Usage

``` html
<number :model.sync="number" :min="1" :max="7"></number>
```

Vue DOM attribute properties you can use:

| Param Attributes | Default Value | Description |
| --- | --- | --- |
| `model` | 0 | Model for Number Web Component |
| `step` | 1 | Value of increment / decrement |
| `lazy` | *none* | Change model after Web Component loses focus |
| `debounce` | *none* | Change model with a debouncing timing |
| `min` | *none* | Minimum value of the model |
| `max` | *none* | Maximum value of the model |

## Inside of a List Usage

``` html
<div class="list inner-delimiter bordered">
  <label class="item">
    <div class="item-content">
      <div class="item-label fixed-label">
        Some number
      </div>
      <div class="item-value">
        <number :model.sync="number" :min="1" :max="7"></number>
      </div>
    </div>
  </label>
</div>
```
