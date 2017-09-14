title: JS Animations
---
You can create animations through Javascript (using RAF - `requestAnimationFrame()`) with Quasar.

``` js
import { animate } from 'quasar'

let id = animate.start({
  name: 'unique-animation-name', // optional, if none is supplied a unique one is created and returned
  from: '0', // current position
  to: '100', // final position
  duration: 300, // duration of the animation
  done (finalPosition) {...}, // function to call when animation is done
  cancel (currentPosition) {...}, // function to call when animation is aborted
  apply (currentPosition) {...}, // function called on each step so you can apply changes
  easing (currentPosition) { // custom easing function, see below
    // ...return transformation of currentPosition...
  }
})
// Starting an animation with same name will abort the previous one

// Stop an animation using its name
animate.stop('unique-animation-name')
// or
animate.stop(id) // id returned from above
```

Example:
``` js
import { animate } from 'quasar'

animate.start({
  from: 6,
  to: 158,
  apply (pos) {
    el.style.maxHeight = `${pos}px`
  },
  done () {
    console.log(`we're done!`)
  }
})
```

## Easing Functions

Easing functions take the current percent progress of the animation (a float between 0 and 1) and return a position multiplier (0 being initial position and 1 being final position).

The following easing functions are included:

 - `ease[In|Out|InOut][Quad|Cubic|Quart|Quint|Circ]`
   - For example, `easeInCubic`. `Quad` through `Quint` get progressively more exaggerated. `Circ` is slightly different (the graph is a quarter circle), it accelerates much faster at the end.
 - `overshoot`
   - Shoots past the end position and returns slowly

[Material Design Curves](https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves):
 - `standard`
   - Use for on-screen movement. Accelerates quickly, decelerates slowly
 - `decelerate`
   - Use for elements entering the screen. Flies in and slowly decelerates (`easeOutCubic`).
 - `accelerate`
   - Use for elements leaving the screen. Accelerates and then leaves at full velocity (`easeInCubic`).
 - `sharp`
   - Use for elements leaving the screen that may return (e.g. navigation bar). Accelerates and decelerates (`easeInOutQuad`)

Example:
``` js
import { animate, easing } from 'quasar'

animate.start({
  from: 0,
  to: 100,
  easing: easing.standard
  ...
})
```

Or with the carousel:
``` html
<template>
  <q-carousel :swipe-easing="overshoot">
    Slides...
  </q-carousel>
</template>
<script>
import { easing, QCarousel } from 'quasar'
export default {
  components: {
    QCarousel
  },
  data: () => ({
    overshoot: easing.overshoot
  })
}
</script>
```
