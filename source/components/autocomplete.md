title: Autocomplete
---
The Quasar Autocomplete component binds to the parent textfield (eg. QInput, QSearch) and offers suggestions to the user, while the user is typing. The suggestions offered to the user are based on either a static list of results or on an asynchronous function call (eg. containing an Ajax request).
<input type="hidden" data-fullpage-demo="forms/autocomplete">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QAutocomplete']
}
```

## Basic Usage
As long as this component is rendered by Vue, it will capture all Ajax calls.
``` html
<!-- Binds to parent QInput -->
<q-input color="amber" v-model="terms" placeholder="Type 'fre'">
  <q-autocomplete
    @search="search"
    :min-characters="3"
    @selected="selected"
  />
</q-input>

<!-- Binds to parent QSearch -->
<q-search v-model="terms" placeholder="Start typing a country name">
  <q-autocomplete @search="search" @selected="selected" />
</q-search>

<!-- Adds a separator between results -->
<q-search v-model="terms">
  <q-autocomplete
    separator
    @search="search"
    @selected="selected"
  />
</q-search>
```

## Vue Properties
| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| `min-characters` | Number | 1 | How many minimum characters can trigger component to suggest something? |
| `max-results` | Number | 6 | How many results can we display at a time? |
| `static-data` | Object | *None* | Use static suggestions. No need to do an Ajax call. Filtering is provided by Autocomplete component. |
| `filter` | Function | Internal implementation | If provided, autocomplete will perform custom filtering. |
| `debounce` | Number | 500 | Time in milliseconds, between key presses and finding new results. Good for delay, if using AJAX requests. |
| `separator` | Boolean | false | If set to `true`, it ads a delimeter between the values to select from. |

## Vue Methods
No need to trigger these methods manually as they are invoked automatically. Only use them when your use-case is something very specific.

| Vue Method | Description |
| --- | --- |
| `trigger()` | Trigger suggestions (parent textfield must be focused). |
| `hide()` | Hide suggestions Popover. |
| `setValue()` | Set textfield string to the value supplied. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@search(terms, Function done)` | Triggered by the component when a search should start and offer some results. |
| `@selected(item)` | Triggered when user has selected a suggestion. |
| `@show` | Triggered when the selections popup opens. |
| `@hide` | Triggered when selections popup closes. |

Example for `search` event:

``` js
function search (terms, done) {
  // do something with terms, like an Ajax call for example
  // then call done(Array results)

  // DO NOT forget to call done! When no results or an error occured,
  // just call with empty array as param. Example: done([])
}
```

## Using Static Data
When using static data, specify an Object (notice that it uses some properties from [List and List Items](/components/lists-and-list-items.html) components:
``` js
// static-data
[
  // Property name that will be used by filter() to filter the array of objects below.
  field: 'value',

  list: [
    {
      value: 'Romania', // The value given, when selected
      label: 'Romania', // The value displayed as main label for this suggested selection

      sublabel: 'Continent: Europe', // optional
      icon: 'location_city', // optional
      stamp: '18 mil', // optional
      ...
    },
    ...
  ]
]
```

Here is the full list of properties that can be used:

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

```html
<template>
  <q-search inverted color="secondary" v-model="terms" placeholder="Featuring static data">
    <q-autocomplete
      :static-data="{field: 'value', list: countries}"
      @selected="selected"
    />
  </q-search>
</template>

<script>
import countries from 'countries.json'

// See above for the data format for the array of objects with required and optional data
export default {
  data () {
    return {
      terms: '',
      countries
    }
  }
}
</script>
```

## Custom Filter
To perform custom filtering like fuzzy search, provide an optional function with following signature:

```html
<template>
  <q-search v-model="terms">
    <!-- Provide custom filter function -->
    <q-autocomplete
      :filter="myFilter"
      @search="search"
      @selected="selected"
    />
  </q-search>
</template>

<script>
// fuzzysearch (needle, haystack) { return true|false }

export default {
  ...,
  methods: {
    myFilter(terms, { field, list }) {
      const token = terms.toLowerCase();
      return list.filter(item => fuzzysearch(token, item[field].toLowerCase()));
    }
  }
}
</script>
```

## Using Asynchronous Method (Ajax call?)
If you'd like to call up data from the server, you may also do so with the following usage of `search()` method.

```html
<template>
  <q-search v-model="terms" placeholder="Start typing a country name">
    <q-autocomplete @search="search" @selected="selected" />
  </q-search>
</template>

<script>
export default {
  ...
  methods: {
    search (terms, done) {
      // make an AJAX call
      // then call done(Array results)

      // DO NOT forget to call done! When no results or an error occurred,
      // just call with empty array as param. Example: done([])
    }
  },
  ...
}
</script>
```
