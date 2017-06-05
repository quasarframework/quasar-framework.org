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
  easing (currentPosition) { // custom easing function
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
