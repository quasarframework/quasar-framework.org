title: Swipe Touch/Mouse Action
---

Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: `v-touch-pan`, `v-touch-swipe` and `v-touch-hold`.
> **These directives also work with mouse events, not only touch events**, so you are able to build cool functionality for your App on desktops too.

We will be describing `v-touch-hold` on the lines below.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: [
    'TouchHold'
  ]
}
```
## Basic Usage
``` html
<div v-touch-hold="handler">...</div>
// "handler" is a Function which receives an Object as parameter
```

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
  console.log(obj.psoition) // {x: 22, y: 451}
  console.log(obj.duration) // 78
}
```

## Modifiers
When you don't want to capture mouse actions too, use the `nomouse` modifier:
``` html
<!--
  directive won't be triggered by mouse actions;
  it's exclusively triggered by touch actions now:
-->
<div v-touch-hold.nomouse="userHasSwiped">...</div>
```
