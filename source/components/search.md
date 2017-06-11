title: Search bar
---

<input type="hidden" data-fullpage-demo="form/search">

The Quasar Search component offers the users an input field for searching purposes. 

## Basic Usage

``` html
<q-search v-model="search" />
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | String | **Required** This is the value of the input given by the user. |
| `debounce` | Number | Number of ms to debounce input. Default to 300. |
| `icon` | String | Icon to use. |
| `placeholder` | String | Text to use as a placeholder. |
| `error` | Boolean | If set to `true`, the component is changed to red to indicate a problem. |
| `disable` | Boolean | When set to `true` user can not change model value. |

> **Important** - Please refer to the [q-input component documentation](/components/input.html) for more available props, such as `prefix`, `suffix`, labeling props and others. 

A more involved example:
``` html
<q-search
  v-model="searchModel"
  :debounce="600"
  placeholder="Hotels"
  icon="local_hotel"
/>
```

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `clear()` | Resets the model to an empty string. |
| `clearAndFocus()` | Resets the model to an empty string and gives the input focus. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |
| `@enter` | Triggered when search input gets focus. |


### Coloring
Use the `color` prop with one of the Quasar colors from the [Color Palette](/components/color-palette.html), like `primary`, `secondary`, `orange`, `teal`:

``` html
<q-search color="orange" v-model="search" />
```
Use the `inverted` prop, to change the background of the input to the color 

``` html
<q-search inverted color="orange" v-model="search" />
```
### Error State
Use the `error` prop to show there has been an error. This will turn the component color to red. 
``` html
<q-search error v-model="search" />
<q-search error inverted v-model="search" />
```

### Disable 
Use the `disable` prop to stop user input.
``` html
<q-search disable v-model="search" color="primary" />
```

## Usage with Layout
If you'd like to set search within a layout:
``` html
<q-layout>
  ...
  <q-toolbar slot="header" color="primary">
    <q-search inverted v-model="search" color="secondary" />
  </q-toolbar>
  ...
</q-layout>
```
