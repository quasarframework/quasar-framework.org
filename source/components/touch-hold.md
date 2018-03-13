title: Touch/Mouse Hold Action
---
Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: `v-touch-pan`, `v-touch-swipe` and `v-touch-hold`.

> **These directives also work with mouse events, not only touch events**, so you are able to build cool functionality for your App on desktops too.

We will be describing `v-touch-hold` on the lines below.
<input type="hidden" data-fullpage-demo="touch-directives/touch-hold">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: ['TouchHold']
}
```
## Basic Usage
``` html
<div v-touch-hold="handler">...</div>
```
"`handler`" is a Function which receives an Object as parameter.
Please note that the default "hold" duration is 800ms. This means that your `handler` function will run after 800ms.

## Handler Parameter
The `handler` function/method is called by the directive when user taps/clicks and holds on the DOM element and it receives the following parameter:
``` js
{
  evt, // JS Native Event
  position: // {x, y} offset on screen
  duration // Number in ms
}

// example:
handler (obj) {
  console.log(obj.position) // {x: 22, y: 451}
  console.log(obj.duration) // 800
}
```

## Modifiers
| Property | Description |
| --- | --- |
| `noMouse` | Avoid capturing mouse events too. |
| `stop` | Stop event propagation once holding has been detected. |
| `prevent` | Prevent default browser behavior of the event once holding has been detected. |

### Avoid Capturing Mouse Events
When you don't want to capture mouse actions too, use the `noMouse` modifier:
``` html
<!--
  directive won't be triggered by mouse actions;
  it's exclusively triggered by touch actions now:
-->
<div v-touch-hold.noMouse="userHasHold">...</div>
```

### Preventing Scroll (on touch capable devices)
By default, the directive does not block page scrolling. If you want to prevent scrolling, then use the `prevent` modifier.
``` html
<div v-touch-hold.prevent="userHasHold">...</div>
```
