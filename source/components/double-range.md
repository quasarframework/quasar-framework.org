title: Double Range
---
The Quasar Double Range component is a great way to offer the user the selection of a sub-range of values between a minimum and maximum value, with optional steps to select those values. An example use case for the Double Range component would be to offer a price range selection.

Also check out its "sibling", the [Range](/components/range.html) component.

<input type="hidden" data-fullpage-demo="form/range/double">

## Basic Usage

Notice we are using an object for the selection, which holds values for both the lower value of the selected range - `rangeValues.min` and the higher value - `rangeValues.max`.
``` html
<q-double-range v-model="rangeValues" :min="0" :max="10" :step="1" label snap>
```
```javascript
<script>
export default {
  data () {
    return {
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
<q-double-range v-model="rangeValues" :min="0" :max="10" :step="2" label snap />
```


## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `min` | Number | **Required** Minimum value for beginning of interval. |
| `max` | Number | **Required** Maximum value for end of interval. |
| `label` | Boolean | Popup a label when user clicks/taps on the Range. |
| `labelAlways` | Boolean | Always display the label. |
| `step` | Number | Specify step amount between valid values. |
| `snap` | Boolean | Range handler will snap on values, rather than walking freely; good to use along `step`; also displays step markers on the Range. |
| `markers` | Boolean | Display markers on background, one for each possible value for the model. |
| `drag-range` | Boolean | User can also drag the range (while maintaining interval). |
| `disable-min` | Boolean | User won't be able to change the minimum value. |
| `disable-max` | Boolean | User won't be able to change the maximum value. |
| `disable` | Boolean | When `true` user cannot change interval. |
| `dragRange` | Boolean | When `true`, the user can also drag the selected range too. |
| `dragRangeOnly` | Boolean | When `true`, the user can only drag a predetermined range. The cannot change range values independently. |

> **IMPORTANT**
> Make sure you choose the `min`, `max` and `step` values correctly. `step` must be a divisor of `max - min`, of `v-model.min` and of `v-model.max`, otherwise the component won't work right. This is because all valid steps must be able to hold an equal position within the `min`-`max` values.

### Disabled
Use the `disable` prop to stop the user from changing the range values.
``` html
<q-double-range v-model="rangeValues" :min="0" :max="50" disable />
```

### Error State
Use the `error` prop to show there is an error. This will turn the `double-range` component red.
``` html
<q-double-range error v-model="rangeValues" :min="0" :max="50" />
```

### Coloring
Use one of the Quasar colors from the [Color Palette](/components/color-palette.html), like `primary`, `secondary`, `orange`, `teal` within the `color` prop:

``` html
<q-double-range color="teal" v-model="rangeValues" :min="0" :max="50" label>
```

### Draging the Range
Use the `dragRange` or `dragRangeOnly` props, to allow the user to move the selected range or only a predetermined range as a whole.

``` html
<q-double-range drag-range v-model="rangeValues" :min="0" :max="100" label />

<q-double-range drag-only-range v-model="rangeValues" :min="0" :max="100" label />
```  

### Adding Markers
Use the `markers` prop, to show the steps available for the range selection. 
``` html
<q-double-range markers v-model="rangeValues" :min="-6" :max="10" :step="2" label snap  />
```

## Inside of a List Usage

``` html
<q-list>
  <q-item>
    <q-item-side icon="local_atm" />
    <q-item-main>
      <q-double-range v-model="dollarValues" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="euro symbol" />
    <q-item-main>
      <q-double-range v-model="euroValues" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
</q-list>
```
