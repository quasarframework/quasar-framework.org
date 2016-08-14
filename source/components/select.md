title: Select
---
A Quasar Select box can be of two types: single selection (using Radios) or multiple selection (using Checkboxes).

<input type="hidden" data-fullpage-demo="form/select">

## Basic Usage

``` html
<!-- Single Selection -->
<quasar-select
  :model.sync="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Company"
></quasar-select>
```

``` html
<!-- Multiple Selection -->
<quasar-select
  multiple
  :model.sync="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Company"
></quasar-select>
```

Vue DOM attribute properties you can use:

| Param Attributes | Description |
| --- | --- |
| `model` | Model for the Web Component. |
| `options` | Array of options (Object with `label` and `value` properties). |
| `multiple` | Empty attribute. When present it allows for multiple selection. |
| `ok-label` | Label for "OK" button |
| `cancel-label` | Label for "Cancel" button |
| `title` | Title displayed when choosing option(s). |
| `message` | Message below the title when choosing option(s). |
| `fixed-label` | Label to display on the Web Component to inform user of the current selection. The default label can be replaced with a String |

## Inside of a List Usage

``` html
<div class="list item-delimiter bordered">
  <!-- Single Selection -->
  <div class="item">
    <div class="item-content">
      <div class="item-label">Company</div>
      <quasar-select
        :model.sync="select"
        :options="selectOptions"
        ok-label="Pick"
        cancel-label="Neah"
        title="Company"
      ></quasar-select>
    </div>
  </div>

  <!-- Multiple Selection -->
  <div class="item">
    <div class="item-content">
      <div class="item-label">Companies</div>
      <quasar-select
        multiple
        :model.sync="multipleSelect"
        :options="selectOptions"
        ok-label="Pick"
        title="Companies"
      ></quasar-select>
    </div>
  </div>
</div>
```
