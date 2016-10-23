title: Toggle
---
<input type="hidden" data-fullpage-demo="form/toggle">

## Basic Usage

``` html
<label>
  <quasar-toggle
    v-model="checked"
  ></quasar-toggle>
  Toggle Label
</label>

<!-- With no label -->
<quasar-toggle
  v-model="checked"
></quasar-toggle>

<!-- With icon -->
<quasar-toggle
  icon="alarm"
  v-model="checked"
></quasar-toggle>

<!-- Disabled state -->
<quasar-toggle
  disable
  v-model="checked"
></quasar-toggle>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<quasar-toggle
  class="orange"
  v-model="checked"
></quasar-toggle>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
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
      <quasar-toggle v-model="checked"></quasar-toggle>
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-content has-secondary">
      <div>Events and reminders</div>
      <div>Lorem ipsum...</div>
    </div>
    <div class="item-secondary">
      <quasar-toggle v-model="checked" class="purple"></quasar-toggle>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-content has-secondary">
      <div>Events and reminders</div>
      <div>Lorem ipsum...</div>
    </div>
    <div class="item-secondary">
      <quasar-toggle v-model="checked" class="red"></quasar-toggle>
    </div>
  </label>
</div>
```
