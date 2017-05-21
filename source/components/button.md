title: Buttons
---
The Quasar button component is a button with a few extra useful features. For instance, `q-btn` comes in two shapes: rectangle (default) and circular. It also has the material ripple effect by default. 

The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

When not disabled or spinning, a button component will always emit a `click` event, as soon as it is clicked or tapped.

For circular buttons only use icons as content.

<input type="hidden" data-fullpage-demo="css/button">

## Basic Usage

Plain simple button

``` html
<q-btn icon='create'>New item</q-btn>
```

Small primary button

``` html
<q-btn icon='edit' class='primary' small>Edit</q-btn>

```

Primary button and spinning

```html
<!-- Regular shaped -->
<q-btn loader color="primary" @click="clickMethod">
  Button Label
</q-btn>

<!-- Circular shaped; only use icon as content -->
<q-btn v-model="submit" loader round color="primary" @click="clickMethod">
  <q-spinner-oval slot="loading" />
</q-btn>
```

In the example above, the `clickMethod` would be a function to control the value of `submit`, which must be boolean.

## Vue Properties
| Vue Property | Type    | Description                            |
| ---          | ---     | ---                                    |
| `value`      | Boolean | The v-model value assigned, when using the loader feature. |
| `disable`    | Boolean | The button is disabled, if true. |
| `loader`     | Boolean | Display a spinner, if true. Requires the value prop. |
| `icon`       | String  | Name of the icon to use. |
| `icon-right` | String  | Name of the right icon to use. |
| `no-caps`    | Boolean | Set true, if inner HTML should be only lowercase. |
| `round`      | Boolean | Set true, if you want a round button. |
| `outline`    | Boolean | Set true, if you want an outlined button. |
| `flat`       | Boolean | Set true, if you want a flat button. |
| `rounded`    | Boolean | Set true, if the square button should have rounded corners. |
| `push`       | Boolean | Set true, if the button should have a push effect. |
| `small`      | Boolean | Set true, if the button should be small. |
| `big`        | Boolean | Set true, if the button should be big. |
| `color`      | String  | The name or hex value for a color.

## Vue Events
| Vue Event | Description               |
| ---       | ---                       |
| `click`   | Triggered on button click |


## More examples

When adding an icon to a regular button, there are two possibilities for its position. The default position is left. Use `iconRight` to position the icon to the right:

``` html
<!-- icon will be placed on the left -->
<q-btn icon='mail' color="primary">
  Button Label
</q-btn>

<!-- icon will be placed on the right -->
<q-btn iconRight='mail' color="teal">
  Button Label
</q-btn>
```

## Button Sizes

Use `small` or `big` as attributes. You don't need to specify `medium` because that's the default size.

``` html
<q-btn color="primary" small>
  Small Button
</q-btn>

<q-btn color="primary" big>
  Big Button
</q-btn>
```
You can also make use of globally available `block` (sets CSS `display` property to `block`) or `full-width` to expand the button. 

## Button Colors
Use any color from the [Quasar CSS Color Palette](/api/css-color-palette.html). Examples: `primary`, `orange`, `lime`.

``` html
<q-btn color="primary">Primary Button</q-btn>
<q-btn color="amber">Amber Button</q-btn>
```

## Other Prop Controlled CSS Class Properties
There are also the `outline`, `push`, `round`, `flat`, `rounded` props for you to use to control some design aspects of the button. 

``` html
<!-- an outlined button -->
<q-btn outline>Outlined Button</q-btn>

<!-- a rounded push button -->
<q-btn rounded push>Rounded Push Button</q-btn>
```

## Controlling the Button for Form Submission
When you have a button to submit a form's input to the server, like a "Save" button, more often than not you want to also give the user the ability to submit the form with a press of the enter key. If you would also like to give the user feedback of the saving process being in work and to also avoid them pressing the button too, you you'd need the button to show a loading spinner and be disabled from click events. The `q-btn` allows for this through the `value` prop. 

To control this loading feature, all you need is logic in your form, which sets the `v-model` of the button to true. Once it is set to true, the button reacts as if it had been pressed and displays the spinner. To stop the process, set the `v-model` value back to false.

The example below demonstrates this button control with the enter key. 

```html
<!-- a simple text field watching for the enter key release -->
<q-input v-model="test" @keyup.enter="simulateSubmit"></q-input>

<!-- a button with v-model set to submit -->
<q-btn v-model="submit" loader  @click="simulateSubmit">
  Save
  <q-spinner-facebook slot="loading"></q-spinner-facebook>
</q-btn>
```
Below is the necessary JavaScript to make the button and the loading effect work with the form input. 

```js
<script>
export default {
  data () {
    return {
      test: '',
      submit: false
    }
  },
  methods: {
    simulateSubmit () {
      this.submit = true
      setTimeout(() => { this.submit = false }, 3000)
    }
  }
}
</script>
```

## Disabling a Button
To disable the button, use the disable prop.

``` html
<q-btn color="primary" disabled>Primary Button</q-btn>
<q-btn color="amber" :disabled="switchVar">Amber Button</q-btn>
```

## Custom Spinner

If you'd like to add a different spinner than the default, you can do so by slotting in the spinner component you'd like. 

```html
<q-btn icon="mail" color="orange" @click="simulateProgress">
  <q-spinner-facebook slot="loading" size="20" />
  Get Mail
</q-btn>
```

[See the q-spinner section](components/spinners.html) of the documentation for more details.
