title: Dialog Select
---
The Quasar Dialog Select component offers two types of selection: single selection (using Radios) or multiple selection (using Checkboxes or Toggles).

This component opens up a Dialog Modal, when the user should make a selection. If for some reason you want an in-place Popover to open for the selection, use the basic [Select](/components/select.html) component.

<input type="hidden" data-fullpage-demo="form/select/dialog">

## Basic Usage

``` html
<!-- With Radios -->
<q-dialog-select 
  type="radio"
  @change="onChange"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Radios"
/>

<!-- With Checkboxes -->
<q-dialog-select 
  type="checkbox"
  @change="onChange"
  v-model="multipleSelect"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Checkboxes"
/>

<!-- With Toggles -->
<q-dialog-select 
  type="toggle"
  v-model="multipleSelect"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Toggles"
/>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | String | (**Required**) Model for the Select Component. |
| `options` | Array | (**Required**) Array of options (Object with `label` and `value` properties). |
| `type` | String | (**Required**) The type of selection, `radio`, `checkbox` or `toggle`. |
| `title` | String | The title of Dialog. |
| `message` | String | An additional informational text for the Dialog. |
| `placeholder` | String | Placeholder to use, should no selections be made. |
| `display-value` | String | A text to show in the selection field, after selections have been made. |

Because `q-dialog-select` builds on top of `q-input-frame`, there are a number of available props from `q-input-frame` made available in `q-dialog-select`.

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
| `before` | Array of Objects | Icon buttons positioned on the left side of the field. |
| `after` | Array of Objects | Icon buttons on the right side of the field. |

For more information about the `input-frame-component` props, please refer to the [q-input component documentation](components/input.html). 

## Vue Properties for the Dialog Buttons
| Vue Property | Type | Description |
| --- | --- | --- |
| `okLabel` | String | Label for the "OK" button on the Dialog. |
| `cancelLabel` | String | Label for "Cancel" button on the Dialog. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `pick()` | Opens up the Dialog, so user can pick options. |
| `close()` | Closes the Dialog. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newVal)` | Triggered on model value change. |
| `@focus` | Triggered, when the field gets focus. |
| `@blur` | Triggered, when the field loses focus. |

## Options Array
Below is an example of the array of options you must use to create the selection options:

Options Array example:
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

### Error State
Use the `error` prop, to change the color of the component to red:
``` html
<q-dialog-select 
  error type="radio"
  v-model="select"
  :options="selectOptions"
/>
```
### Disable
Use the `disable` prop, to stop access to the field.
```html
<q-dialog-select
  disable 
  type="radio" 
  v-model="select" 
  :options="selectOptions"
/>
```
### Labeling
As with any input, you have two options for labels. Stack and Floating.
```html
<!-- Floating Label -->
<q-dialog-select 
  float-label="Float Label"
  type="checkbox"  
  v-model="multipleSelect" 
  :options="selectOptions" 
  placeholder="Pick Company"
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
<q-dialog-select
  color="amber" 
  type="radio"
  @change="onChange"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Radios"
/>

<!-- Inverted Color -->
<q-dialog-select
  color="secondary"
  inverted  
  type="radio"
  @change="onChange"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Radios"
/>

<!-- With a different frame color -->
<q-select 
  <q-dialog-select
  frame-color="amber"
  inverted 
  color="dark"
  @change="onChange"
  chips
  float-label="Float Label"
  type="checkbox"
  v-model="multipleSelect" 
  :options="selectOptions" 
  placeholder="Pick Company"
/>
```
**Note** The `frame-color` prop is especially useful when using chips as selected values, so the chips stand out from the background color.


## Inside of a List Usage

``` html
<q-list>
  <q-list-header>Single Selection</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin" type="radio" v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin" type="radio" v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company" />
    </q-item-main>
  </q-item>
  <q-item-delimiter />
  <q-list-header>Multiple Selection</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin" type="checkbox" v-model="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin" type="toggle" v-model="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies" />
    </q-item-main>
  </q-item>
</q-list>
```
