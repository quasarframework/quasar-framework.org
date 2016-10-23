title: Loading
---
Loading is a feature that you can use to display an overlay with a spinner on top of your App's content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.

<input type="hidden" data-fullpage-demo="global/loading">

## Basic Usage
Loading uses a delay (500ms) to display itself so that quick operations won't make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.

The default spinner used is `tail` for Material Design theme and 'ios' for iOS one. Read more about Spinners [here](/components/spinners.html).

### Show Loading
``` js
import { Loading } from 'quasar'

// default options
Loading.show()

// with a custom delay
Loading.show({
  delay: 300 // milliseconds
})

// customizable
Loading.show({
  message: 'Some message',
  messageColor: '#00ff00',
  spinner: 'dots',
  spinnerSize: 250, // in pixels
  spinnerColor: '#f034a3'
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
There is one event triggered when showing or hiding Loading: `app:loading`. It is triggered with one Boolean parameter which is `true` when Loading is shown and `false` otherwise.

 See [Quasar Events API](/api/js-events.html#Loading) for more details.
