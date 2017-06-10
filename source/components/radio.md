title: Radio
---

The Quasar Radio component is another basic element for user input. You can use this for one or multiple selections between one or more choices. 

<input type="hidden" data-fullpage-demo="form/radio">

## Basic Usage

``` html
<q-radio v-model="option" val="opt1" label="Option 1" />
<br><br>
<q-radio v-model="option" val="opt2" label="Option 2" />
<br><br>
<q-radio v-model="option" val="opt3" label="Option 3" />
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Boolean, Array | **required** The v-model of the radio. |
| `val` | Object  | Used to modify the v-model of the radio. |
| `label` | String | The text label for the radio. |
| `left-label` | Boolean | Set to true, if the label should be placed to the left of the radio. |
| `color` | String | The [Quasar Color](/components/color-palette.html) of the radio. |
| `disable` | Boolean | Set to true, to disable the radio. |
| `checked-icon` | String | The icon to use, when the radio is checked. Default is a simple radio icon. |
| `uncheck-icon` | String | The icon to use, when the radio is not checked. Default is simple unchecked radio icon. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@blur` | Triggered, when the radio loses focus. |
| `@focus` | Triggered, when the radio gains focus. |

## Formatting

There are a number of props, which are available to help quickly format a radio. An interesting feature of the radio, is the ripple effect the user gets, when pressing or clicking on the radio to change its state.

### Different Icons in the Radio

Instead of the default radio icon, you can also use the `checked-icon` and `unchecked-icon` props to display a different icon. 

```html
<q-radio v-model="option" val="opt1" unchecked-icon="visibility_off" checked-icon="visibility" label="Show only Area 1" />
<br><br>
<q-radio v-model="option" val="opt2" unchecked-icon="visibility_off" checked-icon="visibility" label="Show only Area 2" />
<br><br>
<q-radio v-model="option" val="opt3" unchecked-icon="visibility_off" checked-icon="visibility" label="Show only Area 3" />
```

> **Note**
> Use either the `icon` or the `checked-icon` and `unchecked-icon` props. They shouldn't be used at the same time.

### Coloring

Use the `color` prop to control the radio's color.

``` html
<q-radio v-model="option" val="opt2" label="Option 2" />
<br><br>
<q-radio v-model="option" val="opt3" color="teal" label="Option 3" />
<br><br>
<q-radio v-model="option" val="opt4" color="orange" label="Option 4" />
```

### Label Position

Use the `left-label` prop, to move the label to the left of the radio.

```html
<q-radio v-model="option" val="opt2" left-label label="Option 2" />

```

## Inside of a List Usage

``` html
<q-list link>
  <q-item tag="label">
    <q-item-side>
      <q-radio v-model="option" val="opt1" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 1</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-radio v-model="option" val="opt2" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 2</q-item-tile>
      <q-item-tile sublabel>Allows notifications</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-radio v-model="option" val="opt3" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 3</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```

Please also refer to the [q-option-group documentation](/components/option-group.html) on other possibilities for creating groups of radios.