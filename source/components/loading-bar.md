title: LoadingBar
---
The Quasar LoadingBar plugin offers an easy way to set up your app with a [QAjaxBar](/components/ajax-bar.html) in case you don't want to handle a QAjaxBar component yourself.

For a demo, please visit the QAjaxBar documentation page.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  plugins: ['LoadingBar'],

  config: {
    // optional (v0.17+)
    loadingBar: {
      // QAjaxBar properties
    }
  }
}
```

QAjaxBar properties can be found [here](/components/ajax-bar.html#Vue-Properties).

## Basic Usage
Inside Vue components:
```js
this.$q.loadingBar.start()
this.$q.loadingBar.stop()
this.$q.loadingBar.increment(value)
```

Outside of Vue components:
```
import { LoadingBar } from 'quasar'

LoadingBar.start()
LoadingBar.stop()
LoadingBar.increment(value)
```

## Setting Up Defaults
*Quasar v0.17+*

Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.conf > framework > config > loadingBar: {...} or by calling `LoadingBar.setDefaults({...})` or `this.$q.loadingBar.setDefaults({...})`.
