title: Autocomplete
---
Autocomplete component binds to a text field and offers suggestions to the user while typing based on a static list of results or an Ajax call.
<input type="hidden" data-fullpage-demo="form/autocomplete">

## Basic Usage
As long as this component is rendered by Vue it will capture all Ajax calls.
``` html
<!-- Fills with its own input field -->
<q-autocomplete v-model="terms" @search="search"></q-autocomplete>

<!-- Binds to a specified textfield -->
<q-autocomplete v-model="terms" @search="search">
  <input v-model="terms" class="full-width" placeholder="Type 'fre'" />
</q-autocomplete>

<!-- Binds to a textfield from a component, like Search -->
<q-autocomplete v-model="terms" :delay="0" @search="search" :max-results="2">
  <!--
    Don't forget to set delay to 0 ^^^
    otherwise you'll get double debounced feedback
  -->
  <q-search v-model="terms"></q-search>
</q-autocomplete>
```

## Vue Properties
| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| `min-characters` | Number | 1 | How many minimum characters can trigger component to suggest something? |
| `max-results` | Number | 6 | How many results can we display at a time? |
| `delay` | Number | 500 | How many milliseconds to wait before triggering a suggestion? |
| `static-data` | Object | *None* | Use static suggestions. No need to do an Ajax call. Filtering is provided by Autocomplete component. |
| `delimiter` | Boolean | false | Should suggestions popover display a delimiter between results? |

When using static data, specify an Object this (notice that it uses [ListItem component props](/components/list-item.html)):
``` js
// static-data
[
  // Property name from array of objects below
  // that will fill input box when suggestion is selected
  field: 'value',

  list: [
    {
      value: 'Romania', // what gets Autocompleted with
      label: 'Romania', // what gets displayed as main label for this suggestion

      secondLabel: 'Continent: Europe', // optional
      icon: 'location_city', // optional
      stamp: '18 mil', // optional
      ...
    },
    ...
  ]
]
```

## Vue Methods
Only if you want to also trigger it manually. Ajax calls trigger these methods automatically.

| Vue Method | Description |
| --- | --- |
| `trigger()` | Trigger suggestions. |
| `close()` | Close suggestions popover. |
| `setValue()` | Set textfield string to the value supplied. |
| `move(offset)` | Move selection cursor on suggestions popover by offset (Number, example: 3 for three selections down, -1 for one selection up). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@search(terms, Function done)` | Triggered by the component when a search should start and offer some results. |
| `@selected(item)` | Triggered when user has selected a suggestion. |
| `@selected(item)` | Triggered when user has selected a suggestion. |
| `@open` | Triggered when the selections pop-up opens. |
| `@closed` | Triggered when selections pop-up closes. |

Example for `search` event:

``` js
function search (terms, done) {
  // do something with terms, like an Ajax call for example
  // then call done(Array results)

  // DO NOT forget to call done! When no results, just call with empty array as param
  // Example: done([])
}
```
