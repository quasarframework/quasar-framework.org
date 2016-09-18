title: Dialog Select
---
A Quasar Dialog Select box can be of two types: single selection (using Radios) or multiple selection (using Checkboxes or Toggles).

This component opens up a Dialog Modal. If for some reason you want it to open a Popover, use the "sibling" basic [Select](/components/select.html) component.

<input type="hidden" data-fullpage-demo="form/select/dialog">

## Basic Usage

``` html
<!-- With Radios -->
<quasar-dialog-select
  type="radio"
  :model.sync="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Radios"
></quasar-dialog-select>

<!-- With Checkboxes -->
<quasar-dialog-select
  type="checkbox"
  :model.sync="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Checkboxes"
></quasar-dialog-select>

<!-- With Toggles -->
<quasar-dialog-select
  type="toggle"
  :model.sync="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Toggles"
></quasar-dialog-select>
```

## Vue Properties && Properties

Properties:

| Vue Property | Required | Description |
| --- | --- | --- |
| `model` | Yes | Model for the Select Component. |
| `options` | Yes | Array of options (Object with `label` and `value` properties). |
| `type` | Yes | One of `radio`, `checkbox` or `toggle` strings. |
| `okLabel` | | Label for "OK" button on Dialog. |
| `cancelLabel` | | Label for "Cancel" button on Dialog. |
| `title` | | Title of Dialog. |
| `message` | | Message of Dialog. |
| `placeholder` | | Placeholder to use. |
| `disable` | | When set to `true` the model cannot be altered. |

Methods:

| Vue Property | Description |
| --- | --- |
| `pick()` | Opens up the Dialog so user can pick options. |

## Inside of a List Usage

``` html
<div class="list">
  <div class="list-label">Single Selection</div>
  <div class="item multiple-lines">
    <i class="item-primary">supervisor_account</i>
    <div class="item-content">
      <quasar-select
        class="full-width"
        type="radio"
        :model.sync="select"
        :options="selectOptions"
      ></quasar-select>
    </div>
  </div>

  <hr>
  <div class="list-label">Multiple Selection</div>

  <div class="item multiple-lines">
    <i class="item-primary">supervisor_account</i>
    <div class="item-content">
      <quasar-select
        class="full-width"
        type="checkbox"
        :model.sync="multipleSelect"
        :options="selectOptions"
      ></quasar-select>
    </div>
  </div>

  <div class="item multiple-lines">
    <i class="item-primary">supervisor_account</i>
    <div class="item-content">
      <quasar-select
        class="full-width"
        type="toggle"
        :model.sync="multipleSelect"
        :options="selectOptions"
      ></quasar-select>
    </div>
  </div>
</div>
```
