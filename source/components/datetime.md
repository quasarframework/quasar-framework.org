title: Datetime
---
Quasar provides a way to manage dates and time through Datetime pickers. An inline as well as an input component are available. To see the inline version, click/tap [here](/components/inline-datetime.html).

The iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

<input type="hidden" data-fullpage-demo="form/datetime/input">

## Basic Usage

``` html
<!-- Only Date -->
<quasar-datetime
  :model.sync="model"
  type="date"
></quasar-datetime>

<!-- Only Time -->
<quasar-datetime
  :model.sync="model"
  type="time"
></quasar-datetime>

<!-- Date & Time -->
<quasar-datetime
  :model.sync="model"
  type="datetime"
></quasar-datetime>

<!-- Disabled state -->
<quasar-datetime
  disable
  :model.sync="model"
  type="date"
></quasar-datetime>
```

## Vue Properties & Methods

Properties:

| Vue Property | Required | Description |
| --- | --- | --- |
| `model` | Yes | Model for the Select Component. |
| `type` | Yes | One of `date`, `time` or `datetime` strings. |
| `format` | | Format in MomentJs style of how input displays date and/or time. |
| `okLabel` | | Label for "OK" button on mobile Dialog. |
| `cancelLabel` | | Label for "Cancel" button on mobile Dialog. |
| `disable` | | When set to `true` the model cannot be altered. |

Methods:

| Vue Method | Description |
| --- | --- |
| `pick()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. |

## Inside of a List Usage

``` html
<div class="list">
  <!-- Time only -->
  <div class="item multiple-lines">
    <i class="item-primary">access_time</i>
    <div class="item-content">
      <quasar-datetime
        class="full-width"
        type="time"
        :model.sync="model"
      ></quasar-datetime>
    </div>
  </div>

  <!-- Date only -->
  <div class="item multiple-lines">
    <i class="item-primary">update</i>
    <div class="item-content row items-baseline">
      <quasar-datetime
        class="full-width"
        type="date"
        :model.sync="model"
      ></quasar-datetime>
    </div>
  </div>

  <!-- Date and Time -->
  <div class="item multiple-lines">
    <i class="item-primary">notifications</i>
    <div class="item-content row items-baseline">
      <quasar-datetime
        class="full-width"
        type="datetime"
        :model.sync="model"
      ></quasar-datetime>
    </div>
  </div>
</div>
```
