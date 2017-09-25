title: Dialog Select
---
Dialog Select component offers two types of selection: single selection (using Radios) or multiple selection (using Checkboxes or Toggles). This component opens up a [Dialog](/components/dialog.html) for the selection list and action. If for some reason you want an in-place Popover to open for the selection, use the sibling [Select](/components/select.html) component.
<input type="hidden" data-fullpage-demo="forms/select/dialog-select">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

<input type="hidden" data-fullpage-demo="form/select/dialog">

## Basic Usage

``` html
<template>
  <div>
    <!-- With Radios -->
    <q-dialog-select
      v-model="select"
      :options="selectOptions"
      ok-label="Pick"
      cancel-label="Neah"
      title="Radios"
    />

    <!-- With Checkboxes -->
    <q-dialog-select
      multiple
      v-model="multipleSelect"
      :options="selectOptions"
      ok-label="Pick"
      cancel-label="Neah"
      title="Checkboxes"
    />

    <!-- With Toggles -->
    <q-dialog-select
      multiple toggle
      v-model="multipleSelect"
      :options="selectOptions"
      ok-label="Pick"
      cancel-label="Neah"
      title="Toggles"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ]
    }
  }
}
</script>
```

## Vue Properties
Supports `v-model` which should be the String for single selection and Array for multiple selection.

| Vue Property | Type | Description |
| --- | --- | --- |
| `options` | Array | (**Required**) Array of options (as Objects with required `label` and `value` props - for full list read next sections). |
| `multiple` | Boolean | If set to `true`, multiple selections will be allowed. |
| `toggle` | Boolean | If set to `true`, the selection options will offer a toggle to select them. Needs `multiple` set to `true`. |
| `chips` | Boolean | If set to `true`, the selections will appear as chips (instead of comma separated strings) on the input frame (works for multiple selection only). |
| `frame-color` | String | One from [Quasar Color Palette](/components/color-palette.html). Useful when `color` is to be used for Chips alone and you want a different color for the input frame. |
| `title` | String | The title of Dialog. |
| `message` | String | An additional informational text for the Dialog. |
| `display-value` | String | A text to show in the selection field, after selections have been made. |
| `ok-label` | String | Label for the "OK" button on the Dialog. |
| `cancel-label` | String | Label for "Cancel" button on the Dialog. |

Common input frame properties:

| Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | A text that should be shown before the textfield. |
| `suffix` | String | A text that should be shown after the textfield. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `color` | String | A color from the [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. The color is applied to the background instead. |
| `dark` | Boolean | Is QDialogSelect rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within the textfield. |
| `disable` | Boolean | If set to `true`, the field is disabled and the user cannot select anything. |
| `error` | Boolean | If set to `true`, the input field's colors are changed to show there is an error. |
| `before` | Array of Objects | Icon buttons positioned on the left side of the field. |
| `after` | Array of Objects | Icon buttons on the right side of the field. |

### Icon buttons
This section refers to `before` and `after` properties which can add additional buttons as icons to the textfield. Here is the structure of the two properties:

```js
{
  // required icon
  icon: String,
  // required function to call when
  // icon is clicked/tapped
  handler: Function,

  // Optional. Show icon button
  // if model has a value
  content: Boolean,

  // Optional. Show icon button
  // if textfield is marked with error
  error: Boolean
}
```

Examples:
```html
<!--
  Show an icon button (with 'warning' as icon)
-->
<q-dialog-select
  v-model="selection"
  multiple toggle
  :options="selectListOptions"
  :after="[
    {
      icon: 'warning',
      handler () {
        // do something...
      }
    }
  ]"
/>

<!--
  Show an icon button (with 'arrow_forward' as icon)
  when the model has a non empty value (like something has
  been selected).
-->
<q-dialog-select
  v-model="selection"
  multiple toggle
  :options="selectListOptions"
  :after="[
    {
      icon: 'arrow_forward',
      content: true,
      handler () {
        // do something...
      }
    }
  ]"
/>
```

### The Options Array Format
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

### Working with Display Value
If for some reason you want to have total control over the text in the input frame (replacing the comma delimited option strings), then use `display-value` property:

```html
<q-dialog-select
  :display-value="`${ multipleSelect.length } item${ multipleSelect.length !== 1 ? 's' : '' } selected`"
  multiple
  v-model="multipleSelect"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Checkboxes"
/>
```

For a more elegant solution (and more efficient too), use a computed property:
```html
<template>
  <!-- Notice "display-value" is binded to "text" variable -->
  <q-dialog-select
    :display-value="text"
    multiple
    v-model="multipleSelect"
    :options="selectOptions"
    ok-label="Pick"
    cancel-label="Neah"
    title="Checkboxes"
  />
</template>

<script>
export default {
  data () {
    return {
      multipleSelect: /* value */,
      selectOptions: /* options */
    }
  },
  computed: {
    text () {
      // in this example we want to show how many items are selected,
      // so we need to check model (multipleSelect) length
      return `${this.multipleSelect.length} item${this.multipleSelect.length > 1 ? 's' : ''} selected`
    }
  }
}
</script>
```

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

## More Examples

### Error State
Use the `error` prop, to change the color of the component to red:
``` html
<q-dialog-select
  error
  v-model="select"
  :options="selectOptions"
/>
```
### Disable
Use the `disable` prop, to stop access to the field.
```html
<q-dialog-select
  disable
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
  multiple  
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
Use the `color`, `inverted` and `frame-color` props to control the coloring of the component.
```html
<!-- Color -->
<q-dialog-select
  color="amber"
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
  @change="onChange"
  v-model="select"
  :options="selectOptions"
  ok-label="Pick"
  cancel-label="Neah"
  title="Radios"
/>

<!--
  With a color for chips and a different color for the frame.
  Notice "color" and "frame-color". By default, "color" is used
  for both frame and chips, but specifying a frame-color overrides
  the color for the frame.
-->
<q-dialog-select
  frame-color="amber"
  inverted
  color="dark"
  @change="onChange"
  chips
  float-label="Float Label"
  multiple
  v-model="multipleSelect"
  :options="selectOptions"
  placeholder="Pick Company"
/>
```

> **Note**
> The optional `frame-color` prop is useful when using chips as selected values, so the chips stand out from the background color.

### Usage Inside of a List

``` html
<q-list>
  <q-list-header>Single Selection</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin"  v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin"  v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company" />
    </q-item-main>
  </q-item>
  <q-item-separator />
  <q-list-header>Multiple Selection</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin" multiple v-model="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-dialog-select class="no-margin" multiple toggle v-model="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies" />
    </q-item-main>
  </q-item>
</q-list>
```
