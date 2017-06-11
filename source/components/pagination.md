title: Pagination
---
The Quasar Pagination component is available for whenever a pagination system is required. It offers the user a simple UI to move between pages. 

<input type="hidden" data-fullpage-demo="web-components/pagination">

## Basic Usage

``` html
<q-pagination v-model="page" :max="17" />
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Number  | **Required** The v-model of the pagination component. |
| `min` | Number | Number of the first page; Default: `1` |
| `max` | Number | **Required** Number of last page |
| `disable` | Boolean | If no value is provided (empty attribute), then it's considered as set to `true`. |

If you'd like to set the minimum starting page or the max number of pages, you can do so, as in the example below.

``` html
<q-pagination v-model="page" :min= "minPages" :max="maxPages" />
```
```javascript
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

### Disabling

If you'd like to disable the pagination component, use the `disable` prop. 

``` html
<q-pagination v-model="page" :max="17" disable />
```
