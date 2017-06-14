title: Select
---
The Quasar Select component has two types of selection: single selection (using Radios or Lists) or multiple selection (using Checkboxes or Toggles). This component opens up a Popover for the selection list and action. A filter can also be used for longer lists. 

If you need a Dialog for the selection, use the [Dialog Select](/components/dialog-select.html) component.

<input type="hidden" data-fullpage-demo="form/select/basic">

## Basic Usage

``` html
<!-- Single Selection using Radios -->
<q-select 
  v-model="select"
  float-label="Is Quasar Awesome?" 
  radio
 :options="selectListOptions"
 :count="10" 
/>

<!-- Single Selection as a simple List -->
<q-select 
  v-model="select"
  :options="selectListOptions"
/>

<!-- Multiple Selection using Checkboxes-->
<q-select 
  multiple
  checkbox 
  v-model="multipleSelect"
  :options="selectListOptions"
  @input="inputChange"
/>

<!-- Multiple Selection using Toggles-->
<q-select 
  multiple
  toggle
  v-model="multipleSelect"
  :options="selectListOptions"
  @input="inputChange"
/>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Object | (**required**) Supports v-model, which should be the selection made or the preselection(s). |
| `options` | Array | (**required**) A list of objects to present as the selection's options. See below for the data format for the array. |
| `Multiple` | Boolean | If set to `true`, multiple selections will be allowed. |
| `radio` | Boolean | If set to `true`, the selection will be through radios. For single selection only. |
| `chips` | Boolean | If set to `true`, the selections will appear as chips. |
| `toggle` | Boolean | If set to `true`, the selection options will offer a toggle to select them.
| `frameColor` | String | A color from the [Quasar Color Palette](/components/color-palette.html). Use this to change the background color of the field. |
| `filter` | Boolean | If set to `true`, the selections will offer input to filter the selection options. |
| `filterPlaceholder` | String | A text to show in the filter input field. Default is "filter". |
| `placeholder` | String | A text to show in the selection field, before a selection is made. |
| `delimiter` | Boolean | If set to `true`, the selection options will be separarted by a line. |
| `display-value` | String | A text to show in the selection field, after selections have been made. |

Because `q-select` builds on top of `q-input-frame`, there are a number of available props from `q-input-frame` made available in `q-select`.

Common input frame properties:

| Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | A text that should be shown before the textfield. |
| `suffix` | String | A text that should be shown after the textfield. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `color` | String | A color from the [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. The color is applied to the background instead. |
| `dark` | Boolean | Is QInput rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within the textfield. |
| `disable` | Boolean | If set to `true`, the field is disabled and the user cannot select anything. |
| `error` | Boolean | If set to `true`, the input field's colors are changed to show there is an error. |
| `before` | Array of Objects | Icon buttons positioned on the left side of field. |
| `after` | Array of Objects | Icon buttons on the right side of the field.

For more information about the `input-frame-component`, please refer to the [q-input component documentation](components/input.html). 

## Vue Methods 

| Vue Method | Description |
| --- | --- |
| `open()` | Opens the Popover |
| `close()` | Closes the Popover |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newValue)`| Triggered on model value change. |
| `@focus` | Triggered, when the field gets focus. |
| `@blur` | Triggered, when the field loses focus. |

## The Options Array Format
Below are examples of the array of options you must use to create the selection options:

Select options object:
``` js
selectOptions: [
  {
    label: 'Google',
    value: 'goog'
  },
  {
    label: 'Facebook',
    value: 'fb'
  },
  ...
]
```
More advanced select list object example:
``` js
selectListOptions: [
  {
    label: 'Google',
    icon: 'search',
    value: 'goog'
  },
  {
    label: 'Facebook',
    inset: true,
    description: 'Enables communication',
    value: 'fb'
  },
  ,
  {
    label: 'Oracle',
    description: 'Some Java for today?',
    icon: 'mail',
    secondIcon: 'alarm',
    value: 'ora'
  },
    label: 'Apple Inc.',
    inset: true,
    stamp: '10 min',
    value: 'appl'
  },
  ...
]
```
**Note** use inset, instead of an icon, so the label text is properly aligned. Stamp is a text to be shown on the right of the selection option. 

### Selection Types
You have a number of possible selection types to choose from. They are straight text with optional icons and stamp values, radios, checkboxes, and toggles. Text is default for single selections and checkboxes are default for multiple selections. 

Use the `radio` prop for single selections. This checkboxes are inserted where the icons would be, so you cannot have icons and checkboxes for multiple selections. If you still want icons with your multiple selections, use the `toggle` prop. This would, however, replace the stamp option. 
```html
<!-- Radios for single selections -->
<q-select 
  radio
  @change="onChange"
  v-model="select"
  float-label="Gogu"
  :options="selectListOptions"
/>

<!-- Toggles for Multiple Selection -->
<q-select 
  toggle 
  multiple
  v-model="multipleSelect"
 :options="selectListOptions"
/>
```
 
### Error State
Use the `error` prop, to change the color of the component to red:
``` html
<q-select 
  error
  multiple
  v-model="multipleSelect"
  :options="selectOptions"
/>
```
### Disable
Use the `disable` prop, to stop access to the field.
```html
<!-- Disabled state -->
  <q-select 
  disable
  float-label="Disabled Select"
  multiple
  v-model="multipleSelect"
  :options="selectOptions"
/>
```
### Labeling
As with any input, you have two options for labels. Stack and Floating.
```html
<!-- Floating Label -->
<q-select 
  float-label="This Label Floats"
  multiple 
  v-model="multipleSelect" 
  :options="selectOptions"
/>

<!-- Stack Label -->
<q-select
  static-label="Company"
  multiple 
  v-model="multipleSelect" 
  :options="selectOptions"
/>
```

### Coloring
Use the `color`, `inverted` and `frameColor` props to control the coloring of the component. 
```html
<!-- Color -->
<q-select 
  color="amber"
  v-model="select"
  :options="selectListOptions"
/>

<!-- Inverted Color -->
<q-select 
  inverted 
  color="secondary"
  v-model="select"
  :options="selectListOptions"
/>

<!-- With a different frame color -->
<q-select 
  frame-color="amber"
  inverted color="dark"
  multiple
  chips
  v-model="multipleSelect"
  :options="selectListOptions"
  float-label="Some label"
  max-height="36px"
/>
```
**Note** The `frame-color` prop is especially useful when using chips as selected values, so the chips stand out from the background color.

## Usage Inside of a List

``` html
<q-list>
  <q-list-header>Single Selection</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-select
        class="no-margin"
        v-model="select"
        :options="selectOptions"
      />
    </q-item-main>
  </q-item>
  <q-item-delimiter />
  <q-list-header>Multiple Selection</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-select
        multiple
        class="no-margin"
        v-model="multipleSelect"
        :options="selectOptions"
      />
    </q-item-main>
  </q-item>
</q-list>
```
