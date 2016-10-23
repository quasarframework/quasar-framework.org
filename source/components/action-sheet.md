title: Action Sheet
---
Action Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Action Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation.

The Action Sheet always appears above any other components on the page, and must be dismissed in order to interact with the underlying content. When it is triggered, the rest of the page darkens to give more focus to the Action Sheet options.

<input type="hidden" data-fullpage-demo="global/action-sheet">

> Action Sheets can be displayed as a List or as a gallery, with icons or with avatars.

## Basic Usage
``` js
import { ActionSheet } from 'quasar'

(Object with `close` method) ActionSheet.create(configObj)
```

``` js
import { ActionSheet } from 'quasar'

ActionSheet.create({
  title: 'Article Actions',

  // specify ONLY IF you want gallery mode:
  gallery: true,

  actions: [
    {
      label: 'Delete',

      // Choose one of the following two:
      icon: 'delete', // specify ONLY IF using icon
      avatar: 'assets/some-avatar.png', // specify ONLY IF using avatar

      handler: function() {
        console.log('Deleted Article')
      }
    },
    ...
  ],

  // optional:
  dismiss: {
    label: 'Cancel',
    icon: 'cancel',
    classes: 'text-primary',
    handler: function() {
      // console.log('Cancelled...')
    }
  }
})
```

> **IMPORTANT**
> <br>When user hits the browser/phone/tablet back button, the Action Sheet will get closed automatically. This behavior is disabled when running your App within an iframe though.
> <br>Also, when on a browser, hitting the &lt;ESCAPE&gt; key also closes the Action Sheet.
