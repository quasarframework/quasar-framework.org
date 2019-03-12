title: Input (Textfield)
---
Quasar's Input component is the basis for text (we'll call it "Singe Line Input") and textarea (we'll call it "Multiple Line Input") form input. It can be used for regular text input, passwords, email addresses, numbers, telephone numbers, urls and auto-growing text areas.
<input type="hidden" data-fullpage-demo="forms/input">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QInput']
}
```
## Basic Usage
``` html
<!-- Single Line Input -->
<q-input v-model="text" />
<q-input v-model="text" stack-label="Stack Label" />
<q-input v-model="text" float-label="Float Label" placeholder="Gigi" />

<!-- Multiple Line Input -->
<q-input
  v-model="area"
  type="textarea"
  float-label="Textarea"
  :max-height="100"
  rows="7"
/><!-- max-height refers to pixels -->
```

## Vue Properties
Supports `v-model` which should be bound to a String or Number (depending on `type` property used) in your scope.

| Property | Type | Description |
| --- | --- | --- |
| `type` | String |  Must be one of the following: `text` (default), `textarea`, `email`, `tel`, `number`, `password`, `url` and `search`. This is important as it determines the keyboard type popping up on mobile devices. |
| `readonly` | Boolean | If set to `true`, textfield is readonly and the user cannot change value. |
| `clearable` | Boolean | If used, the component offers the user an actionable icon to reset the current value to `clear-value` (which is by default an empty string). The icon appears only when the current value matches `clear-value`. |
| `clear-value` | String | The value to which to reset the field model to when using `clearable`. The default value is an empty string. |
| `no-pass-toggle` | Boolean | If type is 'password' and set to `true`, then password toggle is not shown. |
| `initial-show-password` | Boolean | If type is 'password' and set to `true`, then password is toggled to visible by default. |
| `upper-case` | Boolean | Transform input to upper case. |
| `lower-case` | Boolean | Transform input to lower case. |

When you set type to "number", there are some additional properties that you can use:

| Property | Type | Description |
| --- | --- | --- |
| `decimals` | Number | Maximum number of decimals that should be displayed. |
| `numeric-keyboard-toggle` | Boolean | Some mobile keyboards do not allow to type the dot to compose a floating number, so this property adds an icon that when clicked/tapped it toggles the keyboard to/from an alphanumeric one. |

Also note you can use the native DOM attributes of an input: "min", "max", "step".

When you set type to "textarea", these is an additional property that you can use:

| Property | Type | Description |
| --- | --- | --- |
| `max-height` | Number | Number in pixels that determines the maximum height of textarea which auto-grows. |

There's also the native DOM attribute of a textarea: 'rows'.

Common input field properties:

| Property | Type | Description |
| --- | --- | --- |
| `autofocus` | Boolean | Focus input field after rendering component. |
| `placeholder` | String | A text to be shown on textfield, mainly to explain what should be entered. |
| `loading` | Boolean | Place the default spinner of the theme after textfield to highlight some process takes place in the background. |

Common input frame properties:

| Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | A text that should be shown before the textfield. |
| `suffix` | String | A text that should be shown after the textfield. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. Color is applied to background instead. |
| `inverted-light` | Boolean | Inverted mode with a light color. Color is applied to background instead. |
| `dark` | Boolean | Is QInput rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within textfield. |
| `disable` | Boolean | If set to `true`, textfield is disabled and the user cannot type anything. |
| `hide-underline` | Boolean | Hides the bottom border. |
| `error` | Boolean | If set to true, the input fields colors are changed to show there is an error. |
| `warning` | Boolean | Same as `error`, the input field color is changed to show there is a warning. |
| `before` | Array of Objects | Icon buttons on left side of textfield. Read below more details. |
| `after` | Array of Objects | Icon buttons on right side of textfield. Read below more details. |
| `no-parent-field` | Boolean | Avoid trying to connect to a parent QField. |

> **IMPORTANT**
> All DOM attributes that apply to a native `<input>` or `<textarea>` can be used. Example: `maxlength`, `rows`, `min`/`max`/`step`, `autocomplete` and so on.

### Icon buttons
This section refers to `before` and `after` properties which can add additional buttons as icons to the textfield. Here is the structure of the two properties:

```js
{
  // required icon
  icon: String,
  // required function to call when
  // icon is clicked/tapped
  handler: Function,

  // Optional. Show icon button
  // if textfield model has a value
  content: Boolean,

  // Optional. Show icon button
  // if condition is true
  condition: Boolean,

  // Optional. Show icon button
  // if textfield is marked with error
  error: Boolean,

  // Optional. Show icon button
  // if textfield is marked with warning
  warning: Boolean
}
```

Examples:
```html
<!--
  Show an icon button (with 'warning' as icon)
  when there is an error on QInput (through "error" prop)
-->
<q-input
  v-model="text"
  :error="error"
  type="password"
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
<q-input
  v-model="text"
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

### Labeling
QInput comes with two built-in labeling possibilities. You can use the `float-label` or the `stack-label` properties to add text for the labeling of the field. A `stack-label` is static in its position above the field, whereas the `float-label` is more dynamic. Check the examples to the right to see the difference.

```html
<q-input v-model="text" stack-label="Stack Label" placeholder="Add some text..."  />
<q-input v-model="text" float-label="Float Label"/>
```
As shown above, you can also add a placeholder to help explain to the user what type of input should be entered.

### Password Input
If you use the input type `password`, the component will hide the characters entered by the user, but it will also offer the user a clickable icon to toggle the input, to make the input legible.

``` html
<q-input v-model="text" type="password" float-label="Password" />
```

### Number Input
The below example shows a number input type.
``` html
<q-input v-model="number" type="number" float-label="Number" />
```

### Prefixes and Suffixes
You can add a text before or after the field as part of an input mask, for instance, for showing Euro or US Dollar currency.

``` html
<!-- Notice prefix property -->
<q-input v-model="number" type="number" prefix="$US" stack-label="Number" />

<!-- Notice suffix property -->
<q-input v-model="number" type="number" suffix="€" stack-label="Number" />

<!-- Notice suffix property -->
<q-input v-model="email" type="email" suffix="@gmail.com" stack-label="Type Google Email" />
```

### Error State
You can control the color to show a mistake in user input or some other systematic error. To do this set the `error` prop to true.

``` html
<q-input :error="error" v-model="text" float-label="Colored Black" color="black" />
```

If you'd like to show the user an explanatory text about the error condition, you can wrap the QInput in a QField component.

``` html
<!--
  Notice error prop is now used on wrapper QField
  instead of on QInput now
-->
<q-field :error="error" error-label="Oh buggers! You made a boo boo.">
  <q-input v-model="text" float-label="Colored with Error" color="amber"  />
</q-field>
```

Please refer to the [QField documentation](/components/field.html) for more info about its usage.

### Loading State
If, for some reason, the input requires some longer term background action or process, you can add a spinner to indicate progress by setting the `loading` prop to `true`.

``` html
<q-input :loading="loading" v-model="text" placeholder="Add some text..." />
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Clear the model. Sets it to empty String `''`. |
| `togglePass()` | Applies to type "password" only. Toggles between showing legible password or not. |
| `focus()` | Focused the textfield. |
| `blur()` | Makes textfield lose focus. |
| `select()` | Selects all textfield text and focuses. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered on immediate model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |
| `@clear(clearVal)` | Triggered when the model is cleared. |
| `@focus` | Triggered on focus. |
| `@blur` | Triggered a blur. |
| `@keydown` | Triggered by keydown event on textfield. |
| `@keyup` | Triggered by keyup event on textfield. |
| `@click` | Triggered by a native `click` event on textfield. |
| `@paste` | (v0.17.10+) Triggered by a paste event on the textfield. |

## Formatting
It is possible to add formatting to a QInput in two ways. One is for the basic component. The other is with the QField component. Both methods offer "inverted" coloring.

### Additional Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `color` | String | The color the QInput should have. The default is `primary`. |
| `inverted`| Boolean | Set to `true`, to color field's background set by the `color` prop. |
| `inverted-light`| Boolean | Set to `true`, to color field's background set by the `color` prop (when that color is light). |
| `dark` | Boolean | Set to true, if the field is on a dark background. It will invert the text color to make it light. |
| `align` | Text | Controls the 'right', 'center' or 'left' alignment of the input. The default is 'left'. |

### Basic Formatting Examples
This will color the field black.

```html
<q-input v-model="text" float-label="Colored" color="black" />
```

This will show an inverted colored input field in amber. Here, the text is automatically inverted to a lighter color.

```html
<q-input v-model="text" inverted-light color="amber" stack-label="Amber Colored Background" />
```

### Alignment
You can also align the input to the right, center or left. The default is left. The below example will show a field for Euro currency input.

```html
<!-- Align textfield content to the right -->
<q-input v-model="number" align="right" type="number" suffix="€" stack-label="Number" />
```

### Basic Usage with QField
It is also possible to further enhance a QInput by wrapping it in a [QField](/components/field.html) component.

``` html
<div class="bg-grey-9" style="width: 500px; padding: 25px">
  <q-field
    icon="wifi"
    label="Some Label"
    :count="10"
    helper="Some helper"
    :error="error"
    error-label="Some error"
  >
    <q-input
      v-model="text"
      dark
      color="yellow"
      float-label="Textfield"
    />
  </q-field>
</div>
```

The above usage of QField will show the input field within a dark grey background with an inverse white text. Notice the usage of the `dark` prop for QInput. This controls the inversion of the text color.

Please refer to the [QField documentation](/components/field.html) for more info about its usage.

## Validations with Vuelidate
Quasar's recommendation for doing form components validations is  [Vuelidate](https://vuelidate.netlify.com/) as it fits great with the overall architecture. It's simple, lightweight and **model-based**.

You need to have Vuelidate added to your project first. See [here](/components/form-validation.html).

```html
<template>
  <q-input
    type="email"
    :error="$v.email.$error"
    v-model="email"
    @blur="$v.email.$touch"
  />
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: { required, email }
  }
}
</script>
```

For more options like displaying an error label, a helper or character counter, wrap QInput with a QField. [Here](/components/field.html#Validations-with-Vuelidate) is a more involved example.

## Directive Modifiers for `v-model`

Vue comes with standard modifiers on `v-model`, which can be useful in conjunction with QInput. They are `.lazy` and `.trim`.

### `.lazy`
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-input
  :value="model"
  @change="val => { model = val }"
/>
```

### `.trim`

If you want the user's input to be trimmed automatically, you can add the `trim` modifier to your `v-model` managed inputs:

```html
<q-input v-model.trim="msg" />
```
