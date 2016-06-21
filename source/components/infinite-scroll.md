title: Infinite Scroll
---
When you want to progressively load new content as the user scrolls down your Page.

<input type="hidden" data-fullpage-demo="infinite-scroll">

## Basic Usage
``` html
<infinite-scroll :handler="loadMore">
  <!-- Content, in this case some <p> tags -->
  <p v-for="item in items" class="caption">
    Lorem ipsum dolor sit amet...
  </p>

  <!--
    slot="message" for DOM element to display (in this example
    a spinner) when loading additional content
  -->
  <spinner slot="message" name="dots" :size="40"></spinner>
</infinite-scroll>
```

## Attributes
| Element Property | Required | Type | Description |
| --- | --- | --- | --- |
| `handler` | *Yes* | Function | Method from VM to be called to load more content |
| `inline` | | *Empty* | Use it when you place your infinite scroll within an overflowed DOM element |

## Handler
The handler Function takes two parameters:
``` js
loadMore: function(index, done) {
  // index - called for nth time
  // done - Function to call when you made all necessary updates.
  //        DO NOT forget to call it otherwise your loading message
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

The `index` parameter can be used to make some sort of pagination on the content you load. It takes numeric values starting with 1 and incrementing with each call.

## Inline Usage
``` html
<infinite-scroll
  :handler="loadMore"
  inline
  style="height: 400px; overflow: auto;"
>
  ...
</infinite-scroll>
```
