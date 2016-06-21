title: Global Progress
---
Global Progress is a feature that you can use to display an overlay with a spinner on top of your App's content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.

This feature is also used by Quasar when it loads Pages.

<input type="hidden" data-fullpage-demo="global-progress">

## Basic Usage
Global Progress uses a delay (500ms) to display itself so that quick operations won't make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.

The default spinner used is `tail`. Read more about Spinners [here](/components/spinners.html).

### Show Global Progress
``` js
// default options
quasar.show.global.progress();

// with a custom delay
quasar.show.global.progress({
  delay: 300 // milliseconds
});

// with a custom spinner
quasar.show.global.progress({
  spinner: 'dots'
})
```

### Hide Global Progress
``` js
quasar.hide.global.progress();
```

### Check Status
Checking whether the Global Progress is active is easy:

``` js
(Boolean) quasar.is.in.global.progress();
```

## Events
There is one event triggered when showing or hiding Global Progress: `app:global-progress`. It is triggered with one Boolean parameter which is `true` when Global Progress is shown and `false` otherwise.
