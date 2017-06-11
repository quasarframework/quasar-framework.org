title: Range
---
Quasar Range is a great way to make the user specify a number value between a minimum and maximum value, with optional steps between valid values.

Also check its "sibling", the [Double Range](/components/double-range.html) component.

<input type="hidden" data-fullpage-demo="form/range/basic">

## Basic Usage

``` html
<q-range v-model="selectedValue" :min="1" :max="7"></q-range>
```

Example with `step`, `label` and `snap`:
``` html
<q-range v-model="selectedValue" :min="0" :max="10" :step="2" label snap></q-range>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `min` | Number | Minimum value of the model. Default is 1. |
| `max` | Number | Maximum value of the model. Default is 5. |
| `label` | Boolean | Popup a label when user clicks/taps on the Range. |
| `labelAlways` | Boolean | Always display the label. |
| `step` | Number | Specify step amount between valid values. |
| `snap` | Boolean | Range handler will snap on values, rather than sliding freely; good to use along `step`; also displays step markers on the Range. |
| `markers` | Boolean | Display markers on background, one for each possible value for the model. |
| `square` | Boolean | When `true`. the slider button is square instead of round. |
| `color` | String | The [Quasar Color](/components/color-palette.html) of the range component. |
| `error` | Boolean | If set to `true`, the range is turned red. |
| `disable` | Boolean | If set to `true`, the user cannot change model value. |

> **IMPORTANT**
> Make sure you choose the `min`, `max` and `step` value correctly. `step` must be a divisor of `max - min`, otherwise the component won't work right. This is because all valid steps must be able to hold an equal position within the `min` and `max` values.

### Error State
Use the `error` prop to indicate there is an error. This will turn the component red:
``` html
<q-range error v-model="selectedValue" :min="0" :max="50" />
```

### Disabled
Use the `disable` prop to stop the user from changing the range values.
``` html
<q-range v-model="selectedValue" :min="0" :max="50" disable />
```

### Coloring
Use one of the Quasar colors from the Color Palette with the `color` prop, like `primary`, `secondary`, `orange`, `teal`:

``` html
<q-range color="orange" v-model="standalone" :min="0" :max="50" label />
```

## Inside of a List Usage

``` html
<q-list>
  <q-item>
    <q-item-side icon="volume_up" />
    <q-item-main>
      <q-range v-model="volume" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="brightness_medium" />
    <q-item-main>
      <q-range v-model="brightness" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="mic" />
    <q-item-main>
      <q-range v-model="micLevel" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
</q-list>
```
