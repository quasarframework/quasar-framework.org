title: Toggle
---
<input type="hidden" data-fullpage-demo="form/toggle">

## Basic Usage

``` html
<label>
  <quasar-toggle :model.sync="checked"></quasar-toggle>
  Toggle Label
</label>
```

## Inside of a List Usage

``` html
<div class="list inner-delimiter bordered">
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Toggle Label</div>
      <quasar-toggle :model.sync="checked"></quasar-toggle>
    </div>
  </label>
</div>
```

``` html
<div class="list inner-delimiter bordered">
  <label class="item">
    <quasar-toggle :model.sync="checked"></quasar-toggle>
    <div class="item-content">
      Toggle Label
    </div>
  </label>
</div>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-toggle class="orange" :model.sync="checked"></quasar-toggle>
```
