title: Quasar Checkbox
---
<input type="hidden" data-fullpage-demo="form/checkbox">

## Basic Usage

``` html
<label>
  <quasar-checkbox :model.sync="checked"></quasar-checkbox>
  Checkbox Label
</label>

<!-- Disabled: -->
<label>
  <quasar-checkbox :model.sync="checked" disable></quasar-checkbox>
  Checkbox Label
</label>

<!-- No label: -->
<quasar-checkbox :model.sync="checked"></quasar-checkbox>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-checkbox class="orange">...</quasar-checkbox>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `model` | Boolean | Checked or not. |
| `disable` | Boolean | If disabled user can not change state. |

## Inside of a List Usage

``` html
<div class="list">
  <label class="item">
    <div class="item-primary">
      <quasar-checkbox :model.sync="checked"></quasar-checkbox>
    </div>
    <div class="item-content">
      Notifications
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-primary">
      <quasar-checkbox :model.sync="checked"></quasar-checkbox>
    </div>
    <div class="item-content">
      <div>Notifications</div>
      <div>Allow notifications</div>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-primary">
      <quasar-checkbox :model.sync="checked"></quasar-checkbox>
    </div>
    <div class="item-content">
      <div>Notifications</div>
      <div>Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications </div>
    </div>
  </label>
</div>
```
