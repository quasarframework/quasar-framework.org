title: Loading
---
Loading is a feature that you can use to display an overlay with a spinner on top of your App's content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.
<input type="hidden" data-fullpage-demo="progress/loading">

## Basic Usage
Loading uses a delay (500ms) to display itself so that quick operations won't make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.

### Show Loading
``` js
import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from 'quasar'

// default options
Loading.show()

// with a custom delay
Loading.show({
  delay: 300 // milliseconds
})

// customizable (all props available)
Loading.show({
  spinner: QSpinnerGears,
  message: 'Some message',
  messageColor: 'blue',
  spinnerSize: 250, // in pixels
  spinnerColor: 'white'
})
```

### Hide Loading
``` js
import { Loading } from 'quasar'
Loading.hide()
```

### Check Status
Checking whether the Loading is active is easy:

``` js
import { Loading } from 'quasar'
(Boolean) Loading.isActive()
```

## Events
Since this is not a Vue component, events are handled through Quasar's [Global Event Bus](/components/global-event-bus.html). There is one such event triggered when "Loading" is showing or hiding: `app:loading`. It is triggered with one Boolean parameter which is `true` when Loading is shown and `false` otherwise.

Example of capturing the event on the Global Event Bus:
```js
import { Events } from 'quasar'
Events.$on('app:loading', state => {
  console.log(`Loading has become ${state ? 'visible' : 'hidden'}`)
})

// or in a Vue component:
this.$q.events.$on('app:loading', state => {
  console.log(`Loading has become ${state ? 'visible' : 'hidden'}`)
})
// in this case, remember to unregister your handler when
// the Vue component gets destroyed (use `beforeDestroy()` Vue lifecycle hook). See Global Event Bus for more information.
```
