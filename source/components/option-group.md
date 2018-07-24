title: Option Group
---
The Quasar Option Group component is a helper component, which allows you to better control the grouping of boolean (as in on or off, true or false, 1 or 0) form input components like checkboxes, radios or toggles. A good usage for this component is for offering the user a set of options or settings to turn on and off, and thus the name of the component.
<input type="hidden" data-fullpage-demo="forms/option-group">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QOptionGroup']
}
```

## Basic Usage

Example on a group of checkboxes:

```html
<template>
  <q-option-group
    color="secondary"
    type="checkbox"
    v-model="group"
    :options="[
      { label: 'Option 1', value: 'op1' },
      { label: 'Option 2', value: 'op2' },
      { label: 'Option 3', value: 'op3' }
    ]"
  />
</template>

<script>
export default {
  data () {
    return {
      // `v-model` binded to `group`,
      // which must be an array for checkboxes and toggles
      group: ['opt1']
    }
  }
}
</script>
```

Example on a group of radios:

```html
<template>
  <q-option-group
    color="secondary"
    type="radio"
    v-model="group"
    :options="[
      { label: 'Option 1', value: 'op1' },
      { label: 'Option 2', value: 'op2' },
      { label: 'Option 3', value: 'op3' }
    ]"
  />
</template>

<script>
export default {
  data () {
    return {
      // `v-model` binded to `group`,
      // which must be a String when using radios
      group: 'opt1'
    }
  }
}
</script>
```

## Vue Properties
Supports `v-model`, which is required. For "radio" type it must be a String, otherwise ("checkbox" or "toggle" type) your scope variable that you bind to `v-model` must be an Array.

| Vue Property | Type | Description |
| --- | --- | --- |
| `type` | String | The type of input component to be used. The default is `radio`. The other choices are `checkbox` and `toggle`. |
| `options` | Array | An array of objects with `value` and `label` properties. The boolean components will be created according to this array. |
| `left-label` | Boolean | When set to `true`, the labels will be put on the left side. |
| `inline` | Boolean | Adjusts the display of the boolean components fill out the row, instead of being stacked vertically. |
| `color` | String | Color from [Quasar Color Palette](/components/color-palette.html). |
| `keep-color` | Boolean | Keep color when not selected/truthy too. |
| `readonly` | Boolean | Set to `true`, to make the boolean components read-only. |
| `disable` | Boolean | When set to `true`, the boolean components are not selectable thus cannot change your `v-model`. |
| `dark` | Boolean | Set to `true` when background is dark. |
| `no-parent-field` | Boolean | Avoid trying to connect to a parent QField. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered immediately when model changes. |
| `@change` | Fired when the component model changes. |
| `@focus` | Fired when the component gets focus. |
| `@blur` | Fired when the component loses focus. |

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-option-group
  type="radio"
  :value="model"
  @change="val => { model = val }"
  :options="[
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' }
  ]"
/>
```

## Other Examples
A group of radios with different colors.
```html
<q-option-group
  type="radio"
  v-model="group"
  :options="[
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2', color: 'secondary' },
    { label: 'Option 3', value: 'op3', color: 'amber' }
  ]"
/>
```

And a group of toggles, but not stacked vertically when possible. We add `inline` Boolean property.

```html
<q-option-group
  inline
  type="toggle"
  v-model="group"
  :options="[
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' }
  ]"
/>
```

You would normally also add this component inside a [QField](/components/field.html) component as shown below.

```html
<q-field
  icon="cloud"
  helper="Choose your option"
  label="Pick something"
  :error="hasError"
  error-label="Select at least one option"
>
  <q-option-group
    type="radio"
    v-model="group"
    :options="[
      { label: 'Option 1', value: 'op1' },
      { label: 'Option 2', value: 'op2' },
      { label: 'Option 3', value: 'op3' }
    ]"
  />
</q-field>
```
