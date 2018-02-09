title: Slider
---
Quasar Slider is a great way to make the user specify a number value between a minimum and maximum value, with optional steps between valid values.
<input type="hidden" data-fullpage-demo="forms/slider">

Also check its "sibling", the [Range](/components/range.html) component.
Remember you can use QSlider wrapped by a [QField](/components/field.html) too.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QSlider']
}
```

## Basic Usage

``` html
<q-slider v-model="selectedValue" :min="1" :max="7" />
```

Example with `step`, `label` and `snap`:
``` html
<q-slider
  v-model="selectedValue"
  :min="0"
  :max="10"
  :step="2"
  label
  snap
/>
```

Example with square slider button:
``` html
<q-slider
  v-model="selectedValue"
  :min="0"
  :max="10"
  square
/>
```

## Vue Properties
Supports `v-model` which should be binded to a Number in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `min` | Number | Minimum value of the model. Default is 1. |
| `max` | Number | Maximum value of the model. Default is 5. |
| `label` | Boolean | Popup a label when user clicks/taps on the Range and moves it. |
| `label-always` | Boolean | Always display the label. |
| `label-value` | String | Override default label value. |
| `fill-handle-always` | Boolean | Fill handle even if at minimum value. |
| `step` | Number | Specify step amount between valid values. |
| `decimals` | Number | Specify maximum number of decimals. |
| `snap` | Boolean | Range handler will snap on values, rather than sliding freely; good to use along `step`; also displays step markers on the Range. |
| `markers` | Boolean | Display markers on background, one for each possible value for the model. |
| `square` | Boolean | When `true`. the slider button is square instead of round. |
| `color` | String | One of [Quasar Color Palette](/components/color-palette.html). |
| `error` | Boolean | If set to `true`, the slider is turned red. |
| `warning` | Boolean | If set to `true`, the slider is turned yellowish. |
| `readonly` | Boolean | If set to `true`, the user cannot change model value. |
| `disable` | Boolean | If set to `true`, the user cannot change model value. |

> **IMPORTANT**
> Make sure you choose the `min`, `max` and `step` value correctly. `step` must be a divisor of `max - min`, otherwise the component won't work right. This is because all valid steps must be able to hold an equal position within the `min` and `max` values.

### Overriding Label
In the example below we add a "px" suffix to the label.
``` html
<q-slider
  v-model="model"
  label-always
  :min="-20" :max="20"
  :label-value="`${model}px`"
/>
```

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-slider
  :value="model"
  @change="val => { model = val }"
  :min="0" :max="20"
/>
```

### Coloring
Use one of the Quasar colors from the Color Palette with the `color` prop, like `primary`, `secondary`, `orange-8`, `teal-4`:

``` html
<q-slider
  color="orange"
  v-model="standalone"
  :min="0"
  :max="50"
  label
/>
```

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered immediately on model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |

## Usage Inside of a List

``` html
<q-list>
  <q-item>
    <q-item-side icon="volume_up" />
    <q-item-main>
      <q-slider v-model="standalone" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="brightness_medium" />
    <q-item-main>
      <q-slider v-model="standalone" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="mic" />
    <q-item-main>
      <q-slider v-model="standalone" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
</q-list>
```
