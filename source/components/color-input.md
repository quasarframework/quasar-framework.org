title: Color Input
---
The Color component provides a method to input colors. There is also one more version available: [Color Picker](/components/color-picker.html).
<input type="hidden" data-fullpage-demo="forms/color/color-input">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.
**You might also want to check** [Color Utils](/components/color-utils.html).

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QColor']
}
```

## Basic Usage

``` html
<template>
  <q-color v-model="modelHex" />
</template>

<script>
export default {
  data: () => ({
    modelHex: '#C7044B',

    // and the other types of models:
    modelHexa: '#F0FF1CBF',
    modelRgb: { r: 112, g: 204, b: 55 },
    modelRgba: { r: 138, g: 36, b: 138, a: 64 }
  })
}
```

## Vue Properties
Supports `v-model` which must be a String, Number or Date Object.

| Vue Property | Type | Description |
| --- | --- | --- |
| `readonly` | Boolean | If set to `true`, component is displayed as read-only. |
| `display-value` | String | Text to display on input frame. Supersedes 'placeholder'. |
| `hide-underline` | Boolean | Hides the bottom border. |
| `popover` | Boolean | Always display with a Popover, regardless of Platform. |
| `modal` | Boolean | Always display with a Modal, regardless of Platform. |
| `format-model` | String | Data type of model (useful especially when starting out with undefined or null). One of 'auto', 'hex', 'rgb', 'hexa', 'rgba'. |
| `placeholder` | String | Placeholder text for input frame to use when model is not set (empty). |
| `ok-label` | String | Text for the button to accept the input (when using Modal). |
| `cancel-label` | String | Text for the button to cancel input with no change (when using Modal). |
| `clearable` | Boolean | If used, the component offers the user an actionable icon to reset the current value to `clear-value` (if it is set) or otherwise `default-value`. The icon appears only when the current value matches `clear-value`/`default-value`. |
| `default-value` | String/Object | Default color for picker when model is not yet set. |
| `clear-value` | String/Object | The value to which to reset the field model to when using `clearable`, unless `default-value` is specified. |

Common input frame properties:

| Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | A text that should be shown before the value of model. |
| `suffix` | String | A text that should be shown after the value of model. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. Color is applied to background instead. |
| `inverted-light` | Boolean | Inverted mode with a light color. Color is applied to background instead. |
| `dark` | Boolean | Is component rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align. |
| `disable` | Boolean | If set to `true`, component is disabled and the user cannot change model. |
| `warning` | Boolean | If set to true, the input fields colors are changed to show there is a warning. |
| `error` | Boolean | If set to true, the input fields colors are changed to show there is an error. |
| `before` | Array of Objects | Icon buttons on left side of input frame. Read below more details. |
| `after` | Array of Objects | Icon buttons on right side of input frame. Read below more details. |
| `no-parent-field` | Boolean | Avoid trying to connect to a parent QField. |

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-color
  :value="model"
  @change="val => { model = val }"
/>
```

### Icon buttons
This section refers to `before` and `after` properties which can add additional buttons as icons to the component. Here is the structure of the two properties:

```js
{
  // required icon
  icon: String,
  // required function to call when
  // icon is clicked/tapped
  handler: Function,

  // Optional. Show icon button
  // if model has a value
  content: Boolean,

  // Optional. Show icon button
  // if model is marked with error
  error: Boolean
}
```

Examples:
```html
<!--
  Show an icon button (with 'warning' as icon)
  when there is an error on component (through "error" prop)
-->
<q-color
  v-model="color"
  :error="error"
  :after="[
    {
      icon: 'warning',
      error: true,
      handler () {
        // do something...
      }
    }
  ]"
/>

<!--
  Show an icon button (with 'arrow_forward' as icon)
  when the model has a non empty value
-->
<q-color
  v-model="color"
  :after="[
    {
      icon: 'arrow_forward',
      content: true,
      handler () {
        // do something...
      }
    }
  ]"
/>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `show()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. Returns a Promise. |
| `hide()` | Hide Popover (on desktop) and Dialog (on mobile) to select date and/or time and execute Function after it's been hidden. Returns a Promise. |
| `toggle()` | Toggle the Popover or Modal. |
| `clear()` | Sets model to empty string (removes current value). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered on immediate model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |
| `@clear(clearVal)` | Triggered when the model is cleared. |
| `@blur` | Triggered when the modal/ popup is closed. |
| `@focus` | Triggered when the modal/ popup is opened. |

## More Examples

### Coloring
Use the `color` and `inverted`/`inverted-light` props to control the color.
```html
<q-color
  color="amber-7"
  float-label="Float Label"
  v-model="model"
/>

<q-color
  inverted
  color="primary"
  float-label="Float Label"
  v-model="model"
/>
```
Also, if QColor is displayed on a dark background, add the `dark` property.
```html
<q-color dark color="secondary" />
```

