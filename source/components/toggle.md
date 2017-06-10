title: Toggle
---
The Quasar Toggle component is another basic element for user input. You can use this for turning settings, features or true/ false inputs on and off.

<input type="hidden" data-fullpage-demo="form/toggle">

## Basic Usage

``` html
<q-toggle v-model="checked" label="Toggle Label" />

<!-- With no label -->
<q-toggle v-model="checked" />

<!-- With icon -->
<q-toggle v-model="checked" icon="alarm" label="Toggle Label" />

<!-- Disabled state -->
<q-toggle v-model="checked" disable label="Toggle Label" />
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Boolean, Array | **required** The v-model of the toggle. |
| `val` | Object  | Used to modify the v-model of the toggle. |
| `label` | String | The text label for the toggle. |
| `left-label` | Boolean | Set to true, if the label should be placed to the left of the toggle. |
| `color` | String | The [Quasar Color](/components/color-palette.html) of the toggle. |
| `disable` | Boolean | Set to true, to disable the toggle. |
| `icon` | String | The icon name to be inset in the toggle. |
| `checked-icon` | String | The icon to use, when the toggle is checked. |
| `uncheck-icon` | String | The icon to use, when the toggle is not checked. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@blur` | Triggered, when the toggle loses focus. |
| `@focus` | Triggered, when the toggle gains focus. |

## Formatting

There are a number of props, which are available to help quickly format a toggle. An interesting feature of the toggle, is the ripple effect the user gets, when pressing or clicking on the toggle to change its state.

### Icons in the Toggle

For a more informational toggle, you can also use either the `icon` or the `checked-icon` and `unchecked-icon` props to display an inset icon in the toggle. 

```html
<q-toggle v-model="checked" icon="alarm" label="Toggle Label" />

<q-toggle v-model="checked" icon="mail" color="secondary" label="Toggle Label" />

<q-toggle v-model="checked" unchecked-icon="visibility_off" checked-icon="visibility" color="red" label="Toggle Label" />
```

> **Note**
> Use either the `icon` or the `checked-icon` and `unchecked-icon` props. They shouldn't be used at the same time.

### Coloring

Use the `color` prop to control the toggle's color.

``` html
<q-toggle v-model="checked" color="orange" left-label label="Toggle Label" />

<q-toggle v-model="checked" color="teal" left-label label="Toggle Label" />

<q-toggle v-model="checked" color="dark" left-label label="Toggle Label" />
```
### Label Position

Use the `left-label` prop, to move the label to the left of the toggle.

```html
<q-checkbox v-model="checked" color="teal" left-label label="Checkbox Label" />

```

## Array as Model
If you have a number of toggles for a selection, use an array as the model object and the `val` prop for the inserted value into the array. 

```html
<q-toggle v-model="selection" val="one" label="One" />
<br><br>
<q-toggle v-model="selection" val="two" label="Two" />
<br><br>
<q-toggle v-model="selection" val="three" label="Three" />
```

```javascript
<script>
export default {
  data () {
    return {
      selection: ['two']
    }
  }
}
</script>
```

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

Please also refer to the [q-option-group documentation](/components/option-group.html) on other possibilities for creating groups of toggles.