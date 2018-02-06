title: Swipe Touch/Mouse Action
---
Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: `v-touch-pan`, `v-touch-swipe` and `v-touch-hold`.

> **These directives also work with mouse events, not only touch events**, so you are able to build cool functionality for your App on desktops too.

We will be describing `v-touch-swipe` on the lines below.
<input type="hidden" data-fullpage-demo="touch-directives/touch-swipe">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: ['TouchSwipe']
}
```

## Basic Usage
``` html
<div v-touch-swipe="handler">...</div>
// "handler" is a Function which receives an Object as parameter
```

## Handler Parameter
The `handler` function/method is called by the directive when a `swipe` touch action took place on the DOM element and it receives the following parameter:
``` js
{
  evt, // JS Native Event
  direction, // "left", "right", "up" or "down"
  duration, // Number in ms
  distance // {x, y} Distance in pixels covered by swipe on horizontal and vertical
}

// example:
handler (obj) {
  console.log(obj.direction) // "right"
  console.log(obj.duration) // 78
  console.log(obj.distance.x) // 273
}
```

## Modifiers
| Property | Description |
| --- | --- |
| `horizontal` | Capture only horizontal swipe. |
| `vertical` | Capture only vertical swipe. |
| `up`, `right`, `bottom`, `left` | Capture swipe on the respective direction. |
| `noMouse` | Avoid capturing mouse events too. |

Use `horizontal` or `vertical` when you only want to capture horizontal or vertical swipes, or specify which directions are of interest:
``` html
<div v-touch-swipe.horizontal="userHasSwiped">
  Capturing only horizontal swipes.
</div>

<div v-touch-swipe.up.right="userHasSwiped">
  Capturing only swipes to "up" or "right".
</div>
```

### Avoid Capturing Mouse Events
When you don't want to capture mouse actions too, use the `noMouse` modifier:
``` html
<!--
  directive won't be triggered by mouse actions;
  it's exclusively triggered by touch actions now:
-->
<div v-touch-swipe.noMouse="userHasSwiped">...</div>
```
