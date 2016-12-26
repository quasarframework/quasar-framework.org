title: Quasar Checkbox
---
<input type="hidden" data-fullpage-demo="form/checkbox">

## Basic Usage

``` html
<label>
  <q-checkbox v-model="checked"></q-checkbox>
  Checkbox Label
</label>

<!-- Disabled: -->
<label>
  <q-checkbox v-model="checked" disable></q-checkbox>
  Checkbox Label
</label>

<!-- No label: -->
<q-checkbox v-model="checked"></q-checkbox>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-checkbox class="orange">...</q-checkbox>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `disable` | Boolean | If disabled user can not change state. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Inside of a List Usage

``` html
<div class="list">
  <label class="item">
    <div class="item-primary">
      <q-checkbox v-model="checked"></q-checkbox>
    </div>
    <div class="item-content">
      Notifications
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-primary">
      <q-checkbox v-model="checked"></q-checkbox>
    </div>
    <div class="item-content">
      <div>Notifications</div>
      <div>Allow notifications</div>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-primary">
      <q-checkbox v-model="checked"></q-checkbox>
    </div>
    <div class="item-content">
      <div>Notifications</div>
      <div>Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications </div>
    </div>
  </label>
</div>
```
