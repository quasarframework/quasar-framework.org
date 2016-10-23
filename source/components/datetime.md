title: Datetime
---
Quasar provides a way to manage dates and time through Datetime pickers. An inline as well as an input component are available. To see the inline version, click/tap [here](/components/inline-datetime.html).

The iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

<input type="hidden" data-fullpage-demo="form/datetime/input">

## Basic Usage

``` html
<!-- Only Date -->
<quasar-datetime
  v-model="model"
  type="date"
></quasar-datetime>

<!-- Only Time -->
<quasar-datetime
  v-model="model"
  type="time"
></quasar-datetime>

<!-- Date & Time -->
<quasar-datetime
  v-model="model"
  type="datetime"
></quasar-datetime>

<!-- Disabled state -->
<quasar-datetime
  disable
  v-model="model"
  type="date"
></quasar-datetime>
```

## Vue Properties
| Vue Property | Required | Description |
| --- | --- | --- |
| `type` | Yes | One of `date`, `time` or `datetime` strings. |
| `format` | | Format in MomentJs style of how input displays date and/or time. |
| `okLabel` | | Label for "OK" button on mobile Dialog. |
| `cancelLabel` | | Label for "Cancel" button on mobile Dialog. |
| `disable` | | When set to `true` the model cannot be altered. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `open()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. |
| `close()` | Hide Popover (on desktop) and Dialog (on mobile) to select date and/or time. |

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
        v-model="model"
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
        v-model="model"
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
        v-model="model"
      ></quasar-datetime>
    </div>
  </div>
</div>
```
