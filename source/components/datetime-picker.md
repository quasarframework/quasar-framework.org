title: Datetime Picker
---
The DatetimePicker component provides a method to input dates and time or both. There is also one more version available: [Datetime Input](/components/datetime-input.html).
<input type="hidden" data-fullpage-demo="forms/datetime/datetime-picker">

You'll notice in the demos that the iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QDatetimePicker']
}
```

## Basic Usage

``` html
<!-- Only Date -->
<q-datetime-picker v-model="model" type="date" />

<!-- Only Time -->
<q-datetime-picker v-model="model" type="time" />

<!-- Date & Time -->
<q-datetime-picker v-model="model" type="datetime" />
```

## Internationalization
The day and month names are taken care of by default through [Quasar I18n](/components/internationalization.html). If your desired language pack is missing, please provide a PR for it.

## Vue Properties
Supports `v-model` which must be a String, Number or Date Object.

| Vue Property | Type | Description |
| --- | --- | --- |
| `type` | String | One of `date`, `time` or `datetime`. Default is `date`. |
| `readonly` | Boolean | If set to `true`, component is displayed as read-only. |
| `disable` | Boolean | If set to `true`, component is disabled and the user cannot change model. |
| `minimal` | Boolean | (v0.15.9+) Don't display header. |
| `min` | String | Optional minimum value it can take. Has same format as Datetime model. |
| `max` | String | Optional maximum value it can take. Has same format as Datetime model. |
| `default-view` | String | One of 'year', 'month', 'day', 'hour', 'minute'. |
| `default-value` | String/Number/Date | Default date/time for picker when model is not yet set. |
| `display-value` | String | Text to display on input frame. Supersedes 'placeholder'. |
| `first-day-of-week` | Number | 0-6, 0 - Sunday, 1 Monday, .... |
| `format-model` | String | Data type of model (useful especially when starting out with undefined or null). One of 'auto', 'date', 'number', 'string'. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `dark` | Boolean | Is component rendered on a dark background? |
| `format24h` | Boolean | Override default i18n setting. Use 24 hour time for Material picker instead of AM/PM system which is default. |
| `no-parent-field` | Boolean | Avoid trying to connect to a parent QField. |

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-datetime-picker
  type="date"
  :value="model"
  @change="val => { model = val }"
/>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `setYear(val)` | Sets year. |
| `setMonth(val)` | Sets month. |
| `setDay(val)` | Sets day. |
| `setHour(val)` | Sets hour. |
| `setMinute(val)` | Sets minute. |
| `setView(val)` | Sets view. One of 'year', 'month', 'day', 'hour', 'minute'. Notice that depending of `type` prop, some may not be available. |
| `clear()` | Sets model to empty string (removes current value). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered on immediate model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |

## The Model
Quasar uses its own date utility to work with date values within the model of the component.

> **IMPORTANT**
> The model (variable binded to `v-model`) must either be empty (undefined) or a string in the form of a valid ISO 8601 datetime value, like `2016-10-24T10:40:14.674Z`. It can also be a shorter derivative of this string, like `2016-10-24` or `2016-10-24T10:40`. The value can also be a Unix Timestamp (including milliseconds), like `1477298414674`. Last but not least, it can also be an instance of the Javascript Date Object, like `new Date()`.

For more information about how Quasar works with dates, please refer to the [Handling JS Date](/components/date-utils.html) documentation page.

Here are a few examples of setting up the value prop:

```html
<template>
  <q-datetime-picker v-model="model" type="datetime" />
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
<q-datetime-picker dark color="secondary" />
```

### Usage Inside of a List

``` html
<q-list>
  <q-list-header>Date or Time</q-list-header>
  <q-item>
    <q-item-side icon="access_time" />
    <q-item-main>
      <q-datetime-picker v-model="model" type="time" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="update" />
    <q-item-main>
      <q-datetime-picker v-model="model" type="date" />
    </q-item-main>
  </q-item>
  <q-item-separator />
  <q-list-header>Date & Time</q-list-header>
  <q-item>
    <q-item-side icon="notifications" />
    <q-item-main>
      <q-datetime-picker v-model="model" type="datetime" />
    </q-item-main>
  </q-item>
</q-list>
```
