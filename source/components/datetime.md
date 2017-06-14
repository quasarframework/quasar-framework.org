title: Datetime
---
The Datetime component provides a method to input dates and time or both. There are also two more version available: [Inline Datetime](/components/inline-datetime.html) and [Datetime Range](/components/datetime-range.html).

You'll notice in the demos that the iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

<input type="hidden" data-fullpage-demo="form/datetime/input">

## Basic Usage

``` html
<!-- Only Date -->
<q-datetime v-model="model" type="date" />

<!-- Only Time -->
<q-datetime v-model="model" type="time" />

<!-- Date & Time -->
<q-datetime v-model="model" type="datetime" />
```

## Vue Properties
Supports `v-model` which must be a String, Number or Date Object.

| Vue Property | Type | Description |
| --- | --- | --- |
| `type` | String | One of `date`, `time` or `datetime`. Default is `date`. |
| `min` | String | Optional minimum value it can take. Has same format as Datetime model. |
| `max` | String | Optional maximum value it can take. Has same format as Datetime model. |
| `month-names` | Array | Array of month names, starting with January. |
| `day-names` | Array | Array of day names, starting with Sunday, Monday, ... |
| `default-selection` | String/Number/Date | Default date/time for picker when model is not yet set. |
| `monday-first` | Boolean | Use Monday as first day of week. Otherwise it's Sunday. |
| `format` | String | Format as described on Handling JS Date page under [Format for display](/components/handling-js-date.html#Format-for-display) section. |
| `format24h` | Boolean | Use 24 hour time for Material picker instead of AM/PM system which is default. |
| `placeholder` | String | Placeholder text to use. |
| `no-clear` | Boolean | If set to `true`, the clear button won't be shown. |
| `ok-label` | String | Text for the button to accept the input. |
| `clear-label` | String | Text for the button to clear the field. |
| `cancel-label` | String | Text for the button to cancel input with no change. |

Common input frame properties:

| Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | A text that should be shown before the textfield. |
| `suffix` | String | A text that should be shown after the textfield. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. Color is applied to background instead. |
| `dark` | Boolean | Is QDatetime rendered on a dark background? |
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
<!--
  Show an icon button (with 'warning' as icon)
  when there is an error on QDatetime (through "error" prop)
-->
<q-datetime
  v-model="date"
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
<q-datetime
  v-model="date"
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
| `open()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. |
| `close([Function])` | Hide Popover (on desktop) and Dialog (on mobile) to select date and/or time and execute Function after it's been hidden. |
| `clear()` | Sets model to empty string (removes current value). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newValue)` | Triggered on model value change. |
| `@blur` | Triggered, when the modal/ popup is closed. |
| `@focus` | Triggered, when the modal/ popup is opened. |

## The Model
Quasar uses its own date utility to work with date values within the model of the component.

> **IMPORTANT**
> The model (variable binded to `v-model`) must either be empty (undefined) or a string in the form of a valid ISO 8601 datetime value, like `2016-10-24T10:40:14.674Z`. It can also be a shorter derivative of this string, like `2016-10-24` or `2016-10-24T10:40`. The value can also be a Unix Timestamp (including milliseconds), like `1477298414674`. Last but not least, it can also be an instance of the Javascript Date Object, like `new Date()`.

For more information about how Quasar works with dates, please refer to the [Handling JS Date](/components/handling-js-date.html) documentation page.

Here are a few examples of setting up the value prop:

```html
<template>
  <q-datetime v-model="model" type="datetime" />
</template>

<script>
// ....
export default {
  data () {
    return {
      model: undefined // empty value
      // OR
      model: new Date() // as in "right this moment"
      // OR
      model: 1477298414674 // Unix Timestamp with milliseconds
      // OR
      model: '2016-10-24T10:40:14.674Z' // full ISO 8601 compliant value
      // OR
      model: `2016-10-24` // Any dirivative of a valid ISO 8601 datetime value will
                          // also work, like '2016-10-24T10:40:14'
      // OR
      model: `2016-10-24T10:40`, // For an ISO 8601 value, the time must be included
                                 // A Unix Timestamp will also work.
    }
  },
  // ...
}
</script>
```

## More Examples

### Error State
Use the `error` prop, if you'd like for the component to turn red:
``` html
<q-datetime :error="hasError" v-model="model" type="datetime" />
```

### Disabled State
Use the `disable` prop to completely disable the field.
``` html
<q-datetime disable v-model="model" type="datetime" />
```

### 24h Mode
Sometimes, the locale of your user will be one where 24h formatting is needed. Use the `format24h` prop for this purpose.
```html
<q-datetime format24h v-model="model" type="time" />
```

### Coloring
Use the `color` and `inverse` props to control the color.
```html
<q-datetime
  color="amber-7"
  float-label="Float Label"
  v-model="model"
  type="date"
/>

<q-datetime
  inverted
  color="primary"
  float-label="Float Label"
  v-model="model"
  type="date"
/>
```
Also, if QDatetime is displayed on a dark background, add the `dark` property.
```html
<q-datetime dark color="secondary" />
```

### Usage Inside of a List

``` html
<q-list>
  <q-list-header>Date or Time</q-list-header>
  <q-item>
    <q-item-side icon="access_time" />
    <q-item-main>
      <q-datetime class="no-margin" v-model="model" type="time" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="update" />
    <q-item-main>
      <q-datetime class="no-margin" v-model="model" type="date" />
    </q-item-main>
  </q-item>
  <q-item-delimiter />
  <q-list-header>Date & Time</q-list-header>
  <q-item>
    <q-item-side icon="notifications" />
    <q-item-main>
      <q-datetime class="no-margin" v-model="model" type="datetime" />
    </q-item-main>
  </q-item>
</q-list>
```
