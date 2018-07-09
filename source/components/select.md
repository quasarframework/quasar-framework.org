title: Select
---
Select component has two types of selection: single selection (using Radios or Lists) or multiple selection (using Checkboxes or Toggles). This component opens up a Popover for the selection list and action. A filter can also be used for longer lists.
<input type="hidden" data-fullpage-demo="forms/select">

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QSelect']
}
```

## Basic Usage

``` html
<template>
  <div>
    <!-- Single Selection using Radios -->
    <q-select
      v-model="select"
      float-label="Is Quasar Awesome?"
      radio
     :options="selectOptions"
    />

    <!-- Single Selection as a simple List -->
    <q-select
      v-model="select"
      :options="selectOptions"
    />

    <!-- Multiple Selection using Checkboxes by default -->
    <q-select
      multiple
      v-model="multipleSelect"
      :options="selectOptions"
    />

    <!-- Multiple Selection using Toggles -->
    <q-select
      multiple
      toggle
      v-model="multipleSelect"
      :options="selectOptions"
      @change="inputChange"
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
| `options` | Array | (**Required**) A list of objects to present as the selection's options. See below for the data format for the array. |
| `multiple` | Boolean | If set to `true`, multiple selections will be allowed. |
| `radio` | Boolean | If set to `true`, the selection will be through radios. For single selection only. |
| `toggle` | Boolean | If set to `true`, the selection options will offer a toggle to select them. |
| `chips` | Boolean | If set to `true`, the selections will appear as chips (instead of comma separated strings) on the input frame (works for multiple selection only). |
| `chips-color` | String | Override default children chips text color. |
| `chips-bg-color` | String | Override default children chips background color. |
| `readonly` | Boolean | If set to `true`, select is readonly and the user cannot change model. |
| `filter` | Boolean | If set to `true`, the selections will offer an input to filter the selection options. |
| `autofocus-filter` | Boolean | Auto-focus on the filter input field (if available) when opening selection. |
| `filter-placeholder` | String | A text to show in the filter input field. Default is "Filter". |
| `separator` | Boolean | If set to `true`, the selection options will be separated by a line. |
| `display-value` | String | Overrides text displayed in input frame. See "Working with Display Value" section below. |
| `placeholder` | String | Placeholder text. |
| `clearable` | Boolean | If set to `true`, the component offers the user an actionable icon to remove the current selection. |
| `no-icon` | Boolean | Use no icon on left side |

Common input frame properties:

| Property | Type | Description |
| --- | --- | --- |
| `prefix` | String | A text that should be shown before the textfield. |
| `suffix` | String | A text that should be shown after the textfield. |
| `float-label` | String | A text label that will "float" up above the input field, once the input field gets focus. |
| `stack-label` | String | A text label that will be shown above the input field and is static. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Inverted mode. Color is applied to background instead. |
| `inverted-light` | Boolean | Inverted mode with a light color. Color is applied to background instead. |
| `hide-underline` | Boolean | Hides the bottom border. |
| `dark` | Boolean | Is it rendered on a dark background? |
| `align` | String | One of 'left', 'center' or 'right' which determines the text align within the textfield. |
| `disable` | Boolean | If set to `true`, the field is disabled and the user cannot select anything. |
| `warning` | Boolean | If set to true, the component colors are changed to show there is a warning. |
| `error` | Boolean | If set to `true`, the input field's colors are changed to show there is an error. |
| `before` | Array of Objects | Icon buttons positioned on the left side of field. |
| `after` | Array of Objects | Icon buttons on the right side of the field.

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
<q-select
  v-model="selection"
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
<q-select
  v-model="selection"
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

### Selection Types
You have a number of possible selection types to choose from. They are straight text with optional icons and stamp values, radios, checkboxes, and toggles. Text is default for single selections and checkboxes are default for multiple selections.

Use the `radio` prop for single selections. These checkboxes are inserted where the icons would be, so you cannot have icons and checkboxes for multiple selections. If you still want icons with your multiple selections, use the `toggle` prop. This would, however, replace the stamp option.

```html
<!-- Radios for single selections -->
<q-select
  radio
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
    sublabel: 'Enables communication',
    value: 'fb'
  },
  {
    label: 'Oracle',
    sublabel: 'Some Java for today?',

    icon: 'mail',
    leftColor: 'secondary', // color for left side, whatever it is (icon, letter, ...)

    rightIcon: 'alarm',
    rightColor: 'negative', // color for right side, whatever it is (icon, letter, ...)

    value: 'ora'
  },
  {
    label: 'Apple Inc.',
    inset: true,
    stamp: '10 min',
    value: 'appl'
  },
  ...
]
```
> **Note**
> Set "inset" to `true`, instead of an icon, so the label text is properly aligned with the other options that use icons or avatars.

Use an Object for each option like above (notice that it uses some properties from [List and List Items](/components/lists-and-list-items.html) components, like "label", "sublabel", "stamp", "icon", "rightIcon" and so on. Here is the full list of properties that can be used for each option:

| Property | Type | Description |
| --- | --- | --- |
| `leftColor` | String | Color for left side from [Quasar Color Palette](/components/color-palette.html). |
| `icon` | String | Icon on the left to use. |
| `avatar` | String | URL pointing to statics for an avatar. |
| `letter` | String | One character String. |
| `leftInverted` | Boolean | Invert mode, but only for icon and letter. |
| `leftTextColor` | String | Override default "white" text-color when using an icon or letter only. |
| `image` | String | URL pointing to statics for an image. |
| `label` | String | Main label of the selection. |
| `sublabel` | String | Sub-label of the selection. |
| `labelLines` | String/Number | Number of lines that label can expand to. |
| `sublabelLines` | String/Number | Number of lines that the sublabel can expand to. |
| `inset` | Boolean | Inset Label if no left-side is specified (no icon, avatar, letter or image). |
| `rightColor` | String | Color for right side from [Quasar Color Palette](/components/color-palette.html). |
| `rightIcon` | String | Icon on the right to use. |
| `rightAvatar` | String | URL pointing to statics for an avatar on right side. |
| `rightLetter` | String | One character String for right side. |
| `rightImage` | String | URL pointing to statics for an image on right side. |
| `rightInverted` | Boolean | Invert mode, but only for icon and letter. |
| `rightTextColor` | String | Override default "white" text-color when using an icon or letter only. |
| `stamp` | String | Stamp to use for right side. Example: '10 min ago'. |

### Working with Display Value
If for some reason you want to have total control over the text in the input frame (replacing the comma delimited option strings), then use `display-value` property:

```html
<q-select
  :display-value="`${ multipleSelect.length } item${ multipleSelect.length !== 1 ? 's' : '' } selected`"
  multiple
  v-model="multipleSelect"
  float-label="Select a company"
  :options="selectLongListOptions"
/>
```

For a more elegant solution (and more efficient too), use a computed property:
```html
<template>
  <!-- Notice "display-value" is binded to "text" variable -->
  <q-select
    :display-value="text"
    multiple
    v-model="multipleSelect"
    float-label="Select a company"
    :options="selectLongListOptions"
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

### Lazy Input
Vue will soon supply the `.lazy` modifier for v-model on components too, but until then, you can use the longer equivalent form:
```html
<q-select
  :value="model"
  @change="val => { model = val }"
  :options="selectOptions"
/>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `show()` | Opens the Popover |
| `hide()` | Closes the Popover |
| `clear()` | Resets the model to an empty string. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered immediately on model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |
| `@clear(clearVal)` | Triggered when the model is cleared. |
| `@focus` | Triggered when the field gets focus. |
| `@blur` | Triggered when the field loses focus. |

## More Examples

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
As with any input, you have two options for labels. Stack and Floating. Unless you wrap it with a QField which has its own label.
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
Use the `color`, `inverted` and `frame-color` props to control the coloring of the component.
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

<!--
  With custom colors for Chips.
-->
<q-select
  color="amber"
  chips-color="yellow"
  chips-bg-color="black"
  inverted-light
  multiple
  chips
  v-model="multipleSelect"
  :options="selectListOptions"
  float-label="Some label"
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
      <q-select
        class="no-margin"
        v-model="select"
        :options="selectOptions"
      />
    </q-item-main>
  </q-item>
  <q-item-separator />
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
