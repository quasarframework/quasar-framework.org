title: Radio
---
<input type="hidden" data-fullpage-demo="form/radio">

## Basic Usage

``` html
<label>
  <quasar-radio :model.sync="option" value="opt1"></quasar-radio>
  Option 1
</label>
<label>
  <quasar-radio :model.sync="option" value="opt2"></quasar-radio>
  Option 2
</label>
```

## Inside of a List Usage

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Option 1</div>
      <quasar-radio :model.sync="option" value="opt1"></quasar-radio>
    </div>
  </label>
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Option 2</div>
      <quasar-radio :model.sync="option" value="opt2"></quasar-radio>
    </div>
  </label>
</div>
```

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <quasar-radio :model.sync="option" value="opt1"></quasar-radio>
    <div class="item-content">
        Option 1
    </div>
  </label>
  <label class="item">
    <quasar-radio :model.sync="option" value="opt2"></quasar-radio>
    <div class="item-content">
        Option 2
    </div>
  </label>
</div>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-radio class="orange">...</quasar-radio>
```
