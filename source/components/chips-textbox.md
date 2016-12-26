title: Quasar Chips Textbox
---
<input type="hidden" data-fullpage-demo="form/text-input/chips">

## Basic Usage

``` html
<q-chips v-model="model"></q-chips>

<!-- Disabled -->
<q-chips v-model="model" disable></q-chips>

<!-- With custom placeholder -->
<q-chips v-model="model" placeholder="Type some names"></q-chips>
```

> The model variable must be an Array.

User can remove a Chip by clicking/tapping on the `close` icon. Adding a Chip is done by clicking/tapping on the component, typing and then hitting the `send` icon or `<ENTER>` key.

### Error State
Add `has-error` CSS class:
``` html
<q-chips v-model="model" class="has-error"></q-chips>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `readonly` | Boolean | If readonly user can not add or remove chips. |
| `disable` | Boolean | If disabled user can not add or remove chips. |
| `placeholder` | String | Placeholder for the textfield. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `add(value)` | Adds `value` to the model. |
| `remove(index)` | Removes value at `index` in model. |
| `focus()` | Focuses the input text field. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Inside of a List Usage
``` html
<div class="list">
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <q-chips v-model="model"></q-chips>
    </div>
  </div>
</div>
```
