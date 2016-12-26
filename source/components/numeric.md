title: Numeric
---
<input type="hidden" data-fullpage-demo="form/numeric">

## Basic Usage

``` html
<q-numeric
  v-model="number"
  :min="1"
  :max="17"
></q-numeric>

<!-- Disabled state -->
<q-numeric
  disable
  v-model="number"
  :min="1"
  :max="17"
></q-numeric>
```

### Error State
Add `has-error` CSS class:
``` html
<q-numeric
  class="has-error"
  v-model="number"
  :min="1"
  :max="17"
></q-numeric>
```

## Vue Properties

| Vue Property | Default Value | Description |
| --- | --- | --- |
| `step` | 1 | Value of increment / decrement |
| `min` | *none* | Minimum value of the model |
| `max` | *none* | Maximum value of the model |
| `readonly` | `false` | Make field read-only. |
| `disable` | `false` | Disable input from user. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Inside of a List Usage

``` html
<div class="list">
  <div class="item two-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <span class="item-label">Number: </span>
      <q-numeric v-model="number"></q-numeric>
    </div>
  </div>
</div>
```
