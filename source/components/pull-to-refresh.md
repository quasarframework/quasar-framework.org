title: Pull Down to Refresh
---
When you want to allow the user to refresh the content or add newest content.

<input type="hidden" data-fullpage-demo="navigation/pull-to-refresh">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QPullToRefresh']
}
```

## Basic Usage
Use QPullToRefresh component as direct child of your page component, to encapsulate all its content. Refer to the source on the demo for a more detailed example.

``` html
<q-pull-to-refresh :handler="refresher">
  <!-- Content, whatever you like -->
  <p v-for="item in items">
    Lorem ipsum dolor sit amet...
  </p>
</q-pull-to-refresh>
```

> **IMPORTANT**
> Do not wrap `<q-pull-to-refresh>` by a `<div class="layout-padding">`. If you must, place that `<div>` as direct child of `<q-pull-to-refresh>`.

## Vue Properties
| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| `handler` | Function | | **Required** Method from VM to be called to load more content |
| `distance` | Number | 35 | Minimum threshold distance in pixels to determine if releasing will determine a refresh |
| `pull-message` | String | 'Pull down to refresh' | Message to display before hitting the threshold above |
| `release-message` | String | 'Release to refresh' | Message to display after hitting the threshold above and before releasing |
| `refresh-message` | String | 'Refreshing...' | Message to display when refreshing content |
| `refresh-icon` | String | 'refresh' | Icon to display when refreshing the content, besides the text above |
| `inline` | Boolean | false | If the component is not direct child of QPage, set this to "true". |
| `disable` | Boolean | false | When set to `true` it disables its functionality. If no value is provided (empty attribute), then it's considered as set to `true`. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `@trigger` | Triggers a refresh, calling your handler. |

## Handler
The handler Function (specified as DOM element property) takes one parameter:
``` js
{
  methods: {
    refresher (done) {
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise the refresh message
      //        will continue to be displayed

      // make some Ajax call then call done()
    }
  }
}
```
