title: Checkbox
---
<input type="hidden" data-fullpage-demo="form/checkbox">

The Quasar Checkbox component is a basic element to be used for selection or toggling by the user. It has a number of features, as described below. 

## Basic Usage

``` html
<q-checkbox v-model="checked" label="Checkbox Label" />

<!-- Disabled: -->
<q-checkbox v-model="checked" disable label="Disabled Checkbox" />

<!-- No label: -->
<q-checkbox v-model="checked" />
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Boolean, Array | **required** The v-model of the checkbox. |
| `val` | Object | Used to modify the v-model of the checkbox. |
| `label` | String | The text label for the checkbox. |
| `left-label` | Boolean | Set to true, if the label should be placed to the left of the checkbox. |
| `color` | String | The [Quasar Color](/components/color-palette.html) of the checkbox. |
| `disable` | Boolean | Set to true, to disable the checkbox. |
| `checked-icon` | String | The icon to use, when the box is checked. |
| `uncheck-icon` | String | The icon to use, when the box is not checked. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@blur` | Triggered, when the checkbox loses focus. |
| `@focus` | Triggered, when the checkbox gains focus. |

## Formatting

There are a number of props, which are available to help quickly format a checkbox. An interesting feature of the checkbox, is the ripple effect the user gets, when pressing or clicking on the checkbox to change its state.

### Icons as Checkboxes

Sometimes, you might need a checkbox simply as a type of button, to maybe turn something on or off. You can do this with the `checked-icon` and `unchecked-icon` props. 

``` html
<!-- a happy and unhappy smiley, maybe for a one-touch satisfaction feedback -->
<q-checkbox v-model="checked" checked-icon="sentiment very satisfied" unchecked-icon="sentiment very dissatisfied" />

<!-- an eye and a crossed out eye to indicate visibility -->
<q-checkbox v-model="checked" checked-icon="visibility" unchecked-icon="visibility_off" style="margin-left: 50px" />

```

### Coloring

Use the `color` prop to control the checkbox's color.

```html
<q-checkbox v-model="checked" color="teal" label="Checkbox Label" />

<q-checkbox v-model="checked" color="orange" label="Checkbox Label" />

<q-checkbox v-model="checked" color="dark" label="Checkbox Label" />
```

### Label Position

Use the `left-label` prop, to move the label to the left of the checkbox.

```html
<q-checkbox v-model="checked" color="teal" left-label label="Checkbox Label" />

```

## Array as Model
If you have a number of checkboxes for a selection, use an array as the model object. 

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

## Using QCheckbox in a List

```html
<q-list link>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked"></q-checkbox>
    </q-item-side>
    <q-item-main>
      <q-item-tile title>Notification</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked"></q-checkbox>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Notification</q-item-tile>
      <q-item-tile sublabel>Allow notification</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked"></q-checkbox>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Notification</q-item-tile>
      <q-item-tile sublabel>Allow notifications</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```

Please also refer to the [q-option-group documentation](/components/option-group.html) on other possibilities for creating groups of checkboxes.