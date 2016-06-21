title: Pull Down to Refresh
---
When you want to allow the user to refresh the content or add newest content.

<input type="hidden" data-fullpage-demo="pull-to-refresh">

## Basic Usage
``` html
<pull-to-refresh :handler="refresher">
  <!-- Content, whatever you like -->
  <p v-for="item in items">
    Lorem ipsum dolor sit amet...
  </p>
</pull-to-refresh>
```

## Attributes
| Element Property | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| `handler` | *Yes* | Function | | Method from VM to be called to load more content |
| `distance` | | Number | 35 | Minimum threshold distance in pixels to determine if releasing will determine a refresh |
| `pull-message` | | String | 'Pull down to refresh' | Message to display before hitting the threshold above |
| `release-message` | | String | 'Release to refresh' | Message to display after hitting the threshold above and before releasing |
| `refresh-message` | | String | 'Refreshing...' | Message to display when refreshing content |
| `refresh-icon` | | String | 'refresh' | Icon to display when refreshing the content, besides the text above |

## Handler
The handler Function (specified as DOM element property) takes one parameter:
``` js
refresher: function(done) {
  // done - Function to call when you made all necessary updates.
  //        DO NOT forget to call it otherwise the refresh message
  //        will continue to be displayed

  // make some Ajax call then call done();
  quasar.make.a.get.request({url: '....'})
    .done(function(items) {
      ....
      done();
    })
    .fail(function() {
      // error encountered
      // but still call done():
      done();
    });
}
```
