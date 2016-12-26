title: Datetime
---
Quasar provides a way to manage dates and time through Datetime pickers. An inline as well as an input component are available. To see the inline version, click/tap [here](/components/inline-datetime.html).

The iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

<input type="hidden" data-fullpage-demo="form/datetime/input">

## Basic Usage

``` html
<!-- Only Date -->
<q-datetime
  v-model="model"
  type="date"
></q-datetime>

<!-- Only Time -->
<q-datetime
  v-model="model"
  type="time"
></q-datetime>

<!-- Date & Time -->
<q-datetime
  v-model="model"
  type="datetime"
></q-datetime>

<!-- Disabled state -->
<q-datetime
  disable
  v-model="model"
  type="date"
></q-datetime>
```

> **IMPORTANT**
> Model must be either an empty string (unfilled state) or a string of form `2016-10-24T10:40:14.674Z`.

### Error State
Add `has-error` CSS class:
``` html
<q-datetime
  class="has-error"
  v-model="model"
  type="time"
></q-datetime>
```

## Vue Properties
| Vue Property | Description |
| --- | --- | --- |
| `type` | (**Required**) One of `date`, `time` or `datetime` strings. |
| `format` | Format in MomentJs style of how input displays date and/or time. |
| `okLabel` | Label for "OK" button on mobile Dialog. |
| `cancelLabel` | Label for "Cancel" button on mobile Dialog. |
| `min` | String; Minimum value it can take. Has same format as Datetime model. |
| `max` | String; Maximum value it can take. Has same format as Datetime model. |
| `label` | (Floating) label to use. |
| `placeholder` | Placeholder text to use. |
| `static-label` | | Overrides `label` and `placeholder` and selected value. Display this label always regardless of selection status. |
| `readonly` | When set to `true` the model cannot be altered. |
| `disable` | When set to `true` the model cannot be altered. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `open()` | Show Popover (on desktop) and Dialog (on mobile) to select date and/or time. |
| `close()` | Hide Popover (on desktop) and Dialog (on mobile) to select date and/or time. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |

## Inside of a List Usage

``` html
<div class="list">
  <!-- Time only -->
  <div class="item multiple-lines">
    <i class="item-primary">access_time</i>
    <div class="item-content">
      <q-datetime
        class="full-width"
        type="time"
        v-model="model"
      ></q-datetime>
    </div>
  </div>

  <!-- Date only -->
  <div class="item multiple-lines">
    <i class="item-primary">update</i>
    <div class="item-content row items-baseline">
      <q-datetime
        class="full-width"
        type="date"
        v-model="model"
      ></q-datetime>
    </div>
  </div>

  <!-- Date and Time -->
  <div class="item multiple-lines">
    <i class="item-primary">notifications</i>
    <div class="item-content row items-baseline">
      <q-datetime
        class="full-width"
        type="datetime"
        v-model="model"
      ></q-datetime>
    </div>
  </div>
</div>
```
