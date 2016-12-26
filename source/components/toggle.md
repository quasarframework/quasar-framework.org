title: Toggle
---
<input type="hidden" data-fullpage-demo="form/toggle">

## Basic Usage

``` html
<label>
  <q-toggle
    v-model="checked"
  ></q-toggle>
  Toggle Label
</label>

<!-- With no label -->
<q-toggle
  v-model="checked"
></q-toggle>

<!-- With icon -->
<q-toggle
  icon="alarm"
  v-model="checked"
></q-toggle>

<!-- Disabled state -->
<q-toggle
  disable
  v-model="checked"
></q-toggle>
```

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<q-toggle
  class="orange"
  v-model="checked"
></q-toggle>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `icon` | String | Optional icon to use. |
| `disable` | Boolean | If disabled user can not change state. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Inside of a List Usage

``` html
<div class="list">
  <label class="item">
    <div class="item-content has-secondary">
      Events and reminders
    </div>
    <div class="item-secondary">
      <q-toggle v-model="checked"></q-toggle>
    </div>
  </label>

  <label class="item two-lines">
    <div class="item-content has-secondary">
      <div>Events and reminders</div>
      <div>Lorem ipsum...</div>
    </div>
    <div class="item-secondary">
      <q-toggle v-model="checked" class="purple"></q-toggle>
    </div>
  </label>

  <label class="item three-lines">
    <div class="item-content has-secondary">
      <div>Events and reminders</div>
      <div>Lorem ipsum...</div>
    </div>
    <div class="item-secondary">
      <q-toggle v-model="checked" class="red"></q-toggle>
    </div>
  </label>
</div>
```
