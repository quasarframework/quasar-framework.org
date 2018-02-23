title: Datetime Input
---
The Datetime component provides a method to input dates and time or both. There is also one more version available: [Datetime Picker](/components/datetime-picker.html).
<input type="hidden" data-fullpage-demo="forms/datetime/datetime-input">

You'll notice in the demos that the iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QDatetime']
}
```

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
| `clearable` | Boolean | If set to `true`, the component offers the user an actionable icon to remove the current selection. |
| `readonly` | Boolean | If set to `true`, component is displayed as read-only. |
| `min` | String | Optional minimum value it can take. Has same format as Datetime model. |
| `max` | String | Optional maximum value it can take. Has same format as Datetime model. |
| `default-view` | String | One of 'year', 'month', 'day', 'hour', 'minute'. |
| `default-value` | String/Number/Date | Default date/time for picker when model is not yet set. |
| `display-value` | String | Text to display on input frame. Supersedes 'placeholder'. |
| `first-day-of-week` | Number | 0-6, 0 - Sunday, 1 Monday, .... |
| `hide-underline` | Boolean | Hides the bottom border. |
| `popover` | Boolean | Always display with a Popover, regardless of Platform. |
| `modal` | Boolean | Always display with a Modal, regardless of Platform. |
| `format` | String | Format as described on Handling JS Date page under [Format for display](/components/handling-js-date.html#Format-for-display) section. |
| `format-model` | String | Data type of model (useful especially when starting out with undefined or null). One of 'auto', 'date', 'number', 'string'. |
| `format24h` | Boolean | Override default i18n setting. Use 24 hour time for Material picker instead of AM/PM system which is default. |
| `placeholder` | String | Placeholder text for input frame to use when model is not set (empty). |
| `ok-label` | String | Text for the button to accept the input (when using Modal). |
| `cancel-label` | String | Text for the button to cancel input with no change (when using Modal). |

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

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-datetime
  type="date"
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
<q-datetime
  v-model="date"
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
| `show()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. Returns a Promise. |
| `hide()` | Hide Popover (on desktop) and Dialog (on mobile) to select date and/or time and execute Function after it's been hidden. Returns a Promise. |
| `toggle()` | Toggle the Popover or Modal. |
| `clear()` | Sets model to empty string (removes current value). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered on immediate model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |
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

### Coloring
Use the `color` and `inverted`/`inverted-light` props to control the color.
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
      <q-datetime v-model="model" type="time" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="update" />
    <q-item-main>
      <q-datetime v-model="model" type="date" />
    </q-item-main>
  </q-item>
  <q-item-separator />
  <q-list-header>Date & Time</q-list-header>
  <q-item>
    <q-item-side icon="notifications" />
    <q-item-main>
      <q-datetime v-model="model" type="datetime" />
    </q-item-main>
  </q-item>
</q-list>
```
