title: Chips Input
---
The Quasar Chips Input allows user to enter a group of text items, which is also editable in the form of quick deletion of the Chips in the list.
<input type="hidden" data-fullpage-demo="forms/chips-input">

For more details on Chips used within Chips Input, please refer to its [documentation](/components/chip.html).

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Basic Usage

``` html
<q-chips v-model="model" />

<!-- Disabled -->
<q-chips v-model="model" disable />

<!-- With floating label -->
<q-chips v-model="model" float-label="Floating Label" />

<!-- With custom placeholder -->
<q-chips v-model="model" placeholder="Type some names" />

<!-- On error state -->
<q-chips v-model="model" error />
```

> The model variable must be an Array.

The user can remove a Chip by clicking/tapping on the `close` icon. Adding a Chip is done by clicking/tapping on the component, typing and then hitting the `send` icon or `<ENTER>` key. Pressing Backspace key either removes content of the textfield or if that is empty then the last Chip.

## Vue Properties
Supports `v-model` which should be binded to an Array of Strings in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `frame-color` | String | One from [Quasar Color Palette](/components/color-palette.html). See "Coloring" section. |
| `readonly` | Boolean | If readonly user can not add or remove chips. |

Common input field properties:

| Property | Type | Description |
| --- | --- | --- |
| `autofocus` | Boolean | Focus input field after rendering component. |
| `placeholder` | String | A text to be shown on textfield, mainly to explain what should be entered. |
| `name` | String | Adds a "name" attribute to the input field. |
| `max-length` | Number/String | Maximum characters allowed on input field. |
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
| `dark` | Boolean | Is QChipsInput rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within textfield. |
| `disable` | Boolean | If set to `true`, textfield is disabled and the user cannot type anything. |
| `error` | Boolean | If set to true, the input fields colors are changed to show there is an error. |
| `before` | Array of Objects | Icon buttons on left side of input frame. Read below more details. |
| `after` | Array of Objects | Icon buttons on right side of input frame. Read below more details. |

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
As you may have noticed above, there's a "color" and "frame-color" along "inverted" and "dark" properties.
By default, if you only use "color" then the input frame and Chips will share the color. If there's also a "frame-color" specified then the input frame color can differ from Chips' one.
When you want the frame inverted (color is applied to background), then specify "inverted" property.
When used on a dark background, specify "dark" property.

```html
<!-- Use a color. -->
<q-chips-input color="secondary" v-model="model" />

<!-- Use a color on inverted mode (background gets colored). -->
<q-chips-input color="secondary" v-model="model" />

<!--
  Using "frame-color" for the input frame,
  and "color" for the color of Chips.
-->
<q-chips-input color="dark" bg-color="amber" v-model="model" />

<!--
  Using "frame-color" for the input frame,
  and "color" for the color of Chips
  on inverted mode (frame-color is applied as background).
-->
<q-chips-input color="dark" bg-color="amber" v-model="model" />

<!--
  When we use the component on a dark background,
  so we specify "dark" property.
-->
<div class="bg-grey-9" style="padding: 15px">
  <q-chips-input dark color="amber" v-model="model" />
</div>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `add(value)` | Adds `value` to the model. |
| `remove(index)` | Removes value at `index` in model. |
| `focus()` | Focuses the input text field within Chips Input. |
| `select()` | Selects all textfield text and focuses. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newVal)` | Triggered on model value change. |

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
      <q-chips-input v-model="model" class="no-margin" placeholder="Type names"/>
    </q-item-main>
  </q-item>
</q-list>
```
