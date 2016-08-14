title: Quasar Checkbox
---
<input type="hidden" data-fullpage-demo="form/checkbox">

## Basic Usage

``` html
<label>
  <quasar-checkbox :model.sync="checked"></quasar-checkbox>
  Checkbox Label
</label>
```

## Inside of a List Usage

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <quasar-checkbox :model.sync="checked"></quasar-checkbox>
    <div class="item-content">
      Checkbox Label
    </div>
  </label>
</div>
```

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <div class="item-content">
      <div class="item-label">
        Checkbox Label
      </div>
      <quasar-checkbox :model.sync="checked"></quasar-checkbox>
    </div>
  </label>
</div>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-checkbox class="orange">...</quasar-checkbox>
```
