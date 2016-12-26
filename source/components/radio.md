title: Radio
---
<input type="hidden" data-fullpage-demo="form/radio">

## Basic Usage

``` html
<label>
  <q-radio v-model="option" val="opt1"></q-radio>
  Option 1
</label>
<label>
  <q-radio v-model="option" val="opt2"></q-radio>
  Option 2
</label>

<!-- With no label: -->
<q-radio v-model="option" val="opt3"></q-radio>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-radio class="orange"></q-radio>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `val` | String | Value for the respective option. When model holds this value, the Radio becomes selected. |
| `disable` | Boolean | If disabled user can not change model to its value. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Inside of a List Usage

``` html
<div class="list">
  <label class="item">
    <div class="item-primary">
      <q-radio v-model="option" val="opt1"></q-radio>
    </div>
    <div class="item-content">
      Option 1
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-primary">
      <q-radio v-model="option" val="opt2"></q-radio>
    </div>
    <div class="item-content">
      <div>Option 2</div>
      <div>Lorem ipsum</div>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-primary">
      <q-radio v-model="option" val="opt3"></q-radio>
    </div>
    <div class="item-content">
      <div>Option 3</div>
      <div>Lorem ipsum...</div>
    </div>
  </label>
</div>
```
