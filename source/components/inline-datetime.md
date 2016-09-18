title: Inline Datetime
---
Quasar provides a way to manage dates and time through Datetime pickers. An inline as well as an input component are available. To see the input version, click/tap [here](/components/datetime.html).

The iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

<input type="hidden" data-fullpage-demo="form/datetime/inline">

## Basic Usage

``` html
<!-- Only Date -->
<quasar-inline-datetime
  :model.sync="model"
  type="date"
></quasar-inline-datetime>

<!-- Only Time -->
<quasar-inline-datetime
  :model.sync="model"
  type="time"
></quasar-inline-datetime>

<!-- Date & Time -->
<quasar-inline-datetime
  :model.sync="model"
  type="datetime"
></quasar-inline-datetime>

<!-- Disabled state -->
<quasar-inline-datetime
  disable
  :model.sync="model"
  type="date"
></quasar-inline-datetime>
```

## Vue Properties & Methods

Properties:

| Vue Property | Required | Description |
| --- | --- | --- |
| `model` | Yes | Model for the Select Component. |
| `type` | Yes | One of `date`, `time` or `datetime` strings. |
| `disable` | | When set to `true` the model cannot be altered. |

Methods:

| Vue Method | Description |
| --- | --- |
| `setYear()` | Sets the year. |
| `setMonth()` | Sets the month (1-12). |
| `setDay()` | Sets day of the month. |
| `toggleAmPm()` | Toggles between AM and PM. |
| `setHour()` | Sets hour (0-23). |
| `setMinute()` | Sets minute (0-59). |
