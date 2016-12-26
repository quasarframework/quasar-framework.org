title: Pagination
---
Quasar Pagination is a Web Component ready to use where a pagination system is needed.

<input type="hidden" data-fullpage-demo="web-components/pagination">

## Basic Usage

``` html
<q-pagination
  v-model="page"
  :max="17"
></q-pagination>
```

## Vue Properties
| Vue Property | Required | Description |
| --- | --- | --- |
| `min` | | Number of the first page; Default: `1` |
| `max` | Yes | Number of last page |
| `disable` | | Boolean. If no value is provided (empty attribute), then it's considered as set to `true`. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `set(value)` | Parses and sets page number to `value`. |
| `setByOffset(value)` | Parses and sets page number to current value + `value`. Negative values allowed. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered on model value change with the new value. |
