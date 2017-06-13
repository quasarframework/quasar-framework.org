title: Toggle
---
The Quasar Toggle component is another basic element for user input. You can use this for turning settings, features or true/ false inputs on and off.

Please also refer to the [Option Group documentation](/components/option-group.html) on other possibilities for creating groups of Toggles.
Remember you can use QToggle wrapped by a [QField](/components/field.html) too.

<input type="hidden" data-fullpage-demo="form/toggle">

## Basic Usage

``` html
<q-toggle v-model="checked" label="Toggle Label" />

<!-- With no label -->
<q-toggle v-model="checked" />

<!-- With a specific color -->
<q-toggle v-model="checked" color="teal-8" />

<!-- With icon -->
<q-toggle v-model="checked" icon="alarm" label="Toggle Label" />

<!-- Disabled state -->
<q-toggle v-model="checked" disable label="Toggle Label" />
```

Check "Vue Properties" for even more options.

## Vue Properties
Supports `v-model` which should be binded to a Boolean or Array in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `label` | String | The text label for the Toggle. |
| `left-label` | Boolean | Set to `true`, if the label should be placed to the left of the Toggle. |
| `icon` | String | Optional icon to use. Overriden by `checked-icon` and `unchecked-icon` if the latter are used. |
| `checked-icon` | String | The icon to use, when the Toggle is checked. |
| `uncheck-icon` | String | The icon to use, when the Toggle is not checked. |
| `color` | String | Color from [Quasar Color Palette](/components/color-palette.html). |
| `disable` | Boolean | Set to true, to disable the toggle. |
| `val` | Object  | Used to modify the v-model of the Toggle when using an Array as `v-model`. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@blur` | Triggered, when Toggle loses focus. |
| `@focus` | Triggered, when Toggle gains focus. |

## Array as Model
If you have a number of toggles for a selection, use can also use an Array as the model object and the `val` prop for the inserted value into the Array.

```html
<template>
  <div>
    <q-toggle v-model="selection" val="one" label="One" />
    <q-toggle v-model="selection" val="two" label="Two" />
    <q-toggle v-model="selection" val="three" label="Three" />
  </div>
</template>

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

Ticking all toggles will make `selection` scope variable to be `['one', 'two', 'three']`. Unticking all toggles will result in `selection` being an empty array `[]`.

## More Examples
There are a number of props, which are available to help quickly format a Toggle. An interesting feature of Toggle is the ripple effect that user gets when clicking/tapping on it to change its state.

### Specific State Icons
For a more informational Toggle, you can also use the `checked-icon` and `unchecked-icon` props to display an inset icon in the toggle.

```html
<q-toggle
  v-model="checked"
  unchecked-icon="visibility_off"
  checked-icon="visibility"
  label="Toggle Label"
/>
```

Specifying `checked-icon` and `unchecked-icon` overrides `icon` property if you've also used it.

### Coloring
Use the `color` prop to control the toggle's color.

``` html
<q-toggle v-model="checked" color="orange" />

<q-toggle v-model="checked" color="teal" />

<q-toggle v-model="checked" color="dark" />
```

### Label Position
Use the `left-label` prop, to move the label to the left of Toggle.

```html
<q-toggle
  v-model="checked"
  left-label
  label="Checkbox Label"
/>
```

### Usage Inside of a List
In the following example we use the right side of QItems to insert Toggle, but it works anywhere.

```html
<q-list link>
  <!--
    Rendering a <label> tag (notice tag="label")
    so the whole QItem will respond to clicks to
    change Toggle state.
  -->
  <q-item tag="label">
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-toggle v-model="checked" />
    </q-item-side>
  </q-item>
  <q-item tag="label" multiline>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-toggle v-model="checked" class="purple" />
    </q-item-side>
  </q-item>
  <q-item tag="label" multiline>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-toggle v-model="checked" class="red" />
    </q-item-side>
  </q-item>
</q-list>
```
