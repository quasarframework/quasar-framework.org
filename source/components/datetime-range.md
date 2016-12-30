title: Datetime Range
---

When you need to specify a date, time or datetime interval, use DatetimeRange component.
Before diving in, make sure you know how to configure a [Datetime component](/components/datetime.html) as this one supports the exactly same properties.

<input type="hidden" data-fullpage-demo="form/datetime/range">

## Basic Usage
``` html
<!-- Date Range -->
<q-datetime-range
  type="date"
  v-model="range"
  :min="min"
  :max="max"
></q-datetime>

<!-- Time Range -->
<q-datetime-range
  type="time"
  v-model="range"
  :min="min"
  :max="max"
></q-datetime>

<!-- Datetime Range -->
<q-datetime-range
  type="datetime"
  v-model="range"
  :min="min"
  :max="max"
></q-datetime>
```

## Vue Properties
Following properties are optional.

| Vue Property | Description |
| --- | --- | --- |
| `type` | One of `date`, `time` or `datetime` strings. |
| `min` | Minimum datetime at which selection can start. |
| `max` | Maximum datetime at which selection can stop. |
| `format` | Format in MomentJs style of how input displays date and/or time. |
| `ok-label` | Label for "OK" button on mobile Dialog. |
| `cancel-label` | Label for "Cancel" button on mobile Dialog. |
| `label` | (Floating) label to use. |
| `placeholder` | Placeholder text to use. |
| `static-label` | Overrides `label` and `placeholder` and selected value. Display this label always regardless of selection status. |
| `readonly` | When set to `true` the model cannot be altered. |
| `disable` | When set to `true` the model cannot be altered. |

> The model needs to be an Object with `{to, from}` String properties, same as the model used for Datetime component.

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered when model (Object with `to` and `from` props) changes |
