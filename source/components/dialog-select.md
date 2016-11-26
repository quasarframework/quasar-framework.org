title: Dialog Select
---
A Quasar Dialog Select box can be of two types: single selection (using Radios) or multiple selection (using Checkboxes or Toggles).

This component opens up a Dialog Modal. If for some reason you want it to open a Popover, use the "sibling" basic [Select](/components/select.html) component.

<input type="hidden" data-fullpage-demo="form/select/dialog">

## Basic Usage

``` html
<!-- With Radios -->
<q-dialog-select
  type="radio"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Radios"
></q-dialog-select>

<!-- With Checkboxes -->
<q-dialog-select
  type="checkbox"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Checkboxes"
></q-dialog-select>

<!-- With Toggles -->
<q-dialog-select
  type="toggle"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Toggles"
></q-dialog-select>
```

Options Object example:
``` js
selectOptions: [
  {
    label: 'Google',
    value: 'goog'
  },
  {
    label: 'Facebook',
    value: 'fb'
  },
  ...
]
```

### Error State
Add `has-error` CSS class:
``` html
<q-dialog-select
  class="has-error"
  type="radio"
  v-model="select"
  :options="selectOptions"
></q-dialog-select>
```

## Vue Properties
| Vue Property | Required | Description |
| --- | --- | --- |
| `model` | Yes | Model for the Select Component. |
| `options` | Yes | Array of options (Object with `label` and `value` properties). |
| `type` | Yes | One of `radio`, `checkbox` or `toggle` strings. |
| `okLabel` | | Label for "OK" button on Dialog. |
| `cancelLabel` | | Label for "Cancel" button on Dialog. |
| `title` | | Title of Dialog. |
| `message` | | Message of Dialog. |
| `label` | | (Floating) Label to use. |
| `placeholder` | | Placeholder to use. |
| `readonly` | | When set to `true` the model cannot be altered. |
| `disable` | | When set to `true` the model cannot be altered. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `pick()` | Opens up the Dialog so user can pick options. |

## Inside of a List Usage

``` html
<div class="list">
  <div class="list-label">Single Selection</div>
  <div class="item multiple-lines">
    <i class="item-primary">supervisor_account</i>
    <div class="item-content">
      <q-select
        class="full-width"
        type="radio"
        v-model="select"
        :options="selectOptions"
      ></q-select>
    </div>
  </div>

  <hr>
  <div class="list-label">Multiple Selection</div>

  <div class="item multiple-lines">
    <i class="item-primary">supervisor_account</i>
    <div class="item-content">
      <q-select
        class="full-width"
        type="checkbox"
        v-model="multipleSelect"
        :options="selectOptions"
      ></q-select>
    </div>
  </div>

  <div class="item multiple-lines">
    <i class="item-primary">supervisor_account</i>
    <div class="item-content">
      <q-select
        class="full-width"
        type="toggle"
        v-model="multipleSelect"
        :options="selectOptions"
      ></q-select>
    </div>
  </div>
</div>
```
