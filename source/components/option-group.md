title: Option Group
---

The Quasar Option Group component is a helper component, which allows you to better control the grouping of binary (as in on or off, true or false, 1 or 0) form input components like check boxes, radios or toggles. A good usage for this component is for offering the user a set of options or settings to turn on and off, and thus the name of the component.

## Basic Usage

For a group of check boxes

```html
<q-option-group
  inline
  type="checkbox"
  color="secondary"
  v-model="group"
  :options="[
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' }
  ]"
/>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` |  Number | **Required** The v-model of the component. |
| `type` | String | The type of input component to be used. The default is `radio`. The other choices are `checkbox` and `toggle`. |
| `options` | Array | An array of objects with `value` and `label` properties. The binary components will be created according to this array. |
| `leftLabe` | Boolean | When set to true, the label will be put on the left side. |
| `inline` | Boolean | Adjusts the display of the binary components fill out the row, instead of being stacked.. |
| `disable` | Boolean | When set to true, the binary components are not selectable. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@focus` | Fired when the component gets focus. |
| `@blur` | Fired when the component loses focus. |

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

And a group of toggles, but in a row (inline).

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

You would normally also add this component inside a [q-field](/components/field.html) component as shown below.

```html
<q-field
  icon="cloud"
  helper="Helper"
  label="Horizontal"
  error-label="Max 10 characters!"
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