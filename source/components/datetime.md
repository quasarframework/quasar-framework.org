title: Datetime
---
The Quasar Datetime component provides a method to input dates and time or both. There are also an [Inline Datetime version](/components/inline-datetime.html) as well as a [Datetime Range](/components/datetime-range.html) version of the Datetime component.

You'll notice in the examples to the right, the iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

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
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | String, Number, Date | (**Required**) Supports the v-model of the component. |
| `type` | String | One of `date`, `time` or `datetime` strings. Default is `date`. |
| `min` | String | Minimum value it can take. Has same format as Datetime model. |
| `max` | String | Maximum value it can take. Has same format as Datetime model. |
| `label` | String | (Floating) label to use. |
| `placeholder` | String | Placeholder text to use. |
| `static-label` | String | This label stays on top of the input field. |
| `default-selection` | String, Number | Sets the initial date/time value, when  the Popover is shown and no value is given. |
| `color` | String | The [Quasar Color](/components/color-palette.html) of the datetime picker field. |
| `inverted` | Boolean | If set to `true`, it will invert the colors of the field. |
| `readonly` | Boolean | If set to `true`, the values in the modal/popup can be seen, but cannot be altered. |
| `disable` | Boolean | If set to `true`, the field is inaccessable. |
| `format24` | Boolean | Format in MomentJs style of how input displays date and/or time. |
| `monday-first` | Boolean | If set to `true`, the calendar begins on Monday. |
| `no-clear` | Boolean | If set to `true`, the clear field feature is disabled. |

## Vue Properties for the Action Buttons
| Vue Property | Type | Description |
| --- | --- | --- |
| `okLabel` | String | Text for the button to accept the input. |
| `clearLabel` | String | Text for the button to clear the field. |
| `cancelLabel` | String | Text for the button to cancel input with no change. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `open()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. |
| `close()` | Hide Popover (on desktop) and Dialog (on mobile) to select date and/or time. |
| `clear()` | Removes the set value for the field. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |
| `@blur` | Triggered, when the modal/ popup is closed. |
| `@focus` | Triggered, when the modal/ popup is opened. |

## The Model
Quasar uses its own date utility to work with date values within the model of the component (value prop). 

> **IMPORTANT**
> The value prop (the model) must either be empty (undefined) or a string in the form of a valid ISO 8601 datetime value, like `2016-10-24T10:40:14.674Z`. It can also be a shorter derivative of this string, like `2016-10-24` or `2016-10-24T10:40`. The value can also be a Unix Timestamp (including milliseconds), like `1477298414674`.

For more information about how Quasar works with dates, please refer to the [Handling JS Dates documentation](/components/handling-js-date.html).

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
      model: undefined, // empty value
      // ...
    }
  },
  // ...
}
</script>

// Or...

// ....
<template>
  <q-datetime v-model="model" type="datetime" />
</template>

<script>
// ....
export default {
  data () {
    return {
      model: 1477298414674, // Unix Timestamp with milliseconds
      // ...
    }
  },
  // ...
}
</script>

// Or...

// ....
<template>
  <q-datetime v-model="model" type="datetime" />
</template>

<script>
// ....
export default {
  data () {10
    return {
      model: '2016-10-24T10:40:14.674Z', // full ISO 8601 compliant value 
      // ...
    }
  },
  // ...
}
</script>

// Or for just dates...

// ....
<template>
  <q-datetime v-model="model" type="date" />
</template>

<script>
// ....
export default {
  data () {
    return {
      model: `2016-10-24`, // Any dirivative of a valid ISO 8601 datetime value will
                           // also work, like '2016-10-24T10:40:14'
      // ...
    }
  },
  // ...
}
</script>

// Or for just time...

// ...
<template>
  <q-datetime v-model="model" type="time" />
</template>

<script>
// ....
export default {
  data () {
    return {
      model: `2016-10-24T10:40`, // For an ISO 8601 value, the time must be included
                                 // A Unix Timestamp will also work.
      // ...
    }
  },
  // ...
}
</script>
```
### Error State
Use the `error` prop, if you'd like for the component to turn red:
``` html
<q-datetime error v-model="model" type="datetime" />
```
### Read Only State
Use the `readonly` prop, to set the component to a read only state. The user may click on the field and will get the modal/popup, but won't be able to change the values.
``` html
<q-datetime readonly v-model="model" type="datetime" />
```

### Disabled
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

Use the `color` and `inverse` props to control the radio's color.
```html
<q-datetime color="amber" float-label="Float Label" v-model="model" type="date" />

<q-datetime inverted color="primary" float-label="Float Label" v-model="model" type="date" />
```

## Inside of a List Usage

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
