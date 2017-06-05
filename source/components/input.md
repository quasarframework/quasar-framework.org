title: Quasar Input Textbox
---

Quasar's Input component is the basis for text and text area form input. It can be used for regular text input, passwords, email addresses, any type of numbers, like telephone numbers, for urls and text areas. We'll go over the single line input types first. Then we'll go over formatting the component and lastly, we'll cover the text area input type. 
 
<input type="hidden" data-fullpage-demo="form/text-input/textbox">

## Single Line Input - Basic Usage
``` html
<q-input v-model="text" />
<q-input v-model="text" stack-label="Stack Label" />
<q-input v-model="text" float-label="Float Label" placeholder="Gigi" />
```

### Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `value` | String | **Required** The v-model of your component. |
| `type` | String |  Must be one of the following - `text`(default), `textarea`, `email`, `tel`, `file`, `number`, `password` and `url`. This is important for the keyboard type for mobile devices. |
| `clearable` | Boolean | If set to true, the component offers the user an actionable icon to remove the entered text. |
| `disabled` | Boolean | If set to true, the input field is disabled and the user cannot enter anything. |
| `name` | String | Name of the icon, should one be shown next to the input. |
| `placeholder` | String | A text to be shown in the input field, mainly to explain what should be entered. For instance, for a password you might have `Enter your password...` |
| `loading` | Boolean | If set to true, then a loading spinner will be visible. |
| `prefix` | String | A text that should be shown in front of the input. |
| `suffix` | String | A text that should be shown behind of the input. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `error` | Boolean | If set to true, the input fields colors are changed to show there is an error.  | 


### Labeling 

The `q-input` component comes with two built-in labeling possibilities. You can use the `float-label` or the `stack-label` properties to add text for the labeling of the field. A `stack-label` is static in its position above the field, whereas the `fload-label` is more dynamic. Check the examples to the right to see the difference. 

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
<q-input v-model="number" type="number" prefix="$US" stack-label="Number" />

<q-input v-model="number" type="number" suffix="€" stack-label="Number" />
```

### Error State
You can control the color to show a mistake in user input or some other systematic error. To do this set the `error` prop to true.

``` html
<q-input v-model="text" float-label="Colored Black" color="black" :error="error" />
```

If you'd like to show the user an explanatory text about the error condition, you can wrap the `q-input` component in a `q-field` component. 

``` html
<q-field :error="error" error-label="Oh buggers! You made a boo boo.">
  <q-input v-model="text" float-label="Colored with Error" color="amber"  />
</q-field>

```
Please refer to the [q-field component documentation](/components/field.html) for more info about its usage. 

### Loading State
If, for some reason, the input requires some longer term background action or process, you can add a spinner to indicate progress by setting the `loading` prop to true. 

``` html
<q-input :loading="loading" v-model="text" placeholder="Add some text..." />
```

## Formatting
It is possible to add formatting to a `q-input` component in two ways. One is for the basic component. The other is with the `q-field` component. Both methods offer "inverted" coloring.

### Additional Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `color` | String | The color the `q-input` should have. The default is `primary`. |
| `inverted`| Boolean | Set to true, to color the field's background set by the `color` prop. | 
| `dark` | Boolean | Set to true, if the field is on a dark background. It will invert the text color to make it light. | 
| `align` | Text | Controls the right, center or left alignment of the input. The default is left. |

### Basic Formatting Examples
This will color the field black.

```htnl
<q-input v-model="text" float-label="Colored" color="black" />
```

This will show an inverted colored input field in amber. Here, the text is automatically inverted to a lighter color. 

```hmtl
<q-input v-model="text" inverted stack-label="Amber Colored Background" color="amber" />

```
### Alignment
You can also align the input to the right, center or left. The default is left. The below example will show a field for Euro currency input.

```hmtl
<q-input v-model="number" type="number" suffix="€" stack-label="Number" />  
```
### Basic Usage with `q-field`

It is also possible to further enhance a `q-input` component by wrapping it in a [q-field component](/components/field.html).

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

The above usage of `q-field` will show the input field within a dark grey background with an inverse white text. Notice the usage of the `dark` prop for `q-input`. This controls the inversion of the text color. 

Please refer to the [q-field component documentation](/components/field.html) for more info about its usage. 

## Text Area - Basic Usage
The `q-input` component can also be used for text areas. 

```html
<q-input v-model="area" type="textarea" float-label="Textarea" :max-height="100" :min-rows="7" />
```
### Additional Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `max-height` | Number | The maximum number of pixels the text area input  should be in height. |
| `min-rows` | Number | The minimum number of rows the text area should initially show. |

The text area `q-input` component type can also be wrapped by a `q-field` component. Please refer to the [q-field component documentation](/components/field.html) for more info about its usage. 

## Vue Modifiers for `v-model`

Vue comes with standard modifiers on `v-model`, which can be useful in conjunction with `q-input`. They are `.lazy` and `.trim`.

### `.lazy`

By default, `v-model` syncs the input with the data after each `input` event. You can add the `lazy` modifier to instead sync after `change` events:

``` html
<!-- synced after "change" instead of "input" -->
<q-input v-model.lazy="msg">
```

### `.trim`

If you want the user's input to be trimmed automatically, you can add the `trim` modifier to your `v-model` managed inputs:

```html
<q-input v-model.trim="msg">
```
