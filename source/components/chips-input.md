title: Chips Input
---
The Quasar Chips Input allows user to enter a group of text items, which is also editable in the form of quick deletion of the Chips in the list.

For more details on Chips used within Chips Input, please refer to its [documentation](/components/chip.html).

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

<input type="hidden" data-fullpage-demo="form/text-input/chips">

## Basic Usage

``` html
<q-chips v-model="model" />

<!-- Disabled -->
<q-chips v-model="model" disable />

<!-- With floating label -->
<q-chips v-model="model" float-label="Floating Label" />

<!-- With custom placeholder -->
<q-chips v-model="model" placeholder="Type some names" />

<!-- On error state -->
<q-chips v-model="model" error />
```

> The model variable must be an Array.

The user can remove a Chip by clicking/tapping on the `close` icon. Adding a Chip is done by clicking/tapping on the component, typing and then hitting the `send` icon or `<ENTER>` key. Pressing Backspace key either removes content of the textfield or if that is empty then the last Chip.

## Vue Properties
Supports `v-model` which should be binded to an Array of Strings in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | Prefix before Chips |
| `suffix` | String | Suffix after Chips |
| `stack-label` | String | Stacked Label. Use this or `float-label`, but not both. |
| `float-label` | String | Floating Label. Use this or `stack-label`, but not both. |
| `error` | Boolean | Does ChipsInput has an error? |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). See "Coloring" section. |
| `frame-color` | String | One from [Quasar Color Palette](/components/color-palette.html). See "Coloring" section. |
| `inverted` | Boolean | Coloring Background. See "Coloring" section. |
| `dark` | Boolean | Is ChipsInput used on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' to align textfield content within ChipsInput. |
| `autofocus` | Boolean | Automatically focus on textfield after render. |
| `placeholder` | String | Placeholder for the textfield. |
| `max-length` | Number/String | Maximum number of characters that the textfield should support. |
| `readonly` | Boolean | If readonly user can not add or remove chips. |
| `disable` | Boolean | If disabled user can not add or remove chips. |

### Coloring
As you may have noticed above, there's a "color" and "frame-color" along "inverted" and "dark" properties.
By default, if you only use "color" then the input frame and Chips will share the color. If there's also a "frame-color" specified then the input frame color can differ from Chips' one.
When you want the frame inverted (color is applied to background), then specify "inverted" property.
When used on a dark background, specify "dark" property.

```html
<!-- Use a color. -->
<q-chips-input color="secondary" v-model="model" />

<!-- Use a color on inverted mode (background gets colored). -->
<q-chips-input color="secondary" v-model="model" />

<!--
  Using "frame-color" for the input frame,
  and "color" for the color of Chips.
-->
<q-chips-input color="dark" bg-color="amber" v-model="model" />

<!--
  Using "frame-color" for the input frame,
  and "color" for the color of Chips
  on inverted mode (frame-color is applied as background).
-->
<q-chips-input color="dark" bg-color="amber" v-model="model" />

<!--
  When we use the component on a dark background,
  so we specify "dark" property.
-->
<div class="bg-grey-9" style="padding: 15px">
  <q-chips-input dark color="amber" v-model="model" />
</div>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `add(value)` | Adds `value` to the model. |
| `remove(index)` | Removes value at `index` in model. |
| `focus()` | Focuses the input text field within Chips Input. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newVal)` | Triggered on model value change. |

## More Examples

### Wrapped with QField
```html
<q-field
  icon="account_box"
  label="Birthday"
  :count="10"
  helper="Some helper here"
>
  <q-chips-input float-label="Float Label" v-model="model" />
</q-field>
```

### Usage Inside of a List
``` html
<q-list>
  <q-item multiline>
    <q-item-side icon="edit" />
    <q-item-main>
      <q-chips-input v-model="model" class="no-margin" placeholder="Type names"/>
    </q-item-main>
  </q-item>
</q-list>
```
