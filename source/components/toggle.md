title: Toggle
---
<input type="hidden" data-fullpage-demo="form/toggle">

## Basic Usage

``` html
<label>
  <quasar-toggle
    :model.sync="checked"
  ></quasar-toggle>
  Toggle Label
</label>

<!-- With no label -->
<quasar-toggle
  :model.sync="checked"
></quasar-toggle>

<!-- With icon -->
<quasar-toggle
  icon="alarm"
  :model.sync="checked"
></quasar-toggle>

<!-- Disabled state -->
<quasar-toggle
  disable
  :model.sync="checked"
></quasar-toggle>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-toggle
  class="orange"
  :model.sync="checked"
></quasar-toggle>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `model` | Boolean | Checked or not. |
| `icon` | String | Optional icon to use. |
| `disable` | Boolean | If disabled user can not change state. |

## Inside of a List Usage

``` html
<div class="list">
  <label class="item">
    <div class="item-content has-secondary">
      Events and reminders
    </div>
    <div class="item-secondary">
      <quasar-toggle :model.sync="checked"></quasar-toggle>
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-content has-secondary">
      <div>Events and reminders</div>
      <div>Lorem ipsum...</div>
    </div>
    <div class="item-secondary">
      <quasar-toggle :model.sync="checked" class="purple"></quasar-toggle>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-content has-secondary">
      <div>Events and reminders</div>
      <div>Lorem ipsum...</div>
    </div>
    <div class="item-secondary">
      <quasar-toggle :model.sync="checked" class="red"></quasar-toggle>
    </div>
  </label>
</div>
```
