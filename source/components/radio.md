title: Radio
---
The Quasar Radio component is another basic element for user input. You can use this for one or multiple selections between one or more choices.
<input type="hidden" data-fullpage-demo="forms/radio">

Please also refer to the [Option Group documentation](/components/option-group.html) on other possibilities for creating groups of Toggles.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Basic Usage

``` html
<!-- Thre choices for the user -->
<q-radio v-model="option" val="opt1" label="Option 1" />
<q-radio v-model="option" val="opt2" label="Option 2" />
<q-radio v-model="option" val="opt3" label="Option 3" />
```

## Vue Properties
Supports `v-model` which should be binded to a String in your scope. Choosing one option (clicking/tapping on a radio) makes your `v-movel` change to Radio's `val`.

| Vue Property | Type | Description |
| --- | --- | --- |
| `val` | Object  | Used to modify the v-model of the Radio with. |
| `label` | String | The text label for the Radio. |
| `left-label` | Boolean | Set to `true`, if the label should be placed to the left of the radio. |
| `checked-icon` | String | The icon to use, when the radio is checked. Default is a simple radio icon. |
| `uncheck-icon` | String | The icon to use, when the radio is not checked. Default is simple unchecked radio icon. |
| `color` | String | Color from [Quasar Color Palette](/components/color-palette.html) of the Radio. |
| `disable` | Boolean | Set to `true`, to disable the radio. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@blur` | Triggered, when Radio loses focus. |
| `@focus` | Triggered, when Radio gains focus. |

## More Examples
There are a number of props, which are available to help quickly format a Radio. An interesting feature of Radio is the ripple effect that user gets when clicking/tapping on it to change its state.

### Specific State Icons
Instead of the default radio icon, you can also use the `checked-icon` and `unchecked-icon` props to display a different icon.

```html
<q-radio
  v-model="option"
  val="opt1"
  unchecked-icon="visibility_off"
  checked-icon="visibility"
  label="Show only Area 1"
/>

<q-radio
  v-model="option"
  val="opt2"
  unchecked-icon="visibility_off"
  checked-icon="visibility"
  label="Show only Area 2"
/>

<q-radio
  v-model="option"
  val="opt3"
  unchecked-icon="visibility_off"
  checked-icon="visibility"
  label="Show only Area 3"
/>
```

### Coloring
Use the `color` prop to control the Radio color.

``` html
<!-- Default color, which is "primary" -->
<q-radio v-model="option" val="opt2" />

<!-- Teal -->
<q-radio v-model="option" val="opt3" color="teal" />

<!-- Orange-7 -->
<q-radio v-model="option" val="opt4" color="orange-7" />
```

### Label Position
Use the `left-label` prop, to move the label to the left of the radio.

```html
<q-radio
  v-model="option"
  val="opt2"
  left-label
  label="Option 2"
/>
```

### Usage Inside of a List

``` html
<q-list link>
  <!--
    Rendering a <label> tag (notice tag="label")
    so the whole QItem will respond to clicks to
    change Toggle state.
  -->
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
      <q-item-tile sublabel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```
