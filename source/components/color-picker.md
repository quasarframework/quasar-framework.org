title: Color Picker
---
The ColorPicker component provides a method to input colors. There is also one more version available: [Color Input](/components/color-input.html).
<input type="hidden" data-fullpage-demo="forms/color/color-picker">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.
**You might also want to check** [Color Utils](/components/color-utils.html).

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QColorPicker']
}
```

## Basic Usage

``` html
<template>
  <q-color-picker v-model="modelHex" />
</template>

<script>
export default {
  data: () => ({
    modelHex: '#C7044B',

    // and the other types of models:
    modelHexa: '#F0FF1CBF',
    modelRgb: { r: 112, g: 204, b: 55 },
    modelRgba: { r: 138, g: 36, b: 138, a: 64 }
  })
}
```

## Vue Properties
Supports `v-model` which must be a String, Number or Date Object.

| Vue Property | Type | Description |
| --- | --- | --- |
| `dark` | Boolean | Is component rendered on a dark background? |
| `default-value` | String/Number/Date | Default date/time for picker when model is not yet set. |
| `format-model` | String | Data type of model (useful especially when starting out with undefined or null). One of 'auto', 'hex', 'rgb', 'hexa', 'rgba'. |
| `readonly` | Boolean | If set to `true`, component is displayed as read-only. |
| `disable` | Boolean | If set to `true`, component is disabled and the user cannot change model. |

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-color-picker
  :value="model"
  @change="val => { model = val }"
/>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Sets model to empty string (removes current value). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered on immediate model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |

## More Examples

### Coloring
Use the `color` and `inverted`/`inverted-light` props to control the color.
```html
<q-color-picker
  color="amber-7"
  float-label="Float Label"
  v-model="model"
/>

<q-color-picker
  inverted
  color="primary"
  float-label="Float Label"
  v-model="model"
/>
```
Also, if QColor is displayed on a dark background, add the `dark` property.
```html
<q-color-picker dark color="secondary" />
```

