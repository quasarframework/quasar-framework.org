title: Loading
---
Loading is a feature that you can use to display an overlay with a spinner on top of your App's content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.
<input type="hidden" data-fullpage-demo="progress/loading">

## Installation
Edit `/quasar.conf.js`:
```js
import { Loading } from 'quasar'
framework: {
  plugins: [ Loading ],

  config: {
    // optional (v0.17+)
    loading: {
      // Loading defaults
    }
  }
}
```

## Basic Usage
Loading uses a delay (500ms) to display itself so that quick operations won't make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.

### Show Loading
Inside a Vue component:
```
this.$q.loading.show({
  delay: 400 // ms
})
```

Outside of a Vue component:
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
  spinnerColor: 'white',
  customClass : 'bg-primary'
})
```

### Hide Loading
Inside a Vue component:
```
this.$q.loading.hide()
```

Outside of a Vue component:
``` js
import { Loading } from 'quasar'
Loading.hide()
```

### Check Status
Checking whether the Loading is active is easy.

Inside a Vue component:
```
this.$q.loading.isActive
```

Outside of a Vue component:
``` js
import { Loading } from 'quasar'
(Boolean) Loading.isActive
```

## Setting Up Defaults
*Quasar v0.17+*

Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.conf > framework > config > loading: {...} or by calling `Loading.setDefaults({...})` or `this.$q.loading.setDefaults({...})`.
