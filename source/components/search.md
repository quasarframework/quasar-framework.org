title: Search (Textfield)
---
The Search component offers the users an input field with additional features for searching purposes. For autocomplete functionality, also refer to [QAutocomplete](/components/autocomplete.html) documentation.

<input type="hidden" data-fullpage-demo="form/search">

## Basic Usage

```html
<q-search v-model="search" />
```

## Vue Properties
Supports `v-model` which should be binded to a String or Number (depending on `type` property used) in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `icon` | String | Icon to use. |
| `placeholder` | String | Text to use as a placeholder. |
| `type` | String |  Must be one of the following: `text` (default), `email`, `tel`, `number` and `url`. This is important as it determines the keyboard type popping up on mobile devices. |
| `debounce` | Number | Number of ms to debounce input. Default is 300. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `prefix` | String | A text that should be shown before the textfield. |
| `suffix` | String | A text that should be shown after the textfield. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. Color is applied to background instead. |
| `dark` | Boolean | Is QInput rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within textfield. |
| `autofocus` | Boolean | Focus textfield after rendering QInput. |
| `max-length` | Number/String | Maximum characters allowed on textfield. |
| `placeholder` | String | A text to be shown on textfield, mainly to explain what should be entered. For instance, for a password you might have `Enter your password...` |
| `error` | Boolean | If set to `true`, the component is changed to red to indicate a problem. |
| `disable` | Boolean | When set to `true` user can not change model value. |

A more involved example:
``` html
<q-search
  v-model="searchModel"
  :debounce="600"
  placeholder="Hotels"
  icon="local_hotel"
  float-label="What is your hotel?"
/>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Resets the model to an empty string. |
| `clearAndFocus()` | Resets the model to an empty string and gives the input focus. |
| `focus()` | Focused the textfield. |
| `blur()` | Makes textfield lose focus. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |
| `@focus` | Triggered on focus. |
| `@blur` | Triggered a blur. |
| `@keydown` | Triggered by keydown event on textfield. |
| `@keyup` | Triggered by keyup event on textfield. |
| `@click` | Triggered by a native `click` event on textfield. |

### Coloring
Use the `color` prop with one of the Quasar colors from the [Color Palette](/components/color-palette.html), like `primary`, `secondary`, `orange-7`, `teal-2`:

``` html
<q-search color="orange" v-model="search" />
```
Use the `inverted` prop, to change the background of the input to the color.

``` html
<q-search inverted color="orange" v-model="search" />
```
### Error State
Use the `error` prop to show there has been an error. This will turn the component color to red.
``` html
<q-search error v-model="search" />
<q-search :error="hasError" inverted v-model="search" />
```

### Disable
Use the `disable` prop to stop user input.
``` html
<q-search disable v-model="search" color="primary" />
```

## Usage with Layout
If you'd like to set search within a QToolbar on QLayout:
``` html
<q-layout>
  ...
  <!--
    Notice we set a color for QToolbar and
    QSearch has "inverted" and color="none" specified.
    This makes QSearch use background color set by QToolbar.
  -->
  <q-toolbar slot="header" color="primary">
    <q-search inverted color="none" v-model="search" />
  </q-toolbar>
  ...
</q-layout>
```

## Formatting
It is possible to add formatting to a QSearch in two ways. One is for the basic component. The other is with the QField component. Both methods offer "inverted" coloring.

### Additional Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `color` | String | The color the QInput should have. The default is `primary`. |
| `inverted`| Boolean | Set to `true`, to color field's background set by the `color` prop. |
| `dark` | Boolean | Set to true, if the field is on a dark background. It will invert the text color to make it light. |
| `align` | Text | Controls the 'right', 'center' or 'left' alignment of the input. The default is 'left'. |

### Basic Formatting Examples
This will color the field black.

```html
<q-search v-model="text" float-label="Colored" color="black" />
```

This will show an inverted colored input field in amber. Here, the text is automatically inverted to a lighter color.

```html
<q-search v-model="text" inverted color="amber" stack-label="Amber Colored Background" />
```

### Alignment
You can also align the input to the right, center or left. The default is left. The below example will show a field for Euro currency input.

```html
<!-- Align textfield content to the right -->
<q-search v-model="text" align="right" />  
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
    <q-search
      v-model="text"
      dark
      inverted
      color="black"
      float-label="Textfield"
    />
  </q-field>
</div>
```

The above usage of QField will show the input field within a dark grey background with an inverse white text. Notice the usage of the `dark` prop for QInput. This controls the inversion of the text color.

Please refer to the [QField documentation](/components/field.html) for more info about its usage.
