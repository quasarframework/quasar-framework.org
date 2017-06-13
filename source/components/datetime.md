title: Datetime
---
The Quasar Datetime component provides a way to manage dates and time. There is also an [inline datetime version](/components/inline-datetime.html) as well.

The iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

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

### Model Variable
Quasar uses its own date utility to work with dates.

> **IMPORTANT**
> The model must be either an empty string (undefined) or a string of form `2016-10-24T10:40:14.674Z` or a shorter derivative of this string, like `2016-10-24` or `2016-10-24T10:40`, or a Unix Time Stamp (including milliseconds).

Here are a few examples:

``` js
import { date } from 'quasar'

// ....
export default {
  data () {
    return {
      model: undefined,
      // ...
    }
  },
  // ...
}

// Or...

// ....
export default {
  data () {10
    return {
      model: 1477298414674,
      // ...
    }
  },
  // ...
}

// Or...

// ....
export default {
  data () {10
    return {
      model: `2016-10-24T10:40:14.674Z`,
      // ...
    }
  },
  // ...
}

// Or for just dates...

// ....
export default {
  data () {10
    return {
      model: `2016-10-24`, // '2016-10-24T10:40' also works
      // ...
    }
  },
  // ...
}
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `type` | String | One of `date`, `time` or `datetime` strings. |
| `format24` | Boolean | Format in MomentJs style of how input displays date and/or time. |
| `min` | String | Minimum value it can take. Has same format as Datetime model. |
| `max` | String | Maximum value it can take. Has same format as Datetime model. |
| `label` | (Floating) label to use. |
| `placeholder` | Placeholder text to use. |
| `static-label` | This label stays on top of the input field. |
| `default-selection` | Set default date/time, when Popover is shown and no value is yet selected. |
| `readonly` | If set to `true`, the model cannot be altered. |
| `disable` | If set to `true`, the model cannot be altered. |

## Vue Properties for the Buttons
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

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newVal)` | Triggered on model value change. |


### Error State
Add `has-error` CSS class:
``` html
<q-datetime
  class="has-error"
  v-model="model"
  type="time"
></q-datetime>
```
### Read Only State

### Disabled




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
