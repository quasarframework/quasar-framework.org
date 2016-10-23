title: Infinite Scroll
---
When you want to progressively load new content as the user scrolls down your Page.

<input type="hidden" data-fullpage-demo="web-components/infinite-scroll">

## Basic Usage
``` html
<quasar-infinite-scroll :handler="loadMore">
  <!-- Content, in this case some <p> tags -->
  <p v-for="item in items" class="caption">
    Lorem ipsum dolor sit amet...
  </p>

  <!--
    slot="message" for DOM element to display (in this example
    a spinner) when loading additional content
  -->
  <spinner slot="message" name="dots" :size="40"></spinner>
</quasar-infinite-scroll>
```

> **IMPORTANT**
> Infinite Scroll loads items in advance when less than one screen height is left to be seen. If the content you fetch has height less than the container's height on screen then Infinite Scroll will continue loading more content. So make sure you load enough content.

## Vue Properties
| Vue Property | Required | Type | Description |
| --- | --- | --- | --- |
| `handler` | *Yes* | Function | Method from VM to be called to load more content |
| `inline` | | *Empty* | Use it when you place your infinite scroll within an overflowed DOM element |
| `offset` | | Number | Offset (pixels) to bottom of Infinite Scroll container from which the component should start loading more content in advance. Default it's one container height. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `loadMore()` | Tells Infinite Scroll to load more content, regardless of the scroll position. |
| `reset()` | Resets calling index to 0. |
| `stop()` | Stops working, regardless of scroll position. |
| `resume()` | Starts working. Checks scroll position upon call and if trigger is hit, it loads more content. |
| `poll()` | Checks scroll position and loads more content if necessary. |

## Handler
The handler Function takes two parameters:
``` js
loadMore: function(index, done) {
  // index - called for nth time
  // done - Function to call when you made all necessary updates.
  //        DO NOT forget to call it otherwise your loading message
  //        will continue to be displayed

  // make some Ajax call then call done()
}
```

The `index` parameter can be used to make some sort of pagination on the content you load. It takes numeric values starting with 1 and incrementing with each call.

## Inline Usage
Use it when you place your infinite scroll within an overflowed DOM element.

``` html
<quasar-infinite-scroll
  :handler="loadMore"
  inline
  style="height: 400px; overflow: auto;"
>
  ...
</quasar-infinite-scroll>
```

## Controlling Infinite Scroll
If for some reason you need to control the working state of Infinite Scroll component, use a Vue reference and call methods from above.

``` html
<quasar-infinite-scroll
  :handler="loadMore"
  v-ref:infinite-scroll
>
  ...
  <button @click="$refs.infiniteScroll.stop()">
    Stop Loading More
  </button>
  ...
</quasar-infinite-scroll>
```
