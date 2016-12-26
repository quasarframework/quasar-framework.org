title: Inline Datetime
---
Quasar provides a way to manage dates and time through Datetime pickers. An inline as well as an input component are available. To see the input version, click/tap [here](/components/datetime.html).

The iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

<input type="hidden" data-fullpage-demo="form/datetime/inline">

## Basic Usage

``` html
<!-- Only Date -->
<q-inline-datetime
  v-model="model"
  type="date"
></q-inline-datetime>

<!-- Only Time -->
<q-inline-datetime
  v-model="model"
  type="time"
></q-inline-datetime>

<!-- Date & Time -->
<q-inline-datetime
  v-model="model"
  type="datetime"
></q-inline-datetime>

<!-- Disabled state -->
<q-inline-datetime
  disable
  v-model="model"
  type="date"
></q-inline-datetime>
```

> **IMPORTANT**
> Model must be either an empty string (unfilled state) or a string of form `2016-10-24T10:40:14.674Z`.

### Error State
Add `has-error` CSS class:
``` html
<q-dinline-atetime
  class="has-error"
  v-model="model"
  type="time"
></q-inline-datetime>
```

## Vue Properties
| Vue Property | Description |
| --- | --- | --- |
| `type` | (**Required**) One of `date`, `time` or `datetime` strings. |
| `min` | String; Minimum value it can take. Has same format as Datetime model. |
| `max` | String; Maximum value it can take. Has same format as Datetime model. |
| `readonly` | When set to `true` the model cannot be altered. |
| `disable` | When set to `true` the model cannot be altered. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `setYear()` | Sets the year. |
| `setMonth()` | Sets the month (1-12). |
| `setDay()` | Sets day of the month. |
| `toggleAmPm()` | Toggles between AM and PM. |
| `setHour()` | Sets hour (0-23). |
| `setMinute()` | Sets minute (0-59). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |
