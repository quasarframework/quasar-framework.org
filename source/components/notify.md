title: Notify
---
Notify is a Quasar plugin that can display animated QAlerts (floating above everything in your pages) to users in the form of a notification. They are useful for alerting the user of an event and can even engage the user through actions.
<input type="hidden" data-fullpage-demo="popups/notify">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  plugins: ['Notify'],

  config: {
    // optional (v0.17+)
    notify: {
      // Notify defaults
    }
  }
}
```

## Basic Usage
``` js
// outside of a Vue file
import { Notify } from 'quasar'

Notify.create('Danger, Will Robinson! Danger!')
// or with a config object:
Notify.create({
  message: 'Danger, Will Robinson! Danger!'
})

// inside of a Vue file
this.$q.notify('Message')
// or with a config object:
this.$q.notify({...})
```

You can see this notification at the bottom of the demo page screen. Please notice the defaults:

1. The notification is red.
2. It has a timeout of 5000ms.
3. It appears floating at the bottom of the screen.
4. The animation is determined by the position of the notification on screen.

### Config Object
Let's go deeper and analyze the different optional properties available for a notification.

``` js
this.$q.notify({
  // only required parameter is the message:
  message: `A text with your nofification's awesome message`,

  /*
   * All parameters below are optional:
   */

  timeout: 3000, // in milliseconds; 0 means no timeout

  // "type" adds a color and icon,
  // so you don't need to specify them.
  // Available values: 'positive', 'negative', 'warning', 'info'
  type: 'positive',

  color: 'positive',
  textColor: 'black', // if default 'white' doesn't fit

  icon: 'wifi',
  // or
  avatar: 'statics/boy-avatar.png',

  detail: 'Optional detail message.',
  position: 'top-right', // 'top', 'left', 'bottom-left' etc.

  closeBtn: true, // or string as button message e.g. 'dismiss'

  actions: [
    {
      label: 'Snooze',
      icon: 'timer', // optional
      noDismiss: true, // optional, v0.15.11+
      handler: () => {
        console.log('acting')
      }
    },
    {
      label: 'Dismiss',
      handler: () => {
        console.log('dismissed')
      }
    }
  ],

  onDismiss () { // v0.15.11+
    //...
  }
})
```

> **Note**
> If you define any actions, the notification will automatically be dismissed when the user picks it.

## Setting Up Defaults
*Quasar v0.17+*

Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.conf > framework > config > notify: {...} or by calling `Notify.setDefaults({...})` or `this.$q.notify.setDefaults({...})`.

## Programmatically Closing Alert
Notifications are meant to be dismissed only by the user, however for exceptional cases you can do it programmatically. Especially useful when you set indefinite timeout (0).

```js
const dismiss = this.$q.notify({...})
...
dismiss()
```

## Types of Notifications
Quasar offers the possibility to create out of the box notifications for different types of success or failure messages. The Notify types have specific icons and colors.

The types of Notify we are talking about are: `positive` (for success), `negative` (for errors), `warning` and `info`. Here's how to create them:

``` js
this.$q.notify({
  type: 'positive',
  ...
})
```
