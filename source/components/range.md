title: Range
---
<input type="hidden" data-fullpage-demo="form/range">

## Standalone Usage

``` html
<quasar-range :model.sync="number" :min="1" :max="7"></quasar-range>
```

Vue DOM attribute properties you can use:

| Param Attributes | Description |
| --- | --- |
| `model` | Model for the Web Component |
| `min` | Minimum value of the model |
| `max` | Maximum value of the model |
| `precision` | Number of decimals for model |

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
