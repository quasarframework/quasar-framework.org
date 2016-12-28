title: Select
---
A Quasar Select box can be of two types: single selection (using Radios or Lists) or multiple selection (using Checkboxes or Toggles). This component opens up a Popover. If for some reason you want it to open a Dialog, use the "sibling" [Dialog Select](/components/dialog-select.html) component.

<input type="hidden" data-fullpage-demo="form/select/basic">

## Basic Usage

``` html
<!-- Single Selection using Radios -->
<q-select
  type="radio"
  v-model="select"
  :options="selectOptions"
></q-select>

<!-- Single Selection using List -->
<q-select
  type="list"
  v-model="select"
  :options="selectOptions"
></q-select>

<!-- Multiple Selection using Checkboxes-->
<q-select
  type="checkbox"
  v-model="select"
  :options="selectOptions"
></q-select>

<!-- Multiple Selection using Toggles-->
<q-select
  type="toggle"
  v-model="select"
  :options="selectOptions"
></q-select>

<!-- Disabled state -->
<q-select
  disable
  type="checkbox"
  v-model="select"
  :options="selectOptions"
></q-select>
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
<q-select
  class="has-error"
  type="radio"
  v-model="select"
  :options="selectOptions"
></q-select>
```

## Vue Properties
| Vue Property | Required | Description |
| --- | --- | --- |
| `options` | Yes | Array of options (Object with `label` and `value` properties). |
| `type` | Yes | One of `radio`, `checkbox` or `toggle` strings. |
| `label` | | (Floating) Label to use. |
| `placeholder` | | Placeholder to use. |
| `static-label` | | Overrides `label` and `placeholder` and selected value. Display this label always regardless of selection status. |
| `readonly` | | When set to `true` the model cannot be altered. |
| `disable` | | When set to `true` the model cannot be altered. |

## Vue Methods

| Vue Method | Description |
| --- | --- |
| `open()` | Opens the Popover |
| `close()` | Closes the Popover |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

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
