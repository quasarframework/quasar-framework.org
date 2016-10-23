title: Touch Directives
---

Quasar offers the following touch directives: `v-swipe`, `v-pan` and `v-hold`.

> **These directives also work with mouse events, not only touch events**, so you are able to build cool functionality for your App on desktops too.

## Directive "v-swipe"
* **Basic Usage**:
  ``` html
  <div v-swipe="handler">...</div>
  // "handler" is a Function which receives an Object as parameter
  ```
* **Parameter**: The `handler` function/method is called by the directive when a `swipe` touch action took place on the DOM element and it receives the following parameter:
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
* **Modifiers**: `horizontal` or `vertical`
  Use it when you only want to capture horizontal or vertical swipes.
  ``` html
  <div v-swipe.horizontal="userHasSwiped">...</div>
  ```

> Directive allows vertical scroll when capturing only horizontal swipes.

## Directive "v-pan"
* **Basic Usage**:
  ``` html
  <div v-pan="handler">...</div>
  // "handler" is a Function which receives an Object as parameter
  ```
* **Parameter**: The `handler` function/method will be called by the directive when a `pan` touch action is taking place (any change in touch position triggers a call) on the DOM element and it receives the following parameter:
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
    isFirst,   // Has panning just been started?
    isFinal    // Is panning over?
  }

  // example:
  handler (obj) {
    console.log(obj.direction) // "right"
    console.log(obj.duration) // 78
    console.log(obj.distance.x) // 273
  }
  ```
* **Modifiers**: `horizontal` or `vertical`
  Use it when you only want to capture horizontal or vertical swipes.
  ``` html
  <div v-pan.horizontal="userSwiped">...</div>
  ```

> Directive allows vertical scroll when capturing only horizontal panning.

## Directive "v-hold"
* **Usage**:
  ``` html
  <div v-hold="handler">...</div>
  // "handler" is a Function which receives no parameters
  ```

> Directive triggers your handle function/method if user keeps touching/clicking for 800ms (without moving position) and also allows vertical scroll.
