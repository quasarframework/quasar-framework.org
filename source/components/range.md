title: Range
---
The Quasar Range component is a great way to offer the user the selection of a sub-range of values between a minimum and maximum value, with optional steps to select those values. An example use case for the Range component would be to offer a price range selection.

Also check out its "sibling", the [Slider](/components/slider.html) component.
Remember you can use QRange wrapped by a [QField](/components/field.html) too.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

<input type="hidden" data-fullpage-demo="form/range">

## Basic Usage
Notice we are using an object for the selection, which holds values for both the lower value of the selected range - `rangeValues.min` and the higher value - `rangeValues.max`.

``` html
<template>
  <q-range
    v-model="rangeValues"
    :min="0"
    :max="10"
    :step="1"
  />
</template>

<script>
export default {
  data () {
    return {
      // our model here
      rangeValues: {
        min: 2,
        max: 4
      }
    }
  }
}
</script>
```

Example with `step`, `label` and `snap`:
``` html
<q-range
  v-model="rangeValues"
  :min="0"
  :max="10"
  :step="2"
  label
  snap
/>
```

## Vue Properties
Supports `v-model` which should be binded to an Object in your scope with "min" and "max" properties.

| Vue Property | Type | Description |
| --- | --- | --- |
| `min` | Number | (**Required**) Minimum value for beginning of interval. |
| `max` | Number | (**Required**) Maximum value for end of interval. |
| `label` | Boolean | Popup a label when user clicks/taps on the Range. |
| `label-always` | Boolean | Always display the label. |
| `step` | Number | Specify step amount between valid values. |
| `snap` | Boolean | Range handler will snap on values, rather than walking freely; good to use along `step`; also displays step markers on the Range. |
| `markers` | Boolean | Display markers on background, one for each possible value for the model. |
| `square` | Boolean | When `true`. the slider buttons are square instead of round. |
| `color` | String | One of [Quasar Color Palette](/components/color-palette.html). |
| `error` | Boolean | If set to `true`, the range is turned red. |
| `disable` | Boolean | If set to `true`, the user cannot change model value. |
| `drag-range` | Boolean | User can also drag the range (while maintaining interval in this case). |
| `drag-only-range` | Boolean | When `true`, the user can only drag a predetermined range. Range limit values cannot be changed independently. |

> **IMPORTANT**
> Make sure you choose the `min`, `max` and `step` values correctly. `step` must be a divisor of `max - min`, of `v-model.min` and of `v-model.max`, otherwise the component won't work right. This is because all valid steps must be able to hold an equal position within the `min`-`max` values.

### Disabled
Use the `disable` prop to stop the user from changing the range values.
``` html
<q-range v-model="rangeValues" :min="0" :max="50" disable />
```

### Error State
Use the `error` prop to show there is an error. This will turn the `double-range` component red.
``` html
<q-range error v-model="rangeValues" :min="0" :max="50" />
```

### Coloring
Use one of the Quasar colors from the [Color Palette](/components/color-palette.html), like `primary`, `secondary`, `orange-9`, `teal-4` within the `color` prop:

``` html
<q-range color="teal" v-model="rangeValues" :min="0" :max="50" label>
```

### Draging the Range
Use the `drag-range` or `drag-only-range` props, to allow the user to move the selected range or only a predetermined range as a whole.

``` html
<q-range drag-range v-model="rangeValues" :min="0" :max="100" label />

<q-range drag-only-range v-model="rangeValues" :min="0" :max="100" label />
```  

### Adding Markers
Use the `markers` prop, to show the steps available for the range selection.
``` html
<q-range markers v-model="rangeValues" :min="-6" :max="10" :step="2" label snap  />
```

## Usage Inside of a List

``` html
<q-list>
  <q-item>
    <q-item-side icon="local_atm" />
    <q-item-main>
      <q-range v-model="standalone" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="euro symbol" />
    <q-item-main>
      <q-range v-model="standalone" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
</q-list>
```
