title: Quasar Chips Textbox
---
<input type="hidden" data-fullpage-demo="form/text-input/chips">

## Basic Usage

``` html
<quasar-chips v-model="model"></quasar-chips>

<!-- Disabled -->
<quasar-chips v-model="model" disable></quasar-chips>

<!-- With custom placeholder -->
<quasar-chips v-model="model" placeholder="Type some names"></quasar-chips>
```

> The model variable must be an Array.

User can remove a Chip by clicking/tapping on the `close` icon. Adding a Chip is done by clicking/tapping on the component, typing and then hitting the `send` icon or `<ENTER>` key.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `disable` | Boolean | If disabled user can not add or remove chips. |
| `placeholder` | String | Placeholder for the textfield. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `add(value)` | Adds `value` to the model. |
| `remove(index)` | Removes value at `index` in model. |
| `focus()` | Focuses the input text field. |

## Inside of a List Usage
``` html
<div class="list">
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <quasar-chips v-model="model"></quasar-chips>
    </div>
  </div>
</div>
```
