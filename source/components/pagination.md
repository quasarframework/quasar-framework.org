title: Pagination
---
The Quasar Pagination component is available for whenever a pagination system is required. It offers the user a simple UI to help you in moving between pages/items.

There are two modes in which QPagination operates: with buttons only or with an inputbox. The latter mode allows the user to go to a specific page by clicking/tapping on the inputbox, typing the page number then hitting Enter key and if the new page number is within valid limits, the model will be changed accordingly.
<input type="hidden" data-fullpage-demo="navigation/pagination">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QPagination']
}
```

## Basic Usage

``` html
<q-pagination v-model="page" :max="17" />
```

## Vue Properties
Supports `v-model`.

| Vue Property | Type | Description |
| --- | --- | --- |
| `min` | Number | Number of the first page; Default: `1` |
| `max` | Number | (**Required**) Number of last page |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html) |
| `text-color` | String | Text color of current selection button, one from [Quasar Color Palette](/components/color-palette.html) |
| `size` | String | Button size (check "size" prop from Buttons) |
| `input` | Boolean | Use inputbox mode instead of buttons |
| `boundary-links` | Boolean | Show boundary button links |
| `boundary-numbers` | Boolean | Show boundary number buttons |
| `direction-links` | Boolean | Show direction buttons |
| `ellipses` | Boolean | Show ellipses when pages available > "max-pages" prop. |
| `max-pages` | Number | Maximum number of page links to display at a time. |
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

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(newVal)` | Triggered immediately on model value change. |
| `@change(newVal)` | Triggered on lazy model value change. |

## Examples

### With buttons
```html
<q-pagination
  v-model="page"
  :min="1"
  :max="6"
/>
```

### With inputbox
```html
<q-pagination
  input
  v-model="page"
  :min="1"
  :max="6"
/>
```

### With maximum number of links & custom color
```html
<q-pagination
  v-model="page2"
  color="secondary"
  :min="1"
  :max="15"
  :max-pages="6"
/>
```

### With no ellipses
```html
<q-pagination
  v-model="page2"
  color="amber"
  text-color="black"
  :min="1"
  :max="15"
  :max-pages="6"
  :ellipses="false"
/>
```

### With boundary links
```html
<q-pagination
  v-model="page2"
  color="purple"
  :min="1"
  :max="15"
  :max-pages="6"
  boundary-links
/>
```

### With direction links
<q-pagination
  v-model="page2"
  color="teal"
  :min="1"
  :max="15"
  :max-pages="6"
  direction-links
/>
```

### With custom interval
```html
<q-pagination
  v-model="page3"
  :min="5"
  :max="10"
/>
```

### Mix and match
```html
<q-pagination
  v-model="page4"
  color="tertiary"
  :min="7"
  :max="18"
  :max-pages="8"
  boundary-links
  direction-links
/>
```
