title: Quasar Checkbox
---
<input type="hidden" data-fullpage-demo="checkbox">

## Basic Usage

``` html
<label>
  <checkbox :model.sync="checked"></checkbox>
  Checkbox Label
</label>
```

## Inside of a List Usage

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <checkbox :model.sync="checked"></checkbox>
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
      <checkbox :model.sync="checked"></checkbox>
    </div>
  </label>
</div>
```
