title: Quasar Chips Textbox
---
The Quasar Chips Textbox allows user to enter a group of text items, which is also editable in the form of quick deletion of the items in the list.

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

The user can remove a Chip by clicking/tapping on the `close` icon. Adding a Chip is done by clicking/tapping on the component, typing and then hitting the `send` icon or `<ENTER>` key.

### Error State
Add `has-error` CSS class:
``` html
<q-chips v-model="model" class="has-error"></q-chips>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Array | (**required**) The model data for the initial rendering of chips. |
| `readonly` | Boolean | If readonly user can not add or remove chips. |
| `disable` | Boolean | If disabled user can not add or remove chips. |
| `placeholder` | String | Placeholder for the textfield. |
| `chipClasses` | String, Object, Array | The CSS class properties to be assigned to the chips. |

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

Please refer to the [Chip component documentation](/component/chip.html) for more details. 
