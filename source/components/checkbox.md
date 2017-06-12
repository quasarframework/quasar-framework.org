title: Checkbox
---
The Quasar Checkbox component is a basic element to be used for selection or toggling by the user. It has a number of features, as described below.

Please also refer to the [Option Group documentation](/components/option-group.html) on other possibilities for creating groups of Toggles.
Remember you can use QCheckbox wrapped by a [QField](/components/field.html) too.

<input type="hidden" data-fullpage-demo="form/checkbox">

## Basic Usage

``` html
<!-- No label: -->
<q-checkbox v-model="checked" />

<!-- With a label -->
<q-checkbox v-model="checked" label="Checkbox Label" />

<!-- Disabled: -->
<q-checkbox v-model="checked" disable />
```

## Vue Properties
Supports `v-model` which should be binded to a Boolean or Array in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `label` | String | The text label for the Checkbox. |
| `left-label` | Boolean | Set to `true`, if the label should be placed to the left of the Checkbox. |
| `checked-icon` | String | Optional icon to use, when the Checkbox is checked. |
| `uncheck-icon` | String | Optional icon to use, when the Checkbox is not checked. |
| `color` | String | Color from [Quasar Color Palette](/components/color-palette.html). |
| `disable` | Boolean | Set to `true`, to disable the Checkbox. |
| `val` | Object | Used to modify the v-model of the Checkbox when using an Array as `v-model`. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@blur` | Triggered, when the checkbox loses focus. |
| `@focus` | Triggered, when the checkbox gains focus. |

## Array as Model
If you have a number of checkboxes for a selection, use an array as the model object and specify `val` property.

```html
<q-checkbox v-model="selection" val="one" label="One" />
<br><br>
<q-checkbox v-model="selection" val="two" label="Two" />
<br><br>
<q-checkbox v-model="selection" val="three" label="Three" />
```

```javascript
<script>
export default {
  data () {
    return {
      selection: ['one', 'two', 'three']
    }
  }
}
</script>
```

Ticking all Checkboxes will make `selection` scope variable to be `['one', 'two', 'three']`. Unticking all Checkboxes will result in `selection` being an empty array `[]`.

## More Examples
There are a number of props, which are available to help quickly format a Checkbox. An interesting feature of Checkbox is the ripple effect that user gets when clicking/tapping on it to change its state.

### Specific Icons
Sometimes, you might need a checkbox simply as a type of button, to maybe turn something on or off. You can do this with the `checked-icon` and `unchecked-icon` props.

``` html
<!-- a happy and unhappy smiley, maybe for a one-touch satisfaction feedback -->
<q-checkbox
  v-model="checked"
  checked-icon="sentiment very satisfied"
  unchecked-icon="sentiment very dissatisfied"
/>

<!-- an eye and a crossed out eye to indicate visibility -->
<q-checkbox
  v-model="checked"
  checked-icon="visibility"
  unchecked-icon="visibility_off"
/>
```

### Coloring
Use the `color` prop to control the Checkbox color.

```html
<q-checkbox v-model="checked" color="teal" />

<q-checkbox v-model="checked" color="orange" />

<q-checkbox v-model="checked" color="dark" />
```

### Label Position
Use the `left-label` prop, to move the label to the left of the checkbox.

```html
<q-checkbox
  v-model="checked"
  color="teal"
  left-label
  label="Checkbox Label"
/>
```

### Usage Inside of a List
In the following example we use the Right side of QItems to insert Checkbox, but it works anywhere.

```html
<q-list link>
  <!--
    Rendering a <label> tag (notice tag="label")
    so the whole QItem will respond to clicks to
    change Checkbox state.
  -->
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked"></q-checkbox>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked"></q-checkbox>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label" multiline>
    <q-item-side>
      <q-checkbox v-model="checked"></q-checkbox>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```
