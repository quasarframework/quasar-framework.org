title: Pagination
---
The Quasar Pagination component is available for whenever a pagination system is required. It offers the user a simple UI to move between pages.

If user wants to go to a specific page, it can click/tap on the inputbox within Pagination, type the page number then hit Enter key and if the new page number is within valid limits, the model will be changed accordingly.

<input type="hidden" data-fullpage-demo="navigation/pagination">

## Basic Usage

``` html
<q-pagination v-model="page" :max="17" />
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Number  | (**Required**) The v-model of the pagination component. |
| `min` | Number | Number of the first page; Default: `1` |
| `max` | Number | (**Required**) Number of last page |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html) |
| `disable` | Boolean | If no value is provided (empty attribute), then it's considered as set to `true`. |

If you'd like to set the minimum starting page or the max number of pages, you can do so, as in the example below.

```html
<template>
  <q-pagination v-model="page" :min="minPages" :max="maxPages" />
</template>

<script>
export default {
  data () {
    return {
      page: 4,
      minPages: 4,
      maxPages: 27
    }
  }
}
</script>
```
This will cause the pagination to initially render to page 4 and not allow the user to go below page 4.

### Coloring
Use one of the Quasar colors from the Color Palette with the `color` prop, like `primary`, `secondary`, `orange-8`, `teal-4`:

``` html
<q-pagination
  color="orange"
  v-model="standalone"
  :max="50"
/>
```

### Disabling
If you'd like to disable the pagination component, use the `disable` prop.

``` html
<q-pagination v-model="page" :max="17" disable />
```
