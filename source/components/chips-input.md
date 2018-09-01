title: Chips Input
---
The Quasar Chips Input allows user to enter a group of text items, which is also editable in the form of quick deletion of the Chips in the list.
<input type="hidden" data-fullpage-demo="forms/chips-input">

For more details on Chips used within Chips Input, please refer to its [documentation](/components/chip.html).

For autocomplete functionality, also refer to [QAutocomplete](/components/autocomplete.html) documentation.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QChipsInput']
}
```

## Basic Usage

``` html
<q-chips-input v-model="model" />

<!-- Disabled -->
<q-chips-input v-model="model" disable />

<!-- With floating label -->
<q-chips-input v-model="model" float-label="Floating Label" />

<!-- With custom placeholder -->
<q-chips-input v-model="model" placeholder="Type some names" />

<!-- On error state -->
<q-chips-input v-model="model" error />

<!-- With custom loading spinner -->
<q-chips-input v-model="model">
  <q-spinner-oval slot="loading" />
</q-chips-input>
```

> The model variable must be an Array.

The user can remove a Chip by clicking/tapping on the `close` icon. Adding a Chip is done by clicking/tapping on the component, typing and then hitting the `send` icon or `<ENTER>` key. Pressing Backspace key either removes content of the textfield or if that is empty then the last Chip.

## Vue Properties
Supports `v-model` which should be binded to an Array of Strings in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `chips-color` | String | Override default children chips text color. |
| `chips-bg-color` | String | Override default children chips background color. |
| `add-icon` | String | Override add icon (the one on the right side) to another one. |
| `readonly` | Boolean | If readonly user can not add or remove chips. |

Also note you can use the native DOM attributes of an input: "max-length", "autocomplete" and so on.

Common input field properties:

| Property | Type | Description |
| --- | --- | --- |
| `autofocus` | Boolean | Focus input field after rendering component. |
| `placeholder` | String | A text to be shown on textfield, mainly to explain what should be entered. |
| `loading` | Boolean | Place the default spinner of the theme after textfield to highlight some process takes place in the background. |

Also note you can use the native DOM attributes of an input: "name", "max-length", "autocomplete" and so on. They are applied to the native `<input>` contained by QChipsInput.

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
| `hide-underline` | Boolean | Hides the bottom border. |
| `dark` | Boolean | Is QChipsInput rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within textfield. |
| `disable` | Boolean | If set to `true`, textfield is disabled and the user cannot type anything. |
| `warning` | Boolean | If set to true, the component colors are changed to show there is a warning. |
| `error` | Boolean | If set to true, the input fields colors are changed to show there is an error. |
| `before` | Array of Objects | Icon buttons on left side of input frame. Read below more details. |
| `after` | Array of Objects | Icon buttons on right side of input frame. Read below more details. |
| `no-parent-field` | Boolean | Avoid trying to connect to a parent QField. |
| `upper-case` | Boolean | Transform input to upper case. |
| `lower-case` | Boolean | Transform input to lower case. |

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
  // if model has a value
  content: Boolean,

  // Optional. Show icon button
  // if textfield is marked with error
  error: Boolean
}
```

Examples:
```html
<q-chips-input
  v-model="model"
  color="secondary"
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
```

### Coloring
As you may have noticed above, there's a "color", "chips-color" and "chips-bg-color" along with "inverted"/"inverted-light" and "dark" properties.
By default, if you only use "color" then the input frame and Chips will share the color. If there's also a "chips-color" or "chips-bg-color" specified then the encapsulated chips' colors will be overwritten.
When you want the frame inverted (color is applied to background), then specify "inverted" property. Use "inverted-light" when the color is light.
When used on a dark background, specify "dark" property.

```html
<!-- Use a color. -->
<q-chips-input color="secondary" v-model="model" />

<!-- Use a color on inverted mode (background gets colored). -->
<q-chips-input color="secondary" v-model="model" />

<!--
  Coloring the encapsulated Chips.
-->
<q-chips-input
  color="amber"
  chips-color="yellow"
  chips-bg-color="black"
  inverted-light
  v-model="model"
/>

<!--
  When we use the component on a dark background,
  so we specify "dark" property.
-->
<div class="bg-grey-9" style="padding: 15px">
  <q-chips-input dark color="amber" v-model="model" />
</div>
```

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-chips-input
  :value="model"
  @change="val => { model = val }"
/>
```

### Autocomplete
You can use [QAutocomplete](/components/autocomplete.html) to provide the user a list of values to select from.
While the list of found values is open `<ENTER>` key will select a value from it and add it to the list.
If you want to add a value not found in the list either hit the `send` icon or press `<ESC>` key to hide the list and then the `<ENTER>` key.
```html
<q-chips-input v-model="model" placeholder="Add from list or new ones">
  <q-autocomplete @search="search" @selected="selected" />
</q-chips-input>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `add(value)` | Adds `value` to the model. |
| `remove(index)` | Removes value at `index` in model. |
| `focus()` | Focuses the input text field within Chips Input. |
| `select()` | Selects all textfield text and focuses. |
| `clear()` | Resets the model to an empty string. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered immediately on model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |
| `@clear(clearVal)` | Triggered when the model is cleared. |
| `@duplicate(val)` | Triggered when user tries to add a duplicate value. |
| `@add(val)` | Triggered when user adds a value. |
| `@remove({index, value})` | Triggered when one Chip is removed. |

## More Examples

### Wrapped with QField
```html
<q-field
  icon="account_box"
  label="Birthday"
  :count="10"
  helper="Some helper here"
>
  <q-chips-input float-label="Float Label" v-model="model" />
</q-field>
```

### Usage Inside of a List
``` html
<q-list>
  <q-item multiline>
    <q-item-side icon="edit" />
    <q-item-main>
      <q-chips-input v-model="model" placeholder="Type names"/>
    </q-item-main>
  </q-item>
</q-list>
```
