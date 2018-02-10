title: Button Toggle
---
The QBtnToggle component is another basic element for user input, similar to QRadio but with buttons. You can use this to supply a way for the user to pick an option from multiple choices.
<input type="hidden" data-fullpage-demo="forms/button-toggle">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QBtnToggle']
}
```

## Basic Usage

``` html
<!-- Three choices for the user -->
<q-btn-toggle
  v-model="model"
  toggle-color="primary"
  :options="[
    {label: 'One', value: 'one'},
    {label: 'Two', value: 'two'},
    {label: 'Three', value: 'three'}
  ]"
/>
```

## Vue Properties
Supports `v-model` which should be binded to a String in your scope. Choosing one option (clicking/tapping on a radio) makes your `v-model` change to Radio's `val`.

| Vue Property | Type | Description |
| --- | --- | --- |
| `options` | Array | An array of objects with `value` and `label` properties. The binary components will be created according to this array. |
| `readonly` | Boolean | Set to `true`, to make the radio read-only. |
| `disable` | Boolean | Set to `true`, to disable the radio. |
| `dense`      | Boolean | Dense Buttons. |
| `outline`    | Boolean | Set true, if you want an outlined button. |
| `flat`       | Boolean | Set true, if you want a flat button. |
| `push`       | Boolean | Set true, if the button should have a push effect. |
| `rounded`    | Boolean | Set true, if the square button should have rounded corners. |
| `glossy`     | Boolean | Set true, if the button should be glossy. |
| `no-wrap`    | Boolean | Prevent text wrapping |
| `no-caps`    | Boolean | Set true, if you don't want button content/label to be transformed to uppercase letter on Material Theme. |
| `no-ripple`  | Boolean | Disable [Material Ripple](/components/material-ripples.html). Mat theme only. |
| `wait-for-ripple` | Boolean | Wait for ripple then before emitting `@click` event. Mat theme only. |

### Color Properties
All can take values from [Quasar Color Palette](/components/color-palette.html).

| Vue Property | Type | Description |
| --- | --- | --- |
| `color` | String | Color of buttons. |
| `text-color` | String | Optional color of buttons label/icon. |
| `toggle-color` | String | Color for button representing the current selection. |
| `toggle-text-color` | String | Optional color for button label/icon representing the current selection. |

## Options Configuration
The `options` property must be an Array of Objects with this structure:
```js
{
  // required; the model gets this value when button is selected:
  value: ...,

  // include at least one of the following three props:
  label: '...', // Label for button
  icon: '...', // Icon for button
  iconRight: '...', // Icon for button on right side

  // Optional properties that override the QBtnToggle props:
  disable,
  color,
  textColor,
  toggleColor,
  toggleTextColor,
  noCaps,
  noWrap,
  noRipple,
  waitForRipple,
  tabindex
}
```

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered when it gets selected. |
