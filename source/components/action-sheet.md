title: Action Sheet
---
Action Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Action Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation.

The Action Sheet always appears above any other components on the page, and must be dismissed in order to interact with the underlying content. When it is triggered, the rest of the page darkens to give more focus to the Action Sheet options.

<input type="hidden" data-fullpage-demo="popups/action-sheet">

Action Sheets can be displayed as a list or as a grid, with icons or with avatars. They can be used either as a component in your Vue file templates, or as a globally available method.

## Basic Usage as a Method
First, we install it:

Edit `/quasar.conf.js`:
```js
framework: {
  plugins: ['ActionSheet']
}
```

Now let's see how we can use it:
``` js
// outside of a Vue file
import { ActionSheet } from 'quasar'
(Promise) ActionSheet.create(configObj)

// inside of a Vue file
(Promise) this.$q.actionSheet(configObj)
```

Basic syntax for the config object:
``` js
this.$q.actionSheet({
  title: 'Article Actions',

  // specify ONLY IF you want grid mode:
  grid: true,

  // optional; change dismiss label (only for iOS theme)
  dismissLabel: 'Quit',

  actions: [
    {
      label: 'Delete',

      // Optional
      color: 'negative',

      // Choose one of the following two:
      icon: 'delete', // specify ONLY IF using icon
      avatar: 'assets/some-avatar.png', // specify ONLY IF using avatar

      // optional; what to do when user chooses this action;
      // Can also be handled later by using the returned Promise
      // and identifying the action from "action" param
      handler () {
        console.log('Deleted Article')
      }
    },

    {}, // optional separator

    ...
  ]
})
```

> **IMPORTANT**
> When user hits the phone/tablet back button (only for Cordova apps), the Action Sheet will get closed automatically.
> Also, when on a desktop browser, hitting the &lt;ESCAPE&gt; key also closes the Action Sheet.

### Handling Outcome
The returning object when creating an ActionSheet is a Promise, so you can leverage the Promise API to handle the outcome:

```js
this.$q.actionSheet({...})
  .then(action => {
    // user picked an action

    console.log(action)
    // { label: 'Joe', ... }
  })
  .catch(() => {
    // user dismissed Action Sheet
  })

// OR with async/await:
async showActionSheet () {
  try {
    const action = await this.$q.actionSheet({...})

    // user picked an action at this point
    console.log(action)
    // { label: 'Joe', ... }
  }
  catch () {
    // user dismissed Action Sheet
  }
}
```

## Basic Usage As a Component
First, we install it:

Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QActionSheet']
}
```

Now let's see how we can use it:
```html
<template>
  <q-action-sheet
    v-model="actionSheet"
    title="Action Sheet"
    @ok="onOk"
    @cancel="onCancel"
    :actions="[
      {
        label: 'Delete',
        icon: 'delete',
        color: 'red',
        handler: deleteAction
      },
      {
        label: 'Share',
        icon: 'share',
        color: 'primary'
      },

      // optional separator
      {},

      // continuing with other actions
      {
        label: 'Play',
        icon: 'gamepad'
      },
      {
        label: 'Favorite',
        icon: 'favorite'
      }
    ]"
  />
</template>

<script>
export default {
  data () {
    // model for QActionSheet example
    return { actionSheet: false }
  },
  methods: {
    // custom handler for one of the actions
    deleteAction () {
      // @ok event will still be triggered
      this.$q.notify('Deleting...')
    },

    // user picked one of the actions
    onOk (item) {
      if (item.handler) {
        // if we've already triggered a handler
        return
      }
      this.$q.notify({
        color: 'secondary',
        message: `Clicked on "${item.label}"`
      })
    },

    // user dismissed ActionSheet
    onCancel () {
      this.$q.notify({
        color: 'tertiary',
        icon: 'done',
        message: 'Action Sheet was dismissed'
      })
    }
  }
}
</script>
```

### QActionSheet Vue Properties
| Vue Property | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | Array of Objects | *yes* | Defining ActionSheet actions |
| `title` | String |  | Title of Action Sheet. |
| `grid` | Boolean |  | Makes it a "tag" type. |
| `dismiss-label` | String |  | Override default i18n "Cancel" label (for iOS theme only) |

### QActionSheet Vue Events
| Vue Property | Description |
| --- | --- |
| `@ok(action)` | User picked an action. |
| `@cancel` | User dismissed ActionSheet. |
| `@show` | ActionSheet has just been showed to the user. |
| `@hide` | ActionSheet has been hidden (regardless of outcome). |
| `@escape-key` | ActionSheet dismissed with ESCAPE key. |
