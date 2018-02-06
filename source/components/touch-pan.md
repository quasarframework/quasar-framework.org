title: Panning Touch/Mouse Action
---
Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: `v-touch-pan`, `v-touch-swipe` and `v-touch-hold`.

> **These directives also work with mouse events, not only touch events**, so you are able to build cool functionality for your App on desktops too.

We will be describing `v-touch-pan` on the lines below.
<input type="hidden" data-fullpage-demo="touch-directives/touch-pan">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: ['TouchPan']
}
```

## Basic Usage
``` html
<div v-touch-pan="handler">...</div>
// "handler" is a Function which receives an Object as parameter
```

## Handler Parameter
The `handler` function/method will be called by the directive when a `pan` touch (or with mouse) action is taking place (any change in touch position triggers a call) on the DOM element and it receives the following parameter:
  ``` js
  {
    evt,       // JS Native Event
    position,  // {top, left} Position in pixels
               // where the user's finger is currently at
    direction, // "left", "right", "up" or "down"
    duration,  // Number in ms since "pan" started
    distance,  // {x, y} Distance in pixels covered by panning
               // on horizontal and vertical
    delta,     // {x, y} Distance in pixels since last called handler
    isFirst,   // Boolean; Has panning just been started?
    isFinal    // Boolean; Is panning over?
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
| `horizontal` | Capture only horizontal panning. |
| `vertical` | Capture only vertical panning. |
| `noMouse` | Avoid capturing mouse events too. |
| `stop` | Stop event propagation once panning has been detected. |
| `prevent` | Prevent default browser behavior of the event once panning has been detected. |
| `mightPrevent` | If not using `prevent` prop, but you might call `event.preventDefault()`, specify this modifier otherwise you'll get console warnings. |

Use `horizontal` or `vertical` when you only want to capture horizontal or vertical swipes.
``` html
<div v-touch-pan.horizontal="userHasPanned">...</div>
```

### Avoid Capturing Mouse Events
When you don't want to capture mouse actions too, use the `noMouse` modifier:
``` html
<!--
  directive won't be triggered by mouse actions;
  it's exclusively triggered by touch actions now:
-->
<div v-touch-pan.noMouse="userHasPanned">...</div>
```

### Preventing Scroll (on touch capable devices)
By default, the directive does not block page scrolling. If you want to prevent scrolling, then use the `prevent` modifier.
``` html
<div v-touch-pan.prevent="userHasPanned">...</div>
```
