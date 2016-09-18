title: Pull Down to Refresh
---
When you want to allow the user to refresh the content or add newest content.

<input type="hidden" data-fullpage-demo="web-components/pull-to-refresh">

## Basic Usage
``` html
<quasar-pull-to-refresh :handler="refresher">
  <!-- Content, whatever you like -->
  <p v-for="item in items">
    Lorem ipsum dolor sit amet...
  </p>
</quasar-pull-to-refresh>
```

## Vue Properties
| Vue Property |Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| `handler` | Function | | **Required** Method from VM to be called to load more content |
| `distance` | Number | 35 | Minimum threshold distance in pixels to determine if releasing will determine a refresh |
| `pull-message` | String | 'Pull down to refresh' | Message to display before hitting the threshold above |
| `release-message` | String | 'Release to refresh' | Message to display after hitting the threshold above and before releasing |
| `refresh-message` | String | 'Refreshing...' | Message to display when refreshing content |
| `refresh-icon` | String | 'refresh' | Icon to display when refreshing the content, besides the text above |
| `disable` | Boolean | false | When set to `true` it disables its functionality. If no value is provided (empty attribute), then it's considered as set to `true`. |

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
