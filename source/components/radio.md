title: Radio
---
<input type="hidden" data-fullpage-demo="form/radio">

## Basic Usage

``` html
<label>
  <quasar-radio v-model="option" val="opt1"></quasar-radio>
  Option 1
</label>
<label>
  <quasar-radio v-model="option" val="opt2"></quasar-radio>
  Option 2
</label>

<!-- With no label: -->
<quasar-radio v-model="option" val="opt3"></quasar-radio>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-radio class="orange"></quasar-radio>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `val` | String | Value for the respective option. When model holds this value, the Radio becomes selected. |
| `disable` | Boolean | If disabled user can not change model to its value. |

## Inside of a List Usage

``` html
<div class="list">
  <label class="item">
    <div class="item-primary">
      <quasar-radio v-model="option" val="opt1"></quasar-radio>
    </div>
    <div class="item-content">
      Option 1
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-primary">
      <quasar-radio v-model="option" val="opt2"></quasar-radio>
    </div>
    <div class="item-content">
      <div>Option 2</div>
      <div>Lorem ipsum</div>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-primary">
      <quasar-radio v-model="option" val="opt3"></quasar-radio>
    </div>
    <div class="item-content">
      <div>Option 3</div>
      <div>Lorem ipsum...</div>
    </div>
  </label>
</div>
```
