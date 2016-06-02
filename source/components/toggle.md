title: Quasar Toggle
---
<input type="hidden" data-fullpage-demo="toggle">

## Basic Usage

``` html
<label>
  <toggle :model.sync="checked"></toggle>
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
      <toggle :model.sync="checked"></toggle>
    </div>
  </label>
</div>
```

``` html
<div class="list inner-delimiter bordered">
  <label class="item">
    <toggle :model.sync="checked"></toggle>
    <div class="item-content">
      Toggle Label
    </div>
  </label>
</div>
```
