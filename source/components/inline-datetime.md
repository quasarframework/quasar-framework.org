title: Inline Datetime
---
The Quasar Inline Datetime component provides a method to input dates and time or both and is shown directly on the page or element you are dispaying. There are also a [Datetime field version](/components/datetime.html), which also uses a modal/popup, as well as a [Datetime Range](/components/datetime-range.html) version.

You'll notice in the examples to the right, the iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

<input type="hidden" data-fullpage-demo="form/datetime/inline">

## Basic Usage

``` html
<q-inline-datetime v-model="model" type="date" />

<!-- Only Time -->
<q-inline-datetime v-model="model" type="time" />

<!-- Date & Time -->
<q-inline-datetime v-model="model" type="datetime" />

<!-- Date - Monday as first day of week -->
<q-inline-datetime v-model="model" monday-first type="date" />

<!-- Disabled State -->
<q-inline-datetime disable v-model="model" type="datetime" />

<!-- Readonly State -->
<q-inline-datetime readonly v-model="model" type="datetime" />

<!-- Min & Max -->
<q-inline-datetime type="datetime" v-model="minMaxModel" :min="min" :max="max" />

<!-- Specific color -->
<q-inline-datetime color="secondary" v-model="model" type="datetime" />

<!-- Time 24hr Format -->
<q-inline-datetime v-model="model" type="time" format24h />
```

## Vue Properties
Supports `v-model` which must be a String, Number or Date Object. Please refer to the [Datetime component](/components/datetime.html) for detailed information regarding the model that must be used.

| Vue Property | Type | Description |
| --- | --- | --- |
| `type` | String | One of `date`, `time` or `datetime`. Default is `date`. |
| `min` | String | Optional minimum value it can take. Has same format as Datetime model. |
| `max` | String | Optional maximum value it can take. Has same format as Datetime model. |
| `color` | String | One from [Color Palette](/components/color-palette.html). |
| `month-names` | Array | Array of month names, starting with January. |
| `day-names` | Array | Array of day names, starting with Sunday, Monday, ... |
| `default-selection` | String/Number/Date | Default date/time for picker when model is not yet set. |
| `monday-first` | Boolean | Use Monday as first day of week. Otherwise it's Sunday. |
| `format24h` | Boolean | Use 24 hour time for Material picker instead of AM/PM system which is default. |
| `disable` | Boolean | If set to `true`, the field is inaccessable. |
| `readonly` | Boolean | If set to `true`, the component is readonly. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Sets model to empty string (removes current value). |
| `toggleAmPm()` | Toggle between AM - PM. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newValue)` | Triggered on model value change. |
