title: Autocomplete
---
The Quasar Autocomplete component binds to a text input field and offers suggestions to the user, while the user is typing. The suggestions offered the user are based on either a static list of results or an Ajax call.

<input type="hidden" data-fullpage-demo="form/autocomplete">

## Basic Usage
As long as this component is rendered by Vue, it will capture all Ajax calls.
``` html
<!-- Binds to a specified textfield -->
<q-input color="amber" v-model="terms" placeholder="Type 'fre'">
  <q-autocomplete
    @search="search"
    :min-characters="3"
    @selected="selected"
  />
</q-input>

<!-- Binds to a textfield from a component, like Search -->
<q-search v-model="terms" placeholder="Start typing a country name">
  <q-autocomplete @search="search" @selected="selected" />
</q-search>

<!-- Adds a delimiter between results -->
<q-search v-model="terms">
  <q-autocomplete
    delimiter
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
| `debounce` | Number | 500 | Time in milliseconds, between key presses and finding new results. Good for delay, if using AJAX requests. |
| `delimiter` | Boolean | false | If set to `true`, it ads a delimeter between the values to select from. |

When using static data, specify an Object (notice that it uses [QItem component props](/components/list-item.html)):
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

      sublabel: 'Continent: Europe', // optional
      icon: 'location_city', // optional
      stamp: '18 mil', // optional
      ...
    },
    ...
  ]
]
```

## Vue Methods
Use the methods, only if you want to trigger the component manually. Ajax calls trigger these methods automatically.

| Vue Method | Description |
| --- | --- |
| `trigger()` | Trigger suggestions. |
| `close()` | Close suggestions popover. |
| `setValue()` | Set textfield string to the value supplied. |
| `move(offset)` | Move selection cursor on suggestions popover by offset (Number, example: 3 for three selections down, -1 for one selection up). |
| `setCurrentSelection()` | Sets the value for the current selection. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@search(terms, Function done)` | Triggered by the component when a search should start and offer some results. |
| `@selected(item)` | Triggered when user has selected a suggestion. |
| `@open` | Triggered when the selections pop-up opens. |
| `@close` | Triggered when selections pop-up closes. |

Example for `search` event:

``` js
function search (terms, done) {
  // do something with terms, like an Ajax call for example
  // then call done(Array results)

  // DO NOT forget to call done! When no results, just call with empty array as param
  // Example: done([])
}
```
